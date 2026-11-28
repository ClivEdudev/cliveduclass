/* ClivEdu settings: theme, brightness, text size, reading mode, calm mode, Uzbek help, sounds.
   Loaded in <head> on every page so the choice applies before anything is drawn.
   Saved on this device now; once sign-in exists the profile keeps a copy. */
(function () {
  "use strict";
  const KEY = "clv-settings";
  window.CLV_V = "dev";      /* replaced by the deploy's version (tools/stamp.cjs) */
  const DEF = { theme: "light", style: "nova", bright: 100, size: 100, reading: false, calm: false, motion: "auto", uz: true, sound: true };
  const root = document.documentElement;
  const load = () => { try { return Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { return Object.assign({}, DEF); } };
  const keep = s => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} };
  let S = load();
  try { const raw = JSON.parse(localStorage.getItem(KEY) || "{}"); if (raw.calm && !raw.motion) S.motion = "off"; } catch (e) {}
  /* Nov 2026: the new look became the default, also for phones that had saved settings before */
  if (!S.v2) { S.style = "nova"; S.v2 = true; keep(S); }
  const mq = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : null;
  const rm = window.matchMedia ? matchMedia("(prefers-reduced-motion: reduce)") : null;

  try { if (/^\/(index\.html)?$|^\/(me|play|daily|words)\//.test(location.pathname)) document.documentElement.classList.add("clvpaper"); } catch (e) {}
  function apply() {
    const dark = S.theme === "dark" || (S.theme === "auto" && mq && mq.matches);
    root.dataset.theme = dark ? "dark" : "light";
    root.classList.toggle("clv-reading", !!S.reading);
    root.classList.toggle("clv-calm", S.motion === "off" || (S.motion !== "full" && S.motion !== "light" && !!(rm && rm.matches)));
    root.classList.toggle("clv-nouz", !S.uz);
    root.classList.toggle("clv-mute", !S.sound);
    root.style.setProperty("--clv-scale", String((S.size || 100) / 100));
    /* Modern style: its own stylesheet, loaded only when chosen */
    const nova = S.style === "nova" || !S.style;
    root.classList.toggle("clv-nova", nova);
    if (nova && !document.getElementById("clvNova") && document.head) {
      const f = document.createElement("link"); f.rel = "stylesheet"; f.id = "clvNovaFont";
      f.href = "https://fonts.googleapis.com/css2?family=Unbounded:wght@600;700;800&family=Rubik:wght@400;500;600;700;800&display=swap"; document.head.appendChild(f);
      const l = document.createElement("link"); l.id = "clvNova"; l.rel = "stylesheet"; l.href = "/lessons/nova.css?v=" + window.CLV_V; document.head.appendChild(l);
      /* animations: the student pages only (lessons and the board stay still) */
      if (root.classList.contains("clvpaper")) {
        /* hide the blocks that will rise in before the first paint; motion.js then shows them (or, if it fails, this timer does) */
        if (!root.classList.contains("clv-calm") && !root.classList.contains("nv-on")) {
          const n = navigator, weak = (n.deviceMemory || 4) < 3 || (n.hardwareConcurrency || 4) < 4 || !(window.CSS && CSS.supports && CSS.supports("aspect-ratio", "1"));
          root.classList.add("nv-on", S.motion === "light" || (S.motion !== "full" && weak) ? "nv-light" : "nv-full");
          setTimeout(() => { if (!window.CLV_MOTION) root.classList.remove("nv-on", "nv-full", "nv-light"); }, 3000);
          const st = document.createElement("style"); st.textContent = "html.nv-on [data-rv]:not(.in){opacity:0}"; document.head.appendChild(st);
        }
        const m = document.createElement("link"); m.rel = "stylesheet"; m.href = "/lessons/motion.css?v=" + window.CLV_V;
        m.onload = m.onerror = () => { window.CLV_MOTION_CSS = true; try { window.dispatchEvent(new Event("clv-motioncss")); } catch (e) {} }; document.head.appendChild(m);
        const j = document.createElement("script"); j.src = "/lessons/motion.js?v=" + window.CLV_V; j.defer = true; document.head.appendChild(j);
      }
    }
    const modern = S.style === "modern";
    root.classList.toggle("clv-modern", modern);
    if (modern && !document.getElementById("clvModern") && document.head) {
      const l = document.createElement("link"); l.id = "clvModern"; l.rel = "stylesheet"; l.href = "/lessons/modern.css?v=" + window.CLV_V; document.head.appendChild(l);
    }
    const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.content = dark ? "#0E1A26" : "#FFFFFF";
    const dim = document.getElementById("clvDim");
    if (dim) dim.style.opacity = String(Math.max(0, Math.min(0.6, 1 - (S.bright || 100) / 100)));
    try { window.dispatchEvent(new CustomEvent("clv-settings", { detail: Object.assign({}, S) })); } catch (e) {}
  }
  if (mq && mq.addEventListener) mq.addEventListener("change", () => { if (S.theme === "auto") apply(); });

  const CSS = `
#clvDim{position:fixed;inset:0;background:#000;opacity:0;pointer-events:none;z-index:2147483000;transition:opacity .2s}
html.clv-calm *,html.clv-calm *::before,html.clv-calm *::after{animation-duration:.001s!important;animation-iteration-count:1!important;transition-duration:.001s!important;scroll-behavior:auto!important}
html.clv-nouz .uz,html.clv-nouz .tip small,html.clv-nouz .how small{display:none!important}
.clvset{position:fixed;inset:0;z-index:2147482000;background:rgba(5,12,20,.55);display:flex;align-items:flex-end;justify-content:center;
  padding:max(12px,env(safe-area-inset-top,0px)) max(12px,env(safe-area-inset-right,0px)) 0 max(12px,env(safe-area-inset-left,0px));
  font:16px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;-webkit-text-size-adjust:100%}
.clvset[hidden]{display:none}
.clvsheet{--b:#FFFFFF;--f:#12263A;--s:#4B5F73;--l:#D2DCE6;--a:#FFC93C;--t:#0B6E70;--soft:#EEF3F8;
  background:var(--b);color:var(--f);width:min(560px,100%);max-height:calc(100dvh - 24px);overflow:auto;border-radius:22px 22px 0 0;
  padding:18px 18px max(22px,env(safe-area-inset-bottom,0px));box-shadow:0 -10px 40px rgba(0,0,0,.3);display:flex;flex-direction:column;gap:16px;zoom:1}
html[data-theme="dark"] .clvsheet{--b:#13202D;--f:#EAF0F5;--s:#A9B8C7;--l:#2B3E52;--soft:#1B2C3D;--t:#5CCFD2}
@media (min-width:700px){.clvset{align-items:center}.clvsheet{border-radius:22px}}
.clvsheet h2{margin:0;font-size:22px;font-weight:800;display:flex;align-items:center;gap:10px}
.clvsheet h2 small{font-size:14px;font-weight:600;color:var(--t)}
.clvgrab{display:block;width:56px;height:6px;border-radius:99px;background:var(--l);border:0;padding:0;margin:-6px auto -4px;cursor:pointer;flex:none}
.clvgrab::before{content:"";display:block;margin:-14px -20px;height:34px}
.clvauto{margin-left:auto;font-size:12px;font-weight:700;color:var(--s);transition:color .2s}
.clvauto.on{color:#1C8F50}
.clvsheet:focus{outline:none}
.clvsheet .x{margin-left:auto;font-weight:800;font-size:15px;font-family:inherit;background:var(--soft);color:var(--f);border:0;border-radius:999px;padding:9px 16px;cursor:pointer}
.clvgrp{display:flex;flex-direction:column;gap:12px;background:var(--soft);border-radius:16px;padding:14px}
.clvgrp > b{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--s)}
.clvrow{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.clvrow > span{flex:1;min-width:140px;font-weight:700}
.clvrow > span small{display:block;font-weight:600;font-size:13px;color:var(--t)}
.clvseg{display:flex;background:var(--b);border:2px solid var(--l);border-radius:12px;padding:3px;gap:3px}
.clvseg button{font-weight:700;font-size:14px;font-family:inherit;color:var(--f);background:none;border:0;border-radius:9px;padding:8px 12px;cursor:pointer}
.clvseg button[aria-pressed="true"]{background:var(--a);color:#12263A}
.clvsw{position:relative;width:52px;height:30px;border-radius:999px;background:var(--l);border:0;cursor:pointer;flex:none}
.clvsw::after{content:"";position:absolute;top:3px;left:3px;width:24px;height:24px;border-radius:50%;background:#fff;transition:left .15s}
.clvsw[aria-checked="true"]{background:#1C8F50}
.clvsw[aria-checked="true"]::after{left:25px}
.clvrange{flex:1 1 180px;accent-color:#E8A90A;height:28px}
.clvval{min-width:46px;text-align:right;font-weight:800;font-variant-numeric:tabular-nums}
.clvbtm{display:flex;gap:10px;flex-wrap:wrap}
.clvbtm button{font-weight:800;font-size:15px;font-family:inherit;border:2px solid var(--l);background:var(--b);color:var(--f);border-radius:12px;padding:10px 14px;cursor:pointer}
.clvacc{display:flex;align-items:center;gap:12px}
.clvacc .av{width:44px;height:44px;border-radius:50%;background:var(--a);color:#12263A;display:grid;place-items:center;font-weight:800;font-size:18px;flex:none;overflow:hidden}
.clvacc .av img{width:100%;height:100%;object-fit:cover}
.clvacc p{margin:0;flex:1;min-width:0}
.clvacc p small{display:block;color:var(--s)}
.clvsheet button:focus-visible,.clvsheet input:focus-visible{outline:3px solid #1F5FD1;outline-offset:2px}
.clvgear{cursor:pointer}
.clvfaces{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}
.clvfaces button{padding:0;border:3px solid transparent;border-radius:50%;background:none;cursor:pointer;aspect-ratio:1;overflow:hidden;transition:transform .15s}
.clvfaces button:hover{transform:scale(1.06)}
.clvfaces button[aria-pressed="true"]{border-color:#1C8F50;box-shadow:0 0 0 3px rgba(28,143,80,.3)}
.clvfaces img{width:100%;height:100%;object-fit:cover;display:block;border-radius:50%}
@media (max-width:380px){.clvfaces{grid-template-columns:repeat(4,1fr)}}
/* ClivEdu logo next to the name */
html .brand i{background:#0A1020 url(/brand/mark.webp) center/cover no-repeat!important;box-shadow:0 0 0 1px rgba(120,120,255,.35),0 2px 8px rgba(70,90,255,.35)!important;border-radius:28%!important;flex:none}
/* Scrollbar: on computers the page's own scrollbar is hidden and a floating bar is drawn instead
   (only the bar, no background). Phones keep their own thin, see-through scrollbars. */
@media (pointer:fine){html{scrollbar-width:none}html::-webkit-scrollbar{display:none;width:0;height:0}}
.clvbar{position:fixed;right:3px;top:0;width:8px;border-radius:99px;z-index:2147483000;background:linear-gradient(180deg,#3B8BFF,#7B5CFA 60%,#A855F7);
  box-shadow:0 2px 10px rgba(91,92,240,.45);opacity:0;transition:opacity .35s,width .15s,right .15s;cursor:grab;touch-action:none}
.clvbar.on{opacity:.9}.clvbar:hover,.clvbar.drag{opacity:1;width:11px;right:2px}.clvbar.drag{cursor:grabbing}
.clvbarzone{position:fixed;right:0;top:0;bottom:0;width:16px;z-index:2147482999}
/* scrollable boxes inside pages: bar only */
*::-webkit-scrollbar{width:8px;height:8px;background:transparent}
*::-webkit-scrollbar-track,*::-webkit-scrollbar-corner{background:transparent}
*::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#3B8BFF,#A855F7);border-radius:99px}
*::-webkit-scrollbar-button{display:none;width:0;height:0}
@supports (-moz-appearance:none){*{scrollbar-color:#7B5CFA transparent;scrollbar-width:thin}}
/* Classic style background: warm notebook paper with faint English-class doodles (dark: indigo night).
   Home, profile, game, daily challenge and lessons on a phone. Modern style has its own background. */
html.clvpaper:not(.clv-modern):not(.clv-nova) body,html:not(.clv-modern):not(.clv-nova) body.flow.student{--pg:#FAF3E6;
  background-color:#FAF3E6!important;
  background-image:url(/brand/doodles-light.svg),radial-gradient(circle at 1px 1px,rgba(140,100,40,.16) 1.2px,transparent 1.6px),
    radial-gradient(55% 45% at 0% 0%,rgba(255,201,60,.22),transparent 70%),radial-gradient(50% 45% at 100% 100%,rgba(11,143,140,.13),transparent 70%),
    radial-gradient(40% 35% at 100% 0%,rgba(226,85,110,.10),transparent 70%)!important;
  background-size:560px 560px,24px 24px,100% 100vh,100% 100vh,100% 100vh!important;
  background-attachment:scroll,scroll,fixed,fixed,fixed!important;background-position:300px 330px,0 0,0 0,0 0,0 0!important}
html.clvpaper[data-theme="dark"]:not(.clv-modern):not(.clv-nova) body,html[data-theme="dark"]:not(.clv-modern):not(.clv-nova) body.flow.student{--pg:#111433;
  background-color:#0B0E26!important;
  background-image:radial-gradient(38% 30% at 86% 6%,rgba(255,236,170,.20),transparent 70%),radial-gradient(9% 7% at 86% 6%,rgba(255,240,200,.35),transparent 70%),
    radial-gradient(70% 50% at 50% 115%,rgba(124,77,255,.35),transparent 70%),radial-gradient(60% 40% at 0% 100%,rgba(22,182,201,.16),transparent 70%),
    linear-gradient(180deg,#070A1E 0%,#0E1236 45%,#1E1650 85%,#2A1B5C 100%)!important;
  background-size:100% 100vh!important;background-attachment:fixed!important;background-position:0 0!important;position:relative;isolation:isolate}
/* phones ignore "fixed" backgrounds and repeated the 1-screen gradient, which drew a line across the page: stretch it over the whole page instead */
@media (hover:none),(pointer:coarse){
html.clvpaper:not(.clv-modern):not(.clv-nova) body,html:not(.clv-modern):not(.clv-nova) body.flow.student{background-attachment:scroll!important;background-size:560px 560px,24px 24px,100% 100%,100% 100%,100% 100%!important}
html.clvpaper[data-theme="dark"]:not(.clv-modern):not(.clv-nova) body,html[data-theme="dark"]:not(.clv-modern):not(.clv-nova) body.flow.student{background-size:100% 100%!important}}
/* starry night: two fixed star layers that twinkle, and a shooting star now and then */
html.clvpaper[data-theme="dark"]:not(.clv-modern):not(.clv-nova) body::before,html[data-theme="dark"]:not(.clv-modern):not(.clv-nova) body.flow.student::before,
html.clvpaper[data-theme="dark"]:not(.clv-modern):not(.clv-nova) body::after,html[data-theme="dark"]:not(.clv-modern):not(.clv-nova) body.flow.student::after{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none}
html.clvpaper[data-theme="dark"]:not(.clv-modern):not(.clv-nova) body::before,html[data-theme="dark"]:not(.clv-modern):not(.clv-nova) body.flow.student::before{
  background:url(/brand/stars-far.svg) 0 0/600px 600px,url(/brand/stars-near.svg) 120px 80px/700px 700px;animation:clvTwinkle 6s ease-in-out infinite alternate}
html.clvpaper[data-theme="dark"]:not(.clv-modern):not(.clv-nova) body::after,html[data-theme="dark"]:not(.clv-modern):not(.clv-nova) body.flow.student::after{
  inset:auto;top:12vh;left:-20vw;width:180px;height:2px;border-radius:2px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9));
  transform:rotate(-24deg);opacity:0;animation:clvShoot 11s ease-in 3s infinite}
@keyframes clvTwinkle{0%{opacity:.75}50%{opacity:1}100%{opacity:.6}}
@keyframes clvShoot{0%{opacity:0;transform:translate(0,0) rotate(-24deg)}2%{opacity:1}9%{opacity:0;transform:translate(70vw,-30vh) rotate(-24deg)}100%{opacity:0;transform:translate(70vw,-30vh) rotate(-24deg)}}
html.clv-calm body::before,html.clv-calm body::after{animation:none!important}
html.clv-calm body.flow.student::after,html.clv-calm.clvpaper body::after{display:none}
@media (prefers-reduced-motion:reduce){html:not(.clv-modern):not(.clv-nova) body::before{animation:none!important}html:not(.clv-modern):not(.clv-nova) body::after{display:none}}
`;

  function mount() {
    if (!document.getElementById("clvSetCss")) { const st = document.createElement("style"); st.id = "clvSetCss"; st.textContent = CSS; document.head.appendChild(st); }
    if (!document.getElementById("clvDim")) { const d = document.createElement("div"); d.id = "clvDim"; d.setAttribute("aria-hidden", "true"); document.body.appendChild(d); }
    apply();
  }

  const L = (en, uz) => `${en}<small>${uz}</small>`;
  const seg = (k, opts) => `<div class="clvseg" role="group">${opts.map(([v, t]) => `<button data-k="${k}" data-v="${v}" aria-pressed="${S[k] === v}">${t}</button>`).join("")}</div>`;
  const sw = k => `<button class="clvsw" role="switch" data-sw="${k}" aria-checked="${!!S[k]}"></button>`;
  function account() {
    const A = window.CLV_ACCOUNT;
    if (!A || !A.ready) return `<div class="clvgrp"><b>My account · Hisobim</b><div class="clvacc"><span class="av">\u{1F464}</span><p>Sign in with Telegram is coming soon.<small>Then your points and progress are saved on every device.</small></p></div></div>`;
    return A.panelHTML();
  }
  /* profile pictures: realistic faces, all AI-generated (see /avatars/LICENSE.txt) */
  const FACES = { g: Array.from({ length: 16 }, (_, i) => "g" + String(i + 1).padStart(2, "0")), b: Array.from({ length: 16 }, (_, i) => "b" + String(i + 1).padStart(2, "0")) };
  let faceTab = null;
  const myFace = () => { const A = window.CLV_ACCOUNT, u = A && A.user; const v = (u && u.avatar) || (function () { try { return JSON.parse(localStorage.getItem("clv-avatar") || "null"); } catch (e) { return null; } })() || ""; return /^[gbn]\d\d$/.test(v) ? v : ""; };
  function faces() {
    const cur = myFace(), tab = faceTab || (cur && cur[0] !== "n" ? cur[0] : "g");
    return `<div class="clvgrp" data-faces><b>Profile picture · Rasmingiz</b>
      <div class="clvrow"><span>${L("Choose your picture", "Rasmingizni tanlang")}</span>${`<div class="clvseg" role="group"><button data-ftab="g" aria-pressed="${tab === "g"}">Girls · Qizlar</button><button data-ftab="b" aria-pressed="${tab === "b"}">Boys · O‘g‘illar</button></div>`}</div>
      <div class="clvfaces">${FACES[tab].map(id => `<button data-av="${id}" aria-pressed="${cur === id}" aria-label="Picture ${id}"><img src="/avatars/${id}.webp?v=2" alt="" loading="lazy" width="64" height="64"></button>`).join("")}</div>
      ${cur ? `<div class="clvbtm"><button data-av="">No picture · Rasmsiz</button></div>` : ""}</div>`;
  }
  async function pickFace(id) {
    try { id ? localStorage.setItem("clv-avatar", JSON.stringify(id)) : localStorage.removeItem("clv-avatar"); } catch (e) {}
    const A = window.CLV_ACCOUNT;
    if (A && A.user) {
      A.setUser(Object.assign({}, A.user, { avatar: id }));
      try { const j = await A.api("/profile", { body: { avatar: id } }); if (j && j.user) A.setUser(j.user); } catch (e) {}
    }
    const f = box && box.querySelector("[data-faces]"); if (f) f.outerHTML = faces();
    paintAccount();
    try { window.dispatchEvent(new CustomEvent("clv-avatar", { detail: id })); } catch (e) {}
  }
  function html() {
    return `<div class="clvsheet" role="dialog" aria-modal="true" aria-label="Settings">
      <button class="clvgrab" data-close aria-label="Close settings"></button>
      <h2>⚙️ Settings <small>Sozlamalar</small><span class="clvauto" aria-live="polite">✓ Saved automatically · Avtomatik saqlanadi</span></h2>
      <div data-accslot>${account()}</div>
      ${faces()}
      <div class="clvgrp"><b>Look · Ko‘rinish</b>
        <div class="clvrow"><span>${L("Style", "Uslub: yangi, klassik yoki shisha")}</span>${seg("style", [["nova", "⭐ New"], ["classic", "Classic"], ["modern", "Glass"]])}</div>
        <div class="clvrow"><span>${L("Theme", "Mavzu")}</span>${seg("theme", [["auto", "Auto"], ["light", "☀️ Light"], ["dark", "\u{1F319} Dark"]])}</div>
        <div class="clvrow"><span>${L("Brightness", "Yorqinlik")}</span><input class="clvrange" type="range" min="40" max="100" step="5" data-r="bright" value="${S.bright}" aria-label="Brightness"><span class="clvval" data-rv="bright">${S.bright}%</span></div>
        <div class="clvrow"><span>${L("Text size", "Matn o‘lchami")}</span><input class="clvrange" type="range" min="85" max="150" step="5" data-r="size" value="${S.size}" aria-label="Text size"><span class="clvval" data-rv="size">${S.size}%</span></div>
      </div>
      <div class="clvgrp"><b>Reading and learning · O‘qish</b>
        <div class="clvrow"><span>${L("Reading mode", "O‘qish rejimi: katta matn, bitta ustun")}</span>${sw("reading")}</div>
        <div class="clvrow"><span>${L("Animations", "Animatsiyalar · Auto: kuchsiz telefonda kamroq")}</span>${seg("motion", [["auto", "Auto"], ["full", "✨ Full"], ["light", "Light"], ["off", "Off"]])}</div>
        <div class="clvrow"><span>${L("Uzbek help", "O‘zbekcha tarjimalar")}</span>${sw("uz")}</div>
        <div class="clvrow"><span>${L("Sound effects", "Ovoz effektlari")}</span>${sw("sound")}</div>
      </div>
      <div class="clvbtm"><button data-reset>Reset · Asl holiga</button></div></div>`;
  }
  /* Only the controls that changed are touched: no redraw of the whole sheet on every tap. */
  function update() {
    if (!box) return;
    box.querySelectorAll("[data-k]").forEach(b => b.setAttribute("aria-pressed", String(S[b.dataset.k] === b.dataset.v)));
    box.querySelectorAll("[data-sw]").forEach(b => b.setAttribute("aria-checked", String(!!S[b.dataset.sw])));
    box.querySelectorAll("[data-r]").forEach(r => { if (+r.value !== +S[r.dataset.r]) r.value = S[r.dataset.r]; });
    box.querySelectorAll("[data-rv]").forEach(v => { v.textContent = S[v.dataset.rv] + "%"; });
  }
  let saveT = 0, frame = 0, flashT = 0;
  function save(now) {
    clearTimeout(saveT);
    const go = () => { keep(S); const a = box && box.querySelector(".clvauto"); if (a) { a.classList.add("on"); clearTimeout(flashT); flashT = setTimeout(() => a.classList.remove("on"), 900); } };
    now ? go() : (saveT = setTimeout(go, 250));
  }
  function applySoon() { if (frame) return; frame = requestAnimationFrame(() => { frame = 0; apply(); }); }
  let box = null, lastFocus = null;
  function open() {
    mount(); lastFocus = document.activeElement;
    if (!box) {
      box = document.createElement("div"); box.className = "clvset"; document.body.appendChild(box);
      box.innerHTML = html();
      box.addEventListener("click", e => {
        if (e.target === box) return close();
        const b = e.target.closest("button"); if (!b) return;
        if (b.dataset.close != null) return close();
        if (b.dataset.ftab) { faceTab = b.dataset.ftab; const f = box.querySelector("[data-faces]"); if (f) f.outerHTML = faces(); return; }
        if (b.dataset.av != null) { pickFace(b.dataset.av); return; }
        if (b.dataset.k) { if (S[b.dataset.k] === b.dataset.v) return; S[b.dataset.k] = b.dataset.v; if (b.dataset.k === "style" && /^\/(index\.html)?$/.test(location.pathname)) setTimeout(() => location.reload(), 150); }
        else if (b.dataset.sw) { S[b.dataset.sw] = !S[b.dataset.sw]; }
        else if (b.dataset.reset != null) { S = Object.assign({}, DEF, { v2: true }); }
        else if (window.CLV_ACCOUNT && window.CLV_ACCOUNT.onClick && window.CLV_ACCOUNT.onClick(b)) return;
        else return;
        update(); apply(); save(true);
      });
      box.addEventListener("input", e => {
        const r = e.target.closest("[data-r]"); if (!r) return;
        S[r.dataset.r] = +r.value; const v = box.querySelector(`[data-rv="${r.dataset.r}"]`); if (v) v.textContent = r.value + "%";
        applySoon(); save(false);
      });
      box.addEventListener("change", e => { if (e.target.closest("[data-r]")) save(true); });
      box.addEventListener("keydown", e => { if (e.key === "Escape") close(); e.stopPropagation(); });
    } else update();
    paintAccount(); box.hidden = false;
    const f = box.querySelector(".clvsheet"); if (f) { f.setAttribute("tabindex", "-1"); f.focus({ preventScroll: true }); }
  }
  function paintAccount() { const slot = box && box.querySelector("[data-accslot]"); if (slot) slot.innerHTML = account(); }
  function close() { if (box) { save(true); box.hidden = true; } if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) {} }

  window.CLV_SETTINGS = {
    get: () => Object.assign({}, S),
    set(patch) { S = Object.assign({}, S, patch || {}); keep(S); apply(); update(); },
    open, close, repaint: paintAccount
  };
  document.addEventListener("click", e => { const g = e.target.closest("[data-settings]"); if (g) { e.preventDefault(); open(); } });
  apply();
  /* the floating scrollbar (computers only) */
  function floatingBar() {
    if (!matchMedia("(pointer:fine)").matches || document.getElementById("clvBar")) return;
    const zone = document.createElement("div"), bar = document.createElement("div");
    zone.className = "clvbarzone"; bar.className = "clvbar"; bar.id = "clvBar"; bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(zone); document.body.appendChild(bar);
    const se = () => document.scrollingElement || document.documentElement;
    let hideT = 0, drag = null;
    const place = () => {
      const el = se(), vh = innerHeight, full = el.scrollHeight;
      if (full <= vh + 2) { bar.style.display = "none"; zone.style.display = "none"; return; }
      bar.style.display = ""; zone.style.display = "";
      const h = Math.max(36, vh * vh / full), max = full - vh;
      bar.style.height = h + "px";
      bar.style.transform = `translateY(${(el.scrollTop / max) * (vh - h)}px)`;
    };
    const show = () => { place(); bar.classList.add("on"); clearTimeout(hideT); hideT = setTimeout(() => { if (!drag && !bar.matches(":hover")) bar.classList.remove("on"); }, 1200); };
    addEventListener("scroll", show, { passive: true });
    addEventListener("resize", place);
    zone.addEventListener("mouseenter", show); bar.addEventListener("mouseleave", show);
    if (window.ResizeObserver) new ResizeObserver(place).observe(document.body);
    bar.addEventListener("pointerdown", e => {
      e.preventDefault(); bar.setPointerCapture(e.pointerId); bar.classList.add("drag", "on");
      drag = { y: e.clientY, top: se().scrollTop };
    });
    bar.addEventListener("pointermove", e => {
      if (!drag) return;
      const el = se(), vh = innerHeight, h = bar.offsetHeight, max = el.scrollHeight - vh;
      el.scrollTop = drag.top + (e.clientY - drag.y) * max / Math.max(1, vh - h);
    });
    const end = () => { drag = null; bar.classList.remove("drag"); show(); };
    bar.addEventListener("pointerup", end); bar.addEventListener("pointercancel", end);
    /* click on the empty strip: jump a page up or down */
    zone.addEventListener("pointerdown", e => { const r = bar.getBoundingClientRect(); se().scrollBy({ top: (e.clientY < r.top ? -1 : 1) * innerHeight * .9, behavior: "smooth" }); });
    place();
  }
  const start = () => { mount(); floatingBar(); };
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
