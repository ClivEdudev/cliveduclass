/* Beginner · Lesson 9 · We are, they are
   Teaches: we / you (many) / they + are (We are students. They’re from Korea.),
   one → is, many → are, and plurals: a book → two books, a bus → two buses (+s, +es).
   New words: we, they, apple, egg, cat, dog, house, bus, box, watch.
   Recycles: he / she / it + is and countries (lesson 8), I am, you are and jobs (lesson 7),
   colours (lesson 5), a / an and classroom things (lesson 4), numbers (lessons 1 and 3).
   Built for Thu 17 Dec 2026. */
window.LESSON = {
  id: "b9",
  n: 9,
  title: "We are, they are",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 9", title: "We are, <span class='cy'>they are</span>", lead: "we, you, they + are · plurals: two books · Ko’plik", chips: [["Biz o’quvchilarmiz.", "peach"], ["Ular do’stlar.", "mint"], ["ikkita kitob", "skyb"]] },
    { t: "goals", items: [
      ["Say we and they", "We are students.", "Biz o’quvchilarmiz."],
      ["Make plurals", "a book → two books", "bitta kitob → ikkita kitob"],
      ["Talk about two or more people", "They are from Korea.", "Ular Koreyadan."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: he, she or it?", sub: "Pick a card. Say: “He is… / She is… / It is…” · Kartani tanlang va gap ayting.", size: 50,
      cards: [{ t: "Bobur · Bukhara", uz: "He’s from…" }, { t: "Lola · teacher", uz: "She’s a…" }, { t: "Ivan · Russia", uz: "He’s from…" }, { t: "a red car", uz: "It’s…" }, { t: "Min-ji · Korea", uz: "She’s from…" }, { t: "Aziz · doctor", uz: "He’s a…" }] },

    /* ---------- WE, YOU, THEY ---------- */
    { t: "cols", eb: "New words · Yangi so’zlar", title: "We, you, they", menu: "we, you, they", cols: [
      { bg: "skyb", label: "we 🙋‍♂️🙋‍♀️", lc: "b", fs: 38, lines: ["Aziz and I → <span class='ca'>we</span>"], uz: "we = biz (men + boshqalar)" },
      { bg: "mint", label: "you 👉👉", lc: "g", fs: 38, lines: ["you (one) → <span class='ca'>you</span>", "you (many) → <span class='ca'>you</span>"], uz: "you = siz / sizlar: ingliz tilida bitta so’z" },
      { bg: "peach", label: "they 👫", lc: "r", fs: 38, lines: ["Aziz and Lola → <span class='ca'>they</span>", "two books → <span class='ca'>they</span>"], uz: "they = ular (odamlar ham, narsalar ham)" } ],
      notes: ["and = va", "Many people or things → we, you, they"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "we / you / they + are", rows: [
      { chips: [["We", "skyb"], ["are", "peach"], ["students.", "mint"]], uz: "Biz o’quvchilarmiz." },
      { chips: [["You", "skyb"], ["are", "peach"], ["my friends.", "mint"]], uz: "Sizlar mening do’stlarimsiz." },
      { chips: [["They", "skyb"], ["are", "peach"], ["from Samarkand.", "mint"]], uz: "Ular Samarqanddan." } ],
      notes: ["we are = we’re", "you are = you’re", "they are = they’re"] },
    { t: "table", eb: "To be · am, is, are", title: "All of to be!", head: ["Who", "to be", "Short form", "Uzbek"], rows: [
      ["I", "<b class='ca'>am</b>", "I’m", "Men …man"],
      ["You", "<b class='ca'>are</b>", "You’re", "Siz / Sizlar …siz"],
      ["He / She / It", "<b class='ca'>is</b>", "He’s / She’s / It’s", "U …"],
      ["We", "<b class='ca'>are</b>", "We’re", "Biz …miz"],
      ["They", "<b class='ca'>are</b>", "They’re", "Ular …"] ],
      notes: ["One (Aziz) → is", "Many (Aziz and Lola) → are"] },
    { t: "examples", eb: "Examples · Misollar", title: "We are, they are", items: [
      ["<span class='ca'>We are</span> students.", "Biz o’quvchilarmiz."],
      ["<span class='ca'>We’re</span> from Uzbekistan.", "Biz O’zbekistondanmiz."],
      ["Aziz and Bobur <span class='ca'>are</span> doctors.", "Aziz va Bobur shifokorlar."],
      ["<span class='ca'>They are</span> from Tashkent.", "Ular Toshkentdan."],
      ["Lola and Madina <span class='ca'>are</span> my friends.", "Lola va Madina mening do’stlarim."],
      ["<span class='ca'>You are</span> my students.", "Sizlar mening o’quvchilarimsiz."] ] },
    { t: "gaps", title: "Is or are?", sub: "Say the full sentence. Tap to check. · To’liq gapni ayting.", w: 200, fs: 38, rows: [
      ["We ___ students.", "are"], ["Aziz ___ a driver.", "is"], ["They ___ from Korea.", "are"],
      ["Lola and Madina ___ teachers.", "are"], ["It ___ a blue bag.", "is"], ["You and I ___ friends.", "are"] ] },
    { t: "gaps", title: "We or they?", sub: "Say the word. Tap to check. · So’zni ayting.", w: 200, fs: 38, rows: [
      ["Aziz and I → ___", "we"], ["Lola and Bobur → ___", "they"], ["two cars → ___", "they"],
      ["Madina and I → ___", "we"], ["three books → ___", "they"], ["my friends → ___", "they"] ] },

    /* ---------- PLURALS ---------- */
    { t: "cols", eb: "Plurals · Ko’plik", title: "One or many?", menu: "Plurals: + s", cols: [
      { bg: "skyb", label: "One · Bitta", lc: "b", fs: 42, lines: ["a book", "a pen", "a car"], uz: "bitta → a / an" },
      { bg: "mint", label: "Many · Ko’p (+ s)", lc: "g", fs: 42, lines: ["two book<span class='ca'>s</span>", "three pen<span class='ca'>s</span>", "ten car<span class='ca'>s</span>"], uz: "Ko’plik: oxiriga -s qo’shamiz (o’zbekcha -lar)." } ],
      notes: ["a / an → only one", "two, three, ten… → + s"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "number + word + s", rows: [
      { chips: [["two", "skyb"], ["book", "mint"], ["s", "peach"]], uz: "ikkita kitob" },
      { chips: [["five", "skyb"], ["apple", "mint"], ["s", "peach"]], uz: "beshta olma" },
      { chips: [["ten", "skyb"], ["student", "mint"], ["s", "peach"]], uz: "o’nta o’quvchi" } ],
      notes: ["O’zbekcha: «ikkita kitob» (-lar yo’q)", "Inglizcha: two books (-s bor!)"] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "One → many", menu: "New words: + s", items: [
      ["🍎 an <span class='ca'>apple</span> → two <span class='ca'>apples</span>", "apple = olma"],
      ["🥚 an <span class='ca'>egg</span> → six <span class='ca'>eggs</span>", "egg = tuxum"],
      ["🐈 a <span class='ca'>cat</span> → three <span class='ca'>cats</span>", "cat = mushuk"],
      ["🐕 a <span class='ca'>dog</span> → two <span class='ca'>dogs</span>", "dog = it (hayvon)"],
      ["🏠 a <span class='ca'>house</span> → four <span class='ca'>houses</span>", "house = uy"],
      ["🧑‍🤝‍🧑 a <span class='ca'>friend</span> → five <span class='ca'>friends</span>", "friend = do’st"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "+ es", menu: "New words: + es", items: [
      { bg: "butter", w: "🚌", label: "bus = avtobus", en: "a bus → two bus<span class='ca'>es</span>", uz: "ikkita avtobus" },
      { bg: "peach", w: "📦", label: "box = quti", en: "a box → three box<span class='ca'>es</span>", uz: "uchta quti" },
      { bg: "mint", w: "⌚", label: "watch = soat", en: "a watch → two watch<span class='ca'>es</span>", uz: "ikkita soat" },
      { bg: "skyb", w: "🏫", label: "class = sinf", en: "a class → four class<span class='ca'>es</span>", uz: "to’rtta sinf" } ] },
    { t: "cols", eb: "Plurals · Ko’plik", title: "+ s or + es?", cols: [
      { bg: "mint", label: "+ s", lc: "g", fs: 40, lines: ["book → books", "apple → apples", "dog → dogs"], uz: "Ko’p so’zlar: shunchaki -s." },
      { bg: "butter", label: "+ es", fs: 40, lines: ["bus → buses", "box → boxes", "watch → watches"], uz: "Oxiri s, x, ch, sh bo’lsa: -es." } ],
      notes: ["-es says /iz/: buses, boxes"] },
    { t: "examples", eb: "Examples · Misollar", title: "They are…", items: [
      ["My <span class='ca'>friends</span> are from Bukhara.", "Do’stlarim Buxorodan."],
      ["The <span class='ca'>cats</span> are white.", "Mushuklar oq."],
      ["The <span class='ca'>buses</span> are yellow.", "Avtobuslar sariq."],
      ["Madina and Lola are <span class='ca'>teachers</span>.", "Madina va Lola o’qituvchilar."],
      ["The <span class='ca'>boxes</span> are red.", "Qutilar qizil."],
      ["We are <span class='ca'>friends</span>.", "Biz do’stmiz."] ] },
    { t: "gaps", title: "Make it plural", sub: "Say it. Tap to check. · Ko’plikda ayting.", w: 300, fs: 38, rows: [
      ["one book → two ___", "books"], ["one apple → three ___", "apples"], ["one bus → two ___", "buses"],
      ["one box → four ___", "boxes"], ["one egg → ten ___", "eggs"], ["one cat → five ___", "cats"] ] },
    { t: "spot", bg: "sky", title: "Count in the classroom!", sub: "Teacher points. You count and say: “three chairs!” · Sanang va ko’plikda ayting.", size: 52,
      cards: [{ t: "phone", uz: "telefon" }, { t: "chair", uz: "stul" }, { t: "door", uz: "eshik" }, { t: "pen", uz: "ruchka" }, { t: "book", uz: "kitob" }, { t: "bag", uz: "sumka" }] },

    /* ---------- BE CAREFUL ---------- */
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 36, lines: ["two <span class='cn'>book</span>", "They <span class='cn'>is</span> from Korea.", "We are <span class='cn'>a students</span>.", "three <span class='cn'>boxs</span>"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 36, lines: ["two <span class='ca'>books</span>", "They <span class='ca'>are</span> from Korea.", "We are <span class='ca'>students</span>.", "three <span class='ca'>boxes</span>"] },
      { bg: "butter", label: "Why? · Nega?", fs: 30, lines: ["+ s", "they → are", "no «a»", "x → es"], uz: "Raqamdan keyin -s qo’shiladi (o’zbekchada yo’q!). Ko’plikda «a» ishlatilmaydi. we / you / they → are." } ] },

    /* ---------- PRACTICE ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Biz o’quvchilarmiz.", "We are students."],
      ["Ular Koreyadan.", "They are from Korea."],
      ["ikkita olma", "two apples"],
      ["Aziz va Lola do’stlar.", "Aziz and Lola are friends."],
      ["Sizlar mening o’quvchilarimsiz.", "You are my students."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["They is my friends.", "They are my friends."],
      ["The book are red.", "The books are red."],
      ["We are a doctors.", "We are doctors."],
      ["two boxs", "two boxes"],
      ["Lola and Madina is from Samarkand.", "Lola and Madina are from Samarkand."] ] },
    { t: "spot", bg: "yel", title: "We and they", sub: "Say a sentence about you and a friend, or about two classmates. · Gap ayting.", size: 52,
      cards: [{ t: "We are…", uz: "Biz …miz." }, { t: "We’re from…", uz: "Biz …danmiz." }, { t: "They are…", uz: "Ular …" }, { t: "They’re from…", uz: "Ular …dan." }, { t: "My friends are…", uz: "Do’stlarim …" }, { t: "You are…", uz: "Sizlar …siz." }] },
    { t: "spot", bg: "sky", title: "Pairs: one → many", sub: "Pairs. A: “A pen!” B: “Two pens!” (or three, four…). Then change. · Juftlikda o’ynang.", size: 52,
      cards: [{ t: "a pen", uz: "ruchka" }, { t: "a bus", uz: "avtobus" }, { t: "an apple", uz: "olma" }, { t: "a box", uz: "quti" }, { t: "a dog", uz: "it" }, { t: "a watch", uz: "soat" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say we, you and they", "use are: We are… They are…", "know: one → is, many → are", "make plurals: books, apples", "make plurals with -es: buses, boxes"] },
    { t: "bye", chips: [["We are…", "peach"], ["They are…", "mint"], ["two books", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "two students act as doctors", say: "They are doctors!" }, { cue: "you and a friend act as teachers", say: "We are teachers!" },
      { cue: "three students act as drivers", say: "They are drivers!" }, { cue: "two girls read and write", say: "They are students!" },
      { cue: "two students meow like cats", say: "They are cats!" }, { cue: "two students bark like dogs", say: "They are dogs!" },
      { cue: "hold a book, show 2 fingers", say: "two books!" }, { cue: "drive a bus, show 2 fingers", say: "two buses!" },
      { cue: "eat an apple, show 5 fingers", say: "five apples!" }, { cue: "open a box, show 3 fingers", say: "three boxes!" },
      { cue: "look at your watch, show 2 fingers", say: "two watches!" }, { cue: "break an egg, show 6 fingers", say: "six eggs!" }
    ],
    board: [
      { cat: "we / they", qs: [["Aziz and I → ?", "we"], ["Lola and Bobur → ?", "they"], ["two cars → ?", "they"]] },
      { cat: "is / are", qs: [["We ___ friends.", "are"], ["They ___ from China.", "are"], ["Aziz ___ a student. Aziz and Lola ___ students.", "is · are"]] },
      { cat: "Plurals + s", qs: [["a book → two ___", "books"], ["an apple → five ___", "apples"], ["a friend, a dog, an egg → many", "friends, dogs, eggs"]] },
      { cat: "Plurals + es", qs: [["a bus → two ___", "buses"], ["a box → three ___", "boxes"], ["a class, a watch → many", "classes, watches"]] },
      { cat: "Translate", qs: [["“biz” and “ular”", "we · they"], ["“ikkita olma”", "two apples"], ["“Ular Koreyadan.”", "They are from Korea."]] },
      { cat: "Fix it", qs: [["two book", "two books"], ["They is doctors.", "They are doctors."], ["We are a students.", "We are students."]] }
    ],
    wheel: [
      { name: "We", tasks: ["Say: We are …(students).", "Say: We are from …", "Point at you and a friend. Say: We are …", "Say 2 sentences with We’re."] },
      { name: "They", tasks: ["Point at 2 classmates. Say: They are …", "Say: They are from …", "Say 2 sentences with They’re.", "Say 2 friends’ names and city: They are from …"] },
      { name: "+ s", tasks: ["Say: 2 + book.", "Say: 3 + pen.", "Say: 5 + apple.", "Count 4 things in the room."] },
      { name: "+ es", tasks: ["Say: 2 + bus.", "Say: 3 + box.", "Spell: boxes.", "Spell: watches."] },
      { name: "is or are", tasks: ["Say a sentence with is.", "Say a sentence with are.", "Aziz → is or are?", "Aziz and Lola → is or are?"] },
      { name: "Count", tasks: ["Count the pens.", "Count the chairs.", "Count the bags.", "Count the books."] }
    ],
    build: [
      { w: ["We","are","students"], e: "." }, { w: ["They","are","from","Korea"], e: "." }, { w: ["Lola","and","Madina","are","friends"], e: "." },
      { w: ["They’re","my","friends"], e: "." }, { w: ["We","are","from","Tashkent"], e: "." }, { w: ["The","apples","are","red"], e: "." },
      { w: ["Aziz","and","Bobur","are","doctors"], e: "." }, { w: ["Where","are","they","from"], e: "?" }
    ],
    auction: [
      { s: "We are students.", ok: true },
      { s: "They is from China.", ok: false, fix: "They are from China." },
      { s: "My friends are from Bukhara.", ok: true },
      { s: "We are a doctors.", ok: false, fix: "We are doctors." },
      { s: "The buses are yellow.", ok: true },
      { s: "The boxs are red.", ok: false, fix: "The boxes are red." },
      { s: "Lola and Madina are teachers.", ok: true },
      { s: "They are my friend.", ok: false, fix: "They are my friends." },
      { s: "They’re from Samarkand.", ok: true },
      { s: "Aziz and Bobur is drivers.", ok: false, fix: "Aziz and Bobur are drivers." }
    ]
  }
};
