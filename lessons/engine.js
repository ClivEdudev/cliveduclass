/* ClivEdu Class lesson engine.
   A lesson page sets window.LESSON = { n, title, slides:[...], games:{...} } and then loads this file.
   It builds the presenter: 1920×1080 scaled stage, tap-to-reveal answers, team scoreboard and games. */
(() => {
"use strict";
const L = window.LESSON;
if (!L) return;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const strip = s => String(s || "").replace(/<[^>]*>/g, "");
const pick = a => a[Math.floor(Math.random() * a.length)];
const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const TC = ["#1F5FD1", "#B42318", "#157347", "#9A6A00"];
const TC_CHROME = ["#7FA2F5", "#F2788B", "#6CCB8A", "#F2BE4A"];
const WHEEL_COLORS = [["#1F5FD1",0],["#0B6E70",0],["#B42318",0],["#E7A61C",1],["#157347",0],["#5B3FA8",0]];
const G0 = L.games || {};

/* ================= SLIDE TEMPLATES ================= */
const notes = n => n && n.length ? `<div class="notes">${n.map(x => `<span class="note">${x}</span>`).join("")}</div>` : "";
const hd = s => `<div>${s.eb ? `<p class="eb">${s.eb}</p>` : ""}<h2 class="h2"${s.eb ? ' style="margin-top:12px"' : ""}>${s.title}</h2>${s.sub ? `<p class="sub" style="margin-top:8px">${s.sub}</p>` : ""}</div>`;
const BG = { ink: "ink", yel: "yel", sky: "sky", teal: "tealbg", cream: "" };
const R = {
  cover: s => `<div><span class="tag">${s.tag || "Lesson " + L.n}</span></div><h1 class="h1">${s.title}</h1><p class="lead">${s.lead || ""}</p>
    <div class="row">${(s.chips || []).map(([t, c]) => `<span class="bub ${c}">${t}</span>`).join("")}</div>`,
  goals: s => `<h2 class="h2">${s.title || "Today you will…"}</h2><div class="cols flex1">${s.items.map((it, i) => `<div class="card big ${["peach","mint","skyb"][i % 3]}">
    <p class="numc">${i + 1}</p><p class="enb">${it[0]}</p><p class="en" style="font-size:40px">${it[1]}</p><p class="uz">${it[2]}</p></div>`).join("")}</div>`,
  spot: (s, i) => `<div class="row" style="justify-content:space-between"><h2 class="h2">${s.title}</h2><button class="sbtn" data-spotlight="sp${i}">Pick for me</button></div>
    ${s.sub ? `<p class="sub">${s.sub}</p>` : ""}
    <div class="${s.cards.length > 4 ? "g3 r2" : "g2 r2"} flex1" id="sp${i}">${s.cards.map(c => { const o = typeof c === "string" ? { t: c } : c;
      return `<div class="card spot" style="background:var(--cream);align-items:center;text-align:center">${o.eb ? `<span class="eb">${o.eb}</span>` : ""}<span class="enb" style="font-size:${s.size || 64}px">${o.t}</span>${o.uz ? `<span class="uz small">${o.uz}</span>` : ""}</div>`; }).join("")}</div>`,
  formula: s => `${hd(s)}${s.rows.map(r => `<div class="frow">${r.chips.map(([t, c]) => `<span class="fc ${c}">${t}</span>`).join("")}<span class="uz">${r.uz || ""}</span></div>`).join("")}${notes(s.notes)}`,
  cols: s => `${hd(s)}<div class="cols flex1">${s.cols.map(c => `<div class="card big ${c.bg || "skyb"}">
    ${c.label ? `<span class="lbl ${c.lc || ""}">${c.label}</span>` : ""}${c.who ? `<p class="who">${c.who}</p>` : ""}${c.huge ? `<p class="huge">${c.huge}</p>` : ""}
    ${(c.lines || []).map(l => `<p class="en" style="font-size:${c.fs || 44}px">${l}</p>`).join("")}${c.uz ? `<p class="uz small">${c.uz}</p>` : ""}</div>`).join("")}</div>${notes(s.notes)}`,
  examples: s => `${hd(s)}<div class="g2 ${s.items.length > 4 ? "r3" : "r2"} flex1">${s.items.map(([en, uz]) => `<div class="card ln"><p class="en">${en}</p><p class="uz">${uz}</p></div>`).join("")}</div>`,
  quad: s => `${hd(s)}<div class="g2 r2 flex1">${s.items.map(q => `<div class="card quad ${q.bg}"><p class="huge">${q.w}</p><div><span class="lbl">${q.label}</span><p class="en">${q.en}</p><p class="uz small">${q.uz}</p></div></div>`).join("")}</div>`,
  quiz: s => `${hd(s)}<div class="qlist">${s.rows.map((r, i) => {
      const fix = s.kind === "fix";
      return `<div class="qrow ${fix ? "warn" : (s.bg === "yel" ? "" : "ln")}">${fix ? '<span class="bang">!</span>' : `<span class="num">${i + 1}</span>`}
        <p class="qt ${s.kind === "uz" ? "" : "e"}" style="font-size:${s.fs || (s.kind === "uz" ? 40 : 44)}px">${r[0]}</p>
        <button class="ans ${r[2] || ""}"${s.w ? ` style="width:${s.w}px"` : ""}>${r[1]}</button></div>`; }).join("")}</div>`,
  gaps: s => `${hd(s)}<div class="g2 r3 flex1">${s.rows.map(([q, a], i) => `<div class="qrow ln"><p class="qt e" style="font-size:${s.fs || 42}px">${i + 1}. ${q}</p><button class="ans sm"${s.w ? ` style="width:${s.w}px"` : ""}>${a}</button></div>`).join("")}</div>`,
  table: s => `${hd(s)}<table class="tbl"><tr>${s.head.map(h => `<th>${h}</th>`).join("")}</tr>${s.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</table>${notes(s.notes)}`,
  check: s => `<div><h2 class="h2">Can you…?</h2><p class="sub" style="margin-top:8px">Thumb up = yes. Middle = a little. Down = not yet. Tap a line when the class is confident.</p></div>
    <div class="g2 r3 flex1">${s.items.map(t => `<button class="qrow ln checkit"><span class="tick">✓</span><p class="qt e" style="font-size:40px;text-align:left">${t}</p></button>`).join("")}</div>`,
  bye: s => `<div style="flex:1;display:flex;flex-direction:column;gap:36px">
      <div><span class="tag">Exit ticket</span></div>
      <h1 class="h1" style="font-size:130px">Great job!<br><span class="cy">Rahmat!</span></h1>
      <p class="lead">${s.lead || "Say one sentence on your way out:"}</p>
      <div class="row" style="gap:18px">${(s.chips || []).map(([t, c]) => `<span class="bub ${c}">${t}</span>`).join("")}</div></div>
    <div style="width:720px;display:flex;flex-direction:column;gap:24px"><p class="eb">Final scores</p><div class="lb" id="leaderboard"></div><div><button class="sbtn y" data-celebrate>Celebrate the winners</button></div></div>`,
  game: s => `<div id="g-${s.g}" style="display:contents"></div>`
};
function sectionHTML(s, i) {
  const cls = ["s"];
  if (s.t === "cover") cls.push("ink", "center");
  else if (s.t === "bye") cls.push("ink");
  else if (s.bg && BG[s.bg]) cls.push(BG[s.bg]);
  const style = s.t === "bye" ? ' style="flex-direction:row;gap:64px;align-items:center"' : "";
  const title = strip(s.menu || s.title || (s.t === "bye" ? "Winners and exit ticket" : s.t === "check" ? "Can you…?" : s.t === "goals" ? "Today you will…" : GAME_TITLES[s.g] || s.t));
  const game = s.t === "game" ? ` data-game="${s.g}"` : s.t === "bye" ? ' data-game="bye"' : "";
  return `<section class="${cls.join(" ")}" data-title="${esc(title)}"${game}${style}>${R[s.t](s, i)}</section>`;
}
const GAME_TITLES = { board: "Quiz Board", auction: "Grammar Auction", build: "Sentence Builder", wheel: "Spin the Wheel", mime: "Mime and Say", mystery: "Mystery Place", boss: "Boss Says…" };

/* ================= PAGE ================= */
document.title = `Lesson ${L.n} · ${strip(L.title)}`;
document.body.innerHTML = `
<div class="bar">
  <a class="brand" href="../../"><i aria-hidden="true"></i>ClivEdu Class</a>
  <span class="lname">Lesson ${L.n} · ${esc(strip(L.title))}</span>
  <div class="teams" id="teams" aria-label="Team scores"></div>
</div>
<div class="viewport" id="viewport">
  <div class="stage" id="stage">${L.slides.map(sectionHTML).join("")}</div>
  <div class="menu" id="menu" hidden><div class="row" style="justify-content:space-between;max-width:1200px;margin:0 auto 14px"><b style="font:800 22px var(--display)">All slides</b><button class="nbtn" data-menu-close>Close</button></div><div class="menu-grid" id="menuGrid"></div></div>
</div>
<div class="nav">
  <button class="nbtn" data-prev aria-label="Previous slide">← Back</button>
  <span class="count" id="count"></span>
  <button class="nbtn y" data-next aria-label="Next slide">Next →</button>
  <div class="prog" aria-hidden="true"><i id="prog"></i></div>
  <span class="hint">Keys: → or Space reveals the next answer, then moves on · F full screen</span>
  <button class="nbtn" data-menu>Slides</button>
  <button class="nbtn" data-full>Full screen</button>
</div>
<canvas id="confetti" aria-hidden="true"></canvas>`;

/* ================= TEAMS ================= */
const DEF = [{ name: "Samarkand", score: 0 },{ name: "Bukhara", score: 0 },{ name: "Khiva", score: 0 },{ name: "Tashkent", score: 0 }];
let teams = store.get("clv-teams", DEF);
if (!Array.isArray(teams) || teams.length !== 4) teams = DEF.map(t => ({ ...t }));
let teamCount = store.get("clv-count", 3);
if (![2,3,4].includes(teamCount)) teamCount = 3;
let confirming = false;
const save = () => { store.set("clv-teams", teams); store.set("clv-count", teamCount); };
function renderTeams() {
  const act = teams.slice(0, teamCount), max = Math.max(...act.map(t => t.score));
  $("#teams").innerHTML = act.map((t, i) => `<div class="team" style="--tc:${TC_CHROME[i]}" data-team="${i}">
      <input id="tn-${i}" aria-label="Team ${i + 1} name" value="${esc(t.name)}" maxlength="14">
      ${max > 0 && t.score === max ? '<span class="star">★</span>' : ""}
      <span class="sc">${t.score}</span>
      <button class="mini" data-score="${i}" data-d="-100" aria-label="Minus 100">−</button>
      <button class="mini" data-score="${i}" data-d="100" aria-label="Plus 100">+</button></div>`).join("") +
    `<div class="tools"><select id="team-count" aria-label="Number of teams">${[2,3,4].map(n => `<option value="${n}" ${n === teamCount ? "selected" : ""}>${n} teams</option>`).join("")}</select>
     ${confirming ? `<span class="lnk">Reset scores?</span><button class="lnk" data-reset="yes">Yes</button><button class="lnk" data-reset="no">No</button>` : `<button class="lnk" data-reset="ask">Reset</button>`}</div>`;
}
function addScore(i, d) {
  if (i >= teamCount) return;
  teams[i].score += d; save(); renderTeams(); renderLeader();
  const chip = $(`.team[data-team="${i}"]`);
  if (chip) { chip.classList.remove("pulse"); void chip.offsetWidth; chip.classList.add("pulse"); if (d > 0) { const r = chip.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + r.height / 2, 40); } }
}
const award = (pts, label = "Give points:") => `<div class="award"><span class="al">${label}</span>${teams.slice(0, teamCount).map((t, i) =>
  `<button style="--tc:${TC[i]}" data-award="${i}" data-pts="${pts}">+${pts} ${esc(t.name)}</button>`).join("")}</div>`;
function renderLeader() {
  const el = $("#leaderboard"); if (!el) return;
  const rows = teams.slice(0, teamCount).map((t, i) => ({ ...t, i })).sort((a, b) => b.score - a.score);
  el.innerHTML = rows.map((t, k) => `<div class="lbr ${k === 0 && t.score > 0 ? "first" : ""}"><span class="pos">${k + 1}</span><span class="nm">${esc(t.name)}</span><span style="font-variant-numeric:tabular-nums">${t.score}</span></div>`).join("");
}
document.addEventListener("input", e => {
  const m = e.target.id && e.target.id.match(/^tn-(\d)$/);
  if (m) { teams[+m[1]].name = e.target.value || `Team ${+m[1] + 1}`; save(); renderLeader(); }
});
document.addEventListener("change", e => {
  if (e.target.id === "team-count") { teamCount = +e.target.value; save(); renderTeams(); renderLeader(); const g = slides[cur].dataset.game; if (g && GR[g]) GR[g](); }
});

/* ================= CONFETTI ================= */
const cv = $("#confetti"), cx = cv.getContext("2d");
let parts = [], raf = 0;
const sizeCv = () => { cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio; };
function confetti(x, y, n = 90) {
  if (reduceMotion) return;
  const cols = ["#1F5FD1","#B42318","#157347","#FFC93C","#0B6E70","#FFF8E7"];
  for (let i = 0; i < n; i++) parts.push({ x, y, vx: (Math.random() - .5) * 14, vy: -Math.random() * 13 - 3, r: 4 + Math.random() * 6, c: pick(cols), a: Math.random() * 6, life: 80 + Math.random() * 40 });
  if (!raf) raf = requestAnimationFrame(tick);
}
function tick() {
  cx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); cx.clearRect(0, 0, innerWidth, innerHeight);
  parts = parts.filter(p => p.life-- > 0);
  for (const p of parts) { p.vy += .35; p.x += p.vx; p.y += p.vy; p.a += .2; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a); cx.fillStyle = p.c; cx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); cx.restore(); }
  raf = parts.length ? requestAnimationFrame(tick) : 0;
  if (!raf) cx.clearRect(0, 0, innerWidth, innerHeight);
}
const burst = (el, n) => { if (!el) return; const r = el.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + r.height / 2, n); };

