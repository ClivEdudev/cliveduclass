/* Beginner · Lesson 17 · In, on, under
   Teaches: where things are: in, on, under, next to · Where is the cat? It’s under the bed.
   Where are my keys? They’re on the table. Uzbek: ichida, ustida, tagida, yonida.
   Recycles: there is / there are and rooms and furniture (lesson 16), my / his / her (15),
   this / these (14), is / are and Is it…? Yes, it is. (7–10), colours (5).
   New words: in, on, under, next to, box, cat, ball, keys, shelf, floor.
   Built for Thu 14 Jan 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b17",
  n: 17,
  title: "In, on, under",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 17", title: "Where is <span class='cy'>the cat?</span>", lead: "in, on, under, next to · Qayerda?", chips: [["Mushuk qayerda?", "peach"], ["U karavot tagida.", "mint"], ["Kalitlar stol ustida.", "skyb"]] },
    { t: "goals", items: [
      ["Say where a thing is", "The cat is under the bed.", "Mushuk karavot tagida."],
      ["Ask “Where is…?” and “Where are…?”", "Where are my keys?", "Kalitlarim qayerda?"],
      ["Answer with It’s… and They’re…", "They’re on the table.", "Ular stol ustida."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: my home", sub: "Lesson 16! Pick a card. Say: “There is a … in my home.” or “There are two …”",
      cards: [{ t: "a sofa", uz: "divan" }, { t: "a fridge", uz: "muzlatkich" }, { t: "a TV", uz: "televizor" }, { t: "two beds", uz: "ikkita karavot" }, { t: "a lamp", uz: "chiroq" }, { t: "three chairs", uz: "uchta stul" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Four little words", menu: "New words: in, on, under, next to", items: [
      ["The pen is <span class='ca'>in</span> the bag.", "in = ichida"],
      ["The book is <span class='ca'>on</span> the desk.", "on = ustida"],
      ["The bag is <span class='ca'>under</span> the chair.", "under = tagida, ostida"],
      ["Aziz is <span class='ca'>next to</span> Bobur.", "next to = yonida"],
      ["The phone is <span class='ca'>on</span> the table.", "on = ustida"],
      ["The TV is <span class='ca'>next to</span> the window.", "next to = yonida"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Things at home", menu: "New words: things at home", items: [
      ["This is a <span class='ca'>box</span>.", "box = quti"],
      ["This is my <span class='ca'>cat</span>. It’s black.", "cat = mushuk"],
      ["This is a red <span class='ca'>ball</span>.", "ball = to’p"],
      ["These are my <span class='ca'>keys</span>.", "keys = kalitlar (a key = kalit)"],
      ["This is a <span class='ca'>shelf</span>.", "shelf = tokcha, javon"],
      ["The cat is on the <span class='ca'>floor</span>.", "floor = pol"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Where is the cat?", items: [
      { bg: "peach", w: "🐱📦", label: "in = ichida", en: "The cat is in the box.", uz: "Mushuk qutining ichida." },
      { bg: "mint", w: "🐱🛋️", label: "on = ustida", en: "The cat is on the sofa.", uz: "Mushuk divan ustida." },
      { bg: "skyb", w: "🐱🛏️", label: "under = tagida", en: "The cat is under the bed.", uz: "Mushuk karavot tagida." },
      { bg: "butter", w: "🐱🪑", label: "next to = yonida", en: "The cat is next to the chair.", uz: "Mushuk stul yonida." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "English and Uzbek", menu: "English and Uzbek", cols: [
      { bg: "skyb", label: "English", lc: "b", fs: 42, lines: ["<span class='ca'>in</span> the box", "<span class='ca'>on</span> the table", "<span class='ca'>under</span> the bed"], uz: "Inglizchada joy so’zi OLDIN keladi: in the box." },
      { bg: "mint", label: "Uzbek", lc: "g", fs: 42, lines: ["quti <span class='ca'>ichida</span>", "stol <span class='ca'>ustida</span>", "karavot <span class='ca'>tagida</span>"], uz: "O’zbekchada esa KEYIN keladi: quti ichida." } ],
      notes: ["in the box = qutida = quti ichida", "Don’t forget “the”!"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "Thing + is / are + in / on / under + place", rows: [
      { chips: [["The cat", "skyb"], ["is", "peach"], ["in", "mint"], ["the box.", "butter"]], uz: "Mushuk qutining ichida." },
      { chips: [["The ball", "skyb"], ["is", "peach"], ["under", "mint"], ["the bed.", "butter"]], uz: "To’p karavot tagida." },
      { chips: [["The keys", "skyb"], ["are", "peach"], ["on", "mint"], ["the shelf.", "butter"]], uz: "Kalitlar tokchada." } ],
      notes: ["One thing → is", "Many things → are", "Uzbek has no “is” here, English needs it!"] },
    { t: "examples", eb: "Examples · Misollar", title: "In my home", items: [
      ["The fridge <span class='ca'>is in</span> the kitchen.", "Muzlatkich oshxonada."],
      ["My phone <span class='ca'>is on</span> the bed.", "Telefonim karavot ustida."],
      ["The ball <span class='ca'>is under</span> the sofa.", "To’p divan tagida."],
      ["The lamp <span class='ca'>is next to</span> the TV.", "Chiroq televizor yonida."],
      ["The books <span class='ca'>are on</span> the shelf.", "Kitoblar tokchada."],
      ["My keys <span class='ca'>are in</span> my bag.", "Kalitlarim sumkamda."] ] },
    { t: "gaps", title: "In, on, under or next to?", sub: "Look at the Uzbek. Say the full sentence. Tap to check.", w: 220, fs: 36, rows: [
      ["The cat is ___ the box. (ichida)", "in"], ["The pen is ___ the desk. (ustida)", "on"], ["The ball is ___ the bed. (tagida)", "under"],
      ["Lola is ___ Madina. (yonida)", "next to"], ["The plov is ___ the table. (ustida)", "on"], ["The keys are ___ the bag. (ichida)", "in"] ] },
    { t: "gaps", title: "Is or are?", sub: "One thing → is. Many things → are. Tap to check.", w: 160, fs: 38, rows: [
      ["The cat ___ on the sofa.", "is"], ["My books ___ in the bag.", "are"], ["The keys ___ on the floor.", "are"],
      ["The TV ___ next to the lamp.", "is"], ["Two balls ___ under the bed.", "are"], ["My phone ___ in the kitchen.", "is"] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "Where is…? Where are…?", rows: [
      { chips: [["Where", "butter"], ["is", "peach"], ["the cat?", "skyb"]], uz: "Mushuk qayerda?" },
      { chips: [["It’s", "skyb"], ["under", "mint"], ["the bed.", "butter"]], uz: "U karavot tagida." },
      { chips: [["Where", "butter"], ["are", "peach"], ["my keys?", "skyb"]], uz: "Kalitlarim qayerda?" },
      { chips: [["They’re", "skyb"], ["on", "mint"], ["the table.", "butter"]], uz: "Ular stol ustida." } ],
      notes: ["Where = qayerda", "It’s = It is (one thing)", "They’re = They are (many things)"] },
    { t: "cols", eb: "Questions · So’roq", title: "One or many?", cols: [
      { bg: "peach", label: "One · bitta", lc: "r", fs: 38, lines: ["<span class='cw'>Where is</span> my bag?", "<span class='ca'>It’s</span> on the chair."], uz: "Sumkam qayerda? — U stul ustida." },
      { bg: "skyb", label: "Many · ko’p", lc: "b", fs: 38, lines: ["<span class='cw'>Where are</span> my books?", "<span class='ca'>They’re</span> in the box."], uz: "Kitoblarim qayerda? — Ular qutida." } ],
      notes: ["Where is = Where’s", "Yes / no: Is it in the box? — Yes, it is. / No, it isn’t."] },
    { t: "examples", eb: "Questions · So’roq", title: "Where is it? Where are they?", items: [
      ["<span class='cw'>Where is</span> the cat? — It’s on the floor.", "Mushuk qayerda? — U polda."],
      ["<span class='cw'>Where is</span> Aziz? — He’s next to the door.", "Aziz qayerda? — U eshik yonida."],
      ["<span class='cw'>Where are</span> my keys? — They’re in the box.", "Kalitlarim qayerda? — Ular qutida."],
      ["<span class='cw'>Where is</span> the ball? — It’s under the table.", "To’p qayerda? — U stol tagida."],
      ["<span class='cw'>Is</span> the phone on the bed? — Yes, it is.", "Telefon karavot ustidami? — Ha."],
      ["<span class='cw'>Is</span> the cat in the box? — No, it isn’t.", "Mushuk qutidami? — Yo’q."] ] },
    { t: "gaps", title: "Ask and answer", sub: "Is or are? It’s or They’re? Tap to check.", w: 200, fs: 36, rows: [
      ["Where ___ my pen?", "is"], ["Where ___ the books?", "are"], ["Where is the cat? — ___ on the sofa.", "It’s"],
      ["Where are my keys? — ___ in my bag.", "They’re"], ["Where ___ Lola? — She’s in the kitchen.", "is"], ["Is the ball under the bed? — Yes, it ___.", "is"] ] },
    { t: "spot", bg: "sky", title: "Look at our classroom!", sub: "Teacher points. Students say where it is: “It’s on the desk.”", size: 46,
      cards: [{ t: "the teacher’s bag", uz: "o’qituvchining sumkasi" }, { t: "the board", uz: "doska" }, { t: "your pen", uz: "ruchkangiz" }, { t: "your phone", uz: "telefoningiz" }, { t: "the door", uz: "eshik" }, { t: "your friend", uz: "do’stingiz" }] },

    /* ---------- BE CAREFUL ---------- */
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Uzbek learners often say…", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["The cat <span class='cn'>the box in</span>.", "The cat <span class='cn'>in</span> the box.", "Where <span class='cn'>is</span> my keys?"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["The cat is <span class='ca'>in the box</span>.", "The cat <span class='ca'>is</span> in the box.", "Where <span class='ca'>are</span> my keys?"] } ],
      notes: ["in / on / under comes BEFORE the place", "Don’t forget is / are!", "keys = many → are"] },

    /* ---------- QUIZZES ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Mushuk karavot tagida.", "The cat is under the bed."],
      ["Telefonim stol ustida.", "My phone is on the table."],
      ["Kalitlarim qayerda?", "Where are my keys?"],
      ["To’p qutining ichida.", "The ball is in the box."],
      ["Aziz Bobur yonida.", "Aziz is next to Bobur."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["The ball under the sofa.", "The ball is under the sofa."],
      ["Where is my keys?", "Where are my keys?"],
      ["The cat is the box in.", "The cat is in the box."],
      ["My books is on the shelf.", "My books are on the shelf."] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "yel", title: "My home: where is it?", sub: "Pick a card. Say where it is in YOUR home: “My TV is in the living room.”", size: 46,
      cards: [{ t: "my TV", uz: "televizorim" }, { t: "my bed", uz: "karavotim" }, { t: "my phone now", uz: "telefonim hozir" }, { t: "my bag now", uz: "sumkam hozir" }, { t: "the fridge", uz: "muzlatkich" }, { t: "my books", uz: "kitoblarim" }] },
    { t: "spot", bg: "sky", title: "Hide and find!", sub: "Pairs. A hides a pen. B asks: “Is it in your bag?” A answers: “Yes, it is.” / “No, it isn’t.” Then swap.", size: 44,
      cards: ["Is it in your bag?", "Is it on the desk?", "Is it under your book?", "Is it next to the phone?", "Yes, it is!", "No, it isn’t."] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say in, on, under and next to", "say: The cat is under the bed.", "ask: Where is…? Where are…?", "answer with It’s… and They’re…", "say where things are in my home", "use new words: box, ball, keys, shelf, floor"] },
    { t: "bye", chips: [["Where is…?", "peach"], ["It’s on the table.", "mint"], ["They’re in the box.", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "put a pen IN your bag", say: "The pen is in the bag." },
      { cue: "put a book ON your head", say: "The book is on your head!" },
      { cue: "put a pen UNDER your book", say: "The pen is under the book." },
      { cue: "stand NEXT TO the door", say: "You are next to the door." },
      { cue: "sit ON the floor", say: "You are on the floor!" },
      { cue: "put your phone ON the chair", say: "The phone is on the chair." },
      { cue: "put your hands UNDER the desk", say: "Your hands are under the desk." },
      { cue: "stand NEXT TO a friend", say: "You are next to Aziz. (the friend’s name)" },
      { cue: "put two pens IN a bag", say: "The pens are in the bag." },
      { cue: "be a cat UNDER the table", say: "The cat is under the table!" },
      { cue: "put your bag ON the desk", say: "The bag is on the desk." },
      { cue: "put your keys NEXT TO your phone", say: "The keys are next to the phone." }
    ],
    board: [
      { cat: "Words", qs: [["“ichida” in English", "in"], ["“tagida” in English", "under"], ["“yonida” in English", "next to"]] },
      { cat: "New things", qs: [["“quti” in English", "a box"], ["“mushuk” and “to’p”", "a cat · a ball"], ["“kalitlar” and “pol”", "keys · the floor"]] },
      { cat: "Is or are?", qs: [["The cat ___ on the bed.", "is"], ["My keys ___ in the box.", "are"], ["Where ___ my books?", "are"]] },
      { cat: "Where?", qs: [["Where is your bag? (ustida: desk)", "It’s on the desk."], ["Where are the keys? (ichida: box)", "They’re in the box."], ["Where is the ball? (tagida: sofa)", "It’s under the sofa."]] },
      { cat: "Translate", qs: [["Mushuk qayerda?", "Where is the cat?"], ["Telefon stol ustida.", "The phone is on the table."], ["Kitoblar tokchada.", "The books are on the shelf."]] },
      { cat: "Fix it", qs: [["The cat in the box.", "The cat is in the box."], ["Where is my keys?", "Where are my keys?"], ["The ball the bed under.", "The ball is under the bed."]] }
    ],
    wheel: [
      { name: "In", tasks: ["Say one thing in your bag.", "Say one thing in your kitchen.", "Say: The cat is in the box.", "Ask: Is it in your bag?"] },
      { name: "On", tasks: ["Say one thing on your desk.", "Say one thing on the teacher’s table.", "Put a pen on your book. Say it.", "Ask: Is it on the floor?"] },
      { name: "Under", tasks: ["Say one thing under your chair.", "Put a pen under a book. Say it.", "Say: The ball is under the bed.", "Ask: Is it under the desk?"] },
      { name: "Next to", tasks: ["Who is next to you? Say it.", "Say: I am next to the window.", "Stand next to a friend. Say it.", "Ask: Who is next to Lola?"] },
      { name: "Where?", tasks: ["Ask a friend: Where is your phone?", "Ask: Where are your keys?", "Answer: Where is the board?", "Answer: Where is your bag?"] },
      { name: "My home", tasks: ["Where is your TV?", "Where is your bed?", "Where is the fridge?", "Say one thing on your shelf."] }
    ],
    build: [
      { w: ["The","cat","is","in","the","box"], e: "." },
      { w: ["Where","is","the","ball"], e: "?" },
      { w: ["It’s","under","the","bed"], e: "." },
      { w: ["Where","are","my","keys"], e: "?" },
      { w: ["They’re","on","the","table"], e: "." },
      { w: ["Aziz","is","next","to","Lola"], e: "." },
      { w: ["Is","it","on","the","shelf"], e: "?" },
      { w: ["The","books","are","on","the","floor"], e: "." }
    ],
    auction: [
      { s: "The cat is under the bed.", ok: true },
      { s: "The ball on the sofa.", ok: false, fix: "The ball is on the sofa." },
      { s: "Where are my keys?", ok: true },
      { s: "Where is my books?", ok: false, fix: "Where are my books?" },
      { s: "The phone is on the table.", ok: true },
      { s: "The pen is the bag in.", ok: false, fix: "The pen is in the bag." },
      { s: "Lola is next to Madina.", ok: true },
      { s: "The keys is in the box.", ok: false, fix: "The keys are in the box." },
      { s: "Where is the cat? — It’s on the floor.", ok: true },
      { s: "Where are the balls? — It’s under the bed.", ok: false, fix: "Where are the balls? — They’re under the bed." }
    ]
  }
};
