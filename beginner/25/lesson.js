/* Beginner · Lesson 25 · I work, I don’t work
   Teaches: present simple with I, you, we, they: I work. We live in Tashkent. They drink tea every day.
   Negative: don’t + verb: I don’t work on Sunday. (No he / she yet: lesson 26. No questions yet: lesson 27.)
   Uzbek: hozirgi-kelasi zamon: ishlayman / ishlamayman.
   Recycles: I like / I don’t like (22), days and time: on Sunday, at eight o’clock (23),
   can and verbs: swim, cook, read, speak, play (19), food and drink (22), cities (8).
   New words: work, live, study, eat, drink, go to school, go to work, watch TV, every day.
   Built for Thu 11 Feb 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b25",
  n: 25,
  title: "I work, I don’t work",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 25", title: "I work, I <span class='cy'>don’t work</span>", lead: "Present simple: I, you, we, they · Har kungi ishlar", chips: [["Men ishlayman.", "peach"], ["Biz ishlamaymiz.", "mint"], ["Har kuni", "skyb"]] },
    { t: "goals", items: [
      ["Say what I do every day", "I drink tea every day.", "Men har kuni choy ichaman."],
      ["Say what I don’t do", "I don’t work on Sunday.", "Men yakshanba kuni ishlamayman."],
      ["Talk about you, we and they", "We live in Tashkent.", "Biz Toshkentda yashaymiz."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: days and time", sub: "Lessons 23 and 24! Pick a card. Say a sentence.",
      cards: ["Today is…", "Tomorrow is…", "7:00", "8:30", "The lesson is on…", "The lesson is at…"] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Every day", menu: "New words: every day", items: [
      ["I <span class='ca'>work</span> in Tashkent.", "work = ishlamoq"],
      ["We <span class='ca'>live</span> in Samarkand.", "live = yashamoq"],
      ["I <span class='ca'>study</span> English.", "study = o’qimoq, o’rganmoq"],
      ["They <span class='ca'>eat</span> plov on Thursday.", "eat = yemoq"],
      ["We <span class='ca'>drink</span> green tea.", "drink = ichmoq"],
      ["I drink tea <span class='ca'>every day</span>.", "every day = har kuni"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Go and watch", menu: "New words: go, watch", items: [
      ["I <span class='ca'>go to school</span> at eight o’clock.", "go to school = maktabga bormoq"],
      ["They <span class='ca'>go to work</span> at nine o’clock.", "go to work = ishga bormoq"],
      ["We <span class='ca'>watch TV</span> at home.", "watch TV = televizor ko’rmoq"],
      ["I <span class='ca'>speak</span> Uzbek and English.", "speak = gapirmoq"],
      ["You <span class='ca'>play</span> football on Saturday.", "play = o’ynamoq"],
      ["I <span class='ca'>read</span> books on Sunday.", "read = (kitob) o’qimoq"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "My day", menu: "New words: my day", items: [
      { bg: "peach", w: "🏫", label: "go to school", en: "I go to school.", uz: "Men maktabga boraman." },
      { bg: "mint", w: "💼", label: "go to work", en: "We go to work.", uz: "Biz ishga boramiz." },
      { bg: "skyb", w: "📺", label: "watch TV", en: "They watch TV.", uz: "Ular televizor ko’rishadi." },
      { bg: "butter", w: "🍵", label: "drink tea", en: "I drink tea every day.", uz: "Men har kuni choy ichaman." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "When do we use it? · Qachon ishlatamiz?", title: "Every day, always, my life", menu: "When do we use it?", cols: [
      { bg: "mint", label: "Every day", lc: "g", fs: 40, lines: ["I <span class='ca'>drink</span> tea every day."], uz: "Har kuni bo’ladigan ish." },
      { bg: "skyb", label: "Always true", lc: "b", fs: 40, lines: ["We <span class='ca'>live</span> in Tashkent."], uz: "Doim to’g’ri bo’lgan gap." },
      { bg: "peach", label: "My job", lc: "r", fs: 40, lines: ["I <span class='ca'>work</span> in a school."], uz: "Ishim, o’qishim, hayotim." } ],
      notes: ["You know it! Lesson 22: I like plov. I don’t like fish.", "Siz buni bilasiz: like ham shunday fe’l!"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "I / you / we / they + verb", rows: [
      { chips: [["I", "skyb"], ["work", "mint"], ["in Tashkent.", "butter"]], uz: "Men Toshkentda ishlayman." },
      { chips: [["We", "skyb"], ["live", "mint"], ["in Samarkand.", "butter"]], uz: "Biz Samarqandda yashaymiz." },
      { chips: [["They", "skyb"], ["drink", "mint"], ["green tea.", "butter"]], uz: "Ular ko’k choy ichishadi." } ],
      notes: ["Fe’l o’zgarmaydi: work, live, drink", "am / is / are kerak emas! I work ✓ · I am work ✗"] },
    { t: "table", eb: "Who + verb", title: "The verb is the same", head: ["Who", "verb", "Uzbek"], rows: [
      ["I", "<b class='ca'>work</b>", "Men ishlayman"],
      ["You", "<b class='ca'>work</b>", "Siz ishlaysiz"],
      ["We", "<b class='ca'>work</b>", "Biz ishlaymiz"],
      ["They", "<b class='ca'>work</b>", "Ular ishlashadi"] ],
      notes: ["I, you, we, they → work (no change!)", "He / she: next lesson · Keyingi darsda"] },
    { t: "examples", eb: "Examples · Misollar", title: "Yes sentences", items: [
      ["I <span class='ca'>live</span> in Bukhara.", "Men Buxoroda yashayman."],
      ["You <span class='ca'>speak</span> English.", "Siz ingliz tilida gapirasiz."],
      ["We <span class='ca'>study</span> on Monday and Thursday.", "Biz dushanba va payshanba kunlari o’qiymiz."],
      ["They <span class='ca'>work</span> at the bazaar.", "Ular bozorda ishlashadi."],
      ["My friends <span class='ca'>play</span> football.", "Do’stlarim futbol o’ynashadi."],
      ["I <span class='ca'>go</span> to school at eight o’clock.", "Men soat sakkizda maktabga boraman."] ] },
    { t: "gaps", title: "Which verb?", sub: "Look at the Uzbek. Say the full sentence. Tap to check.", w: 200, fs: 36, rows: [
      ["I ___ in Tashkent. (yashayman)", "live"], ["We ___ green tea. (ichamiz)", "drink"], ["They ___ TV. (ko’rishadi)", "watch"],
      ["I ___ English. (o’rganaman)", "study"], ["You ___ plov. (yeysiz)", "eat"], ["We ___ to school. (boramiz)", "go"] ] },
    { t: "spot", bg: "sky", title: "About me", sub: "Pick a card. Finish the sentence. Say a true sentence! · O’zingiz haqingizda.", size: 52,
      cards: ["I live in…", "I study…", "I drink… every day.", "I eat… every day.", "I go to school at…", "I speak…"] },

    /* ---------- NEGATIVE ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "don’t + verb", rows: [
      { chips: [["I", "skyb"], ["don’t", "peach"], ["work", "mint"], ["on Sunday.", "butter"]], uz: "Men yakshanba kuni ishlamayman." },
      { chips: [["We", "skyb"], ["don’t", "peach"], ["eat", "mint"], ["fish.", "butter"]], uz: "Biz baliq yemaymiz." },
      { chips: [["They", "skyb"], ["don’t", "peach"], ["speak", "mint"], ["English.", "butter"]], uz: "Ular ingliz tilida gapirishmaydi." } ],
      notes: ["don’t = do not", "Inkor: don’t + fe’l (I don’t like = yoqtirmayman, 22-dars!)", "not yolg’iz emas: I not work ✗"] },
    { t: "examples", eb: "Negative · Inkor", title: "No sentences", items: [
      ["I <span class='cn'>don’t drink</span> coffee.", "Men qahva ichmayman."],
      ["You <span class='cn'>don’t work</span> on Saturday.", "Siz shanba kuni ishlamaysiz."],
      ["We <span class='cn'>don’t watch</span> TV.", "Biz televizor ko’rmaymiz."],
      ["They <span class='cn'>don’t live</span> in Tashkent.", "Ular Toshkentda yashashmaydi."],
      ["I <span class='cn'>don’t eat</span> fish.", "Men baliq yemayman."],
      ["My friends <span class='cn'>don’t speak</span> Russian.", "Do’stlarim rus tilida gapirishmaydi."] ] },
    { t: "cols", eb: "Yes and no · Ha va yo’q", title: "I work. I don’t work.", menu: "Yes and no", cols: [
      { bg: "mint", label: "Yes ✓", lc: "g", fs: 40, lines: ["I <span class='ca'>work</span> on Monday.", "We <span class='ca'>drink</span> tea.", "They <span class='ca'>live</span> in Khiva."], uz: "Ishlayman · ichamiz · yashashadi" },
      { bg: "peach", label: "No ✗", lc: "r", fs: 40, lines: ["I <span class='cn'>don’t work</span> on Sunday.", "We <span class='cn'>don’t drink</span> coffee.", "They <span class='cn'>don’t live</span> in Tashkent."], uz: "Ishlamayman · ichmaymiz · yashashmaydi" } ],
      notes: ["Only add don’t. The verb stays the same.", "Faqat don’t qo’shamiz, fe’l o’zgarmaydi."] },
    { t: "gaps", title: "Make it NO", sub: "Say the no sentence. Tap to check.", w: 330, fs: 34, rows: [
      ["I drink coffee. → I ___ coffee.", "don’t drink"], ["We eat fish. → We ___ fish.", "don’t eat"], ["They watch TV. → They ___ TV.", "don’t watch"],
      ["I work on Sunday. → I ___ on Sunday.", "don’t work"], ["You speak Russian. → You ___ Russian.", "don’t speak"], ["We live in Khiva. → We ___ in Khiva.", "don’t live"] ] },
    { t: "gaps", title: "Yes or no?", sub: "Open the brackets. Tap to check.", w: 280, fs: 36, rows: [
      ["I ___ (study) English.", "study"], ["We ___ (not / eat) fish.", "don’t eat"], ["They ___ (play) football.", "play"],
      ["I ___ (not / drink) coffee.", "don’t drink"], ["You ___ (live) in Tashkent.", "live"], ["We ___ (not / work) on Sunday.", "don’t work"] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["I <span class='cn'>am work</span> in Tashkent.", "We <span class='cn'>not eat</span> fish.", "They <span class='cn'>don’t to</span> drink coffee.", "I <span class='cn'>no</span> watch TV."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["I <span class='ca'>work</span> in Tashkent.", "We <span class='ca'>don’t eat</span> fish.", "They <span class='ca'>don’t drink</span> coffee.", "I <span class='ca'>don’t watch</span> TV."],
        uz: "Fe’l bilan am / is / are ishlatmaymiz. Inkor: don’t + fe’l (to kerak emas)." } ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men Toshkentda yashayman.", "I live in Tashkent."],
      ["Biz har kuni choy ichamiz.", "We drink tea every day."],
      ["Men ingliz tilini o’rganaman.", "I study English."],
      ["Men yakshanba kuni ishlamayman.", "I don’t work on Sunday."],
      ["Ular televizor ko’rishmaydi.", "They don’t watch TV."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I am live in Samarkand.", "I live in Samarkand."],
      ["We not eat fish.", "We don’t eat fish."],
      ["I don’t to watch TV.", "I don’t watch TV."],
      ["I go to school on eight o’clock.", "I go to school at eight o’clock."] ] },
    { t: "spot", bg: "sky", title: "True for you?", sub: "Read the card. Is it true for you? Say it with or without don’t. · Siz uchun to’g’rimi?", size: 46,
      cards: ["I drink coffee.", "I eat fish.", "I watch TV every day.", "I live in Tashkent.", "I work.", "I speak Russian."] },
    { t: "spot", bg: "yel", title: "Pairs: we… we don’t…", sub: "Pairs. For each card, say “I …” or “I don’t …”. Find the same things and tell the class: “We drink coffee. We don’t study on Sunday.” · Juftlikda.", size: 46,
      cards: [{ t: "drink coffee", uz: "qahva ichmoq" }, { t: "eat plov on Thursday", uz: "payshanba kuni palov yemoq" }, { t: "watch football", uz: "futbol ko’rmoq" }, { t: "live in Tashkent", uz: "Toshkentda yashamoq" }, { t: "speak Russian", uz: "rus tilida gapirmoq" }, { t: "study on Sunday", uz: "yakshanba kuni o’qimoq" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say what I do every day: I drink tea", "use I, you, we, they + verb", "say no with don’t: I don’t work", "use new words: work, live, study, eat, drink…", "say when: on Sunday, at eight o’clock", "remember: no am / is / are with the verb"] },
    { t: "bye", chips: [["I work.", "peach"], ["I don’t work.", "mint"], ["See you on Monday!", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "drink hot tea", say: "I drink tea every day." },
      { cue: "eat plov with a big spoon", say: "I eat plov." },
      { cue: "sit on the sofa, use a remote", say: "I watch TV." },
      { cue: "walk with a school bag", say: "I go to school." },
      { cue: "walk with a work bag, look at your watch", say: "I go to work." },
      { cue: "write in a notebook, read, repeat", say: "I study English." },
      { cue: "read a book", say: "I read books." },
      { cue: "kick a ball", say: "I play football." },
      { cue: "drive a car", say: "I drive a car." },
      { cue: "cook plov in a big kazan", say: "I cook plov." },
      { cue: "look at fish, shake your head: no!", say: "I don’t eat fish!" },
      { cue: "look at coffee, shake your head: no!", say: "I don’t drink coffee!" }
    ],
    board: [
      { cat: "Verbs", qs: [["“yashamoq” in English", "live"], ["“ishlamoq” and “ichmoq”", "work · drink"], ["Say 3 things you do every day.", "I … every day. (any true)"]] },
      { cat: "Yes", qs: [["Men choy ichaman.", "I drink tea."], ["Biz ingliz tilini o’rganamiz.", "We study English."], ["Say 2 things you and your friends do.", "We … (any true)"]] },
      { cat: "Don’t", qs: [["Make it NO: I work.", "I don’t work."], ["Make it NO: They watch TV.", "They don’t watch TV."], ["Say 2 things you don’t do.", "I don’t … (any true)"]] },
      { cat: "Translate", qs: [["Biz palov yeymiz.", "We eat plov."], ["Men ishlamayman.", "I don’t work."], ["Ular Buxoroda yashashadi.", "They live in Bukhara."]] },
      { cat: "Fix it", qs: [["I am work.", "I work."], ["We not drink coffee.", "We don’t drink coffee."], ["They don’t to eat fish.", "They don’t eat fish."]] },
      { cat: "When?", qs: [["I go to school ___ eight o’clock.", "at"], ["We don’t work ___ Sunday.", "on"], ["I drink tea every ___.", "day"]] }
    ],
    wheel: [
      { name: "Every day", tasks: ["Say 2 things you do every day.", "Finish: “I drink … every day.”", "Finish: “I go to … at … o’clock.”", "Say where you live."] },
      { name: "Don’t", tasks: ["Say 2 things you don’t do.", "Finish: “I don’t eat …”", "Finish: “I don’t work on …”", "Make it NO: I watch TV."] },
      { name: "Food", tasks: ["Say what you eat every day.", "Say what you drink every day.", "Say what you don’t drink.", "Finish: “We eat plov on …”"] },
      { name: "My week", tasks: ["Finish: “I study English on …”", "Finish: “I don’t study on …”", "Finish: “I play … on Saturday.”", "Finish: “On Sunday I …”"] },
      { name: "We", tasks: ["Say 2 things we do in class.", "Finish: “We live in …”", "Finish: “We don’t …”", "Finish: “We speak …”"] },
      { name: "They", tasks: ["Say 2 things your friends do.", "Finish: “My parents live in …”", "Finish: “They don’t …”", "Finish: “They work …”"] }
    ],
    build: [
      { w: ["I", "live", "in", "Tashkent"], e: "." },
      { w: ["We", "drink", "tea", "every", "day"], e: "." },
      { w: ["I", "don’t", "work", "on", "Sunday"], e: "." },
      { w: ["They", "watch", "TV", "at", "home"], e: "." },
      { w: ["You", "speak", "English"], e: "." },
      { w: ["We", "don’t", "eat", "fish"], e: "." },
      { w: ["I", "go", "to", "school", "at", "eight"], e: "." },
      { w: ["They", "don’t", "drink", "coffee"], e: "." }
    ],
    auction: [
      { s: "I live in Samarkand.", ok: true },
      { s: "We are work in Tashkent.", ok: false, fix: "We work in Tashkent." },
      { s: "They don’t watch TV.", ok: true },
      { s: "I not eat fish.", ok: false, fix: "I don’t eat fish." },
      { s: "You speak English and Uzbek.", ok: true },
      { s: "I don’t to drink coffee.", ok: false, fix: "I don’t drink coffee." },
      { s: "We drink green tea every day.", ok: true },
      { s: "I go to school on eight o’clock.", ok: false, fix: "I go to school at eight o’clock." },
      { s: "They study English on Monday and Thursday.", ok: true },
      { s: "I am don’t work on Sunday.", ok: false, fix: "I don’t work on Sunday." }
    ]
  }
};
