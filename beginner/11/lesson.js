/* Beginner · Lesson 11 · My family
   Teaches: family words (mother, father, parents, brother, sister, grandmother, grandfather,
   grandparents, son, daughter, family) and my / your: This is my sister. · Who is this? ·
   Is this your brother? Yes, it is.
   Recycles: to be (lessons 7–10), jobs, from + city, plurals, numbers 1–20.
   Built for Thu 24 Dec 2026 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b11",
  n: 11,
  title: "My family",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 11", title: "My <span class='cy'>family</span>", lead: "Family words · my, your · Mening oilam",
      chips: [["Bu mening oilam.", "peach"], ["Bu kim?", "mint"], ["Bu sizning akangizmi?", "skyb"]] },
    { t: "goals", items: [
      ["Say family words", "mother, father, sister", "ona, ota, opa / singil"],
      ["Use my and your", "This is my brother.", "Bu mening akam."],
      ["Ask about people", "Who is this?", "Bu kim?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: yes or no?", sub: "Teacher asks. Answer: “Yes, I am.” or “No, I’m not.” (Lesson 10)", size: 44,
      cards: [{ t: "Are you a student?", uz: "Siz talabamisiz?" }, { t: "Are you from Tashkent?", uz: "Siz Toshkentdanmisiz?" }, { t: "Are you 14?", uz: "Siz 14 yoshdamisiz?" },
              { t: "Are you a doctor?", uz: "Siz shifokormisiz?" }, { t: "Are you tired?", uz: "Charchadingizmi?" }, { t: "Is Bobur a teacher?", uz: "Bobur o’qituvchimi? (Yes, he is. / No, he isn’t.)" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "My family", menu: "New words: my family", items: [
      ["This is my <span class='ca'>family</span>.", "family = oila"],
      ["This is my <span class='ca'>mother</span>.", "mother = ona (mum = oyi)"],
      ["This is my <span class='ca'>father</span>.", "father = ota (dad = dada)"],
      ["My <span class='ca'>parents</span> are teachers.", "parents = ota-ona"],
      ["My <span class='ca'>brother</span> is a student.", "brother = aka yoki uka"],
      ["My <span class='ca'>sister</span> is a doctor.", "sister = opa yoki singil"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "More family words", menu: "New words: more family", items: [
      ["This is my <span class='ca'>grandmother</span>.", "grandmother = buvi"],
      ["My <span class='ca'>grandfather</span> is from Bukhara.", "grandfather = bobo"],
      ["My <span class='ca'>grandparents</span> are from Samarkand.", "grandparents = bobo va buvi"],
      ["Aziz is my <span class='ca'>son</span>.", "son = o’g’il"],
      ["Lola is my <span class='ca'>daughter</span>.", "daughter = qiz (farzand)"],
      ["Madina is my <span class='ca'>friend</span>.", "friend = do’st (Lesson 7)"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Who is this?", items: [
      { bg: "peach", w: "👩", label: "mother = ona", en: "This is my mother.", uz: "Bu mening onam." },
      { bg: "mint", w: "👨", label: "father = ota", en: "This is my father.", uz: "Bu mening otam." },
      { bg: "skyb", w: "👦", label: "brother = uka", en: "This is my brother.", uz: "Bu mening ukam." },
      { bg: "butter", w: "👧", label: "sister = singil", en: "This is my sister.", uz: "Bu mening singlim." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "My and your", menu: "My and your", cols: [
      { bg: "mint", label: "I → my", lc: "g", fs: 44, lines: ["I am Aziz.", "<span class='ca'>my</span> mother", "<span class='ca'>my</span> book"], uz: "my = mening. Men → mening onam, mening kitobim." },
      { bg: "skyb", label: "you → your", lc: "b", fs: 44, lines: ["You are Lola.", "<span class='ca'>your</span> mother", "<span class='ca'>your</span> book"], uz: "your = sizning / sening. Siz → sizning onangiz, sizning kitobingiz." },
      { bg: "butter", label: "Uzbek", fs: 40, lines: ["onam = <span class='ca'>my</span> mother", "onangiz = <span class='ca'>your</span> mother"], uz: "O’zbekchada so’z oxiriga qo’shimcha qo’shamiz (-m, -ngiz). Inglizchada my / your so’zdan OLDIN keladi." } ],
      notes: ["my / your never change: my brother, my brothers", "my = mening · your = sizning / sening"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "This is + my / your + family word", rows: [
      { chips: [["This", "skyb"], ["is", "peach"], ["my", "mint"], ["sister.", "butter"]], uz: "Bu mening singlim." },
      { chips: [["This", "skyb"], ["is", "peach"], ["your", "mint"], ["book.", "butter"]], uz: "Bu sizning kitobingiz." },
      { chips: [["My", "mint"], ["brother", "butter"], ["is", "peach"], ["a doctor.", "skyb"]], uz: "Akam shifokor." } ],
      notes: ["This is = Bu (“is” ni unutmang!)", "Who is this? = Bu kim?"] },
    { t: "examples", eb: "My · Mening", title: "Examples with my", items: [
      ["This is <span class='ca'>my</span> mother.", "Bu mening onam."],
      ["This is <span class='ca'>my</span> father. He is a driver.", "Bu mening otam. U haydovchi."],
      ["<span class='ca'>My</span> sister is 12.", "Singlim 12 yoshda."],
      ["<span class='ca'>My</span> brothers are students.", "Akalarim talaba."],
      ["<span class='ca'>My</span> grandmother is from Khiva.", "Buvim Xivadan."],
      ["<span class='ca'>My</span> parents are teachers.", "Ota-onam o’qituvchi."] ] },
    { t: "examples", eb: "Your · Sizning", title: "Examples with your", items: [
      ["<span class='ca'>Your</span> sister is a doctor.", "Opangiz shifokor."],
      ["<span class='ca'>Your</span> father is from Bukhara.", "Otangiz Buxorodan."],
      ["<span class='cw'>Is</span> this <span class='ca'>your</span> mother?", "Bu sizning onangizmi?"],
      ["<span class='cw'>Is</span> this <span class='ca'>your</span> bag?", "Bu sizning sumkangizmi?"],
      ["<span class='cw'>Are</span> <span class='ca'>your</span> parents doctors?", "Ota-onangiz shifokormi?"],
      ["<span class='ca'>Your</span> grandfather is a driver.", "Bobongiz haydovchi."] ] },

    /* ---------- EASY PRACTICE ---------- */
    { t: "gaps", title: "My or your?", sub: "Look at the Uzbek word. Tap to check.", w: 200, fs: 38, rows: [
      ["This is ___ mother. (mening)", "my"], ["Is this ___ bag? (sizning)", "your"], ["___ father is a doctor. (mening)", "My"],
      ["___ sister is 10. (sizning)", "Your"], ["Are ___ parents teachers? (sizning)", "your"], ["___ brothers are students. (mening)", "My"] ] },
    { t: "gaps", title: "Family words", sub: "Say the English word. Tap to check.", w: 280, fs: 38, rows: [
      ["This is my ___. (ona)", "mother"], ["This is my ___. (bobo)", "grandfather"], ["My ___ is a student. (aka)", "brother"],
      ["My ___ is 9. (singil)", "sister"], ["My ___ are from Samarkand. (ota-ona)", "parents"], ["This is my ___. (oila)", "family"] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "cols", eb: "Questions · So’roq", title: "Who is this? Is this your…?", menu: "Who is this?", cols: [
      { bg: "skyb", label: "Who?", lc: "b", fs: 42, lines: ["<span class='cw'>Who</span> is this?", "This is my sister."], uz: "Bu kim? — Bu mening singlim." },
      { bg: "mint", label: "Yes", lc: "g", fs: 42, lines: ["<span class='cw'>Is</span> this your father?", "Yes, it <span class='ca'>is</span>."], uz: "Bu otangizmi? — Ha." },
      { bg: "peach", label: "No", lc: "r", fs: 42, lines: ["<span class='cw'>Is</span> this your brother?", "No, it <span class='cn'>isn’t</span>."], uz: "Bu akangizmi? — Yo’q." } ],
      notes: ["Who = kim (odamlar) · What = nima (narsalar)", "What is this? It’s a pen. (Lesson 4)"] },
    { t: "spot", bg: "sky", title: "Show your family!", sub: "Show a family photo on your phone (or draw your family). Say: “This is my…”. Your partner asks: “Who is this?”", size: 54,
      cards: [{ t: "mother", uz: "ona" }, { t: "father", uz: "ota" }, { t: "brother", uz: "aka / uka" }, { t: "sister", uz: "opa / singil" }, { t: "grandmother", uz: "buvi" }, { t: "grandfather", uz: "bobo" }] },
    { t: "gaps", title: "Is or are?", sub: "One → is. Many → are. Tap to check.", w: 180, fs: 38, rows: [
      ["My mother ___ a teacher.", "is"], ["My parents ___ from Tashkent.", "are"], ["Who ___ this?", "is"],
      ["My brothers ___ 15 and 17.", "are"], ["___ this your sister?", "Is"], ["My grandfather ___ a driver.", "is"] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["This is <span class='cn'>me</span> mother.", "<span class='cn'>You</span> sister is 10.", "This <span class='cn'>my</span> father.", "My parents <span class='cn'>is</span> teachers."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["This is <span class='ca'>my</span> mother.", "<span class='ca'>Your</span> sister is 10.", "This <span class='ca'>is</span> my father.", "My parents <span class='ca'>are</span> teachers."] },
      { bg: "butter", label: "Why?", fs: 34, lines: ["me ✗ → my ✓", "you ✗ → your ✓"], uz: "O’zbekchada “Bu otam” deymiz, lekin inglizchada “is” kerak: This is my father. Ota-ona — ko’p odam, shuning uchun “are”." } ] },

    /* ---------- QUIZ ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Bu mening oilam.", "This is my family."],
      ["Bu kim?", "Who is this?"],
      ["Bu sizning akangizmi?", "Is this your brother?"],
      ["Otam haydovchi.", "My father is a driver."],
      ["Ota-onam Samarqanddan.", "My parents are from Samarkand."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["This is me sister.", "This is my sister."],
      ["My parents is teachers.", "My parents are teachers."],
      ["Is this you father?", "Is this your father?"],
      ["What is this? This is my mother.", "Who is this? This is my mother."] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "sky", title: "My family", sub: "Pick a card. Finish the sentence about your family.", size: 50,
      cards: [{ t: "My mother is…", uz: "Onam…" }, { t: "My father is a…", uz: "Otam … (kasb)" }, { t: "My brother is … years old.", uz: "Akam / ukam … yoshda." },
              { t: "My sister is a…", uz: "Opam / singlim …" }, { t: "My grandparents are from…", uz: "Bobo-buvim …dan." }, { t: "My friend is…", uz: "Do’stim…" }] },
    { t: "spot", bg: "yel", title: "Family interview", sub: "Pairs. A asks, B answers. Then change! Answer: “Yes, he is.” / “No, she isn’t.” / “He is 12.”", size: 44,
      cards: [{ t: "Who is this?", uz: "Bu kim?" }, { t: "Is this your mother?", uz: "Bu onangizmi?" }, { t: "Is your father a doctor?", uz: "Otangiz shifokormi?" },
              { t: "Are your parents from Tashkent?", uz: "Ota-onangiz Toshkentdanmi?" }, { t: "Is your sister a student?", uz: "Opangiz talabami?" }, { t: "How old is your brother?", uz: "Akangiz necha yoshda?" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say 10 family words", "say “This is my…”", "use my and your", "ask “Who is this?”", "ask “Is this your…?” and answer", "say 3 sentences about my family"] },
    { t: "bye", chips: [["This is my mother.", "peach"], ["Who is this?", "mint"], ["Is this your brother?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "walk slowly with a stick", say: "You’re a grandfather!" }, { cue: "old lady: sit and make tea", say: "You’re a grandmother!" },
      { cue: "hold a baby boy in your arms", say: "This is my son!" }, { cue: "hold a baby girl in your arms", say: "This is my daughter!" },
      { cue: "show a family photo", say: "This is my family!" }, { cue: "point at a classmate and smile", say: "This is my friend!" },
      { cue: "teach the class", say: "You’re a teacher!" }, { cue: "drive a car", say: "You’re a driver!" },
      { cue: "listen to a heart", say: "You’re a doctor!" }, { cue: "write in a notebook", say: "You’re a student!" },
      { cue: "yawn, tired face", say: "You’re tired!" }, { cue: "shake your head: no!", say: "No, it isn’t!" }
    ],
    board: [
      { cat: "Family words", qs: [["“ona” in English", "mother"], ["“bobo” in English", "grandfather"], ["“ota-ona” in English (one word)", "parents"]] },
      { cat: "My / your", qs: [["Men → ___ book", "my"], ["Siz → ___ bag", "your"], ["Fix it: This is me brother.", "This is my brother."]] },
      { cat: "Who is this?", qs: [["“Bu kim?” in English", "Who is this?"], ["Answer: Who is this? (otam)", "This is my father."], ["Answer (no): Is this your sister?", "No, it isn’t."]] },
      { cat: "Is or are?", qs: [["My mother ___ a teacher.", "is"], ["My parents ___ doctors.", "are"], ["My brother and my sister ___ students.", "are"]] },
      { cat: "Spell it", qs: [["Spell: mother", "M-O-T-H-E-R"], ["Spell: sister", "S-I-S-T-E-R"], ["Spell: family", "F-A-M-I-L-Y"]] },
      { cat: "Translate", qs: [["Bu mening oilam.", "This is my family."], ["Singlim 12 yoshda.", "My sister is 12."], ["Bu sizning akangizmi?", "Is this your brother?"]] }
    ],
    wheel: [
      { name: "Family", tasks: ["Say 4 family words.", "Say: “This is my family.”", "Finish: “My mother is…”", "Finish: “My father is a…”"] },
      { name: "Ages", tasks: ["How old are you?", "Finish: “My brother is … years old.”", "Finish: “My sister is…”", "Ask a classmate: “How old is your brother?”"] },
      { name: "Jobs", tasks: ["Say 3 jobs.", "Finish: “My mother is a…”", "Ask: “Is your father a doctor?”", "Answer: “Is your mother a teacher?”"] },
      { name: "From", tasks: ["Where are you from?", "Finish: “My parents are from…”", "Ask: “Where is your grandmother from?”", "Say 3 cities in Uzbekistan."] },
      { name: "Questions", tasks: ["Point at a classmate. Ask: “Who is this?”", "Ask: “Is this your bag?”", "Answer (no): “Is this your brother?”", "Ask a classmate 2 questions with “your”."] },
      { name: "Spell", tasks: ["Spell: father.", "Spell: brother.", "Spell your name.", "Spell: parents."] }
    ],
    build: [
      { w: ["This","is","my","family"], e: "." }, { w: ["Who","is","this"], e: "?" }, { w: ["Is","this","your","sister"], e: "?" },
      { w: ["My","father","is","a","driver"], e: "." }, { w: ["My","parents","are","from","Bukhara"], e: "." }, { w: ["Your","brother","is","a","student"], e: "." },
      { w: ["My","sister","isn’t","a","doctor"], e: "." }, { w: ["Are","your","parents","teachers"], e: "?" }
    ],
    auction: [
      { s: "This is my mother.", ok: true },
      { s: "This is me father.", ok: false, fix: "This is my father." },
      { s: "Who is this?", ok: true },
      { s: "My parents is doctors.", ok: false, fix: "My parents are doctors." },
      { s: "Is this your sister?", ok: true },
      { s: "You brother is a student.", ok: false, fix: "Your brother is a student." },
      { s: "My grandfather is from Khiva.", ok: true },
      { s: "This my grandmother.", ok: false, fix: "This is my grandmother." },
      { s: "My sisters are 10 and 14.", ok: true },
      { s: "My brother are 15.", ok: false, fix: "My brother is 15." }
    ]
  }
};
