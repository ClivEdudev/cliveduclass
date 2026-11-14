/* ClivEdu Class lesson engine.
   A lesson page loads plan.js, sets window.LESSON = { n, title, slides:[...], games:{...} } and then loads this file.
   Teacher mode (a device unlocked at /teacher/): 16:9 presenter with team scoreboard and team games.
   Student mode (everyone else): lesson opens only after it is taught, no team bar, self-scored points,
   and on narrow screens the slides become a scrollable column that is easy to read on a phone. */
(() => {
"use strict";
const L = window.LESSON;
if (!L) return;
const SELF = (document.currentScript && document.currentScript.src) || "";
const P = window.PLAN || null;
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
const TEACHER = P ? P.isTeacher() : true;
const STUDENT = !TEACHER;
const HOME = TEACHER ? "../../teacher/" : "../../";
const TC = ["#1F5FD1", "#B42318", "#157347", "#9A6A00"];
const TC_CHROME = ["#7FA2F5", "#F2788B", "#6CCB8A", "#F2BE4A"];
const WHEEL_COLORS = [["#1F5FD1",0],["#0B6E70",0],["#B42318",0],["#E7A61C",1],["#157347",0],["#5B3FA8",0]];
const G0 = L.games || {};
const CLASS_ONLY = ["mime", "boss"];

/* ================= LOCK (students only) ================= */
let openDate = null;
if (P) {
  if (L.openDate) openDate = P.parse(L.openDate);
  else { const pl = P.lesson(L.n); if (pl) openDate = pl.date; }
}
document.title = `${L.n ? "Lesson " + L.n + " · " : ""}${strip(L.title)}`;
if (STUDENT && openDate && !L.openNow && !P.isOpen(openDate, L.openHour)) {
  const at = P.openAt(openDate, L.openHour);
  document.body.classList.add("locked-page");
  document.body.innerHTML = `<div class="lockbox">
    <p class="eb">${L.n ? "Lesson " + L.n : "Lesson"}</p>
    <h1>${esc(strip(L.title))}</h1>
    <p>This lesson opens after class on <b>${esc(P.fmt(at))}</b> at ${String(at.getHours()).padStart(2, "0")}:00.</p>
    <p class="uz">Bu dars ${esc(P.fmt(at))} kuni darsdan keyin ochiladi.</p>
    <a class="lockbtn" href="${HOME}">← Back to my lessons</a></div>`;
  return;
}

/* ================= SLIDE TEMPLATES ================= */
const notes = n => n && n.length ? `<div class="notes">${n.map(x => `<span class="note">${x}</span>`).join("")}</div>` : "";
const hd = s => `<div>${s.eb ? `<p class="eb">${s.eb}</p>` : ""}<h2 class="h2"${s.eb ? ' style="margin-top:12px"' : ""}>${s.title}</h2>${s.sub ? `<p class="sub" style="margin-top:8px">${s.sub}</p>` : ""}</div>`;
const BG = { ink: "ink", yel: "yel", sky: "sky", teal: "tealbg", cream: "" };
const GAME_TITLES = { board: "Quiz Board", auction: "Grammar Auction", build: "Sentence Builder", wheel: "Spin the Wheel", mime: "Mime and Say", mystery: "Mystery Place", boss: "Boss Says…" };
const fmtT = x => { x = Math.max(0, Math.round(x || 0)); return Math.floor(x / 60) + ":" + String(x % 60).padStart(2, "0"); };
function playerHTML(src, dur, times, mini) {
  return `<div class="player${mini ? " small" : ""}" data-src="${src}" data-dur="${dur || 0}"${times ? ` data-times="${times.join(",")}"` : ""}>
    <button class="pbtn" data-play aria-label="Play">▶</button>
    <div class="pmid"><div class="ptrack" data-seek><i class="pfill"></i></div>
      <div class="prow"><span class="ptime">0:00 / ${fmtT(dur)}</span>${mini ? `<span class="plbl">Play the story again</span>` : `<span class="plays">Listened <b>0</b>×</span>`}</div></div>
    ${mini ? "" : `<button class="psm" data-replay>↺ Again</button><button class="psm" data-speed>Slow</button>`}</div>`;
}
const R = {
  raw: s => s.html,
  cover: s => `<div><span class="tag">${s.tag || (L.n ? "Lesson " + L.n : "Lesson")}</span></div><h1 class="h1">${s.title}</h1><p class="lead">${s.lead || ""}</p>
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
  check: s => `<div><h2 class="h2">Can you…?</h2><p class="sub" style="margin-top:8px">${STUDENT ? "Tap a line when you feel confident." : "Thumb up = yes. Middle = a little. Down = not yet. Tap a line when the class is confident."}</p></div>
    <div class="g2 r3 flex1">${s.items.map(t => `<button class="qrow ln checkit"><span class="tick">✓</span><p class="qt e" style="font-size:40px;text-align:left">${t}</p></button>`).join("")}</div>`,
  bye: s => `<div style="flex:1;display:flex;flex-direction:column;gap:36px">
      <div><span class="tag">${STUDENT ? "Well done" : "Exit ticket"}</span></div>
      <h1 class="h1" style="font-size:130px">Great job!<br><span class="cy">Rahmat!</span></h1>
      <p class="lead">${STUDENT ? "Say these out loud to practise:" : (s.lead || "Say one sentence on your way out:")}</p>
      <div class="row" style="gap:18px">${(s.chips || []).map(([t, c]) => `<span class="bub ${c}">${t}</span>`).join("")}</div></div>
    <div class="byeside" style="width:720px;display:flex;flex-direction:column;gap:24px">${STUDENT
      ? `<p class="eb">My points in this lesson</p><p class="mypts" id="myptsBig">0</p><div><a class="sbtn y" href="${HOME}" style="text-decoration:none">Back to my lessons</a></div>`
      : `<p class="eb">Final scores</p><div class="lb" id="leaderboard"></div><div><button class="sbtn y" data-celebrate>Celebrate the winners</button></div>`}</div>`,
  words: s => `${hd(s)}<div class="g3 r2 flex1">${s.items.map(([en, uz, sen, tag]) => `<div class="card word ${s.tint || "skyb"}">
    <p class="wen">${en}</p><p class="uz small">${uz}</p><p class="wsen">${sen}</p><span class="wtag">${tag}</span></div>`).join("")}</div>`,
  wall: s => `${hd(s)}<div class="g5 r2 flex1">${s.groups.map(g => `<div class="card ln wallbox">
    <p class="walltitle">${g.name}</p>${g.words.map(w => `<p class="wallw">${w}</p>`).join("")}</div>`).join("")}</div>`,
  /* A listening track: player, then the script (hidden from students until the teacher opens it) */
  listen: s => `${hd(s)}<div class="lsn flex1">${playerHTML(s.src, s.dur, s.times)}
    <div class="trw"><button class="sbtn trbtn" data-script>Show the script · Matnni ko‘rsatish</button>
      <div class="tr" hidden>${s.lines.map(([n, t], k) => `<p data-k="${k}"><b>${n}:</b> ${t}</p>`).join("")}</div></div>
    ${s.credit ? `<p class="credit">${s.credit}</p>` : ""}</div>`,
  /* Questions students answer on their phones; right and wrong show when the teacher opens them */
  pick: s => `${hd(s)}${s.src ? `<div class="replaybox">${playerHTML(s.src, s.dur, null, true)}</div>` : ""}
    <div class="pks ${s.one ? "one" : ""} flex1">${s.items.map((it, k) => `<div class="pk" data-k="${k}" data-a="${it.a}">
      <div class="pkq"><span class="pn">${k + 1}</span>${it.clip ? `<button class="pclip" data-clip="${it.clip}" aria-label="Play">▶</button>` : ""}<span class="pt">${it.q || ""}</span></div>
      <div class="pko">${it.o.map((t, j) => `<button class="po" data-po="${j}">${t}</button>`).join("")}</div></div>`).join("")}</div>`,
  /* Listen and write */
  write: s => `${hd(s)}<div class="wrs flex1">${s.items.map((it, k) => `<div class="wr" data-k="${k}" data-ans="${esc(it.a)}">
      <span class="pn">${k + 1}</span><button class="pclip" data-clip="${it.clip}" aria-label="Play">▶</button>
      <input class="win" type="text" autocomplete="off" autocapitalize="sentences" spellcheck="false" aria-label="Sentence ${k + 1}" placeholder="Write what you hear…">
      <span class="wa">${it.a}</span></div>`).join("")}</div>`,
  /* A slide that opens the class game right here */
  golive: s => `${hd(s)}<div class="golive flex1"><div class="glcard"><span class="glic" aria-hidden="true">\u{1F3AE}</span>
      <div><b>${s.big || "Class game"}</b><p>${s.text || ""}</p></div>
      ${TEACHER ? `<button class="sbtn y" data-livegame>Start the game here →</button>` : `<button class="sbtn y" data-joingame>Join the game · Qo‘shilish →</button>`}</div></div>`,
  /* Where the audio comes from */
  sources: s => `${hd(s)}<div class="srcs flex1">${s.items.map(([a, b]) => `<div class="src"><b>${a}</b><span>${b}</span></div>`).join("")}</div>`,
  game: s => `<div id="g-${s.g}" style="display:contents"></div>`
};
const slideList = L.slides.filter(s => !(STUDENT && s.t === "game" && CLASS_ONLY.includes(s.g)) && !(STUDENT && s.classOnly));
function sectionHTML(s, i) {
  const cls = ["s"];
  if (s.t === "cover") cls.push("ink", "center");
  else if (s.t === "bye") cls.push("ink");
  else if (s.t === "raw") cls.push(s.cls || "");
  else if (s.bg && BG[s.bg]) cls.push(BG[s.bg]);
  let style = s.t === "bye" ? "flex-direction:row;gap:64px;align-items:center" : (s.t === "raw" && s.style) || "";
  const title = strip(s.menu || s.title || (s.t === "bye" ? "Well done" : s.t === "check" ? "Can you…?" : s.t === "goals" ? "Today you will…" : GAME_TITLES[s.g] || s.t));
  const game = s.t === "game" ? ` data-game="${s.g}"` : s.t === "bye" ? ' data-game="bye"' : "";
  const id = s.id ? ` data-id="${s.id}"` : "";
  return `<section class="${cls.join(" ").trim()}" data-title="${esc(title)}"${game}${id}${style ? ` style="${style}"` : ""}>${R[s.t](s, i)}</section>`;
}

/* ================= PAGE ================= */
document.body.classList.add(STUDENT ? "student" : "teacher");
const lname = `${L.n ? "Lesson " + L.n + " · " : ""}${esc(strip(L.title))}`;
document.body.innerHTML = `
<div class="bar">
  <a class="back" href="${HOME}" aria-label="Back to ${STUDENT ? "my lessons" : "the teacher page"}">\u2190<span class="long"> ${STUDENT ? "My lessons" : "Teacher page"}</span><span class="short"> Back</span></a>
  <span class="lname">${lname}</span>
  <button class="lnk viewbtn" id="viewBtn" data-viewtoggle></button>
  ${STUDENT ? `<button class="lnk viewbtn gamebtn" id="gameBtn" data-joingame>\u{1F3AE}<span class="long"> Join game</span></button><span class="lnk viewbtn anstag" id="ansTag">\u{1F512}<span class="long"> Answers hidden</span></span><button class="lnk viewbtn followbtn" id="followBtn" data-follow></button>` : `<span class="lnk viewbtn followbtn" id="shareTag" title="Students' phones follow this slide">Phones follow</span><button class="lnk viewbtn ansbtn" id="ansBtn" data-answers></button><button class="lnk viewbtn ansbtn" id="ansAllBtn" data-answers-all></button><button class="lnk viewbtn gamebtn" id="gameBtn" data-livegame>\u{1F3AE} Live game</button>`}
  ${STUDENT ? `<div class="teams"><span class="mine"><span class="long">My points</span><span class="short">\u2B50</span> <b id="mypts">0</b></span></div>` : `<div class="teams" id="teams" aria-label="Team scores"></div>`}
</div>
${STUDENT && !store.get("clv-tip-done", false) ? `<div class="tip" id="tip"><b class="t">How to use this page \u00b7 Sahifadan foydalanish</b>
  <p><i>\u2193</i><span>Scroll down to read the lesson.<small>Darsni o\u2018qish uchun pastga suring.</small></span></p>
  <p><i>\u{1F446}</i><span>Tap \u201cTap to reveal\u201d to check an answer. \u{1F512} means wait for the teacher.<small>Javobni ko\u2018rish uchun bosing. \u{1F512} \u2014 o\u2018qituvchini kuting.</small></span></p>
  <p><i>\u25CF</i><span>\u201cFollowing teacher\u201d: your screen moves with the board.<small>Ekraningiz doska bilan birga harakatlanadi.</small></span></p>
  <button data-tipclose>Got it \u00b7 Tushundim</button></div>` : ""}
<div class="viewport" id="viewport">
  <div class="stage" id="stage">${slideList.map(sectionHTML).join("")}</div>
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
document.body.classList.add(STUDENT ? "student" : "teacher");

/* ================= POINTS: teams (teacher) or me (student) ================= */
const DEF = [{ name: "Samarkand", score: 0 },{ name: "Bukhara", score: 0 },{ name: "Khiva", score: 0 },{ name: "Tashkent", score: 0 }];
let teams = store.get("clv-teams", DEF);
if (!Array.isArray(teams) || teams.length !== 4) teams = DEF.map(t => ({ ...t }));
let teamCount = store.get("clv-count", 3);
if (![2,3,4].includes(teamCount)) teamCount = 3;
let confirming = false;
const save = () => { store.set("clv-teams", teams); store.set("clv-count", teamCount); };
const PKEY = String(L.id || L.n || "rev");
function myPoints() { const all = store.get("clv-points", {}); return all[PKEY] || 0; }
function addMine(d) {
  const all = store.get("clv-points", {}); all[PKEY] = (all[PKEY] || 0) + d; store.set("clv-points", all); renderMine();
  const el = $("#mypts"); if (el && d > 0) { const r = el.getBoundingClientRect(); confetti(r.left, r.top, 40); }
}
function renderMine() { const v = myPoints(); const a = $("#mypts"), b = $("#myptsBig"); if (a) a.textContent = v; if (b) b.textContent = v; }
function renderTeams() {
  if (STUDENT) { renderMine(); return; }
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
const award = (pts, label = "Give points:") => STUDENT
  ? `<div class="award"><button class="selfbtn" data-self="${pts}">I got it right! +${pts}</button></div>`
  : `<div class="award"><span class="al">${label}</span>${teams.slice(0, teamCount).map((t, i) =>
    `<button style="--tc:${TC[i]}" data-award="${i}" data-pts="${pts}">+${pts} ${esc(t.name)}</button>`).join("")}</div>`;
function renderLeader() {
  if (STUDENT) { renderMine(); return; }
  const el = $("#leaderboard"); if (!el) return;
  const rows = teams.slice(0, teamCount).map((t, i) => ({ ...t, i })).sort((a, b) => b.score - a.score);
  el.innerHTML = rows.map((t, k) => `<div class="lbr ${k === 0 && t.score > 0 ? "first" : ""}"><span class="pos">${k + 1}</span><span class="nm">${esc(t.name)}</span><span style="font-variant-numeric:tabular-nums">${t.score}</span></div>`).join("");
}
document.addEventListener("input", e => {
  const m = e.target.id && e.target.id.match(/^tn-(\d)$/);
  if (m) { teams[+m[1]].name = e.target.value || `Team ${+m[1] + 1}`; save(); renderLeader(); }
});
document.addEventListener("change", e => {
  if (e.target.id === "team-count") { teamCount = +e.target.value; save(); renderTeams(); renderLeader(); rerenderGames(); }
});

/* ================= CONFETTI ================= */
const cv = $("#confetti"), cx = cv.getContext("2d");
let parts = [], raf = 0;
const DPR = Math.min(window.devicePixelRatio || 1, 1.5);   /* cheaper confetti on low-end phones */
const sizeCv = () => { cv.width = innerWidth * DPR; cv.height = innerHeight * DPR; };
function confetti(x, y, n = 90) {
  if (reduceMotion) return;
  const cols = ["#1F5FD1","#B42318","#157347","#FFC93C","#0B6E70","#FFF8E7"];
  for (let i = 0; i < n; i++) parts.push({ x, y, vx: (Math.random() - .5) * 14, vy: -Math.random() * 13 - 3, r: 4 + Math.random() * 6, c: pick(cols), a: Math.random() * 6, life: 80 + Math.random() * 40 });
  if (!raf) raf = requestAnimationFrame(tick);
}
function tick() {
  cx.setTransform(DPR, 0, 0, DPR, 0, 0); cx.clearRect(0, 0, innerWidth, innerHeight);
  parts = parts.filter(p => p.life-- > 0);
  for (const p of parts) { p.vy += .35; p.x += p.vx; p.y += p.vy; p.a += .2; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a); cx.fillStyle = p.c; cx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); cx.restore(); }
  raf = parts.length ? requestAnimationFrame(tick) : 0;
  if (!raf) cx.clearRect(0, 0, innerWidth, innerHeight);
}
const burst = (el, n) => { if (!el) return; const r = el.getBoundingClientRect(); confetti(r.left + r.width / 2, r.top + Math.min(r.height / 2, 200), n); };

/* ================= STAGE: presenter or scroll (flow) ================= */
const stage = $("#stage"), vp = $("#viewport");
const slides = $$("section.s", stage);
let cur = 0, flow = false;
let viewPref = store.get("clv-view", "auto");
/* Measure the layout viewport, never window.innerWidth: on many phones innerWidth
   follows pinch-zoom, which used to make the page shrink while a student zoomed in. */
const vw = () => document.documentElement.clientWidth || innerWidth;
const vh = () => document.documentElement.clientHeight || innerHeight;
const isPhone = () => Math.min(vw(), vh()) < 600;
const pinched = () => !!(window.visualViewport && visualViewport.scale > 1.05);
const ZOOM_OK = !!(window.CSS && CSS.supports && CSS.supports("zoom", "0.5"));
const FLOW_W = 720;                       /* phone layout width before scaling */
/* Students on a phone always get the phone layout, upright or sideways.
   Turning the phone used to switch to the tiny board layout. */
const wantFlow = () => viewPref === "scroll" || (viewPref === "auto" && STUDENT && (isPhone() || (vw() < 900 && vh() > vw())));
let fitRaf = 0;
function queueFit() { cancelAnimationFrame(fitRaf); fitRaf = requestAnimationFrame(fit); }
let flowRO = null;
function fit() {
  if (flow && pinched()) return;          /* the student is zooming in: leave the layout alone */
  const f = wantFlow();
  if (f !== flow) { flow = f; document.body.classList.toggle("flow", flow); if (flow) { slides.forEach(s => s.classList.add("active")); rerenderGames(); } else { slides.forEach((s, k) => s.classList.toggle("active", k === cur)); } }
  if (flow) {
    /* fill the width, but not so big that a sideways phone shows one word at a time */
    const z = Math.max(0.3, Math.min((vw() - 20) / FLOW_W, isPhone() && vw() > vh() ? 0.8 : 1.05));
    document.body.style.setProperty("--z", z.toFixed(4));
    if (ZOOM_OK) { stage.style.transform = "none"; vp.style.height = ""; }
    else {                                /* browsers without CSS zoom: scale and keep the page height right */
      stage.style.transform = `scale(${z})`; stage.style.transformOrigin = "0 0";
      const sync = () => { vp.style.height = Math.ceil(stage.offsetHeight * z) + "px"; };
      sync(); if (!flowRO && window.ResizeObserver) { flowRO = new ResizeObserver(sync); flowRO.observe(stage); }
    }
  } else {
    vp.style.height = "";
    const s = Math.min(vp.clientWidth / 1920, vp.clientHeight / 1080);
    stage.style.transformOrigin = ""; stage.style.transform = `translate(-50%,-50%) scale(${s})`;
  }
  const vb = $("#viewBtn"); if (vb) vb.textContent = flow ? "Slide view" : "Scroll view";
  sizeCv();
}
addEventListener("resize", queueFit);
addEventListener("orientationchange", () => setTimeout(fit, 250));
if (window.visualViewport) visualViewport.addEventListener("resize", () => { if (!pinched()) queueFit(); });
$$(".ans").forEach(b => { const a = b.textContent; b.innerHTML = `<span class="q">Tap to reveal</span><span class="a">${esc(a)}</span>`; b.setAttribute("aria-label", "Reveal answer"); });
function go(i, fromHash) {
  i = Math.max(0, Math.min(slides.length - 1, i));
  if (!flow && i !== cur) stopAudio();
  clearInterval(timerId);
  if (TEACHER) sendSync(i);
  if (flow) { cur = i; paintBars(); const bh = ($(".bar") || {}).offsetHeight || 0; scrollTo({ top: Math.max(0, slides[i].getBoundingClientRect().top + scrollY - bh - 12), behavior: reduceMotion ? "auto" : "smooth" }); return; }
  slides[cur].classList.remove("active");
  cur = i;
  paintBars();
  const sl = slides[cur];
  sl.classList.add("active");
  $("#count").textContent = `${cur + 1} / ${slides.length}`;
  $("#prog").style.width = ((cur + 1) / slides.length * 100) + "%";
  const g = sl.dataset.game;
  if (g && GR[g]) GR[g]();
  if (!fromHash) { try { history.replaceState(null, "", "#slide-" + (cur + 1)); } catch (e) {} }
  $("#menuGrid").innerHTML = slides.map((s, k) => `<button data-goto="${k}" ${k === cur ? 'aria-current="true"' : ""}><b>${k + 1}</b>${esc(s.dataset.title || "")}</button>`).join("");
}
function rerenderGames() { if (flow) slides.forEach(s => { const g = s.dataset.game; if (g && GR[g]) GR[g](); }); else { const g = slides[cur].dataset.game; if (g && GR[g]) GR[g](); } }
/* Answers stay hidden from students until the teacher opens that slide.
   openSet holds the slide numbers the teacher has released. */
const LOCK = L.lockAnswers !== false;
let openSet = new Set(STUDENT ? store.get("clv-ans-" + PKEY, []) : []);
/* locked is decided per slide: on a phone every slide is on one page, and a student
   may scroll ahead to a slide the teacher has not opened yet */
const ansLocked = (k = cur) => STUDENT && LOCK && !openSet.has(ORIG[k]);
const slideOf = el => { const sec = el && el.closest("section.s"); const k = sec ? slides.indexOf(sec) : -1; return k < 0 ? cur : k; };
let toastId = null;
function toast(msg) {
  let el = document.getElementById("toast");
  if (!el) { el = document.createElement("div"); el.id = "toast"; el.className = "toast"; document.body.appendChild(el); }
  el.textContent = msg; el.hidden = false;
  clearTimeout(toastId); toastId = setTimeout(() => { el.hidden = true; }, 2600);
}
function paintBars() { if (TEACHER) paintAns(); else paintLock(); }
function paintLock() {
  if (!STUDENT || !LOCK) return;
  document.body.classList.toggle("anslock", ansLocked());
  slides.forEach((sl, k) => sl.classList.toggle("alock", ansLocked(k)));
}
function setOpen(list) {
  const had = openSet.has(ORIG[cur]);
  const before = new Set(openSet);
  openSet = new Set(list);
  slides.forEach((sec, k) => {
    const o = ORIG[k];
    if (openSet.has(o) && !before.has(o)) { lateOpen.add(o); gradeAnswered(sec, false); }
    if (!openSet.has(o)) $$(".trbtn", sec).forEach(b => toggleScript(b, false));
  });
  store.set("clv-ans-" + PKEY, [...openSet]);
  paintLock();
  if (!had && openSet.has(ORIG[cur])) toast("The teacher opened the answers \u2713");
}
function reveal(b) {
  if (ansLocked(slideOf(b))) {
    b.classList.remove("shake"); void b.offsetWidth; b.classList.add("shake");
    toast("\u{1F512} Wait for the teacher \u00b7 O\u2018qituvchini kuting");
    return;
  }
  if (b.classList.contains("on")) return; b.classList.add("on"); b.setAttribute("aria-label", "Answer shown"); burst(b, 30); }
function next() {
  const sl = slides[cur];
  if (!sl.dataset.game && !ansLocked()) {
    const h = $(".ans:not(.on), .pk:not(.on), .wr:not(.on)", sl);
    if (h) { if (h.classList.contains("pk")) checkPick(h); else if (h.classList.contains("wr")) checkWrite(h); else reveal(h); return; }
  }
  go(cur + 1);
}

/* ================= LISTENING: one audio element for the whole page ================= */
const AU = new Audio(); AU.preload = "none";
let curPlayer = null, clipBtn = null;
function paintPlayer(pl, playing) {
  const b = $(".pbtn", pl); if (!b) return;
  b.textContent = playing ? "❚❚" : "▶"; b.setAttribute("aria-label", playing ? "Pause" : "Play");
  pl.classList.toggle("on", playing);
}
function stopAudio() {
  AU.pause();
  if (curPlayer) paintPlayer(curPlayer, false);
  if (clipBtn) { clipBtn.classList.remove("on"); clipBtn = null; }
}
function playPlayer(pl, restart) {
  if (curPlayer === pl && !restart && !AU.paused) { AU.pause(); paintPlayer(pl, false); return; }
  if (clipBtn) { clipBtn.classList.remove("on"); clipBtn = null; }
  if (curPlayer && curPlayer !== pl) paintPlayer(curPlayer, false);
  const abs = new URL(pl.dataset.src, location.href).href;
  if (AU.src !== abs) AU.src = abs;
  if (restart) { try { AU.currentTime = 0; } catch (e) {} }
  curPlayer = pl; AU.playbackRate = pl.classList.contains("slow") ? 0.8 : 1;
  paintPlayer(pl, true);
  AU.play().catch(() => { paintPlayer(pl, false); toast("Tap ▶ to play · ▶ ni bosing"); });
}
function playClip(btn) {
  if (clipBtn === btn && !AU.paused) { stopAudio(); return; }
  stopAudio(); curPlayer = null;
  AU.src = new URL((L.audioBase || "") + btn.dataset.clip + ".mp3", location.href).href; AU.playbackRate = 1;
  clipBtn = btn; btn.classList.add("on");
  AU.play().catch(() => { btn.classList.remove("on"); clipBtn = null; });
}
AU.addEventListener("timeupdate", () => {
  const pl = curPlayer; if (!pl) return;
  const d = AU.duration || +pl.dataset.dur || 1, t = AU.currentTime;
  const f = $(".pfill", pl), tm = $(".ptime", pl);
  if (f) f.style.width = Math.min(100, t / d * 100) + "%";
  if (tm) tm.textContent = fmtT(t) + " / " + fmtT(d);
  if (pl.dataset.times) {                               /* light up the line being spoken */
    const ts = pl.dataset.times.split(",").map(Number); let k = -1;
    ts.forEach((x, j) => { if (t >= x - 0.1) k = j; });
    $$(".tr p", pl.closest("section.s")).forEach((p, j) => p.classList.toggle("now", j === k));
  }
});
AU.addEventListener("ended", () => {
  if (clipBtn) { clipBtn.classList.remove("on"); clipBtn = null; return; }
  const pl = curPlayer; if (!pl) return;
  paintPlayer(pl, false);
  const c = $(".plays b", pl); if (c) c.textContent = +c.textContent + 1;
  $$(".tr p", pl.closest("section.s")).forEach(p => p.classList.remove("now"));
});
function seek(track, x) {
  const pl = track.closest(".player"), r = track.getBoundingClientRect();
  const fr = Math.max(0, Math.min(1, (x - r.left) / r.width));
  if (curPlayer !== pl) { playPlayer(pl, true); }
  const go2 = () => { try { AU.currentTime = fr * (AU.duration || +pl.dataset.dur || 0); } catch (e) {} };
  if (AU.readyState >= 1) go2(); else AU.addEventListener("loadedmetadata", go2, { once: true });
}
function lockedTap(el) { el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake"); toast("\u{1F512} Wait for the teacher · O‘qituvchini kuting"); }
function toggleScript(btn, show) {
  const tr = btn.nextElementSibling; if (!tr) return;
  if (show == null && ansLocked(slideOf(btn))) return lockedTap(btn);
  tr.hidden = show == null ? !tr.hidden : !show;
  btn.textContent = tr.hidden ? "Show the script · Matnni ko‘rsatish" : "Hide the script · Matnni yashirish";
}

/* ================= ANSWERS ON PHONES: pick an option, or write what you hear ================= */
const PICKS_KEY = "clv-picks-" + PKEY, AWARD_KEY = "clv-awarded-" + PKEY;
let picks = STUDENT ? store.get(PICKS_KEY, {}) : {};
let awarded = new Set(STUDENT ? store.get(AWARD_KEY, []) : []);
const lateOpen = new Set();     /* slides opened while this page was open: answers given after that earn no points */
const itemKey = el => { const sec = el.closest("section.s"); return ORIG[slides.indexOf(sec)] + ":" + (el.classList.contains("wr") ? "w" : "") + el.dataset.k; };
function earn(el) {
  if (!STUDENT) return;
  const key = itemKey(el); if (awarded.has(key)) return;
  awarded.add(key); store.set(AWARD_KEY, [...awarded]); addMine(10);
}
function choose(btn) {
  const pk = btn.closest(".pk"); if (pk.classList.contains("on")) return;
  $$(".po", pk).forEach(b => b.classList.toggle("sel", b === btn));
  if (!STUDENT) return;                                          /* on the board: just mark the class's choice */
  const k = slideOf(pk); picks[itemKey(pk)] = +btn.dataset.po; store.set(PICKS_KEY, picks);
  if (!ansLocked(k)) checkPick(pk, lateOpen.has(ORIG[k]));
  else if (!pk.dataset.told) { pk.dataset.told = 1; toast("✓ Saved · Saqlandi"); }
}
function checkPick(pk, noPoints) {
  if (pk.classList.contains("on")) return;
  pk.classList.add("on");
  const a = +pk.dataset.a, opts = $$(".po", pk), sel = opts.findIndex(b => b.classList.contains("sel"));
  opts.forEach((b, j) => b.classList.toggle("ok", j === a));
  if (sel >= 0 && sel !== a) opts[sel].classList.add("no");
  if (sel === a && !noPoints) earn(pk);
}
const NUM = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
const norm = x => String(x).toLowerCase().replace(/[‘’`]/g, "'").replace(/\b(\d{1,2})\b/g, (m, d) => NUM[+d] || d)
  .replace(/\b(\w+)n't\b/g, "$1 not").replace(/\bi'm\b/g, "i am").replace(/\b(he|she|it|what|that)'s\b/g, "$1 is").replace(/\b(we|you|they)'re\b/g, "$1 are")
  .replace(/\bcan not\b/g, "cannot").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
function checkWrite(wr, noPoints) {
  if (wr.classList.contains("on")) return;
  wr.classList.add("on");
  const v = $(".win", wr).value;
  const good = !!v.trim() && norm(v) === norm(wr.dataset.ans);
  wr.classList.toggle("good", good); wr.classList.toggle("bad", !good && !!v.trim());
  if (good && !noPoints) earn(wr);
}
function gradeAnswered(sec, late) {
  $$(".pk", sec).forEach(pk => { if ($(".po.sel", pk)) checkPick(pk, late); });
  $$(".wr", sec).forEach(wr => { if ($(".win", wr).value.trim()) checkWrite(wr, late); });
}
function revealAll(sec) {
  $$(".pk", sec).forEach(pk => checkPick(pk, true));
  $$(".wr", sec).forEach(wr => checkWrite(wr, true));
  $$(".ans", sec).forEach(b => { if (!b.classList.contains("on")) { b.classList.add("on"); } });
  $$(".trbtn", sec).forEach(b => toggleScript(b, true));
}
function fromHash() { const m = location.hash.match(/^#slide-(\d+)$/); return m ? +m[1] - 1 : 0; }
addEventListener("hashchange", () => { if (!flow) go(fromHash(), true); });
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
const box = id => $("#g-" + id);
const T = (teacherText, studentText) => STUDENT ? studentText : teacherText;

const GR = {
  auction() {
    if (!box("auction")) return;
    const G = GS.auction || (GS.auction = {});
    if (G.i == null) { G.order = shuffle(G0.auction); G.i = 0; G.bids = [0,0,0,0]; G.shown = false; G.guess = null; }
    const it = G.order[G.i];
    let verdict = "";
    if (G.shown) {
      if (STUDENT) verdict = `<span class="verdict ${G.guess === it.ok ? "good" : "bad"}">${G.guess === it.ok ? "You got it! +100" : "Not this time"}</span><p class="en" style="font-size:44px;color:var(--mist)">The sentence is ${it.ok ? "right" : "wrong"}.</p>`;
      else verdict = `<span class="verdict ${it.ok ? "good" : "bad"}">${it.ok ? "RIGHT! Bids paid" : "WRONG! Bids lost"}</span>`;
      if (!it.ok) verdict += `<p class="en" style="color:var(--mint);font-size:52px;font-weight:800">${esc(it.fix)}</p>`;
    }
    const controls = STUDENT
      ? (G.shown ? "" : `<div class="row" style="justify-content:center"><button class="sbtn g" data-guess="1">It’s right</button><button class="sbtn r" data-guess="0">It’s wrong</button></div>`)
      : `<div class="bids">${teams.slice(0, teamCount).map((t, i) => `<div class="bid" style="--tc:${TC[i]}"><b>${esc(t.name)}</b><span class="row" style="gap:10px;flex-wrap:nowrap"><button class="mini" data-bid="${i}" data-d="-100" ${G.shown ? "disabled" : ""} aria-label="Lower bid">−</button><span class="amt" style="color:var(--ink)">${G.bids[i]}</span><button class="mini" data-bid="${i}" data-d="100" ${G.shown ? "disabled" : ""} aria-label="Raise bid">+</button></span></div>`).join("")}</div>`;
    box("auction").innerHTML = head(T("Grammar Auction", "Right or wrong?"),
        T("Teams talk for 20 seconds, then bid 0–500 if they think the sentence is correct. Right = win the bid, wrong = lose it.", "Read the sentence. Is it correct? Guess right to win 100 points."),
        STUDENT ? "" : `<button class="plusbtn" data-start1000>+1000 to every team</button>`) + `
      <div style="background:var(--ink2);border-radius:36px;padding:32px 48px;display:flex;flex-direction:column;gap:12px;align-items:center;text-align:center">
        <p class="eb">Sentence ${G.i + 1} of ${G.order.length}</p><p class="bigs" style="font-size:68px">${esc(it.s)}</p>${verdict}
      </div>${controls}
      <div class="row" style="justify-content:space-between">
        ${G.shown ? `<button class="sbtn y" data-auc-next ${G.i + 1 >= G.order.length ? "disabled" : ""}>Next sentence →</button>` : (STUDENT ? "" : `<button class="sbtn y" data-auc-reveal>Reveal</button>`)}
        ${G.shown && !it.ok && TEACHER ? award(100, "Fixed it? Bonus:") : ""}
      </div>`;
  },
  board() {
    if (!box("board")) return;
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
    box("board").innerHTML = head("Quiz Board", T("Teams take turns: choose a topic and a value. 20 seconds to answer. Wrong? The next team can steal.", "Choose a square. Answer out loud, then check. Got it right? Take the points!")) +
      `<div class="board flex1" style="grid-template-columns:repeat(${B.length},1fr)">${B.map(c => `<div class="bh">${esc(c.cat)}</div>`).join("")}${tiles}</div>${modal}`;
  },
  wheel() {
    if (!box("wheel")) return;
    const G = GS.wheel || (GS.wheel = { rot: 0 });
    box("wheel").innerHTML = head("Spin the Wheel", T("The wheel picks a topic and a speaking challenge. Answer before the timer ends.", "Spin, then do the challenge out loud before the timer ends.")) + `
      <div class="row flex1 wheelrow" style="gap:64px;align-items:center;flex-wrap:nowrap">
        <div class="wheelwrap"><canvas id="wheel" width="1280" height="1280" style="transform:rotate(${G.rot}deg)"></canvas><div class="hubc"></div><div class="ptr"></div></div>
        <div class="chal" id="chal">${G.task ? chalHTML(G.task) : `<p class="eb">Ready?</p><p class="bigs" style="font-size:64px;color:var(--cream)">Spin the wheel to get a challenge.</p><div><button class="sbtn y" data-spin>Spin!</button></div>`}</div>
      </div>`;
    drawWheel();
  },
  build() {
    if (!box("build")) return;
    const G = GS.build || (GS.build = {});
    if (G.i == null) { G.order = shuffle(G0.build); G.i = 0; }
    if (!G.pool) { G.pool = shuffle(G.order[G.i].w.map((_, k) => k)); G.built = []; G.state = ""; }
    const it = G.order[G.i], answer = it.w.join(" ") + it.e;
    box("build").innerHTML = head("Sentence Builder", T("Teams race to say it. The fastest team taps the tiles in order. Tap a tile in the line to send it back.", "Tap the words in the right order. Tap a word in the line to send it back.")) + `
      <p class="eb">Round ${G.i + 1} of ${G.order.length}</p>
      <div class="slots">${G.built.length ? G.built.map(k => `<button class="wt" data-built="${k}">${esc(it.w[k])}</button>`).join("") : `<span class="sub">Tap the words below…</span>`}<span class="wt" style="background:none;box-shadow:none;color:var(--slate)">${it.e}</span></div>
      <div class="pool">${G.pool.filter(k => !G.built.includes(k)).map(k => `<button class="wt" data-pool="${k}">${esc(it.w[k])}</button>`).join("")}</div>
      <div class="row">
        <button class="sbtn g" data-b-check ${G.built.length === it.w.length ? "" : "disabled"}>Check</button>
        <button class="sbtn w" data-b-show>Show answer</button>
        <button class="sbtn" data-b-next ${G.i + 1 >= G.order.length ? "disabled" : ""}>Next →</button>
        ${G.state === "right" ? `<span class="verdict good">Correct!${STUDENT ? " +100" : ""}</span>` : ""}${G.state === "wrong" ? `<span class="verdict bad">Not yet!</span>` : ""}
        ${G.state === "shown" ? `<span class="en cg" style="font-weight:800">${esc(answer)}</span>` : ""}
      </div>
      ${G.state === "right" && TEACHER ? award(100) : ""}`;
  },
  mystery() {
    if (!box("mystery")) return;
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
    if (!box("mime")) return;
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
  boss() {
    if (!box("boss")) return;
    const B = G0.boss, G = GS.boss || (GS.boss = {});
    const c = G.card;
    let body;
    if (!c) body = `<div class="cardx"><p class="bigs">Tap “New card”. The Boss reads it aloud.</p></div>`;
    else if (c.type === "may") body = `<div class="cardx open"><div style="display:flex;flex-direction:column;gap:24px;align-items:center"><p class="eb">Student’s turn</p><p class="bigs">Ask the Boss: “May I ${esc(c.text)}?”</p>${G.rev ? `<span class="verdict ${c.yes ? "good" : "bad"}">${c.yes ? "Yes, you may." : "No, you may not."}</span>` : ""}</div></div>`;
    else body = `<div class="cardx open"><div style="display:flex;flex-direction:column;gap:20px;align-items:center"><p class="bigs" style="font-size:110px">${esc(c.please ? "Please " + c.text : c.text.charAt(0).toUpperCase() + c.text.slice(1))}!</p><p class="uz">${esc(c.please ? "Iltimos, " + c.uz : c.uz.charAt(0).toUpperCase() + c.uz.slice(1))}!</p>${G.rev ? `<span class="verdict ${c.please ? "good" : "bad"}">${c.please ? "Do it!" : "Freeze! No “please”"}</span>` : ""}</div></div>`;
    box("boss").innerHTML = head("Boss Says…", "Everyone stands. Obey only if the Boss says “please”. Move without “please”? Sit down. On a “May I…?” card, a student asks the Boss.") + body + `
      <div class="row" style="justify-content:space-between"><div class="row"><button class="sbtn b" data-boss-new>New card</button><button class="sbtn" data-boss-rev ${c && !G.rev ? "" : "disabled"}>Reveal</button></div>${award(100, "Last one standing:")}</div>`;
    G._B = B;
  },
  bye() { renderLeader(); renderMine(); }
};
const chalHTML = t => `<p class="eb">${esc(t.topic)}</p><p class="bigs" style="font-size:60px;color:var(--cream)">${esc(t.text)}</p>${timerHTML(30)}
  <div class="row"><button class="sbtn y" data-spin>Spin again</button></div>${STUDENT ? award(100) : award(100, "Good:") + award(200, "Excellent:")}`;
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
  const done = () => { G.task = { topic: W[k].name, text: pick(W[k].tasks) }; const ch = $("#chal"); if (ch) { ch.innerHTML = chalHTML(G.task); burst(c); } };
  if (reduceMotion) done(); else setTimeout(done, 4300);
}

/* ================= EVENTS ================= */
document.addEventListener("pointerdown", e => { const tr = e.target.closest("[data-seek]"); if (tr) seek(tr, e.clientX); });
document.addEventListener("input", e => {
  const w = e.target.closest(".win"); if (!w || !STUDENT) return;
  const wr = w.closest(".wr"); picks[itemKey(wr)] = w.value; store.set(PICKS_KEY, picks);
});
document.addEventListener("change", e => {
  const w = e.target.closest(".win"); if (!w) return;
  const wr = w.closest(".wr"), k = slideOf(wr);
  if (STUDENT && !ansLocked(k)) checkWrite(wr, lateOpen.has(ORIG[k]));
});
document.addEventListener("click", e => {
  const t = e.target.closest("button, [data-modal]");
  if (!t) return;
  const d = t.dataset;
  const sec = t.closest("section.s") || slides[cur];
  if (e.detail > 0 && t.tagName === "BUTTON") t.blur();
  if (t.classList.contains("ans")) { reveal(t); return; }
  if (d.play != null) { playPlayer(t.closest(".player")); return; }
  if (d.replay != null) { playPlayer(t.closest(".player"), true); return; }
  if (d.speed != null) { const pl = t.closest(".player"); const slow = pl.classList.toggle("slow"); t.textContent = slow ? "Normal" : "Slow"; if (curPlayer === pl) AU.playbackRate = slow ? 0.8 : 1; return; }
  if (d.clip) { playClip(t); return; }
  if (d.script != null) { toggleScript(t); return; }
  if (d.po != null) { choose(t); return; }
  if (d.livegame != null) { openGame(ROOT + "live/?embed=1&set=" + encodeURIComponent(LIVE_SET) + BROKER_QS); return; }
  if (d.joingame != null) { joinGame(lastGame); return; }
  if (d.gameclose != null) { hideGame(); return; }
  if (d.promptclose != null) { const pr = $("#gprompt"); if (pr) pr.remove(); return; }
  if (d.prev != null) { go(cur - 1); return; }
  if (d.next != null) { go(cur + 1); return; }
  if (d.menu != null) { $("#menu").hidden = false; return; }
  if (d.menuClose != null) { $("#menu").hidden = true; return; }
  if (d.goto != null) { $("#menu").hidden = true; go(+d.goto); return; }
  if (d.full != null) { toggleFull(); return; }
  if (d.tipclose != null) { store.set("clv-tip-done", true); const tp = $("#tip"); if (tp) tp.remove(); return; }
  if (d.answers != null) { const o = ORIG[cur];
    if (openSet.has(o)) { openSet.delete(o); toast("Answers hidden from the class again"); }
    else { openSet.add(o); revealAll(slides[cur]); toast("Answers open for the class on this slide"); }
    paintAns(); sendSync(); return; }
  if (d.answersAll != null) {
    if (ORIG.every(o => openSet.has(o))) { openSet = new Set(); toast("All answers hidden from the class"); }
    else { ORIG.forEach(o => openSet.add(o)); revealAll(slides[cur]); toast("Every slide's answers are open for the class"); }
    paintAns(); sendSync(); return; }
  if (d.follow != null) { following = !following; store.set("clv-follow", following); paintFollow(); if (following && lastMsg) followTo(lastMsg, true); return; }
  if (d.viewtoggle != null) { viewPref = flow ? "slides" : "scroll"; store.set("clv-view", viewPref); fit(); if (!flow) go(cur, true); return; }
  if (d.jump) { const i = slides.findIndex(s => s.dataset.id === d.jump); if (i >= 0) go(i); return; }
  if (d.blur) { const el = $("#" + d.blur); const on = el.classList.toggle("blurred"); t.textContent = on ? "Show the lines" : "Hide the lines"; return; }
  if (d.score != null) { addScore(+d.score, +d.d); return; }
  if (d.reset) { if (d.reset === "yes") { teams.forEach(x => x.score = 0); save(); renderLeader(); } confirming = d.reset === "ask"; renderTeams(); return; }
  if (d.award != null) { addScore(+d.award, +d.pts); t.disabled = true; return; }
  if (d.self != null) { addMine(+d.self); t.disabled = true; t.textContent = `+${d.self} added`; return; }
  if (d.start1000 != null) { teams.forEach((x, i) => { if (i < teamCount) x.score += 1000; }); save(); renderTeams(); renderLeader(); burst(t); t.disabled = true; return; }
  if (d.spotlight) {
    const cards = $$(".spot", $("#" + d.spotlight)); if (!cards.length) return;
    let n = 0; const end = 10 + Math.floor(Math.random() * cards.length);
    const step = () => { cards.forEach(c => c.classList.remove("lit")); cards[n % cards.length].classList.add("lit"); if (n++ < end) setTimeout(step, 70 + n * 12); else burst(cards[(n - 1) % cards.length], 50); };
    step(); return;
  }
  if (t.classList.contains("checkit")) { t.classList.toggle("done"); if (t.classList.contains("done")) burst(t, 40); const all = $$(".checkit", sec); if (all.length && all.every(x => x.classList.contains("done"))) burst(sec, 160); return; }
  if (d.celebrate != null) { burst($("#leaderboard"), 200); setTimeout(() => burst(stage, 160), 300); return; }
  if (d.startTimer != null) { startTimer(t.closest("[data-timer]")); return; }
  if (d.restart != null) { const g = sec.dataset.game; delete GS[g]; GR[g](); return; }
  /* auction */
  if (d.bid != null) { const G = GS.auction, i = +d.bid; G.bids[i] = Math.min(500, Math.max(0, G.bids[i] + +d.d)); GR.auction(); return; }
  if (d.aucReveal != null) { const G = GS.auction, it = G.order[G.i]; G.shown = true; G.bids.slice(0, teamCount).forEach((b, i) => { if (b) addScore(i, it.ok ? b : -b); }); GR.auction(); if (it.ok) burst($(".verdict", sec)); return; }
  if (d.guess != null) { const G = GS.auction, it = G.order[G.i]; G.guess = d.guess === "1"; G.shown = true; GR.auction(); if (G.guess === it.ok) { addMine(100); burst($(".verdict", sec)); } return; }
  if (d.aucNext != null) { const G = GS.auction; G.i++; G.bids = [0,0,0,0]; G.shown = false; G.guess = null; GR.auction(); return; }
  /* board */
  if (d.tile) { const G = GS.board; if (!G.used[d.tile]) { G.open = d.tile; G.shownAns = false; GR.board(); } return; }
  if (d.tileAnswer != null && ansLocked(slideOf(t))) { toast("\u{1F512} Wait for the teacher \u00b7 O\u2018qituvchini kuting"); return; }
  if (d.tileAnswer != null) { GS.board.shownAns = true; clearInterval(timerId); GR.board(); return; }
  if (d.tileClose != null) { const G = GS.board; G.used[G.open] = true; G.open = null; clearInterval(timerId); GR.board(); return; }
  if (d.modal != null && e.target === t) { GS.board.open = null; clearInterval(timerId); GR.board(); return; }
  /* wheel */
  if (d.spin != null) { spin(); return; }
  /* builder */
  if (d.pool != null) { const G = GS.build; G.built.push(+d.pool); G.state = ""; GR.build(); return; }
  if (d.built != null) { const G = GS.build; G.built = G.built.filter(k => k !== +d.built); G.state = ""; GR.build(); return; }
  if (d.bCheck != null) { const G = GS.build, ok = G.built.every((k, i) => k === i); G.state = ok ? "right" : "wrong"; if (ok && STUDENT && !G.scored) { G.scored = true; addMine(100); } GR.build(); if (ok) burst($(".slots", sec)); return; }
  if (d.bShow != null) { const G = GS.build; G.state = "shown"; G.built = G.order[G.i].w.map((_, k) => k); G.scored = true; GR.build(); return; }
  if (d.bNext != null) { const G = GS.build; G.i++; G.pool = null; G.scored = false; GR.build(); return; }
  /* mystery */
  if (d.clue != null) { const G = GS.mystery; G.n = Math.min(G.order[G.i].c.length, G.n + 1); GR.mystery(); return; }
  if (d.placeRev != null) { GS.mystery.rev = true; GR.mystery(); burst($(".secret", sec)); return; }
  if (d.placeNext != null) { const G = GS.mystery; G.i++; G.n = 1; G.rev = false; GR.mystery(); return; }
  /* mime */
  if (d.mimeNext != null) { const G = GS.mime; G.i++; G.st = "hidden"; clearInterval(timerId); GR.mime(); return; }
  if (d.mimePeek != null) { GS.mime.st = "peek"; GR.mime(); return; }
  if (d.mimeHide != null) { GS.mime.st = "hidden"; GR.mime(); return; }
  if (d.mimeRev != null) { GS.mime.st = "shown"; clearInterval(timerId); GR.mime(); burst($(".secret", sec)); return; }
  /* boss */
  if (d.bossNew != null) { const G = GS.boss, B = G0.boss; G.rev = false; if (Math.random() < .22) G.card = { type: "may", text: pick(B.may), yes: Math.random() < .6 }; else { const [en, uz] = pick(B.cmds); G.card = { type: "cmd", text: en, uz, please: Math.random() < .6 }; } GR.boss(); return; }
  if (d.bossRev != null) { GS.boss.rev = true; GR.boss(); return; }
});
document.addEventListener("keydown", e => {
  if (flow) return;
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
vp.addEventListener("touchend", e => { if (flow || tx == null) return; const dx = e.changedTouches[0].clientX - tx; tx = null; if (Math.abs(dx) > 70 && !e.target.closest("button")) { dx < 0 ? go(cur + 1) : go(cur - 1); } }, { passive: true });

/* ================= FOLLOW THE TEACHER: students' phones show the slide on the board ================= */
const ORIG = slideList.map(s => L.slides.indexOf(s));
let sync = null, following = store.get("clv-follow", true), lastMsg = null, lastTs = 0;
function paintAns() {
  const b = $("#ansBtn");
  if (b) { const on = openSet.has(ORIG[cur]); b.textContent = on ? "\u25CF Answers shown" : "Show answers"; b.classList.toggle("on", on); }
  const a = $("#ansAllBtn");
  if (a) { const all = ORIG.every(o => openSet.has(o)); a.textContent = all ? "\u25CF All open" : "Open all"; a.classList.toggle("on", all); }
}
function sendSync(i) { if (sync) sync.send({ i: ORIG[i == null ? cur : i], ts: Date.now(), open: [...openSet], game: gameCode }); }
function paintFollow() { const b = $("#followBtn"); if (b) { b.innerHTML = following ? "● Following<span class=\"long\"> teacher</span>" : "Follow<span class=\"long\"> teacher</span>"; b.classList.toggle("on", following); } }
function followTo(m, force) {
  if (!m || typeof m.i !== "number") return;
  const age = Math.abs(Date.now() - (m.ts || 0));
  /* Which slides are open applies at any age, so a student revising at home
     still sees whatever the teacher released in class. */
  if (Array.isArray(m.open)) setOpen(m.open);
  if (age > 3 * 3600000) return;                                  // only follow slides during class
  if (STUDENT && "game" in m) {
    const was = lastGame; lastGame = m.game || null; paintGame();
    if (lastGame && lastGame !== was) gamePrompt(lastGame);
    if (!lastGame) { const pr = $("#gprompt"); if (pr) pr.remove(); promptedFor = null; }
  }
  if (!force && (m.ts || 0) <= lastTs) return;
  lastTs = m.ts || 0; lastMsg = m;
  if (!following) return;
  let k = 0; ORIG.forEach((o, j) => { if (o <= m.i) k = j; });
  if (k === cur && !flow) return;
  go(k);
}
function startSync() {
  if (!window.LiveNet) return;
  const id = L.id || (L.n ? "l" + L.n : "rev");
  sync = window.LiveNet.syncSlides(id, STUDENT ? m => followTo(m) : null);
  if (TEACHER) sendSync();
}
/* ================= CLASS GAME INSIDE THE LESSON ================= */
const ROOT = "../../";
const LIVE_SET = L.liveSet || L.id || (L.n ? "l" + L.n : "rev");
const BROKER_QS = (() => { try { const b = new URLSearchParams(location.search).get("broker"); return b ? "&broker=" + encodeURIComponent(b) : ""; } catch (e) { return ""; } })();
let gameCode = null, lastGame = null, promptedFor = null;
function openGame(url) {
  let box = $("#gamebox");
  if (!box) {
    box = document.createElement("div"); box.id = "gamebox"; box.className = "gamebox";
    box.innerHTML = `<div class="gbar"><button class="nbtn y" data-gameclose>← Back to the lesson${STUDENT ? " · Darsga qaytish" : ""}</button><span class="gtitle">${STUDENT ? "Class game · Sinf o‘yini" : "Live game · the game keeps running when you go back"}</span></div><iframe title="Class game" allow="autoplay"></iframe>`;
    document.body.appendChild(box);
  }
  const fr = $("iframe", box);
  if (url && box.dataset.url !== url) { box.dataset.url = url; fr.src = url; }
  box.hidden = false; document.body.classList.add("gameopen");
  stopAudio();
  const pr = $("#gprompt"); if (pr) pr.remove();
}
function hideGame() { const box = $("#gamebox"); if (box) box.hidden = true; document.body.classList.remove("gameopen"); paintGame(); }
function joinGame(code) {
  const box = $("#gamebox");
  if (box && !code && box.dataset.url) return openGame();          /* go back to the game already open */
  openGame(ROOT + "play/?embed=1" + (code ? "&code=" + encodeURIComponent(code) : "") + BROKER_QS);
}
function paintGame() {
  const b = $("#gameBtn"); if (!b) return;
  const on = TEACHER ? !!gameCode : !!lastGame;
  b.classList.toggle("on", on);
  b.innerHTML = TEACHER ? (gameCode ? `\u{1F3AE} Game on · ${gameCode}` : "\u{1F3AE} Live game") : `\u{1F3AE}<span class="long"> ${on ? "Game on! Join" : "Join game"}</span>`;
}
function gamePrompt(code) {
  if (promptedFor === code) return; promptedFor = code;
  const box = $("#gamebox"); if (box && !box.hidden) return;
  let pr = $("#gprompt"); if (pr) pr.remove();
  pr = document.createElement("div"); pr.id = "gprompt"; pr.className = "gprompt";
  pr.innerHTML = `<span class="gpi" aria-hidden="true">\u{1F3AE}</span><span class="gpt"><b>The class game is starting!</b><small>O‘yin boshlanmoqda · code ${esc(code)}</small></span>
    <button class="nbtn y" data-joingame>Join →</button><button class="nbtn" data-promptclose aria-label="Later">×</button>`;
  document.body.appendChild(pr);
}
addEventListener("message", e => {
  if (e.origin !== location.origin || !e.data || !e.data.clv) return;
  const m = e.data;
  if (m.clv === "room" && TEACHER) { gameCode = m.code || null; sendSync(); paintGame(); }
  if (m.clv === "close") hideGame();
});

paintFollow(); paintAns(); paintLock(); paintGame();
/* bring back what a student already answered, and grade it if the answers are open */
if (STUDENT) slides.forEach((sec, k) => {
  $$(".pk", sec).forEach(pk => { const v = picks[itemKey(pk)]; if (v != null) { const b = $$(".po", pk)[v]; if (b) b.classList.add("sel"); } });
  $$(".wr", sec).forEach(wr => { const v = picks[itemKey(wr)]; if (v) $(".win", wr).value = v; });
  if (!ansLocked(k)) gradeAnswered(sec, false);
});
if (window.LiveNet) startSync();
else if (SELF) { const sc = document.createElement("script"); sc.src = SELF.replace(/engine\.js(\?.*)?$/, "live-net.js"); sc.onload = startSync; document.head.appendChild(sc); }

/* ================= START ================= */
renderTeams();
slides[0].classList.add("active");
fit();
if (!flow) go(fromHash(), true);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { fit(); drawWheel(); });
})();
