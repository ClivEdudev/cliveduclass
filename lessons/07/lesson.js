/* Lesson 7 · Present simple or continuous?
   Present simple (every day, facts: I work, she works) next to the present continuous
   from lesson 5 (now: I am working). Uzbek: -man (ishlayman) vs -yapman (ishlayapman).
   Built for Thursday 19 November 2026. */
window.LESSON = {
  n: 7,
  title: "Present simple or continuous?",
  slides: [
    { t: "cover", title: "Every day or <span class='cy'>now?</span>", lead: "Present simple and present continuous · Hozirgi-kelasi va hozirgi davomli zamon", chips: [["Men har kuni ishlayman.", "peach"], ["Men hozir dam olyapman.", "mint"], ["Hozir nima qilyapsiz?", "skyb"]] },
    { t: "goals", items: [
      ["Say what you do every day", "I drink tea every morning.", "Men har kuni ertalab choy ichaman."],
      ["Say what is happening now", "Now I am drinking coffee.", "Hozir men qahva ichyapman."],
      ["Choose: every day or now?", "He works in a bank, but today he is resting.", "U bankda ishlaydi, lekin bugun dam olyapti."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: every day or now?", sub: "Pick a card. Say it about you: “I … every day.” or “I am …ing now.”",
      cards: [{ t: "drink tea", uz: "choy ichmoq" }, { t: "sit", uz: "o’tirmoq" }, { t: "get up early", uz: "erta turmoq" }, { t: "listen to the teacher", uz: "o’qituvchini tinglamoq" }, { t: "eat bread", uz: "non yemoq" }, { t: "learn English", uz: "ingliz tilini o’rganmoq" }] },

    /* ---------- WHEN ---------- */
    { t: "cols", eb: "When do we use it?", title: "Every day or now?", menu: "When do we use it?", cols: [
      { bg: "mint", label: "1 · Every day", lc: "g", fs: 40, lines: ["I <span class='ca'>drink</span> tea every day."], uz: "Har kuni takrorlanadigan ish, odat. Men har kuni choy ichaman." },
      { bg: "skyb", label: "2 · Always true", lc: "b", fs: 40, lines: ["Aziz <span class='ca'>lives</span> in Tashkent."], uz: "Doim to’g’ri bo’lgan narsa, fakt. Aziz Toshkentda yashaydi." },
      { bg: "peach", label: "3 · Now", lc: "r", fs: 40, lines: ["I <span class='ca'>am drinking</span> tea now."], uz: "Aynan hozir bo’layotgan ish (5-dars). Men hozir choy ichyapman." } ],
      notes: ["1 and 2 = present simple: I drink = ichaman", "3 = present continuous: I am drinking = ichyapman"] },
    { t: "formula", bg: "ink", eb: "The rule · Present simple", title: "Who + verb (he / she / it + s)", rows: [
      { chips: [["I", "skyb"], ["work", "mint"], ["every day.", "butter"]], uz: "Men har kuni ishlayman." },
      { chips: [["She", "skyb"], ["works", "mint"], ["every day.", "butter"]], uz: "U har kuni ishlaydi." },
      { chips: [["They", "skyb"], ["work", "mint"], ["every day.", "butter"]], uz: "Ular har kuni ishlashadi." } ],
      notes: ["No am / is / are here!", "he / she / it → verb + s", "Uzbek: ishla-y-man, ishla-y-di"] },
    { t: "table", eb: "Every day and now", title: "Work: two tenses", head: ["Who", "Every day", "Now", "Uzbek"], rows: [
      ["I", "I <b class='ca'>work</b>", "I <b class='ca'>am working</b>", "ishlayman · ishlayapman"],
      ["You", "You <b class='ca'>work</b>", "You <b class='ca'>are working</b>", "ishlaysiz · ishlayapsiz"],
      ["He / She / It", "She <b class='ca'>works</b>", "She <b class='ca'>is working</b>", "ishlaydi · ishlayapti"],
      ["We", "We <b class='ca'>work</b>", "We <b class='ca'>are working</b>", "ishlaymiz · ishlayapmiz"],
      ["They", "They <b class='ca'>work</b>", "They <b class='ca'>are working</b>", "ishlashadi · ishlashyapti"] ],
      notes: ["Every day: only he / she / it changes (+ s)", "Now: am / is / are + -ing"] },
    { t: "cols", eb: "Spelling", title: "He, she, it: how to add -s", cols: [
      { bg: "mint", label: "+ s", lc: "g", fs: 44, lines: ["work → works", "read → reads", "play → plays"], uz: "Ko’p fe’llar: shunchaki -s qo’shamiz." },
      { bg: "butter", label: "+ es", fs: 44, lines: ["go → goes", "watch → watches", "wash → washes"], uz: "Oxiri -o, -sh, -ch, -s, -x bo’lsa: -es qo’shamiz." },
      { bg: "skyb", label: "y → ies", lc: "b", fs: 44, lines: ["study → studies", "cry → cries", "fly → flies"], uz: "Undosh + y bo’lsa: y → ies." } ],
      notes: ["Special: have → has · do → does", "Vowel + y: just -s (play → plays)"] },
    { t: "examples", eb: "Positive", title: "Examples: every day", items: [
      ["I <span class='ca'>get up</span> at seven every day.", "Men har kuni soat yettida turaman."],
      ["My father <span class='ca'>works</span> in a bank.", "Otam bankda ishlaydi."],
      ["Madina <span class='ca'>goes</span> to school by bus.", "Madina maktabga avtobusda boradi."],
      ["We <span class='ca'>eat</span> plov on Thursdays.", "Biz payshanba kunlari palov yeymiz."],
      ["Bobur <span class='ca'>watches</span> football on Sundays.", "Bobur yakshanba kunlari futbol ko’radi."],
      ["They <span class='ca'>live</span> in Samarkand.", "Ular Samarqandda yashashadi."] ] },
    { t: "examples", eb: "Every day ↔ Now", title: "Same person, different time", menu: "Every day and now together", items: [
      ["Dilnoza <span class='ca'>walks</span> to work every day. Today she <span class='ca'>is taking</span> a taxi.", "Dilnoza har kuni ishga piyoda boradi. Bugun u taksida ketyapti."],
      ["Bobur <span class='ca'>drives</span> a taxi. Now he <span class='ca'>is eating</span> lunch.", "Bobur taksi haydaydi. Hozir u tushlik qilyapti."],
      ["I <span class='ca'>speak</span> Uzbek at home. Now I <span class='ca'>am speaking</span> English!", "Uyda o’zbekcha gapiraman. Hozir esa inglizcha gapiryapman!"],
      ["Lola <span class='ca'>plays</span> the piano. Listen! She <span class='ca'>is playing</span> now.", "Lola pianino chaladi. Eshiting! U hozir chalyapti."] ] },
    { t: "gaps", title: "He, she, it: add -s", sub: "Careful with the spelling! Tap to check.", w: 330, rows: [
      ["work → he ___", "works"], ["go → she ___", "goes"], ["watch → he ___", "watches"],
      ["study → she ___", "studies"], ["play → he ___", "plays"], ["have → she ___", "has"] ] },
    { t: "gaps", title: "Open the brackets: every day", sub: "Use the present simple. Tap to check.", w: 260, fs: 36, rows: [
      ["My mother ___ (cook) plov on Thursdays.", "cooks"], ["Aziz ___ (play) football on Sundays.", "plays"], ["We ___ (live) in Tashkent.", "live"],
      ["The bus ___ (go) to Chorsu.", "goes"], ["Lola ___ (wash) the dishes after dinner.", "washes"], ["My brother ___ (study) at university.", "studies"] ] },

    /* ---------- VOCABULARY ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "My day", menu: "New words: my day", items: [
      ["I <span class='ca'>wake up</span> at six.", "wake up = uyg’onmoq"],
      ["I <span class='ca'>get up</span> at seven.", "get up = o’rnidan turmoq"],
      ["I <span class='ca'>brush my teeth</span>.", "brush my teeth = tish yuvmoq"],
      ["We <span class='ca'>have breakfast</span> together.", "have breakfast = nonushta qilmoq"],
      ["My brother <span class='ca'>takes a shower</span>.", "take a shower = dush qabul qilmoq"],
      ["We <span class='ca'>go to bed</span> at eleven.", "go to bed = uxlashga yotmoq"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Work and school", menu: "New words: work and school", items: [
      ["Lola <span class='ca'>starts</span> work at nine.", "start = boshlamoq"],
      ["Aziz <span class='ca'>finishes</span> school at one.", "finish = tugatmoq"],
      ["My aunt <span class='ca'>teaches</span> maths.", "teach = dars bermoq, o’rgatmoq"],
      ["I <span class='ca'>do my homework</span> in the evening.", "do homework = uy vazifasini qilmoq"],
      ["Dad <span class='ca'>comes home</span> at six.", "come home = uyga kelmoq"],
      ["We <span class='ca'>help</span> our mother.", "help = yordam bermoq"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Jobs: what do they do?", items: [
      { bg: "peach", w: "🧑‍⚕️", label: "a doctor = shifokor", en: "A doctor works in a hospital.", uz: "Shifokor kasalxonada ishlaydi." },
      { bg: "mint", w: "🧑‍🏫", label: "a teacher = o’qituvchi", en: "A teacher teaches students.", uz: "O’qituvchi o’quvchilarga dars beradi." },
      { bg: "skyb", w: "🚕", label: "a driver = haydovchi", en: "A taxi driver drives all day.", uz: "Taksi haydovchisi kun bo’yi mashina haydaydi." },
      { bg: "butter", w: "🧑‍🍳", label: "a cook = oshpaz", en: "A cook makes plov.", uz: "Oshpaz palov tayyorlaydi." } ] },
    { t: "spot", bg: "sky", title: "Look at a classmate!", sub: "Pick a card. Say it about someone in this room. The class guesses who it is!", size: 46,
      cards: ["Every day he…", "Every day she…", "Right now he is…", "Right now she is…", "He lives in…", "She likes…"] },

    /* ---------- NEGATIVE ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "don’t / doesn’t + verb", rows: [
      { chips: [["I", "skyb"], ["don’t", "peach"], ["drink", "mint"], ["coffee.", "butter"]], uz: "Men qahva ichmayman." },
      { chips: [["She", "skyb"], ["doesn’t", "peach"], ["eat", "mint"], ["meat.", "butter"]], uz: "U go’sht yemaydi." },
      { chips: [["He", "skyb"], ["isn’t", "peach"], ["working", "mint"], ["now.", "butter"]], uz: "U hozir ishlamayapti." } ],
      notes: ["Every day: don’t / doesn’t + verb", "doesn’t + verb with NO -s", "Now: am not / isn’t / aren’t + -ing"] },
    { t: "examples", eb: "Negative", title: "Examples: no sentences", items: [
      ["I <span class='cn'>don’t drink</span> coffee.", "Men qahva ichmayman."],
      ["My grandma <span class='cn'>doesn’t speak</span> English.", "Buvim inglizcha gapirmaydi."],
      ["We <span class='cn'>don’t go</span> to school on Sundays.", "Biz yakshanba kunlari maktabga bormaymiz."],
      ["Bobur <span class='cn'>doesn’t like</span> fish.", "Bobur baliqni yoqtirmaydi."],
      ["It <span class='cn'>isn’t raining</span> now.", "Hozir yomg’ir yog’mayapti."],
      ["Lola <span class='cn'>isn’t sleeping</span>. She is reading.", "Lola uxlamayapti. U kitob o’qiyapti."] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "Do / Does + who + verb?", rows: [
      { chips: [["Do", "peach"], ["you", "skyb"], ["work", "mint"], ["here?", "butter"]], uz: "Siz shu yerda ishlaysizmi?" },
      { chips: [["Does", "peach"], ["she", "skyb"], ["like", "mint"], ["plov?", "butter"]], uz: "U palovni yoqtiradimi?" },
      { chips: [["Are", "peach"], ["you", "skyb"], ["working", "mint"], ["now?", "butter"]], uz: "Siz hozir ishlayapsizmi?" } ],
      notes: ["Every day: Do / Does … ?", "Does + verb with NO -s", "Now: Am / Is / Are … -ing?"] },
    { t: "cols", eb: "Short answers · Qisqa javoblar", title: "Yes, I do. No, he doesn’t.", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 38, lines: ["<span class='cw'>Do</span> you live here?", "<span class='cw'>Does</span> he drive?", "<span class='cw'>Is</span> he driving now?"] },
      { bg: "mint", label: "Yes", lc: "g", fs: 38, lines: ["Yes, I <span class='ca'>do</span>.", "Yes, he <span class='ca'>does</span>.", "Yes, he <span class='ca'>is</span>."] },
      { bg: "peach", label: "No", lc: "r", fs: 38, lines: ["No, I <span class='cn'>don’t</span>.", "No, he <span class='cn'>doesn’t</span>.", "No, he <span class='cn'>isn’t</span>."] } ],
      notes: ["Do → do / don’t · Does → does / doesn’t", "Is → is / isn’t (lesson 5)"] },
    { t: "examples", eb: "Wh- questions", title: "Where? What? When?", menu: "Wh- questions", items: [
      ["<span class='cw'>Where</span> do you live?", "Qayerda yashaysiz?"],
      ["<span class='cw'>What</span> do you do?", "Kasbingiz nima? (Nima ish qilasiz?)"],
      ["<span class='cw'>What</span> are you doing?", "Hozir nima qilyapsiz?"],
      ["<span class='cw'>When</span> does the lesson start?", "Dars qachon boshlanadi?"],
      ["<span class='cw'>Where</span> is Aziz going?", "Aziz qayerga ketyapti?"],
      ["<span class='cw'>What</span> does your mother cook on Fridays?", "Onangiz juma kunlari nima pishiradi?"] ] },
    { t: "quad", eb: "Signal words · Belgi so’zlar", title: "Every day words and now words", items: [
      { bg: "peach", w: "<span style='font-size:62px;line-height:1.05;display:block'>every<br>day</span>", label: "har kuni", en: "I walk to school every day.", uz: "Men har kuni maktabga piyoda boraman." },
      { bg: "mint", w: "<span style='font-size:62px;line-height:1.05;display:block'>on<br>Sundays</span>", label: "yakshanba kunlari", en: "Aziz plays football on Sundays.", uz: "Aziz yakshanba kunlari futbol o’ynaydi." },
      { bg: "skyb", w: "now", label: "hozir", en: "He is playing football now.", uz: "U hozir futbol o’ynayapti." },
      { bg: "butter", w: "<span style='font-size:62px;line-height:1.05;display:block'>at the<br>moment</span>", label: "ayni paytda", en: "She is cooking at the moment.", uz: "U ayni paytda ovqat pishiryapti." } ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Common mistakes", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 36, lines: ["He <span class='cn'>work</span> in a bank.", "I <span class='cn'>am work</span> every day.", "She <span class='cn'>doesn’t likes</span> tea.", "<span class='cn'>Are you live</span> here?"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 36, lines: ["He <span class='ca'>works</span> in a bank.", "I <span class='ca'>work</span> every day.", "She <span class='ca'>doesn’t like</span> tea.", "<span class='ca'>Do you live</span> here?"] } ],
      notes: ["he / she / it → -s", "Every day: no am / is / are", "doesn’t / does → verb with no -s", "ishlayman = I work · ishlayapman = I am working"] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "Every day or now?", sub: "Look for the signal words! Tap to check.", w: 280, fs: 34, rows: [
      ["I ___ (drink) green tea every morning.", "drink"], ["Look! The bus ___ (come).", "is coming"], ["Madina ___ (work) in a bank.", "works"],
      ["Be quiet! The baby ___ (sleep).", "is sleeping"], ["We ___ (go) to the bazaar on Saturdays.", "go"], ["Listen! Someone ___ (sing).", "is singing"] ] },
    { t: "gaps", title: "Don’t, doesn’t, isn’t or aren’t?", sub: "Say the full sentence. Tap to check.", w: 220, fs: 36, rows: [
      ["My father ___ drink coffee.", "doesn’t"], ["I ___ like fish.", "don’t"], ["Aziz ___ sleeping now. He is reading.", "isn’t"],
      ["They ___ live in Bukhara.", "don’t"], ["We ___ watching TV now.", "aren’t"], ["Lola ___ speak Russian.", "doesn’t"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men har kuni ingliz tilini o’rganaman.", "I learn English every day."],
      ["Hozir men ingliz tilini o’rganyapman.", "Now I am learning English."],
      ["Otam qahva ichmaydi.", "My father doesn’t drink coffee."],
      ["Hozir nima qilyapsiz?", "What are you doing now?"],
      ["Lola har kuni ishlaydi, lekin bugun dam olyapti.", "Lola works every day, but today she is resting."] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: make it negative and a question", sub: "Say both. Tap to check.", fs: 36, rows: [
      ["He plays football.", "He doesn’t play football. · Does he play football?"],
      ["They live in Bukhara.", "They don’t live in Bukhara. · Do they live in Bukhara?"],
      ["She is cooking now.", "She isn’t cooking now. · Is she cooking now?"],
      ["You speak English.", "You don’t speak English. · Do you speak English?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["My sister work in a hospital.", "My sister works in a hospital."],
      ["I am get up at seven every day.", "I get up at seven every day."],
      ["Look! It rains.", "Look! It is raining."],
      ["He gos to school by bus.", "He goes to school by bus."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake: round 2", sub: "Harder ones! Tap to fix.", rows: [
      ["Does she likes plov?", "Does she like plov?"],
      ["He don’t drink tea.", "He doesn’t drink tea."],
      ["Are you live in Tashkent?", "Do you live in Tashkent?"],
      ["Where you work?", "Where do you work?"] ] },
    { t: "spot", bg: "sky", title: "Every day and today", sub: "Pick a card. Finish the sentence about your life.", size: 50,
      cards: ["Every morning I…", "On Sundays I…", "Every day my father…", "My best friend lives…", "Right now I am…", "Today I am wearing…"] },
    { t: "spot", bg: "yel", title: "Interview!", sub: "Pairs. A asks the question on the card. B answers with a full sentence. Then change!", size: 40,
      cards: [{ t: "Where do you live?", uz: "Qayerda yashaysiz?" }, { t: "What do you do?", uz: "Kasbingiz nima?" }, { t: "What time do you get up?", uz: "Soat nechada turasiz?" }, { t: "Do you like plov?", uz: "Palovni yoqtirasizmi?" }, { t: "What are you doing now?", uz: "Hozir nima qilyapsiz?" }, { t: "What is your friend wearing?", uz: "Do’stingiz nima kiygan?" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say what I do every day: I work, she works", "spell -s words: goes, watches, studies", "make negatives: don’t / doesn’t", "ask Do / Does…? and answer: Yes, I do.", "choose: every day (I work) or now (I am working)", "talk about my day: get up, have breakfast, go to bed"] },
    { t: "bye", chips: [["I work every day.", "peach"], ["Now I am resting.", "mint"], ["Do you…? · Are you…ing?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "brushing your teeth", say: "You are brushing your teeth! / I brush my teeth every day." },
      { cue: "waking up and getting up", say: "You are getting up! / I get up at seven." },
      { cue: "having breakfast", say: "You are having breakfast! / We have breakfast together." },
      { cue: "taking a shower", say: "You are taking a shower! / He takes a shower every morning." },
      { cue: "a taxi driver driving", say: "You are driving! / He drives a taxi." },
      { cue: "a teacher writing on the board", say: "You are writing! / She teaches English." },
      { cue: "a cook making plov", say: "You are cooking plov! / He makes plov every day." },
      { cue: "a doctor listening to a heart", say: "You are listening! / She works in a hospital." },
      { cue: "doing homework", say: "You are doing your homework! / I do my homework in the evening." },
      { cue: "playing the piano", say: "You are playing the piano! / She plays the piano." },
      { cue: "washing the dishes", say: "You are washing the dishes! / He washes the dishes after dinner." },
      { cue: "going to bed", say: "You are going to bed! / I go to bed at eleven." },
      { cue: "watching football", say: "You are watching football! / He watches football on Sundays." },
      { cue: "shopping at the bazaar", say: "You are shopping! / We go to the bazaar on Saturdays." }
    ],
    board: [
      { cat: "-s or -es", qs: [["work → he ___", "works"], ["go → she ___ · watch → he ___", "goes · watches"], ["study → she ___ · have → he ___", "studies · has"]] },
      { cat: "Every day or now?", qs: [["I ___ (drink) tea every day.", "drink"], ["Look! It ___ (snow).", "is snowing"], ["My mother ___ (cook) every day, but now she ___ (rest).", "cooks · is resting"]] },
      { cat: "Negatives", qs: [["Make it NO: I like fish.", "I don’t like fish."], ["Make it NO: She speaks Russian.", "She doesn’t speak Russian."], ["Say two things you don’t do every day.", "I don’t drink coffee. I don’t … (any true)"]] },
      { cat: "Questions", qs: [["Make a question: You live in Tashkent.", "Do you live in Tashkent?"], ["Short answer (no): Does he drive?", "No, he doesn’t."], ["Ask with “Where”: She works in a bank.", "Where does she work?"]] },
      { cat: "New words", qs: [["“uyg’onmoq” in English", "wake up"], ["“nonushta qilmoq” and “uxlashga yotmoq”", "have breakfast · go to bed"], ["Say 3 things you do every morning.", "I get up… I brush my teeth… (any true)"]] },
      { cat: "Fix it", qs: [["He work in a bank.", "He works in a bank."], ["I am get up at seven.", "I get up at seven."], ["Does she likes tea?", "Does she like tea?"]] }
    ],
    wheel: [
      { name: "My day", tasks: ["Say 3 things you do every morning.", "Say what time you get up and go to bed.", "Say 2 things you don’t do every day.", "Say what you do on Sundays."] },
      { name: "Family", tasks: ["Say where your family lives.", "Say what your father or mother does every day.", "Say what your mother is probably doing now.", "Say one thing your brother or sister doesn’t like."] },
      { name: "Now", tasks: ["Say 3 things you are doing right now.", "Say what the teacher is doing.", "Say what 2 classmates are wearing.", "Say 2 things you aren’t doing now."] },
      { name: "Questions", tasks: ["Ask a classmate: “Where do you live?”", "Ask the teacher 2 questions with “Do you…?”", "Ask a classmate: “What are you doing now?”", "Ask a “Does your…?” question."] },
      { name: "Jobs", tasks: ["Say what a doctor does.", "Say what a teacher does.", "Mime a job. Your team says: “You are a… You…”", "Say your dream job: “I want to be a…”"] },
      { name: "Every day or now?", tasks: ["Say one thing you do every day and one thing you are doing now.", "Make 2 sentences with “work”: every day and now.", "Make 2 sentences with “eat”: every day and now.", "Say: “Every day I…, but today I am…”"] }
    ],
    build: [
      { w: ["I","get","up","at","seven"], e: "." }, { w: ["She","works","in","a","hospital"], e: "." }, { w: ["We","eat","plov","on","Thursdays"], e: "." },
      { w: ["He","doesn’t","drink","coffee"], e: "." }, { w: ["Where","do","you","live"], e: "?" }, { w: ["Does","she","speak","English"], e: "?" },
      { w: ["Look!","The","bus","is","coming"], e: "." }, { w: ["What","are","you","doing","now"], e: "?" },
      { w: ["My","brother","goes","to","school","by","bus"], e: "." }, { w: ["I","don’t","work","on","Sundays"], e: "." }
    ],
    auction: [
      { s: "My mother works in a bank.", ok: true },
      { s: "He play football on Sundays.", ok: false, fix: "He plays football on Sundays." },
      { s: "Do you live in Tashkent?", ok: true },
      { s: "I am drink tea every morning.", ok: false, fix: "I drink tea every morning." },
      { s: "Look! The baby is smiling.", ok: true },
      { s: "She don’t like fish.", ok: false, fix: "She doesn’t like fish." },
      { s: "Aziz watches TV in the evening.", ok: true },
      { s: "Does he speaks English?", ok: false, fix: "Does he speak English?" },
      { s: "Listen! Lola sings.", ok: false, fix: "Listen! Lola is singing." },
      { s: "We don’t go to school on Sundays.", ok: true },
      { s: "My brother studys at university.", ok: false, fix: "My brother studies at university." },
      { s: "What are you doing now?", ok: true }
    ]
  }
};
