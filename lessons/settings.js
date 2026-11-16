/* ClivEdu settings: theme, brightness, text size, reading mode, calm mode, Uzbek help, sounds.
   Loaded in <head> on every page so the choice applies before anything is drawn.
   Saved on this device now; once sign-in exists the profile keeps a copy. */
(function () {
  "use strict";
  const KEY = "clv-settings";
  const DEF = { theme: "light", bright: 100, size: 100, reading: false, calm: false, uz: true, sound: true };
  const root = document.documentElement;
  const load = () => { try { return Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { return Object.assign({}, DEF); } };
  const keep = s => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} };
  let S = load();
  const mq = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : null;
  const rm = window.matchMedia ? matchMedia("(prefers-reduced-motion: reduce)") : null;

  function apply() {
    const dark = S.theme === "dark" || (S.theme === "auto" && mq && mq.matches);
    root.dataset.theme = dark ? "dark" : "light";
    root.classList.toggle("clv-reading", !!S.reading);
    root.classList.toggle("clv-calm", !!S.calm || !!(rm && rm.matches));
    root.classList.toggle("clv-nouz", !S.uz);
    root.classList.toggle("clv-mute", !S.sound);
    root.style.setProperty("--clv-scale", String((S.size || 100) / 100));
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
.clvsheet .x{margin-left:auto;font:800 15px inherit;background:var(--soft);color:var(--f);border:0;border-radius:999px;padding:9px 16px;cursor:pointer}
.clvgrp{display:flex;flex-direction:column;gap:12px;background:var(--soft);border-radius:16px;padding:14px}
.clvgrp > b{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--s)}
.clvrow{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.clvrow > span{flex:1;min-width:140px;font-weight:700}
.clvrow > span small{display:block;font-weight:600;font-size:13px;color:var(--t)}
.clvseg{display:flex;background:var(--b);border:2px solid var(--l);border-radius:12px;padding:3px;gap:3px}
.clvseg button{font:700 14px inherit;color:var(--f);background:none;border:0;border-radius:9px;padding:8px 12px;cursor:pointer}
.clvseg button[aria-pressed="true"]{background:var(--a);color:#12263A}
.clvsw{position:relative;width:52px;height:30px;border-radius:999px;background:var(--l);border:0;cursor:pointer;flex:none}
.clvsw::after{content:"";position:absolute;top:3px;left:3px;width:24px;height:24px;border-radius:50%;background:#fff;transition:left .15s}
.clvsw[aria-checked="true"]{background:#1C8F50}
.clvsw[aria-checked="true"]::after{left:25px}
.clvrange{flex:1 1 180px;accent-color:#E8A90A;height:28px}
.clvval{min-width:46px;text-align:right;font-weight:800;font-variant-numeric:tabular-nums}
.clvbtm{display:flex;gap:10px;flex-wrap:wrap}
.clvbtm button{font:800 15px inherit;border:2px solid var(--l);background:var(--b);color:var(--f);border-radius:12px;padding:10px 14px;cursor:pointer}
.clvacc{display:flex;align-items:center;gap:12px}
.clvacc .av{width:44px;height:44px;border-radius:50%;background:var(--a);color:#12263A;display:grid;place-items:center;font-weight:800;font-size:18px;flex:none;overflow:hidden}
.clvacc .av img{width:100%;height:100%;object-fit:cover}
.clvacc p{margin:0;flex:1;min-width:0}
.clvacc p small{display:block;color:var(--s)}
.clvsheet button:focus-visible,.clvsheet input:focus-visible{outline:3px solid #1F5FD1;outline-offset:2px}
.clvgear{cursor:pointer}`;

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
  function html() {
    return `<div class="clvsheet" role="dialog" aria-modal="true" aria-label="Settings">
      <h2>⚙️ Settings <small>Sozlamalar</small><button class="x" data-close>Done · Tayyor</button></h2>
      ${account()}
      <div class="clvgrp"><b>Look · Ko‘rinish</b>
        <div class="clvrow"><span>${L("Theme", "Mavzu")}</span>${seg("theme", [["auto", "Auto"], ["light", "☀️ Light"], ["dark", "\u{1F319} Dark"]])}</div>
        <div class="clvrow"><span>${L("Brightness", "Yorqinlik")}</span><input class="clvrange" type="range" min="40" max="100" step="5" data-r="bright" value="${S.bright}" aria-label="Brightness"><span class="clvval" data-rv="bright">${S.bright}%</span></div>
        <div class="clvrow"><span>${L("Text size", "Matn o‘lchami")}</span><input class="clvrange" type="range" min="85" max="150" step="5" data-r="size" value="${S.size}" aria-label="Text size"><span class="clvval" data-rv="size">${S.size}%</span></div>
      </div>
      <div class="clvgrp"><b>Reading and learning · O‘qish</b>
        <div class="clvrow"><span>${L("Reading mode", "O‘qish rejimi: katta matn, bitta ustun")}</span>${sw("reading")}</div>
        <div class="clvrow"><span>${L("Less animation", "Kamroq harakat")}</span>${sw("calm")}</div>
        <div class="clvrow"><span>${L("Uzbek help", "O‘zbekcha tarjimalar")}</span>${sw("uz")}</div>
        <div class="clvrow"><span>${L("Sound effects", "Ovoz effektlari")}</span>${sw("sound")}</div>
      </div>
      <div class="clvbtm"><button data-reset>Reset · Asl holiga</button></div></div>`;
  }
  let box = null, lastFocus = null;
  function open() {
    mount(); lastFocus = document.activeElement;
    if (!box) {
      box = document.createElement("div"); box.className = "clvset"; document.body.appendChild(box);
      box.addEventListener("click", e => {
        if (e.target === box) return close();
        const b = e.target.closest("button"); if (!b) return;
        if (b.dataset.close != null) return close();
        if (b.dataset.k) { S[b.dataset.k] = b.dataset.v; }
        else if (b.dataset.sw) { S[b.dataset.sw] = !S[b.dataset.sw]; }
        else if (b.dataset.reset != null) { S = Object.assign({}, DEF); }
        else if (window.CLV_ACCOUNT && window.CLV_ACCOUNT.onClick && window.CLV_ACCOUNT.onClick(b)) return;
        else return;
        keep(S); apply(); paint();
      });
      box.addEventListener("input", e => {
        const r = e.target.closest("[data-r]"); if (!r) return;
        S[r.dataset.r] = +r.value; const v = box.querySelector(`[data-rv="${r.dataset.r}"]`); if (v) v.textContent = r.value + "%";
        keep(S); apply();
      });
      box.addEventListener("keydown", e => { if (e.key === "Escape") close(); e.stopPropagation(); });
    }
    paint(); box.hidden = false;
    const f = box.querySelector("[data-close]"); if (f) f.focus();
  }
  function paint() { if (box) box.innerHTML = html(); }
  function close() { if (box) box.hidden = true; if (lastFocus && lastFocus.focus) try { lastFocus.focus(); } catch (e) {} }

  window.CLV_SETTINGS = {
    get: () => Object.assign({}, S),
    set(patch) { S = Object.assign({}, S, patch || {}); keep(S); apply(); paint(); },
    open, close, repaint: paint
  };
  document.addEventListener("click", e => { const g = e.target.closest("[data-settings]"); if (g) { e.preventDefault(); open(); } });
  apply();
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);
})();
