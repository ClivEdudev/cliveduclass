/* Question bank shared by the live game, solo play and the Telegram bot quizzes.
   Works in the browser (window.CLV_QBANK) and on the server (evaluated with a fake window).
   A question row is { q, o: [right, wrong, wrong, wrong] }: the first option is the right one. */
(function (W) {
  "use strict";
  const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const ENT = { "&nbsp;": " ", "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": "\"", "&#39;": "'", "&rsquo;": "’", "&lsquo;": "‘", "&mdash;": "—", "&ndash;": "–" };
  const strip = s => String(s == null ? "" : s).replace(/<[^>]*>/g, "").replace(/&[a-z#0-9]+;/gi, m => ENT[m] || m).replace(/\s+/g, " ").trim();

  /* every word card of a lesson: slides of type "words" hold [english, uzbek, sentence, grammar] */
  function words(L) {
    const out = [];
    ((L && L.slides) || []).forEach(s => {
      if (s.t !== "words" || !Array.isArray(s.items)) return;
      const topic = strip(s.title || "Words");
      s.items.forEach(it => { if (Array.isArray(it) && it[0] && it[1]) out.push({ en: strip(it[0]), uz: strip(it[1]), s: String(it[2] || ""), topic }); });
    });
    return out;
  }
  /* three distractors, from the same topic when it has enough words */
  function others(list, w, key) {
    const same = list.filter(x => x.topic === w.topic && x[key] !== w[key]);
    const pool = same.length >= 3 ? same : list.filter(x => x[key] !== w[key]);
    const seen = new Set([w[key].toLowerCase()]), out = [];
    for (const x of shuffle(pool)) { const v = x[key]; if (!seen.has(v.toLowerCase())) { seen.add(v.toLowerCase()); out.push(v); } if (out.length === 3) break; }
    return out;
  }
  /* vocabulary questions: Uzbek → English, English → Uzbek, and the word missing from its sentence */
  function vocab(list) {
    const qs = [];
    list.forEach(w => {
      const a = others(list, w, "en"), b = others(list, w, "uz");
      if (a.length === 3) qs.push({ q: `“${w.uz}” in English?`, o: [w.en, ...a], kind: "uz-en", topic: w.topic });
      if (b.length === 3) qs.push({ q: `What does “${w.en}” mean? · Ma’nosi?`, o: [w.uz, ...b], kind: "en-uz", topic: w.topic });
      if (a.length === 3 && /class="hl"/.test(w.s)) {
        const gap = strip(w.s.replace(/<span class="hl">[\s\S]*?<\/span>/, "___"));
        /* the Uzbek word in brackets makes sure only one answer fits (grandfather / grandmother…) */
        if (gap.includes("___") && gap.length < 240) qs.push({ q: `${gap} (${w.uz})`, o: [w.en, ...a], kind: "gap", topic: w.topic });
      }
    });
    return qs;
  }
  W.CLV_QBANK = { shuffle, strip, words, vocab };
})(typeof window !== "undefined" ? window : globalThis);
