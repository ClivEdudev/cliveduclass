/* Beginner · Lesson 8 · He is, she is, it is
   Teaches: he / she / it + is (He’s a doctor. She’s from Korea. It’s a red car.),
   "Where is he from? He’s from Turkey.", 8 countries, country, city, and "Samarkand is in Uzbekistan."
   Recycles: I am, you are and jobs (lesson 7), colours (lesson 5), It’s a pen (lesson 4),
   numbers and age (lesson 3), capital letters and spelling (lesson 2).
   Built for Mon 14 Dec 2026. */
window.LESSON = {
  id: "b8",
  n: 8,
  title: "He is, she is, it is",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 8", title: "He is, she is, <span class='cy'>it is</span>", lead: "he, she, it + is · Where is he from? · U qayerdan?", chips: [["U shifokor.", "peach"], ["U Koreyadan.", "mint"], ["U qayerdan?", "skyb"]] },
    { t: "goals", items: [
      ["Say he, she and it", "She is a teacher.", "U o’qituvchi."],
      ["Say where people are from", "He is from Turkey.", "U Turkiyadan."],
      ["Ask: Where is he from?", "Where is she from?", "U qayerdan?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: I am, you are", sub: "Pick a card. Say it about you or a classmate. · Kartani tanlang va gap ayting.", size: 56,
      cards: [{ t: "I am a…", uz: "Men …man" }, { t: "You are a…", uz: "Siz …siz" }, { t: "I’m a student.", uz: "Men o’quvchiman." }, { t: "You’re my friend.", uz: "Siz mening do’stimsiz." }, { t: "I’m 15.", uz: "Men 15 yoshdaman." }, { t: "You’re a teacher.", uz: "Siz o’qituvchisiz." }] },

    /* ---------- HE, SHE, IT ---------- */
    { t: "cols", eb: "New words · Yangi so’zlar", title: "He, she or it?", menu: "he, she, it", cols: [
      { bg: "skyb", label: "he 👨", lc: "b", fs: 42, lines: ["Aziz → <span class='ca'>he</span>", "Bobur → <span class='ca'>he</span>"], uz: "he = u (erkak, o’g’il bola)" },
      { bg: "peach", label: "she 👩", lc: "r", fs: 42, lines: ["Lola → <span class='ca'>she</span>", "Madina → <span class='ca'>she</span>"], uz: "she = u (ayol, qiz bola)" },
      { bg: "mint", label: "it 📘", lc: "g", fs: 42, lines: ["a book → <span class='ca'>it</span>", "Tashkent → <span class='ca'>it</span>"], uz: "it = u, bu (narsa, hayvon, shahar)" } ],
      notes: ["O’zbek tilida bitta so’z: «u»", "Ingliz tilida uchta: he, she, it"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "he / she / it + is", rows: [
      { chips: [["He", "skyb"], ["is", "peach"], ["a doctor.", "mint"]], uz: "U shifokor." },
      { chips: [["She", "skyb"], ["is", "peach"], ["a teacher.", "mint"]], uz: "U o’qituvchi." },
      { chips: [["It", "skyb"], ["is", "peach"], ["a pen.", "mint"]], uz: "Bu ruchka." } ],
      notes: ["he is = he’s", "she is = she’s", "it is = it’s"] },
    { t: "table", eb: "To be · am, is, are", title: "I am, you are, he is…", head: ["Who", "to be", "Short form", "Uzbek"], rows: [
      ["I", "<b class='ca'>am</b>", "I’m", "Men …man"],
      ["You", "<b class='ca'>are</b>", "You’re", "Siz …siz"],
      ["He", "<b class='ca'>is</b>", "He’s", "U … (erkak)"],
      ["She", "<b class='ca'>is</b>", "She’s", "U … (ayol)"],
      ["It", "<b class='ca'>is</b>", "It’s", "U / Bu … (narsa)"] ],
      notes: ["Lesson 7: I am, you are", "Today: he, she, it → is"] },
    { t: "examples", eb: "Examples · Misollar", title: "He is, she is, it is", items: [
      ["Aziz is a student. <span class='ca'>He is</span> 15.", "Aziz o’quvchi. U 15 yoshda."],
      ["Lola is a doctor. <span class='ca'>She is</span> 30.", "Lola shifokor. U 30 yoshda."],
      ["This is a car. <span class='ca'>It is</span> red.", "Bu mashina. U qizil."],
      ["<span class='ca'>He’s</span> a driver.", "U haydovchi."],
      ["<span class='ca'>She’s</span> a teacher.", "U o’qituvchi."],
      ["<span class='ca'>It’s</span> a blue pen.", "Bu ko’k ruchka."] ] },
    { t: "gaps", title: "He, she or it?", sub: "Say the word. Tap to check. · So’zni ayting.", w: 200, fs: 40, rows: [
      ["Bobur → ___", "he"], ["Madina → ___", "she"], ["a book → ___", "it"],
      ["Dilnoza → ___", "she"], ["Tashkent → ___", "it"], ["Aziz → ___", "he"] ] },
    { t: "gaps", title: "Am, is or are?", sub: "Say the full sentence. Tap to check. · To’liq gapni ayting.", w: 200, fs: 38, rows: [
      ["I ___ a student.", "am"], ["She ___ a doctor.", "is"], ["You ___ my friend.", "are"],
      ["He ___ a driver.", "is"], ["It ___ a pen.", "is"], ["Lola ___ a teacher.", "is"] ] },

    /* ---------- COUNTRIES AND CITIES ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Countries · Davlatlar", menu: "New words: countries", items: [
      ["<span class='ca'>Uzbekistan</span> · <span class='ca'>Kazakhstan</span>", "O’zbekiston · Qozog’iston"],
      ["<span class='ca'>Russia</span> · <span class='ca'>Turkey</span>", "Rossiya · Turkiya"],
      ["<span class='ca'>China</span> · <span class='ca'>Korea</span>", "Xitoy · Koreya"],
      ["<span class='ca'>England</span> · <span class='ca'>America</span>", "Angliya · Amerika"],
      ["Uzbekistan is a <span class='ca'>country</span>.", "country = davlat, mamlakat"],
      ["Tashkent is a <span class='ca'>city</span>.", "city = shahar"] ] },
    { t: "formula", bg: "ink", eb: "From · -dan", title: "Who + am / is / are + from…", rows: [
      { chips: [["I", "skyb"], ["am", "peach"], ["from", "mint"], ["Uzbekistan.", "butter"]], uz: "Men O’zbekistondanman." },
      { chips: [["He", "skyb"], ["is", "peach"], ["from", "mint"], ["Turkey.", "butter"]], uz: "U Turkiyadan." },
      { chips: [["She", "skyb"], ["is", "peach"], ["from", "mint"], ["Korea.", "butter"]], uz: "U Koreyadan." } ],
      notes: ["from = -dan", "Countries and cities: Capital letter! (Lesson 2)", "Never forget am / is!"] },
    { t: "cols", eb: "Ask and answer · So’rang va javob bering", title: "Where is he from?", menu: "Where is he from?", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 38, lines: ["<span class='cw'>Where</span> are you from?", "<span class='cw'>Where</span> is he from?", "<span class='cw'>Where</span> is she from?"], uz: "Qayerdansiz? · U qayerdan?" },
      { bg: "mint", label: "Answer", lc: "g", fs: 38, lines: ["I’m from Tashkent.", "He’s from Russia.", "She’s from China."], uz: "Toshkentdanman. · U Rossiyadan. · U Xitoydan." } ],
      notes: ["where = qayer", "Where + is + he + from?"] },
    { t: "examples", eb: "Examples · Misollar", title: "People and places", items: [
      ["Bobur <span class='ca'>is from</span> Bukhara.", "Bobur Buxorodan."],
      ["Madina <span class='ca'>is from</span> Samarkand.", "Madina Samarqanddan."],
      ["Tom <span class='ca'>is from</span> England. He’s a teacher.", "Tom Angliyadan. U o’qituvchi."],
      ["Min-ji <span class='ca'>is from</span> Korea. She’s a student.", "Min-ji Koreyadan. U o’quvchi."],
      ["<span class='cw'>Where</span> is Ivan from? He’s from Russia.", "Ivan qayerdan? U Rossiyadan."],
      ["Samarkand <span class='ca'>is in</span> Uzbekistan.", "Samarqand O’zbekistonda. (in = -da)"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Cities · Shaharlar", items: [
      { bg: "skyb", w: "🏙️", label: "Tashkent", en: "Tashkent is in Uzbekistan.", uz: "Toshkent O’zbekistonda." },
      { bg: "mint", w: "🕌", label: "Samarkand", en: "Samarkand is in Uzbekistan.", uz: "Samarqand O’zbekistonda." },
      { bg: "peach", w: "💂", label: "London", en: "London is in England.", uz: "London Angliyada." },
      { bg: "butter", w: "🌉", label: "Istanbul", en: "Istanbul is in Turkey.", uz: "Istanbul Turkiyada." } ] },
    { t: "gaps", title: "Where is he from?", sub: "Say the full sentence. Tap to check. · To’liq gapni ayting.", w: 250, fs: 36, rows: [
      ["He ___ from Turkey.", "is"], ["I ___ from Tashkent.", "am"], ["She is ___ Korea.", "from"],
      ["___ is Lola from?", "Where"], ["Ivan is from ___. (Rossiya)", "Russia"], ["Tashkent is a ___. (shahar)", "city"] ] },
    { t: "spot", bg: "sky", title: "He or she? Look at the class!", sub: "Teacher points at a classmate. Say: “He is Aziz. He’s from Tashkent.” · O’qituvchi ko’rsatadi, siz aytasiz.", size: 52,
      cards: [{ t: "He is…", uz: "U … (erkak)" }, { t: "She is…", uz: "U … (ayol)" }, { t: "He’s from…", uz: "U …dan (erkak)" }, { t: "She’s from…", uz: "U …dan (ayol)" }, { t: "It’s a…", uz: "Bu …" }, { t: "It’s red / blue…", uz: "U qizil / ko’k…" }] },

    /* ---------- BE CAREFUL ---------- */
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 36, lines: ["Lola? <span class='cn'>He</span> is a doctor.", "He <span class='cn'>from</span> Russia.", "<span class='cn'>Where he is</span> from?", "I’m from <span class='cn'>korea</span>."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 36, lines: ["Lola? <span class='ca'>She</span> is a doctor.", "He <span class='ca'>is from</span> Russia.", "<span class='ca'>Where is he</span> from?", "I’m from <span class='ca'>Korea</span>."] },
      { bg: "butter", label: "Why? · Nega?", fs: 30, lines: ["girl → she", "is!", "is → he", "Capital!"], uz: "Qiz → she, o’g’il → he. «is» ni unutmang. Savolda is oldin keladi. Davlat va shahar katta harf bilan." } ] },

    /* ---------- PRACTICE ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["U shifokor. (Aziz)", "He is a doctor."],
      ["U Koreyadan. (Min-ji)", "She is from Korea."],
      ["Bu ko’k ruchka.", "It’s a blue pen."],
      ["U qayerdan? (Bobur)", "Where is he from?"],
      ["Samarqand O’zbekistonda.", "Samarkand is in Uzbekistan."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["Madina is a student. He is 14.", "Madina is a student. She is 14."],
      ["She from Turkey.", "She is from Turkey."],
      ["He are a driver.", "He is a driver."],
      ["Where she is from?", "Where is she from?"],
      ["I’m from uzbekistan.", "I’m from Uzbekistan."] ] },
    { t: "spot", bg: "yel", title: "Me and my friend", sub: "Say 3 sentences: “I’m from… My friend is Aziz. He’s from…” · O’zingiz va do’stingiz haqida 3 ta gap.", size: 50,
      cards: [{ t: "I’m from…", uz: "Men …danman." }, { t: "I’m a…", uz: "Men …man." }, { t: "My friend is…", uz: "Do’stim — …" }, { t: "He’s from…", uz: "U …dan. (erkak)" }, { t: "She’s from…", uz: "U …dan. (ayol)" }, { t: "He’s / She’s a…", uz: "U …" }] },
    { t: "spot", bg: "sky", title: "Pairs: Where is he from?", sub: "Pairs. A: “Where is Ivan from?” B: “He’s from Russia.” Then change. · Juftlikda so’rang va javob bering.", size: 46,
      cards: [{ t: "Ivan · Russia", uz: "erkak → he" }, { t: "Min-ji · Korea", uz: "ayol → she" }, { t: "Tom · England", uz: "erkak → he" }, { t: "Elif · Turkey", uz: "ayol → she" }, { t: "Mei · China", uz: "ayol → she" }, { t: "Arman · Kazakhstan", uz: "erkak → he" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say he, she and it", "use is: He is… She is… It is…", "say 8 countries in English", "say where I’m from", "ask: Where is he / she from?"] },
    { t: "bye", chips: [["He is…", "peach"], ["She is from…", "mint"], ["Where is he from?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "a boy acts as a doctor", say: "He is a doctor!" }, { cue: "a girl acts as a teacher", say: "She is a teacher!" },
      { cue: "a boy acts as a driver", say: "He is a driver!" }, { cue: "a girl reads and writes (a student)", say: "She is a student!" },
      { cue: "hold up a pen", say: "It is a pen! / It’s a pen!" }, { cue: "hold up a red book", say: "It’s a red book!" },
      { cue: "cook plov in a big kazan", say: "He / She is from Uzbekistan!" }, { cue: "eat with chopsticks", say: "He / She is from China!" },
      { cue: "do a K-pop dance", say: "He / She is from Korea!" }, { cue: "put on a cowboy hat", say: "He / She is from America!" },
      { cue: "march like a London guard", say: "He / She is from England!" }, { cue: "do a Russian dance", say: "He / She is from Russia!" }
    ],
    board: [
      { cat: "He, she, it", qs: [["Aziz → ?", "he"], ["Lola → ?", "she"], ["a book, Bobur, Madina → ?", "it, he, she"]] },
      { cat: "am / is / are", qs: [["She ___ a doctor.", "is"], ["I ___ from Tashkent.", "am"], ["You ___ my friend. He ___ my friend, too.", "are · is"]] },
      { cat: "Countries", qs: [["“O’zbekiston” in English", "Uzbekistan"], ["“Turkiya” and “Rossiya” in English", "Turkey · Russia"], ["Say 4 countries in English.", "Uzbekistan, Korea, China, England… (any 4)"]] },
      { cat: "Cities", qs: [["Samarkand is in ___.", "Uzbekistan"], ["London is in ___.", "England"], ["Say 3 cities in Uzbekistan.", "Tashkent, Samarkand, Bukhara… (any 3)"]] },
      { cat: "Where from?", qs: [["“Qayerdansiz?” in English", "Where are you from?"], ["Answer: Where are you from?", "I’m from … (Uzbekistan / Tashkent)."], ["Ask about Bobur. Then answer: Buxoro.", "Where is he from? · He’s from Bukhara."]] },
      { cat: "Fix it", qs: [["He from Russia.", "He is from Russia."], ["Lola is a teacher. He is 20.", "Lola is a teacher. She is 20."], ["Where she is from?", "Where is she from?"]] }
    ],
    wheel: [
      { name: "He", tasks: ["Point at a boy. Say: He is …(name).", "Say: He is a …(job).", "Point at a boy. Say: He is from …", "Say 2 sentences about a boy in the class."] },
      { name: "She", tasks: ["Point at a girl. Say: She is …(name).", "Say: She is a …(job).", "Point at a girl. Say: She is from …", "Say 2 sentences about a girl in the class."] },
      { name: "It", tasks: ["Hold up a thing. Say: It is a …", "Say the colour: It is …", "Say: Tashkent is a city. It is in …", "Point at 2 things. Say 2 sentences with It’s."] },
      { name: "Countries", tasks: ["Say 3 countries.", "Spell: Korea.", "Spell: China.", "Say: I’m from …"] },
      { name: "Cities", tasks: ["Say 3 cities in Uzbekistan.", "Say: Samarkand is in …", "Spell: Tashkent.", "Where is London? Say: It’s in …"] },
      { name: "Ask", tasks: ["Ask a classmate: Where are you from?", "Ask about a boy: Where is he from?", "Ask about a girl: Where is she from?", "Point at a thing. Ask: What is it?"] }
    ],
    build: [
      { w: ["She","is","a","teacher"], e: "." }, { w: ["He","is","from","Turkey"], e: "." }, { w: ["Where","is","she","from"], e: "?" },
      { w: ["It","is","a","red","car"], e: "." }, { w: ["I","am","from","Samarkand"], e: "." }, { w: ["Where","are","you","from"], e: "?" },
      { w: ["Bukhara","is","in","Uzbekistan"], e: "." }, { w: ["He’s","a","doctor"], e: "." }
    ],
    auction: [
      { s: "She is from Korea.", ok: true },
      { s: "He from Russia.", ok: false, fix: "He is from Russia." },
      { s: "It’s a blue pen.", ok: true },
      { s: "Lola is a doctor. He is from Bukhara.", ok: false, fix: "Lola is a doctor. She is from Bukhara." },
      { s: "Where is he from?", ok: true },
      { s: "She are a teacher.", ok: false, fix: "She is a teacher." },
      { s: "Samarkand is in Uzbekistan.", ok: true },
      { s: "I’m from tashkent.", ok: false, fix: "I’m from Tashkent." },
      { s: "Aziz is a student. He is 15.", ok: true },
      { s: "Where she is from?", ok: false, fix: "Where is she from?" }
    ]
  }
};