/* ================= STAGE ================= */
const stage = $("#stage"), vp = $("#viewport");
const slides = $$("section.s", stage);
let cur = 0;
function fit() { const s = Math.min(vp.clientWidth / 1920, vp.clientHeight / 1080); stage.style.transform = `translate(-50%,-50%) scale(${s})`; sizeCv(); }
addEventListener("resize", fit);
$$(".ans").forEach(b => { const a = b.textContent; b.innerHTML = `<span class="q">Tap to reveal</span><span class="a">${esc(a)}</span>`; b.setAttribute("aria-label", "Reveal answer"); });
function go(i, fromHash) {
  i = Math.max(0, Math.min(slides.length - 1, i));
  clearInterval(timerId);
  slides[cur].classList.remove("active");
  cur = i;
  const sl = slides[cur];
  sl.classList.add("active");
  $("#count").textContent = `${cur + 1} / ${slides.length}`;
  $("#prog").style.width = ((cur + 1) / slides.length * 100) + "%";
  const g = sl.dataset.game;
  if (g && GR[g]) GR[g]();
  if (!fromHash) { try { history.replaceState(null, "", "#slide-" + (cur + 1)); } catch (e) {} }
  $("#menuGrid").innerHTML = slides.map((s, k) => `<button data-goto="${k}" ${k === cur ? 'aria-current="true"' : ""}><b>${k + 1}</b>${esc(s.dataset.title || "")}</button>`).join("");
}
function reveal(b) { if (b.classList.contains("on")) return; b.classList.add("on"); b.setAttribute("aria-label", "Answer shown"); burst(b, 30); }
function next() { const sl = slides[cur]; if (!sl.dataset.game) { const h = $(".ans:not(.on)", sl); if (h) { reveal(h); return; } } go(cur + 1); }
function fromHash() { const m = location.hash.match(/^#slide-(\d+)$/); return m ? +m[1] - 1 : 0; }
addEventListener("hashchange", () => go(fromHash(), true));
function toggleFull() { const el = document.documentElement; try { if (document.fullscreenElement) document.exitFullscreen(); else if (el.requestFullscreen) el.requestFullscreen().catch(() => {}); } catch (err) {} }

/* ================= GAMES ================= */
const GS = {}; let timerId = 0;
const timerHTML = sec => `<div class="timer" data-timer="${sec}"><button class="sbtn y" data-start-timer>Start ${sec}s</button><div class="bar"><div class="fill"></div></div><span class="t">${sec}</span></div>`;
function startTimer(el) {
  clearInterval(timerId);
  const total = +el.dataset.timer; let left = total;
  const fill = $(".fill", el), t = $(".t", el); fill.style.width = "100%"; t.textContent = left;
  timerId = setInterval(() => { left--; t.textContent = Math.max(left, 0); fill.style.width = Math.max(left, 0) / total * 100 + "%"; if (left <= 0) { clearInterval(timerId); t.textContent = "Time!"; } }, 1000);
}
const head = (title, how, extra = "") => `<div class="row" style="justify-content:space-between;gap:24px"><h2 class="h2">${title}</h2><div class="row" style="gap:16px">${extra}<button class="sbtn w" data-restart style="font-size:26px;padding:12px 28px">Restart game</button></div></div><p class="sub" style="margin-top:-12px">${how}</p>`;
const box = id => $("#g-" + id, slides[cur]) || $("#g-" + id);

const GR = {
  auction() {
    const G = GS.auction || (GS.auction = {});
    if (G.i == null) { G.order = shuffle(G0.auction); G.i = 0; G.bids = [0,0,0,0]; G.shown = false; }
    const it = G.order[G.i];
    box("auction").innerHTML = head("Grammar Auction", "Teams talk for 20 seconds, then bid 0–500 if they think the sentence is correct. Right = win the bid, wrong = lose it.",
        `<button class="plusbtn" data-start1000>+1000 to every team</button>`) + `
      <div style="background:var(--ink2);border-radius:36px;padding:32px 48px;display:flex;flex-direction:column;gap:12px;align-items:center;text-align:center">
        <p class="eb">Sentence ${G.i + 1} of ${G.order.length}</p><p class="bigs" style="font-size:68px">${esc(it.s)}</p>
        ${G.shown ? `<span class="verdict ${it.ok ? "good" : "bad"}">${it.ok ? "RIGHT! Bids paid" : "WRONG! Bids lost"}</span>${it.ok ? "" : `<p class="en" style="color:var(--mint);font-size:52px;font-weight:800">${esc(it.fix)}</p>`}` : ""}
      </div>
      <div class="bids">${teams.slice(0, teamCount).map((t, i) => `<div class="bid" style="--tc:${TC[i]}"><b>${esc(t.name)}</b><span class="row" style="gap:10px;flex-wrap:nowrap"><button class="mini" data-bid="${i}" data-d="-100" ${G.shown ? "disabled" : ""} aria-label="Lower bid">−</button><span class="amt" style="color:var(--ink)">${G.bids[i]}</span><button class="mini" data-bid="${i}" data-d="100" ${G.shown ? "disabled" : ""} aria-label="Raise bid">+</button></span></div>`).join("")}</div>
      <div class="row" style="justify-content:space-between">
        ${G.shown ? `<button class="sbtn y" data-auc-next ${G.i + 1 >= G.order.length ? "disabled" : ""}>Next sentence →</button>` : `<button class="sbtn y" data-auc-reveal>Reveal</button>`}
        ${G.shown && !it.ok ? award(100, "Fixed it? Bonus:") : ""}
      </div>`;
  },
  board() {
    const B = G0.board, G = GS.board || (GS.board = { used: {} });
    let tiles = "";
    for (let r = 0; r < 3; r++) B.forEach((c, ci) => { const k = ci + "-" + r, v = (r + 1) * 100; tiles += `<button class="bt v${v} ${G.used[k] ? "used" : ""}" data-tile="${k}" aria-label="${esc(c.cat)} for ${v}">${v}</button>`; });
    let modal = "";
    if (G.open) {
      const [ci, r] = G.open.split("-").map(Number), c = B[ci], [q, a] = c.qs[r], v = (r + 1) * 100;
      modal = `<div class="modal" data-modal><div class="mbox" role="dialog" aria-modal="true">
        <div class="row" style="justify-content:space-between"><span class="tag dk">${esc(c.cat)} · ${v}</span><button class="sbtn w" data-tile-close style="font-size:26px">Close</button></div>
        <p class="bigs">${esc(q)}</p>${timerHTML(20)}
        ${G.shownAns ? `<p class="mans">${esc(a)}</p>${award(v, "Points to:")}` : `<div><button class="sbtn g" data-tile-answer>Show answer</button></div>`}
      </div></div>`;
    }
    box("board").innerHTML = head("Quiz Board", "Teams take turns: choose a topic and a value. 20 seconds to answer. Wrong? The next team can steal.") +
      `<div class="board flex1" style="grid-template-columns:repeat(${B.length},1fr)">${B.map(c => `<div class="bh">${esc(c.cat)}</div>`).join("")}${tiles}</div>${modal}`;
  },
  wheel() {
    const G = GS.wheel || (GS.wheel = { rot: 0 });
    box("wheel").innerHTML = head("Spin the Wheel", "The wheel picks a topic and a speaking challenge. Answer before the timer ends.") + `
      <div class="row flex1" style="gap:64px;align-items:center;flex-wrap:nowrap">
        <div class="wheelwrap"><canvas id="wheel" width="1280" height="1280" style="transform:rotate(${G.rot}deg)"></canvas><div class="hubc"></div><div class="ptr"></div></div>
        <div class="chal" id="chal">${G.task ? chalHTML(G.task) : `<p class="eb">Ready?</p><p class="bigs" style="font-size:64px;color:var(--cream)">Spin the wheel to get a challenge.</p><div><button class="sbtn y" data-spin>Spin!</button></div>`}</div>
      </div>`;
    drawWheel();
  },
  build() {
    const G = GS.build || (GS.build = {});
    if (G.i == null) { G.order = shuffle(G0.build); G.i = 0; }
    if (!G.pool) { G.pool = shuffle(G.order[G.i].w.map((_, k) => k)); G.built = []; G.state = ""; }
    const it = G.order[G.i], answer = it.w.join(" ") + it.e;
    box("build").innerHTML = head("Sentence Builder", "Teams race to say it. The fastest team taps the tiles in order. Tap a tile in the line to send it back.") + `
      <p class="eb">Round ${G.i + 1} of ${G.order.length}</p>
      <div class="slots">${G.built.length ? G.built.map(k => `<button class="wt" data-built="${k}">${esc(it.w[k])}</button>`).join("") : `<span class="sub">Tap the words below…</span>`}<span class="wt" style="background:none;box-shadow:none;color:var(--slate)">${it.e}</span></div>
      <div class="pool">${G.pool.filter(k => !G.built.includes(k)).map(k => `<button class="wt" data-pool="${k}">${esc(it.w[k])}</button>`).join("")}</div>
      <div class="row">
        <button class="sbtn g" data-b-check ${G.built.length === it.w.length ? "" : "disabled"}>Check</button>
        <button class="sbtn w" data-b-show style="border:3px solid var(--line)">Show answer</button>
        <button class="sbtn" data-b-next ${G.i + 1 >= G.order.length ? "disabled" : ""}>Next →</button>
        ${G.state === "right" ? `<span class="verdict good">Correct!</span>` : ""}${G.state === "wrong" ? `<span class="verdict bad">Not yet!</span>` : ""}
        ${G.state === "shown" ? `<span class="en cg" style="font-weight:800">${esc(answer)}</span>` : ""}
      </div>
      ${G.state === "right" ? award(100) : ""}`;
  },
  mystery() {
    const G = GS.mystery || (GS.mystery = {});
    const M = G0.mystery;
    if (G.i == null) { G.order = shuffle(M.items); G.i = 0; G.n = 1; G.rev = false; }
    const it = G.order[G.i], pts = [300, 200, 100][G.n - 1];
    box("mystery").innerHTML = head(M.title || "Mystery Place", M.how || "Guess with “Is it a…?”. After 1 clue: 300 points, after 2: 200, after 3: 100.") + `
      <p class="eb">${esc(M.unit || "Place")} ${G.i + 1} of ${G.order.length} · worth ${pts} now</p>
      <div class="qlist flex1" style="gap:18px">${it.c.slice(0, G.n).map((c, k) => `<p class="clue"><small>CLUE ${k + 1}</small>${esc(c)}</p>`).join("")}
        ${G.rev ? `<div class="row" style="gap:32px"><span class="secret" style="font-size:100px">${esc(it.p)}</span><span class="uz" style="font-size:48px">${esc(it.uz || "")}</span></div>` : ""}</div>
      <div class="row"><button class="sbtn b" data-clue ${G.n >= it.c.length || G.rev ? "disabled" : ""}>Next clue</button><button class="sbtn y" data-place-rev ${G.rev ? "disabled" : ""}>Reveal</button><button class="sbtn" data-place-next ${G.i + 1 >= G.order.length ? "disabled" : ""}>Next →</button>${G.rev ? award(pts) : ""}</div>`;
  },
  mime() {
    const G = GS.mime || (GS.mime = {});
    if (G.order == null) { G.order = shuffle(G0.mime); G.i = -1; G.st = "idle"; }
    const it = G.order[G.i];
    let card;
    if (G.st === "idle") card = `<div class="cardx"><p class="bigs">Tap “Next card”.</p></div>`;
    else if (G.st === "peek") card = `<div class="cardx open"><div style="display:flex;flex-direction:column;gap:20px;align-items:center"><p class="eb">Mimer only!</p><p class="secret">${esc(it.cue)}</p><p class="sub">Remember it, then tap “Hide”.</p></div></div>`;
    else if (G.st === "hidden") card = `<div class="cardx"><div><p class="bigs">Mime it! No talking.</p><p class="en" style="margin-top:16px">The team says a full sentence.</p></div></div>`;
    else card = `<div class="cardx open"><div style="display:flex;flex-direction:column;gap:20px;align-items:center"><p class="secret">${esc(it.cue)}</p><p class="en cg" style="font-weight:800;font-size:52px">${esc(it.say)}</p>${award(100)}</div></div>`;
    box("mime").innerHTML = head("Mime and Say", "One student peeks at the card and mimes it. The team has 30 seconds to say a full, correct sentence.") + card + `
      <div class="row" style="justify-content:space-between;flex-wrap:nowrap;gap:24px">
        <div class="row" style="flex-wrap:nowrap"><button class="sbtn" data-mime-next ${G.i + 1 >= G.order.length ? "disabled" : ""}>Next card</button><button class="sbtn w" data-mime-peek ${G.st === "hidden" ? "" : "disabled"}>Peek</button><button class="sbtn w" data-mime-hide ${G.st === "peek" ? "" : "disabled"}>Hide</button><button class="sbtn y" data-mime-rev ${G.st === "hidden" ? "" : "disabled"}>Reveal</button></div>
        <div style="width:640px">${timerHTML(30)}</div></div>`;
  },
  bye() { renderLeader(); }
};
const chalHTML = t => `<p class="eb">${esc(t.topic)}</p><p class="bigs" style="font-size:60px;color:var(--cream)">${esc(t.text)}</p>${timerHTML(30)}
  <div class="row"><button class="sbtn y" data-spin>Spin again</button></div>${award(100, "Good:")}${award(200, "Excellent:")}`;
function drawWheel() {
  const c = $("#wheel"); if (!c) return;
  const W = G0.wheel, x = c.getContext("2d"), S = c.width, Rr = S / 2, n = W.length, seg = Math.PI * 2 / n;
  x.clearRect(0, 0, S, S);
  W.forEach((s, i) => {
    const [col, dark] = WHEEL_COLORS[i % WHEEL_COLORS.length], a0 = -Math.PI / 2 + i * seg;
    x.beginPath(); x.moveTo(Rr, Rr); x.arc(Rr, Rr, Rr - 12, a0, a0 + seg); x.closePath();
    x.fillStyle = col; x.fill(); x.lineWidth = 14; x.strokeStyle = "#12263A"; x.stroke();
    x.save(); x.translate(Rr, Rr); x.rotate(a0 + seg / 2);
    x.fillStyle = dark ? "#12263A" : "#FFF8E7"; x.font = `800 ${n > 6 ? 60 : 74}px Rubik, Verdana, sans-serif`; x.textAlign = "right"; x.textBaseline = "middle";
    x.fillText(s.name, Rr - 60, 6); x.restore();
  });
}
function spin() {
  const G = GS.wheel, W = G0.wheel, segDeg = 360 / W.length; $$("[data-spin]").forEach(b => b.disabled = true);
  const k = Math.floor(Math.random() * W.length);
  const target = (360 - (k * segDeg + segDeg / 2)) % 360, jitter = (Math.random() - .5) * segDeg * .6;
  G.rot = G.rot - (G.rot % 360) + 360 * 5 + target + jitter;
  const c = $("#wheel"); c.style.transform = `rotate(${G.rot}deg)`;
  const done = () => { G.task = { topic: W[k].name, text: pick(W[k].tasks) }; const ch = $("#chal"); if (ch && slides[cur].dataset.game === "wheel") { ch.innerHTML = chalHTML(G.task); burst(c); } };
  if (reduceMotion) done(); else setTimeout(done, 4300);
}

/* ================= EVENTS ================= */
document.addEventListener("click", e => {
  const t = e.target.closest("button, [data-modal]");
  if (!t) return;
  const d = t.dataset;
  if (e.detail > 0 && t.tagName === "BUTTON") t.blur();
  if (t.classList.contains("ans")) { reveal(t); return; }
  if (d.prev != null) { go(cur - 1); return; }
  if (d.next != null) { go(cur + 1); return; }
  if (d.menu != null) { $("#menu").hidden = false; return; }
  if (d.menuClose != null) { $("#menu").hidden = true; return; }
  if (d.goto != null) { $("#menu").hidden = true; go(+d.goto); return; }
  if (d.full != null) { toggleFull(); return; }
  if (d.score != null) { addScore(+d.score, +d.d); return; }
  if (d.reset) { if (d.reset === "yes") { teams.forEach(x => x.score = 0); save(); renderLeader(); } confirming = d.reset === "ask"; renderTeams(); return; }
  if (d.award != null) { addScore(+d.award, +d.pts); t.disabled = true; return; }
  if (d.start1000 != null) { teams.forEach((x, i) => { if (i < teamCount) x.score += 1000; }); save(); renderTeams(); renderLeader(); burst(t); t.disabled = true; return; }
  if (d.spotlight) {
    const cards = $$(".spot", $("#" + d.spotlight)); if (!cards.length) return;
    let n = 0; const end = 10 + Math.floor(Math.random() * cards.length);
    const step = () => { cards.forEach(c => c.classList.remove("lit")); cards[n % cards.length].classList.add("lit"); if (n++ < end) setTimeout(step, 70 + n * 12); else burst(cards[(n - 1) % cards.length], 50); };
    step(); return;
  }
  if (t.classList.contains("checkit")) { t.classList.toggle("done"); if (t.classList.contains("done")) burst(t, 40); const all = $$(".checkit", slides[cur]); if (all.length && all.every(x => x.classList.contains("done"))) burst(stage, 160); return; }
  if (d.celebrate != null) { burst($("#leaderboard"), 200); setTimeout(() => burst(stage, 160), 300); return; }
  if (d.startTimer != null) { startTimer(t.closest("[data-timer]")); return; }
  if (d.restart != null) { const g = slides[cur].dataset.game; delete GS[g]; GR[g](); return; }
  if (d.bid != null) { const G = GS.auction, i = +d.bid; G.bids[i] = Math.min(500, Math.max(0, G.bids[i] + +d.d)); GR.auction(); return; }
  if (d.aucReveal != null) { const G = GS.auction, it = G.order[G.i]; G.shown = true; G.bids.slice(0, teamCount).forEach((b, i) => { if (b) addScore(i, it.ok ? b : -b); }); GR.auction(); if (it.ok) burst($(".verdict", slides[cur])); return; }
  if (d.aucNext != null) { const G = GS.auction; G.i++; G.bids = [0,0,0,0]; G.shown = false; GR.auction(); return; }
  if (d.tile) { const G = GS.board; if (!G.used[d.tile]) { G.open = d.tile; G.shownAns = false; GR.board(); } return; }
  if (d.tileAnswer != null) { GS.board.shownAns = true; clearInterval(timerId); GR.board(); return; }
  if (d.tileClose != null) { const G = GS.board; G.used[G.open] = true; G.open = null; clearInterval(timerId); GR.board(); return; }
  if (d.modal != null && e.target === t) { GS.board.open = null; clearInterval(timerId); GR.board(); return; }
  if (d.spin != null) { spin(); return; }
  if (d.pool != null) { const G = GS.build; G.built.push(+d.pool); G.state = ""; GR.build(); return; }
  if (d.built != null) { const G = GS.build; G.built = G.built.filter(k => k !== +d.built); G.state = ""; GR.build(); return; }
  if (d.bCheck != null) { const G = GS.build, ok = G.built.every((k, i) => k === i); G.state = ok ? "right" : "wrong"; GR.build(); if (ok) burst($(".slots", slides[cur])); return; }
  if (d.bShow != null) { const G = GS.build; G.state = "shown"; G.built = G.order[G.i].w.map((_, k) => k); GR.build(); return; }
  if (d.bNext != null) { const G = GS.build; G.i++; G.pool = null; GR.build(); return; }
  if (d.clue != null) { const G = GS.mystery; G.n = Math.min(G.order[G.i].c.length, G.n + 1); GR.mystery(); return; }
  if (d.placeRev != null) { GS.mystery.rev = true; GR.mystery(); burst($(".secret", slides[cur])); return; }
  if (d.placeNext != null) { const G = GS.mystery; G.i++; G.n = 1; G.rev = false; GR.mystery(); return; }
  if (d.mimeNext != null) { const G = GS.mime; G.i++; G.st = "hidden"; clearInterval(timerId); GR.mime(); return; }
  if (d.mimePeek != null) { GS.mime.st = "peek"; GR.mime(); return; }
  if (d.mimeHide != null) { GS.mime.st = "hidden"; GR.mime(); return; }
  if (d.mimeRev != null) { GS.mime.st = "shown"; clearInterval(timerId); GR.mime(); burst($(".secret", slides[cur])); return; }
});
document.addEventListener("keydown", e => {
  const tag = (document.activeElement && document.activeElement.tagName) || "";
  if (tag === "INPUT" || tag === "SELECT") return;
  if (e.key === "Escape") { if (!$("#menu").hidden) { $("#menu").hidden = true; return; } if (GS.board && GS.board.open && slides[cur].dataset.game === "board") { GS.board.open = null; GR.board(); } return; }
  if (e.key === "ArrowRight" || e.key === "PageDown" || (e.key === " " && tag !== "BUTTON")) { e.preventDefault(); next(); }
  else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); go(cur - 1); }
  else if (e.key === "f" || e.key === "F") toggleFull();
  else if (e.key === "Home") go(0); else if (e.key === "End") go(slides.length - 1);
});
let tx = null;
vp.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
vp.addEventListener("touchend", e => { if (tx == null) return; const dx = e.changedTouches[0].clientX - tx; tx = null; if (Math.abs(dx) > 70 && !e.target.closest("button")) { dx < 0 ? go(cur + 1) : go(cur - 1); } }, { passive: true });

/* ================= START ================= */
renderTeams();
fit();
go(fromHash(), true);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { fit(); if (slides[cur].dataset.game === "wheel") drawWheel(); });
})();
