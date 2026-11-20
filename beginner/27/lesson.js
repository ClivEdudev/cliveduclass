/* Beginner · Lesson 27 · Do you…? Does she…?
   Teaches: present simple yes / no questions: Do + I / you / we / they + verb? Does + he / she / it + verb (no s)?
   Short answers: Yes, I do. · No, I don’t. · Yes, she does. · No, she doesn’t. Uzbek: -mi? (ishlaysizmi?)
   Recycles: I work / I don’t work (lesson 25), she works / doesn’t (26), jobs (7), family (11),
   have (13), food and drink, I like (22).
   New words: know, understand, want, need, ride, use, a bike, a computer.
   Built for Thu 18 Feb 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b27",
  n: 27,
  title: "Do you…? Does she…?",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 27", title: "Do you <span class='cy'>speak English?</span>", lead: "Questions and short answers · So’roq gaplar va qisqa javoblar", chips: [["Inglizcha gapirasizmi?", "peach"], ["Ha, gapiraman.", "mint"], ["U choy ichadimi?", "skyb"]] },
    { t: "goals", items: [
      ["Ask with Do you…?", "Do you live in Tashkent?", "Toshkentda yashaysizmi?"],
      ["Ask with Does she…?", "Does she cook plov?", "U palov pishiradimi?"],
      ["Give short answers", "Yes, I do. · No, she doesn’t.", "Ha. · Yo’q."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: he, she + s", sub: "Lesson 26! Pick a card. Make a sentence. Careful with -s and doesn’t! · -s va doesn’t ga e’tibor bering!", size: 48,
      cards: [{ t: "Lola · teach", uz: "Lola teaches…" }, { t: "My father · drive", uz: "My father drives…" }, { t: "My cat · drink", uz: "My cat drinks…" },
              { t: "Aziz · live", uz: "Aziz lives in…" }, { t: "He · not speak", uz: "He doesn’t speak…" }, { t: "My mother · not drink", uz: "My mother doesn’t drink…" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Six new verbs", menu: "New words: know, want…", items: [
      ["I <span class='ca'>know</span> Aziz.", "know = bilmoq, tanimoq"],
      ["I <span class='ca'>understand</span> English.", "understand = tushunmoq"],
      ["I <span class='ca'>want</span> tea.", "want = xohlamoq, istamoq"],
      ["I <span class='ca'>need</span> a pen.", "need = kerak bo’lmoq (Menga ruchka kerak.)"],
      ["I <span class='ca'>ride</span> a bike.", "ride = minmoq (velosiped, ot)"],
      ["We <span class='ca'>use</span> a computer.", "use = ishlatmoq, foydalanmoq"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Things we want and need", items: [
      { bg: "peach", w: "🚲", label: "a bike = velosiped", en: "Lola rides a bike.", uz: "Lola velosiped minadi." },
      { bg: "mint", w: "💻", label: "a computer = kompyuter", en: "Aziz uses a computer.", uz: "Aziz kompyuterdan foydalanadi." },
      { bg: "skyb", w: "🍵", label: "want = xohlamoq", en: "She wants tea.", uz: "U choy xohlaydi." },
      { bg: "butter", w: "✏️", label: "need = kerak", en: "He needs a pen.", uz: "Unga ruchka kerak." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "Do or Does?", menu: "The rule: Do or Does?", cols: [
      { bg: "skyb", label: "I, you, we, they", lc: "b", fs: 44, lines: ["<span class='cw'>Do</span> you work?", "<span class='cw'>Do</span> they work?"], uz: "Men, siz, biz, ular → Do + fe’l?" },
      { bg: "mint", label: "he, she, it", lc: "g", fs: 44, lines: ["<span class='cw'>Does</span> she work?", "<span class='cw'>Does</span> he work?"], uz: "U → Does + fe’l? Fe’lga -s qo’shilmaydi!" } ],
      notes: ["O’zbekchada -mi: ishlaysizmi? → inglizchada Do / Does boshida", "Do / Does goes FIRST"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "Do / Does + who + verb?", rows: [
      { chips: [["Do", "peach"], ["you", "skyb"], ["speak", "mint"], ["English?", "butter"]], uz: "Inglizcha gapirasizmi?" },
      { chips: [["Does", "peach"], ["she", "skyb"], ["live", "mint"], ["in Tashkent?", "butter"]], uz: "U Toshkentda yashaydimi?" },
      { chips: [["Does", "peach"], ["your father", "skyb"], ["drive?", "mint"]], uz: "Otangiz mashina haydaydimi?" } ],
      notes: ["She works. → Does she work?", "-s Does ga o’tadi: do + es = does"] },
    { t: "table", eb: "Yes sentence → question · Gap → so’roq", title: "Make a question", head: ["Yes sentence", "Question", "Uzbek"], rows: [
      ["You speak English.", "<b class='cw'>Do</b> you speak English?", "Inglizcha gapirasizmi?"],
      ["They live here.", "<b class='cw'>Do</b> they live here?", "Ular shu yerda yashaydimi?"],
      ["You need a pen.", "<b class='cw'>Do</b> you need a pen?", "Sizga ruchka kerakmi?"],
      ["She works.", "<b class='cw'>Does</b> she work?", "U ishlaydimi?"],
      ["He drives.", "<b class='cw'>Does</b> he drive?", "U mashina haydaydimi?"],
      ["It eats fish.", "<b class='cw'>Does</b> it eat fish?", "U baliq yeydimi?"] ],
      notes: ["works → Does … work", "drives → Does … drive"] },
    { t: "cols", eb: "Short answers · Qisqa javoblar", title: "Yes, I do. No, I don’t.", menu: "Short answers", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 38, lines: ["<span class='cw'>Do</span> you…?", "<span class='cw'>Does</span> she…?", "<span class='cw'>Do</span> they…?"], uz: "…mi?" },
      { bg: "mint", label: "Yes", lc: "g", fs: 38, lines: ["Yes, I <span class='ca'>do</span>.", "Yes, she <span class='ca'>does</span>.", "Yes, they <span class='ca'>do</span>."], uz: "Ha." },
      { bg: "peach", label: "No", lc: "r", fs: 38, lines: ["No, I <span class='cn'>don’t</span>.", "No, she <span class='cn'>doesn’t</span>.", "No, they <span class='cn'>don’t</span>."], uz: "Yo’q." } ],
      notes: ["Faqat “Yes.” emas: “Yes, I do.” deng", "Never: “Yes, I like.” → “Yes, I do.”"] },
    { t: "examples", eb: "Questions · So’roq", title: "Do you…?", items: [
      ["<span class='cw'>Do</span> you live in Tashkent? Yes, I do.", "Toshkentda yashaysizmi? Ha."],
      ["<span class='cw'>Do</span> you speak Russian? No, I don’t.", "Ruscha gapirasizmi? Yo’q."],
      ["<span class='cw'>Do</span> you like plov? Yes, I do.", "Palovni yaxshi ko’rasizmi? Ha."],
      ["<span class='cw'>Do</span> they work in a hospital? Yes, they do.", "Ular kasalxonada ishlaydimi? Ha."],
      ["<span class='cw'>Do</span> you need a pen? No, I don’t.", "Sizga ruchka kerakmi? Yo’q."],
      ["<span class='cw'>Do</span> you know Bobur? Yes, I do.", "Boburni taniysizmi? Ha."] ] },
    { t: "examples", eb: "Questions · So’roq", title: "Does he…? Does she…?", items: [
      ["<span class='cw'>Does</span> Lola ride a bike? Yes, she does.", "Lola velosiped minadimi? Ha."],
      ["<span class='cw'>Does</span> your father drive? No, he doesn’t.", "Otangiz mashina haydaydimi? Yo’q."],
      ["<span class='cw'>Does</span> Aziz use a computer? Yes, he does.", "Aziz kompyuterdan foydalanadimi? Ha."],
      ["<span class='cw'>Does</span> your mother cook plov? Yes, she does.", "Onangiz palov pishiradimi? Ha."],
      ["<span class='cw'>Does</span> Bobur understand Russian? No, he doesn’t.", "Bobur ruschani tushunadimi? Yo’q."],
      ["<span class='cw'>Does</span> your cat drink milk? Yes, it does.", "Mushugingiz sut ichadimi? Ha."] ] },
    { t: "gaps", title: "Do or Does?", sub: "Say the full question. Tap to check. · Do yoki Does?", w: 200, fs: 38, rows: [
      ["___ you like tea?", "Do"], ["___ she work?", "Does"], ["___ they live here?", "Do"],
      ["___ Aziz drive?", "Does"], ["___ your cat eat fish?", "Does"], ["___ we need a pen?", "Do"] ] },
    { t: "gaps", title: "Short answers", sub: "Finish the answer. Tap to check. · Qisqa javobni tugating.", w: 280, fs: 34, rows: [
      ["Do you speak English? Yes, ___.", "I do"], ["Does she cook? No, ___.", "she doesn’t"], ["Do they work? Yes, ___.", "they do"],
      ["Does he drive? No, ___.", "he doesn’t"], ["Does your cat drink milk? Yes, ___.", "it does"], ["Do you need a pen? No, ___.", "I don’t"] ] },
    { t: "quiz", kind: "en", title: "Make a question", sub: "Say the question. Tap to check. · So’roq gap tuzing.", rows: [
      ["You speak English.", "Do you speak English?"],
      ["She drives a car.", "Does she drive a car?"],
      ["They live in Bukhara.", "Do they live in Bukhara?"],
      ["Aziz rides a bike.", "Does Aziz ride a bike?"] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["Does she <span class='cn'>works</span>?", "<span class='cn'>Do</span> he drive?", "<span class='cn'>You like</span> tea?", "Yes, I <span class='cn'>like</span>."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["Does she <span class='ca'>work</span>?", "<span class='ca'>Does</span> he drive?", "<span class='ca'>Do you like</span> tea?", "Yes, I <span class='ca'>do</span>."],
        uz: "Does dan keyin -s yo’q. U → Does. Do ni unutmang!" } ] },

    /* ---------- PRACTICE ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Siz choy ichasizmi?", "Do you drink tea?"],
      ["Lola Toshkentda yashaydimi?", "Does Lola live in Tashkent?"],
      ["Otangiz mashina haydaydimi?", "Does your father drive?"],
      ["Ular ruscha gapirishadimi?", "Do they speak Russian?"],
      ["Sizga ruchka kerakmi? — Yo’q.", "Do you need a pen? — No, I don’t."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["Does he speaks English?", "Does he speak English?"],
      ["Do she like plov?", "Does she like plov?"],
      ["Do you need a pen? Yes, I need.", "Do you need a pen? Yes, I do."],
      ["Does they live here?", "Do they live here?"] ] },
    { t: "spot", bg: "sky", title: "Find someone who…", sub: "Walk and ask: “Do you ride a bike?” Find a classmate who says “Yes, I do.” · Sinfdoshlardan so’rang!", size: 50,
      cards: [{ t: "ride a bike", uz: "velosiped minmoq" }, { t: "drink coffee", uz: "qahva ichmoq" }, { t: "speak Russian", uz: "ruscha gapirmoq" },
              { t: "have a cat", uz: "mushugi bor" }, { t: "like fish", uz: "baliqni yaxshi ko’rmoq" }, { t: "use a computer", uz: "kompyuterdan foydalanmoq" }] },
    { t: "spot", bg: "yel", title: "Pairs: ask about my family", sub: "A asks. B answers with a short answer. Example: “Does your mother cook plov?” → “Yes, she does.”", size: 46,
      cards: [{ t: "Does your mother…?", uz: "Onangiz …mi?" }, { t: "Does your father…?", uz: "Otangiz …mi?" }, { t: "Does your brother…?", uz: "Akangiz / ukangiz …mi?" },
              { t: "Does your sister…?", uz: "Opangiz / singlingiz …mi?" }, { t: "Does your friend…?", uz: "Do’stingiz …mi?" }, { t: "Do you…?", uz: "Siz …mi?" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["ask “Do you…?”", "ask “Does he / she…?”", "say “Yes, I do. · No, I don’t.”", "say “Yes, she does. · No, she doesn’t.”", "use: know, want, need, ride, use", "remember: Does she work? (no -s)"] },
    { t: "bye", chips: [["Do you…?", "peach"], ["Does she…?", "mint"], ["Yes, I do.", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "ride a bike", say: "Do you ride a bike? — Yes, I do!" }, { cue: "drive a car", say: "Do you drive a car? — Yes, I do!" },
      { cue: "cook plov", say: "Do you cook plov? — Yes, I do!" }, { cue: "drink tea", say: "Do you drink tea? — Yes, I do!" },
      { cue: "use a computer", say: "Do you use a computer? — Yes, I do!" }, { cue: "play football", say: "Do you play football? — Yes, I do!" },
      { cue: "teach English", say: "Do you teach English? — Yes, I do!" }, { cue: "sell bread", say: "Do you sell bread? — Yes, I do!" },
      { cue: "wash the car", say: "Do you wash the car? — Yes, I do!" }, { cue: "clean the room", say: "Do you clean the room? — Yes, I do!" },
      { cue: "shake head: no fish!", say: "Do you eat fish? — No, I don’t!" }, { cue: "shake head: no coffee!", say: "Do you drink coffee? — No, I don’t!" }
    ],
    board: [
      { cat: "Do or Does?", qs: [["___ you like tea?", "Do"], ["___ she work?", "Does"], ["___ Aziz and Lola live here?", "Do"]] },
      { cat: "Short answers", qs: [["Do you speak English? (yes)", "Yes, I do."], ["Does he drive? (no)", "No, he doesn’t."], ["Do they like plov? (yes)", "Yes, they do."]] },
      { cat: "Make a question", qs: [["You drink tea.", "Do you drink tea?"], ["She cooks plov.", "Does she cook plov?"], ["Bobur rides a bike.", "Does Bobur ride a bike?"]] },
      { cat: "New words", qs: [["“bilmoq” in English", "know"], ["“tushunmoq” in English", "understand"], ["“Menga ruchka kerak.” in English", "I need a pen."]] },
      { cat: "Translate", qs: [["Choy ichasizmi?", "Do you drink tea?"], ["Lola ishlaydimi?", "Does Lola work?"], ["Ha. (Does Lola work?)", "Yes, she does."]] },
      { cat: "Fix it", qs: [["Does she works?", "Does she work?"], ["Do he drive?", "Does he drive?"], ["Do you like tea? Yes, I like.", "Yes, I do."]] }
    ],
    wheel: [
      { name: "Ask me!", tasks: ["Ask the teacher: Do you…?", "Ask a classmate: Do you like…?", "Ask a classmate: Do you speak…?", "Ask a classmate: Do you have…?"] },
      { name: "Answer", tasks: ["Do you like plov? Answer.", "Do you speak Russian? Answer.", "Do you drink coffee? Answer.", "Do you ride a bike? Answer."] },
      { name: "Family", tasks: ["Ask: Does your mother…?", "Ask: Does your father…?", "Answer: Does your mother cook?", "Answer: Does your father drive?"] },
      { name: "He / She", tasks: ["Ask about Lola: Does she…?", "Ask about Aziz: Does he…?", "Make a question: She lives in Bukhara.", "Make a question: He teaches English."] },
      { name: "Short answers", tasks: ["Say: Yes, I do. No, I don’t.", "Say: Yes, she does. No, she doesn’t.", "Say: Yes, they do. No, they don’t.", "Answer: Do you know Aziz?"] },
      { name: "New words", tasks: ["Say 1 sentence with “need”.", "Say 1 sentence with “want”.", "Say 1 sentence with “know”.", "Say 1 sentence with “use”."] }
    ],
    build: [
      { w: ["Do","you","speak","English"], e: "?" }, { w: ["Does","she","live","in","Tashkent"], e: "?" },
      { w: ["Yes,","I","do"], e: "." }, { w: ["No,","she","doesn’t"], e: "." },
      { w: ["Do","they","like","plov"], e: "?" }, { w: ["Does","your","father","drive"], e: "?" },
      { w: ["Do","you","need","a","pen"], e: "?" }, { w: ["Does","Lola","ride","a","bike"], e: "?" }
    ],
    auction: [
      { s: "Do you like tea?", ok: true },
      { s: "Does she works here?", ok: false, fix: "Does she work here?" },
      { s: "Does Aziz drive a taxi?", ok: true },
      { s: "Do he speak Russian?", ok: false, fix: "Does he speak Russian?" },
      { s: "Do you know Lola? Yes, I do.", ok: true },
      { s: "Does your cat eat fish? Yes, it eats.", ok: false, fix: "Does your cat eat fish? Yes, it does." },
      { s: "Do they live in Samarkand?", ok: true },
      { s: "Does you need a pen?", ok: false, fix: "Do you need a pen?" },
      { s: "Does Bobur ride a bike? No, he doesn’t.", ok: true },
      { s: "Do your mother cook plov?", ok: false, fix: "Does your mother cook plov?" }
    ]
  }
};
