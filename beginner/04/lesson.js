/* Beginner · Lesson 4 · What is this?
   Classroom things (pen, pencil, book, notebook, bag, desk, chair, board, window, eraser) plus apple and umbrella,
   the question What is this? and the answer It’s a pen. / It’s an apple. (a before most letters, an before a, e, i, o, u).
   Uzbek has no a / an: the big mistake is “It’s pen.” Recycles lessons 1–3: spelling, numbers 11–20, How old are you?
   Built for Monday 30 November 2026. */
window.LESSON = {
  id: "b4",
  n: 4,
  title: "What is this?",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 4", title: "What is <span class='cy'>this?</span>", lead: "a / an · things in the classroom · Bu nima?", chips: [["Bu nima?", "peach"], ["Bu ruchka.", "mint"], ["Bu olma.", "skyb"]] },
    { t: "goals", items: [
      ["Name things in the classroom", "a pen, a book, a chair", "Sinfdagi narsalarni aytish"],
      ["Ask and answer: What is this?", "What is this? It’s a bag.", "Bu nima? Bu sumka."],
      ["Choose a or an", "a pen · an apple", "a yoki an ni tanlash"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: lesson 3", sub: "Pick a card. Say it in English. · Kartani tanlang, inglizcha ayting.",
      cards: [{ t: "How old are you?", uz: "Necha yoshdasiz?" }, { t: "13 · 15 · 18", uz: "Inglizcha ayting" }, { t: "What’s your phone number?", uz: "Telefon raqamingiz necha?" }, { t: "Spell your name.", uz: "Ismingizni harfma-harf ayting" }, { t: "Count 11–20.", uz: "11 dan 20 gacha sanang" }, { t: "10 + 9 = ?", uz: "Javobni inglizcha ayting" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "In the classroom (1)", menu: "New words 1", items: [
      ["It’s a <span class='ca'>pen</span>.", "pen = ruchka"],
      ["It’s a <span class='ca'>pencil</span>.", "pencil = qalam"],
      ["It’s a <span class='ca'>book</span>.", "book = kitob"],
      ["It’s a <span class='ca'>notebook</span>.", "notebook = daftar"],
      ["It’s a <span class='ca'>bag</span>.", "bag = sumka"],
      ["It’s a <span class='ca'>desk</span>.", "desk = parta"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "In the classroom (2)", menu: "New words 2", items: [
      ["It’s a <span class='ca'>chair</span>.", "chair = stul"],
      ["It’s a <span class='ca'>board</span>.", "board = doska"],
      ["It’s a <span class='ca'>window</span>.", "window = deraza"],
      ["It’s an <span class='ca'>eraser</span>.", "eraser = o’chirg’ich"],
      ["It’s an <span class='ca'>apple</span>.", "apple = olma"],
      ["It’s an <span class='ca'>umbrella</span>.", "umbrella = soyabon"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "What is this?", items: [
      { bg: "peach", w: "✏️", label: "a pencil = qalam", en: "What is this? It’s a pencil.", uz: "Bu nima? Bu qalam." },
      { bg: "mint", w: "📖", label: "a book = kitob", en: "What is this? It’s a book.", uz: "Bu nima? Bu kitob." },
      { bg: "skyb", w: "🍎", label: "an apple = olma", en: "What is this? It’s an apple.", uz: "Bu nima? Bu olma." },
      { bg: "butter", w: "☂️", label: "an umbrella = soyabon", en: "What is this? It’s an umbrella.", uz: "Bu nima? Bu soyabon." } ] },

    /* ---------- THE RULE ---------- */
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "What is this? · It’s a pen.", sub: "Narsani so’rash: What is this? (Bu nima?) Javob: It’s a… (Bu …). It’s = It is.", menu: "What is this?", rows: [
      { chips: [["What", "skyb"], ["is", "peach"], ["this?", "mint"]], uz: "Bu nima?" },
      { chips: [["It", "skyb"], ["is", "peach"], ["a", "butter"], ["pen.", "mint"]], uz: "Bu ruchka." },
      { chips: [["It’s", "skyb"], ["an", "butter"], ["apple.", "mint"]], uz: "Bu olma." } ],
      notes: ["What’s = What is", "It’s = It is", "What’s this in English? = Bu inglizcha nima?"] },
    { t: "cols", eb: "The rule · Qoida", title: "a or an?", menu: "a or an?", cols: [
      { bg: "skyb", label: "a + b, c, d…", lc: "b", fs: 44, lines: ["<span class='ca'>a</span> pen", "<span class='ca'>a</span> book", "<span class='ca'>a</span> desk", "<span class='ca'>a</span> chair"], uz: "So’z undosh harf bilan boshlansa: a." },
      { bg: "mint", label: "an + a, e, i, o, u", lc: "g", fs: 44, lines: ["<span class='ca'>an</span> apple", "<span class='ca'>an</span> eraser", "<span class='ca'>an</span> umbrella"], uz: "So’z unli harf (a, e, i, o, u) bilan boshlansa: an. “an apple” aytish oson." },
      { bg: "peach", label: "Uzbek · O’zbekcha", lc: "r", fs: 40, lines: ["Bu ruchka.", "→ It’s <span class='ca'>a</span> pen."], uz: "O’zbek tilida a / an yo’q. Ingliz tilida bitta narsa oldidan a yoki an albatta kerak!" } ],
      notes: ["a / an = bitta", "a, e, i, o, u = unli harflar (vowels)"] },
    { t: "examples", eb: "Examples", title: "a or an?", items: [
      ["It’s <span class='ca'>a</span> notebook.", "Bu daftar."],
      ["It’s <span class='ca'>an</span> apple.", "Bu olma."],
      ["It’s <span class='ca'>a</span> phone.", "Bu telefon."],
      ["It’s <span class='ca'>an</span> umbrella.", "Bu soyabon."],
      ["It’s <span class='ca'>a</span> window.", "Bu deraza."],
      ["It’s <span class='ca'>an</span> eraser.", "Bu o’chirg’ich."] ] },
    { t: "examples", eb: "A short dialogue", title: "What’s this in English?", menu: "Dialogue", items: [
      ["A: <span class='cw'>What is</span> this?", "A: Bu nima?"],
      ["B: It’s <span class='ca'>a bag</span>.", "B: Bu sumka."],
      ["A: <span class='cw'>What’s</span> this in English?", "A: Bu inglizcha nima?"],
      ["B: It’s <span class='ca'>an eraser</span>.", "B: Bu o’chirg’ich."],
      ["A: How do you spell it?", "A: Qanday yoziladi?"],
      ["B: E-R-A-S-E-R.", "B: i-a-ey-es-i-a"] ] },
    { t: "spot", bg: "sky", title: "What is this?", sub: "Teacher taps a picture. Class: “What is this?” A student: “It’s a… / It’s an…” · Rasmni inglizcha ayting.", size: 120,
      cards: ["✏️", "📖", "🎒", "🍎", "☂️", "🪑"] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "a or an?", sub: "Say it. Tap to check. · a yoki an?", w: 140, fs: 46, rows: [
      ["___ pen", "a"], ["___ apple", "an"], ["___ book", "a"],
      ["___ umbrella", "an"], ["___ eraser", "an"], ["___ chair", "a"] ] },
    { t: "gaps", title: "a or an? Round 2", sub: "Say the full sentence. Tap to check.", w: 140, fs: 42, rows: [
      ["It’s ___ desk.", "a"], ["It’s ___ apple.", "an"], ["It’s ___ notebook.", "a"],
      ["It’s ___ phone.", "a"], ["It’s ___ umbrella.", "an"], ["It’s ___ window.", "a"] ] },
    { t: "gaps", title: "Which word is missing?", sub: "is · It’s · an · What · in · book. Tap to check.", w: 200, fs: 40, rows: [
      ["What ___ this?", "is"], ["___ a pen.", "It’s"], ["It’s ___ eraser.", "an"],
      ["___ is this?", "What"], ["What’s this ___ English?", "in"], ["It’s a ___. (kitob)", "book"] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 40, lines: ["It’s <span class='cn'>pen</span>.", "It’s <span class='cn'>a apple</span>.", "It’s <span class='cn'>an book</span>.", "<span class='cn'>What this</span>?"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 40, lines: ["It’s <span class='ca'>a pen</span>.", "It’s <span class='ca'>an apple</span>.", "It’s <span class='ca'>a book</span>.", "<span class='ca'>What is this</span>?"] },
      { bg: "butter", label: "Why? · Nega?", fs: 30, lines: ["a / an ni unutmang!", "apple: a harfi → an", "book: b harfi → a", "“is” kerak: What is…?"] } ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Bu nima?", "What is this? / What’s this?"],
      ["Bu ruchka.", "It’s a pen."],
      ["Bu olma.", "It’s an apple."],
      ["Bu inglizcha nima?", "What’s this in English?"],
      ["Bu soyabon.", "It’s an umbrella."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["It’s book.", "It’s a book."],
      ["It’s a umbrella.", "It’s an umbrella."],
      ["What this?", "What is this?"],
      ["It’s an chair.", "It’s a chair."] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "sky", title: "Pairs: point and ask", sub: "A points at something in the room: “What is this?” B: “It’s a… / It’s an…”. Then change. · Juftlikda: barmoq bilan ko’rsating va so’rang.", size: 50,
      cards: [{ t: "What is this?", uz: "Bu nima?" }, { t: "It’s a…", uz: "Bu … (undosh)" }, { t: "It’s an…", uz: "Bu … (a, e, i, o, u)" }, { t: "What’s this in English?", uz: "Bu inglizcha nima?" }, { t: "How do you spell it?", uz: "Qanday yoziladi?" }, { t: "Thank you!", uz: "Rahmat!" }] },
    { t: "spot", bg: "yel", title: "Feel and guess!", sub: "Teacher puts a thing in a bag. Close your eyes, feel it and say: “It’s a…!” · Ko’zingizni yumib, ushlab ko’ring va toping.", size: 54,
      cards: [{ t: "a pen", uz: "ruchka" }, { t: "a pencil", uz: "qalam" }, { t: "an eraser", uz: "o’chirg’ich" }, { t: "an apple", uz: "olma" }, { t: "a phone", uz: "telefon" }, { t: "a notebook", uz: "daftar" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["name 10 things in the classroom", "ask “What is this?”", "answer “It’s a pen.”", "use an: an apple, an eraser, an umbrella", "ask “What’s this in English?”", "spell pen, book, desk"] },
    { t: "bye", chips: [["What is this?", "peach"], ["It’s a pen.", "mint"], ["It’s an apple.", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "write with a pen", say: "It’s a pen!" }, { cue: "draw with a pencil", say: "It’s a pencil!" },
      { cue: "open a book and read", say: "It’s a book!" }, { cue: "rub out a mistake", say: "It’s an eraser!" },
      { cue: "eat an apple", say: "It’s an apple!" }, { cue: "open an umbrella", say: "It’s an umbrella!" },
      { cue: "sit down on a chair", say: "It’s a chair!" }, { cue: "open a window", say: "It’s a window!" },
      { cue: "put a bag on your back", say: "It’s a bag!" }, { cue: "write on the board", say: "It’s a board!" },
      { cue: "talk on a phone", say: "It’s a phone!" }, { cue: "write in a notebook", say: "It’s a notebook!" }
    ],
    board: [
      { cat: "a or an?", qs: [["___ pen", "a pen"], ["___ apple", "an apple"], ["___ umbrella", "an umbrella"]] },
      { cat: "Classroom", qs: [["“kitob” in English", "a book"], ["“daftar” in English", "a notebook"], ["“o’chirg’ich” in English", "an eraser"]] },
      { cat: "What is this?", qs: [["✏️ What is this?", "It’s a pencil."], ["🍎 What is this?", "It’s an apple."], ["☂️ What is this?", "It’s an umbrella."]] },
      { cat: "Fix it", qs: [["It’s pen.", "It’s a pen."], ["It’s a eraser.", "It’s an eraser."], ["What this?", "What is this?"]] },
      { cat: "Spell it", qs: [["Spell: pen.", "P-E-N"], ["Spell: book.", "B-O-O-K (double O)"], ["Spell: apple.", "A-P-P-L-E (double P)"]] },
      { cat: "Numbers", qs: [["Say 14.", "fourteen"], ["How old are you? (16)", "I’m 16."], ["10 + 8 = ?", "eighteen"]] }
    ],
    wheel: [
      { name: "Point and say", tasks: ["Point at a pen. Say it.", "Point at a window. Say it.", "Point at a chair. Say it.", "Point at a bag. Say it."] },
      { name: "a or an?", tasks: ["a or an: apple?", "a or an: book?", "a or an: umbrella?", "a or an: eraser?"] },
      { name: "Ask", tasks: ["Ask: What is this?", "Ask: What’s this in English?", "Ask: How do you spell it?", "Ask a classmate about 2 things."] },
      { name: "Spell it", tasks: ["Spell: desk.", "Spell: chair.", "Spell: pencil.", "Spell: window."] },
      { name: "In English", tasks: ["“parta” in English?", "“doska” in English?", "“soyabon” in English?", "“qalam” in English?"] },
      { name: "Lessons 1–3", tasks: ["Count 11 to 20.", "Ask: How old are you?", "Say a phone number.", "Spell your name."] }
    ],
    build: [
      { w: ["What","is","this"], e: "?" }, { w: ["It","is","a","pen"], e: "." },
      { w: ["It’s","an","apple"], e: "." }, { w: ["What’s","this","in","English"], e: "?" },
      { w: ["It’s","an","umbrella"], e: "." }, { w: ["It","is","a","notebook"], e: "." },
      { w: ["How","do","you","spell","eraser"], e: "?" }, { w: ["It’s","a","chair"], e: "." }
    ],
    auction: [
      { s: "It’s a book.", ok: true },
      { s: "It’s apple.", ok: false, fix: "It’s an apple." },
      { s: "What is this?", ok: true },
      { s: "It’s a eraser.", ok: false, fix: "It’s an eraser." },
      { s: "It’s an umbrella.", ok: true },
      { s: "It’s an desk.", ok: false, fix: "It’s a desk." },
      { s: "What’s this in English?", ok: true },
      { s: "What this?", ok: false, fix: "What is this?" },
      { s: "It’s a window.", ok: true },
      { s: "It’s pencil.", ok: false, fix: "It’s a pencil." }
    ]
  }
};
