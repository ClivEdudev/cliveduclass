/* Shared helpers for the live game host and player pages. */
(function () {
  "use strict";
  const SHAPES = [
    '<path d="M20 4 L37 34 L3 34 Z"/>',
    '<path d="M20 2 L37 20 L20 38 L3 20 Z"/>',
    '<circle cx="20" cy="20" r="16"/>',
    '<rect x="5" y="5" width="30" height="30" rx="3"/>'
  ];
  const NAMES = ["triangle", "diamond", "circle", "square"];
  let actx = null, parts = [], raf = 0;
  const cv = document.getElementById("confetti"), cx = cv ? cv.getContext("2d") : null;
  const size = () => { if (cv) { cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio; } };
  size(); addEventListener("resize", size);
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  function tick() {
    cx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); cx.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter(p => p.life-- > 0);
    for (const p of parts) { p.vy += .35; p.x += p.vx; p.y += p.vy; p.a += .2; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a); cx.fillStyle = p.c; cx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); cx.restore(); }
    raf = parts.length ? requestAnimationFrame(tick) : 0;
    if (!raf) cx.clearRect(0, 0, innerWidth, innerHeight);
  }
  window.LiveUI = {
    esc: s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])),
    shuffle: a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; },
    shape: i => `<svg class="shp" viewBox="0 0 40 40" width="40" height="40" role="img" aria-label="${NAMES[i]}">${SHAPES[i]}</svg>`,
    status(st) { const el = document.getElementById("net"); if (el) { el.className = "net " + st; el.textContent = st === "online" ? "Online" : "Reconnecting…"; } },
    ding(freq = 880) {
      try {
        actx = actx || new (window.AudioContext || window.webkitAudioContext)();
        const o = actx.createOscillator(), g = actx.createGain();
        o.frequency.value = freq; o.type = "sine"; g.gain.setValueAtTime(.12, actx.currentTime); g.gain.exponentialRampToValueAtTime(.001, actx.currentTime + .25);
        o.connect(g); g.connect(actx.destination); o.start(); o.stop(actx.currentTime + .26);
      } catch (e) {}
    },
    confetti(x, y, n = 90) {
      if (!cx || reduce) return;
      const cols = ["#E0424F", "#2F6FE0", "#F2B705", "#1E9B57", "#FFF8E7"];
      for (let i = 0; i < n; i++) parts.push({ x, y, vx: (Math.random() - .5) * 14, vy: -Math.random() * 13 - 3, r: 4 + Math.random() * 6, c: cols[i % cols.length], a: Math.random() * 6, life: 80 + Math.random() * 40 });
      if (!raf) raf = requestAnimationFrame(tick);
    }
  };
})();
