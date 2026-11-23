/* Lesson 9 · Where is it?
   Prepositions of place: in, on, under, next to, between (+ behind, in front of, near, opposite).
   Thing + is / are + place word + the + place: The book is on the table. Negatives (isn’t / aren’t),
   Where is…? / Where are…? and Is it…? with short answers. Recycles there is / are (lesson 2),
   ’s (lesson 4), present continuous (lesson 5) and present simple (lessons 7–8).
   Uzbek: ichida, ustida, tagida, yonida, orasida. Built for Monday 23 November 2026. */
window.LESSON = {
  n: 9,
  title: "Where is it?",
  slides: [
    { t: "cover", title: "Where <span class='cy'>is it?</span>", lead: "Prepositions of place: in, on, under, next to, between · Qayerda?", chips: [["Kitob stol ustida.", "peach"], ["Mushuk karavot tagida.", "mint"], ["Telefonim qayerda?", "skyb"]] },
    { t: "goals", items: [
      ["Say where things are", "The book is on the table.", "Kitob stol ustida."],
      ["Say where things are not", "My keys aren’t in my bag.", "Kalitlarim sumkamda emas."],
      ["Ask and answer “Where?”", "Where is my phone? It’s next to the TV.", "Telefonim qayerda? Televizor yonida."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: where is the pen?", sub: "The teacher puts a pen somewhere. Say where it is: first in Uzbek, then in English!",
      cards: [{ t: "in the bag", uz: "sumka ichida" }, { t: "on the desk", uz: "parta ustida" }, { t: "under the chair", uz: "stul tagida" }, { t: "next to the door", uz: "eshik yonida" }, { t: "between two books", uz: "ikki kitob orasida" }, { t: "in my hand", uz: "qo’limda" }] },

    /* ---------- WHEN ---------- */
    { t: "cols", eb: "When do we use it?", title: "Five little words", menu: "When do we use it?", cols: [
      { bg: "mint", label: "in · on", lc: "g", fs: 36, lines: ["The pen is <span class='ca'>in</span> the bag.", "The pen is <span class='ca'>on</span> the bag."], uz: "in = ichida · on = ustida" },
      { bg: "skyb", label: "under · next to", lc: "b", fs: 36, lines: ["The cat is <span class='ca'>under</span> the table.", "The cat is <span class='ca'>next to</span> the table."], uz: "under = tagida, ostida · next to = yonida" },
      { bg: "peach", label: "between", lc: "r", fs: 36, lines: ["The bank is <span class='ca'>between</span> the café and the shop."], uz: "between = orasida (ikki narsa orasida)" } ],
      notes: ["Uzbek: stol ustida (the word comes AFTER)", "English: on the table (the word comes FIRST)", "Where? = Qayerda?"] },
    { t: "formula", bg: "ink", eb: "The rule", title: "Thing + is / are + place word + the…", rows: [
      { chips: [["The book", "skyb"], ["is", "peach"], ["on", "mint"], ["the table.", "butter"]], uz: "Kitob stol ustida." },
      { chips: [["My shoes", "skyb"], ["are", "peach"], ["under", "mint"], ["the bed.", "butter"]], uz: "Oyoq kiyimlarim karavot tagida." },
      { chips: [["The cat", "skyb"], ["is", "peach"], ["between", "mint"], ["the two chairs.", "butter"]], uz: "Mushuk ikki stul orasida." } ],
      notes: ["one thing → is · many → are", "Never forget is / are!", "Usually “the”: on the table, in the bag"] },
    { t: "table", eb: "Five place words", title: "In, on, under, next to, between", head: ["Word", "Uzbek", "Example", "Uzbek"], rows: [
      ["<b class='ca'>in</b>", "ichida", "The keys are <b class='ca'>in</b> my bag.", "Kalitlar sumkamda."],
      ["<b class='ca'>on</b>", "ustida", "The phone is <b class='ca'>on</b> the sofa.", "Telefon divan ustida."],
      ["<b class='ca'>under</b>", "tagida, ostida", "The cat is <b class='ca'>under</b> the bed.", "Mushuk karavot tagida."],
      ["<b class='ca'>next to</b>", "yonida", "The bank is <b class='ca'>next to</b> the school.", "Bank maktab yonida."],
      ["<b class='ca'>between</b>", "orasida", "Aziz is <b class='ca'>between</b> Bobur and Lola.", "Aziz Bobur va Lola orasida."] ],
      notes: ["next TO: never “next Aziz”", "between A AND B: two things or people"] },
    { t: "examples", eb: "Positive", title: "Examples: where is it?", items: [
      ["The plov is <span class='ca'>on</span> the table.", "Palov stol ustida."],
      ["My phone is <span class='ca'>in</span> my pocket.", "Telefonim cho’ntagimda."],
      ["The cat is <span class='ca'>under</span> the chair.", "Mushuk stul tagida."],
      ["The bazaar is <span class='ca'>next to</span> the metro station.", "Bozor metro bekati yonida."],
      ["Madina is sitting <span class='ca'>between</span> Lola and Dilnoza.", "Madina Lola va Dilnoza orasida o’tiribdi."],
      ["The children are <span class='ca'>in</span> the garden.", "Bolalar bog’da."] ] },
    { t: "gaps", title: "In, on or under?", sub: "Look at the Uzbek word. Tap to check.", w: 220, fs: 36, rows: [
      ["The book is ___ the bag. (ichida)", "in"], ["The cup is ___ the table. (ustida)", "on"], ["The dog is ___ the car. (tagida)", "under"],
      ["My keys are ___ my pocket. (ichida)", "in"], ["The picture is ___ the wall. (devorda)", "on"], ["My shoes are ___ the bed. (tagida)", "under"] ] },
    { t: "gaps", title: "Next to or between?", sub: "One thing or two? Tap to check.", w: 240, fs: 36, rows: [
      ["The bank is ___ the school. (yonida)", "next to"], ["Aziz is ___ Bobur and Lola.", "between"], ["The café is ___ the bank and the shop.", "between"],
      ["Sit ___ me, please! (yonimda)", "next to"], ["The pharmacy is ___ the bazaar. (yonida)", "next to"], ["The letter B is ___ A and C.", "between"] ] },

    /* ---------- VOCABULARY ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "In my home", menu: "New words: in my home", items: [
      ["The books are on the <span class='ca'>shelf</span>.", "shelf = javon"],
      ["My clothes are in the <span class='ca'>wardrobe</span>.", "wardrobe = kiyim shkafi"],
      ["The cat is sleeping on the <span class='ca'>sofa</span>.", "sofa = divan"],
      ["The milk is in the <span class='ca'>fridge</span>.", "fridge = muzlatgich"],
      ["My phone is under the <span class='ca'>pillow</span>.", "pillow = yostiq"],
      ["There is a big <span class='ca'>carpet</span> on the <span class='ca'>floor</span>.", "carpet = gilam · floor = pol"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "In town", menu: "New words: in town", items: [
      ["The <span class='ca'>pharmacy</span> is next to the bank.", "pharmacy = dorixona"],
      ["The <span class='ca'>bus stop</span> is next to my house.", "bus stop = avtobus bekati"],
      ["There is a <span class='ca'>mosque</span> next to the bazaar.", "mosque = masjid"],
      ["The <span class='ca'>hotel</span> is next to the park.", "hotel = mehmonxona"],
      ["The <span class='ca'>bakery</span> is between the mosque and the school.", "bakery = novvoyxona (non do’koni)"],
      ["There are many trees in Amir Temur <span class='ca'>Square</span>.", "square = maydon"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Where are my things?", items: [
      { bg: "peach", w: "🔑", label: "keys = kalitlar", en: "My keys are in my bag.", uz: "Kalitlarim sumkamda." },
      { bg: "mint", w: "👓", label: "glasses = ko’zoynak", en: "Grandpa’s glasses are on the TV.", uz: "Bobomning ko’zoynagi televizor ustida." },
      { bg: "skyb", w: "🫖", label: "teapot = choynak", en: "The teapot is on the table.", uz: "Choynak stol ustida." },
      { bg: "butter", w: "🧸", label: "toys = o’yinchoqlar", en: "The baby’s toys are under the bed.", uz: "Chaqaloqning o’yinchoqlari karavot tagida." } ] },
    { t: "spot", bg: "sky", title: "Look around the room!", sub: "Pick a card. Finish the sentence about this room. The class says “Yes!” or “No!”", size: 46,
      cards: ["My bag is…", "The teacher is…", "I am sitting next to…", "My phone is…", "The board is…", "… is sitting between … and …"] },

    /* ---------- NEGATIVE ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "isn’t / aren’t + place word", rows: [
      { chips: [["My keys", "skyb"], ["aren’t", "peach"], ["in", "mint"], ["my bag.", "butter"]], uz: "Kalitlarim sumkamda emas." },
      { chips: [["The cat", "skyb"], ["isn’t", "peach"], ["on", "mint"], ["the sofa.", "butter"]], uz: "Mushuk divan ustida emas." },
      { chips: [["Lola", "skyb"], ["isn’t", "peach"], ["next to", "mint"], ["Madina.", "butter"]], uz: "Lola Madinaning yonida emas." } ],
      notes: ["is not = isn’t · are not = aren’t", "Uzbek: … emas (sumkamda emas)", "There isn’t a… = … yo’q (lesson 2)"] },
    { t: "examples", eb: "Negative", title: "Examples: no sentences", items: [
      ["My phone <span class='cn'>isn’t</span> in my bag.", "Telefonim sumkamda emas."],
      ["The keys <span class='cn'>aren’t</span> on the table.", "Kalitlar stol ustida emas."],
      ["The cat <span class='cn'>isn’t</span> under the bed. It’s on the sofa!", "Mushuk karavot tagida emas. U divan ustida!"],
      ["The bank <span class='cn'>isn’t</span> next to the school.", "Bank maktab yonida emas."],
      ["There <span class='cn'>isn’t</span> a pharmacy next to my house.", "Uyim yonida dorixona yo’q."],
      ["The children <span class='cn'>aren’t</span> in the garden. They’re in the house.", "Bolalar bog’da emas. Ular uyda."] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "Where is…? · Is it on…?", rows: [
      { chips: [["Where", "butter"], ["is", "peach"], ["my phone?", "skyb"]], uz: "Telefonim qayerda?" },
      { chips: [["Where", "butter"], ["are", "peach"], ["the keys?", "skyb"]], uz: "Kalitlar qayerda?" },
      { chips: [["Is", "peach"], ["the cat", "skyb"], ["under", "mint"], ["the bed?", "butter"]], uz: "Mushuk karavot tagidami?" } ],
      notes: ["Where is = Where’s", "Answer: It’s on the table. · They’re in the bag.", "one → is · many → are"] },
    { t: "cols", eb: "Short answers · Qisqa javoblar", title: "Yes, it is. No, they aren’t.", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 34, lines: ["<span class='cw'>Is</span> the book on the desk?", "<span class='cw'>Are</span> the keys in your bag?", "<span class='cw'>Is there</span> a bank next to the bazaar?"] },
      { bg: "mint", label: "Yes", lc: "g", fs: 34, lines: ["Yes, it <span class='ca'>is</span>.", "Yes, they <span class='ca'>are</span>.", "Yes, there <span class='ca'>is</span>."] },
      { bg: "peach", label: "No", lc: "r", fs: 34, lines: ["No, it <span class='cn'>isn’t</span>.", "No, they <span class='cn'>aren’t</span>.", "No, there <span class='cn'>isn’t</span>."] } ],
      notes: ["the book → it · the keys → they", "Never: “Yes, it’s.”"] },
    { t: "examples", eb: "Wh- questions", title: "Where? What?", menu: "Wh- questions", items: [
      ["<span class='cw'>Where</span> is my phone? — It’s on the sofa.", "Telefonim qayerda? — Divan ustida."],
      ["<span class='cw'>Where</span> are my shoes? — They’re under the bed.", "Oyoq kiyimlarim qayerda? — Karavot tagida."],
      ["<span class='cw'>Where</span> is the pharmacy? — It’s next to the bank.", "Dorixona qayerda? — Bank yonida."],
      ["<span class='cw'>Where</span> do you live? — I live in Chilonzor.", "Qayerda yashaysiz? — Chilonzorda yashayman."],
      ["<span class='cw'>Where</span> is Aziz sitting? — Between Bobur and Lola.", "Aziz qayerda o’tiribdi? — Bobur va Lola orasida."],
      ["<span class='cw'>What</span> is in your bag? — A book and a pen.", "Sumkangizda nima bor? — Kitob va ruchka."] ] },
    { t: "quad", eb: "Key words · Asosiy so’zlar", title: "Four more place words", items: [
      { bg: "peach", w: "<span style='font-size:76px'>behind</span>", label: "orqasida", en: "The car is behind the house.", uz: "Mashina uyning orqasida." },
      { bg: "mint", w: "<span style='font-size:58px;line-height:1.05;display:block'>in front<br>of</span>", label: "oldida", en: "Bobur is waiting in front of the school.", uz: "Bobur maktab oldida kutyapti." },
      { bg: "skyb", w: "<span style='font-size:84px'>near</span>", label: "yaqinida", en: "I live near the metro.", uz: "Men metro yaqinida yashayman." },
      { bg: "butter", w: "<span style='font-size:66px'>opposite</span>", label: "ro’parasida", en: "The bank is opposite the bazaar.", uz: "Bank bozorning ro’parasida." } ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Common mistakes", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 34, lines: ["The book <span class='cn'>on</span> the table.", "The cat is <span class='cn'>the bed under</span>.", "I sit <span class='cn'>next Aziz</span>.", "The picture is <span class='cn'>in</span> the wall."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 34, lines: ["The book <span class='ca'>is on</span> the table.", "The cat is <span class='ca'>under the bed</span>.", "I sit <span class='ca'>next to</span> Aziz.", "The picture is <span class='ca'>on</span> the wall."] } ],
      notes: ["Never forget is / are", "Uzbek: karavot tagida · English: under the bed (the word comes first!)", "next TO · between A AND B", "devorda → on the wall (not in)"] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "Is or are + the place word", sub: "Say the full sentence. Tap to check.", w: 270, fs: 34, rows: [
      ["My keys ___ the bag. (ichida)", "are in"], ["The cat ___ the sofa. (ustida)", "is on"], ["The shoes ___ the bed. (tagida)", "are under"],
      ["The bank ___ the school. (yonida)", "is next to"], ["Lola ___ Aziz and Madina. (orasida)", "is between"], ["The pictures ___ the wall. (devorda)", "are on"] ] },
    { t: "gaps", title: "Questions and answers", sub: "Where · Is · Are · isn’t · He’s… Tap to check.", w: 220, fs: 34, rows: [
      ["___ is my phone? — It’s on the sofa.", "Where"], ["___ the keys in your bag? — Yes, they are.", "Are"], ["Is the cat under the bed? — No, it ___.", "isn’t"],
      ["Where ___ my shoes? — They’re under the chair.", "are"], ["Is there a bank next to the bazaar? — Yes, there ___.", "is"], ["Where is Aziz? — ___ in the garden.", "He’s"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Kitob stol ustida.", "The book is on the table."],
      ["Mushuk karavot tagida.", "The cat is under the bed."],
      ["Bank maktab yonida.", "The bank is next to the school."],
      ["Telefonim sumkamda emas.", "My phone isn’t in my bag."],
      ["Kalitlarim qayerda?", "Where are my keys?"],
      ["Madina Lola va Aziz orasida o’tiribdi.", "Madina is sitting between Lola and Aziz."] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: negative, question, Where?", sub: "Say it. Tap to check.", fs: 34, rows: [
      ["The book is on the desk. → negative + question", "The book isn’t on the desk. · Is the book on the desk?"],
      ["The keys are in the car. → negative + question", "The keys aren’t in the car. · Are the keys in the car?"],
      ["The cat is under the table. → question", "Is the cat under the table?"],
      ["There is a pharmacy next to the bank. → question", "Is there a pharmacy next to the bank?"],
      ["The shoes are under the bed. → Where…?", "Where are the shoes?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["The phone on the sofa.", "The phone is on the sofa."],
      ["My keys is in my bag.", "My keys are in my bag."],
      ["The cat is the table under.", "The cat is under the table."],
      ["Sit next me, please.", "Sit next to me, please."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake: round 2", sub: "Harder ones! Tap to fix.", rows: [
      ["The picture is in the wall.", "The picture is on the wall."],
      ["Where my shoes are?", "Where are my shoes?"],
      ["The bank is between the café or the shop.", "The bank is between the café and the shop."],
      ["Is the book on the table? — Yes, it’s.", "Yes, it is."] ] },
    { t: "spot", bg: "sky", title: "My home", sub: "Pick a card. Finish the sentence about your home.", size: 48,
      cards: ["My bed is next to…", "In my bag there is…", "My phone is usually…", "On the wall in my room there is…", "My house is near…", "Under my bed there is…"] },
    { t: "spot", bg: "yel", title: "Hide and find!", sub: "Pairs. A hides a pen in the room. B asks: “Is it under the desk?” A answers: “No, it isn’t.” / “Yes, it is!” Then change!", size: 44,
      cards: [{ t: "under the desk", uz: "parta tagida" }, { t: "in the bag", uz: "sumka ichida" }, { t: "behind the door", uz: "eshik orqasida" }, { t: "next to the board", uz: "doska yonida" }, { t: "between two books", uz: "ikki kitob orasida" }, { t: "in your pocket", uz: "cho’ntagingizda" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say where things are: in, on, under, next to, between", "use is / are: The keys are in my bag.", "make negatives: It isn’t on the table.", "ask “Where is…?” and answer “It’s…”", "use behind, in front of, near, opposite", "use new words: shelf, wardrobe, fridge, pharmacy…"] },
    { t: "bye", chips: [["It’s on the table.", "peach"], ["They’re under the bed.", "mint"], ["Where is it?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "put your pen on your head", say: "The pen is on your head!" },
      { cue: "hide your phone under your book", say: "The phone is under the book!" },
      { cue: "put your hands in your pockets", say: "Your hands are in your pockets!" },
      { cue: "stand next to the door", say: "You are next to the door!" },
      { cue: "stand between two classmates", say: "You are between Aziz and Lola! (their names)" },
      { cue: "a cat under the table", say: "The cat is under the table!" },
      { cue: "look for your keys everywhere", say: "Where are my keys? Are they in my bag?" },
      { cue: "put a book on the chair", say: "The book is on the chair!" },
      { cue: "stand behind the teacher", say: "You are behind the teacher!" },
      { cue: "stand in front of the board", say: "You are in front of the board!" },
      { cue: "put your bag under your chair", say: "Your bag is under your chair!" },
      { cue: "put a pen between two books", say: "The pen is between the books!" },
      { cue: "put your phone in your bag", say: "Your phone is in your bag!" },
      { cue: "sleeping on the sofa (two chairs)", say: "You are sleeping on the sofa!" },
      { cue: "look for a cat: under the bed, behind the door", say: "Where is the cat? Is it under the bed?" },
      { cue: "put clothes in the wardrobe", say: "You are putting clothes in the wardrobe!" }
    ],
    board: [
      { cat: "Uzbek → English", qs: [["“ustida”", "on"], ["“tagida” · “ichida”", "under · in"], ["“orasida” · “yonida” · “orqasida”", "between · next to · behind"]] },
      { cat: "Is or are?", qs: [["My keys ___ in my bag.", "are"], ["The cat ___ under the bed.", "is"], ["Grandpa’s glasses ___ on the TV.", "are"]] },
      { cat: "In this room", qs: [["Where is the board?", "It’s on the wall. (any true)"], ["Where is your bag?", "It’s on / under / next to … (any true)"], ["Who are you sitting between?", "I’m sitting between … and … (any true)"]] },
      { cat: "Questions", qs: [["Make a question with Where: the keys", "Where are the keys?"], ["Short answer (no): Is the book on the desk?", "No, it isn’t."], ["Make a question: The pharmacy is next to the bank.", "Is the pharmacy next to the bank?"]] },
      { cat: "New words", qs: [["“divan” and “gilam”", "sofa · carpet"], ["“muzlatgich” and “javon”", "fridge · shelf"], ["“dorixona” and “avtobus bekati”", "pharmacy · bus stop"]] },
      { cat: "Fix it", qs: [["The book on the table.", "The book is on the table."], ["I sit next Aziz.", "I sit next to Aziz."], ["The cat is the bed under.", "The cat is under the bed."]] }
    ],
    wheel: [
      { name: "My room", tasks: ["Say where your bed is.", "Say 3 things on your table.", "Say what is on the wall in your room.", "Say what is under your bed."] },
      { name: "Classroom", tasks: ["Say who you are sitting next to.", "Say where the teacher is now.", "Say 3 things on the teacher’s desk.", "Say who is sitting between two classmates."] },
      { name: "My town", tasks: ["Say what is next to your house.", "Say what is near your school or work.", "Say where the bazaar is in your town.", "Say: “There is a … between the … and the …”"] },
      { name: "Questions", tasks: ["Ask a classmate: “Where is your phone?”", "Ask 2 “Is it…?” questions about a thing in the room.", "Ask the teacher: “Where do you live?”", "Ask a classmate: “What is in your bag?”"] },
      { name: "Hide and find", tasks: ["Close your eyes. The class hides a pen. Ask “Is it…?” and find it.", "Hide a key. Your team asks “Is it under…?”", "Say where 3 things are in your bag.", "Say where a thing is. The class finds it."] },
      { name: "Every day and now", tasks: ["Say: “I usually put my keys …, but now they are …”", "Say what you are doing now and who you are sitting next to.", "Say where you always have breakfast.", "Say where your phone usually is at night."] }
    ],
    build: [
      { w: ["The","book","is","on","the","table"], e: "." }, { w: ["My","keys","are","in","my","bag"], e: "." }, { w: ["Where","is","my","phone"], e: "?" },
      { w: ["The","cat","is","under","the","bed"], e: "." }, { w: ["Is","the","bank","next","to","the","school"], e: "?" },
      { w: ["Madina","is","sitting","between","Lola","and","Aziz"], e: "." }, { w: ["The","shoes","aren’t","under","the","chair"], e: "." },
      { w: ["Where","are","my","glasses"], e: "?" }, { w: ["There","is","a","pharmacy","next","to","the","bazaar"], e: "." },
      { w: ["The","car","is","behind","the","house"], e: "." }
    ],
    auction: [
      { s: "The plov is on the table.", ok: true },
      { s: "My keys is in my bag.", ok: false, fix: "My keys are in my bag." },
      { s: "Is the cat under the bed?", ok: true },
      { s: "The book on the shelf.", ok: false, fix: "The book is on the shelf." },
      { s: "The pharmacy is next to the bank.", ok: true },
      { s: "I am sitting next Bobur.", ok: false, fix: "I am sitting next to Bobur." },
      { s: "Where are my shoes?", ok: true },
      { s: "The picture is in the wall.", ok: false, fix: "The picture is on the wall." },
      { s: "Madina is sitting between Lola and Dilnoza.", ok: true },
      { s: "Where my phone is?", ok: false, fix: "Where is my phone?" },
      { s: "There is a big carpet on the floor.", ok: true },
      { s: "The cat is the sofa under.", ok: false, fix: "The cat is under the sofa." }
    ]
  }
};
