/* Beginner · Lesson 7 · I am, you are
   Teaches: to be with I and you only (positive): I am / I’m, you are / you’re,
   + a / an + job (I’m a student. I’m an engineer.), You’re my friend.
   10 new words: student, teacher, doctor, nurse, driver, cook, farmer, engineer, builder, friend (+ job).
   No he / she (lesson 8), no plurals (lesson 9), no not and no Are you…? (lesson 10).
   Recycles: I’m Ali, I’m fine, I am 15 (lessons 1 and 3), a / an (lesson 4), colours (lesson 5), spelling (lesson 2).
   Built for Thu 10 Dec 2026. */
window.LESSON = {
  id: "b7",
  n: 7,
  title: "I am, you are",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 7", title: "I am, <span class='cy'>you are</span>", lead: "to be: I am, you are · jobs · Kasblar", chips: [["Men o’quvchiman.", "peach"], ["Siz o’qituvchisiz.", "mint"], ["Sen mening do’stimsan.", "skyb"]] },
    { t: "goals", items: [
      ["Say who you are", "I’m a student.", "Men o’quvchiman."],
      ["Talk to a person", "You’re my friend.", "Sen mening do’stimsan."],
      ["Say 10 jobs", "a doctor, an engineer…", "shifokor, muhandis…"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: What colour is it?", sub: "Say the thing and the colour: “It’s a red car.” · Narsa va rangini ayting.", size: 96,
      cards: [{ t: "🚗", uz: "mashina" }, { t: "📘", uz: "kitob" }, { t: "📙", uz: "kitob" }, { t: "🚕", uz: "mashina" }, { t: "📗", uz: "kitob" }, { t: "📕", uz: "kitob" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Jobs 1", menu: "New words: jobs 1", items: [
      ["🧑‍🎓 a <span class='ca'>student</span>", "student = o’quvchi, talaba"],
      ["🧑‍🏫 a <span class='ca'>teacher</span>", "teacher = o’qituvchi"],
      ["🧑‍⚕️ a <span class='ca'>doctor</span>", "doctor = shifokor, vrach"],
      ["💉 a <span class='ca'>nurse</span>", "nurse = hamshira"],
      ["🚕 a <span class='ca'>driver</span>", "driver = haydovchi"],
      ["🧑‍🍳 a <span class='ca'>cook</span>", "cook = oshpaz"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Jobs 2", menu: "New words: jobs 2", items: [
      ["🧑‍🌾 a <span class='ca'>farmer</span>", "farmer = fermer, dehqon"],
      ["🧑‍🔧 an <span class='ca'>engineer</span>", "engineer = muhandis"],
      ["👷 a <span class='ca'>builder</span>", "builder = quruvchi"],
      ["🤝 my <span class='ca'>friend</span>", "friend = do’st"],
      ["What’s your <span class='ca'>job</span>?", "job = kasb, ish · Kasbingiz nima?"],
      ["<span class='ca'>an</span> engineer", "a, e, i, o, u oldidan → an"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "I’m a … · You’re a …", items: [
      { bg: "peach", w: "🧑‍⚕️", label: "doctor = shifokor", en: "I’m a doctor.", uz: "Men shifokorman." },
      { bg: "mint", w: "🧑‍🏫", label: "teacher = o’qituvchi", en: "You’re a teacher.", uz: "Siz o’qituvchisiz." },
      { bg: "skyb", w: "🧑‍🍳", label: "cook = oshpaz", en: "I’m a cook.", uz: "Men oshpazman." },
      { bg: "butter", w: "🧑‍🔧", label: "engineer = muhandis", en: "You’re an engineer.", uz: "Siz muhandissiz." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "Uzbek and English", menu: "The rule", cols: [
      { bg: "mint", label: "O’zbekcha", lc: "g", fs: 40, lines: ["Men o’quvchi<b>man</b>.", "Siz o’qituvchi<b>siz</b>."], uz: "O’zbek tilida qo’shimcha so’z oxirida keladi: -man, -siz, -san." },
      { bg: "skyb", label: "English", lc: "b", fs: 40, lines: ["I <span class='ca'>am</span> a student.", "You <span class='ca'>are</span> a teacher."], uz: "Ingliz tilida alohida so’z kerak: am, are. Uni tashlab ketmang!" },
      { bg: "butter", label: "+ a / an", fs: 40, lines: ["a student", "an engineer"], uz: "Bitta kasbdan oldin a yoki an qo’yamiz." } ] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "I am · You are", rows: [
      { chips: [["I", "skyb"], ["am", "peach"], ["a student.", "mint"]], uz: "Men o’quvchiman." },
      { chips: [["You", "skyb"], ["are", "peach"], ["a teacher.", "mint"]], uz: "Siz o’qituvchisiz." },
      { chips: [["You", "skyb"], ["are", "peach"], ["my friend.", "mint"]], uz: "Sen mening do’stimsan." } ],
      notes: ["I → am", "You → are", "I am = I’m · You are = You’re"] },
    { t: "table", eb: "Short forms · Qisqa shakl", title: "I’m and you’re", head: ["Who", "to be", "Short form", "Example", "Uzbek"], rows: [
      ["I", "<b class='ca'>am</b>", "I’m", "I’m a doctor.", "Men shifokorman."],
      ["I", "<b class='ca'>am</b>", "I’m", "I’m fifteen.", "Men o’n besh yoshdaman."],
      ["You", "<b class='ca'>are</b>", "You’re", "You’re a nurse.", "Siz hamshirasiz."],
      ["You", "<b class='ca'>are</b>", "You’re", "You’re my friend.", "Sen mening do’stimsan."] ],
      notes: ["you = sen va siz: ingliz tilida bitta so’z", "I doim katta harf bilan: I"] },
    { t: "examples", eb: "Examples · Misollar", title: "I am…", items: [
      ["I <span class='ca'>am</span> Aziz.", "Men Azizman."],
      ["I<span class='ca'>’m</span> a student.", "Men o’quvchiman."],
      ["I<span class='ca'>’m</span> fifteen.", "Men o’n besh yoshdaman."],
      ["I<span class='ca'>’m</span> a doctor in Tashkent.", "Men Toshkentda shifokorman."],
      ["I<span class='ca'>’m</span> an engineer.", "Men muhandisman."],
      ["I<span class='ca'>’m</span> fine, thank you.", "Yaxshiman, rahmat."] ] },
    { t: "examples", eb: "Examples · Misollar", title: "You are…", items: [
      ["You <span class='ca'>are</span> my friend.", "Sen mening do’stimsan."],
      ["You<span class='ca'>’re</span> a teacher.", "Siz o’qituvchisiz."],
      ["You<span class='ca'>’re</span> a good cook!", "Siz yaxshi oshpazsiz!"],
      ["Lola, you<span class='ca'>’re</span> a nurse.", "Lola, siz hamshirasiz."],
      ["Bobur, you<span class='ca'>’re</span> a driver.", "Bobur, sen haydovchisan."],
      ["You<span class='ca'>’re</span> fourteen.", "Sen o’n to’rt yoshdasan."] ] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "am or are?", sub: "I → am · You → are. Tap to check.", w: 170, fs: 42, rows: [
      ["I ___ a student.", "am"], ["You ___ my friend.", "are"], ["I ___ Dilnoza.", "am"],
      ["You ___ a doctor.", "are"], ["I ___ fourteen.", "am"], ["You ___ an engineer.", "are"] ] },
    { t: "gaps", title: "a or an?", sub: "Look at the next word! Tap to check. · Keyingi so’zga qarang!", w: 160, fs: 42, rows: [
      ["I’m ___ teacher.", "a"], ["You’re ___ engineer.", "an"], ["I’m ___ cook.", "a"],
      ["You’re ___ driver.", "a"], ["I’m ___ nurse.", "a"], ["It’s ___ orange pen.", "an"] ] },
    { t: "gaps", title: "I’m or You’re?", sub: "Read the Uzbek. Tap to check. · O’zbekchasiga qarang.", w: 200, fs: 36, rows: [
      ["___ a doctor. (Men shifokorman.)", "I’m"], ["___ a builder. (Siz quruvchisiz.)", "You’re"], ["___ my friend. (Sen mening do’stimsan.)", "You’re"],
      ["___ a cook. (Men oshpazman.)", "I’m"], ["___ a nurse. (Siz hamshirasiz.)", "You’re"], ["___ thirteen. (Men o’n uch yoshdaman.)", "I’m"] ] },
    { t: "spot", bg: "sky", title: "Point and say!", sub: "Pick a card. Point to a classmate: “You’re a doctor!” They answer: “Yes! I’m a doctor!” · Sinfdoshingizni ko’rsating.", size: 52,
      cards: [{ t: "🧑‍⚕️ doctor", uz: "shifokor" }, { t: "🧑‍🏫 teacher", uz: "o’qituvchi" }, { t: "🚕 driver", uz: "haydovchi" }, { t: "🧑‍🍳 cook", uz: "oshpaz" }, { t: "🧑‍🌾 farmer", uz: "fermer" }, { t: "🧑‍🔧 engineer", uz: "muhandis" }] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["<span class='cn'>I student</span>.", "I am <span class='cn'>teacher</span>.", "You <span class='cn'>is</span> my friend.", "<span class='cn'>i</span>’m Lola."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["I <span class='ca'>am a</span> student.", "I am <span class='ca'>a teacher</span>.", "You <span class='ca'>are</span> my friend.", "<span class='ca'>I</span>’m Lola."] },
      { bg: "butter", label: "Why? · Nega?", fs: 34, lines: ["am / are!", "a / an + job", "you → are", "I = katta harf"], uz: "am / are tushib qolmasin. Kasbdan oldin a / an. You bilan faqat are. I doim katta harf." } ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men o’qituvchiman.", "I’m a teacher."],
      ["Sen mening do’stimsan.", "You’re my friend."],
      ["Men muhandisman.", "I’m an engineer."],
      ["Siz shifokorsiz.", "You’re a doctor."],
      ["Men o’n olti yoshdaman.", "I’m sixteen."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I am driver.", "I am a driver."],
      ["You is a nurse.", "You are a nurse."],
      ["I’m a engineer.", "I’m an engineer."],
      ["I farmer.", "I’m a farmer."] ] },
    { t: "spot", bg: "sky", title: "About me", sub: "Stand up. Say 3 sentences about you. Then point to a classmate: “You’re my friend!” · O’zingiz haqingizda 3 ta gap.", size: 50,
      cards: [{ t: "I’m … (name)", uz: "Men …man" }, { t: "I’m … (age)", uz: "Men … yoshdaman" }, { t: "I’m a student.", uz: "Men o’quvchiman." }, { t: "You’re my friend!", uz: "Sen mening do’stimsan!" }, { t: "You’re a good …!", uz: "Siz yaxshi …siz!" }, { t: "Nice to meet you!", uz: "Tanishganimdan xursandman!" }] },
    { t: "spot", bg: "yel", title: "Pairs: a new job", sub: "Take a card. A: “Hello! I’m Aziz. I’m a doctor.” B: “Nice to meet you! I’m … I’m a …” Then swap. · Juftlikda.", size: 52,
      cards: [{ t: "teacher", uz: "o’qituvchi" }, { t: "cook", uz: "oshpaz" }, { t: "driver", uz: "haydovchi" }, { t: "nurse", uz: "hamshira" }, { t: "farmer", uz: "fermer" }, { t: "builder", uz: "quruvchi" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say I am / I’m", "say you are / you’re", "say 10 jobs", "use a / an: a doctor, an engineer", "say: I’m a student.", "say: You’re my friend."] },
    { t: "bye", chips: [["I’m a student.", "peach"], ["You’re my friend.", "mint"], ["I’m an engineer.", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "write on the board, point at the class", say: "You’re a teacher!" }, { cue: "drive a car", say: "You’re a driver!" },
      { cue: "cook plov in a big kazan", say: "You’re a cook!" }, { cue: "listen to a heart", say: "You’re a doctor!" },
      { cue: "give an injection", say: "You’re a nurse!" }, { cue: "pick cotton in a field", say: "You’re a farmer!" },
      { cue: "build a wall, brick by brick", say: "You’re a builder!" }, { cue: "read and write at a desk", say: "You’re a student!" },
      { cue: "fix a big machine with a spanner", say: "You’re an engineer!" }, { cue: "hug a classmate", say: "You’re my friend!" },
      { cue: "point to yourself and smile", say: "I’m … (your name)!" }, { cue: "tired face, yawn", say: "You’re tired!" }
    ],
    board: [
      { cat: "I am", qs: [["I ___ a student.", "am"], ["I am → short form", "I’m"], ["“Men shifokorman.” in English", "I’m a doctor."]] },
      { cat: "You are", qs: [["You ___ my friend.", "are"], ["You are → short form", "You’re"], ["“Siz o’qituvchisiz.” in English", "You’re a teacher."]] },
      { cat: "Jobs", qs: [["“haydovchi” in English", "driver"], ["“oshpaz” and “hamshira”", "cook · nurse"], ["“muhandis” and “quruvchi”", "engineer · builder"]] },
      { cat: "a or an?", qs: [["___ doctor", "a doctor"], ["___ engineer", "an engineer"], ["I’m ___ nurse. You’re ___ engineer.", "a · an"]] },
      { cat: "Fix it", qs: [["I teacher.", "I’m a teacher."], ["You is a cook.", "You are a cook."], ["I’m a engineer.", "I’m an engineer."]] },
      { cat: "Unit 1", qs: [["🔴 What colour is it?", "It’s red."], ["“Necha yoshdasiz?” in English", "How old are you?"], ["Spell: DOCTOR", "D-O-C-T-O-R"]] }
    ],
    wheel: [
      { name: "Me", tasks: ["Say: I’m + your name.", "Say your age: I’m …", "Say: I’m a student.", "Say 2 sentences about you."] },
      { name: "You", tasks: ["Point to a friend: You’re my friend!", "Point to the teacher: You’re a …!", "Say to a classmate: You’re … (age)", "Say 2 sentences with You’re."] },
      { name: "Jobs", tasks: ["Say 3 jobs. (3 ta kasb)", "Say the job: shifokor.", "Say the job: haydovchi.", "Say 5 jobs fast!"] },
      { name: "a or an?", tasks: ["a or an: engineer?", "a or an: teacher?", "Say: I’m an engineer.", "Say: a doctor, a nurse, an engineer."] },
      { name: "Spell it", tasks: ["Spell: COOK.", "Spell: NURSE.", "Spell: DOCTOR.", "Spell your name."] },
      { name: "Mime", tasks: ["Mime a job. Team says: You’re a …!", "Mime a driver.", "Mime a cook.", "Mime a farmer."] }
    ],
    build: [
      { w: ["I", "am", "a", "student"], e: "." }, { w: ["You", "are", "my", "friend"], e: "." },
      { w: ["I’m", "an", "engineer"], e: "." }, { w: ["You’re", "a", "good", "cook"], e: "!" },
      { w: ["I", "am", "fifteen"], e: "." }, { w: ["You", "are", "a", "doctor"], e: "." },
      { w: ["Hello,", "I’m", "Bobur"], e: "!" }, { w: ["I’m", "a", "driver", "in", "Tashkent"], e: "." }
    ],
    auction: [
      { s: "I am a teacher.", ok: true },
      { s: "You is my friend.", ok: false, fix: "You are my friend." },
      { s: "I’m an engineer.", ok: true },
      { s: "I am doctor.", ok: false, fix: "I am a doctor." },
      { s: "You’re a good cook!", ok: true },
      { s: "I are a student.", ok: false, fix: "I am a student." },
      { s: "You’re a nurse.", ok: true },
      { s: "I farmer.", ok: false, fix: "I’m a farmer." },
      { s: "I’m fourteen.", ok: true },
      { s: "i am Lola.", ok: false, fix: "I am Lola." }
    ]
  }
};
