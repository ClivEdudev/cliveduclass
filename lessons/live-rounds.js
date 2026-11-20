/* Builds the questions for a live game or a solo game. Needs live-sets.js and qbank.js.
   Game types: mix, mcq (quiz), tf (right or wrong), build (word order), vocab (vocabulary only). */
(function () {
  "use strict";
  const B = window.CLV_QBANK, shuffle = B.shuffle;
  const TYPES = [
    { id: "mix", name: "Mix of everything", uz: "Hammasi aralash", desc: "All game types in one game" },
    { id: "mcq", name: "Quiz", uz: "Test", desc: "Four answers, pick the right one" },
    { id: "tf", name: "Right or wrong?", uz: "To‘g‘rimi?", desc: "Is the sentence correct?" },
    { id: "build", name: "Word order race", uz: "So‘z tartibi", desc: "Tap the words in the right order" },
    { id: "vocab", name: "Vocabulary only", uz: "Faqat so‘zlar", desc: "Words only: English ↔ Uzbek and missing words" }
  ];
  const LABEL = { mcq: "Quiz", tf: "Right or wrong?", build: "Word order race", vocab: "Vocabulary" };
  const HOW = {
    mcq: ["Tap the right answer.", "To‘g‘ri javobni bosing."],
    vocab: ["Tap the right word.", "To‘g‘ri so‘zni bosing."],
    listen: ["Listen. Tap the sentence you hear.", "Tinglang. Eshitgan gapingizni bosing."],
    tf: ["Is the sentence right or wrong?", "Gap to‘g‘rimi yoki noto‘g‘ri?"],
    build: ["Tap the words in order, then Send.", "So‘zlarni tartib bilan bosing, keyin Yuborish."]
  };
  const sets = () => {
    const s = window.LIVE_SETS.map(x => Object.assign({}, x));
    s.push({ id: "all", title: "Everything so far", topic: "Elementary · Big Revision + all lessons + vocabulary", mixOf: s.filter(x => !/^s\d|^lis|^b\d/.test(x.id)).map(x => x.id) });
    /* Beginner: only lessons already taught (by date), so the game never asks about next month's topic */
    const P = window.PLAN, B = P && P.beginner, now = Date.now();
    const bt = B ? B.all.filter(l => P.openAt(l.date, B.unlockHour).getTime() <= now).map(l => l.id) : [];
    s.push({ id: "allb", group: "b", title: "Beginner: everything so far", topic: "Beginner · all lessons taught so far", mixOf: (bt.length ? bt : ["s1"]).filter(id => s.some(x => x.id === id)) });
    return s;
  };
  const cache = {};
  /* lesson files set window.LESSON; load them one at a time so they never overwrite each other */
  let chain = Promise.resolve();
  function loadLesson(path, base) {
    if (cache[path] !== undefined) return Promise.resolve(cache[path]);
    chain = chain.then(() => cache[path] !== undefined ? cache[path] : new Promise(res => {
      window.LESSON = undefined;
      const sc = document.createElement("script");
      sc.src = (base == null ? "../" : base) + path + (window.CLV_V ? "?v=" + window.CLV_V : "");
      sc.onload = () => { cache[path] = window.LESSON || null; res(cache[path]); };
      sc.onerror = () => { cache[path] = null; res(null); };
      document.head.appendChild(sc);
    }));
    return chain;
  }
  const mk = {
    mcq: q => {
      const row = Array.isArray(q) ? { q: q[0], o: q.slice(1) } : q;
      const o = shuffle(row.o.map((t, i) => ({ t, ok: i === 0 })));
      return { type: row.kind ? "vocab" : "mcq", text: row.q, opts: o.map(x => x.t), correct: o.findIndex(x => x.ok), audio: row.audio || null, dur: row.dur || 3 };
    },
    tf: a => ({ type: "tf", text: a.s, opts: ["Right", "Wrong"], correct: a.ok ? 0 : 1, fix: a.fix || "" }),
    build: b => ({ type: "build", text: "Put the words in order", words: shuffle(b.w), answer: b.w, end: b.e })
  };
  /* opts: { set, type, rounds = 30, base = "../", noAudio } */
  async function build(opts) {
    const all = sets(), N = opts.rounds || 30, base = opts.base;
    const set = opts.set || all[0];
    const src = set.mixOf ? all.filter(s => set.mixOf.includes(s.id) || s.id === set.id) : [set];
    const mcq = [], tf = [], bld = [], voc = [];
    const wordsFrom = async list => { for (const s of list) if (s.path) { const L = await loadLesson(s.path, base); B.words(L).length && voc.push(...B.vocab(B.words(L))); } };
    for (const s of src) {
      (s.qs || []).forEach(q => { if (!(opts.noAudio && q.audio)) mcq.push(q); });
      if (!s.path) continue;
      const L = await loadLesson(s.path, base);
      const g = (L && L.games) || {};
      (g.auction || []).forEach(a => tf.push(a));
      (g.build || []).forEach(b => bld.push(b));
      voc.push(...B.vocab(B.words(L)));
    }
    if (opts.type === "vocab") {
      /* vocabulary from every lesson with word cards, plus the vocabulary lesson's own quiz */
      voc.length = 0;
      await wordsFrom(all.filter(s => s.path));
      all.filter(s => /^v\d/.test(s.id)).forEach(s => (s.qs || []).forEach(q => voc.push(q)));
      return shuffle(voc).slice(0, N).map(mk.mcq);
    }
    const take = (arr, n, f) => shuffle(arr).slice(0, n).map(f);
    if (opts.type === "mix") {
      const A = { mcq: take(mcq, 99, mk.mcq), tf: take(tf, 99, mk.tf), build: take(bld, 7, mk.build), vocab: take(voc, 6, mk.mcq) };
      const pat = ["mcq", "tf", "mcq", "build", "vocab", "tf", "mcq", "mcq", "tf", "build", "vocab"];
      const out = [];
      for (let k = 0; out.length < N && k < 600; k++) { const t = pat[k % pat.length]; if (A[t].length) out.push(A[t].shift()); else if (!Object.values(A).some(a => a.length)) break; }
      return out;
    }
    const pool = { mcq, tf, build: bld }[opts.type] || mcq;
    return take(pool, N, mk[opts.type] || mk.mcq);
  }
  function isCorrect(q, a) {
    if (q.type === "build") return Array.isArray(a.order) && a.order.length === q.answer.length && a.order.every((k, i) => q.words[k] === q.answer[i]);
    return a.choice === q.correct;
  }
  const answerText = q => q.type === "build" ? q.answer.join(" ") + q.end : q.type === "tf" ? (q.correct === 0 ? "Right" : "Wrong — " + q.fix) : q.opts[q.correct];
  const how = q => q.audio ? HOW.listen : HOW[q.type] || HOW.mcq;
  window.LiveRounds = { TYPES, LABEL, HOW, sets, build, isCorrect, answerText, how, loadLesson };
})();
