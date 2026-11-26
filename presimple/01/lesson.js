/* Extra lesson: Present simple with verbs (Group A).
   Verb in the base form for I / you / we / they (I work), verb + s for he / she / it (she works),
   spelling of -s / -es / -ies and the special verbs have → has, go → goes, do → does.
   Negatives with don’t / doesn’t + verb, questions with Do / Does…? and short answers, Wh- questions.
   Lots of everyday verbs (sell, buy, teach, help, visit, wash, fix, fly…). Recycles lesson 7
   (present simple or continuous), lesson 8 (always, usually…) and lesson 10 (at seven, on Monday).
   Uzbek: -aman / -adi (ishlayman, ishlaydi), -mayman / -maydi, -asizmi? */
window.LESSON = {
  id: "ps1",
  title: "Present simple with verbs",
  openDate: "2026-11-26",
  openNow: true,
  slides: [
    { t: "cover", tag: "Extra lesson · Grammar", title: "I work, she <span class='cy'>works</span>", lead: "Present simple with verbs · Hozirgi-kelasi zamon", chips: [["Men bankda ishlayman.", "peach"], ["U ingliz tili o’rgatadi.", "mint"], ["Siz qayerda yashaysiz?", "skyb"]] },
    { t: "goals", items: [
      ["Say what people do every day", "My father sells cars.", "Otam mashina sotadi."],
      ["Add -s, -es, -ies for he / she / it", "She watches TV. He studies.", "U televizor ko’radi. U o’qiydi."],
      ["Make negatives and questions", "Does she speak English? No, she doesn’t.", "U inglizcha gapiradimi? Yo’q."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: what do you do every day?", sub: "Pick a card. Say “I … every day!” or “I don’t … every day.”",
      cards: [{ t: "drink tea", uz: "choy ichmoq" }, { t: "read a book", uz: "kitob o’qimoq" }, { t: "cook", uz: "ovqat pishirmoq" }, { t: "walk", uz: "piyoda yurmoq" }, { t: "speak Russian", uz: "ruscha gapirmoq" }, { t: "use Telegram", uz: "Telegramdan foydalanmoq" }] },

    /* ---------- WHEN ---------- */
    { t: "cols", eb: "When do we use it?", title: "Three situations", menu: "When do we use it?", cols: [
      { bg: "mint", label: "1 · Every day", lc: "g", fs: 38, lines: ["I <span class='ca'>drink</span> tea every morning."], uz: "Odat, har kuni qilinadigan ish. Har kuni ertalab choy ichaman." },
      { bg: "skyb", label: "2 · Facts", lc: "b", fs: 38, lines: ["Water <span class='ca'>boils</span> at 100 °C."], uz: "Doim to’g’ri bo’lgan narsa. Suv 100 darajada qaynaydi." },
      { bg: "peach", label: "3 · Jobs and life", lc: "r", fs: 38, lines: ["My sister <span class='ca'>lives</span> in Bukhara."], uz: "Ish, yashash joyi, hayot. Singlim Buxoroda yashaydi." } ],
      notes: ["Not now! Now = present continuous (I am drinking)", "Uzbek: -aman / -adi (ichaman, ichadi)"] },
    { t: "formula", bg: "ink", eb: "The rule", title: "Who + verb · he / she / it + verb-s", rows: [
      { chips: [["I", "skyb"], ["work", "mint"], ["in a bank.", "butter"]], uz: "Men bankda ishlayman." },
      { chips: [["They", "skyb"], ["live", "mint"], ["in Tashkent.", "butter"]], uz: "Ular Toshkentda yashaydi." },
      { chips: [["She", "skyb"], ["works", "peach"], ["in a school.", "butter"]], uz: "U maktabda ishlaydi." } ],
      notes: ["I / you / we / they → verb", "he / she / it → verb + s", "No am / is / are here!"] },
    { t: "table", eb: "Who + verb", title: "Work: I, you, he, she…", head: ["Who", "Verb", "Example", "Uzbek"], rows: [
      ["I", "work", "I <b class='ca'>work</b> every day.", "Men ishlayman"],
      ["You", "work", "You <b class='ca'>work</b> hard.", "Siz ishlaysiz"],
      ["He / She / It", "work<b class='ca'>s</b>", "She <b class='ca'>works</b> in a shop.", "U ishlaydi"],
      ["We", "work", "We <b class='ca'>work</b> together.", "Biz ishlaymiz"],
      ["They", "work", "They <b class='ca'>work</b> at night.", "Ular ishlaydi"] ],
      notes: ["One person (Aziz, my mother) → +s", "Many people (Aziz and Lola) → no s"] },
    { t: "cols", eb: "Spelling", title: "He, she, it: -s, -es or -ies?", cols: [
      { bg: "mint", label: "+ s", lc: "g", fs: 38, lines: ["work → works", "sell → sells", "play → plays"], uz: "Ko’p fe’llar: shunchaki -s." },
      { bg: "butter", label: "+ es", fs: 38, lines: ["watch → watches", "wash → washes", "fix → fixes"], uz: "-ch, -sh, -x, -s, -o bilan tugasa: -es." },
      { bg: "skyb", label: "y → ies", lc: "b", fs: 38, lines: ["study → studies", "fly → flies", "carry → carries"], uz: "Undosh + y: y → ies. (play → plays: o’zgarmaydi)" } ],
      notes: ["Special: have → has · go → goes · do → does", "watches, washes, fixes: say -iz"] },
    { t: "examples", eb: "Positive", title: "Examples: yes sentences", items: [
      ["I <span class='ca'>live</span> in Chilonzor.", "Men Chilonzorda yashayman."],
      ["My father <span class='ca'>sells</span> fruit at the bazaar.", "Otam bozorda meva sotadi."],
      ["Madina <span class='ca'>teaches</span> English.", "Madina ingliz tili o’rgatadi."],
      ["Bobur <span class='ca'>studies</span> at university.", "Bobur universitetda o’qiydi."],
      ["We <span class='ca'>have</span> plov on Fridays.", "Biz juma kunlari palov yeymiz."],
      ["My grandmother <span class='ca'>goes</span> to the bazaar every morning.", "Buvim har kuni ertalab bozorga boradi."] ] },
    { t: "gaps", title: "He, she, it: add -s", sub: "-s, -es or -ies? Tap to check.", w: 300, rows: [
      ["read → she ___", "reads"], ["watch → he ___", "watches"], ["study → she ___", "studies"],
      ["go → he ___", "goes"], ["have → she ___", "has"], ["play → he ___", "plays"] ] },
    { t: "gaps", title: "Open the brackets", sub: "Every day! Use the present simple. Tap to check.", w: 240, fs: 36, rows: [
      ["Lola ___ (drink) green tea.", "drinks"], ["We ___ (live) in Samarkand.", "live"], ["My brother ___ (fix) cars.", "fixes"],
      ["The bus ___ (stop) here.", "stops"], ["I ___ (speak) Uzbek and Russian.", "speak"], ["Aziz ___ (do) his homework at night.", "does"] ] },

    /* ---------- VOCABULARY ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Verbs at work", menu: "New words: verbs at work", items: [
      ["My uncle <span class='ca'>sells</span> carpets.", "sell = sotmoq"],
      ["People <span class='ca'>buy</span> bread every day.", "buy = sotib olmoq"],
      ["A teacher <span class='ca'>teaches</span> students.", "teach = o’rgatmoq, dars bermoq"],
      ["A doctor <span class='ca'>helps</span> sick people.", "help = yordam bermoq"],
      ["A pilot <span class='ca'>flies</span> planes.", "fly = uchmoq, uchirmoq"],
      ["The shop <span class='ca'>opens</span> at eight and <span class='ca'>closes</span> at ten.", "open = ochmoq · close = yopmoq"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Verbs at home", menu: "New words: verbs at home", items: [
      ["Dad <span class='ca'>washes</span> the car on Sunday.", "wash = yuvmoq"],
      ["My brother <span class='ca'>fixes</span> phones.", "fix = tuzatmoq"],
      ["We <span class='ca'>visit</span> our grandparents at the weekend.", "visit = mehmonga bormoq, ziyorat qilmoq"],
      ["I <span class='ca'>learn</span> ten new words every day.", "learn = o’rganmoq"],
      ["She <span class='ca'>forgets</span> her keys every morning!", "forget = unutmoq"],
      ["Grandpa <span class='ca'>listens to</span> the radio.", "listen to = tinglamoq"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "What do they do?", items: [
      { bg: "peach", w: "👩‍🏫", label: "teach = o’rgatmoq", en: "She teaches children.", uz: "U bolalarga dars beradi." },
      { bg: "mint", w: "👨‍🍳", label: "cook = pishirmoq", en: "He cooks plov in a café.", uz: "U kafeda palov pishiradi." },
      { bg: "skyb", w: "🚕", label: "drive = haydamoq", en: "My uncle drives a taxi.", uz: "Amakim taksi haydaydi." },
      { bg: "butter", w: "🧑‍🌾", label: "grow = yetishtirmoq", en: "Farmers grow cotton.", uz: "Fermerlar paxta yetishtiradi." } ] },
    { t: "spot", bg: "sky", title: "Our class", sub: "Pick a card. Make a sentence about a classmate. Is it true? Ask them!", size: 46,
      cards: ["… lives near the school.", "… speaks Russian.", "… drinks coffee.", "… has a brother.", "… plays football.", "… goes to work by metro."] },

    /* ---------- NEGATIVE ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "don’t / doesn’t + verb", rows: [
      { chips: [["I", "skyb"], ["don’t", "peach"], ["drink", "mint"], ["coffee.", "butter"]], uz: "Men qahva ichmayman." },
      { chips: [["He", "skyb"], ["doesn’t", "peach"], ["work", "mint"], ["on Sunday.", "butter"]], uz: "U yakshanba kuni ishlamaydi." },
      { chips: [["They", "skyb"], ["don’t", "peach"], ["live", "mint"], ["here.", "butter"]], uz: "Ular bu yerda yashamaydi." } ],
      notes: ["do not = don’t · does not = doesn’t", "doesn’t + verb: NO -s! (He doesn’t works ✗)", "Uzbek: -mayman / -maydi"] },
    { t: "examples", eb: "Negative", title: "Examples: no sentences", items: [
      ["I <span class='cn'>don’t</span> eat meat.", "Men go’sht yemayman."],
      ["My mother <span class='cn'>doesn’t</span> drive.", "Onam mashina haydamaydi."],
      ["We <span class='cn'>don’t</span> have English on Tuesday.", "Seshanba kuni ingliz tili darsimiz yo’q."],
      ["Aziz <span class='cn'>doesn’t</span> watch TV. He reads books.", "Aziz televizor ko’rmaydi. U kitob o’qiydi."],
      ["The bazaar <span class='cn'>doesn’t</span> open on Monday.", "Bozor dushanba kuni ochilmaydi."],
      ["My friends <span class='cn'>don’t</span> speak English.", "Do’stlarim inglizcha gapirmaydi."] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "Do / Does + who + verb?", rows: [
      { chips: [["Do", "peach"], ["you", "skyb"], ["speak", "mint"], ["English?", "butter"]], uz: "Inglizcha gapirasizmi?" },
      { chips: [["Does", "peach"], ["she", "skyb"], ["live", "mint"], ["here?", "butter"]], uz: "U shu yerda yashaydimi?" },
      { chips: [["Do", "peach"], ["they", "skyb"], ["like", "mint"], ["plov?", "butter"]], uz: "Ular palovni yaxshi ko’radimi?" } ],
      notes: ["he / she / it → Does", "Does + verb: NO -s! (Does she lives ✗)", "Uzbek: -asizmi? / -adimi?"] },
    { t: "cols", eb: "Short answers · Qisqa javoblar", title: "Yes, I do. No, she doesn’t.", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 38, lines: ["<span class='cw'>Do</span> you work?", "<span class='cw'>Does</span> he drive?", "<span class='cw'>Do</span> they live here?"] },
      { bg: "mint", label: "Yes", lc: "g", fs: 38, lines: ["Yes, I <span class='ca'>do</span>.", "Yes, he <span class='ca'>does</span>.", "Yes, they <span class='ca'>do</span>."] },
      { bg: "peach", label: "No", lc: "r", fs: 38, lines: ["No, I <span class='cn'>don’t</span>.", "No, he <span class='cn'>doesn’t</span>.", "No, they <span class='cn'>don’t</span>."] } ],
      notes: ["Don’t repeat the verb: Yes, I do.", "Never: “Yes, I work.” as a short answer"] },
    { t: "examples", eb: "Wh- questions", title: "Where? What? When? What time?", menu: "Wh- questions", items: [
      ["<span class='cw'>Where</span> do you live? — In Yunusobod.", "Qayerda yashaysiz? — Yunusobodda."],
      ["<span class='cw'>What</span> does your father do? — He’s a driver.", "Otangiz nima ish qiladi? — U haydovchi."],
      ["<span class='cw'>What time</span> does the lesson start? — At two o’clock.", "Dars soat nechada boshlanadi? — Soat ikkida."],
      ["<span class='cw'>When</span> do you visit your grandparents? — On Sunday.", "Bobo-buvingiznikiga qachon borasiz? — Yakshanba kuni."],
      ["<span class='cw'>What</span> do you eat for breakfast? — Bread and eggs.", "Nonushtaga nima yeysiz? — Non va tuxum."],
      ["<span class='cw'>How often</span> does she go to the gym? — Twice a week.", "U qanchalik tez-tez sport zaliga boradi? — Haftada ikki marta."] ] },
    { t: "quad", eb: "Signal words · Belgi so’zlar", title: "Words for every day", items: [
      { bg: "peach", w: "<span style='font-size:52px;line-height:1.05;display:block'>every<br>day</span>", label: "har kuni", en: "I drink tea every day.", uz: "Men har kuni choy ichaman." },
      { bg: "mint", w: "<span style='font-size:62px'>usually</span>", label: "odatda", en: "She usually walks to work.", uz: "U odatda ishga piyoda boradi." },
      { bg: "skyb", w: "<span style='font-size:52px;line-height:1.05;display:block'>on<br>Fridays</span>", label: "juma kunlari", en: "We have plov on Fridays.", uz: "Juma kunlari palov yeymiz." },
      { bg: "butter", w: "<span style='font-size:52px;line-height:1.05;display:block'>at the<br>weekend</span>", label: "dam olish kunlari", en: "He plays football at the weekend.", uz: "U dam olish kunlari futbol o’ynaydi." } ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Common mistakes", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 34, lines: ["She <span class='cn'>work</span> in a bank.", "I <span class='cn'>am work</span> every day.", "He <span class='cn'>doesn’t works</span>.", "<span class='cn'>Does she lives</span> here?", "She <span class='cn'>don’t</span> drive."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 34, lines: ["She <span class='ca'>works</span> in a bank.", "I <span class='ca'>work</span> every day.", "He <span class='ca'>doesn’t work</span>.", "<span class='ca'>Does she live</span> here?", "She <span class='ca'>doesn’t</span> drive."] } ],
      notes: ["he / she / it: +s only in YES sentences", "No am / is / are with a verb: I work (not I am work)"] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "Don’t or doesn’t? Do or does?", sub: "Say the full sentence. Tap to check.", w: 220, fs: 36, rows: [
      ["I ___ like coffee.", "don’t"], ["My sister ___ eat meat.", "doesn’t"], ["___ you speak Russian?", "Do"],
      ["___ Aziz play football?", "Does"], ["We ___ work on Sunday.", "don’t"], ["Does she drive? — No, she ___.", "doesn’t"] ] },
    { t: "gaps", title: "Every day or now?", sub: "Present simple or present continuous? Look at the time words! Tap to check.", w: 300, fs: 34, rows: [
      ["My father ___ (sell) fruit every day.", "sells"], ["Look! Dad ___ (wash) the car now.", "is washing"], ["She usually ___ (go) to work by bus.", "goes"],
      ["Be quiet! The baby ___ (sleep).", "is sleeping"], ["We ___ (visit) Grandma on Sundays.", "visit"], ["At the moment I ___ (study).", "am studying"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men Toshkentda yashayman.", "I live in Tashkent."],
      ["Otam taksi haydaydi.", "My father drives a taxi."],
      ["U qahva ichmaydi.", "She doesn’t drink coffee."],
      ["Inglizcha gapirasizmi?", "Do you speak English?"],
      ["Bobur qayerda ishlaydi?", "Where does Bobur work?"] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: make it negative and a question", sub: "Say both. Tap to check.", fs: 34, rows: [
      ["She teaches English.", "She doesn’t teach English. · Does she teach English?"],
      ["They live in Bukhara.", "They don’t live in Bukhara. · Do they live in Bukhara?"],
      ["He watches TV.", "He doesn’t watch TV. · Does he watch TV?"],
      ["You play chess.", "You don’t play chess. · Do you play chess?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["My brother work in a hospital.", "My brother works in a hospital."],
      ["She watchs TV every evening.", "She watches TV every evening."],
      ["I am live in Samarkand.", "I live in Samarkand."],
      ["He studys English.", "He studies English."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake: round 2", sub: "Harder ones! Tap to fix.", rows: [
      ["She doesn’t likes fish.", "She doesn’t like fish."],
      ["Does he plays football?", "Does he play football?"],
      ["Where you live?", "Where do you live?"],
      ["Do you speak English? — Yes, I speak.", "Yes, I do."] ] },
    { t: "spot", bg: "sky", title: "My life", sub: "Pick a card. Finish the sentence about you or your family.", size: 48,
      cards: ["I live in…", "My mother / father works…", "Every morning I…", "I don’t… at the weekend.", "My best friend likes…", "On Fridays my family…"] },
    { t: "spot", bg: "yel", title: "Find someone who…", sub: "Walk and ask: “Do you…?” If they say “Yes, I do!”, write their name. Then tell the class: “Lola drinks coffee.”", size: 44,
      cards: [{ t: "drinks coffee", uz: "qahva ichadi" }, { t: "has a cat", uz: "mushugi bor" }, { t: "lives near the metro", uz: "metro yaqinida yashaydi" }, { t: "speaks three languages", uz: "uchta tilda gapiradi" }, { t: "cooks plov", uz: "palov pishiradi" }, { t: "gets up at six", uz: "soat oltida turadi" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["use the present simple for every day and facts", "add -s, -es, -ies for he / she / it", "use has, goes, does", "make negatives with don’t / doesn’t", "ask “Do you…?” / “Does she…?” and answer “Yes, I do.”", "use new verbs: sell, teach, help, fix, visit, forget…"] },
    { t: "bye", chips: [["I work.", "peach"], ["She works.", "mint"], ["Do you work?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "a teacher: teach a class", say: "You teach! You are a teacher." }, { cue: "a taxi driver", say: "You drive a taxi!" },
      { cue: "a pilot", say: "You fly planes!" }, { cue: "a cook: make plov", say: "You cook plov!" },
      { cue: "a seller at the bazaar", say: "You sell fruit!" }, { cue: "a doctor", say: "You help sick people!" },
      { cue: "a farmer: grow cotton", say: "You grow cotton!" }, { cue: "a mechanic: fix a car", say: "You fix cars!" },
      { cue: "wash the dishes every evening", say: "You wash the dishes every evening!" }, { cue: "forget your keys every morning", say: "You forget your keys!" },
      { cue: "listen to the radio", say: "You listen to the radio!" }, { cue: "a singer at weddings", say: "You sing at weddings!" },
      { cue: "a football player", say: "You play football!" }, { cue: "a hairdresser: cut hair", say: "You cut hair!" }
    ],
    board: [
      { cat: "-s / -es / -ies", qs: [["work → he ___", "works"], ["watch → she ___ · fix → he ___", "watches · fixes"], ["study → · fly → · have →", "studies · flies · has"]] },
      { cat: "Don’t / doesn’t", qs: [["I ___ eat meat.", "don’t"], ["Make it NO: She drives.", "She doesn’t drive."], ["Make it NO: He goes to work on Sunday.", "He doesn’t go to work on Sunday."]] },
      { cat: "Questions", qs: [["___ you speak Russian?", "Do"], ["Make a question: She lives here.", "Does she live here?"], ["Ask with Where: My uncle works in Andijan.", "Where does your uncle work?"]] },
      { cat: "Short answers", qs: [["Do you like tea? (yes)", "Yes, I do."], ["Does he drive? (no)", "No, he doesn’t."], ["Do your parents work? (answer about your parents)", "Yes, they do. / No, they don’t."]] },
      { cat: "New words", qs: [["“sotmoq” in English", "sell"], ["“o’rgatmoq” and “yordam bermoq”", "teach · help"], ["“unutmoq”, “tuzatmoq” and “mehmonga bormoq”", "forget · fix · visit"]] },
      { cat: "Fix it", qs: [["She work in a shop.", "She works in a shop."], ["He doesn’t likes tea.", "He doesn’t like tea."], ["Does she lives here?", "Does she live here?"]] }
    ],
    wheel: [
      { name: "My day", tasks: ["Say 3 things you do every morning.", "Say what time you go to work or school.", "Say 2 things you don’t do in the evening.", "Say what you usually eat for breakfast."] },
      { name: "Family", tasks: ["Say where your mother or father works.", "Say what your brother or sister does every day.", "Say 2 things your grandmother does.", "Say what your family does on Fridays."] },
      { name: "Jobs", tasks: ["Say what a teacher does.", "Say what a doctor and a driver do.", "Mime a job. The class asks: “Do you…?”", "Say what a cook and a pilot do."] },
      { name: "Questions", tasks: ["Ask a classmate: “Where do you live?”", "Ask the teacher 2 “Do you…?” questions.", "Ask a classmate: “What does your father do?”", "Ask a “What time do you…?” question."] },
      { name: "Spelling", tasks: ["Spell: watches.", "Spell: studies and flies.", "Spell: goes, does and has.", "Spell: fixes and washes."] },
      { name: "Every day and now", tasks: ["Say: “I usually …, but now I am …ing.”", "Say what you do every day and what you are doing now.", "Say: “My mother … every day.”", "Say 2 things that are always true (facts)."] }
    ],
    build: [
      { w: ["I","live","in","Tashkent"], e: "." }, { w: ["She","teaches","English"], e: "." }, { w: ["My","father","sells","fruit"], e: "." },
      { w: ["He","doesn’t","drink","coffee"], e: "." }, { w: ["Do","you","speak","Russian"], e: "?" }, { w: ["Where","does","she","work"], e: "?" },
      { w: ["We","don’t","work","on","Sunday"], e: "." }, { w: ["Bobur","studies","at","university"], e: "." },
      { w: ["What","time","does","the","shop","open"], e: "?" }, { w: ["My","grandmother","goes","to","the","bazaar","every","day"], e: "." }
    ],
    auction: [
      { s: "My sister lives in Bukhara.", ok: true },
      { s: "He work in a bank.", ok: false, fix: "He works in a bank." },
      { s: "Do you speak English?", ok: true },
      { s: "She watchs TV every evening.", ok: false, fix: "She watches TV every evening." },
      { s: "We don’t eat meat on Mondays.", ok: true },
      { s: "Aziz doesn’t plays football.", ok: false, fix: "Aziz doesn’t play football." },
      { s: "Where does your father work?", ok: true },
      { s: "I am live in Samarkand.", ok: false, fix: "I live in Samarkand." },
      { s: "Does she lives here?", ok: false, fix: "Does she live here?" },
      { s: "My brother studies at university.", ok: true },
      { s: "She don’t drive.", ok: false, fix: "She doesn’t drive." },
      { s: "The shop opens at eight o’clock.", ok: true }
    ]
  }
};
