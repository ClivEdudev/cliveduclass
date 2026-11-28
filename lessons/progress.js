/* Levels, badges and streaks, worked out on this phone from what is already saved:
   lesson points (clv-points), daily challenge days (clv-daily), Word bank cards (clv-words),
   the account and the profile picture. Used by the home page and the profile page.
   window.CLV_PROGRESS.stats() → { total, level, next, into, need, name, streak, badges:[…] } */
(function () {
  "use strict";
  const read = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k) || "null"); return v == null ? d : v; } catch (e) { return d; } };

  /* level n starts at 25·n·(n−1) points: 0, 50, 150, 300, 500, 750, 1050 … */
  const startOf = n => 25 * n * (n - 1);
  const NAMES = [
    ["Starter", "Boshlovchi"], ["Explorer", "Kashfiyotchi"], ["Traveller", "Sayyoh"], ["Caravan rider", "Karvon yo‘lchisi"],
    ["Silk Road guide", "Ipak yo‘li yo‘lboshchisi"], ["Bazaar talker", "Bozor so‘zamoli"], ["City speaker", "Shahar notig‘i"],
    ["Registan star", "Registon yulduzi"], ["Sky reader", "Osmon kitobxoni"], ["Master of words", "So‘z ustasi"]
  ];
  const levelOf = pts => { let n = 1; while (pts >= startOf(n + 1)) n++; return n; };

  function streak() {
    const D = read("clv-daily", {});
    const k = t => new Date(t + 5 * 3600e3).toISOString().slice(0, 10);
    let n = 0, t = Date.now(); if (!D[k(t)]) t -= 864e5; while (D[k(t)]) { n++; t -= 864e5; }
    return { n, today: !!D[k(Date.now())], days: Object.keys(D).length };
  }

  const BADGES = [
    { id: "first", icon: "🌱", en: "First points", uz: "Birinchi ballar", how: "Get points in any lesson", test: s => s.total > 0 },
    { id: "p100", icon: "💯", en: "100 points", uz: "100 ball", how: "Collect 100 points", test: s => s.total >= 100 },
    { id: "p500", icon: "🏅", en: "500 points", uz: "500 ball", how: "Collect 500 points", test: s => s.total >= 500 },
    { id: "p1000", icon: "🏆", en: "1000 points", uz: "1000 ball", how: "Collect 1000 points", test: s => s.total >= 1000 },
    { id: "lessons5", icon: "📚", en: "Five lessons", uz: "Beshta dars", how: "Get points in 5 lessons", test: s => s.lessons >= 5 },
    { id: "daily", icon: "📅", en: "Daily player", uz: "Kunlik o‘yinchi", how: "Finish a daily challenge", test: s => s.dailyDays >= 1 },
    { id: "streak3", icon: "🔥", en: "3 days in a row", uz: "3 kun ketma-ket", how: "Daily challenge 3 days in a row", test: s => s.best >= 3 },
    { id: "streak7", icon: "☄️", en: "7 days in a row", uz: "7 kun ketma-ket", how: "Daily challenge 7 days in a row", test: s => s.best >= 7 },
    { id: "words20", icon: "🃏", en: "20 words", uz: "20 so‘z", how: "Know 20 cards in the Word bank", test: s => s.known >= 20 },
    { id: "words100", icon: "🧠", en: "100 words", uz: "100 so‘z", how: "Know 100 cards in the Word bank", test: s => s.known >= 100 },
    { id: "face", icon: "🙂", en: "My picture", uz: "Mening rasmim", how: "Choose a profile picture", test: s => s.face },
    { id: "signed", icon: "✈️", en: "Signed in", uz: "Kirdim", how: "Sign in with Telegram", test: s => s.signed }
  ];

  function stats() {
    const pts = read("clv-points", {});
    const total = Object.keys(pts).reduce((a, k) => a + (+pts[k] || 0), 0);
    const st = streak();
    const best = Math.max(st.n, +read("clv-beststreak", 0) || 0);
    if (best > (+read("clv-beststreak", 0) || 0)) try { localStorage.setItem("clv-beststreak", String(best)); } catch (e) {}
    const W = read("clv-words", {});
    const known = Object.keys(W).filter(k => (W[k] && W[k].b) >= 2).length;
    const A = window.CLV_ACCOUNT, u = A && A.user;
    const face = /^[gbn]\d\d$/.test((u && u.avatar) || read("clv-avatar", "") || "");
    const level = levelOf(total), a = startOf(level), b = startOf(level + 1);
    const s = { total, level, into: total - a, need: b - a, next: b, streak: st.n, dailyToday: st.today, dailyDays: st.days, best,
      known, words: Object.keys(W).length, lessons: Object.keys(pts).filter(k => +pts[k] > 0).length, face, signed: !!u };
    const nm = NAMES[Math.min(level, NAMES.length) - 1]; s.name = nm[0]; s.nameUz = nm[1];
    s.badges = BADGES.map(x => ({ id: x.id, icon: x.icon, en: x.en, uz: x.uz, how: x.how, got: !!x.test(s) }));
    return s;
  }

  /* the 8-point star medallion: eight petals fill in as the level fills up */
  function medallion(s, size) {
    const R = 46, r = 33, cx = 50, cy = 50, filled = Math.floor(8 * s.into / Math.max(1, s.need));
    const P = (a, rr) => [cx + rr * Math.cos(a), cy + rr * Math.sin(a)].map(v => v.toFixed(2)).join(",");
    let petals = "";
    for (let i = 0; i < 8; i++) {
      const a0 = -Math.PI / 2 + i * Math.PI / 4, a1 = a0 + Math.PI / 8, a2 = a0 + Math.PI / 4;
      petals += `<polygon class="pet${i < filled ? " on" : ""}" style="--i:${i}" points="${cx},${cy} ${P(a0, R)} ${P(a1, r)} ${P(a2, R)}"/>`;
    }
    return `<svg class="medal" viewBox="0 0 100 100" width="${size || 160}" height="${size || 160}" role="img" aria-label="Level ${s.level}, ${s.into} of ${s.need} points to the next level">
      ${petals}<circle cx="50" cy="50" r="21" class="core"/><text x="50" y="49" class="lv">${s.level}</text><text x="50" y="61" class="lvl">level</text></svg>`;
  }

  /* level-up: confetti in tile colours, once per new level */
  function celebrate(s, onUp) {
    const last = +read("clv-level", 0) || 0;
    try { localStorage.setItem("clv-level", String(s.level)); } catch (e) {}
    if (!last || s.level <= last) return false;
    if (onUp) onUp(s);
    confetti();
    return true;
  }
  function confetti() {
    if (document.documentElement.classList.contains("clv-calm")) return;
    const c = document.createElement("canvas"); c.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:2147482500";
    document.body.appendChild(c); const x = c.getContext("2d"); if (!x) return;
    const W = c.width = innerWidth * (devicePixelRatio || 1), H = c.height = innerHeight * (devicePixelRatio || 1);
    const cols = ["#2B44C2", "#13A3B0", "#F4A91D", "#D23B55", "#ffffff"];
    const bits = Array.from({ length: 140 }, () => ({ x: W / 2, y: H * .35, vx: (Math.random() - .5) * W * .025, vy: -Math.random() * H * .03, r: 4 + Math.random() * 7, c: cols[Math.floor(Math.random() * cols.length)], a: Math.random() * 6, s: (Math.random() - .5) * .3 }));
    let f = 0;
    (function tick() {
      x.clearRect(0, 0, W, H);
      bits.forEach(b => { b.vy += H * .0009; b.x += b.vx; b.y += b.vy; b.vx *= .99; b.a += b.s;
        x.save(); x.translate(b.x, b.y); x.rotate(b.a); x.fillStyle = b.c; x.beginPath();
        for (let i = 0; i < 8; i++) { const ang = i * Math.PI / 4, rr = i % 2 ? b.r * .5 : b.r; x.lineTo(Math.cos(ang) * rr, Math.sin(ang) * rr); }
        x.fill(); x.restore(); });
      if (++f < 200) requestAnimationFrame(tick); else c.remove();
    })();
  }
  window.CLV_PROGRESS = { stats, medallion, celebrate, confetti, levelOf, startOf, NAMES };
})();
