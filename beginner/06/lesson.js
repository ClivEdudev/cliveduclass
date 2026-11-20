/* Beginner · Lesson 6 · Unit 1 review
   Revises lessons 1–5 with games: hello and names, the alphabet and spelling, numbers 1–20
   and How old are you?, What is this? It’s a / an…, colours and What colour is it?
   No new grammar or words.
   Built for Mon 7 Dec 2026. */
window.LESSON = {
  id: "b6",
  n: 6,
  title: "Unit 1 review",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 6", title: "Unit 1<br><span class='cy'>Review</span>", lead: "hello · A–Z · numbers 1–20 · a / an · colours", chips: [["Takrorlaymiz!", "peach"], ["O’ynaymiz!", "mint"], ["Let’s play!", "skyb"]] },
    { t: "examples", title: "In Unit 1 we learned · 1-bo’limda o’rgandik", items: [
      ["<span class='ca'>Hello!</span> My name is Aziz. How are you?", "Salom! Ismim Aziz. Qalaysiz?"],
      ["A, B, C… How do you <span class='ca'>spell</span> it? L-O-L-A.", "Qanday yoziladi? Harflab ayting: L-O-L-A."],
      ["How old are you? I am <span class='ca'>fifteen</span>.", "Necha yoshdasiz? O’n besh yoshdaman."],
      ["What is this? It’s <span class='ca'>a</span> pen.", "Bu nima? Bu ruchka."],
      ["It’s <span class='ca'>an orange</span> bag. It’s <span class='ca'>a red</span> car.", "Bu to’q sariq sumka. Bu qizil mashina."],
      ["<span class='cw'>What</span> colour is it? It’s blue.", "Bu qanday rangda? Ko’k."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: one sentence each", sub: "Pick a card. Say one true sentence about you. · Kartani tanlang va o’zingiz haqingizda ayting.", size: 50,
      cards: [{ t: "Hello! My name is…", uz: "Salom! Ismim…" }, { t: "I am … (age)", uz: "Men … yoshdaman" }, { t: "How are you?", uz: "Qalaysiz?" }, { t: "It’s a … (point)", uz: "Bu … (ko’rsating)" }, { t: "It’s … (colour)", uz: "Bu … rangda" }, { t: "My name is… · spell it!", uz: "Ismingizni harflab ayting" }] },
    { t: "spot", bg: "sky", title: "Spell it!", sub: "Pick a card. Spell it letter by letter. The class writes it. · Harflab ayting, sinf yozadi.", size: 56,
      cards: ["LOLA", "BOBUR", "TASHKENT", "SAMARKAND", "DILNOZA", "PLOV"] },
    { t: "spot", bg: "yel", title: "Number race 1–20", sub: "Teacher taps a number. The first student to say it in English gets a point! · Birinchi aytgan ochko oladi.", size: 96,
      cards: ["13", "17", "11", "20", "15", "12", "19", "14", "16", "18"] },
    { t: "spot", bg: "sky", title: "Pairs: meet a new student", sub: "A asks, B answers. Then swap. · Juftlikda: A so’raydi, B javob beradi.", size: 44,
      cards: [{ t: "Hello! What’s your name?", uz: "Salom! Ismingiz nima?" }, { t: "How do you spell it?", uz: "Qanday yoziladi?" }, { t: "How old are you?", uz: "Necha yoshdasiz?" }, { t: "What is this?", uz: "Bu nima?" }, { t: "What colour is it?", uz: "Bu qanday rangda?" }, { t: "Nice to meet you! Goodbye!", uz: "Tanishganimdan xursandman! Xayr!" }] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "All topics mixed. Tap to reveal.", rows: [
      ["Ismingiz nima?", "What’s your name?"],
      ["Men o’n to’rt yoshdaman.", "I am fourteen."],
      ["Bu nima?", "What is this?"],
      ["Bu qizil sumka.", "It’s a red bag."],
      ["Qanday yoziladi?", "How do you spell it?"] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: answer the question", sub: "Say the answer. Tap to check.", rows: [
      ["How are you?", "I’m fine, thank you."],
      ["How old are you?", "I am … (13, 14, 15…)"],
      ["🟢 What colour is it?", "It’s green."],
      ["📘 What is this?", "It’s a blue book."],
      ["How do you spell “red”?", "R-E-D"] ] },
    { t: "gaps", title: "Which word is missing?", sub: "All topics mixed. Tap to check. · Tushib qolgan so’z.", w: 220, fs: 38, rows: [
      ["My name ___ Bobur.", "is"], ["How ___ you? I’m fine.", "are"], ["How ___ are you? I am 13.", "old"],
      ["It’s ___ pen.", "a"], ["It’s ___ orange bag.", "an"], ["What ___ is it? It’s blue.", "colour"] ] },
    { t: "gaps", title: "Numbers and letters", sub: "Say it in English. Tap to check. · Inglizcha ayting.", w: 240, fs: 42, rows: [
      ["11 = ___", "eleven"], ["15 = ___", "fifteen"], ["20 = ___", "twenty"],
      ["12 = ___", "twelve"], ["A, B, C, ___, E", "D"], ["W, X, ___, Z", "Y"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["My name Lola.", "My name is Lola."],
      ["How old you are?", "How old are you?"],
      ["It’s a orange pen.", "It’s an orange pen."],
      ["It’s a car white.", "It’s a white car."],
      ["I am fiveteen.", "I am fifteen."] ] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "wheel", bg: "ink" },
    { t: "game", g: "board" },
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say hello, my name and How are you?", "say the alphabet and spell my name", "count from 1 to 20", "say my age: I am …", "say It’s a pen. / It’s an orange bag.", "ask and answer: What colour is it?"] },
    { t: "bye", chips: [["Hello! I’m…", "peach"], ["I am fifteen.", "mint"], ["It’s a red pen.", "skyb"]] }
  ],
  games: {
    wheel: [
      { name: "Hello", tasks: ["Say hello to the teacher.", "Say: My name is …", "Ask a classmate: How are you?", "It’s 19:00. Say hello! (Good evening!)"] },
      { name: "A–Z", tasks: ["Say A to J.", "Spell your name.", "Spell: TASHKENT.", "Ask a classmate: How do you spell it?"] },
      { name: "Numbers", tasks: ["Count from 11 to 20.", "Say your age: I am …", "Count from 20 down to 15.", "Ask a classmate: How old are you?"] },
      { name: "Things", tasks: ["Point and say: It’s a …", "Point to 3 things. Say them.", "Ask: What is this?", "a or an: orange bag?"] },
      { name: "Colours", tasks: ["Say 5 colours.", "Point to something red. Say it.", "Show your pen. Say: It’s a … pen.", "Ask a classmate: What colour is it?"] },
      { name: "Mixed", tasks: ["Say your name, age and spell your name.", "Say 3 sentences: It’s a …", "Count from 1 to 10 fast!", "Say 2 colours and 2 numbers."] }
    ],
    board: [
      { cat: "Hello", qs: [["“Salom!” in English", "Hello! / Hi!"], ["Answer: How are you?", "I’m fine, thank you."], ["Answer: Nice to meet you!", "Nice to meet you, too!"]] },
      { cat: "A–Z", qs: [["What comes after A?", "B"], ["Spell: PEN", "P-E-N"], ["Ask about spelling.", "How do you spell it?"]] },
      { cat: "Numbers", qs: [["Say: 12", "twelve"], ["Say: 15 and 20", "fifteen · twenty"], ["“Necha yoshdasiz?” in English", "How old are you?"]] },
      { cat: "a / an", qs: [["___ pen", "a pen"], ["___ orange bag", "an orange bag"], ["“Bu nima?” in English", "What is this?"]] },
      { cat: "Colours", qs: [["“qora” in English", "black"], ["“oq” and “ko’k”", "white · blue"], ["“Bu qizil mashina.” in English", "It’s a red car."]] },
      { cat: "Fix it", qs: [["My name Ali.", "My name is Ali."], ["How old you are?", "How old are you?"], ["It’s a bag black.", "It’s a black bag."]] }
    ],
    mime: [
      { cue: "wave hello", say: "Hello! / Hi!" }, { cue: "wave goodbye", say: "Goodbye! / Bye!" },
      { cue: "wake up and stretch", say: "Good morning!" }, { cue: "shake hands", say: "Nice to meet you!" },
      { cue: "tired face", say: "I’m tired." }, { cue: "write the letter B in the air", say: "B!" },
      { cue: "show 10 fingers, then 2 fingers", say: "twelve!" }, { cue: "show 10 fingers, then 5 fingers", say: "fifteen!" },
      { cue: "hold up a pen", say: "It’s a pen!" }, { cue: "hold up a bag", say: "It’s a bag!" },
      { cue: "point to something red", say: "It’s red!" }, { cue: "hold up a book, shrug: what colour?", say: "What colour is it?" }
    ],
    build: [
      { w: ["My", "name", "is", "Dilnoza"], e: "." }, { w: ["How", "old", "are", "you"], e: "?" },
      { w: ["I", "am", "fourteen"], e: "." }, { w: ["How", "do", "you", "spell", "it"], e: "?" },
      { w: ["What", "is", "this"], e: "?" }, { w: ["It’s", "an", "orange", "bag"], e: "." },
      { w: ["What", "colour", "is", "it"], e: "?" }, { w: ["Nice", "to", "meet", "you"], e: "!" }
    ],
    auction: [
      { s: "My name is Bobur.", ok: true },
      { s: "How old you are?", ok: false, fix: "How old are you?" },
      { s: "I am thirteen.", ok: true },
      { s: "It’s an pen.", ok: false, fix: "It’s a pen." },
      { s: "What colour is it?", ok: true },
      { s: "It’s a bag black.", ok: false, fix: "It’s a black bag." },
      { s: "Nice to meet you!", ok: true },
      { s: "How do you spell it?", ok: true },
      { s: "My name Lola.", ok: false, fix: "My name is Lola." },
      { s: "Good morning! (at 19:00)", ok: false, fix: "Good evening!" }
    ]
  }
};
