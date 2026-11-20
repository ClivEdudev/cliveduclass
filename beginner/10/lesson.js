/* Beginner · Lesson 10 · Not and questions with to be
   Teaches: negatives I’m not / isn’t / aren’t, questions Am / Is / Are + I / you / he…?,
   short answers (Yes, I am. · No, I’m not. · Yes, she is. · No, they aren’t.).
   New words: happy, sad, hungry, thirsty, busy, cold, hot (tired from lesson 1).
   Recycles: I am / you are and jobs (lesson 7), he / she / it and countries (lesson 8),
   we / they and plurals (lesson 9), colours (lesson 5), It’s a pen (lesson 4).
   Built for Mon 21 Dec 2026. */
window.LESSON = {
  id: "b10",
  n: 10,
  title: "Not and questions with to be",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 10", title: "I’m <span class='cy'>not</span>… Are you…?", lead: "to be: no and questions · Inkor va so’roq", chips: [["Men band emasman.", "peach"], ["Siz o’quvchimisiz?", "mint"], ["Ha. · Yo’q.", "skyb"]] },
    { t: "goals", items: [
      ["Say no with to be", "I’m not a teacher.", "Men o’qituvchi emasman."],
      ["Ask with to be", "Are you a student?", "Siz o’quvchimisiz?"],
      ["Give short answers", "Yes, I am. · No, I’m not.", "Ha. · Yo’q."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: one or many?", sub: "Pick a card. Finish it. · Kartani tanlang va gapni tugating.", size: 50,
      cards: [{ t: "a book → two…", uz: "ikkita kitob" }, { t: "a bus → three…", uz: "uchta avtobus" }, { t: "Aziz and I → …", uz: "Aziz va men" }, { t: "Lola and Bobur → …", uz: "Lola va Bobur" }, { t: "We are…", uz: "Biz …miz." }, { t: "They are from…", uz: "Ular …dan." }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "How are you? Feelings", menu: "New words: feelings", items: [
      ["😀 I’m <span class='ca'>happy</span>.", "happy = xursand"],
      ["😢 She’s <span class='ca'>sad</span>.", "sad = xafa"],
      ["🍽️ He’s <span class='ca'>hungry</span>.", "hungry = och (qorni och)"],
      ["💧 We’re <span class='ca'>thirsty</span>.", "thirsty = chanqagan"],
      ["📚 They’re <span class='ca'>busy</span>.", "busy = band"],
      ["😴 I’m <span class='ca'>tired</span>.", "tired = charchagan (Lesson 1)"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Hot or cold?", items: [
      { bg: "skyb", w: "🥶", label: "cold = sovuq", en: "I’m cold.", uz: "Menga sovuq." },
      { bg: "peach", w: "🥵", label: "hot = issiq", en: "I’m hot.", uz: "Menga issiq." },
      { bg: "mint", w: "😀", label: "happy = xursand", en: "We’re happy.", uz: "Biz xursandmiz." },
      { bg: "butter", w: "😢", label: "sad = xafa", en: "He’s sad.", uz: "U xafa." } ] },

    /* ---------- NEGATIVE ---------- */
    { t: "cols", eb: "Negative · Inkor", title: "Not = emas", menu: "Not", cols: [
      { bg: "skyb", label: "I", lc: "b", fs: 40, lines: ["I am <span class='cn'>not</span>", "= I<span class='cn'>’m not</span>"], uz: "Men … emasman" },
      { bg: "mint", label: "he / she / it", lc: "g", fs: 40, lines: ["is <span class='cn'>not</span>", "= <span class='cn'>isn’t</span>"], uz: "U … emas" },
      { bg: "peach", label: "we / you / they", lc: "r", fs: 40, lines: ["are <span class='cn'>not</span>", "= <span class='cn'>aren’t</span>"], uz: "Biz … emasmiz · Ular … emas" } ],
      notes: ["Inkor: am / is / are dan keyin not qo’shamiz", "O’zbekcha: emas"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "am / is / are + not", rows: [
      { chips: [["I", "skyb"], ["’m not", "peach"], ["a teacher.", "mint"]], uz: "Men o’qituvchi emasman." },
      { chips: [["He", "skyb"], ["isn’t", "peach"], ["from Russia.", "mint"]], uz: "U Rossiyadan emas." },
      { chips: [["They", "skyb"], ["aren’t", "peach"], ["hungry.", "mint"]], uz: "Ularning qorni och emas." } ],
      notes: ["is not = isn’t", "are not = aren’t", "I am not = I’m not (no «amn’t»!)"] },
    { t: "examples", eb: "Negative · Inkor", title: "Examples: no sentences", items: [
      ["I<span class='cn'>’m not</span> hungry.", "Qornim och emas."],
      ["She <span class='cn'>isn’t</span> a doctor. She’s a teacher.", "U shifokor emas. U o’qituvchi."],
      ["He <span class='cn'>isn’t</span> from Samarkand.", "U Samarqanddan emas."],
      ["It <span class='cn'>isn’t</span> red. It’s blue.", "Bu qizil emas. Ko’k."],
      ["We <span class='cn'>aren’t</span> busy.", "Biz band emasmiz."],
      ["They <span class='cn'>aren’t</span> from Korea. They’re from China.", "Ular Koreyadan emas. Ular Xitoydan."] ] },
    { t: "gaps", title: "am not, isn’t or aren’t?", sub: "Say the full sentence. Tap to check. · To’liq gapni ayting.", w: 230, fs: 38, rows: [
      ["I ___ hungry.", "am not"], ["She ___ from Russia.", "isn’t"], ["We ___ busy.", "aren’t"],
      ["It ___ a pen.", "isn’t"], ["They ___ sad.", "aren’t"], ["Aziz ___ a driver.", "isn’t"] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "Are you…? Is he…?", rows: [
      { chips: [["Are", "peach"], ["you", "skyb"], ["a student?", "mint"]], uz: "Siz o’quvchimisiz?" },
      { chips: [["Is", "peach"], ["he", "skyb"], ["from Bukhara?", "mint"]], uz: "U Buxorodanmi?" },
      { chips: [["Are", "peach"], ["they", "skyb"], ["hungry?", "mint"]], uz: "Ularning qorni ochmi?" } ],
      notes: ["am / is / are goes FIRST", "You are… → Are you…?", "O’zbekcha: -mi?"] },
    { t: "cols", eb: "Short answers · Qisqa javoblar", title: "Yes, I am. No, I’m not.", menu: "Short answers", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 38, lines: ["<span class='cw'>Are</span> you hungry?", "<span class='cw'>Is</span> she a teacher?", "<span class='cw'>Are</span> they from Korea?"] },
      { bg: "mint", label: "Yes · Ha", lc: "g", fs: 38, lines: ["Yes, I <span class='ca'>am</span>.", "Yes, she <span class='ca'>is</span>.", "Yes, they <span class='ca'>are</span>."] },
      { bg: "peach", label: "No · Yo’q", lc: "r", fs: 38, lines: ["No, I<span class='cn'>’m not</span>.", "No, she <span class='cn'>isn’t</span>.", "No, they <span class='cn'>aren’t</span>."] } ],
      notes: ["Never: Yes, I’m. · Yes, she’s.", "Yes = Ha · No = Yo’q"] },
    { t: "examples", eb: "Questions · So’roq", title: "Ask and answer", items: [
      ["<span class='cw'>Are</span> you from Tashkent? — Yes, I am.", "Toshkentdanmisiz? — Ha."],
      ["<span class='cw'>Is</span> Lola a doctor? — No, she isn’t.", "Lola shifokormi? — Yo’q."],
      ["<span class='cw'>Is</span> it a pen? — Yes, it is.", "Bu ruchkami? — Ha."],
      ["<span class='cw'>Are</span> they students? — Yes, they are.", "Ular o’quvchilarmi? — Ha."],
      ["<span class='cw'>Is</span> he hungry? — No, he isn’t.", "Uning qorni ochmi? — Yo’q."],
      ["<span class='cw'>Are</span> you busy? — No, I’m not.", "Bandmisiz? — Yo’q."] ] },
    { t: "gaps", title: "Am, is or are?", sub: "Say the question and the answer. Tap to check.", w: 200, fs: 38, rows: [
      ["___ you a student?", "Are"], ["___ she from Korea?", "Is"], ["___ they hungry?", "Are"],
      ["___ it a red car?", "Is"], ["Are you busy? — Yes, I ___.", "am"], ["Is he a doctor? — Yes, he ___.", "is"] ] },
    { t: "gaps", title: "Short answers", sub: "Say the short answer. Tap to check. · Qisqa javob bering.", w: 270, fs: 34, rows: [
      ["Are they from China? — Yes, ___.", "they are"], ["Is Madina sad? — No, ___.", "she isn’t"], ["Are you thirsty? — No, ___.", "I’m not"],
      ["Is it hot? — Yes, ___.", "it is"], ["Are Aziz and Bobur drivers? — No, ___.", "they aren’t"], ["Is Bobur from Bukhara? — Yes, ___.", "he is"] ] },
    { t: "spot", bg: "sky", title: "Ask the class!", sub: "Ask a classmate. They answer: “Yes, I am.” or “No, I’m not.” · Sinfdoshingizdan so’rang.", size: 52,
      cards: [{ t: "Are you hungry?", uz: "Qorningiz ochmi?" }, { t: "Are you tired?", uz: "Charchadingizmi?" }, { t: "Are you from Tashkent?", uz: "Toshkentdanmisiz?" }, { t: "Are you a student?", uz: "O’quvchimisiz?" }, { t: "Are you happy?", uz: "Xursandmisiz?" }, { t: "Are you cold?", uz: "Sovqotyapsizmi?" }] },

    /* ---------- BE CAREFUL ---------- */
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 36, lines: ["I <span class='cn'>not</span> hungry.", "<span class='cn'>You are</span> a student?", "Yes, <span class='cn'>I’m</span>.", "I <span class='cn'>amn’t</span> busy."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 36, lines: ["I<span class='ca'>’m not</span> hungry.", "<span class='ca'>Are you</span> a student?", "Yes, <span class='ca'>I am</span>.", "I<span class='ca'>’m not</span> busy."] },
      { bg: "butter", label: "Why? · Nega?", fs: 30, lines: ["am + not", "Are first", "Yes, I am.", "I’m not"], uz: "«not» dan oldin am / is / are kerak. Savolda am / is / are birinchi keladi. Qisqa javobda «Yes, I’m» deyilmaydi." } ] },

    /* ---------- PRACTICE ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Qornim och emas.", "I’m not hungry."],
      ["U o’qituvchi emas. (Lola)", "She isn’t a teacher."],
      ["Siz bandmisiz?", "Are you busy?"],
      ["Ular Koreyadanmi?", "Are they from Korea?"],
      ["Bu ko’k emas.", "It isn’t blue."] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: make it no and a question", sub: "Say both. Tap to check.", fs: 36, rows: [
      ["She is a doctor.", "She isn’t a doctor. · Is she a doctor?"],
      ["They are from Samarkand.", "They aren’t from Samarkand. · Are they from Samarkand?"],
      ["You are hungry.", "You aren’t hungry. · Are you hungry?"],
      ["It is red.", "It isn’t red. · Is it red?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I not busy.", "I’m not busy."],
      ["You are a student?", "Are you a student?"],
      ["Is she happy? — Yes, she’s.", "Is she happy? — Yes, she is."],
      ["They isn’t from Korea.", "They aren’t from Korea."],
      ["Are he hungry?", "Is he hungry?"] ] },
    { t: "spot", bg: "yel", title: "Yes and no about me", sub: "Say one yes sentence and one no sentence: “I’m from Tashkent. I’m not from Bukhara.” · Bitta «ha» va bitta «yo’q» gap.", size: 50,
      cards: [{ t: "I’m not…", uz: "Men … emasman." }, { t: "I’m not from…", uz: "Men …dan emasman." }, { t: "My friend isn’t…", uz: "Do’stim … emas." }, { t: "We aren’t…", uz: "Biz … emasmiz." }, { t: "My bag isn’t…", uz: "Sumkam … emas." }, { t: "It isn’t…", uz: "Bu … emas." }] },
    { t: "spot", bg: "sky", title: "Pairs: Who am I?", sub: "Pairs. A takes a secret card. B asks: “Are you a doctor?” “Are you from Korea?” A answers: “Yes, I am.” / “No, I’m not.”", size: 46,
      cards: [{ t: "teacher · Tashkent", uz: "o’qituvchi · Toshkent" }, { t: "doctor · Korea", uz: "shifokor · Koreya" }, { t: "driver · Russia", uz: "haydovchi · Rossiya" }, { t: "student · Samarkand", uz: "o’quvchi · Samarqand" }, { t: "teacher · England", uz: "o’qituvchi · Angliya" }, { t: "doctor · Turkey", uz: "shifokor · Turkiya" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say no: I’m not… isn’t… aren’t…", "ask: Are you…? Is he…?", "answer: Yes, I am. / No, I’m not.", "talk about feelings: happy, hungry, busy…", "use to be with I, you, he, she, it, we, they"] },
    { t: "bye", chips: [["I’m not…", "peach"], ["Are you…?", "mint"], ["Yes, I am.", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "hungry (rub your tummy)", say: "Are you hungry? — Yes, I am." }, { cue: "thirsty (drink water)", say: "Are you thirsty? — Yes, I am." },
      { cue: "cold (shiver)", say: "Are you cold? — Yes, I am." }, { cue: "hot (fan your face)", say: "Are you hot? — Yes, I am." },
      { cue: "sad (cry)", say: "Are you sad? — Yes, I am." }, { cue: "happy (big smile)", say: "Are you happy? — Yes, I am." },
      { cue: "tired (yawn)", say: "Are you tired? — Yes, I am." }, { cue: "busy (write, phone, run)", say: "Are you busy? — Yes, I am." },
      { cue: "a doctor", say: "Are you a doctor? — Yes, I am." }, { cue: "a driver", say: "Are you a driver? — Yes, I am." },
      { cue: "not hungry (push the food away)", say: "Are you hungry? — No, I’m not." }, { cue: "a girl smiles: not sad", say: "She isn’t sad. She’s happy!" }
    ],
    board: [
      { cat: "Not", qs: [["Make it NO: I am hungry.", "I’m not hungry."], ["Make it NO: She is a doctor.", "She isn’t a doctor."], ["Make it NO: They are from China.", "They aren’t from China."]] },
      { cat: "Questions", qs: [["Make a question: You are a student.", "Are you a student?"], ["Make a question: He is busy.", "Is he busy?"], ["Make a question: They are from Korea.", "Are they from Korea?"]] },
      { cat: "Yes answers", qs: [["Are you happy? — Yes, …", "Yes, I am."], ["Is she a teacher? — Yes, …", "Yes, she is."], ["Are they hungry? — Yes, …", "Yes, they are."]] },
      { cat: "No answers", qs: [["Are you cold? — No, …", "No, I’m not."], ["Is it a pen? — No, …", "No, it isn’t."], ["Are Aziz and Lola students? — No, …", "No, they aren’t."]] },
      { cat: "New words", qs: [["“xursand” in English", "happy"], ["“och” and “band” in English", "hungry · busy"], ["“Menga sovuq.” in English", "I’m cold."]] },
      { cat: "Fix it", qs: [["I not hungry.", "I’m not hungry."], ["You are a doctor?", "Are you a doctor?"], ["Are you tired? — Yes, I’m.", "Yes, I am."]] }
    ],
    wheel: [
      { name: "I’m not", tasks: ["Say: I’m not a …(job).", "Say: I’m not from …", "Say 2 things: I’m not hungry / tired…", "Say: I’m not …, I’m …"] },
      { name: "isn’t", tasks: ["Point at a boy. Say: He isn’t …", "Point at a girl. Say: She isn’t …", "Hold a pen. Say: It isn’t red. It’s …", "Say: Tashkent isn’t in …"] },
      { name: "aren’t", tasks: ["Say: We aren’t …", "Point at 2 classmates. Say: They aren’t …", "Say: We aren’t from …", "Say: They aren’t …, they’re …"] },
      { name: "Ask", tasks: ["Ask a classmate: Are you hungry?", "Ask about a boy: Is he …?", "Ask about a girl: Is she from …?", "Ask about 2 classmates: Are they …?"] },
      { name: "Answer", tasks: ["Answer: Are you a student?", "Answer: Are you from Samarkand?", "Answer: Are you cold?", "Answer: Is Tashkent in Uzbekistan?"] },
      { name: "Feelings", tasks: ["Say how you are now: I’m …", "Mime a feeling. Your team asks: Are you …?", "Say: I’m not sad, I’m happy.", "Ask a classmate: Are you thirsty?"] }
    ],
    build: [
      { w: ["I’m","not","hungry"], e: "." }, { w: ["Are","you","a","student"], e: "?" }, { w: ["She","isn’t","a","doctor"], e: "." },
      { w: ["Is","he","from","Bukhara"], e: "?" }, { w: ["They","aren’t","busy"], e: "." }, { w: ["Yes,","I","am"], e: "." },
      { w: ["No,","she","isn’t"], e: "." }, { w: ["Are","they","from","Korea"], e: "?" }
    ],
    auction: [
      { s: "I’m not hungry.", ok: true },
      { s: "She not a teacher.", ok: false, fix: "She isn’t a teacher." },
      { s: "Are you from Samarkand?", ok: true },
      { s: "You are busy?", ok: false, fix: "Are you busy?" },
      { s: "Is he a driver? — Yes, he is.", ok: true },
      { s: "Are you happy? — Yes, I’m.", ok: false, fix: "Are you happy? — Yes, I am." },
      { s: "They aren’t from China.", ok: true },
      { s: "Is they students?", ok: false, fix: "Are they students?" },
      { s: "It isn’t red. It’s blue.", ok: true },
      { s: "I amn’t tired.", ok: false, fix: "I’m not tired." }
    ]
  }
};
