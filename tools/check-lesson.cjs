#!/usr/bin/env node
/* Checks a lesson before it goes live:  node tools/check-lesson.cjs 7
   - lesson.js loads and has the right number and title (same as lessons/plan.js)
   - every slide type is one the engine knows; no clue ("mystery") game
   - games have the right shape and enough items
   - Uzbek is there (quiz "uz" rows, examples, goals, cover chips)
   - index.html exists, the live game set (lessons/live-sets.js) exists, plan.js marks it ready
   Exit code 1 if something is wrong, with one line per problem. */
"use strict";
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const n = Number(process.argv[2]);
if (!n) { console.error("usage: node tools/check-lesson.cjs <lesson number>"); process.exit(2); }
const pad = String(n).padStart(2, "0"), dir = path.join(ROOT, "lessons", pad);
const errs = [], warn = [];
const load = file => { const w = {}; new Function("window", "localStorage", fs.readFileSync(file, "utf8"))(w, { getItem: () => null, setItem() {} }); return w; };

if (!fs.existsSync(path.join(dir, "lesson.js"))) { console.log(`✗ lessons/${pad}/lesson.js is missing`); process.exit(1); }
let L; try { L = load(path.join(dir, "lesson.js")).LESSON; } catch (e) { console.log("✗ lesson.js does not run: " + e.message); process.exit(1); }
const P = load(path.join(ROOT, "lessons/plan.js")).PLAN;
const planL = P.weeks.flatMap(w => w.lessons).find(l => l.n === n);
if (!L) errs.push("lesson.js must set window.LESSON");
else {
  if (L.n !== n) errs.push(`LESSON.n is ${L.n}, expected ${n}`);
  if (!planL) errs.push(`lesson ${n} is not in lessons/plan.js`);
  else {
    if (L.title !== planL.title) errs.push(`title "${L.title}" differs from plan.js "${planL.title}"`);
    if (!planL.ready) errs.push(`plan.js: lesson ${n} needs ready: true`);
  }
  const KNOWN = ["raw", "cover", "goals", "spot", "formula", "cols", "examples", "quad", "quiz", "gaps", "table", "check", "bye", "words", "wall", "listen", "pick", "write", "machine", "swall", "slap", "tbomb", "golive", "sources", "game"];
  const S = L.slides || [];
  if (S.length < 12) errs.push(`only ${S.length} slides; lessons have about 25–37 (reviews about 14)`);
  S.forEach((s, i) => { if (!KNOWN.includes(s.t)) errs.push(`slide ${i}: unknown type "${s.t}"`); });
  if (!S[0] || S[0].t !== "cover") errs.push("first slide must be the cover");
  if (!S.some(s => s.t === "check")) errs.push("needs a check slide (what I can do now)");
  if (!S.length || S[S.length - 1].t !== "bye") errs.push("last slide must be bye");
  const clue = S.some(s => s.t === "game" && s.g === "mystery") || (L.games && L.games.mystery);
  if (clue) (n >= 7 ? errs : warn).push("no clue game (mystery): it was removed from the course");
  const G = L.games || {}, GAMES = ["mime", "board", "wheel", "build", "auction", "boss"];
  S.filter(s => s.t === "game" && s.g !== "mystery").forEach(s => { if (!GAMES.includes(s.g)) errs.push(`game slide "${s.g}" is not a game type`); else if (!G[s.g]) errs.push(`game slide "${s.g}" but LESSON.games.${s.g} is missing`); });
  const need = (k, min, ok) => { if (!G[k]) return; if (!Array.isArray(G[k]) || G[k].length < min) errs.push(`games.${k}: need at least ${min} items`); else G[k].forEach((x, i) => { const m = ok(x); if (m) errs.push(`games.${k}[${i}]: ${m}`); }); };
  need("mime", 10, x => !x.cue || !x.say ? "needs cue and say" : "");
  need("board", 5, x => !x.cat || !Array.isArray(x.qs) || x.qs.length !== 3 || x.qs.some(q => !Array.isArray(q) || q.length !== 2) ? "needs cat and 3 qs [question, answer]" : "");
  need("wheel", 5, x => !x.name || !Array.isArray(x.tasks) || x.tasks.length < 3 ? "needs name and 3+ tasks" : "");
  need("build", 6, x => !Array.isArray(x.w) || x.w.length < 3 || typeof x.e !== "string" ? "needs w (words) and e (end mark)" : "");
  need("auction", 8, x => typeof x.s !== "string" || typeof x.ok !== "boolean" || (!x.ok && !x.fix) ? "needs s, ok and fix when wrong" : "");
  if (G.auction && G.auction.filter(x => x.ok).length < 3) errs.push("games.auction: mix right and wrong sentences");
  const quizzes = S.filter(s => s.t === "quiz");
  if (!quizzes.some(q => q.kind === "uz")) warn.push("no Uzbek → English quiz (kind: \"uz\")");
  if (!quizzes.some(q => q.kind === "fix")) warn.push("no Find-the-mistake quiz (kind: \"fix\")");
  S.forEach((s, i) => {
    if (s.t === "examples" && (s.items || []).some(it => !Array.isArray(it) || it.length < 2 || !it[1])) errs.push(`slide ${i} (examples): every item needs [English, Uzbek]`);
    if ((s.t === "quiz" || s.t === "gaps") && (s.rows || []).some(r => !Array.isArray(r) || r.length < 2 || !r[1])) errs.push(`slide ${i} (${s.t}): every row needs [question, answer]`);
  });
}
if (!fs.existsSync(path.join(dir, "index.html"))) errs.push(`lessons/${pad}/index.html is missing (copy lessons/05/index.html, change the <title>)`);
else { const h = fs.readFileSync(path.join(dir, "index.html"), "utf8"); if (!h.includes("../engine.js") || !h.includes("lesson.js")) errs.push("index.html must load ../plan.js, lesson.js and ../engine.js like lessons/05/index.html"); if (!h.includes(`Lesson ${n}`)) warn.push("index.html <title> should start with “Lesson " + n + " · ”"); }
const sets = load(path.join(ROOT, "lessons/live-sets.js")).LIVE_SETS || [];
const set = sets.find(s => s.id === "l" + n);
if (!set) errs.push(`lessons/live-sets.js: add { id: "l${n}", lesson: ${n}, path: "lessons/${pad}/lesson.js", … }`);
else if (!set.mixOf) {
  if ((set.qs || []).length < 25) errs.push(`live-sets l${n}: ${(set.qs || []).length} questions, need at least 25`);
  (set.qs || []).forEach((q, i) => { if (!Array.isArray(q) || q.length !== 5) errs.push(`live-sets l${n} qs[${i}]: needs [question, right, wrong, wrong, wrong]`); else if (new Set(q.slice(1)).size !== 4) errs.push(`live-sets l${n} qs[${i}]: answers must all differ`); });
}
warn.forEach(w => console.log("! " + w));
if (errs.length) { errs.forEach(e => console.log("✗ " + e)); process.exit(1); }
console.log(`✓ lesson ${n} looks right: ${L.slides.length} slides, games: ${Object.keys(L.games || {}).join(", ")}, live set: ${set.mixOf ? "mix of " + set.mixOf.join(", ") : set.qs.length + " questions"}`);
