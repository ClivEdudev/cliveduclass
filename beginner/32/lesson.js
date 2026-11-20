/* Beginner · Lesson 32 · What are you doing?
   Present continuous, part 2: the negative (I’m not / isn’t / aren’t + -ing), yes/no questions
   (Are you …ing? Is she …ing?) with short answers, and “What are you doing?”.
   Lesson 31 taught the positive (am / is / are + -ing). New words: home activities.
   Built for Mon 8 Mar 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b32",
  n: 32,
  title: "What are you doing?",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 32", title: "What are you <span class='cy'>doing?</span>", lead: "Present continuous: no and questions · Hozirgi davomli zamon: inkor va so’roq",
      chips: [["Nima qilyapsiz?", "peach"], ["Men uxlamayapman.", "mint"], ["Kitob o’qiyapsizmi?", "skyb"]] },
    { t: "goals", items: [
      ["Say what is not happening now", "I’m not sleeping.", "Men uxlamayapman."],
      ["Ask a yes / no question about now", "Are you reading? Yes, I am.", "O’qiyapsizmi? Ha, o’qiyapman."],
      ["Ask what someone is doing", "What are you doing?", "Nima qilyapsiz?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: what is the teacher doing?", sub: "Lesson 31! The teacher mimes. You say: “You are reading!” · O’qituvchi ko’rsatadi, siz aytasiz.",
      cards: [{ t: "reading", uz: "o’qiyapti" }, { t: "eating", uz: "ovqat yeyapti" }, { t: "drinking tea", uz: "choy ichyapti" }, { t: "sleeping", uz: "uxlayapti" }, { t: "writing", uz: "yozyapti" }, { t: "cooking", uz: "ovqat pishiryapti" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "At home", menu: "New words: at home", items: [
      ["Mum is <span class='ca'>washing the dishes</span>.", "wash the dishes = idish yuvmoq"],
      ["Bobur is <span class='ca'>doing his homework</span>.", "do homework = uy vazifasini qilmoq"],
      ["Dad is <span class='ca'>talking on the phone</span>.", "talk on the phone = telefonda gaplashmoq"],
      ["I am <span class='ca'>listening to music</span>.", "listen to music = musiqa tinglamoq"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "More actions", menu: "New words: more actions", items: [
      ["Lola is <span class='ca'>singing</span> a song.", "sing = qo’shiq aytmoq"],
      ["Aziz is <span class='ca'>drawing</span> a cat.", "draw = rasm chizmoq"],
      ["Madina is <span class='ca'>cleaning</span> her room.", "clean = tozalamoq"],
      ["We are <span class='ca'>waiting for</span> the bus.", "wait for = kutmoq"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Look and say", items: [
      { bg: "peach", w: "📞", label: "talk on the phone", en: "She is talking on the phone.", uz: "U telefonda gaplashyapti." },
      { bg: "mint", w: "🎧", label: "listen to music", en: "He is listening to music.", uz: "U musiqa tinglayapti." },
      { bg: "skyb", w: "🎨", label: "draw", en: "The children are drawing.", uz: "Bolalar rasm chizishyapti." },
      { bg: "butter", w: "🚌", label: "wait for", en: "I am waiting for the bus.", uz: "Men avtobusni kutyapman." } ] },

    /* ---------- NEGATIVE ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "am / is / are + not + verb-ing",
      sub: "Qoida: am / is / are dan keyin <b>not</b> qo’yamiz. Fe’l -ing bilan qoladi. O’zbekchada: -ma-yap- (uxla-ma-yap-man).", rows: [
      { chips: [["I", "skyb"], ["am not", "peach"], ["sleeping.", "mint"]], uz: "Men uxlamayapman." },
      { chips: [["She", "skyb"], ["isn’t", "peach"], ["cooking.", "mint"]], uz: "U ovqat pishirmayapti." },
      { chips: [["They", "skyb"], ["aren’t", "peach"], ["playing.", "mint"]], uz: "Ular o’ynashmayapti." } ],
      notes: ["I am not = I’m not", "is not = isn’t", "are not = aren’t"] },
    { t: "table", eb: "Negative · Inkor", title: "I’m not, isn’t, aren’t", head: ["Who", "not", "verb-ing", "Uzbek"], rows: [
      ["I", "<b class='cn'>’m not</b>", "reading.", "Men o’qimayapman."],
      ["You", "<b class='cn'>aren’t</b>", "reading.", "Siz o’qimayapsiz."],
      ["He / She", "<b class='cn'>isn’t</b>", "reading.", "U o’qimayapti."],
      ["We", "<b class='cn'>aren’t</b>", "reading.", "Biz o’qimayapmiz."],
      ["They", "<b class='cn'>aren’t</b>", "reading.", "Ular o’qishmayapti."] ],
      notes: ["Bitta odam (Aziz, my mum) → isn’t", "Ko’p odam (Aziz and Lola) → aren’t"] },
    { t: "examples", eb: "Negative · Inkor", title: "Examples: no sentences", items: [
      ["I<span class='cn'>’m not</span> sleeping.", "Men uxlamayapman."],
      ["Aziz <span class='cn'>isn’t</span> cooking.", "Aziz ovqat pishirmayapti."],
      ["We <span class='cn'>aren’t</span> watching TV.", "Biz televizor ko’rmayapmiz."],
      ["Lola <span class='cn'>isn’t</span> singing.", "Lola qo’shiq aytmayapti."],
      ["They <span class='cn'>aren’t</span> playing football.", "Ular futbol o’ynashmayapti."],
      ["You <span class='cn'>aren’t</span> listening!", "Siz tinglamayapsiz!"] ] },
    { t: "gaps", title: "Make it NO", sub: "Write am not, isn’t or aren’t. · Inkor qiling. Tap to check.", w: 220, fs: 40, rows: [
      ["I ___ sleeping.", "am not"], ["Aziz ___ cooking.", "isn’t"], ["We ___ watching TV.", "aren’t"],
      ["Madina ___ singing.", "isn’t"], ["They ___ waiting.", "aren’t"], ["The cat ___ eating.", "isn’t"] ] },

    /* ---------- YES / NO QUESTIONS ---------- */
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "Am / Is / Are + who + verb-ing?",
      sub: "Qoida: savolda am / is / are <b>boshiga</b> chiqadi. Do / does kerak emas! O’zbekchada: -yap…-mi? (o’qi-yap-siz-mi?)", rows: [
      { chips: [["Are", "peach"], ["you", "skyb"], ["reading?", "mint"]], uz: "O’qiyapsizmi?" },
      { chips: [["Is", "peach"], ["Lola", "skyb"], ["singing?", "mint"]], uz: "Lola qo’shiq aytyaptimi?" },
      { chips: [["Are", "peach"], ["they", "skyb"], ["playing?", "mint"]], uz: "Ular o’ynashyaptimi?" } ],
      notes: ["You are reading. → Are you reading?", "No do / does!"] },
    { t: "cols", eb: "Short answers · Qisqa javoblar", title: "Yes, I am. No, I’m not.", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 40, lines: ["<span class='cw'>Are</span> you reading?", "<span class='cw'>Is</span> he sleeping?", "<span class='cw'>Is</span> she cooking?", "<span class='cw'>Are</span> they playing?"] },
      { bg: "mint", label: "Yes ✓", lc: "g", fs: 40, lines: ["Yes, I <span class='ca'>am</span>.", "Yes, he <span class='ca'>is</span>.", "Yes, she <span class='ca'>is</span>.", "Yes, they <span class='ca'>are</span>."] },
      { bg: "peach", label: "No ✗", lc: "r", fs: 40, lines: ["No, I<span class='cn'>’m not</span>.", "No, he <span class='cn'>isn’t</span>.", "No, she <span class='cn'>isn’t</span>.", "No, they <span class='cn'>aren’t</span>."] } ],
      notes: ["Qisqa javob: fe’lni takrorlamaymiz", "Never: “Yes, I’m.”"] },
    { t: "examples", eb: "Questions · So’roq", title: "Ask and answer", items: [
      ["<span class='cw'>Are</span> you sleeping? No, I’m not.", "Uxlayapsizmi? Yo’q, uxlamayapman."],
      ["<span class='cw'>Is</span> Madina cooking plov? Yes, she is.", "Madina palov pishiryaptimi? Ha."],
      ["<span class='cw'>Are</span> they playing football? Yes, they are.", "Ular futbol o’ynashyaptimi? Ha."],
      ["<span class='cw'>Is</span> Bobur doing his homework? No, he isn’t.", "Bobur uy vazifasini qilyaptimi? Yo’q."],
      ["<span class='cw'>Are</span> you listening to music? Yes, I am.", "Musiqa tinglayapsizmi? Ha."],
      ["<span class='cw'>Is</span> your father working? No, he isn’t.", "Otangiz ishlayaptimi? Yo’q."] ] },
    { t: "gaps", title: "Am, is or are?", sub: "Start the question. · Savolni boshlang. Tap to check.", w: 160, fs: 40, rows: [
      ["___ you reading?", "Are"], ["___ Lola singing?", "Is"], ["___ they waiting for the bus?", "Are"],
      ["___ he doing his homework?", "Is"], ["___ the children drawing?", "Are"], ["___ your mum cooking plov?", "Is"] ] },

    /* ---------- WHAT ARE YOU DOING? ---------- */
    { t: "formula", bg: "ink", eb: "Wh- questions", title: "What + am / is / are + who + doing?",
      sub: "Qoida: savol so’zi (What, Where, Who) birinchi, keyin am / is / are. “What are you doing?” = Nima qilyapsiz?", rows: [
      { chips: [["What", "butter"], ["are", "peach"], ["you", "skyb"], ["doing?", "mint"]], uz: "Nima qilyapsiz?" },
      { chips: [["What", "butter"], ["is", "peach"], ["Aziz", "skyb"], ["eating?", "mint"]], uz: "Aziz nima yeyapti?" },
      { chips: [["Where", "butter"], ["are", "peach"], ["they", "skyb"], ["going?", "mint"]], uz: "Ular qayerga ketishyapti?" } ],
      notes: ["What = nima", "Where = qayerga / qayerda", "Who = kim"] },
    { t: "examples", eb: "Wh- questions", title: "What are you doing?", menu: "What are you doing?", items: [
      ["<span class='cw'>What</span> are you doing? I’m reading.", "Nima qilyapsiz? Kitob o’qiyapman."],
      ["<span class='cw'>What</span> is Aziz doing? He’s cooking plov.", "Aziz nima qilyapti? Palov pishiryapti."],
      ["<span class='cw'>What</span> are they doing? They’re playing.", "Ular nima qilishyapti? O’ynashyapti."],
      ["<span class='cw'>What</span> is Lola drinking? She’s drinking tea.", "Lola nima ichyapti? Choy ichyapti."],
      ["<span class='cw'>Where</span> are you going? To the bazaar.", "Qayerga ketyapsiz? Bozorga."],
      ["<span class='cw'>Who</span> is singing? Dilnoza is.", "Kim qo’shiq aytyapti? Dilnoza."] ] },
    { t: "gaps", title: "What ___ you doing?", sub: "Write am, is or are. Tap to check.", w: 160, fs: 40, rows: [
      ["What ___ you doing?", "are"], ["What ___ Bobur eating?", "is"], ["Where ___ they going?", "are"],
      ["What ___ your sister drawing?", "is"], ["Who ___ talking on the phone?", "is"], ["What ___ I doing? (the teacher mimes)", "am"] ] },

    /* ---------- CAREFUL ---------- */
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 40, lines: ["<span class='cn'>Do</span> you reading?", "She <span class='cn'>not</span> cooking.", "Yes, <span class='cn'>I’m</span>.", "What <span class='cn'>you are</span> doing?"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 40, lines: ["<span class='ca'>Are</span> you reading?", "She <span class='ca'>isn’t</span> cooking.", "Yes, <span class='ca'>I am</span>.", "What <span class='ca'>are you</span> doing?"] },
      { bg: "butter", label: "Why?", fs: 34, lines: ["-ing → am / is / are"], uz: "-ing bilan do / does ishlatilmaydi. Inkorda not yolg’iz emas: isn’t / aren’t. Qisqa javob oxirida I’m bo’lmaydi: Yes, I am." } ] },

    /* ---------- QUIZZES ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", w: 640, rows: [
      ["Men uxlamayapman.", "I’m not sleeping."],
      ["Nima qilyapsiz?", "What are you doing?"],
      ["Lola qo’shiq aytyaptimi?", "Is Lola singing?"],
      ["Ular televizor ko’rmayapti.", "They aren’t watching TV."],
      ["Ha, tinglayapman. (Are you listening?)", "Yes, I am."] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: make it NO and a question", sub: "Say both. Tap to check.", fs: 38, w: 720, rows: [
      ["You are reading.", "You aren’t reading. · Are you reading?"],
      ["Aziz is cooking.", "Aziz isn’t cooking. · Is Aziz cooking?"],
      ["They are drawing.", "They aren’t drawing. · Are they drawing?"],
      ["She is waiting for the bus.", "She isn’t waiting for the bus. · Is she waiting for the bus?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["Do you sleeping?", "Are you sleeping?"],
      ["He not drawing.", "He isn’t drawing."],
      ["Is they playing?", "Are they playing?"],
      ["What you are doing?", "What are you doing?"] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "sky", title: "Ask a classmate", sub: "Pick a card. Ask a classmate. They answer: “Yes, I am.” / “No, I’m not.” · Sinfdoshingizdan so’rang.", size: 48,
      cards: ["Are you sleeping?", "Are you listening?", "Are you eating?", "Is your mum cooking now?", "What is your dad doing now?", "What are you doing now?"] },
    { t: "spot", bg: "yel", title: "Guess what I’m doing!", sub: "Pairs. B picks a secret card. A asks: “Are you …ing?” B: “No, I’m not.” … “Yes, I am!” · Juftlikda topishmoq.", size: 46,
      cards: [{ t: "doing homework", uz: "uy vazifasini qilyapman" }, { t: "washing the dishes", uz: "idish yuvyapman" }, { t: "waiting for the bus", uz: "avtobus kutyapman" }, { t: "watching TV", uz: "televizor ko’ryapman" }, { t: "listening to music", uz: "musiqa tinglayapman" }, { t: "cleaning my room", uz: "xonamni tozalayapman" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say what I am not doing: I’m not…", "use isn’t and aren’t", "ask: Are you …ing? Is she …ing?", "answer: Yes, I am. / No, I’m not.", "ask: What are you doing?", "use new words: draw, sing, wait for…"] },
    { t: "bye", chips: [["I’m not sleeping.", "peach"], ["Are you reading?", "mint"], ["What are you doing?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "sleeping", say: "Are you sleeping? — Yes, I am!" }, { cue: "cooking plov", say: "Are you cooking plov? — Yes, I am!" },
      { cue: "washing the dishes", say: "Are you washing the dishes? — Yes, I am!" }, { cue: "talking on the phone", say: "Are you talking on the phone? — Yes, I am!" },
      { cue: "listening to music", say: "Are you listening to music? — Yes, I am!" }, { cue: "drawing a cat", say: "Are you drawing a cat? — Yes, I am!" },
      { cue: "singing", say: "Are you singing? — Yes, I am!" }, { cue: "doing homework", say: "Are you doing your homework? — Yes, I am!" },
      { cue: "waiting for the bus", say: "Are you waiting for the bus? — Yes, I am!" }, { cue: "cleaning the window", say: "Are you cleaning the window? — Yes, I am!" },
      { cue: "drinking tea", say: "Are you drinking tea? — Yes, I am!" }, { cue: "playing football", say: "Are you playing football? — Yes, I am!" }
    ],
    board: [
      { cat: "isn’t / aren’t", qs: [["Make it NO: I am sleeping.", "I’m not sleeping."], ["Make it NO: She is cooking.", "She isn’t cooking."], ["Make it NO: They are playing football.", "They aren’t playing football."]] },
      { cat: "Questions", qs: [["Make a question: You are reading.", "Are you reading?"], ["Make a question: Aziz is cooking.", "Is Aziz cooking?"], ["Make a question: They are waiting.", "Are they waiting?"]] },
      { cat: "Short answers", qs: [["Are you sleeping? (no)", "No, I’m not."], ["Is Lola singing? (yes)", "Yes, she is."], ["Are they drawing? (no)", "No, they aren’t."]] },
      { cat: "What…?", qs: [["“Nima qilyapsiz?” in English", "What are you doing?"], ["Ask about Bobur.", "What is Bobur doing?"], ["“Qayerga ketyapsiz?” in English", "Where are you going?"]] },
      { cat: "New words", qs: [["“rasm chizmoq” in English", "draw"], ["“kutmoq” in English", "wait (for)"], ["“idish yuvmoq” in English", "wash the dishes"]] },
      { cat: "Fix it", qs: [["She not cooking.", "She isn’t cooking."], ["Do you reading?", "Are you reading?"], ["Yes, I’m.", "Yes, I am."]] }
    ],
    wheel: [
      { name: "No!", tasks: ["Say: I’m not sleeping.", "Say 2 things you aren’t doing now.", "Say 1 thing the teacher isn’t doing.", "Say: My friends aren’t …ing."] },
      { name: "Ask", tasks: ["Ask a classmate: “Are you …ing?”", "Ask the teacher: “What are you doing?”", "Ask about a classmate: “Is … …ing?”", "Ask 2 questions with “Are you…?”"] },
      { name: "Answer", tasks: ["Answer: Are you sleeping?", "Answer: Are you listening?", "Answer: Is the teacher singing?", "Answer: What are you doing?"] },
      { name: "Mime", tasks: ["Mime an action. The class asks: “Are you …ing?”", "Mime: washing the dishes.", "Mime: talking on the phone.", "Mime: drawing a cat."] },
      { name: "Family", tasks: ["What is your mother doing now? Guess!", "Is your father working now?", "Is your brother or sister sleeping now?", "Say: My family isn’t …ing."] },
      { name: "Words", tasks: ["Say 3 new words.", "Spell: draw.", "Say in English: musiqa tinglamoq.", "Say in English: telefonda gaplashmoq."] }
    ],
    build: [
      { w: ["I’m", "not", "sleeping"], e: "." }, { w: ["Are", "you", "reading"], e: "?" },
      { w: ["What", "are", "you", "doing"], e: "?" }, { w: ["She", "isn’t", "cooking", "plov"], e: "." },
      { w: ["Is", "Aziz", "drawing"], e: "?" }, { w: ["They", "aren’t", "watching", "TV"], e: "." },
      { w: ["Where", "are", "you", "going"], e: "?" }, { w: ["Are", "they", "waiting", "for", "the", "bus"], e: "?" }
    ],
    auction: [
      { s: "I’m not sleeping.", ok: true },
      { s: "She not cooking.", ok: false, fix: "She isn’t cooking." },
      { s: "Are you listening to music?", ok: true },
      { s: "Do you reading?", ok: false, fix: "Are you reading?" },
      { s: "What are you doing?", ok: true },
      { s: "What you are doing?", ok: false, fix: "What are you doing?" },
      { s: "Are you sleeping? Yes, I’m.", ok: false, fix: "Are you sleeping? Yes, I am." },
      { s: "Are they playing? No, they aren’t.", ok: true },
      { s: "Is Lola singing?", ok: true },
      { s: "He isn’t draw.", ok: false, fix: "He isn’t drawing." }
    ]
  }
};
