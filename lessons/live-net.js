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
  const override = (() => { try { return new URLSearchParams(location.search).get("broker"); } catch (e) { return null; } })();
  const enc = new TextEncoder(), dec = new TextDecoder();
  const str = s => { const b = enc.encode(s); return [b.length >> 8, b.length & 255, ...b]; };
  const len = n => { const out = []; do { let d = n % 128; n = Math.floor(n / 128); if (n > 0) d |= 128; out.push(d); } while (n > 0); return out; };
  const packet = (h, body) => new Uint8Array([h, ...len(body.length), ...body]);

  class Client {
    constructor(url, onMessage, onStatus) {
      this.url = url; this.onMessage = onMessage; this.onStatus = onStatus || (() => {});
      this.subs = new Set(); this.buf = new Uint8Array(0); this.pid = 1; this.closed = false; this.ready = false; this.queue = [];
      this.id = "clv" + Math.random().toString(36).slice(2, 12);
    }
    connect(timeoutMs = 6000) {
      return new Promise((resolve, reject) => {
        let done = false;
        const t = setTimeout(() => { if (!done) { done = true; try { this.ws.close(); } catch (e) {} reject(new Error("timeout")); } }, timeoutMs);
        this._open(() => { if (!done) { done = true; clearTimeout(t); resolve(this); } }, () => { if (!done) { done = true; clearTimeout(t); reject(new Error("failed")); } });
      });
    }
    _open(ok, fail) {
      let ws;
      try { ws = new WebSocket(this.url, ["mqtt"]); } catch (e) { fail && fail(); return; }
      this.ws = ws; ws.binaryType = "arraybuffer";
      ws.onopen = () => {
        const body = [...str("MQTT"), 4, 0x02, 0, 40, ...str(this.id)];
        ws.send(packet(0x10, body));
      };
      ws.onmessage = ev => this._data(new Uint8Array(ev.data), ok);
      ws.onerror = () => {};
      ws.onclose = () => {
        const was = this.ready; this.ready = false; clearInterval(this.pinger);
        if (!was && fail) { fail(); fail = null; }
        if (this.closed) return;
        this.onStatus("reconnecting");
        setTimeout(() => this._open(() => this.onStatus("online"), null), 1500);
      };
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
          this.ready = true; this.onStatus("online");
          this.subs.forEach(t => this._sub(t));
          this.queue.splice(0).forEach(p => this.ws.send(p));
          clearInterval(this.pinger); this.pinger = setInterval(() => { try { this.ws.send(new Uint8Array([0xC0, 0])); } catch (e) {} }, 20000);
          if (ok) { ok(); ok = null; }
        } else if (type === 3) { // PUBLISH
          const qos = (h >> 1) & 3, tl = (body[0] << 8) | body[1];
          const topic = dec.decode(body.slice(2, 2 + tl));
          const payload = dec.decode(body.slice(2 + tl + (qos ? 2 : 0)));
          try { this.onMessage(topic, payload); } catch (e) { console.error(e); }
        }
      }
    }
    _send(p) { if (this.ready) { try { this.ws.send(p); } catch (e) { this.queue.push(p); } } else this.queue.push(p); }
    _sub(topic) { const id = this.pid++ & 0xffff || 1; this._send(packet(0x82, [id >> 8, id & 255, ...str(topic), 0])); }
    subscribe(topic) { this.subs.add(topic); if (this.ready) this._sub(topic); }
    publish(topic, data, retain) {
      const payload = typeof data === "string" ? enc.encode(data) : enc.encode(JSON.stringify(data));
      this._send(packet(0x30 | (retain ? 1 : 0), [...str(topic), ...payload]));
    }
    close() { this.closed = true; try { this.ws.send(new Uint8Array([0xE0, 0])); this.ws.close(); } catch (e) {} clearInterval(this.pinger); }
  }

  const LETTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  window.LiveNet = {
    brokers: BROKERS,
    makeRoom(brokerIndex) { let s = ""; for (let i = 0; i < 5; i++) s += LETTERS[Math.floor(Math.random() * LETTERS.length)]; return s + (brokerIndex + 1); },
    brokerFor(code) { if (override) return override; const d = +String(code).slice(-1); return BROKERS[(d || 1) - 1] || BROKERS[0]; },
    topic(code, part) { return `clivedu/live/${String(code).toUpperCase()}/${part}`; },
    async hostConnect(onMessage, onStatus) {
      if (override) { const c = new Client(override, onMessage, onStatus); await c.connect(); return { client: c, index: 0 }; }
      for (let i = 0; i < BROKERS.length; i++) {
        try { const c = new Client(BROKERS[i], onMessage, onStatus); await c.connect(); return { client: c, index: i }; } catch (e) { /* try next */ }
      }
      throw new Error("No live server could be reached.");
    },
    async join(code, onMessage, onStatus) { const c = new Client(this.brokerFor(code), onMessage, onStatus); await c.connect(8000); return c; }
  };
})();
