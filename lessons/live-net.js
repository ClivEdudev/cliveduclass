/* Live game networking: a tiny MQTT 3.1.1 client over WebSocket (QoS 0, retained messages).
   The teacher's device hosts the game; phones talk to it through a free public MQTT broker.
   A room code is 5 letters plus 1 digit; the digit says which broker the room uses. */
(function () {
  "use strict";
  const BROKERS = [
    "wss://broker.emqx.io:8084/mqtt",
    "wss://broker.hivemq.com:8884/mqtt",
    "wss://test.mosquitto.org:8081/mqtt"
  ];
  /* ?broker=url[,url] replaces the public servers (used for testing) */
  const overrides = (() => { try { const b = new URLSearchParams(location.search).get("broker"); return b ? b.split(",") : null; } catch (e) { return null; } })();
  const override = overrides && overrides[0];
  const enc = new TextEncoder(), dec = new TextDecoder();
  const str = s => { const b = enc.encode(s); return [b.length >> 8, b.length & 255, ...b]; };
  const len = n => { const out = []; do { let d = n % 128; n = Math.floor(n / 128); if (n > 0) d |= 128; out.push(d); } while (n > 0); return out; };
  const packet = (h, body) => new Uint8Array([h, ...len(body.length), ...body]);

  /* A reconnecting MQTT client. Phones lose the connection all the time (screen off,
     switching apps, Wi-Fi to mobile data), so it retries with back-off, notices a silent
     dead socket, and reconnects at once when the page becomes visible again. */
  const all = new Set();
  class Client {
    constructor(url, onMessage, onStatus) {
      this.url = url; this.onMessage = onMessage; this.onStatus = onStatus || (() => {});
      this.subs = new Set(); this.buf = new Uint8Array(0); this.pid = 1; this.closed = false; this.ready = false;
      this.connecting = false; this.queue = []; this.tries = 0; this.lastRx = 0;
      this.id = "clv" + Math.random().toString(36).slice(2, 12);
      all.add(this);
    }
    connect(timeoutMs = 6000) {
      return new Promise((resolve, reject) => {
        let done = false;
        const t = setTimeout(() => { if (!done) { done = true; reject(new Error("timeout")); } }, timeoutMs);
        this._open(() => { if (!done) { done = true; clearTimeout(t); resolve(this); } }, () => { if (!done) { done = true; clearTimeout(t); reject(new Error("failed")); } });
      });
    }
    /* keep trying in the background; never gives up until close() */
    start() { this._open(null, null); return this; }
    _open(ok, fail) {
      if (this.closed) return;
      clearTimeout(this.retryT);
      let ws;
      try { ws = new WebSocket(this.url, ["mqtt"]); } catch (e) { fail && fail(); this._retry(); return; }
      this.ws = ws; this.connecting = true; ws.binaryType = "arraybuffer";
      ws.onopen = () => {
        const body = [...str("MQTT"), 4, 0x02, 0, 60, ...str(this.id)];   /* clean session, 60 s keep-alive */
        try { ws.send(packet(0x10, body)); } catch (e) {}
      };
      ws.onmessage = ev => { if (this.ws !== ws) return; this.lastRx = Date.now(); this._data(new Uint8Array(ev.data), () => { if (ok) { ok(); ok = null; } }); };
      ws.onerror = () => {};
      ws.onclose = () => {
        if (this.ws !== ws) return;                  /* an old socket we already replaced */
        const was = this.ready; this.ready = false; this.connecting = false; clearInterval(this.pinger);
        this.buf = new Uint8Array(0);
        if (!was && fail) { fail(); fail = null; }
        if (this.closed) return;
        this.onStatus("reconnecting");
        this._retry();
      };
    }
    _retry() {
      if (this.closed) return;
      clearTimeout(this.retryT);
      const wait = Math.min(12000, 700 * Math.pow(2, Math.min(this.tries++, 4)));
      this.retryT = setTimeout(() => this._open(null, null), wait);
    }
    /* reconnect right now if the socket is down or has gone quiet */
    wake() {
      if (this.closed) return;
      if (this.ready && Date.now() - this.lastRx < 35000) return;
      if (this.connecting && !this.ready && this.ws && this.ws.readyState === 0) return;
      this.tries = 0;
      const old = this.ws; this.ws = null; this.ready = false; this.connecting = false; clearInterval(this.pinger);
      try { old && old.close(); } catch (e) {}
      this._open(null, null);
    }
    _data(chunk, ok) {
      const b = new Uint8Array(this.buf.length + chunk.length); b.set(this.buf); b.set(chunk, this.buf.length); this.buf = b;
      for (;;) {
        if (this.buf.length < 2) return;
        let mult = 1, rem = 0, i = 1, byte;
        do { if (i >= this.buf.length) return; byte = this.buf[i++]; rem += (byte & 127) * mult; mult *= 128; } while (byte & 128);
        if (this.buf.length < i + rem) return;
        const h = this.buf[0], body = this.buf.slice(i, i + rem); this.buf = this.buf.slice(i + rem);
        const type = h >> 4;
        if (type === 2) { // CONNACK
          if (body[1] !== 0) { try { this.ws.close(); } catch (e) {} return; }
          this.ready = true; this.connecting = false; this.tries = 0; this.onStatus("online");
          this.subs.forEach(t => this._sub(t));
          this.queue.splice(0).forEach(p => { try { this.ws.send(p); } catch (e) {} });
          clearInterval(this.pinger);
          this.pinger = setInterval(() => {
            /* no reply for a long time means the socket died silently: replace it */
            if (Date.now() - this.lastRx > 45000) { this.wake(); return; }
            try { this.ws.send(new Uint8Array([0xC0, 0])); } catch (e) {}
          }, 15000);
          if (ok) ok();
        } else if (type === 3) { // PUBLISH
          const qos = (h >> 1) & 3, tl = (body[0] << 8) | body[1];
          const topic = dec.decode(body.slice(2, 2 + tl));
          const payload = dec.decode(body.slice(2 + tl + (qos ? 2 : 0)));
          try { this.onMessage(topic, payload); } catch (e) { console.error(e); }
        }
      }
    }
    _send(p) {
      if (this.ready && this.ws && this.ws.readyState === 1) { try { this.ws.send(p); return; } catch (e) {} }
      this.queue.push(p); if (this.queue.length > 50) this.queue.shift();
    }
    _sub(topic) { const id = this.pid++ & 0xffff || 1; this._send(packet(0x82, [id >> 8, id & 255, ...str(topic), 0])); }
    subscribe(topic) { this.subs.add(topic); if (this.ready) this._sub(topic); }
    publish(topic, data, retain) {
      const payload = typeof data === "string" ? enc.encode(data) : enc.encode(JSON.stringify(data));
      this._send(packet(0x30 | (retain ? 1 : 0), [...str(topic), ...payload]));
    }
    close() {
      this.closed = true; all.delete(this); clearTimeout(this.retryT); clearInterval(this.pinger);
      try { this.ws.send(new Uint8Array([0xE0, 0])); this.ws.close(); } catch (e) {}
    }
  }
  /* Coming back to the page or getting the network back: check every connection at once. */
  const wakeAll = () => all.forEach(c => c.wake());
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") wakeAll(); });
  addEventListener("online", wakeAll);
  addEventListener("pageshow", wakeAll);

  /* One game, every server: messages go out on each server that is connected and come in
     from all of them. If one server drops a phone, the others keep it in the game. */
  function multi(urls, onMessage, onStatus) {
    const cs = urls.map(u => new Client(u, onMessage, () => report()));
    let last = "";
    const report = () => { const s = cs.some(c => c.ready) ? "online" : "reconnecting"; if (s !== last) { last = s; onStatus && onStatus(s); } };
    cs.forEach(c => c.start());
    return {
      clients: cs,
      get ready() { return cs.some(c => c.ready); },
      firstReady(ms) {
        return new Promise((res, rej) => {
          const t0 = Date.now();
          const chk = () => { const i = cs.findIndex(c => c.ready); if (i >= 0) return res(i); if (Date.now() - t0 > ms) return rej(new Error("timeout")); setTimeout(chk, 120); };
          chk();
        });
      },
      subscribe(t) { cs.forEach(c => c.subscribe(t)); },
      publish(t, d, r) { cs.forEach(c => { if (c.ready || r || c.queue.length < 20) c.publish(t, d, r); }); },
      wake() { cs.forEach(c => c.wake()); },
      close() { cs.forEach(c => c.close()); }
    };
  }

  const LETTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  window.LiveNet = {
    brokers: BROKERS,
    makeRoom(brokerIndex) { let s = ""; for (let i = 0; i < 5; i++) s += LETTERS[Math.floor(Math.random() * LETTERS.length)]; return s + (brokerIndex + 1); },
    brokerFor(code) { if (override) return override; const d = +String(code).slice(-1); return BROKERS[(d || 1) - 1] || BROKERS[0]; },
    topic(code, part) { return `clivedu/live/${String(code).toUpperCase()}/${part}`; },
    /* The teacher's screen: connect to every server, use the first that answers for the code. */
    async hostConnect(onMessage, onStatus) {
      const m = multi(overrides || BROKERS, onMessage, onStatus);
      try { const index = await m.firstReady(9000); return { client: m, index }; }
      catch (e) { m.close(); throw new Error("No live server could be reached."); }
    },
    /* A phone (or the teacher resuming): the same, so a room works through any server. */
    async join(code, onMessage, onStatus) {
      const urls = overrides || BROKERS;
      const m = multi(urls, onMessage, onStatus);
      try { await m.firstReady(10000); return m; } catch (e) { m.close(); throw e; }
    },
    multi,
    roomsTopic: "clivedu/live/rooms/+",
    roomTopic(code) { return `clivedu/live/rooms/${String(code).toUpperCase()}`; },
    /* Slide sync for a lesson: the teacher's screen sends its slide, students' phones follow.
       Uses every broker so a phone that reaches only one of them still follows. */
    syncSlides(id, onSlide) {
      const urls = overrides || BROKERS, clients = [], t = `clivedu/lesson/${id}/slide`;
      let last = null;
      const start = url => {
        const c = new Client(url, (tp, p) => { if (!onSlide || !p) return; try { onSlide(JSON.parse(p)); } catch (e) {} },
          st => { if (st === "online" && last) c.publish(t, last, true); });
        if (onSlide) c.subscribe(t);
        c.start();                       /* retries by itself; sends the latest slide on every reconnect */
        clients.push(c);
      };
      urls.forEach(start);
      return { send(obj) { last = JSON.stringify(obj); clients.forEach(c => { if (c.ready) c.publish(t, last, true); }); } };
    },
    /* Watch the list of running games on every broker. Calls onRooms(list) whenever it changes. Returns stop(). */
    watchRooms(onRooms) {
      const rooms = {}, clients = [];
      const urls = overrides || BROKERS;
      const emit = () => {
        const now = Date.now();
        onRooms(Object.values(rooms).filter(r => r && r.code && now - (r.seen || 0) < 15 * 60000 && r.phase !== "closed").sort((a, b) => (b.ts || 0) - (a.ts || 0)));
      };
      urls.forEach(url => {
        const c = new Client(url, (topic, payload) => {
          const code = topic.split("/").pop();
          if (!payload) { delete rooms[code]; return emit(); }
          try { const r = JSON.parse(payload); r.seen = Date.now(); if (Date.now() - (r.ts || 0) > 20 * 60000 && Math.abs(Date.now() - (r.ts || 0)) < 24 * 3600000) return; rooms[code] = r; emit(); } catch (e) {}
        }, () => {});
        c.subscribe(this.roomsTopic);
        c.start();
        clients.push(c);
      });
      emit();
      return () => clients.forEach(c => c.close());
    }
  };
})();
