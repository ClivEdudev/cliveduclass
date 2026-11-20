/* Beginner · Lesson 31 · I am reading now
   Teaches: the present continuous, yes sentences only: am / is / are + verb-ing for what is happening now.
   I am reading. She is cooking. They are playing. Spelling: read → reading, write → writing, run → running.
   Every day (I drink tea, lessons 25–29) or now (I am drinking tea)? Uzbek: -yap- (o’qiyapman).
   No negatives and no questions yet: they come in lesson 32 (What are you doing?).
   Recycles: am / is / are (lessons 7–9), commands Look! Listen! (20), food (22), present simple (25–29).
   New words: now, right now, sleep, run, talk, wait (for), rain, laugh.
   Built for Thu 4 Mar 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b31",
  n: 31,
  title: "I am reading now",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 31", title: "I am <span class='cy'>reading</span> now", lead: "am / is / are + -ing · Hozir nima bo’lyapti?", chips: [["Men hozir o’qiyapman.", "peach"], ["U uxlayapti.", "mint"], ["Qarang! Yomg’ir yog’yapti.", "skyb"]] },
    { t: "goals", items: [
      ["Say what I am doing now", "I am reading now.", "Men hozir o’qiyapman."],
      ["Say what other people are doing", "Aziz is playing football.", "Aziz futbol o’ynayapti."],
      ["Add -ing to a verb", "read → reading · write → writing", "Fe’lga -ing qo’shish"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: how often?", sub: "Lessons 29–30! Pick a card. Say: “I always / usually / sometimes / never…”",
      cards: [{ t: "drink tea", uz: "choy ichmoq" }, { t: "watch TV", uz: "televizor ko’rmoq" }, { t: "eat plov", uz: "palov yemoq" }, { t: "play football", uz: "futbol o’ynamoq" }, { t: "cook", uz: "ovqat pishirmoq" }, { t: "read a book", uz: "kitob o’qimoq" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Now!", menu: "New words: now, sleep, run…", items: [
      ["I am reading <span class='ca'>now</span>.", "now = hozir"],
      ["<span class='ca'>Right now</span> I am drinking tea.", "right now = aynan hozir"],
      ["Grandpa <span class='ca'>is sleeping</span>.", "sleep = uxlamoq"],
      ["Aziz <span class='ca'>is running</span>.", "run = yugurmoq"],
      ["Lola <span class='ca'>is talking</span> on the phone.", "talk = gaplashmoq"],
      ["We <span class='ca'>are waiting</span> for the bus.", "wait for = kutmoq"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Look! Listen!", menu: "New words: rain, laugh", items: [
      ["Look! It <span class='ca'>is raining</span>.", "rain = yomg’ir yog’moq"],
      ["Madina <span class='ca'>is laughing</span>.", "laugh = kulmoq"],
      ["<span class='ca'>Look!</span> Bobur is running.", "Look! = Qarang!"],
      ["<span class='ca'>Listen!</span> Dilnoza is singing.", "Listen! = Eshiting!"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "What is happening?", items: [
      { bg: "peach", w: "📖", label: "reading = o’qiyapti", en: "I am reading a book.", uz: "Men kitob o’qiyapman." },
      { bg: "mint", w: "😴", label: "sleeping = uxlayapti", en: "Grandpa is sleeping.", uz: "Bobom uxlayapti." },
      { bg: "skyb", w: "🏃", label: "running = yuguryapti", en: "Aziz is running.", uz: "Aziz yuguryapti." },
      { bg: "butter", w: "🌧️", label: "raining = yomg’ir yog’yapti", en: "It is raining.", uz: "Yomg’ir yog’yapti." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "When do we use it?", title: "Every day or now?", menu: "Every day or now?", cols: [
      { bg: "mint", label: "Every day", lc: "g", fs: 38, lines: ["I drink tea every day.", "She cooks every day."], uz: "Har kuni, doim bo’ladigan ish (25–29-darslar): Men har kuni choy ichaman." },
      { bg: "skyb", label: "Now", lc: "b", fs: 38, lines: ["I <span class='ca'>am drinking</span> tea now.", "She <span class='ca'>is cooking</span> now."], uz: "Aynan hozir bo’layotgan ish: Men hozir choy ichyapman." } ],
      notes: ["O’zbekcha -yap- = inglizcha am / is / are + -ing", "ich-aman (every day) · ich-yap-man (now)"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "Who + am / is / are + verb-ing", rows: [
      { chips: [["I", "skyb"], ["am", "peach"], ["reading", "mint"], ["now.", "butter"]], uz: "Men hozir o’qiyapman." },
      { chips: [["She", "skyb"], ["is", "peach"], ["cooking", "mint"], ["plov.", "butter"]], uz: "U palov pishiryapti." },
      { chips: [["They", "skyb"], ["are", "peach"], ["playing", "mint"], ["football.", "butter"]], uz: "Ular futbol o’ynashyapti." } ],
      notes: ["2 qism: am / is / are + fe’l-ing", "am / is / are ni unutmang!", "-ing ni unutmang!"] },
    { t: "table", eb: "Who + am / is / are", title: "Am, is or are?", head: ["Who", "to be", "verb-ing", "Short form", "Uzbek"], rows: [
      ["I", "<b class='ca'>am</b>", "reading", "I’m reading", "Men o’qiyapman"],
      ["You", "<b class='ca'>are</b>", "reading", "You’re reading", "Siz o’qiyapsiz"],
      ["He / She / It", "<b class='ca'>is</b>", "reading", "He’s / She’s reading", "U o’qiyapti"],
      ["We", "<b class='ca'>are</b>", "reading", "We’re reading", "Biz o’qiyapmiz"],
      ["They", "<b class='ca'>are</b>", "reading", "They’re reading", "Ular o’qishyapti"] ],
      notes: ["Bitta odam yoki narsa (Aziz, my cat) → is", "Ko’p (Aziz and Lola, the children) → are", "Bu am / is / are 7–9-darslardagi bilan bir xil!"] },
    { t: "cols", eb: "Spelling · Imlo", title: "How to add -ing", menu: "How to add -ing", cols: [
      { bg: "mint", label: "+ ing", lc: "g", fs: 40, lines: ["read → reading", "play → playing", "sleep → sleeping"], uz: "Ko’p fe’llar: shunchaki -ing qo’shamiz." },
      { bg: "butter", label: "e → ing", fs: 40, lines: ["write → writing", "dance → dancing", "come → coming"], uz: "Oxiri -e bo’lsa: e tushib qoladi." },
      { bg: "skyb", label: "double", lc: "b", fs: 40, lines: ["run → running", "sit → sitting", "swim → swimming"], uz: "Qisqa fe’l: oxirgi harf ikki marta yoziladi." } ] },
    { t: "gaps", title: "Add -ing", sub: "Careful with the spelling! Tap to check.", w: 300, rows: [
      ["read → ___", "reading"], ["write → ___", "writing"], ["run → ___", "running"],
      ["sleep → ___", "sleeping"], ["sit → ___", "sitting"], ["dance → ___", "dancing"] ] },
    { t: "examples", eb: "I, you, we, they", title: "Examples: I, you, we, they", items: [
      ["I <span class='ca'>am drinking</span> tea.", "Men choy ichyapman."],
      ["You <span class='ca'>are writing</span>.", "Siz yozyapsiz."],
      ["We <span class='ca'>are learning</span> English.", "Biz ingliz tilini o’rganyapmiz."],
      ["They <span class='ca'>are playing</span> football.", "Ular futbol o’ynashyapti."],
      ["My friends <span class='ca'>are waiting</span> for me.", "Do’stlarim meni kutishyapti."],
      ["The children <span class='ca'>are laughing</span>.", "Bolalar kulishyapti."] ] },
    { t: "examples", eb: "He, she, it", title: "Examples: he, she, it", items: [
      ["Mum <span class='ca'>is cooking</span> plov.", "Onam palov pishiryapti."],
      ["Dad <span class='ca'>is watching</span> TV.", "Dadam televizor ko’ryapti."],
      ["Lola <span class='ca'>is talking</span> on the phone.", "Lola telefonda gaplashyapti."],
      ["Bobur <span class='ca'>is running</span>.", "Bobur yuguryapti."],
      ["The cat <span class='ca'>is sleeping</span> on the bed.", "Mushuk karavotda uxlayapti."],
      ["It <span class='ca'>is raining</span> in Samarkand.", "Samarqandda yomg’ir yog’yapti."] ] },
    { t: "gaps", title: "Am, is or are?", sub: "Say the full sentence. Tap to check.", w: 200, fs: 38, rows: [
      ["I ___ reading.", "am"], ["My brother ___ sleeping.", "is"], ["We ___ waiting for the bus.", "are"],
      ["Lola and Madina ___ talking.", "are"], ["It ___ raining.", "is"], ["You ___ writing.", "are"] ] },
    { t: "gaps", title: "Open the brackets", sub: "am / is / are + verb-ing. Tap to check.", w: 300, fs: 36, rows: [
      ["She ___ (cook) plov.", "is cooking"], ["I ___ (drink) tea.", "am drinking"], ["They ___ (play) football.", "are playing"],
      ["Aziz ___ (run).", "is running"], ["We ___ (sit) in the classroom.", "are sitting"], ["Lola ___ (write) on the board.", "is writing"] ] },
    { t: "spot", bg: "sky", title: "Look at the class!", sub: "Pick a card. Finish it about this room right now.", size: 46,
      cards: ["I am sitting next to…", "The teacher is…", "We are learning…", "My friend is…", "… is writing.", "… is listening."] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Common mistakes", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 34, lines: ["She <span class='cn'>reading</span>.", "I <span class='cn'>am read</span>.", "They <span class='cn'>is</span> playing.", "I <span class='cn'>am drink</span> tea every day."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 34, lines: ["She <span class='ca'>is reading</span>.", "I <span class='ca'>am reading</span>.", "They <span class='ca'>are</span> playing.", "I <span class='ca'>drink</span> tea every day."] } ],
      notes: ["am / is / are ham, -ing ham kerak", "every day → I drink (-ing yo’q) · now → I am drinking", "Ko’p kishi → are"] },

    /* ---------- PRACTICE ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men hozir o’qiyapman.", "I am reading now."],
      ["Onam palov pishiryapti.", "My mother is cooking plov."],
      ["Bolalar futbol o’ynashyapti.", "The children are playing football."],
      ["Qarang! Yomg’ir yog’yapti.", "Look! It is raining."],
      ["Biz avtobus kutyapmiz.", "We are waiting for the bus."],
      ["Lola telefonda gaplashyapti.", "Lola is talking on the phone."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["She reading a book.", "She is reading a book."],
      ["I am write.", "I am writing."],
      ["They is playing football.", "They are playing football."],
      ["He is runing.", "He is running."],
      ["I am drink tea every day.", "I drink tea every day."] ] },
    { t: "spot", bg: "sky", title: "Right now…", sub: "Pick a card. Finish the sentence. Imagine if you need to!", size: 52,
      cards: ["Right now I am…", "Now my mother is…", "Now my father is…", "Now my friend is…", "Now the teacher is…", "Now my cat / brother is…"] },
    { t: "spot", bg: "yel", title: "Mime it!", sub: "Pairs. A mimes the card. B says: “You are …ing!” Then change.", size: 44,
      cards: [{ t: "cook plov", uz: "palov pishirmoq" }, { t: "sleep", uz: "uxlamoq" }, { t: "run", uz: "yugurmoq" }, { t: "talk on the phone", uz: "telefonda gaplashmoq" }, { t: "wait for the bus", uz: "avtobus kutmoq" }, { t: "laugh", uz: "kulmoq" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say what I am doing now: I am reading", "use am / is / are + -ing", "say what he, she and they are doing", "spell -ing: writing, running, sitting", "use now, right now, Look!, Listen!", "know: every day → I drink · now → I am drinking"] },
    { t: "bye", chips: [["I am reading.", "peach"], ["She is sleeping.", "mint"], ["Look! It’s raining.", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "reading a book", say: "You are reading! / He is reading a book." },
      { cue: "sleeping", say: "You are sleeping! / She is sleeping." },
      { cue: "running", say: "You are running! / He is running." },
      { cue: "drinking tea", say: "You are drinking tea! / She is drinking tea." },
      { cue: "eating plov", say: "You are eating plov! / He is eating plov." },
      { cue: "cooking", say: "You are cooking! / She is cooking." },
      { cue: "talking on the phone", say: "You are talking on the phone!" },
      { cue: "waiting for the bus", say: "You are waiting for the bus!" },
      { cue: "laughing", say: "You are laughing! / She is laughing." },
      { cue: "writing", say: "You are writing! / He is writing." },
      { cue: "swimming", say: "You are swimming! / She is swimming." },
      { cue: "playing football", say: "You are playing football!" }
    ],
    board: [
      { cat: "-ing", qs: [["read →", "reading"], ["write →", "writing"], ["run → · sit →", "running · sitting"]] },
      { cat: "am / is / are", qs: [["I ___ sleeping.", "am"], ["My parents ___ working.", "are"], ["Aziz and Lola ___ dancing.", "are"]] },
      { cat: "In English", qs: [["“hozir” in English", "now"], ["“yugurmoq” and “kutmoq”", "run · wait"], ["“Yomg’ir yog’yapti.” in English", "It is raining."]] },
      { cat: "Now!", qs: [["Say what you are doing now.", "I am sitting. / I am learning English. (any true)"], ["Say what the teacher is doing.", "He / She is talking… (any true)"], ["Say what 2 classmates are doing.", "Aziz is writing. Lola is… (any true)"]] },
      { cat: "Every day or now?", qs: [["I ___ (drink) tea every day.", "drink"], ["Look! Bobur ___ (run).", "is running"], ["Mum usually cooks. Now she ___ (sleep).", "is sleeping"]] },
      { cat: "Fix it", qs: [["She reading.", "She is reading."], ["I am siting.", "I am sitting."], ["They is playing.", "They are playing."]] }
    ],
    wheel: [
      { name: "Now", tasks: ["Say 2 things you are doing now.", "Say what the teacher is doing.", "Say what the student next to you is doing.", "Say: “Right now I am…”"] },
      { name: "Mime", tasks: ["Mime an action. Your team says: “You are…!”", "Mime eating plov. Your team says it.", "Mime a sport. Your team says it.", "Mime 2 actions. Your team says both."] },
      { name: "Family", tasks: ["Imagine: what is your mother doing now?", "Imagine: what is your father doing now?", "Imagine: what is your friend doing now?", "Say: “My cat / brother is sleeping.”"] },
      { name: "-ing", tasks: ["Spell: reading.", "Spell: writing.", "Spell: running.", "Spell: sitting."] },
      { name: "Every day / now", tasks: ["Say: “Every day I…, but now I am…”", "Say 2 sentences with “drink”: every day and now.", "Say one thing you usually do on Sunday.", "Say one thing you are doing now."] },
      { name: "Look!", tasks: ["Point at a classmate. Say what he / she is doing.", "Say: “Look! … is …ing.”", "Say: “Listen! … is talking.”", "Say what 2 classmates are doing."] }
    ],
    build: [
      { w: ["I","am","reading","now"], e: "." }, { w: ["She","is","cooking","plov"], e: "." },
      { w: ["They","are","playing","football"], e: "." }, { w: ["It","is","raining"], e: "." },
      { w: ["We","are","waiting","for","the","bus"], e: "." }, { w: ["Aziz","is","running"], e: "." },
      { w: ["My","mother","is","sleeping"], e: "." }, { w: ["Look!","Lola","is","dancing"], e: "." }
    ],
    auction: [
      { s: "I am reading a book.", ok: true },
      { s: "She sleeping now.", ok: false, fix: "She is sleeping now." },
      { s: "They are playing football.", ok: true },
      { s: "He is runing.", ok: false, fix: "He is running." },
      { s: "It is raining in Tashkent.", ok: true },
      { s: "We is waiting for the bus.", ok: false, fix: "We are waiting for the bus." },
      { s: "Look! Aziz is dancing.", ok: true },
      { s: "I am write on the board.", ok: false, fix: "I am writing on the board." },
      { s: "My parents are watching TV now.", ok: true },
      { s: "I am drink tea every day.", ok: false, fix: "I drink tea every day." }
    ]
  }
};
