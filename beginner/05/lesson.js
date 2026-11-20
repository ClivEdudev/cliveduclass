/* Beginner · Lesson 5 · Colours
   Teaches: 10 colours (red, blue, green, yellow, black, white, orange, pink, brown, grey),
   colour before the thing (a red pen), an orange…, and "What colour is it? It’s red."
   Recycles: It’s a / an… and classroom things (lesson 4), How do you spell it? (lesson 2).
   Built for Thu 3 Dec 2026. */
window.LESSON = {
  id: "b5",
  n: 5,
  title: "Colours",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 5", title: "What <span class='cy'>colour</span> is it?", lead: "Colours · Ranglar", chips: [["Bu qizil ruchka.", "peach"], ["Bu qanday rangda?", "mint"], ["Ko’k, yashil, sariq…", "skyb"]] },
    { t: "goals", items: [
      ["Say 10 colours", "red, blue, green…", "qizil, ko’k, yashil…"],
      ["Say a colour and a thing", "It’s a red pen.", "Bu qizil ruchka."],
      ["Ask and answer about colours", "What colour is it? It’s blue.", "Bu qanday rangda? Ko’k."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: What is this?", sub: "Teacher points to a card. You say: “It’s a pen.” · O’qituvchi ko’rsatadi, siz aytasiz: “It’s a …”", size: 96,
      cards: [{ t: "🖊️", uz: "ruchka" }, { t: "📖", uz: "kitob" }, { t: "🎒", uz: "sumka" }, { t: "🪑", uz: "stul" }, { t: "🚪", uz: "eshik" }, { t: "📱", uz: "telefon" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Colours 1", menu: "New words: colours 1", items: [
      ["🔴 <span class='ca'>red</span> · It’s red.", "red = qizil"],
      ["🔵 <span class='ca'>blue</span> · It’s blue.", "blue = ko’k"],
      ["🟢 <span class='ca'>green</span> · It’s green.", "green = yashil"],
      ["🟡 <span class='ca'>yellow</span> · It’s yellow.", "yellow = sariq"],
      ["⚫ <span class='ca'>black</span> · It’s black.", "black = qora"],
      ["⚪ <span class='ca'>white</span> · It’s white.", "white = oq"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Colours 2", menu: "New words: colours 2", items: [
      ["🟠 <span class='ca'>orange</span> · It’s orange.", "orange = to’q sariq"],
      ["💗 <span class='ca'>pink</span> · It’s pink.", "pink = pushti"],
      ["🟤 <span class='ca'>brown</span> · It’s brown.", "brown = jigarrang"],
      ["🐘 <span class='ca'>grey</span> · It’s grey.", "grey = kulrang"],
      ["What <span class='ca'>colour</span> is it?", "colour = rang"],
      ["🚗 It’s a red <span class='ca'>car</span>.", "car = mashina"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Colour + thing", items: [
      { bg: "peach", w: "🚗", label: "red = qizil", en: "It’s a red car.", uz: "Bu qizil mashina." },
      { bg: "skyb", w: "📘", label: "blue = ko’k", en: "It’s a blue book.", uz: "Bu ko’k kitob." },
      { bg: "mint", w: "📗", label: "green = yashil", en: "It’s a green book.", uz: "Bu yashil kitob." },
      { bg: "butter", w: "📙", label: "orange = to’q sariq", en: "It’s an orange book.", uz: "Bu to’q sariq kitob." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "Colour + thing", menu: "The rule", cols: [
      { bg: "mint", label: "a + colour + thing", lc: "g", fs: 42, lines: ["a <span class='ca'>red</span> pen", "a <span class='ca'>blue</span> bag", "a <span class='ca'>black</span> chair"], uz: "Rang narsadan OLDIN keladi, xuddi o’zbek tilidagidek: qizil ruchka = a red pen." },
      { bg: "butter", label: "an + orange", fs: 42, lines: ["an <span class='ca'>orange</span> pen", "an <span class='ca'>orange</span> bag"], uz: "orange so’zi unli (o) bilan boshlanadi, shuning uchun an." },
      { bg: "skyb", label: "only a colour", lc: "b", fs: 42, lines: ["It’s <span class='ca'>red</span>.", "It’s <span class='ca'>green</span>."], uz: "Faqat rang aytilsa, a / an kerak emas." } ],
      notes: ["a pen → a red pen", "a / an keyingi so’zga qarab tanlanadi"] },
    { t: "formula", bg: "ink", eb: "Ask and answer · Savol va javob", title: "What colour is it?", rows: [
      { chips: [["What colour", "skyb"], ["is", "peach"], ["it?", "mint"]], uz: "Bu qanday rangda?" },
      { chips: [["It’s", "skyb"], ["red.", "peach"]], uz: "Qizil." },
      { chips: [["It’s", "skyb"], ["a red", "peach"], ["pen.", "mint"]], uz: "Bu qizil ruchka." } ],
      notes: ["It’s = It is", "a red pen ✓ · a pen red ✗", "colour (British) = color (American)"] },
    { t: "examples", eb: "Examples · Misollar", title: "It’s a red pen.", items: [
      ["It’s a <span class='ca'>red</span> pen.", "Bu qizil ruchka."],
      ["It’s a <span class='ca'>white</span> car.", "Bu oq mashina."],
      ["It’s an <span class='ca'>orange</span> bag.", "Bu to’q sariq sumka."],
      ["It’s a <span class='ca'>brown</span> desk.", "Bu jigarrang parta."],
      ["It’s a <span class='ca'>yellow</span> pencil.", "Bu sariq qalam."],
      ["It’s a <span class='ca'>black</span> phone.", "Bu qora telefon."] ] },
    { t: "examples", eb: "A short dialogue · Qisqa suhbat", title: "At the bazaar", items: [
      ["Madina: <span class='cw'>What</span> is this?", "Madina: Bu nima?"],
      ["Aziz: It’s a bag.", "Aziz: Bu sumka."],
      ["Madina: <span class='cw'>What colour</span> is it?", "Madina: U qanday rangda?"],
      ["Aziz: It’s <span class='ca'>pink</span>.", "Aziz: Pushti."],
      ["Madina: How do you spell “pink”?", "Madina: “Pink” qanday yoziladi?"],
      ["Aziz: P-I-N-K. Pink!", "Aziz: P-I-N-K. Pushti!"] ] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "Which colour?", sub: "Say the colour. Tap to check. · Rangni ayting.", w: 240, fs: 44, rows: [
      ["🔴 It’s ___.", "red"], ["🔵 It’s ___.", "blue"], ["🟢 It’s ___.", "green"],
      ["🟡 It’s ___.", "yellow"], ["⚫ It’s ___.", "black"], ["⚪ It’s ___.", "white"] ] },
    { t: "gaps", title: "a or an?", sub: "Look at the next word! Tap to check. · Keyingi so’zga qarang!", w: 160, fs: 42, rows: [
      ["It’s ___ red pen.", "a"], ["It’s ___ orange bag.", "an"], ["It’s ___ black chair.", "a"],
      ["It’s ___ orange pencil.", "an"], ["It’s ___ white car.", "a"], ["It’s ___ yellow book.", "a"] ] },
    { t: "gaps", title: "Put the words in order", sub: "Colour first, then the thing. Tap to check. · Avval rang, keyin narsa.", w: 330, fs: 36, rows: [
      ["It’s ___. (pen · a · red)", "a red pen"], ["It’s ___. (car · a · white)", "a white car"], ["It’s ___. (bag · an · orange)", "an orange bag"],
      ["It’s ___. (a · book · green)", "a green book"], ["It’s ___. (chair · brown · a)", "a brown chair"], ["It’s ___. (a · grey · phone)", "a grey phone"] ] },
    { t: "spot", bg: "sky", title: "What colour is it?", sub: "Teacher points to a thing in the room. Ask: “What colour is it?” Answer: “It’s …” · Sinfdagi narsalar haqida so’rang.", size: 52,
      cards: [{ t: "the door", uz: "eshik" }, { t: "the board", uz: "doska" }, { t: "my bag", uz: "mening sumkam" }, { t: "your pen", uz: "sizning ruchkangiz" }, { t: "the window", uz: "deraza" }, { t: "my phone", uz: "mening telefonim" }] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["It’s a <span class='cn'>pen red</span>.", "It’s <span class='cn'>a orange</span> bag.", "It’s <span class='cn'>a red</span>.", "What colour <span class='cn'>it is</span>?"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["It’s a <span class='ca'>red pen</span>.", "It’s <span class='ca'>an orange</span> bag.", "It’s <span class='ca'>red</span>.", "What colour <span class='ca'>is it</span>?"] },
      { bg: "butter", label: "Why? · Nega?", fs: 34, lines: ["colour + thing", "orange → an", "only colour → no a", "question → is it?"], uz: "Rang oldin keladi. Unli oldidan an. Faqat rang bo’lsa a yo’q. Savolda: is it?" } ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Bu qizil ruchka.", "It’s a red pen."],
      ["Bu qanday rangda?", "What colour is it?"],
      ["Bu oq mashina.", "It’s a white car."],
      ["Bu to’q sariq sumka.", "It’s an orange bag."],
      ["Yashil.", "It’s green."] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: answer the question", sub: "Look at the book. Say the answer. Tap to check.", rows: [
      ["📕 What colour is it?", "It’s red."],
      ["📗 What is this?", "It’s a green book."],
      ["📙 What is this?", "It’s an orange book."],
      ["📘 What colour is it?", "It’s blue."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["It’s a car white.", "It’s a white car."],
      ["It’s a orange pen.", "It’s an orange pen."],
      ["What colour it is?", "What colour is it?"],
      ["It’s a green.", "It’s green."] ] },
    { t: "spot", bg: "sky", title: "Find it!", sub: "Pick a colour. Find a thing in the room. Say: “It’s a red bag!” · Sinfdan shu rangdagi narsani toping.", size: 56,
      cards: [{ t: "🔴 red", uz: "qizil" }, { t: "🔵 blue", uz: "ko’k" }, { t: "⚫ black", uz: "qora" }, { t: "⚪ white", uz: "oq" }, { t: "🟤 brown", uz: "jigarrang" }, { t: "🟢 green", uz: "yashil" }] },
    { t: "spot", bg: "yel", title: "Pairs: ask and answer", sub: "A points to a thing on B’s desk. A asks, B answers. Then swap. · Juftlikda: so’rang va javob bering.", size: 46,
      cards: [{ t: "What is this?", uz: "Bu nima?" }, { t: "It’s a …", uz: "Bu …" }, { t: "What colour is it?", uz: "U qanday rangda?" }, { t: "It’s …", uz: "U …" }, { t: "How do you spell it?", uz: "Qanday yoziladi?" }, { t: "R-E-D", uz: "harflab ayting" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say 10 colours", "say a colour + a thing: a red pen", "use an: an orange bag", "ask “What colour is it?”", "answer “It’s blue.”", "spell a colour: R-E-D"] },
    { t: "bye", chips: [["red, blue, green", "peach"], ["It’s a red pen.", "mint"], ["What colour is it?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "point to something red", say: "It’s red!" }, { cue: "point to something white", say: "It’s white!" },
      { cue: "point to something black", say: "It’s black!" }, { cue: "point to something blue", say: "It’s blue!" },
      { cue: "hold up a pen and point to its colour", say: "It’s a … pen! (blue / black / red)" }, { cue: "hold up a bag and point to its colour", say: "It’s a … bag!" },
      { cue: "drive a car, then point to something white", say: "It’s a white car!" }, { cue: "write R-E-D in the air", say: "red!" },
      { cue: "write P-I-N-K in the air", say: "pink!" }, { cue: "hold up a book, shrug: what colour?", say: "What colour is it?" },
      { cue: "point to the board", say: "It’s a … board! (white / black / green)" }, { cue: "point to the door", say: "It’s a … door!" }
    ],
    board: [
      { cat: "Colours", qs: [["“qizil” in English", "red"], ["“sariq” and “yashil”", "yellow · green"], ["“jigarrang” and “kulrang”", "brown · grey"]] },
      { cat: "a or an?", qs: [["___ red pen", "a red pen"], ["___ orange bag", "an orange bag"], ["___ black chair and ___ orange car", "a black chair · an orange car"]] },
      { cat: "Word order", qs: [["pen · red · a", "a red pen"], ["car · white · a", "a white car"], ["is · it · colour · What", "What colour is it?"]] },
      { cat: "Uzbek → English", qs: [["Bu qora sumka.", "It’s a black bag."], ["Bu qanday rangda?", "What colour is it?"], ["Bu to’q sariq ruchka.", "It’s an orange pen."]] },
      { cat: "Spell it!", qs: [["Spell: RED", "R-E-D"], ["Spell: BLUE", "B-L-U-E"], ["Spell: YELLOW", "Y-E-L-L-O-W"]] },
      { cat: "What colour?", qs: [["🔴 What colour is it?", "It’s red."], ["⚪ What colour is it?", "It’s white."], ["📙 What is this?", "It’s an orange book."]] }
    ],
    wheel: [
      { name: "Colours", tasks: ["Say 3 colours. (3 ta rang)", "Say 5 colours fast!", "Say: qizil, ko’k, oq.", "Say all 10 colours!"] },
      { name: "Point and say", tasks: ["Point to a red thing. Say it.", "Point to a black thing. Say it.", "Point to a white thing. Say it.", "Point to 2 things. Say the colours."] },
      { name: "My things", tasks: ["Show your pen. Say: It’s a … pen.", "Show your bag. Say the colour.", "Show your phone. Say the colour.", "Show your book. Say the colour."] },
      { name: "Ask", tasks: ["Ask a classmate: What colour is it?", "Ask the teacher: What colour is it?", "Ask: What is this?", "Ask: How do you spell it?"] },
      { name: "Spell it", tasks: ["Spell: RED.", "Spell: GREEN.", "Spell: BLACK.", "Spell: ORANGE."] },
      { name: "a or an?", tasks: ["Say: an orange bag.", "Say: a red car.", "a or an: orange pen?", "a or an: white chair?"] }
    ],
    build: [
      { w: ["It’s", "a", "red", "pen"], e: "." }, { w: ["What", "colour", "is", "it"], e: "?" },
      { w: ["It’s", "an", "orange", "bag"], e: "." }, { w: ["It’s", "a", "white", "car"], e: "." },
      { w: ["It’s", "a", "black", "chair"], e: "." }, { w: ["What", "is", "this"], e: "?" },
      { w: ["It’s", "a", "yellow", "pencil"], e: "." }, { w: ["How", "do", "you", "spell", "it"], e: "?" }
    ],
    auction: [
      { s: "It’s a blue book.", ok: true },
      { s: "It’s a book blue.", ok: false, fix: "It’s a blue book." },
      { s: "What colour is it?", ok: true },
      { s: "It’s a orange bag.", ok: false, fix: "It’s an orange bag." },
      { s: "It’s a white car.", ok: true },
      { s: "What colour it is?", ok: false, fix: "What colour is it?" },
      { s: "It’s red.", ok: true },
      { s: "It’s a pink.", ok: false, fix: "It’s pink." },
      { s: "It’s an orange pencil.", ok: true },
      { s: "It a green chair.", ok: false, fix: "It’s a green chair." }
    ]
  }
};
