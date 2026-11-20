/* Beginner · Lesson 16 · There is and there are
   Teaches: “bor” for places: There is a bed. (one thing) · There are two beds. (many things),
   the place at the end: There is a fridge in the kitchen. = Oshxonada muzlatkich bor.
   A little: Is there a…? Yes, there is. / No, there isn’t. · There isn’t a TV.
   New words: room, kitchen, bedroom, living room, bathroom, sofa, bed, table, fridge, TV, lamp, carpet.
   “in the kitchen / in my room” is used as a chunk here; in, on, under come in lesson 17.
   Recycles: his / her / ’s (15), these (14), have / has (13), plurals (9), not and questions (10), colours (5), numbers.
   Built for Mon 11 Jan 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b16",
  n: 16,
  title: "There is and there are",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 16", title: "There is, <span class='cy'>there are</span>", lead: "My home: rooms and furniture · Uyim: xonalar va jihozlar", chips: [["Xonamda karavot bor.", "peach"], ["Uyimda uchta xona bor.", "mint"], ["Oshxonada muzlatkich bormi?", "skyb"]] },
    { t: "goals", items: [
      ["Name rooms and furniture", "a kitchen, a sofa, a bed", "Xonalar va jihozlarni aytish"],
      ["Say what is in a room", "There is a bed in my room.", "Xonamda karavot bor."],
      ["Say “many” with there are", "There are three rooms in my house.", "Uyimda uchta xona bor."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: whose is it?", sub: "Lesson 15! Pick a card. Say it two ways: “Aziz’s bag. His bag.”", size: 56,
      cards: [{ t: "Aziz 👦 · bag", uz: "Azizning sumkasi" }, { t: "Lola 👧 · phone", uz: "Lolaning telefoni" }, { t: "Bobur 👦 · cat", uz: "Boburning mushugi" },
              { t: "Madina 👧 · hat", uz: "Madinaning shapkasi" }, { t: "my mother 👩 · name", uz: "onamning ismi" }, { t: "my father 👨 · car", uz: "otamning mashinasi" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Rooms · Xonalar", menu: "New words: rooms", items: [
      ["This is my <span class='ca'>room</span>.", "room = xona"],
      ["This is the <span class='ca'>kitchen</span>.", "kitchen = oshxona"],
      ["This is the <span class='ca'>bedroom</span>.", "bedroom = yotoqxona"],
      ["This is the <span class='ca'>living room</span>.", "living room = mehmonxona, zal"],
      ["This is the <span class='ca'>bathroom</span>.", "bathroom = vannaxona, hammom"],
      ["My <span class='ca'>house</span> is in Samarkand.", "house = uy (9-dars) · home = uy"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Furniture · Jihozlar", menu: "New words: furniture", items: [
      ["It’s a <span class='ca'>sofa</span>.", "sofa = divan"],
      ["It’s a <span class='ca'>bed</span>.", "bed = karavot"],
      ["It’s a <span class='ca'>table</span>.", "table = stol"],
      ["It’s a white <span class='ca'>fridge</span>.", "fridge = muzlatkich"],
      ["It’s a <span class='ca'>lamp</span>.", "lamp = chiroq"],
      ["It’s a red <span class='ca'>carpet</span>.", "carpet = gilam"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "In my house", items: [
      { bg: "peach", w: "🛋️", label: "sofa = divan", en: "My sofa is green.", uz: "Mening divanim yashil." },
      { bg: "mint", w: "🛏️", label: "bed = karavot", en: "This is my bed.", uz: "Bu mening karavotim." },
      { bg: "skyb", w: "📺", label: "TV = televizor", en: "Our TV is black.", uz: "Bizning televizorimiz qora." },
      { bg: "butter", w: "💡", label: "lamp = chiroq", en: "That is her lamp.", uz: "Anavi uning chirog’i." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "“Bor” = There is / There are", menu: "There is or there are?", cols: [
      { bg: "skyb", label: "One · Bitta → There is", lc: "b", fs: 42, lines: ["<span class='ca'>There is</span> a bed.", "<span class='ca'>There is</span> a TV."], uz: "Bitta narsa → There is. Karavot bor. Televizor bor." },
      { bg: "mint", label: "Many · Ko’p → There are", lc: "g", fs: 42, lines: ["<span class='ca'>There are</span> two beds.", "<span class='ca'>There are</span> three chairs."], uz: "Ko’p narsa → There are. Ikkita karavot bor. Uchta stul bor." } ],
      notes: ["There is = There’s", "There is + a / an", "There are + 2, 3, 4… + -s"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "There is / There are + thing + place", rows: [
      { chips: [["There is", "peach"], ["a sofa", "skyb"], ["in the living room.", "butter"]], uz: "Mehmonxonada divan bor." },
      { chips: [["There is", "peach"], ["a fridge", "skyb"], ["in the kitchen.", "butter"]], uz: "Oshxonada muzlatkich bor." },
      { chips: [["There are", "peach"], ["two beds", "skyb"], ["in my room.", "butter"]], uz: "Xonamda ikkita karavot bor." } ],
      notes: ["O’zbekcha: joy BOSHIDA, “bor” OXIRIDA", "Inglizcha: There is BOSHIDA, joy OXIRIDA", "in the kitchen = oshxonada"] },
    { t: "table", eb: "One or many? · Bitta yoki ko’p?", title: "There is → There are", menu: "One or many: the table", head: ["One · Bitta", "Many · Ko’p", "Uzbek"], rows: [
      ["<b class='ca'>There is</b> a bed.", "<b class='ca'>There are</b> two beds.", "ikkita karavot bor"],
      ["<b class='ca'>There is</b> a lamp.", "<b class='ca'>There are</b> three lamps.", "uchta chiroq bor"],
      ["<b class='ca'>There is</b> a sofa.", "<b class='ca'>There are</b> two sofas.", "ikkita divan bor"],
      ["<b class='ca'>There is</b> a room.", "<b class='ca'>There are</b> four rooms.", "to’rtta xona bor"],
      ["<b class='ca'>There is</b> a chair.", "<b class='ca'>There are</b> six chairs.", "oltita stul bor"] ],
      notes: ["Ko’p bo’lsa: are + -s (9-dars)", "a bed → two beds"] },
    { t: "examples", eb: "Examples · Misollar", title: "In my house", items: [
      ["<span class='ca'>There is</span> a fridge in the kitchen.", "Oshxonada muzlatkich bor."],
      ["<span class='ca'>There is</span> a TV in the living room.", "Mehmonxonada televizor bor."],
      ["<span class='ca'>There is</span> a red carpet in my room.", "Xonamda qizil gilam bor."],
      ["<span class='ca'>There are</span> two beds in the bedroom.", "Yotoqxonada ikkita karavot bor."],
      ["<span class='ca'>There are</span> four chairs in the kitchen.", "Oshxonada to’rtta stul bor."],
      ["<span class='ca'>There are</span> five rooms in my house.", "Uyimda beshta xona bor."] ] },
    { t: "gaps", title: "Is or are?", sub: "One → is. Many → are. Say the full sentence. Tap to check.", w: 160, fs: 38, rows: [
      ["There ___ a sofa.", "is"], ["There ___ two lamps.", "are"], ["There ___ a fridge in the kitchen.", "is"],
      ["There ___ three rooms.", "are"], ["There ___ a TV in my room.", "is"], ["There ___ six chairs.", "are"] ] },
    { t: "gaps", title: "There is or there are?", sub: "Look at the Uzbek. Tap to check.", w: 240, fs: 34, rows: [
      ["___ a bed. (karavot bor)", "There is"], ["___ two tables. (ikkita stol bor)", "There are"], ["___ a lamp. (chiroq bor)", "There is"],
      ["___ four rooms. (to’rtta xona bor)", "There are"], ["___ a carpet. (gilam bor)", "There is"], ["___ two sofas. (ikkita divan bor)", "There are"] ] },

    /* ---------- WORD ORDER ---------- */
    { t: "cols", eb: "Word order · So’z tartibi", title: "Uzbek and English", menu: "Word order", cols: [
      { bg: "mint", label: "Uzbek", lc: "g", fs: 40, lines: ["<span class='cw'>Oshxonada</span> muzlatkich <span class='ca'>bor</span>.", "<span class='cw'>Xonamda</span> karavot <span class='ca'>bor</span>."], uz: "Joy boshida, “bor” oxirida." },
      { bg: "skyb", label: "English", lc: "b", fs: 40, lines: ["<span class='ca'>There is</span> a fridge <span class='cw'>in the kitchen</span>.", "<span class='ca'>There is</span> a bed <span class='cw'>in my room</span>."], uz: "There is boshida, joy oxirida." } ],
      notes: ["oshxonada = in the kitchen", "xonamda = in my room", "uyimda = in my house"] },
    { t: "gaps", title: "Where is it? Finish the sentence", sub: "Uzbek → English. Tap to check.", w: 330, fs: 34, rows: [
      ["Oshxonada stol bor. → There is a table ___.", "in the kitchen"], ["Xonamda chiroq bor. → There is a lamp ___.", "in my room"],
      ["Mehmonxonada divan bor. → There is a sofa ___.", "in the living room"], ["Uyimda uchta xona bor. → There are three rooms ___.", "in my house"],
      ["Yotoqxonada gilam bor. → There is a carpet ___.", "in the bedroom"], ["Oshxonada muzlatkich bor. → There is a fridge ___.", "in the kitchen"] ] },
    { t: "spot", bg: "sky", title: "Look at our classroom!", sub: "Look and count. Say: “There is a board.” · “There are 12 chairs.”", size: 50,
      cards: [{ t: "a board", uz: "doska" }, { t: "chairs", uz: "stullar" }, { t: "a door", uz: "eshik" }, { t: "windows", uz: "derazalar" }, { t: "desks", uz: "partalar" }, { t: "a teacher", uz: "o’qituvchi" }] },

    /* ---------- QUESTIONS AND NO ---------- */
    { t: "cols", eb: "Questions and no · So’roq va inkor", title: "Is there a…?", menu: "Is there a…?", cols: [
      { bg: "skyb", label: "Question · Savol", lc: "b", fs: 38, lines: ["<span class='cw'>Is there</span> a TV?", "<span class='cw'>Is there</span> a sofa?"], uz: "Televizor bormi? · Divan bormi?" },
      { bg: "mint", label: "Yes · Ha", lc: "g", fs: 38, lines: ["Yes, there <span class='ca'>is</span>."], uz: "Ha, bor." },
      { bg: "peach", label: "No · Yo’q", lc: "r", fs: 38, lines: ["No, there <span class='cn'>isn’t</span>.", "There <span class='cn'>isn’t</span> a TV."], uz: "Yo’q. · Televizor yo’q." } ],
      notes: ["Savol: is OLDINGA chiqadi (10-dars kabi)", "isn’t = is not"] },
    { t: "examples", eb: "Ask and answer", title: "Is there a TV in your room?", items: [
      ["A: <span class='cw'>Is there</span> a TV in your room?", "A: Xonangizda televizor bormi?"],
      ["B: No, there <span class='cn'>isn’t</span>.", "B: Yo’q."],
      ["A: <span class='cw'>Is there</span> a carpet?", "A: Gilam bormi?"],
      ["B: Yes, there <span class='ca'>is</span>. It’s red.", "B: Ha, bor. U qizil."],
      ["A: <span class='cw'>Is there</span> a sofa in the kitchen?", "A: Oshxonada divan bormi?"],
      ["B: No, there <span class='cn'>isn’t</span>. There’s a table.", "B: Yo’q. Stol bor."] ] },

    /* ---------- BE CAREFUL ---------- */
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Uzbek learners often say…", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 34, lines: ["In my room <span class='cn'>have</span> a bed.", "There <span class='cn'>is</span> two beds.", "There is <span class='cn'>sofa</span>."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 34, lines: ["<span class='ca'>There is</span> a bed in my room.", "There <span class='ca'>are</span> two beds.", "There is <span class='ca'>a sofa</span>."] },
      { bg: "butter", label: "Why? · Nega?", fs: 34, lines: ["joy → there is", "ko’p → are", "bitta → a"], uz: "“Menda telefon bor” = I have a phone (13-dars). “Xonada karavot bor” = There is a bed in the room." } ] },

    /* ---------- QUIZ ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", fs: 36, rows: [
      ["Xonamda karavot bor.", "There is a bed in my room."],
      ["Oshxonada muzlatkich bor.", "There is a fridge in the kitchen."],
      ["Mehmonxonada ikkita divan bor.", "There are two sofas in the living room."],
      ["Uyimda to’rtta xona bor.", "There are four rooms in my house."],
      ["Yotoqxonada televizor bormi?", "Is there a TV in the bedroom?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", fs: 36, rows: [
      ["There is three chairs.", "There are three chairs."],
      ["There are a fridge in the kitchen.", "There is a fridge in the kitchen."],
      ["In my room have a lamp.", "There is a lamp in my room."],
      ["There is carpet in the bedroom.", "There is a carpet in the bedroom."],
      ["Is a TV in the living room?", "Is there a TV in the living room?"] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "sky", title: "My house", sub: "Pick a card. Say one true sentence about YOUR house. · Uyingiz haqida ayting.", size: 40,
      cards: [{ t: "There are … rooms in my house.", uz: "Uyimda … ta xona bor." }, { t: "There is a … in the kitchen.", uz: "Oshxonada … bor." },
              { t: "There is a … in my room.", uz: "Xonamda … bor." }, { t: "There are … beds in the bedroom.", uz: "Yotoqxonada … ta karavot bor." },
              { t: "There is a … carpet in the living room.", uz: "Mehmonxonada … gilam bor. (rang)" }, { t: "My fridge is…", uz: "Muzlatkichim … (rang)" }] },
    { t: "spot", bg: "yel", title: "Pairs: Is there a…?", sub: "Pairs. A asks about B’s house. B: “Yes, there is.” / “No, there isn’t.” Then swap.", size: 44,
      cards: ["Is there a TV in your room?", "Is there a sofa in the kitchen?", "Is there a carpet in your room?", "Is there a lamp in the bedroom?", "Is there a cat in your house?", "Is there a computer in your room?"] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["name rooms: kitchen, bedroom, living room, bathroom", "name furniture: sofa, bed, table, fridge, TV, lamp, carpet", "say: There is a bed in my room.", "say: There are two chairs.", "ask: Is there a TV? Yes, there is. / No, there isn’t.", "say what is in my house"] },
    { t: "bye", chips: [["There is a…", "peach"], ["There are two…", "mint"], ["Is there a…?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "sleep (close your eyes, hands under your head)", say: "It’s a bed! / It’s the bedroom!" },
      { cue: "open a fridge, feel cold, take an apple", say: "It’s a fridge!" },
      { cue: "watch TV, change the channel", say: "It’s a TV!" },
      { cue: "sit down, relax, big smile", say: "It’s a sofa!" },
      { cue: "turn on a light: click!", say: "It’s a lamp!" },
      { cue: "cook plov in a big kazan", say: "It’s the kitchen!" },
      { cue: "wash your face, brush your teeth", say: "It’s the bathroom!" },
      { cue: "roll out a long carpet", say: "It’s a carpet!" },
      { cue: "show 3 fingers, then sleep", say: "There are three beds!" },
      { cue: "show 2 fingers, then watch TV", say: "There are two TVs!" },
      { cue: "count the chairs in the classroom", say: "There are … chairs!" },
      { cue: "eat bread and drink tea at a table", say: "It’s a table! / It’s the kitchen!" }
    ],
    board: [
      { cat: "Rooms", qs: [["“oshxona” in English", "the kitchen"], ["“yotoqxona” in English", "the bedroom"], ["“mehmonxona” and “vannaxona”", "the living room · the bathroom"]] },
      { cat: "Furniture", qs: [["“divan” in English", "a sofa"], ["“muzlatkich” in English", "a fridge"], ["“chiroq” and “gilam”", "a lamp · a carpet"]] },
      { cat: "Is or are?", qs: [["There ___ a TV.", "is"], ["There ___ two beds.", "are"], ["There ___ five rooms in my house.", "are"]] },
      { cat: "Translate", qs: [["Divan bor.", "There is a sofa."], ["Xonamda karavot bor.", "There is a bed in my room."], ["Oshxonada uchta stul bor.", "There are three chairs in the kitchen."]] },
      { cat: "Questions", qs: [["“Televizor bormi?”", "Is there a TV?"], ["Answer YES: Is there a lamp?", "Yes, there is."], ["Answer NO: Is there a sofa in the kitchen?", "No, there isn’t."]] },
      { cat: "Fix it", qs: [["There is two lamps.", "There are two lamps."], ["There are a fridge.", "There is a fridge."], ["In my room have a TV.", "There is a TV in my room."]] }
    ],
    wheel: [
      { name: "Kitchen", tasks: ["Say: There is a fridge in the kitchen.", "Say one more thing in your kitchen.", "Say the colour of your fridge.", "Say: There are … chairs in my kitchen."] },
      { name: "Bedroom", tasks: ["Say: There is a bed in my bedroom.", "Say one more thing in your bedroom.", "Say: There are … beds in my bedroom.", "Is there a TV in your bedroom?"] },
      { name: "Living room", tasks: ["Say: There is a sofa in the living room.", "Say the colour of your sofa.", "Say the colour of your carpet.", "Is there a TV in your living room?"] },
      { name: "My house", tasks: ["Say: There are … rooms in my house.", "Say: My house is in…", "Name 4 rooms in English.", "Name 4 things in a house."] },
      { name: "Classroom", tasks: ["Say: There is a board.", "Count and say: There are … chairs.", "Count and say: There are … windows.", "Say: There is a door."] },
      { name: "Questions", tasks: ["Ask a friend: Is there a TV in your room?", "Answer: Yes, there is.", "Answer: No, there isn’t.", "Ask a friend: Is there a carpet in your room?"] }
    ],
    build: [
      { w: ["There", "is", "a", "fridge"], e: "." },
      { w: ["There", "are", "three", "rooms"], e: "." },
      { w: ["There", "are", "two", "sofas"], e: "." },
      { w: ["There", "is", "a", "red", "carpet"], e: "." },
      { w: ["There’s", "a", "bed", "in", "my", "room"], e: "." },
      { w: ["There’s", "a", "TV", "in", "the", "kitchen"], e: "." },
      { w: ["Is", "there", "a", "lamp"], e: "?" },
      { w: ["No,", "there", "isn’t"], e: "." }
    ],
    auction: [
      { s: "There is a sofa in the living room.", ok: true },
      { s: "There are a fridge in the kitchen.", ok: false, fix: "There is a fridge in the kitchen." },
      { s: "There are three rooms in my house.", ok: true },
      { s: "There is two beds in my room.", ok: false, fix: "There are two beds in my room." },
      { s: "Is there a TV in your bedroom?", ok: true },
      { s: "In my kitchen have a table.", ok: false, fix: "There is a table in my kitchen." },
      { s: "There is a red carpet in my room.", ok: true },
      { s: "There is lamp in the bedroom.", ok: false, fix: "There is a lamp in the bedroom." },
      { s: "Is there a bathroom? — Yes, there is.", ok: true },
      { s: "Is a TV in the kitchen?", ok: false, fix: "Is there a TV in the kitchen?" }
    ]
  }
};
