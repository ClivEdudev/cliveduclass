/* ClivEdu account: sign in with Telegram (@clivedubot) and keep progress on every device.
   Load after settings.js. The settings sheet shows the account panel (window.CLV_ACCOUNT).
   Progress keys in localStorage are watched and sent to /api/sync a moment after they change. */
(() => {
  "use strict";
  if (window.CLV_ACCOUNT) return;
  const API = "/api";
  const TOK = "clv-token", USR = "clv-user";
  const PLAIN = ["clv-points", "clv-settings", "clv-name", "clv-mistakes", "clv-games", "clv-daily"];
  const tracked = k => PLAIN.includes(k) || k.startsWith("clv-picks-") || k.startsWith("clv-awarded-");
  let LS = null; try { LS = window.localStorage; } catch (e) {}
  const raw = k => { try { return LS ? LS.getItem(k) : null; } catch (e) { return null; } };
  const load = (k, d) => { try { const v = raw(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  let quiet = false;
  const keep = (k, v) => { try { quiet = true; v == null ? LS.removeItem(k) : LS.setItem(k, typeof v === "string" ? v : JSON.stringify(v)); } catch (e) {} finally { quiet = false; } };
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  let token = raw(TOK) || "";
  let user = load(USR, null);
  let summary = null, login = null, pollId = 0, msg = "";
  const dirty = new Set();
  let syncTimer = 0, syncing = false;

  /* ---- watch progress keys ---- */
  try {
    const orig = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      orig.call(this, k, v);
      try { if (!quiet && token && this === LS && tracked(String(k))) { dirty.add(String(k)); schedule(700); } } catch (e) {}
    };
  } catch (e) {}

  async function api(path, opts) {
    opts = opts || {};
    const h = opts.form ? {} : { "content-type": "application/json" };       /* FormData sets its own type */
    if (token) h.authorization = "Bearer " + token;
    const r = await fetch(API + path, { method: opts.method || (opts.body || opts.form ? "POST" : "GET"), headers: h,
      body: opts.form ? opts.form : opts.body ? JSON.stringify(opts.body) : undefined, keepalive: !!opts.keepalive });
    let j = {}; try { j = await r.json(); } catch (e) {}
    if (r.status === 401 && token) { forget(); throw new Error("Signed out"); }
    if (!r.ok) throw new Error(j.error || "Network error");
    return j;
  }
  function collect(all) {
    const out = {};
    const keys = all ? (() => { const a = []; try { for (let i = 0; i < LS.length; i++) { const k = LS.key(i); if (tracked(k)) a.push(k); } } catch (e) {} return a; })() : [...dirty];
    keys.forEach(k => { const v = raw(k); if (v == null) return; try { out[k] = JSON.parse(v); } catch (e) { out[k] = v; } });
    return out;
  }
  function applyServer(data) {
    if (!data) return;
    for (const [k, v] of Object.entries(data)) {
      if (!tracked(k) || dirty.has(k)) continue;
      if (k === "clv-settings") { if (JSON.stringify(v) !== raw(k) && window.CLV_SETTINGS) { quiet = true; try { window.CLV_SETTINGS.set(v); } finally { quiet = false; } } continue; }
      keep(k, v);
    }
    if (user && !raw("clv-name")) keep("clv-name", user.name);
  }
  function schedule(ms) { clearTimeout(syncTimer); syncTimer = setTimeout(() => sync(false), ms); }
  async function sync(all) {
    if (!token) return;
    if (syncing) return schedule(600);
    const data = collect(all); const sentKeys = Object.keys(data);
    if (!all && !sentKeys.length) return;
    sentKeys.forEach(k => dirty.delete(k));
    syncing = true;
    try {
      const j = await api("/sync", { body: { data } });
      summary = j.summary; if (j.user) { user = j.user; keep(USR, user); } applyServer(j.data); tell();
    } catch (e) { sentKeys.forEach(k => dirty.add(k)); if (token) schedule(5000); }
    finally { syncing = false; }
  }
  addEventListener("pagehide", () => {
    if (!token || !dirty.size) return;
    try { fetch(API + "/sync", { method: "POST", keepalive: true, headers: { "content-type": "application/json", authorization: "Bearer " + token }, body: JSON.stringify({ data: collect(false) }) }); } catch (e) {}
  });
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden" && dirty.size) sync(false); if (document.visibilityState === "visible" && login) poll(); });

  /* ---- sign in ---- */
  async function startLogin() {
    msg = ""; login = { busy: true }; repaint();
    try {
      const j = await api("/login/start", { method: "POST" });
      login = { code: j.code, link: j.link, bot: j.bot, until: Date.now() + (j.minutes || 15) * 60e3 };
      clearInterval(pollId); pollId = setInterval(poll, 2000);
    } catch (e) { login = null; msg = e.message === "Failed to fetch" ? "No internet? Try again. · Internet yo‘qmi?" : e.message; }
    repaint();
  }
  async function poll() {
    if (!login || !login.code) return;
    if (Date.now() > login.until) { stopLogin(); msg = "The link expired. Try again. · Havola eskirdi."; return repaint(); }
    try {
      const j = await api("/login/status?code=" + login.code);
      if (j.state === "done") { stopLogin(); signedIn(j.token, j.user); }
      else if (j.state === "expired") { stopLogin(); msg = "The link expired. Try again."; repaint(); }
    } catch (e) {}
  }
  function stopLogin() { clearInterval(pollId); pollId = 0; login = null; }
  function signedIn(t, u) {
    token = t; user = u; keep(TOK, t); keep(USR, u); msg = "";
    const localAv = load("clv-avatar", "");
    if (u.avatar) keep("clv-avatar", u.avatar);
    else if (/^[gb]\d\d$/.test(localAv || "")) setTimeout(() => api("/profile", { body: { avatar: localAv } }).then(j => { if (j && j.user) { user = j.user; keep(USR, user); repaint(); } }).catch(() => {}), 800);
    repaint(); tell(true);
    sync(true);
    toast(`✅ Hello, ${u.name}! Your progress is saved now.`);
  }
  function forget() { token = ""; user = null; summary = null; keep(TOK, null); keep(USR, null); dirty.clear(); repaint(); tell(); }
  async function signOut() { try { await sync(false); await api("/logout", { method: "POST" }); } catch (e) {} forget(); }

  /* ---- UI ---- */
  const CSS = `.clvlogin{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}
.clvtg{display:inline-flex;align-items:center;gap:8px;font-weight:800;font-size:16px;font-family:inherit;border:0;border-radius:12px;padding:12px 16px;background:#229ED9;color:#fff;cursor:pointer;text-decoration:none}
.clvtg:hover{filter:brightness(1.05)}.clvtg[aria-busy=true]{opacity:.7}
.clvwait{margin-top:12px;display:grid;gap:10px;justify-items:start}
.clvwait ol{margin:0;padding-left:20px;line-height:1.5}
.clvqr{display:flex;gap:14px;align-items:center;flex-wrap:wrap}
.clvqr canvas,.clvqr img{width:132px;height:132px;background:#fff;padding:6px;border-radius:10px}
.clvmsg{color:#B42318;font-weight:700;margin-top:8px}
.clvspin{display:inline-block;width:14px;height:14px;border:3px solid currentColor;border-right-color:transparent;border-radius:50%;animation:clvsp 1s linear infinite;vertical-align:-2px}
@keyframes clvsp{to{transform:rotate(360deg)}}html.clv-calm .clvspin{animation:none}
.clvacc a.clvlink{color:inherit;font-weight:800}
.clvtoast{position:fixed;left:50%;bottom:22px;transform:translateX(-50%);background:#12263A;color:#fff;font:700 15px system-ui,sans-serif;padding:12px 18px;border-radius:12px;z-index:100001;box-shadow:0 8px 30px rgba(0,0,0,.25);max-width:92vw}`;
  function css() { if (!document.getElementById("clvAccCss")) { const st = document.createElement("style"); st.id = "clvAccCss"; st.textContent = CSS; (document.head || document.documentElement).appendChild(st); } }
  function toast(t) { css(); const d = document.createElement("div"); d.className = "clvtoast"; d.textContent = t; document.body.appendChild(d); setTimeout(() => d.remove(), 3500); }
  const initial = n => esc(String(n || "?").trim().charAt(0).toUpperCase() || "?");
  const avatarHTML = u => /^[gb]\d\d$/.test((u && u.avatar) || "") ? `<img src="/avatars/${u.avatar}.webp" alt="">` : initial(u && u.name);
  function panelHTML() {
    css();
    if (user) {
      const s = summary;
      return `<div class="clvgrp"><b>My account · Hisobim</b><div class="clvacc"><span class="av">${avatarHTML(user)}</span>
        <p>${esc(user.name)}${user.teacher ? " · Teacher" : ""}<small>${user.username ? "@" + esc(user.username) + " · " : ""}Telegram ✓${s ? ` · ⭐ ${s.points} points` : ""}</small></p></div>
        <div class="clvlogin"><a class="clvtg" href="/me/">\u{1F464} My profile · Profilim</a>${user.teacher ? `<a class="clvtg" href="/teacher/progress/" style="background:#157347">\u{1F4CA} Class progress</a>` : ""}<button class="clvtg" style="background:transparent;color:inherit;border:2px solid currentColor" data-acc="out">Sign out · Chiqish</button></div></div>`;
    }
    if (login && login.code) {
      return `<div class="clvgrp"><b>Sign in · Kirish</b><div class="clvwait">
        <ol><li>Tap <b>Open Telegram</b> · Telegramni oching</li><li>Press <b>START</b> in @${esc(login.bot)}</li><li>Come back here · Shu yerga qayting</li></ol>
        <div class="clvqr"><a class="clvtg" href="${esc(login.link)}" target="_blank" rel="noopener">✈️ Open Telegram</a><span data-qr></span></div>
        <span><span class="clvspin"></span> Waiting for Telegram… · Kutilmoqda…</span>
        <button class="clvtg" style="background:transparent;color:inherit;border:2px solid currentColor;padding:8px 12px" data-acc="cancel">Cancel · Bekor qilish</button></div></div>`;
    }
    return `<div class="clvgrp"><b>My account · Hisobim</b><div class="clvacc"><span class="av">\u{1F464}</span>
      <p>Sign in to save your points on every device.<small>Telegram orqali kiring: ballaringiz saqlanadi, uy vazifalari Telegramga keladi.</small></p></div>
      <div class="clvlogin"><button class="clvtg" data-acc="in" ${login && login.busy ? 'aria-busy="true"' : ""}>✈️ Sign in with Telegram</button></div>
      ${msg ? `<div class="clvmsg">${esc(msg)}</div>` : ""}</div>`;
  }
  function drawQR() {
    const box = document.querySelector("[data-qr]"); if (!box || !login || !login.link || box.dataset.done) return;
    const draw = () => { try { const q = window.qrcode(0, "M"); q.addData(login.link); q.make(); box.innerHTML = q.createImgTag(4, 0); box.dataset.done = 1; } catch (e) {} };
    if (window.qrcode) return draw();
    if (matchMedia("(max-width: 700px)").matches) return;            /* phones: the button is enough */
    const s = document.createElement("script"); s.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"; s.onload = draw; document.head.appendChild(s);
  }
  function repaint() { if (window.CLV_SETTINGS) window.CLV_SETTINGS.repaint(); setTimeout(drawQR, 30); tell(); }
  function onClick(b) {
    const a = b.dataset.acc; if (!a) return false;
    if (a === "in") startLogin();
    else if (a === "cancel") { stopLogin(); repaint(); }
    else if (a === "out") signOut();
    return true;
  }
  function tell(fresh) { try { window.dispatchEvent(new CustomEvent("clv-account", { detail: { user, summary, fresh: !!fresh } })); } catch (e) {} }

  window.CLV_ACCOUNT = {
    ready: true, panelHTML, onClick, api, sync: () => sync(true),
    get user() { return user; }, get summary() { return summary; }, get signedIn() { return !!token; },
    signIn() { if (window.CLV_SETTINGS) window.CLV_SETTINGS.open(); if (!token && !login) startLogin(); },
    /* download a file the API serves (homework attachments) */
    async download(path, name) {
      const r = await fetch(API + path, { headers: token ? { authorization: "Bearer " + token } : {} });
      if (!r.ok) { let j = {}; try { j = await r.json(); } catch (e) {} throw new Error(j.error || "Download failed"); }
      const url = URL.createObjectURL(await r.blob()), a = document.createElement("a");
      a.href = url; a.download = name || "homework"; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 30000);
    },
    signOut, setUser(u) { user = u; keep(USR, u); repaint(); }
  };
  document.addEventListener("click", e => { const b = e.target.closest("[data-signin]"); if (b) { e.preventDefault(); window.CLV_ACCOUNT.signIn(); } });
  /* catch up as soon as the page opens */
  if (token) setTimeout(() => sync(true), 600);
})();
