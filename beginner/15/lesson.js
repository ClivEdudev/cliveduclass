/* Beginner · Lesson 15 · His, her and ’s
   Teaches: whose things? my, your (lesson 11) + his, her, our, their; name + ’s (Ali’s bag);
   Whose … is this? It’s Lola’s … · his = boy / man, her = girl / woman (Uzbek “uning” = both).
   New words: cat, dog, ball, hat, umbrella, laptop, house, whose.
   Uses only lessons 1–14: to be, a / an, colours, plurals, questions, family, have / has, this / that / these / those.
   Built for Thursday 7 January 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b15",
  n: 15,
  title: "His, her and ’s",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 15", title: "His, her <span class='cy'>and ’s</span>", lead: "Whose is it? · Kimniki?", chips: [["Uning sumkasi.", "peach"], ["Alining telefoni.", "mint"], ["Bu kimning kitobi?", "skyb"]] },
    { t: "goals", items: [
      ["Say his and her", "This is Aziz. His bag is red.", "Bu Aziz. Uning sumkasi qizil."],
      ["Use ’s with a name", "This is Lola’s phone.", "Bu Lolaning telefoni."],
      ["Ask “Whose…?”", "Whose bag is this?", "Bu kimning sumkasi?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: this, that, these, those", sub: "Look at the card. Say: This is… / That is… / These are… / Those are… · 👇 yaqin, 👉 uzoq", size: 64,
      cards: [{ t: "👇 📕", uz: "yaqin · bitta" }, { t: "👉 🚪", uz: "uzoq · bitta" }, { t: "👇 ✏️✏️", uz: "yaqin · ko’p" },
              { t: "👉 🐦🐦", uz: "uzoq · ko’p" }, { t: "👇 🔑", uz: "yaqin · bitta" }, { t: "👉 🌳🌳", uz: "uzoq · ko’p" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Things and pets", menu: "New words", items: [
      ["It’s a <span class='ca'>cat</span>.", "cat = mushuk"],
      ["It’s a <span class='ca'>dog</span>.", "dog = it"],
      ["It’s a <span class='ca'>ball</span>.", "ball = to’p"],
      ["It’s a <span class='ca'>hat</span>.", "hat = shapka, bosh kiyim"],
      ["It’s an <span class='ca'>umbrella</span>.", "umbrella = soyabon"],
      ["It’s a <span class='ca'>laptop</span>.", "laptop = noutbuk"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "My cat, my house", items: [
      { bg: "peach", w: "🐱", label: "cat = mushuk", en: "This is my cat.", uz: "Bu mening mushugim." },
      { bg: "mint", w: "🐶", label: "dog = it", en: "That is my dog.", uz: "Anavi mening itim." },
      { bg: "skyb", w: "☂️", label: "umbrella = soyabon", en: "My umbrella is blue.", uz: "Mening soyabonim ko’k." },
      { bg: "butter", w: "🏠", label: "house = uy", en: "That is my house.", uz: "Anavi mening uyim." } ] },

    /* ---------- THE RULE ---------- */
    { t: "table", eb: "The rule · Qoida", title: "Who? → Whose? · Kim? → Kimning?", head: ["Who · Kim", "Whose · Kimning", "Example", "Uzbek"], rows: [
      ["I", "<b class='ca'>my</b>", "my bag", "mening sumkam"],
      ["you", "<b class='ca'>your</b>", "your bag", "sizning sumkangiz"],
      ["he 👦", "<b class='ca'>his</b>", "his bag", "uning sumkasi"],
      ["she 👧", "<b class='ca'>her</b>", "her bag", "uning sumkasi"],
      ["we", "<b class='ca'>our</b>", "our bag", "bizning sumkamiz"],
      ["they", "<b class='ca'>their</b>", "their bag", "ularning sumkasi"] ],
      notes: ["my, your: 11-dars", "his, her, our, their: yangi!", "Ko’plikda ham o’zgarmaydi: their bags"] },
    { t: "cols", eb: "The rule · Qoida", title: "Uning = his or her?", menu: "His or her?", cols: [
      { bg: "skyb", label: "Boy / man 👦 → his", lc: "b", fs: 44, lines: ["This is Aziz.", "<span class='ca'>His</span> bag is red."], uz: "Erkak yoki o’g’il bola → his. Bu Aziz. Uning sumkasi qizil." },
      { bg: "peach", label: "Girl / woman 👧 → her", lc: "r", fs: 44, lines: ["This is Madina.", "<span class='ca'>Her</span> bag is blue."], uz: "Ayol yoki qiz bola → her. Bu Madina. Uning sumkasi ko’k." } ],
      notes: ["O’zbekchada ikkalasi ham “uning”!", "Inglizchada: his ≠ her", "Kimniki? Egasiga qarang: o’g’il → his, qiz → her"] },
    { t: "examples", eb: "his · her · our · their", title: "Examples", items: [
      ["This is Bobur. <span class='ca'>His</span> cat is black.", "Bu Bobur. Uning mushugi qora."],
      ["This is Dilnoza. <span class='ca'>Her</span> hat is red.", "Bu Dilnoza. Uning shapkasi qizil."],
      ["My father is a doctor. <span class='ca'>His</span> name is Aziz.", "Otam shifokor. Uning ismi Aziz."],
      ["My sister is 12. <span class='ca'>Her</span> name is Lola.", "Singlim 12 yoshda. Uning ismi Lola."],
      ["We are students. <span class='ca'>Our</span> teacher is Clive.", "Biz o’quvchimiz. O’qituvchimiz — Clive."],
      ["They have a dog. <span class='ca'>Their</span> dog is white.", "Ularning iti bor. Ularning iti oq."] ] },
    { t: "gaps", title: "His or her?", sub: "Boy → his. Girl → her. Tap to check.", w: 160, fs: 34, rows: [
      ["Aziz is my friend. ___ cat is white.", "His"], ["Lola is 14. ___ bag is red.", "Her"],
      ["My mother is a doctor. ___ name is Dilnoza.", "Her"], ["Bobur has a dog. ___ dog is black.", "His"],
      ["Madina has a laptop. ___ laptop is white.", "Her"], ["My father has a hat. ___ hat is black.", "His"] ] },
    { t: "gaps", title: "Our or their?", sub: "we → our. they → their. Tap to check.", w: 160, fs: 34, rows: [
      ["We are students. ___ teacher is Clive.", "Our"], ["They have a cat. ___ cat is white.", "Their"],
      ["We have a dog. ___ dog is black.", "Our"], ["Ali and Vali have a ball. ___ ball is red.", "Their"],
      ["We have a laptop. ___ laptop is black.", "Our"], ["My brothers have a car. ___ car is blue.", "Their"] ] },

    /* ---------- ’S ---------- */
    { t: "formula", bg: "ink", eb: "Name + ’s · Ism + -ning", title: "Ali’s bag = Alining sumkasi", menu: "Name + ’s", rows: [
      { chips: [["Ali", "skyb"], ["’s", "peach"], ["bag", "mint"]], uz: "Alining sumkasi" },
      { chips: [["Lola", "skyb"], ["’s", "peach"], ["phone", "mint"]], uz: "Lolaning telefoni" },
      { chips: [["my mother", "skyb"], ["’s", "peach"], ["name", "mint"]], uz: "onamning ismi" } ],
      notes: ["’s = -ning", "Ali’s bag = his bag", "Lola’s phone = her phone"] },
    { t: "examples", eb: "Name + ’s", title: "Whose is it? · Kimniki?", items: [
      ["This is <span class='ca'>Ali’s</span> bag.", "Bu Alining sumkasi."],
      ["<span class='ca'>Madina’s</span> phone is white.", "Madinaning telefoni oq."],
      ["<span class='ca'>Bobur’s</span> dog is black.", "Boburning iti qora."],
      ["That is <span class='ca'>my brother’s</span> laptop.", "Anavi akamning noutbuki."],
      ["<span class='ca'>Lola’s</span> mother is a teacher.", "Lolaning onasi o’qituvchi."],
      ["<span class='ca'>Aziz’s</span> house is in Tashkent.", "Azizning uyi Toshkentda."] ] },
    { t: "gaps", title: "Say it with ’s", sub: "Uzbek → English. Tap to check.", w: 330, fs: 38, rows: [
      ["Alining sumkasi → ___", "Ali’s bag"], ["Lolaning telefoni → ___", "Lola’s phone"],
      ["Boburning mushugi → ___", "Bobur’s cat"], ["Azizning shapkasi → ___", "Aziz’s hat"],
      ["Madinaning uyi → ___", "Madina’s house"], ["onamning ismi → ___", "my mother’s name"] ] },

    /* ---------- WHOSE ---------- */
    { t: "cols", eb: "Questions · Savollar", title: "Whose…? · Kimning…?", menu: "Whose?", cols: [
      { bg: "skyb", label: "Question · Savol", lc: "b", fs: 40, lines: ["<span class='cw'>Whose</span> bag is this?", "<span class='cw'>Whose</span> cat is that?"], uz: "Bu kimning sumkasi? · Anavi kimning mushugi?" },
      { bg: "mint", label: "Answer · Javob", lc: "g", fs: 40, lines: ["It’s Ali’s bag.", "It’s Lola’s cat."], uz: "Bu Alining sumkasi. · Bu Lolaning mushugi." },
      { bg: "butter", label: "Short · Qisqa", fs: 40, lines: ["Ali’s.", "Lola’s."], uz: "Alining. · Lolaning." } ],
      notes: ["whose = kimning", "Whose + narsa + is this / that?", "who = kim · whose = kimning"] },
    { t: "examples", eb: "Ask and answer", title: "Whose umbrella is this?", items: [
      ["A: <span class='cw'>Whose</span> umbrella is this?", "A: Bu kimning soyaboni?"],
      ["B: It’s Madina’s umbrella.", "B: Bu Madinaning soyaboni."],
      ["A: <span class='cw'>Whose</span> ball is that?", "A: Anavi kimning to’pi?"],
      ["B: It’s my brother’s ball.", "B: Bu ukamning to’pi."],
      ["A: Is this your hat?", "A: Bu sizning shapkangizmi?"],
      ["B: No, it isn’t. It’s Bobur’s hat.", "B: Yo’q. Bu Boburning shapkasi."] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "His or her? ’s! Whose!", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 34, lines: ["Lola is my sister. <span class='cn'>His</span> bag is red.", "This is <span class='cn'>Ali bag</span>.", "<span class='cn'>Who</span> bag is this?"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 34, lines: ["Lola is my sister. <span class='ca'>Her</span> bag is red.", "This is <span class='ca'>Ali’s</span> bag.", "<span class='ca'>Whose</span> bag is this?"] },
      { bg: "butter", label: "Why? · Nega?", fs: 34, lines: ["Lola — qiz → her", "ism + ’s", "kimning = whose"], uz: "O’zbekchada “uning” bitta so’z. Inglizchada qiz bo’lsa her, o’g’il bo’lsa his!" } ] },

    /* ---------- QUIZ ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", fs: 36, rows: [
      ["Bu Alining mushugi.", "This is Ali’s cat."],
      ["Lola — singlim. Uning sumkasi qizil.", "Lola is my sister. Her bag is red."],
      ["Bizning o’qituvchimiz — Clive.", "Our teacher is Clive."],
      ["Bu kimning telefoni?", "Whose phone is this?"],
      ["Ularning uyi Samarqandda.", "Their house is in Samarkand."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", fs: 36, rows: [
      ["Madina is my friend. His cat is white.", "Madina is my friend. Her cat is white."],
      ["This is Bobur hat.", "This is Bobur’s hat."],
      ["Who bag is this?", "Whose bag is this?"],
      ["We are students. Their teacher is Clive.", "We are students. Our teacher is Clive."] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "sky", title: "Whose is it?", sub: "The teacher takes a thing from a student. Class: “Whose pen is this?” → “It’s Aziz’s pen. His pen is blue.”", size: 48,
      cards: ["Whose pen is this?", "Whose bag is that?", "It’s …’s phone.", "His … is…", "Her … is…", "Their … are…"] },
    { t: "spot", bg: "yel", title: "Pairs: my family", sub: "Pairs. Tell your partner about your family. Then swap. · Oilangiz haqida ayting.", size: 40,
      cards: [{ t: "My mother’s name is…", uz: "Onamning ismi…" }, { t: "My father’s name is…", uz: "Otamning ismi…" },
              { t: "My brother has a… His … is…", uz: "Akam / ukam" }, { t: "My sister has a… Her … is…", uz: "Opam / singlim" },
              { t: "Our house is in…", uz: "Bizning uyimiz … da" }, { t: "My friend’s name is…", uz: "Do’stimning ismi…" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say his for a boy, her for a girl", "say our and their", "use ’s: Ali’s bag", "ask: Whose bag is this?", "answer: It’s Lola’s bag.", "say new words: cat, dog, umbrella…"] },
    { t: "bye", chips: [["His / Her…", "peach"], ["Ali’s bag", "mint"], ["Whose… is this?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "hold up a boy’s bag", say: "This is his bag." }, { cue: "hold up a girl’s pen", say: "This is her pen." },
      { cue: "point at Aziz’s phone (far)", say: "That is Aziz’s phone." }, { cue: "find a book, look around: not mine", say: "Whose book is this?" },
      { cue: "hug your cat", say: "This is my cat." }, { cue: "point at the teacher’s bag", say: "That is the teacher’s bag." },
      { cue: "two boys play with a ball", say: "This is their ball." }, { cue: "hold an umbrella over a girl", say: "This is her umbrella." },
      { cue: "put on a boy’s hat", say: "This is his hat." }, { cue: "you and your partner walk a dog", say: "This is our dog." },
      { cue: "open a girl’s laptop", say: "This is her laptop." }, { cue: "find a key, show it to the class", say: "Whose key is this?" }
    ],
    board: [
      { cat: "His / Her", qs: [["Aziz → ___ bag", "his"], ["Lola → ___ cat", "her"], ["my mother → ___ name", "her"]] },
      { cat: "Our / Their", qs: [["we → ___ teacher", "our"], ["they → ___ house", "their"], ["Ali and Vali → ___ ball", "their"]] },
      { cat: "’s", qs: [["“Alining telefoni” in English", "Ali’s phone"], ["“Lolaning iti” in English", "Lola’s dog"], ["“onamning ismi” in English", "my mother’s name"]] },
      { cat: "Whose?", qs: [["“kimning” in English", "whose"], ["Ask about a bag.", "Whose bag is this?"], ["Answer: Whose hat is this? (Bobur)", "It’s Bobur’s hat."]] },
      { cat: "New words", qs: [["“mushuk” in English", "cat"], ["“soyabon” in English", "umbrella"], ["“it” and “to’p” in English", "dog · ball"]] },
      { cat: "Fix it", qs: [["Lola is here. His bag is red.", "Lola is here. Her bag is red."], ["This is Aziz phone.", "This is Aziz’s phone."], ["Who cat is this?", "Whose cat is this?"]] }
    ],
    wheel: [
      { name: "My", tasks: ["Say: “My name is…”", "Say: “My bag is…” (colour)", "Say: “My mother’s name is…”", "Show 2 things: “This is my…”"] },
      { name: "His", tasks: ["Point at a boy: “His name is…”", "Point at a boy: “His bag is…” (colour)", "Your father: “His name is…”", "A boy has a… “His … is…”"] },
      { name: "Her", tasks: ["Point at a girl: “Her name is…”", "Point at a girl: “Her bag is…” (colour)", "Your mother: “Her name is…”", "A girl has a… “Her … is…”"] },
      { name: "Our / Their", tasks: ["Say: “Our teacher is…”", "Say: “Our house is in…”", "Point at 2 classmates: “Their bags are…”", "Your parents: “Their names are…”"] },
      { name: "’s", tasks: ["Hold a classmate’s pen: “This is …’s pen.”", "Say: “My friend’s name is…”", "Say: “…’s bag is…” (colour)", "Say your brother’s or sister’s name with ’s."] },
      { name: "Whose?", tasks: ["Ask: “Whose pen is this?”", "Ask: “Whose bag is that?”", "Take a thing. Ask the class: “Whose…?”", "Answer: “It’s …’s phone.”"] }
    ],
    build: [
      { w: ["This", "is", "Ali’s", "bag"], e: "." }, { w: ["Her", "name", "is", "Lola"], e: "." },
      { w: ["His", "cat", "is", "black"], e: "." }, { w: ["Whose", "phone", "is", "this"], e: "?" },
      { w: ["Our", "teacher", "is", "Clive"], e: "." }, { w: ["Their", "house", "is", "in", "Samarkand"], e: "." },
      { w: ["It’s", "my", "sister’s", "hat"], e: "." }, { w: ["Whose", "umbrella", "is", "that"], e: "?" }
    ],
    auction: [
      { s: "This is Lola’s phone.", ok: true },
      { s: "Madina is my friend. His bag is red.", ok: false, fix: "Madina is my friend. Her bag is red." },
      { s: "Whose cat is this?", ok: true },
      { s: "This is Aziz bag.", ok: false, fix: "This is Aziz’s bag." },
      { s: "Our teacher is Clive.", ok: true },
      { s: "Who dog is that?", ok: false, fix: "Whose dog is that?" },
      { s: "My father’s name is Bobur.", ok: true },
      { s: "They have a car. Their car is white.", ok: true },
      { s: "Bobur is my brother. Her hat is black.", ok: false, fix: "Bobur is my brother. His hat is black." },
      { s: "We have a dog. Their dog is white.", ok: false, fix: "We have a dog. Our dog is white." }
    ]
  }
};
