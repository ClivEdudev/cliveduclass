/* Beginner · Lesson 34 · In town
   Places in town (bank, shop, park, hospital, café, bus stop) and asking the way:
   “Excuse me, where is the bank?” · “Go straight. Turn left. It’s on the right.”
   Directions are commands (lesson 20); recycles there is (16), next to (17) and -ing (31–32).
   Built for Mon 15 Mar 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b34",
  n: 34,
  title: "In town",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 34", title: "In <span class='cy'>town</span>", lead: "Places and directions · Shaharda: joylar va yo’l so’rash",
      chips: [["Kechirasiz, bank qayerda?", "peach"], ["To’g’ri boring.", "mint"], ["Chapga buriling.", "skyb"]] },
    { t: "goals", items: [
      ["Name places in town", "bank, shop, park", "bank, do’kon, park"],
      ["Ask the way", "Excuse me, where is the bank?", "Kechirasiz, bank qayerda?"],
      ["Give directions", "Go straight. Turn left.", "To’g’ri boring. Chapga buriling."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: weather and clothes", sub: "Lesson 33! Pick a card. Ask a classmate. They answer. · Savol bering, javob bering.", size: 46,
      cards: ["What’s the weather like today?", "What are you wearing?", "Is it cold today?", "Are you wearing a coat?", "Is it raining now?", "What is the teacher wearing?"] },

    /* ---------- PLACES ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Places in town", menu: "New words: places", items: [
      ["This is a <span class='ca'>bank</span>.", "bank = bank"],
      ["The <span class='ca'>shop</span> is small.", "shop = do’kon"],
      ["The <span class='ca'>park</span> is big.", "park = park, bog’"],
      ["My mother works in a <span class='ca'>hospital</span>.", "hospital = kasalxona"],
      ["We are in a <span class='ca'>café</span>.", "café = kafe"],
      ["I’m at the <span class='ca'>bus stop</span>.", "bus stop = avtobus bekati"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Look and say", items: [
      { bg: "peach", w: "🏦", label: "a bank = bank", en: "There is a bank here.", uz: "Bu yerda bank bor." },
      { bg: "mint", w: "🛒", label: "a shop = do’kon", en: "The shop is open.", uz: "Do’kon ochiq." },
      { bg: "skyb", w: "🌳", label: "a park = park", en: "The children are in the park.", uz: "Bolalar parkda." },
      { bg: "butter", w: "🏥", label: "a hospital = kasalxona", en: "The hospital is big.", uz: "Kasalxona katta." } ] },

    /* ---------- DIRECTIONS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Directions", menu: "New words: directions", items: [
      ["<span class='ca'>Go straight</span>.", "go straight = to’g’ri boring"],
      ["<span class='ca'>Turn left</span>.", "turn left = chapga buriling"],
      ["<span class='ca'>Turn right</span>.", "turn right = o’ngga buriling"],
      ["It’s <span class='ca'>on the left</span>.", "on the left = chap tomonda"],
      ["It’s <span class='ca'>on the right</span>.", "on the right = o’ng tomonda"],
      ["Is there a bank <span class='ca'>near here</span>?", "near here = shu yaqinda"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Show me!", sub: "Say it and show it with your hand. · Ayting va qo’lingiz bilan ko’rsating.", items: [
      { bg: "mint", w: "⬆️", label: "go straight", en: "Go straight.", uz: "To’g’ri boring." },
      { bg: "peach", w: "⬅️", label: "turn left", en: "Turn left.", uz: "Chapga buriling." },
      { bg: "skyb", w: "➡️", label: "turn right", en: "Turn right.", uz: "O’ngga buriling." },
      { bg: "butter", w: "🏦⬅️", label: "on the left", en: "The bank is on the left.", uz: "Bank chap tomonda." } ] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "Directions = commands",
      sub: "Qoida: yo’l ko’rsatganda buyruq gap ishlatamiz (20-dars): gap <b>fe’l</b> bilan boshlanadi, “you” kerak emas. Ikki buyruqni <b>and</b> bilan ulaymiz.", rows: [
      { chips: [["Go", "peach"], ["straight.", "mint"]], uz: "To’g’ri boring." },
      { chips: [["Turn", "peach"], ["left.", "mint"]], uz: "Chapga buriling." },
      { chips: [["Go", "peach"], ["straight", "mint"], ["and", "butter"], ["turn", "peach"], ["right.", "mint"]], uz: "To’g’ri boring va o’ngga buriling." } ],
      notes: ["Turn left / Turn right: no “to”", "Don’t turn left! = Chapga burilmang!"] },
    { t: "formula", bg: "ink", eb: "Ask the way · Yo’l so’rash", title: "Where is …? · Is there … near here?",
      sub: "Qoida: so’rashdan oldin “Excuse me” deymiz. Joy oldida “the” bo’ladi: the bank. “Bormi?” = Is there…? (16-dars)", rows: [
      { chips: [["Excuse me,", "butter"], ["where is", "peach"], ["the bank?", "mint"]], uz: "Kechirasiz, bank qayerda?" },
      { chips: [["It’s", "skyb"], ["next to", "peach"], ["the park.", "mint"]], uz: "U park yonida." },
      { chips: [["Is there", "peach"], ["a café", "mint"], ["near here?", "butter"]], uz: "Shu yaqinda kafe bormi?" },
      { chips: [["Yes, there is.", "mint"], ["It’s on the right.", "skyb"]], uz: "Ha, bor. U o’ng tomonda." } ],
      notes: ["Where is = Where’s", "Thank you! · You’re welcome!"] },
    { t: "examples", eb: "Dialogue · Suhbat", title: "Excuse me, where is the bank?", menu: "Dialogue", items: [
      ["A: <span class='cw'>Excuse me, where is</span> the bank?", "A: Kechirasiz, bank qayerda?"],
      ["B: <span class='ca'>Go straight</span> and <span class='ca'>turn left</span>.", "B: To’g’ri boring va chapga buriling."],
      ["B: The bank is <span class='ca'>on the right</span>.", "B: Bank o’ng tomonda."],
      ["A: Is it next to the park?", "A: U park yonidami?"],
      ["B: Yes, it is.", "B: Ha."],
      ["A: Thank you! B: You’re welcome!", "A: Rahmat! B: Arzimaydi!"] ] },
    { t: "gaps", title: "Look and say", sub: "Write the word. Tap to check.", w: 230, fs: 42, rows: [
      ["⬅️ Turn ___.", "left"], ["➡️ Turn ___.", "right"], ["⬆️ Go ___.", "straight"],
      ["🏦 Where is the ___?", "bank"], ["🛒 Where is the ___?", "shop"], ["🏥 Where is the ___?", "hospital"] ] },
    { t: "gaps", title: "Ask the way", sub: "Write one word. Tap to check.", w: 200, fs: 40, rows: [
      ["___ me, where is the park?", "Excuse"], ["Where ___ the café?", "is"], ["___ there a bank near here?", "Is"],
      ["The shop is ___ to the bank.", "next"], ["The bus stop is ___ the right.", "on"], ["Go straight and ___ left.", "turn"] ] },

    /* ---------- MY TOWN ---------- */
    { t: "examples", eb: "My town · Mening shahrim", title: "In my town", menu: "In my town", items: [
      ["<span class='ca'>There is</span> a big park in Tashkent.", "Toshkentda katta park bor."],
      ["The café is <span class='ca'>next to</span> the shop.", "Kafe do’kon yonida."],
      ["<span class='cn'>There isn’t</span> a hospital near here.", "Shu yaqinda kasalxona yo’q."],
      ["My father works in a bank.", "Otam bankda ishlaydi."],
      ["Lola <span class='ca'>is waiting</span> at the bus stop.", "Lola bekatda kutyapti."],
      ["I<span class='ca'>’m going</span> to the shop.", "Men do’konga ketyapman."] ] },

    /* ---------- CAREFUL ---------- */
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["Where is <span class='cn'>bank</span>?", "Turn <span class='cn'>to</span> left.", "It’s <span class='cn'>in</span> the left.", "<span class='cn'>Is a</span> bank near here?"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["Where is <span class='ca'>the</span> bank?", "Turn left.", "It’s <span class='ca'>on</span> the left.", "<span class='ca'>Is there a</span> bank near here?"] },
      { bg: "butter", label: "Why?", fs: 34, lines: ["the bank · on the left"], uz: "Joy nomi oldida “the”. Turn left / turn right da “to” yo’q. Chap/o’ng tomonda = on the left / on the right. “Bormi?” = Is there…?" } ] },

    /* ---------- QUIZZES ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", w: 680, rows: [
      ["Kechirasiz, bank qayerda?", "Excuse me, where is the bank?"],
      ["Chapga buriling.", "Turn left."],
      ["To’g’ri boring.", "Go straight."],
      ["Kafe o’ng tomonda.", "The café is on the right."],
      ["Shu yaqinda do’kon bormi?", "Is there a shop near here?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["Where is park?", "Where is the park?"],
      ["Turn to right.", "Turn right."],
      ["The shop is in the left.", "The shop is on the left."],
      ["Is a café near here?", "Is there a café near here?"] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "sky", title: "My town", sub: "Pick a card. Finish the sentence about your town or street. · Shahringiz haqida gapiring.", size: 46,
      cards: ["Near my house there is…", "There isn’t a … near my house.", "Is there a park near your house?", "Is there a bank near your house?", "I’m going to the …", "The bus stop is next to…"] },
    { t: "spot", bg: "yel", title: "Ask the way!", sub: "Pairs. A: “Excuse me, where is the …?” B reads the card: “Go straight and turn left.” A: “Thank you!” · Juftlikda yo’l so’rang.", size: 50,
      cards: [{ t: "🏦 ⬆️ ⬅️", uz: "bank: to’g’ri, keyin chapga" }, { t: "🛒 ➡️", uz: "do’kon: o’ngga" }, { t: "🌳 ⬆️", uz: "park: to’g’ri" }, { t: "🏥 ⬅️ ⬆️", uz: "kasalxona: chapga, keyin to’g’ri" }, { t: "☕ ⬆️ ➡️", uz: "kafe: to’g’ri, keyin o’ngga" }, { t: "🚌 ⬅️", uz: "bekat: chapga" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["name places: bank, shop, park, hospital…", "ask: Excuse me, where is the …?", "ask: Is there a … near here?", "say: Go straight. Turn left. Turn right.", "say: It’s on the left / on the right.", "say: It’s next to the park."] },
    { t: "bye", chips: [["Where is the bank?", "peach"], ["Go straight.", "mint"], ["Turn left.", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "go straight · to’g’ri yuring", say: "Go straight!" }, { cue: "turn left · chapga buriling", say: "Turn left!" },
      { cue: "turn right · o’ngga buriling", say: "Turn right!" }, { cue: "money from a bank · bankdan pul oling", say: "You are at the bank!" },
      { cue: "shopping · do’konda narsa oling", say: "You are at the shop!" }, { cue: "walking in a park · parkda sayr qiling", say: "You are in the park!" },
      { cue: "see a doctor · shifokorga boring", say: "You are at the hospital!" }, { cue: "drinking coffee · kofe iching", say: "You are in a café!" },
      { cue: "waiting for the bus · avtobus kuting", say: "You are at the bus stop!" }, { cue: "asking the way · yo’l so’rang", say: "Excuse me, where is the bank?" },
      { cue: "go straight and turn left", say: "Go straight and turn left!" }, { cue: "go straight and turn right", say: "Go straight and turn right!" }
    ],
    board: [
      { cat: "Places", qs: [["🏦 What is it?", "a bank"], ["🏥 What is it?", "a hospital"], ["Name 3 places in town.", "bank, shop, park, hospital, café, bus stop (any 3)"]] },
      { cat: "Directions", qs: [["⬅️ Say it.", "Turn left."], ["⬆️ Say it.", "Go straight."], ["⬆️ then ➡️ Say it.", "Go straight and turn right."]] },
      { cat: "Ask the way", qs: [["Ask about the park.", "Excuse me, where is the park?"], ["“Shu yaqinda bank bormi?”", "Is there a bank near here?"], ["Answer: Thank you!", "You’re welcome!"]] },
      { cat: "Where?", qs: [["“chap tomonda”", "on the left"], ["“o’ng tomonda”", "on the right"], ["“park yonida”", "next to the park"]] },
      { cat: "Translate", qs: [["“do’kon”", "shop"], ["“avtobus bekati”", "bus stop"], ["“Men do’konga ketyapman.”", "I’m going to the shop."]] },
      { cat: "Fix it", qs: [["Where is bank?", "Where is the bank?"], ["Turn to left.", "Turn left."], ["It’s in the right.", "It’s on the right."]] }
    ],
    wheel: [
      { name: "Places", tasks: ["Say 3 places in town.", "Spell: bank.", "Say in English: kasalxona.", "Say in English: avtobus bekati."] },
      { name: "Directions", tasks: ["Say: Go straight.", "Say and show: Turn left.", "Say and show: Turn right.", "Say: Go straight and turn left."] },
      { name: "Ask", tasks: ["Ask: Where is the bank?", "Ask: Is there a café near here?", "Ask the teacher the way to the park.", "Say: Excuse me! … Thank you!"] },
      { name: "Classroom", tasks: ["Tell a classmate the way to the door.", "Tell a classmate the way to the board.", "Where is the window? On the left or on the right?", "What is next to you?"] },
      { name: "My town", tasks: ["Say: Near my house there is …", "Is there a park near your house?", "Say: There isn’t a … near my house.", "Where is the bus stop near your house?"] },
      { name: "Mixed", tasks: ["Say: I’m going to the shop.", "Say: It’s cold. I’m going to the café.", "Ask: Where are you going?", "Say: My mother works in a …"] }
    ],
    build: [
      { w: ["Where", "is", "the", "bank"], e: "?" }, { w: ["The", "bank", "is", "on", "the", "left"], e: "." },
      { w: ["Turn", "left", "here"], e: "." }, { w: ["It’s", "on", "the", "right"], e: "." },
      { w: ["Is", "there", "a", "café", "near", "here"], e: "?" }, { w: ["The", "shop", "is", "next", "to", "the", "park"], e: "." },
      { w: ["Excuse", "me,", "where", "is", "the", "park"], e: "?" }, { w: ["Go", "straight", "and", "turn", "right"], e: "." }
    ],
    auction: [
      { s: "Excuse me, where is the bank?", ok: true },
      { s: "Where is hospital?", ok: false, fix: "Where is the hospital?" },
      { s: "Go straight and turn left.", ok: true },
      { s: "Turn to right.", ok: false, fix: "Turn right." },
      { s: "The café is on the left.", ok: true },
      { s: "The shop is in the right.", ok: false, fix: "The shop is on the right." },
      { s: "Is a bank near here?", ok: false, fix: "Is there a bank near here?" },
      { s: "The bus stop is next to the park.", ok: true },
      { s: "There is a big park in Tashkent.", ok: true },
      { s: "I’m go to the shop.", ok: false, fix: "I’m going to the shop." }
    ]
  }
};
