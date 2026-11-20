/* Beginner · Lesson 12 · Unit 2 review
   Revises lessons 7–11 (Unit 2 · Me and you): I am / you are and jobs (7), he / she / it is and
   Where is he from? (8), we / they are and plurals (9), not and questions with to be (10),
   family words with my / your (11). No new grammar: games and speaking.
   Built for Mon 28 Dec 2026 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b12",
  n: 12,
  title: "Unit 2 review",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 12", title: "Unit 2<br><span class='cy'>Review</span>", lead: "I am · he is · we are · not · questions · my family",
      chips: [["Takrorlaymiz!", "peach"], ["O’ynaymiz!", "mint"], ["Men tayyorman!", "skyb"]] },
    { t: "examples", title: "In Unit 2 we learned", menu: "Unit 2: what we learned", items: [
      ["I<span class='ca'>’m</span> a student. You<span class='ca'>’re</span> my friend.", "Men talabaman. Sen mening do’stimsan. (Lesson 7)"],
      ["She <span class='ca'>is</span> from Samarkand.", "U Samarqanddan. (Lesson 8)"],
      ["We <span class='ca'>are</span> students. They <span class='ca'>are</span> doctors.", "Biz talabamiz. Ular shifokor. (Lesson 9)"],
      ["one book → two book<span class='ca'>s</span>", "bitta kitob → ikkita kitob (Lesson 9)"],
      ["I<span class='cn'>’m not</span> a teacher. <span class='cw'>Are</span> you a student?", "Men o’qituvchi emasman. Siz talabamisiz? (Lesson 10)"],
      ["This is <span class='ca'>my</span> mother. <span class='cw'>Who</span> is this?", "Bu mening onam. Bu kim? (Lesson 11)"] ] },
    { t: "table", eb: "To be · All together", title: "Am, is, are", menu: "Am, is, are: the table", head: ["Who", "to be", "Short form", "No · Inkor", "Uzbek"], rows: [
      ["I", "<b class='ca'>am</b>", "I’m", "I’m <span class='cn'>not</span>", "men"],
      ["you", "<b class='ca'>are</b>", "you’re", "you <span class='cn'>aren’t</span>", "siz / sen"],
      ["he / she / it", "<b class='ca'>is</b>", "he’s / she’s / it’s", "she <span class='cn'>isn’t</span>", "u"],
      ["we", "<b class='ca'>are</b>", "we’re", "we <span class='cn'>aren’t</span>", "biz"],
      ["they", "<b class='ca'>are</b>", "they’re", "they <span class='cn'>aren’t</span>", "ular"] ],
      notes: ["Question: Are you…? Is she…? (to be birinchi keladi)", "One → is · Many → are (bitta → is, ko’p → are)"] },
    { t: "spot", bg: "yel", title: "Warm-up: one sentence each", sub: "Pick a card. Say one true sentence about you.", size: 46,
      cards: [{ t: "I’m a…", uz: "Men … (kasb)" }, { t: "I’m from…", uz: "Men …dan" }, { t: "My friend is…", uz: "Do’stim…" },
              { t: "We are…", uz: "Biz…" }, { t: "I’m not…", uz: "Men … emasman" }, { t: "This is my…", uz: "Bu mening…" }] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "All lessons mixed. Tap to reveal.", w: 680, rows: [
      ["Men haydovchiman.", "I’m a driver."],
      ["U Buxorodan.", "He / She is from Bukhara."],
      ["Biz talabamiz.", "We are students."],
      ["Ular shifokor emas.", "They aren’t doctors."],
      ["Siz o’qituvchimisiz?", "Are you a teacher?"],
      ["Bu mening otam.", "This is my father."] ] },
    { t: "gaps", title: "Am, is or are?", sub: "One → is. Many → are. Tap to check.", w: 180, fs: 38, rows: [
      ["I ___ a student.", "am"], ["Madina ___ from Khiva.", "is"], ["We ___ friends.", "are"],
      ["My parents ___ doctors.", "are"], ["___ you from Tashkent?", "Are"], ["It ___ a red car.", "is"] ] },
    { t: "gaps", title: "Which word is missing?", sub: "All lessons mixed. Tap to check.", w: 220, fs: 36, rows: [
      ["one pen → two ___", "pens"], ["one bag → three ___", "bags"], ["___ is he from? — He’s from Turkey.", "Where"],
      ["___ is this? — This is my sister.", "Who"], ["This is ___ mother. (mening)", "my"], ["Is this ___ book? (sizning)", "your"] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: make it NO and a question", sub: "Say both. Tap to check.", fs: 40, rows: [
      ["He is a doctor.", "He isn’t a doctor. · Is he a doctor?"],
      ["You are tired.", "You aren’t tired. · Are you tired?"],
      ["They are from Russia.", "They aren’t from Russia. · Are they from Russia?"],
      ["She is a student.", "She isn’t a student. · Is she a student?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I is a teacher.", "I am a teacher."],
      ["She from Samarkand.", "She is from Samarkand."],
      ["They is students.", "They are students."],
      ["My brothers are student.", "My brothers are students."],
      ["This is me mother.", "This is my mother."] ] },
    { t: "spot", bg: "sky", title: "Who am I?", sub: "Pairs. A picks a card (secret!). B asks: “Are you a doctor? Are you from Bukhara?” A answers: “Yes, I am.” / “No, I’m not.”", size: 40,
      cards: [{ t: "a doctor from Samarkand", uz: "Samarqandlik shifokor" }, { t: "a teacher from Bukhara", uz: "Buxorolik o’qituvchi" }, { t: "a driver from Tashkent", uz: "Toshkentlik haydovchi" },
              { t: "a student from Khiva", uz: "Xivalik talaba" }, { t: "a doctor from Turkey", uz: "Turkiyalik shifokor" }, { t: "a teacher from England", uz: "Angliyalik o’qituvchi" }] },
    { t: "spot", bg: "yel", title: "My family and friends", sub: "Pick a card. Say 2 sentences. Example: “This is my brother. He is 15.”", size: 46,
      cards: [{ t: "my mother", uz: "onam" }, { t: "my father", uz: "otam" }, { t: "my brother", uz: "akam / ukam" },
              { t: "my sister", uz: "opam / singlim" }, { t: "my grandparents", uz: "bobo-buvim" }, { t: "my friend", uz: "do’stim" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "wheel", bg: "ink" },
    { t: "game", g: "board" },
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say I am, you are, he is…", "say where people are from", "make plurals: books, pens", "say no: I’m not, he isn’t", "ask “Are you…?” and answer", "talk about my family"] },
    { t: "bye", chips: [["I’m a student.", "peach"], ["She’s from Samarkand.", "mint"], ["This is my family.", "skyb"]] }
  ],
  games: {
    wheel: [
      { name: "Me", tasks: ["Say your name and job: “I’m…”", "Where are you from?", "How old are you?", "Say: “I’m not…”"] },
      { name: "Friends", tasks: ["Point at a classmate: “This is my friend…”", "Say where your friend is from.", "Say: “He is…” or “She is…”", "Say 2 things: “We are…”"] },
      { name: "Jobs", tasks: ["Say 4 jobs.", "Finish: “My father is a…”", "Ask: “Are you a doctor?”", "Answer: “Is your mother a teacher?”"] },
      { name: "Places", tasks: ["Say 3 cities in Uzbekistan.", "Say 3 countries.", "Ask: “Where are you from?”", "Finish: “My grandparents are from…”"] },
      { name: "One → two", tasks: ["one pen → two…", "one bag → five…", "one student → ten…", "one sister → three…"] },
      { name: "Family", tasks: ["Say 5 family words.", "Say: “This is my…”", "Ask: “Who is this?”", "Spell: mother."] }
    ],
    board: [
      { cat: "I am / you are", qs: [["I ___ a student.", "am"], ["Short form: you are", "you’re"], ["“Men shifokorman.” in English", "I’m a doctor."]] },
      { cat: "He / she / it", qs: [["Lola ___ from Bukhara.", "is"], ["Make a question: where / he / from", "Where is he from?"], ["“U Turkiyadan.” in English", "He / She is from Turkey."]] },
      { cat: "We / they · plurals", qs: [["one book → two ___", "books"], ["We ___ students.", "are"], ["Ali and Lola → we or they?", "they"]] },
      { cat: "Not", qs: [["Make it NO: I am tired.", "I’m not tired."], ["Make it NO: He is a driver.", "He isn’t a driver."], ["Make it NO: They are from Russia.", "They aren’t from Russia."]] },
      { cat: "Questions", qs: [["Make a question: You are a student.", "Are you a student?"], ["Short answer (yes): Are you OK?", "Yes, I am."], ["Short answer (no): Is she a teacher?", "No, she isn’t."]] },
      { cat: "My family", qs: [["“ota” in English", "father"], ["“Bu kim?” in English", "Who is this?"], ["“Bu sizning onangizmi?” in English", "Is this your mother?"]] }
    ],
    mime: [
      { cue: "drive a car", say: "You’re a driver!" }, { cue: "teach the class", say: "You’re a teacher!" },
      { cue: "listen to a heart", say: "You’re a doctor!" }, { cue: "write in a notebook, raise your hand", say: "You’re a student!" },
      { cue: "walk slowly with a stick", say: "You’re a grandfather!" }, { cue: "hold a baby in your arms", say: "You’re a mother! / You’re a father!" },
      { cue: "yawn, tired face", say: "You’re tired!" }, { cue: "two students shake hands and smile", say: "They are friends!" },
      { cue: "point at a classmate and smile", say: "This is my friend!" }, { cue: "show a family photo", say: "This is my family!" },
      { cue: "shake your head: no!", say: "No, I’m not!" }, { cue: "nod your head: yes!", say: "Yes, I am!" }
    ],
    build: [
      { w: ["I","am","a","teacher"], e: "." }, { w: ["Where","is","she","from"], e: "?" }, { w: ["We","are","from","Tashkent"], e: "." },
      { w: ["They","aren’t","doctors"], e: "." }, { w: ["Are","you","a","student"], e: "?" }, { w: ["He","isn’t","from","Russia"], e: "." },
      { w: ["This","is","my","sister"], e: "." }, { w: ["Is","this","your","bag"], e: "?" }
    ],
    auction: [
      { s: "I am a doctor.", ok: true },
      { s: "She are from Samarkand.", ok: false, fix: "She is from Samarkand." },
      { s: "We are students.", ok: true },
      { s: "They is my friends.", ok: false, fix: "They are my friends." },
      { s: "Are you from Tashkent?", ok: true },
      { s: "I amn’t tired.", ok: false, fix: "I’m not tired." },
      { s: "Is he a teacher? Yes, he is.", ok: true },
      { s: "My sisters are student.", ok: false, fix: "My sisters are students." },
      { s: "This is my father.", ok: true },
      { s: "Is this you brother?", ok: false, fix: "Is this your brother?" }
    ]
  }
};
