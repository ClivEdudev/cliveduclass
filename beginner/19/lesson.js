/* Beginner · Lesson 19 · Can and can’t   (Unit 4 · What I can do, lesson 1)
   Teaches: can for ability · I can swim. · I can’t drive. · Can you…? Yes, I can. / No, I can’t.
   can is the same for every person; after can: the verb with no “to”, no -s.
   Uzbek: -a olaman / -a olmayman (suza olaman, suza olmayman, suza olasizmi?).
   Recycles: he / she / they, my / his / her (15), family words (11), Where is…? (17), colours (5).
   New words: swim, run, sing, dance, cook, drive a car, ride a bike, play football, speak English, read.
   Built for Thu 21 Jan 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b19",
  n: 19,
  title: "Can and can’t",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 19", title: "I <span class='cy'>can</span> swim!", lead: "can and can’t · qila olaman, qila olmayman", chips: [["Men suza olaman.", "peach"], ["Men mashina hayday olmayman.", "mint"], ["Siz ovqat pishira olasizmi?", "skyb"]] },
    { t: "goals", items: [
      ["Say what I can do", "I can swim.", "Men suza olaman."],
      ["Say what I can’t do", "I can’t drive a car.", "Men mashina hayday olmayman."],
      ["Ask and answer: Can you…?", "Can you cook? — Yes, I can.", "Ovqat pishira olasizmi? — Ha, olaman."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: where is it?", sub: "Lessons 17 and 18! Teacher asks. You answer: “It’s on the desk.” / “They’re in my bag.”",
      cards: [{ t: "Where is your phone?", uz: "Telefoningiz qayerda?" }, { t: "Where is your bag?", uz: "Sumkangiz qayerda?" }, { t: "Where are your keys?", uz: "Kalitlaringiz qayerda?" }, { t: "Where is the teacher?", uz: "O’qituvchi qayerda?" }, { t: "Who is next to you?", uz: "Yoningizda kim?" }, { t: "Where is your pen?", uz: "Ruchkangiz qayerda?" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Action words 1", menu: "New words 1", items: [
      ["I <span class='ca'>can swim</span>.", "swim = suzmoq"],
      ["Bobur <span class='ca'>can run</span>.", "run = yugurmoq"],
      ["Lola <span class='ca'>can sing</span>.", "sing = qo’shiq aytmoq"],
      ["Madina <span class='ca'>can dance</span>.", "dance = raqsga tushmoq"],
      ["My mother <span class='ca'>can cook</span> plov.", "cook = ovqat pishirmoq"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Action words 2", menu: "New words 2", items: [
      ["My father <span class='ca'>can drive a car</span>.", "drive a car = mashina haydamoq"],
      ["Aziz <span class='ca'>can ride a bike</span>.", "ride a bike = velosiped haydamoq"],
      ["We <span class='ca'>can play football</span>.", "play football = futbol o’ynamoq"],
      ["Dilnoza <span class='ca'>can speak English</span>.", "speak English = inglizcha gapirmoq"],
      ["My sister <span class='ca'>can read</span>.", "read = o’qimoq"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "What can you do?", items: [
      { bg: "peach", w: "🏊", label: "swim = suzmoq", en: "I can swim.", uz: "Men suza olaman." },
      { bg: "mint", w: "🍳", label: "cook = ovqat pishirmoq", en: "She can cook.", uz: "U ovqat pishira oladi." },
      { bg: "skyb", w: "🚲", label: "ride a bike", en: "He can ride a bike.", uz: "U velosiped hayday oladi." },
      { bg: "butter", w: "⚽", label: "play football", en: "They can play football.", uz: "Ular futbol o’ynay olishadi." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "What is “can”?", menu: "What is can?", cols: [
      { bg: "mint", label: "can = -a olaman", lc: "g", fs: 40, lines: ["I <span class='ca'>can</span> swim."], uz: "can = qila olmoq. Men suza olaman (suzishni bilaman)." },
      { bg: "peach", label: "can’t = -a olmayman", lc: "r", fs: 40, lines: ["I <span class='cn'>can’t</span> swim."], uz: "can’t = qila olmaslik. Men suza olmayman." } ],
      notes: ["can’t = cannot", "Uzbek: suzmoq → suza olaman · suza olmayman"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "Who + can + verb", rows: [
      { chips: [["I", "skyb"], ["can", "peach"], ["swim.", "mint"]], uz: "Men suza olaman." },
      { chips: [["She", "skyb"], ["can", "peach"], ["cook plov.", "mint"]], uz: "U palov pishira oladi." },
      { chips: [["They", "skyb"], ["can", "peach"], ["play football.", "mint"]], uz: "Ular futbol o’ynay olishadi." } ],
      notes: ["After can: only the verb", "No “to”: can swim, NOT can to swim", "No -s: she can, NOT she cans"] },
    { t: "table", eb: "The same for everyone · Hamma uchun bir xil", title: "I can, you can, she can…", head: ["Who", "can", "verb", "Uzbek"], rows: [
      ["I", "<b class='ca'>can</b>", "swim", "Men suza olaman"],
      ["You", "<b class='ca'>can</b>", "swim", "Siz suza olasiz"],
      ["He / She", "<b class='ca'>can</b>", "swim", "U suza oladi"],
      ["We", "<b class='ca'>can</b>", "swim", "Biz suza olamiz"],
      ["They", "<b class='ca'>can</b>", "swim", "Ular suza olishadi"] ],
      notes: ["Uzbek changes: olaman, olasiz, oladi…", "English does NOT change: can, can, can!"] },
    { t: "examples", eb: "Examples · Misollar", title: "Yes sentences", items: [
      ["My grandmother <span class='ca'>can cook</span> plov.", "Buvim palov pishira oladi."],
      ["Bobur <span class='ca'>can play</span> football.", "Bobur futbol o’ynay oladi."],
      ["You <span class='ca'>can sing</span>!", "Siz qo’shiq ayta olasiz!"],
      ["My brother <span class='ca'>can drive</span> a car.", "Akam mashina hayday oladi."],
      ["We <span class='ca'>can speak</span> Uzbek and English.", "Biz o’zbekcha va inglizcha gapira olamiz."],
      ["Dilnoza and Lola <span class='ca'>can dance</span>.", "Dilnoza va Lola raqsga tusha olishadi."] ] },
    { t: "gaps", title: "Which verb?", sub: "Look at the Uzbek. Say the full sentence. Tap to check.", w: 240, fs: 36, rows: [
      ["I can ___. (suzmoq)", "swim"], ["She can ___. (qo’shiq aytmoq)", "sing"], ["Aziz can ___ a bike. (haydamoq)", "ride"],
      ["My mother can ___ plov. (pishirmoq)", "cook"], ["We can ___ football. (o’ynamoq)", "play"], ["They can ___ English. (gapirmoq)", "speak"] ] },

    /* ---------- NEGATIVE ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "Who + can’t + verb", rows: [
      { chips: [["I", "skyb"], ["can’t", "peach"], ["drive.", "mint"]], uz: "Men mashina hayday olmayman." },
      { chips: [["He", "skyb"], ["can’t", "peach"], ["swim.", "mint"]], uz: "U suza olmaydi." },
      { chips: [["We", "skyb"], ["can’t", "peach"], ["dance.", "mint"]], uz: "Biz raqsga tusha olmaymiz." } ],
      notes: ["can’t = cannot", "Same for everyone: I can’t, she can’t", "Never: I no can"] },
    { t: "examples", eb: "Negative · Inkor", title: "No sentences", items: [
      ["I <span class='cn'>can’t</span> sing.", "Men qo’shiq ayta olmayman."],
      ["My little brother <span class='cn'>can’t</span> read.", "Ukam o’qiy olmaydi."],
      ["Lola <span class='cn'>can’t</span> ride a bike.", "Lola velosiped hayday olmaydi."],
      ["A cat <span class='cn'>can’t</span> speak English!", "Mushuk inglizcha gapira olmaydi!"],
      ["We <span class='cn'>can’t</span> drive a car.", "Biz mashina hayday olmaymiz."],
      ["My grandfather <span class='cn'>can’t</span> run.", "Bobom yugura olmaydi."] ] },
    { t: "gaps", title: "Can or can’t?", sub: "✓ = can · ✗ = can’t. Tap to check.", w: 200, fs: 38, rows: [
      ["Aziz ___ swim. ✓", "can"], ["Madina ___ drive. ✗", "can’t"], ["I ___ cook plov. ✓", "can"],
      ["The baby ___ read. ✗", "can’t"], ["My father ___ ride a bike. ✓", "can"], ["A cat ___ sing. ✗", "can’t"] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "Can + who + verb?", rows: [
      { chips: [["Can", "peach"], ["you", "skyb"], ["swim?", "mint"]], uz: "Suza olasizmi?" },
      { chips: [["Can", "peach"], ["she", "skyb"], ["cook?", "mint"]], uz: "U ovqat pishira oladimi?" },
      { chips: [["Can", "peach"], ["they", "skyb"], ["dance?", "mint"]], uz: "Ular raqsga tusha olishadimi?" } ],
      notes: ["Question: can goes FIRST", "Like “Are you…?” in lesson 10", "Uzbek: …-mi?"] },
    { t: "cols", eb: "Short answers · Qisqa javoblar", title: "Yes, I can. No, I can’t.", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 38, lines: ["<span class='cw'>Can</span> you swim?", "<span class='cw'>Can</span> he drive?", "<span class='cw'>Can</span> they sing?"], uz: "…-a olasizmi?" },
      { bg: "mint", label: "Yes · Ha", lc: "g", fs: 38, lines: ["Yes, I <span class='ca'>can</span>.", "Yes, he <span class='ca'>can</span>.", "Yes, they <span class='ca'>can</span>."], uz: "Ha, olaman." },
      { bg: "peach", label: "No · Yo’q", lc: "r", fs: 38, lines: ["No, I <span class='cn'>can’t</span>.", "No, he <span class='cn'>can’t</span>.", "No, they <span class='cn'>can’t</span>."], uz: "Yo’q, olmayman." } ],
      notes: ["Short answer: Yes, I can. · No, I can’t.", "No need to say the verb again: Yes, I can."] },
    { t: "gaps", title: "Ask and answer", sub: "Say the full question and answer. Tap to check.", w: 200, fs: 36, rows: [
      ["___ you cook? — Yes, I can.", "Can"], ["Can you dance? — No, I ___.", "can’t"], ["Can Bobur swim? — Yes, he ___.", "can"],
      ["Can Lola drive? — No, ___ can’t.", "she"], ["___ they play football? — Yes, they can.", "Can"], ["Can your mother sing? — Yes, she ___.", "can"] ] },

    /* ---------- BE CAREFUL ---------- */
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Uzbek learners often say…", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["I <span class='cn'>can to</span> swim.", "She <span class='cn'>cans</span> cook.", "I <span class='cn'>no can</span> dance.", "<span class='cn'>You can</span> swim?"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["I <span class='ca'>can</span> swim.", "She <span class='ca'>can</span> cook.", "I <span class='ca'>can’t</span> dance.", "<span class='ca'>Can you</span> swim?"] } ],
      notes: ["No “to” after can", "can never takes -s", "Question: Can goes first"] },

    /* ---------- QUIZZES ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men suza olaman.", "I can swim."],
      ["U mashina hayday olmaydi.", "He / She can’t drive a car."],
      ["Siz ovqat pishira olasizmi?", "Can you cook?"],
      ["Ha, olaman.", "Yes, I can."],
      ["Ular futbol o’ynay olishadi.", "They can play football."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I can to dance.", "I can dance."],
      ["She cans sing.", "She can sing."],
      ["I no can drive.", "I can’t drive."],
      ["You can swim?", "Can you swim?"],
      ["Can you cook? — Yes, I can’t.", "Yes, I can. / No, I can’t."] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "yel", title: "About me", sub: "Pick a card. Say a true sentence: “I can…” or “I can’t…”", size: 50,
      cards: [{ t: "swim", uz: "suzmoq" }, { t: "cook plov", uz: "palov pishirmoq" }, { t: "drive a car", uz: "mashina haydamoq" }, { t: "sing", uz: "qo’shiq aytmoq" }, { t: "ride a bike", uz: "velosiped haydamoq" }, { t: "dance", uz: "raqsga tushmoq" }] },
    { t: "spot", bg: "sky", title: "Find someone who…", sub: "Stand up. Ask classmates: “Can you…?” Find one “Yes, I can.” for every card. Then tell the class: “Aziz can swim.”", size: 44,
      cards: ["Can you swim?", "Can you cook plov?", "Can you ride a bike?", "Can you sing?", "Can you play football?", "Can you dance?"] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say what I can do: I can swim.", "say what I can’t do: I can’t drive.", "ask: Can you…?", "answer: Yes, I can. / No, I can’t.", "talk about my family: My mother can cook.", "use new words: swim, run, sing, dance, cook…"] },
    { t: "bye", chips: [["I can…", "peach"], ["I can’t…", "mint"], ["Can you…?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "swim", say: "You can swim!" },
      { cue: "sing a song", say: "You can sing!" },
      { cue: "dance", say: "You can dance!" },
      { cue: "cook plov", say: "You can cook plov!" },
      { cue: "drive a car", say: "You can drive a car!" },
      { cue: "ride a bike", say: "You can ride a bike!" },
      { cue: "play football", say: "You can play football!" },
      { cue: "run fast", say: "You can run!" },
      { cue: "read a book", say: "You can read!" },
      { cue: "try to swim and fail", say: "You can’t swim!" },
      { cue: "try to dance and fall", say: "You can’t dance!" },
      { cue: "try to sing, bad voice", say: "You can’t sing!" }
    ],
    board: [
      { cat: "Words", qs: [["“suzmoq” in English", "swim"], ["“qo’shiq aytmoq” in English", "sing"], ["“velosiped haydamoq” in English", "ride a bike"]] },
      { cat: "Can", qs: [["I ___ swim. (✓)", "can"], ["“Men ovqat pishira olaman.”", "I can cook."], ["Say 2 things you can do.", "I can … and I can … (any true)"]] },
      { cat: "Can’t", qs: [["I ___ drive. (✗)", "can’t"], ["Make it NO: She can dance.", "She can’t dance."], ["Say 2 things you can’t do.", "I can’t … and I can’t … (any true)"]] },
      { cat: "Questions", qs: [["“Suza olasizmi?”", "Can you swim?"], ["Make a question: He can cook.", "Can he cook?"], ["Ask the teacher one “Can you…?” question.", "Can you …? (any)"]] },
      { cat: "Short answers", qs: [["Can you swim? (Ha)", "Yes, I can."], ["Can she drive? (Yo’q)", "No, she can’t."], ["Can they dance? (Ha)", "Yes, they can."]] },
      { cat: "Fix it", qs: [["I can to swim.", "I can swim."], ["She cans cook.", "She can cook."], ["I no can sing.", "I can’t sing."]] }
    ],
    wheel: [
      { name: "I can", tasks: ["Say 2 things you can do.", "Say: I can speak…", "Say: I can play…", "Say: I can cook…"] },
      { name: "I can’t", tasks: ["Say 2 things you can’t do.", "Say: I can’t … (one true thing)", "Say one thing a cat can’t do.", "Say one thing a baby can’t do."] },
      { name: "Ask", tasks: ["Ask a friend: Can you swim?", "Ask the teacher: Can you cook plov?", "Ask: Can your father drive?", "Ask: Can you dance?"] },
      { name: "Answer", tasks: ["Can you sing? Answer.", "Can you ride a bike? Answer.", "Can your mother cook plov? Answer.", "Can you speak English? Answer."] },
      { name: "My family", tasks: ["Say one thing your mother can do.", "Say one thing your father can do.", "Say one thing your brother or sister can do.", "Say one thing your grandmother can’t do."] },
      { name: "Mime", tasks: ["Mime a word. Your team says: You can…!", "Mime “I can’t swim.” Your team says it.", "Mime cooking. Your team says it.", "Mime football. Your team says it."] }
    ],
    build: [
      { w: ["I","can","swim"], e: "." },
      { w: ["She","can","cook","plov"], e: "." },
      { w: ["I","can’t","drive","a","car"], e: "." },
      { w: ["Can","you","dance"], e: "?" },
      { w: ["Yes,","I","can"], e: "." },
      { w: ["No,","he","can’t"], e: "." },
      { w: ["We","can","play","football"], e: "." },
      { w: ["Can","your","mother","sing"], e: "?" }
    ],
    auction: [
      { s: "I can swim.", ok: true },
      { s: "She can to dance.", ok: false, fix: "She can dance." },
      { s: "Can you ride a bike?", ok: true },
      { s: "He cans play football.", ok: false, fix: "He can play football." },
      { s: "My father can drive a car.", ok: true },
      { s: "I no can sing.", ok: false, fix: "I can’t sing." },
      { s: "Can you cook? — Yes, I can.", ok: true },
      { s: "You can speak English?", ok: false, fix: "Can you speak English?" },
      { s: "We can’t dance.", ok: true },
      { s: "Can she swim? — No, she can.", ok: false, fix: "Can she swim? — No, she can’t." }
    ]
  }
};
