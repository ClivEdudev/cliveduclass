/* Beginner · Lesson 26 · She works, he doesn’t work
   Teaches: present simple with he / she / it: + s (works), + es (teaches, goes), y → ies (studies),
   have → has · negative: he / she / it + doesn’t + verb (no s). Uzbek: U ishlaydi. U ishlamaydi.
   Recycles: I work, I don’t work (lesson 25), jobs (7), he / she / it (8), family (11), has (13),
   his / her (15), food and drink (22), days and o’clock (23).
   New words: teach, cook, sell, drive, help, clean, wash, fix, a hospital, an office.
   Built for Mon 15 Feb 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b26",
  n: 26,
  title: "She works, he doesn’t work",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 26", title: "She <span class='cy'>works</span>", lead: "Present simple: he, she, it + s · Hozirgi oddiy zamon: u", chips: [["U ishlaydi.", "peach"], ["U ishlamaydi.", "mint"], ["Otam taksi haydaydi.", "skyb"]] },
    { t: "goals", items: [
      ["Talk about one person", "She works in a school.", "U maktabda ishlaydi."],
      ["Say NO about one person", "He doesn’t drive.", "U mashina haydamaydi."],
      ["Talk about your family", "My father drives a taxi.", "Otam taksi haydaydi."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: I… and I don’t…", sub: "Lesson 25! Pick a card. Say one true sentence. · Bitta to’g’ri gap ayting.", size: 50,
      cards: [{ t: "I live in…", uz: "Men … da yashayman." }, { t: "I don’t drink…", uz: "Men … ichmayman." }, { t: "I speak…", uz: "Men … gapiraman." },
              { t: "I don’t eat…", uz: "Men … yemayman." }, { t: "We play…", uz: "Biz … o’ynaymiz." }, { t: "I work / I study", uz: "Men ishlayman / o’qiyman" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Words for work", menu: "New words: teach, cook…", items: [
      ["I <span class='ca'>teach</span> English.", "teach = dars bermoq, o’rgatmoq"],
      ["We <span class='ca'>cook</span> plov.", "cook = (ovqat) pishirmoq"],
      ["They <span class='ca'>sell</span> bread at the bazaar.", "sell = sotmoq"],
      ["I <span class='ca'>drive</span> a car.", "drive = (mashina) haydamoq"],
      ["I <span class='ca'>help</span> my mother.", "help = yordam bermoq"],
      ["We <span class='ca'>clean</span> the classroom.", "clean = tozalamoq"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "More words", menu: "New words: wash, fix…", items: [
      ["I <span class='ca'>wash</span> my car.", "wash = yuvmoq"],
      ["They <span class='ca'>fix</span> phones.", "fix = tuzatmoq"],
      ["Doctors work in a <span class='ca'>hospital</span>.", "a hospital = kasalxona"],
      ["I work in an <span class='ca'>office</span>.", "an office = ofis, idora"] ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "I work → She work<span class='ca'>s</span>", menu: "The rule: + s", cols: [
      { bg: "skyb", label: "I, you, we, they", lc: "b", fs: 44, lines: ["I work.", "You work.", "They work."], uz: "Men, siz, biz, ular: fe’l o’zgarmaydi (25-dars)." },
      { bg: "mint", label: "he, she, it", lc: "g", fs: 44, lines: ["He work<span class='ca'>s</span>.", "She work<span class='ca'>s</span>.", "It work<span class='ca'>s</span>."], uz: "U (bitta odam yoki narsa): fe’lga -s qo’shamiz!" } ],
      notes: ["Ali = he · Lola = she · my phone = it", "O’zbekchada: ishlay-di → inglizchada: work-s"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "He / She / It + verb + s", rows: [
      { chips: [["She", "skyb"], ["teaches", "mint"], ["English.", "butter"]], uz: "U ingliz tilidan dars beradi." },
      { chips: [["My father", "skyb"], ["drives", "mint"], ["a taxi.", "butter"]], uz: "Otam taksi haydaydi." },
      { chips: [["Aziz", "skyb"], ["lives", "mint"], ["in Tashkent.", "butter"]], uz: "Aziz Toshkentda yashaydi." } ],
      notes: ["Bitta odam (my mother, Aziz) → + s", "Ko’p odam (my parents, Aziz and Lola) → s yo’q"] },
    { t: "table", eb: "All the people · Hamma shaxslar", title: "work: who + verb", head: ["Who", "Verb", "Uzbek"], rows: [
      ["I", "work", "Men ishlayman"],
      ["You", "work", "Siz ishlaysiz"],
      ["He / She / It", "work<b class='ca'>s</b>", "U ishlaydi"],
      ["We", "work", "Biz ishlaymiz"],
      ["They", "work", "Ular ishlaydi"] ],
      notes: ["Faqat he / she / it bilan -s!", "Only he / she / it → -s"] },
    { t: "cols", eb: "Spelling · Imlo", title: "-s, -es or -ies?", menu: "Spelling: -s, -es, -ies", cols: [
      { bg: "mint", label: "+ s", lc: "g", fs: 40, lines: ["work → works", "live → lives", "play → plays"], uz: "Ko’p fe’llar: shunchaki -s qo’shamiz." },
      { bg: "butter", label: "+ es", fs: 40, lines: ["teach → teaches", "wash → washes", "go → goes"], uz: "Oxiri -ch, -sh, -x yoki -o bo’lsa: -es (fix → fixes)." },
      { bg: "skyb", label: "y → ies", lc: "b", fs: 40, lines: ["study → studies", "have → <b>has</b>"], uz: "Undosh + y: y → ies. have → has (13-dars!)." } ],
      notes: ["play → plays (a + y: just -s)", "has: She has a car. · U mashinasi bor."] },
    { t: "quad", eb: "Jobs · Kasblar", title: "Who does what?", items: [
      { bg: "peach", w: "👩‍🏫", label: "a teacher = o’qituvchi", en: "She teaches students.", uz: "U o’quvchilarga dars beradi." },
      { bg: "mint", w: "👨‍⚕️", label: "a doctor = shifokor", en: "He works in a hospital.", uz: "U kasalxonada ishlaydi." },
      { bg: "skyb", w: "🚕", label: "a driver = haydovchi", en: "He drives a taxi.", uz: "U taksi haydaydi." },
      { bg: "butter", w: "👩‍🍳", label: "a cook = oshpaz", en: "She cooks plov.", uz: "U palov pishiradi." } ] },
    { t: "examples", eb: "Positive · Ha gaplar", title: "He, she, it: examples", items: [
      ["Madina <span class='ca'>lives</span> in Samarkand.", "Madina Samarqandda yashaydi."],
      ["My mother <span class='ca'>cooks</span> plov.", "Onam palov pishiradi."],
      ["Aziz <span class='ca'>works</span> in an office.", "Aziz ofisda ishlaydi."],
      ["He <span class='ca'>speaks</span> English.", "U inglizcha gapiradi."],
      ["Lola <span class='ca'>teaches</span> English.", "Lola ingliz tilidan dars beradi."],
      ["My cat <span class='ca'>drinks</span> milk.", "Mushugim sut ichadi."] ] },
    { t: "examples", eb: "Positive · Ha gaplar", title: "Dilnoza’s family", items: [
      ["My father <span class='ca'>drives</span> a taxi.", "Otam taksi haydaydi."],
      ["My mother <span class='ca'>works</span> in a hospital.", "Onam kasalxonada ishlaydi."],
      ["My brother <span class='ca'>studies</span> in Tashkent.", "Akam Toshkentda o’qiydi."],
      ["My sister <span class='ca'>helps</span> my mother.", "Opam onamga yordam beradi."],
      ["My grandfather <span class='ca'>sells</span> bread at the bazaar.", "Bobom bozorda non sotadi."],
      ["My grandmother <span class='ca'>has</span> a cat.", "Buvimning mushugi bor."] ] },
    { t: "gaps", title: "Add -s, -es or -ies", sub: "Say it and spell it. Tap to check. · Ayting va harflab ayting.", w: 300, rows: [
      ["work → ___", "works"], ["live → ___", "lives"], ["teach → ___", "teaches"],
      ["wash → ___", "washes"], ["go → ___", "goes"], ["study → ___", "studies"] ] },
    { t: "gaps", title: "Write the verb", sub: "He / she + s! Tap to check. · Fe’lni to’g’ri ayting.", w: 240, fs: 36, rows: [
      ["Bobur ___ (live) in Bukhara.", "lives"], ["My father ___ (drive) a bus.", "drives"], ["She ___ (teach) English.", "teaches"],
      ["Lola ___ (help) her mother.", "helps"], ["Aziz ___ (fix) phones.", "fixes"], ["My sister ___ (study) English.", "studies"] ] },

    /* ---------- NEGATIVE ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "He / She / It + doesn’t + verb", menu: "Negative: doesn’t", rows: [
      { chips: [["He", "skyb"], ["doesn’t", "peach"], ["drink", "mint"], ["tea.", "butter"]], uz: "U choy ichmaydi." },
      { chips: [["My mother", "skyb"], ["doesn’t", "peach"], ["drive.", "mint"]], uz: "Onam mashina haydamaydi." },
      { chips: [["Aziz", "skyb"], ["doesn’t", "peach"], ["speak", "mint"], ["Russian.", "butter"]], uz: "Aziz ruscha gapirmaydi." } ],
      notes: ["doesn’t = does not", "doesn’t + work (-s yo’q!)", "I, you, we, they → don’t (25-dars)"] },
    { t: "examples", eb: "Negative · Inkor", title: "Examples: no sentences", items: [
      ["Aziz <span class='cn'>doesn’t</span> drive.", "Aziz mashina haydamaydi."],
      ["My mother <span class='cn'>doesn’t</span> drink coffee.", "Onam qahva ichmaydi."],
      ["Lola <span class='cn'>doesn’t</span> live in Tashkent.", "Lola Toshkentda yashamaydi."],
      ["He <span class='cn'>doesn’t</span> speak Russian.", "U ruscha gapirmaydi."],
      ["My brother <span class='cn'>doesn’t</span> work. He studies.", "Akam ishlamaydi. U o’qiydi."],
      ["I <span class='cn'>don’t</span> cook. She <span class='cn'>doesn’t</span> cook.", "Men ovqat pishirmayman. U ham pishirmaydi."] ] },
    { t: "gaps", title: "Don’t or doesn’t?", sub: "Say the full sentence. Tap to check. · don’t yoki doesn’t?", w: 220, fs: 38, rows: [
      ["She ___ eat meat.", "doesn’t"], ["I ___ drive.", "don’t"], ["My father ___ cook.", "doesn’t"],
      ["We ___ live in Samarkand.", "don’t"], ["The cat ___ like water.", "doesn’t"], ["Lola and Madina ___ work.", "don’t"] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["She <span class='cn'>work</span> in a school.", "He <span class='cn'>teachs</span> English.", "She <span class='cn'>don’t</span> drive.", "He doesn’t <span class='cn'>works</span>."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["She <span class='ca'>works</span> in a school.", "He <span class='ca'>teaches</span> English.", "She <span class='ca'>doesn’t</span> drive.", "He doesn’t <span class='ca'>work</span>."],
        uz: "U → fe’l + s. doesn’t dan keyin -s yo’q!" } ] },

    /* ---------- PRACTICE ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Otam taksi haydaydi.", "My father drives a taxi."],
      ["Lola Samarqandda yashaydi.", "Lola lives in Samarkand."],
      ["Aziz ingliz tilidan dars beradi.", "Aziz teaches English."],
      ["Onam qahva ichmaydi.", "My mother doesn’t drink coffee."],
      ["Bobur ruscha gapirmaydi.", "Bobur doesn’t speak Russian."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["My sister work in an office.", "My sister works in an office."],
      ["He gos to school.", "He goes to school."],
      ["She doesn’t lives in Bukhara.", "She doesn’t live in Bukhara."],
      ["Bobur don’t eat fish.", "Bobur doesn’t eat fish."] ] },
    { t: "spot", bg: "sky", title: "My family", sub: "Pick a card. Say 2 sentences: one yes, one no. Example: My father drives a car. He doesn’t cook.", size: 50,
      cards: [{ t: "My mother…", uz: "onam" }, { t: "My father…", uz: "otam" }, { t: "My brother…", uz: "akam / ukam" },
              { t: "My sister…", uz: "opam / singlim" }, { t: "My friend…", uz: "do’stim" }, { t: "My teacher…", uz: "o’qituvchim" }] },
    { t: "spot", bg: "yel", title: "Pairs: who is it?", sub: "A picks a card and says 2 sentences with he / she / it. B guesses. Example: “He works in a hospital. He helps people.” → “A doctor!”", size: 50,
      cards: [{ t: "a teacher", uz: "o’qituvchi" }, { t: "a doctor", uz: "shifokor" }, { t: "a driver", uz: "haydovchi" },
              { t: "a cook", uz: "oshpaz" }, { t: "a student", uz: "talaba" }, { t: "a cat", uz: "mushuk" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say he / she / it + s: She works.", "spell: teaches, goes, studies", "say what my mother and father do", "say NO: He doesn’t work.", "use new words: teach, cook, sell, drive…", "remember: doesn’t + verb (no s)"] },
    { t: "bye", chips: [["She works.", "peach"], ["He doesn’t work.", "mint"], ["My father drives a taxi.", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "drive a car", say: "He drives a car! / She drives a car!" }, { cue: "cook plov", say: "He cooks plov! / She cooks plov!" },
      { cue: "teach English (write on the board)", say: "He teaches English! / She teaches English!" }, { cue: "sell bread (“Bread! Bread!”)", say: "He sells bread! / She sells bread!" },
      { cue: "wash a car", say: "He washes a car! / She washes a car!" }, { cue: "clean the room", say: "He cleans the room! / She cleans the room!" },
      { cue: "fix a phone", say: "He fixes a phone! / She fixes a phone!" }, { cue: "help a friend (carry a bag together)", say: "He helps a friend! / She helps a friend!" },
      { cue: "drink tea", say: "He drinks tea! / She drinks tea!" }, { cue: "play football", say: "He plays football! / She plays football!" },
      { cue: "eat plov", say: "He eats plov! / She eats plov!" }, { cue: "shake head: no coffee!", say: "He doesn’t drink coffee! / She doesn’t drink coffee!" }
    ],
    board: [
      { cat: "+ s", qs: [["work →", "works"], ["teach →", "teaches"], ["study →", "studies"]] },
      { cat: "He, she, it", qs: [["Lola →", "she"], ["my father →", "he"], ["my phone →", "it"]] },
      { cat: "Yes sentences", qs: [["She ___ (live) in Tashkent.", "lives"], ["He ___ (drive) a taxi.", "drives"], ["My mother ___ (have) a car.", "has"]] },
      { cat: "Doesn’t", qs: [["She ___ cook. (no)", "doesn’t"], ["Make it NO: He works.", "He doesn’t work."], ["Make it NO: Lola speaks Russian.", "Lola doesn’t speak Russian."]] },
      { cat: "New words", qs: [["“sotmoq” in English", "sell"], ["“tozalamoq” in English", "clean"], ["“kasalxona” in English", "a hospital"]] },
      { cat: "Fix it", qs: [["She work.", "She works."], ["He teachs.", "He teaches."], ["She don’t drive.", "She doesn’t drive."]] }
    ],
    wheel: [
      { name: "Mother", tasks: ["Say where your mother lives.", "Say what your mother cooks.", "Say 1 thing your mother doesn’t drink.", "Say 2 sentences about your mother."] },
      { name: "Father", tasks: ["Say where your father works.", "Does he drive? Say: He drives… / He doesn’t drive.", "Say 1 thing your father doesn’t eat.", "Say 2 sentences about your father."] },
      { name: "Friend", tasks: ["Say your friend’s name and city.", "Say what your friend drinks.", "Say 1 thing your friend doesn’t like.", "Say what your friend plays."] },
      { name: "Teacher", tasks: ["Say what the teacher teaches.", "Say where the teacher works.", "Say 1 thing the teacher doesn’t do.", "Say 2 sentences about the teacher."] },
      { name: "Spelling", tasks: ["Spell: works.", "Spell: teaches.", "Spell: studies.", "Spell: goes."] },
      { name: "Jobs", tasks: ["A doctor… (1 sentence)", "A driver… (1 sentence)", "A teacher… (1 sentence)", "A cook… (1 sentence)"] }
    ],
    build: [
      { w: ["She","works","in","a","hospital"], e: "." }, { w: ["My","father","drives","a","taxi"], e: "." },
      { w: ["Lola","teaches","English"], e: "." }, { w: ["He","doesn’t","speak","Russian"], e: "." },
      { w: ["My","cat","drinks","milk"], e: "." }, { w: ["Aziz","doesn’t","eat","fish"], e: "." },
      { w: ["My","brother","studies","in","Tashkent"], e: "." }, { w: ["She","sells","bread","at","the","bazaar"], e: "." }
    ],
    auction: [
      { s: "My mother cooks plov.", ok: true },
      { s: "He live in Samarkand.", ok: false, fix: "He lives in Samarkand." },
      { s: "Lola teaches English.", ok: true },
      { s: "She doesn’t drinks tea.", ok: false, fix: "She doesn’t drink tea." },
      { s: "My father drives a taxi.", ok: true },
      { s: "Bobur studys English.", ok: false, fix: "Bobur studies English." },
      { s: "Aziz doesn’t speak Russian.", ok: true },
      { s: "She don’t like fish.", ok: false, fix: "She doesn’t like fish." },
      { s: "My cat drinks milk.", ok: true },
      { s: "He gos to school.", ok: false, fix: "He goes to school." }
    ]
  }
};
