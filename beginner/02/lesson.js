/* Beginner · Lesson 2 · The alphabet
   The 26 letters A to Z and how to say them (tricky for Uzbek speakers: A, E, I, G, J, H, R, Y, W),
   spelling names and words (How do you spell it? · H-E-double L-O), capital letters (I, names, cities).
   Recycles lesson 1: hello, What’s your name?, My name is…, numbers 1–10.
   Built for Monday 23 November 2026. */
window.LESSON = {
  id: "b2",
  n: 2,
  title: "The alphabet",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 2", title: "The <span class='cy'>alphabet</span>", lead: "A to Z · How do you spell it? · Ingliz alifbosi", chips: [["A, B, C… Z", "peach"], ["Ismingiz qanday yoziladi?", "mint"], ["L-O-L-A", "skyb"]] },
    { t: "goals", items: [
      ["Say the letters A to Z", "A, B, C, D… Z", "A dan Z gacha harflarni aytish"],
      ["Spell your name", "My name is Lola. L-O-L-A.", "Mening ismim Lola. L-O-L-A."],
      ["Ask: How do you spell it?", "How do you spell Tashkent?", "Toshkent so’zi qanday yoziladi?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: lesson 1", sub: "Pick a card. Say it to a classmate. Your classmate answers. · Kartani tanlang, sherigingizga ayting.",
      cards: [{ t: "Hello!", uz: "Salom!" }, { t: "What’s your name?", uz: "Ismingiz nima?" }, { t: "How are you?", uz: "Qalaysiz?" }, { t: "Nice to meet you!", uz: "Tanishganimdan xursandman!" }, { t: "1, 2, 3… 10", uz: "1 dan 10 gacha sanang" }, { t: "Goodbye!", uz: "Xayr!" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Letters and words", menu: "New words", items: [
      ["A, B, C… Z = the <span class='ca'>alphabet</span>", "alphabet = alifbo"],
      ["<span class='ca'>letter</span>: A · B · C", "letter = harf"],
      ["<span class='ca'>word</span>: hello · name · plov", "word = so’z"],
      ["<span class='ca'>capital letter</span>: A · L · T", "capital letter = bosh (katta) harf"],
      ["<span class='ca'>small letter</span>: a · l · t", "small letter = kichik harf"],
      ["<span class='ca'>spell</span>: L-O-L-A", "spell = harfma-harf aytmoq"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Useful words in class", items: [
      { bg: "peach", w: "❓", label: "How do you spell…? = … qanday yoziladi?", en: "How do you spell it?", uz: "Bu qanday yoziladi?" },
      { bg: "mint", w: "👯", label: "double = ikkita (qo’sh)", en: "hello: H-E-double L-O", uz: "LL = double L" },
      { bg: "skyb", w: "🔁", label: "again = yana bir marta", en: "Sorry? Again, please.", uz: "Kechirasiz? Yana bir marta, iltimos." },
      { bg: "butter", w: "🐢", label: "slowly = sekin", en: "Slowly, please.", uz: "Sekinroq, iltimos." } ] },

    /* ---------- THE ALPHABET ---------- */
    { t: "cols", eb: "The English alphabet · Ingliz alifbosi", title: "26 letters: capital and small", menu: "The alphabet A–Z", cols: [
      { bg: "peach", label: "A – I", lc: "r", fs: 52, lines: ["Aa Bb Cc", "Dd Ee Ff", "Gg Hh Ii"] },
      { bg: "mint", label: "J – R", lc: "g", fs: 52, lines: ["Jj Kk Ll", "Mm Nn Oo", "Pp Qq Rr"] },
      { bg: "skyb", label: "S – Z", lc: "b", fs: 52, lines: ["Ss Tt Uu", "Vv Ww Xx", "Yy Zz"] } ],
      notes: ["Ingliz alifbosida 26 ta harf bor.", "O’zbek alifbosida C va W harflari yo’q.", "Har bir harfning katta va kichik shakli bor: A a"] },
    { t: "table", eb: "Say the letters · Harflarni aytamiz", title: "Letters with the same sound", menu: "How to say the letters", head: ["Sound · Tovush", "Letters · Harflar", "O’zbekcha o’qilishi"], rows: [
      ["<b class='ca'>ey</b>", "A H J K", "ey · eych · jey · key"],
      ["<b class='ca'>i</b>", "B C D E G P T V", "bi · si · di · i · ji · pi · ti · vi"],
      ["<b class='ca'>e</b>", "F L M N S X Z", "ef · el · em · en · es · eks · zed"],
      ["<b class='ca'>ay</b>", "I Y", "ay · uay"],
      ["<b class='ca'>ou</b>", "O", "ou"],
      ["<b class='ca'>yu</b>", "Q U W", "kyu · yu · dabl-yu"],
      ["<b class='ca'>a</b>", "R", "a (uzun a)"] ],
      notes: ["Inglizcha harf nomi o’zbekcha emas: E = “i”, I = “ay”", "Z = zed (Britaniya) · zi (Amerika)"] },
    { t: "spot", bg: "sky", title: "Tricky letters!", sub: "Teacher taps a card. The class says the letter in English. · Qiyin harflar: inglizcha ayting.", size: 120,
      cards: [{ t: "E", uz: "“i”" }, { t: "I", uz: "“ay”" }, { t: "A", uz: "“ey”" }, { t: "G", uz: "“ji”" }, { t: "J", uz: "“jey”" }, { t: "R", uz: "“a”" }] },

    /* ---------- SPELLING ---------- */
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "How do you spell it?", rows: [
      { chips: [["How do you spell", "skyb"], ["your name?", "peach"]], uz: "Ismingiz qanday yoziladi? (harfma-harf ayting)" },
      { chips: [["My name is", "skyb"], ["Aziz.", "mint"], ["A-Z-I-Z.", "butter"]], uz: "Mening ismim Aziz. A-Z-I-Z (ey-zed-ay-zed)." },
      { chips: [["hello:", "skyb"], ["H-E-", "peach"], ["double L", "mint"], ["-O", "butter"]], uz: "Ikkita bir xil harf = double: LL = double L." } ],
      notes: ["spell = harfma-harf aytmoq", "Tushunmasangiz: Sorry? Again, please.", "Tez bo’lsa: Slowly, please."] },
    { t: "cols", eb: "Capital letters · Bosh harflar", title: "When do we use a capital letter?", menu: "Capital letters", cols: [
      { bg: "mint", label: "Names · Ismlar", lc: "g", fs: 44, lines: ["Aziz", "Lola", "Madina"], uz: "Odamlarning ismi doim bosh harf bilan yoziladi." },
      { bg: "skyb", label: "Cities · Shaharlar", lc: "b", fs: 44, lines: ["Tashkent", "Samarkand", "Bukhara"], uz: "Shahar nomlari ham bosh harf bilan yoziladi." },
      { bg: "peach", label: "I + first word", lc: "r", fs: 44, lines: ["<span class='ca'>I</span> am Bobur.", "<span class='ca'>H</span>ello!", "<span class='ca'>M</span>y name is…"], uz: "“I” (men) doim katta harf. Gapning birinchi so’zi ham katta harf bilan." } ] },
    { t: "examples", eb: "A short dialogue", title: "What’s your name? How do you spell it?", menu: "Dialogue", items: [
      ["A: <span class='cw'>What’s</span> your name?", "A: Ismingiz nima?"],
      ["B: My name is Dilnoza.", "B: Mening ismim Dilnoza."],
      ["A: <span class='cw'>How do you spell</span> it?", "A: Qanday yoziladi?"],
      ["B: <span class='ca'>D-I-L-N-O-Z-A</span>.", "B: di-ay-el-en-ou-zed-ey"],
      ["A: Sorry? <span class='ca'>Slowly</span>, please.", "A: Kechirasiz? Sekinroq, iltimos."],
      ["A: Thank you, Dilnoza!", "A: Rahmat, Dilnoza!"] ] },
    { t: "examples", eb: "Spell it", title: "Cities and words", items: [
      ["<span class='ca'>Tashkent</span>: T-A-S-H-K-E-N-T", "Toshkent"],
      ["<span class='ca'>Samarkand</span>: S-A-M-A-R-K-A-N-D", "Samarqand (inglizchada k)"],
      ["<span class='ca'>Bukhara</span>: B-U-K-H-A-R-A", "Buxoro (inglizchada kh)"],
      ["<span class='ca'>Khiva</span>: K-H-I-V-A", "Xiva"],
      ["<span class='ca'>hello</span>: H-E-double L-O", "salom"],
      ["<span class='ca'>plov</span>: P-L-O-V", "palov"] ] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "What letter comes next?", sub: "Say the letter in English. Tap to check. · Keyingi harf qaysi?", w: 160, fs: 46, rows: [
      ["A, B, C, ___", "D"], ["H, I, J, ___", "K"], ["L, M, N, ___", "O"],
      ["P, Q, R, ___", "S"], ["T, U, V, ___", "W"], ["W, X, Y, ___", "Z"] ] },
    { t: "gaps", title: "Which letter is missing?", sub: "Say the letter. Tap to check. · Qaysi harf tushib qolgan?", w: 160, fs: 40, rows: [
      ["hel___o (salom)", "l"], ["n___me (ism)", "a"], ["go___dbye (xayr)", "o"],
      ["Samar___and", "k"], ["alpha___et (alifbo)", "b"], ["ple___se (iltimos)", "a"] ] },
    { t: "gaps", title: "Capital or small?", sub: "Write it right. Tap to check. · Katta yoki kichik harf?", w: 260, fs: 38, rows: [
      ["___ am Bobur. (i / I)", "I"], ["My name is ___. (madina / Madina)", "Madina"], ["___ morning! (good / Good)", "Good"],
      ["Hello, ___! (lola / Lola)", "Lola"], ["Good evening, ___! (dilnoza / Dilnoza)", "Dilnoza"], ["Nice to meet you, ___. (aziz / Aziz)", "Aziz"] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 40, lines: ["<span class='cn'>i</span> am Aziz.", "My name is <span class='cn'>lola</span>.", "<span class='cn'>How you spell</span> it?", "<span class='cn'>Samarqand</span>"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 40, lines: ["<span class='ca'>I</span> am Aziz.", "My name is <span class='ca'>Lola</span>.", "<span class='ca'>How do you spell</span> it?", "<span class='ca'>Samarkand</span>"] },
      { bg: "butter", label: "Why? · Nega?", fs: 30, lines: ["“I” doim katta harf.", "Ism doim katta harf bilan.", "“do” ni unutmang!", "Inglizchada q emas, k."] } ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Ismingiz qanday yoziladi?", "How do you spell your name?"],
      ["Mening ismim Lola. L-O-L-A.", "My name is Lola. L-O-L-A."],
      ["Kechirasiz? Yana bir marta, iltimos.", "Sorry? Again, please."],
      ["Sekinroq, iltimos.", "Slowly, please."],
      ["harf · so’z · alifbo", "letter · word · alphabet"] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: spell it!", sub: "Say the letters. Tap to check.", rows: [
      ["Aziz", "A-Z-I-Z"],
      ["Madina", "M-A-D-I-N-A"],
      ["Bobur", "B-O-B-U-R"],
      ["goodbye", "G-O-O-D-B-Y-E (double O)"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["i am Lola.", "I am Lola."],
      ["How you spell it?", "How do you spell it?"],
      ["My name is madina.", "My name is Madina."],
      ["hello: H-E-L-O", "hello: H-E-L-L-O (double L)"] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "sky", title: "Spell it!", sub: "Pick a card. Spell it slowly. The class writes it. · Harfma-harf ayting, sinf yozadi.", size: 56,
      cards: [{ t: "your name", uz: "ismingiz" }, "hello", "Tashkent", "goodbye", "plov", "Samarkand"] },
    { t: "spot", bg: "yel", title: "Pairs: what’s your name?", sub: "A: What’s your name? How do you spell it? · B: My name is… B-O-B-U-R. Then change. · Juftlikda gaplashing.", size: 50,
      cards: [{ t: "What’s your name?", uz: "Ismingiz nima?" }, { t: "How do you spell it?", uz: "Qanday yoziladi?" }, { t: "Sorry? Again, please.", uz: "Yana bir marta, iltimos." }, { t: "Slowly, please.", uz: "Sekinroq, iltimos." }, { t: "Thank you!", uz: "Rahmat!" }, { t: "Nice to meet you!", uz: "Tanishganimdan xursandman!" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say the alphabet from A to Z", "say tricky letters: E, I, G, J, R", "spell my name", "ask “How do you spell it?”", "use capital letters: I, names, cities", "say “Again, please.” and “Slowly, please.”"] },
    { t: "bye", chips: [["A, B, C… Z", "peach"], ["How do you spell it?", "mint"], ["Again, please!", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "make a big T with your arms", say: "T!" }, { cue: "make an O with your hands", say: "O!" },
      { cue: "make a Y with your arms up", say: "Y!" }, { cue: "make an X with your arms", say: "X!" },
      { cue: "make an L with your hand", say: "L!" }, { cue: "write C in the air", say: "C!" },
      { cue: "write E in the air", say: "E! (“i”)" }, { cue: "write I in the air", say: "I! (“ay”)" },
      { cue: "write H in the air", say: "H! (“eych”)" }, { cue: "write LOLA in the air, slowly", say: "L-O-L-A! Lola!" },
      { cue: "hand on your ear: you can’t hear", say: "Sorry? Again, please." }, { cue: "move your hand down, slowly", say: "Slowly, please." }
    ],
    board: [
      { cat: "Letters", qs: [["What comes after A?", "B"], ["What comes after M?", "N"], ["Say the last 3 letters.", "X, Y, Z"]] },
      { cat: "Say it", qs: [["Say: A and E.", "ey · i"], ["Say: G and J.", "ji · jey"], ["Say: H, R and Y.", "eych · a · uay"]] },
      { cat: "Spell it", qs: [["Spell: Ali.", "A-L-I"], ["Spell: name.", "N-A-M-E"], ["Spell: hello.", "H-E-double L-O"]] },
      { cat: "Capital letters", qs: [["Fix it: tashkent", "Tashkent"], ["Fix it: i am Aziz.", "I am Aziz."], ["Fix it: my name is lola.", "My name is Lola."]] },
      { cat: "In English", qs: [["“Qanday yoziladi?”", "How do you spell it?"], ["“Yana bir marta, iltimos.”", "Again, please."], ["“harf” and “so’z”", "letter · word"]] },
      { cat: "Lesson 1", qs: [["Answer: How are you?", "I’m fine, thank you."], ["Count from 6 to 10.", "six, seven, eight, nine, ten"], ["Answer: Nice to meet you!", "Nice to meet you, too!"]] }
    ],
    wheel: [
      { name: "Letters", tasks: ["Say A to G.", "Say H to N.", "Say O to U.", "Say V to Z."] },
      { name: "My name", tasks: ["Spell your name.", "Say your name and spell it.", "Ask a classmate: How do you spell your name?", "Spell the teacher’s name."] },
      { name: "Cities", tasks: ["Spell: Tashkent.", "Spell: Samarkand.", "Spell: Bukhara.", "Spell: Khiva."] },
      { name: "Words", tasks: ["Spell: hello.", "Spell: goodbye.", "Spell: please.", "Spell: sorry."] },
      { name: "Tricky letters", tasks: ["Say: E and I.", "Say: G and J.", "Say: A and R.", "Say: H, Y and W."] },
      { name: "Lesson 1", tasks: ["Say hello to the class.", "Ask a classmate: How are you?", "Count from 1 to 10.", "Say goodbye two ways."] }
    ],
    build: [
      { w: ["How","do","you","spell","it"], e: "?" }, { w: ["How","do","you","spell","your","name"], e: "?" },
      { w: ["My","name","is","Madina"], e: "." }, { w: ["What’s","your","name"], e: "?" },
      { w: ["How","do","you","spell","Tashkent"], e: "?" }, { w: ["Nice","to","meet","you,","Bobur"], e: "!" },
      { w: ["Sorry?","Again,","please"], e: "." }, { w: ["Good","morning,","Dilnoza"], e: "!" }
    ],
    auction: [
      { s: "My name is lola.", ok: false, fix: "My name is Lola." },
      { s: "How do you spell it?", ok: true },
      { s: "i am Aziz.", ok: false, fix: "I am Aziz." },
      { s: "hello: H-E-L-L-O", ok: true },
      { s: "How you spell your name?", ok: false, fix: "How do you spell your name?" },
      { s: "Bobur: B-O-B-U-R", ok: true },
      { s: "Tashkent: T-A-S-K-E-N-T", ok: false, fix: "Tashkent: T-A-S-H-K-E-N-T" },
      { s: "Sorry? Again, please.", ok: true },
      { s: "Nice to meet you, madina!", ok: false, fix: "Nice to meet you, Madina!" },
      { s: "Samarkand: S-A-M-A-R-K-A-N-D", ok: true }
    ]
  }
};
