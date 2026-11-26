/* ClivEdu motion: the animations of the new look. settings.js loads this file and motion.css.
   Levels (Settings → Animations):
     auto  → full on a good device, light on a weak one (little memory, few cores, old browser, slow frames)
     full  → tile sky, floating stars, star trail, page wipes, tilt, spotlight, magnet buttons, plus everything in light
     light → entrances, ripples, counting numbers, rolling digits
     off   → nothing moves (html.clv-calm, handled by settings.js)
   Pages mark things with: data-rv (entrance: up/left/right/pop/flip/zoom, --d = delay step), data-tilt, data-mag,
   data-count (number counts up), class nv-shine. window.CLV_MOTION.scan() picks up new elements. */
(function () {
  "use strict";
  const root = document.documentElement;
  let level = "off";

  function weak() {
    const n = navigator, mem = n.deviceMemory || 4, cpu = n.hardwareConcurrency || 4;
    if (mem < 3 || cpu < 4) return true;
    if (root.classList.contains("clv-nogap")) return true;                        /* an old browser (smart boards) */
    if (!(window.CSS && CSS.supports && CSS.supports("aspect-ratio", "1"))) return true;
    if (n.connection && n.connection.saveData) return true;
    try { if (sessionStorage.getItem("clv-slow") === "1") return true; } catch (e) {}
    return false;
  }
  function decide() {
    const S = (window.CLV_SETTINGS && window.CLV_SETTINGS.get()) || {};
    const want = S.motion || "auto";
    if (root.classList.contains("clv-calm") || want === "off") return "off";
    if (want === "full" || want === "light") return want;
    return weak() ? "light" : "full";
  }

  /* ---------- entrances ---------- */
  let io = null;
  function scan(scope) {
    if (level === "off") { (scope || document).querySelectorAll("[data-rv]").forEach(e => e.classList.add("in")); return; }
    if (!window.IntersectionObserver) { (scope || document).querySelectorAll("[data-rv]").forEach(e => e.classList.add("in")); return; }
    if (!io) io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const t = e.target; t.classList.add("in"); io.unobserve(t); setTimeout(() => t.classList.add("rvd"), 1100 + (+getComputedStyle(t).getPropertyValue("--d") || 0) * 70); } }), { rootMargin: "0px 0px -6% 0px", threshold: .08 });
    (scope || document).querySelectorAll("[data-rv]:not(.in):not([data-rvw])").forEach(e => { e.setAttribute("data-rvw", ""); io.observe(e); });
    (scope || document).querySelectorAll("[data-count]:not([data-cw])").forEach(countUp);
    (scope || document).querySelectorAll(".nv-shine:not([data-shw])").forEach(e => { e.setAttribute("data-shw", ""); const x = document.createElement("span"); x.className = "nv-sh"; x.setAttribute("aria-hidden", "true"); e.appendChild(x); });
    if (level === "full") { (scope || document).querySelectorAll("[data-tilt]:not([data-tw])").forEach(tilt); (scope || document).querySelectorAll("[data-mag]:not([data-mw])").forEach(magnet); }
  }

  /* numbers count up when they come into view */
  function countUp(el) {
    el.setAttribute("data-cw", "");
    const to = +el.dataset.count || 0; if (!to || level === "off") { el.textContent = to; return; }
    const run = () => { const t0 = performance.now(), dur = Math.min(1600, 500 + to * 4);
      (function f(t) { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4); el.textContent = Math.round(to * e); if (k < 1) requestAnimationFrame(f); })(t0); };
    el.textContent = "0";
    if (window.IntersectionObserver) { const o = new IntersectionObserver(es => { if (es[0].isIntersecting) { o.disconnect(); run(); } }); o.observe(el); } else run();
  }

  /* ripple wherever you tap a card or a button */
  function ripple(e) {
    if (level === "off") return;
    const el = e.target.closest(".tile,.cta,.chip,.stop,.bdg,.acts button,.grpbtn,.signcard,.seg button,.tabs button,.btn,.goal,button.big"); if (!el) return;
    const r = el.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2.2, d = document.createElement("span");
    if (getComputedStyle(el).position === "static") el.style.position = "relative";
    if (getComputedStyle(el).overflow !== "hidden") el.style.overflow = "hidden";
    d.className = "nv-rip"; d.style.cssText = `width:${s}px;height:${s}px;left:${e.clientX - r.left - s / 2}px;top:${e.clientY - r.top - s / 2}px`;
    el.appendChild(d); setTimeout(() => d.remove(), 700);
  }

  /* ---------- full: 3D tilt with a light that follows the finger/mouse ---------- */
  function tilt(el) {
    el.setAttribute("data-tw", "");
    if (getComputedStyle(el).position === "static") el.style.position = "relative";
    const max = +el.dataset.tilt || 7;
    el.addEventListener("pointermove", e => {
      if (e.pointerType === "touch" || (el.hasAttribute("data-rv") && !el.classList.contains("rvd"))) return;
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.classList.add("tilting");
      el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg) translateZ(0)`;
      el.style.setProperty("--mx", x * 100 + "%"); el.style.setProperty("--my", y * 100 + "%");
    });
    el.addEventListener("pointerleave", () => { el.classList.remove("tilting"); el.style.transform = ""; });
  }
  function magnet(el) {
    el.setAttribute("data-mw", "");
    el.addEventListener("pointermove", e => { if (e.pointerType === "touch") return; const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`; });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  }

  /* ---------- full: the moving tile sky ---------- */
  function sky() {
    if (document.getElementById("nvSky") || !root.classList.contains("clvpaper")) return;
    const s = document.createElement("div"); s.id = "nvSky"; s.setAttribute("aria-hidden", "true");
    let stars = "";
    const n = innerWidth < 600 ? 12 : 22;
    for (let i = 0; i < n; i++) {
      const size = 8 + Math.random() * 22, c = ["", "c2", "c3"][i % 3];
      stars += `<i class="st ${c}" style="left:${Math.random() * 100}%;--s:${size}px;--t:${14 + Math.random() * 18}s;--dl:${-Math.random() * 30}s;--x:${(Math.random() - .5) * 160}px;--r:${(Math.random() < .5 ? -1 : 1) * (180 + Math.random() * 360)}deg"></i>`;
    }
    s.innerHTML = `<div class="par" data-depth="10"><span class="lat"></span></div><div class="par" data-depth="30"><span class="au a1"></span><span class="au a2"></span><span class="au a3"></span><span class="au a4"></span></div><div class="par" data-depth="60">${stars}</div>`;
    document.body.prepend(s);
    const layers = s.querySelectorAll(".par");
    let raf = 0, mx = 0, my = 0, sy = 0;
    const paint = () => { raf = 0; layers.forEach(l => { const d = +l.dataset.depth; l.style.transform = `translate3d(${mx * d}px,${my * d - sy * d / 400}px,0)`; }); };
    addEventListener("pointermove", e => { if (e.pointerType === "touch") return; mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; if (!raf) raf = requestAnimationFrame(paint); }, { passive: true });
    addEventListener("scroll", () => { sy = scrollY; if (!raf) raf = requestAnimationFrame(paint); }, { passive: true });
    if (window.DeviceOrientationEvent && matchMedia("(pointer:coarse)").matches) addEventListener("deviceorientation", e => {
      if (e.gamma == null) return; mx = Math.max(-.5, Math.min(.5, e.gamma / 60)); my = Math.max(-.5, Math.min(.5, (e.beta - 40) / 80)); if (!raf) raf = requestAnimationFrame(paint); }, { passive: true });
  }

  /* ---------- full: star trail behind the mouse ---------- */
  function trail() {
    if (!matchMedia("(pointer:fine)").matches || document.getElementById("nvTrail")) return;
    const c = document.createElement("canvas"); c.id = "nvTrail"; c.setAttribute("aria-hidden", "true"); document.body.appendChild(c);
    const x = c.getContext("2d"); if (!x) return;
    let W, H, dpr; const size = () => { dpr = Math.min(2, devicePixelRatio || 1); W = c.width = innerWidth * dpr; H = c.height = innerHeight * dpr; c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px"; };
    size(); addEventListener("resize", size);
    const cols = ["#F4A91D", "#13A3B0", "#2B44C2", "#D23B55", "#FFD27A"], P = [];
    let run = false, lx = 0, ly = 0;
    addEventListener("pointermove", e => {
      if (e.pointerType !== "mouse") return;
      const dx = e.clientX - lx, dy = e.clientY - ly; lx = e.clientX; ly = e.clientY;
      if (dx * dx + dy * dy < 30) return;
      for (let i = 0; i < 2; i++) P.push({ x: e.clientX * dpr, y: e.clientY * dpr, vx: (Math.random() - .5) * 1.2 * dpr, vy: (Math.random() * .6 + .2) * dpr, r: (2.5 + Math.random() * 4) * dpr, a: Math.random() * 6, l: 1, c: cols[Math.floor(Math.random() * cols.length)] });
      if (P.length > 90) P.splice(0, P.length - 90);
      if (!run) { run = true; requestAnimationFrame(tick); }
    }, { passive: true });
    function star(px, py, r, a) { x.beginPath(); for (let i = 0; i < 16; i++) { const ang = a + i * Math.PI / 8, rr = i % 2 ? r * .55 : r; x.lineTo(px + Math.cos(ang) * rr, py + Math.sin(ang) * rr); } x.closePath(); x.fill(); }
    function tick() {
      x.clearRect(0, 0, W, H);
      for (let i = P.length - 1; i >= 0; i--) { const p = P[i]; p.x += p.vx; p.y += p.vy; p.l -= .022; p.a += .08; if (p.l <= 0) { P.splice(i, 1); continue; }
        x.globalAlpha = p.l; x.fillStyle = p.c; star(p.x, p.y, p.r * p.l, p.a); }
      x.globalAlpha = 1;
      if (P.length) requestAnimationFrame(tick); else run = false;
    }
  }

  /* ---------- full: page wipe between pages ---------- */
  function wipe() {
    if (document.getElementById("nvWipe")) return;
    const w = document.createElement("div"); w.id = "nvWipe"; w.setAttribute("aria-hidden", "true"); w.innerHTML = "<i></i>"; document.body.appendChild(w);
    const big = Math.hypot(innerWidth, innerHeight) / 40 * 2.6;
    w.style.setProperty("--big", big);
    let came = null; try { came = JSON.parse(sessionStorage.getItem("clv-wipe") || "null"); sessionStorage.removeItem("clv-wipe"); } catch (e) {}
    if (came && Date.now() - came.t < 4000) {
      w.style.setProperty("--x", came.x * innerWidth + "px"); w.style.setProperty("--y", came.y * innerHeight + "px");
      root.classList.add("nv-enter"); setTimeout(() => root.classList.remove("nv-enter"), 800);
    }
    document.addEventListener("click", e => {
      if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest("a[href]"); if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const u = new URL(a.href, location.href);
      if (u.origin !== location.origin || (u.pathname === location.pathname && u.hash) || /\.(pdf|png|jpg|webp)$/i.test(u.pathname)) return;
      e.preventDefault();
      w.style.setProperty("--x", e.clientX + "px"); w.style.setProperty("--y", e.clientY + "px");
      try { sessionStorage.setItem("clv-wipe", JSON.stringify({ t: Date.now(), x: e.clientX / innerWidth, y: e.clientY / innerHeight })); } catch (er) {}
      root.classList.add("nv-leave"); setTimeout(() => { location.href = u.href; }, 430);
    });
    addEventListener("pageshow", e => { if (e.persisted) root.classList.remove("nv-leave", "nv-enter"); });
  }

  /* auto: if the first two seconds run slowly, drop to light for the rest of the visit */
  function watchFrames() {
    let n = 0, t0 = 0, slow = 0;
    const f = t => { if (!t0) t0 = t; else { const dt = t - t0; t0 = t; if (dt > 34) slow++; } if (++n < 90) requestAnimationFrame(f); else if (slow > 35) { try { sessionStorage.setItem("clv-slow", "1"); } catch (e) {} setLevel("light"); } };
    requestAnimationFrame(f);
  }

  /* auto-mark the common blocks of the student pages so they rise in */
  function autoMark() {
    const sel = ".wrap > section, .wrap > .box, main.wrap > *, .wrap > .card, .wrap > .panel, .wrap > header, .wrap > h1, .wrap > .top + *";
    let i = 0; document.querySelectorAll(sel).forEach(el => { if (!el.hasAttribute("data-rv") && !el.closest("[data-rv]") && el.id !== "nvSky") { el.setAttribute("data-rv", ""); el.style.setProperty("--d", Math.min(i++, 8)); } });
  }

  /* a fast fling can jump past a block: anything already above the bottom of the screen is shown */
  let sweepT = 0;
  addEventListener("scroll", () => { if (sweepT) return; sweepT = setTimeout(() => { sweepT = 0;
    document.querySelectorAll("[data-rv]:not(.in)").forEach(e => { if (e.getBoundingClientRect().top < innerHeight) { e.classList.add("in"); setTimeout(() => e.classList.add("rvd"), 1100); } }); }, 150); }, { passive: true });
  function setLevel(l) {
    level = l;
    root.classList.toggle("nv-on", l !== "off"); root.classList.toggle("nv-full", l === "full"); root.classList.toggle("nv-light", l === "light");
    /* the class game keeps every bit of the phone's speed for answering: no sky or trail there */
    const busyPage = /^\/play\//.test(location.pathname);
    if (l === "full") { if (!busyPage) { sky(); trail(); } wipe(); }
    else { ["nvSky", "nvTrail"].forEach(id => { const e = document.getElementById(id); if (e) e.remove(); }); }
    scan();
  }
  function start() {
    autoMark();
    setLevel(decide());
    if (level === "full" && ((window.CLV_SETTINGS && window.CLV_SETTINGS.get().motion) || "auto") === "auto") watchFrames();
    document.addEventListener("pointerdown", ripple, { passive: true });
    addEventListener("clv-settings", () => { const l = decide(); if (l !== level) setLevel(l); });
  }
  window.CLV_MOTION = { scan, level: () => level, setLevel };
  /* start once the page is there and motion.css has arrived (otherwise the entrances would have no movement) */
  let started = false;
  const go = () => { if (started || document.readyState === "loading" || !window.CLV_MOTION_CSS) return; started = true; requestAnimationFrame(start); };
  document.addEventListener("DOMContentLoaded", go); addEventListener("clv-motioncss", go);
  setTimeout(() => { window.CLV_MOTION_CSS = true; go(); }, 2000);
  go();
})();
