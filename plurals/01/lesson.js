/* Extra lesson: Plurals (one → many).
   -s, -es, -ies, -ves, irregular plurals (men, women, children, people, teeth, feet, mice),
   no change (fish, sheep), this/these + is/are, How many…?
   The big mistake for Uzbek speakers: “ikkita kitob” has no -lar, but English needs “two books”. */
window.LESSON = {
  id: "pl1",
  title: "Plurals",
  openDate: "2026-11-19",
  openNow: true,
  slides: [
    { t: "cover", tag: "Extra lesson · Grammar", title: "One book, two <span class='cy'>books</span>", lead: "Plurals: one and many · Birlik va ko’plik", chips: [["bitta kitob", "peach"], ["ikkita kitob", "mint"], ["ko’p kitoblar", "skyb"]] },
    { t: "goals", items: [
      ["Make plural words", "two books, three boxes", "ikkita kitob, uchta quti"],
      ["Use special plurals", "men, women, children, people", "erkaklar, ayollar, bolalar, odamlar"],
      ["Talk about many things", "These apples are sweet. How many…?", "Bu olmalar shirin. Nechta…?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: count in the classroom!", sub: "The teacher points. You shout the number and the word: “Two windows!”",
      cards: [{ t: "windows", uz: "derazalar" }, { t: "chairs", uz: "stullar" }, { t: "desks", uz: "partalar" }, { t: "students", uz: "o’quvchilar" }, { t: "books", uz: "kitoblar" }, { t: "pens", uz: "ruchkalar" }] },

    /* ---------- ONE OR MANY ---------- */
    { t: "cols", eb: "When do we use it?", title: "One or many?", menu: "One or many?", cols: [
      { bg: "mint", label: "1 · One", lc: "g", fs: 40, lines: ["a book", "an apple", "one chair"], uz: "Bitta narsa: a / an / one." },
      { bg: "skyb", label: "2 · Many", lc: "b", fs: 40, lines: ["two book<span class='ca'>s</span>", "three apple<span class='ca'>s</span>", "many chair<span class='ca'>s</span>"], uz: "Bittadan ko’p: so’z oxiriga -s qo’shamiz." },
      { bg: "peach", label: "3 · Uzbek ≠ English", lc: "r", fs: 40, lines: ["ikkita kitob", "= two book<span class='ca'>s</span>"], uz: "O’zbekchada sondan keyin -lar yo’q, inglizchada esa -s kerak!" } ],
      notes: ["Number + plural word: two books", "Never: “two book” ✗"] },
    { t: "formula", bg: "ink", eb: "The rule", title: "word + s", rows: [
      { chips: [["a", "skyb"], ["pen", "mint"], ["→", "butter"], ["two", "skyb"], ["pens", "peach"]], uz: "bitta ruchka → ikkita ruchka" },
      { chips: [["a", "skyb"], ["girl", "mint"], ["→", "butter"], ["three", "skyb"], ["girls", "peach"]], uz: "bitta qiz → uchta qiz" },
      { chips: [["an", "skyb"], ["egg", "mint"], ["→", "butter"], ["six", "skyb"], ["eggs", "peach"]], uz: "bitta tuxum → oltita tuxum" } ],
      notes: ["Most words: just add -s", "a / an only for one: a car, an egg"] },

    /* ---------- SPELLING ---------- */
    { t: "cols", eb: "Spelling", title: "-s, -es or -ies?", cols: [
      { bg: "mint", label: "+ s", lc: "g", fs: 40, lines: ["book → books", "car → cars", "day → days"], uz: "Ko’p so’zlar: shunchaki -s." },
      { bg: "butter", label: "+ es", fs: 40, lines: ["bus → buses", "box → boxes", "watch → watches", "dish → dishes"], uz: "-s, -x, -ch, -sh bilan tugasa: -es." },
      { bg: "skyb", label: "y → ies", lc: "b", fs: 40, lines: ["city → cities", "baby → babies", "family → families"], uz: "Undosh + y bo’lsa: y o’rniga -ies." } ],
      notes: ["But vowel + y: boy → boys, key → keys", "Also -es: tomato → tomatoes, potato → potatoes"] },
    { t: "gaps", title: "Make it plural", sub: "Careful with the spelling! Tap to check.", w: 300, rows: [
      ["one bag → two ___", "bags"], ["one bus → two ___", "buses"], ["one city → two ___", "cities"],
      ["one box → two ___", "boxes"], ["one boy → two ___", "boys"], ["one watch → two ___", "watches"] ] },
    { t: "cols", eb: "Spelling", title: "-f / -fe → -ves, and no change", cols: [
      { bg: "peach", label: "f / fe → ves", lc: "r", fs: 40, lines: ["knife → knives", "leaf → leaves", "wife → wives", "shelf → shelves"], uz: "-f / -fe bilan tugasa: -ves." },
      { bg: "mint", label: "No change", lc: "g", fs: 40, lines: ["one fish → two fish", "one sheep → ten sheep"], uz: "Ba’zi so’zlar o’zgarmaydi." } ],
      notes: ["But: roof → roofs, chef → chefs"] },
    { t: "table", eb: "Irregular plurals · Noto’g’ri ko’plik", title: "No -s at all!", head: ["One", "Many", "Uzbek"], rows: [
      ["a man", "<b class='ca'>men</b>", "erkak → erkaklar"],
      ["a woman", "<b class='ca'>women</b>", "ayol → ayollar"],
      ["a child", "<b class='ca'>children</b>", "bola → bolalar"],
      ["a person", "<b class='ca'>people</b>", "odam → odamlar"],
      ["a tooth", "<b class='ca'>teeth</b>", "tish → tishlar"],
      ["a foot", "<b class='ca'>feet</b>", "oyoq → oyoqlar"],
      ["a mouse", "<b class='ca'>mice</b>", "sichqon → sichqonlar"] ],
      notes: ["people = odamlar (not “persons”)", "children = bolalar (not “childs”)"] },
    { t: "gaps", title: "Special plurals", sub: "No -s here! Tap to check.", w: 300, rows: [
      ["one man → two ___", "men"], ["one child → three ___", "children"], ["one person → ten ___", "people"],
      ["one foot → two ___", "feet"], ["one woman → four ___", "women"], ["one knife → five ___", "knives"] ] },

    /* ---------- VOCABULARY ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "In the kitchen", menu: "New words: in the kitchen", items: [
      ["There are two <span class='ca'>knives</span> on the table.", "knife = pichoq"],
      ["I need three <span class='ca'>tomatoes</span>.", "tomato = pomidor"],
      ["We have six <span class='ca'>cups</span>.", "cup = chashka, piyola"],
      ["The <span class='ca'>dishes</span> are in the sink.", "dish = idish · sink = rakovina"],
      ["She is washing two <span class='ca'>glasses</span>.", "glass = stakan"],
      ["Mum buys five <span class='ca'>potatoes</span>.", "potato = kartoshka"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "In the town", menu: "New words: in the town", items: [
      ["There are many <span class='ca'>people</span> at the bazaar.", "people = odamlar"],
      ["Three <span class='ca'>buses</span> go to Chorsu.", "bus = avtobus"],
      ["Tashkent and Samarkand are big <span class='ca'>cities</span>.", "city = shahar"],
      ["The <span class='ca'>children</span> are playing in the park.", "children = bolalar"],
      ["There are tall <span class='ca'>trees</span> in our street.", "tree = daraxt"],
      ["Two <span class='ca'>women</span> are selling bread.", "women = ayollar"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Animals", items: [
      { bg: "peach", w: "🐑", label: "sheep → sheep", en: "There are ten sheep on the farm.", uz: "Fermada o’nta qo’y bor." },
      { bg: "mint", w: "🐟", label: "fish → fish", en: "I can see three fish.", uz: "Men uchta baliqni ko’ryapman." },
      { bg: "skyb", w: "🐭", label: "mouse → mice", en: "There are two mice in the kitchen!", uz: "Oshxonada ikkita sichqon bor!" },
      { bg: "butter", w: "🐄", label: "cow → cows", en: "My grandfather has four cows.", uz: "Bobomning to’rtta sigiri bor." } ] },
    { t: "spot", bg: "sky", title: "Count it!", sub: "Pick a card. Finish the sentence with a number and a plural word.", size: 46,
      cards: ["In this room there are…", "In my bag there are…", "In my family there are…", "In my kitchen there are…", "In our street there are…", "On the teacher’s desk there are…"] },

    /* ---------- SENTENCES WITH PLURALS ---------- */
    { t: "cols", eb: "Many things · Ko’p narsalar", title: "Many: other words change too", menu: "These are… · There are…", cols: [
      { bg: "mint", label: "One", lc: "g", fs: 40, lines: ["<span class='ca'>This is</span> a pen.", "<span class='ca'>There is</span> a bus.", "<span class='ca'>It is</span> red."] },
      { bg: "skyb", label: "Many", lc: "b", fs: 40, lines: ["<span class='ca'>These are</span> pens.", "<span class='ca'>There are</span> buses.", "<span class='ca'>They are</span> red."] },
      { bg: "butter", label: "What changes", fs: 40, lines: ["is → are", "this → these", "that → those", "it → they"], uz: "Ko’plikda boshqa so’zlar ham o’zgaradi." } ],
      notes: ["Adjectives never change: red pens (not “reds pens”)"] },
    { t: "examples", eb: "Plural sentences", title: "Examples: many things", items: [
      ["<span class='ca'>These</span> apples <span class='ca'>are</span> sweet.", "Bu olmalar shirin."],
      ["<span class='ca'>Those</span> men <span class='ca'>are</span> doctors.", "Anavi erkaklar shifokor."],
      ["<span class='ca'>There are</span> three bedrooms in our house.", "Uyimizda uchta yotoqxona bor."],
      ["My feet <span class='ca'>are</span> cold.", "Oyoqlarim sovuq."],
      ["The children <span class='ca'>are</span> happy.", "Bolalar xursand."],
      ["My sisters <span class='ca'>live</span> in Bukhara.", "Opa-singillarim Buxoroda yashaydi."] ] },
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "How many + plural word?", rows: [
      { chips: [["How many", "peach"], ["books", "mint"], ["are there?", "skyb"]], uz: "Nechta kitob bor?" },
      { chips: [["How many", "peach"], ["sisters", "mint"], ["do you have?", "skyb"]], uz: "Nechta opa-singlingiz bor?" },
      { chips: [["There are", "skyb"], ["five", "butter"], ["books.", "mint"]], uz: "Beshta kitob bor." } ],
      notes: ["How many + plural: How many apples? (not “How many apple?”)", "Answer: There are… / I have…"] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Common mistakes", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["two <span class='cn'>book</span>", "three <span class='cn'>childs</span>", "many <span class='cn'>peoples</span>", "<span class='cn'>This are</span> my pens."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["two <span class='ca'>books</span>", "three <span class='ca'>children</span>", "many <span class='ca'>people</span>", "<span class='ca'>These are</span> my pens."] },
      { bg: "butter", label: "Remember", fs: 38, lines: ["number → -s", "people, children: no -s", "these + are"], uz: "O’zbekchada “ikkita kitob”, inglizchada esa “two books”." } ] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "This or these? Is or are?", sub: "Say the full sentence. Tap to check.", w: 220, fs: 38, rows: [
      ["___ are my books.", "These"], ["There ___ two cats.", "are"], ["___ is my bag.", "This"],
      ["The children ___ at school.", "are"], ["There ___ a tree in the garden.", "is"], ["___ men over there are teachers.", "Those"] ] },
    { t: "gaps", title: "Open the brackets", sub: "Write the plural. Tap to check.", w: 300, fs: 34, rows: [
      ["I have two ___ (sister).", "sisters"], ["There are five ___ (box) here.", "boxes"], ["My ___ (foot) are cold.", "feet"],
      ["Three ___ (baby) are sleeping.", "babies"], ["We need four ___ (knife).", "knives"], ["How many ___ (person) are there?", "people"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Mening ikkita mushugim bor.", "I have two cats."],
      ["Bu olmalar qizil.", "These apples are red."],
      ["Bolalar bog’da o’ynayapti.", "The children are playing in the park."],
      ["Nechta kitob bor?", "How many books are there?"] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: make it plural", sub: "Change every word you need. Tap to check.", fs: 38, rows: [
      ["This is a box.", "These are boxes."],
      ["There is a child in the room.", "There are children in the room."],
      ["That is my knife.", "Those are my knives."],
      ["The baby is sleeping.", "The babies are sleeping."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I have two brother.", "I have two brothers."],
      ["There are three childs.", "There are three children."],
      ["These is my books.", "These are my books."],
      ["Many peoples live in Tashkent.", "Many people live in Tashkent."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake: round 2", sub: "Harder ones! Tap to fix.", rows: [
      ["There are two big citys.", "There are two big cities."],
      ["She has five boxs.", "She has five boxes."],
      ["How many apple do you want?", "How many apples do you want?"],
      ["Those womans are doctors.", "Those women are doctors."] ] },
    { t: "spot", bg: "sky", title: "My things", sub: "Pick a card. Make a true sentence with a number.", size: 48,
      cards: ["I have… (brothers / sisters)", "In my bag there are…", "My grandparents have…", "At the bazaar I buy…", "In my room there are…", "In Tashkent there are many…"] },
    { t: "spot", bg: "yel", title: "At the bazaar!", sub: "Pairs. A: “Hello! How many … do you want?” B: “Five, please!” Then change.", size: 48,
      cards: [{ t: "apples", uz: "olmalar" }, { t: "tomatoes", uz: "pomidorlar" }, { t: "potatoes", uz: "kartoshkalar" }, { t: "eggs", uz: "tuxumlar" }, { t: "carrots", uz: "sabzilar" }, { t: "onions", uz: "piyozlar" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["make plurals with -s and -es", "spell -ies and -ves plurals: cities, knives", "use special plurals: men, women, children, people", "say these / those + are", "ask “How many…?” and answer", "use new words: knife, tomato, city, sheep…"] },
    { t: "bye", chips: [["two books", "peach"], ["three children", "mint"], ["How many…?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "eating two apples", say: "You are eating two apples!" }, { cue: "brushing your teeth", say: "You are brushing your teeth!" },
      { cue: "washing the dishes", say: "You are washing the dishes!" }, { cue: "cutting tomatoes with a knife", say: "You are cutting tomatoes!" },
      { cue: "carrying three boxes", say: "You are carrying three boxes!" }, { cue: "catching fish", say: "You are catching fish!" },
      { cue: "counting people", say: "You are counting people!" }, { cue: "washing your feet", say: "You are washing your feet!" },
      { cue: "reading two books", say: "You are reading two books!" }, { cue: "drinking three glasses of water", say: "You are drinking three glasses of water!" },
      { cue: "holding two babies", say: "You are holding two babies!" }, { cue: "running from two mice", say: "You are running from two mice!" },
      { cue: "buying potatoes at the bazaar", say: "You are buying potatoes!" }, { cue: "putting cups on the shelves", say: "You are putting cups on the shelves!" }
    ],
    board: [
      { cat: "-s / -es", qs: [["book →", "books"], ["box →", "boxes"], ["bus → · dish → · watch →", "buses · dishes · watches"]] },
      { cat: "-ies / -ves", qs: [["city →", "cities"], ["knife →", "knives"], ["baby → · leaf → · boy →", "babies · leaves · boys"]] },
      { cat: "Special", qs: [["man →", "men"], ["child →", "children"], ["person → · tooth → · mouse →", "people · teeth · mice"]] },
      { cat: "These / those", qs: [["Make it plural: This is a pen.", "These are pens."], ["Make it plural: That is a car.", "Those are cars."], ["Make it plural: There is a fish in the river.", "There are fish in the river."]] },
      { cat: "New words", qs: [["“pichoq” in English (many)", "knives"], ["“pomidor” and “kartoshka” (many)", "tomatoes · potatoes"], ["Say 3 things in your kitchen (plural).", "There are cups, knives… (any true)"]] },
      { cat: "Fix it", qs: [["two cat", "two cats"], ["three childs", "three children"], ["These is my shoes.", "These are my shoes."]] }
    ],
    wheel: [
      { name: "Count", tasks: ["Count the windows and doors in this room.", "How many students are here today? Say it.", "Say how many people are in your family.", "Count 5 things on your desk."] },
      { name: "Spelling", tasks: ["Spell: buses and boxes.", "Spell: cities and babies.", "Spell: knives and leaves.", "Spell: children and people."] },
      { name: "Special", tasks: ["Say the plural: man, woman, child.", "Say the plural: tooth, foot, mouse.", "Make a sentence with “people”.", "Make a sentence with “children”."] },
      { name: "These / those", tasks: ["Point at things near you: 2 sentences with “these”.", "Point at things far away: 2 sentences with “those”.", "Make it plural: This is my book.", "Make it plural: That is a big city."] },
      { name: "Bazaar", tasks: ["Ask a classmate: “How many apples do you want?”", "Say 3 things you buy at the bazaar (plural).", "Say what is in your shopping bag.", "Sell 2 things to a classmate."] },
      { name: "Questions", tasks: ["Ask a classmate: “How many … do you have?”", "Ask: “How many people are there in your family?”", "Ask the teacher 2 “How many…?” questions.", "Answer: How many days are there in a week?"] }
    ],
    build: [
      { w: ["I", "have", "two", "sisters"], e: "." }, { w: ["There", "are", "three", "children"], e: "." }, { w: ["These", "apples", "are", "sweet"], e: "." },
      { w: ["How", "many", "books", "are", "there"], e: "?" }, { w: ["Those", "men", "are", "doctors"], e: "." }, { w: ["We", "need", "four", "knives"], e: "." },
      { w: ["My", "feet", "are", "cold"], e: "." }, { w: ["The", "babies", "are", "sleeping"], e: "." },
      { w: ["How", "many", "people", "are", "in", "your", "family"], e: "?" }, { w: ["There", "are", "many", "cities", "in", "Uzbekistan"], e: "." }
    ],
    auction: [
      { s: "There are two buses.", ok: true },
      { s: "I have three brother.", ok: false, fix: "I have three brothers." },
      { s: "These women are teachers.", ok: true },
      { s: "Many peoples live here.", ok: false, fix: "Many people live here." },
      { s: "How many children are there?", ok: true },
      { s: "There are five boxs.", ok: false, fix: "There are five boxes." },
      { s: "My feet are cold.", ok: true },
      { s: "This are my books.", ok: false, fix: "These are my books." },
      { s: "There are two big citys.", ok: false, fix: "There are two big cities." },
      { s: "We need three knives.", ok: true },
      { s: "The childrens are playing.", ok: false, fix: "The children are playing." },
      { s: "Those leaves are yellow.", ok: true }
    ]
  }
};
