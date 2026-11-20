/* Beginner · Lesson 29 · How often?
   Teaches: how often we do things: always, usually, sometimes, never (100% · 80% · 50% · 0%).
   The word goes before the verb (I always drink tea), after am / is / are (She is never late);
   never needs no don’t; How often do you…? → Every day. Uzbek: doim, odatda, ba’zan, hech qachon.
   Recycles: present simple I / you / we / they (lesson 25), he / she + -s (26), Do you…? Does she…? (27),
   daily routine and at seven o’clock (28), days (23), food and drink (22).
   New words: always, usually, sometimes, never, How often?, every day, every morning, every evening,
   every week, every Sunday, late.
   Built for Thu 25 Feb 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b29",
  n: 29,
  title: "How often?",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 29", title: "How <span class='cy'>often?</span>", lead: "always, usually, sometimes, never · Qanchalik tez-tez?", chips: [["Men doim choy ichaman.", "peach"], ["U hech qachon kech qolmaydi.", "mint"], ["Qanchalik tez-tez palov yeysiz?", "skyb"]] },
    { t: "goals", items: [
      ["Say how often I do things", "I usually get up at seven.", "Men odatda soat yettida turaman."],
      ["Put the word in the right place", "She is never late.", "U hech qachon kech qolmaydi."],
      ["Ask and answer “How often?”", "How often do you eat plov? Every Friday.", "Qanchalik tez-tez palov yeysiz? Har juma."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: my day", sub: "Lesson 28! Pick a card. Say: “I get up at seven o’clock.”",
      cards: [{ t: "get up", uz: "o’rnidan turmoq" }, { t: "have breakfast", uz: "nonushta qilmoq" }, { t: "go to school / work", uz: "maktabga / ishga bormoq" }, { t: "have lunch", uz: "tushlik qilmoq" }, { t: "come home", uz: "uyga kelmoq" }, { t: "go to bed", uz: "uxlashga yotmoq" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "How often? Four words", menu: "New words: always, usually…", items: [
      ["I <span class='ca'>always</span> drink tea.", "always = doim, har doim (100%)"],
      ["I <span class='ca'>usually</span> get up at seven.", "usually = odatda (80%)"],
      ["I <span class='ca'>sometimes</span> play football.", "sometimes = ba’zan (50%)"],
      ["I <span class='ca'>never</span> drink coffee.", "never = hech qachon (0%)"],
      ["<span class='cw'>How often</span> do you drink tea?", "How often? = Qanchalik tez-tez?"],
      ["Bobur is always <span class='ca'>late</span>!", "late = kech qolgan, kechikkan"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Every day, every week", menu: "New words: every day…", items: [
      ["I drink tea <span class='ca'>every day</span>.", "every day = har kuni"],
      ["I have breakfast <span class='ca'>every morning</span>.", "every morning = har kuni ertalab"],
      ["We watch TV <span class='ca'>every evening</span>.", "every evening = har kuni kechqurun"],
      ["We go to the bazaar <span class='ca'>every week</span>.", "every week = har hafta"],
      ["Aziz plays football <span class='ca'>every Sunday</span>.", "every Sunday = har yakshanba"],
      ["My mother cooks plov <span class='ca'>every Friday</span>.", "every Friday = har juma"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "From 100% to 0%", items: [
      { bg: "peach", w: "🍵", label: "always = doim · 100%", en: "I always drink tea.", uz: "Men doim choy ichaman." },
      { bg: "mint", w: "🍳", label: "usually = odatda · 80%", en: "I usually have breakfast at seven.", uz: "Men odatda soat yettida nonushta qilaman." },
      { bg: "skyb", w: "⚽", label: "sometimes = ba’zan · 50%", en: "I sometimes play football.", uz: "Men ba’zan futbol o’ynayman." },
      { bg: "butter", w: "☕", label: "never = hech qachon · 0%", en: "I never drink coffee.", uz: "Men hech qachon qahva ichmayman." } ] },

    /* ---------- THE RULE ---------- */
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "Who + always / usually / never + verb", rows: [
      { chips: [["I", "skyb"], ["always", "peach"], ["drink", "mint"], ["tea.", "butter"]], uz: "Men doim choy ichaman." },
      { chips: [["She", "skyb"], ["usually", "peach"], ["gets up", "mint"], ["at six.", "butter"]], uz: "U odatda soat oltida turadi." },
      { chips: [["We", "skyb"], ["never", "peach"], ["watch", "mint"], ["TV.", "butter"]], uz: "Biz hech qachon televizor ko’rmaymiz." } ],
      notes: ["So’z fe’ldan OLDIN keladi: always drink", "he / she: fe’l baribir -s oladi: usually gets", "never = hech qachon: don’t kerak emas!"] },
    { t: "examples", eb: "I, you, we, they", title: "Examples: I, you, we, they", items: [
      ["I <span class='ca'>always</span> drink green tea.", "Men doim ko’k choy ichaman."],
      ["You <span class='ca'>usually</span> get up at seven.", "Siz odatda soat yettida turasiz."],
      ["We <span class='ca'>sometimes</span> have lunch at school.", "Biz ba’zan maktabda tushlik qilamiz."],
      ["They <span class='ca'>never</span> watch TV in the morning.", "Ular hech qachon ertalab televizor ko’rishmaydi."],
      ["My parents <span class='ca'>usually</span> have dinner at eight.", "Ota-onam odatda soat sakkizda kechki ovqat qilishadi."],
      ["I <span class='ca'>never</span> drink coffee.", "Men hech qachon qahva ichmayman."] ] },
    { t: "examples", eb: "He, she, it", title: "He, she: don’t forget -s!", items: [
      ["Aziz <span class='ca'>always</span> get<b>s</b> up at six.", "Aziz doim soat oltida turadi."],
      ["Madina <span class='ca'>usually</span> ha<b>s</b> breakfast at home.", "Madina odatda uyda nonushta qiladi."],
      ["My father <span class='ca'>sometimes</span> cook<b>s</b> plov.", "Otam ba’zan palov pishiradi."],
      ["Lola <span class='ca'>never</span> drink<b>s</b> coffee.", "Lola hech qachon qahva ichmaydi."],
      ["My mother <span class='ca'>usually</span> goe<b>s</b> to work at eight.", "Onam odatda soat sakkizda ishga boradi."],
      ["The cat <span class='ca'>always</span> sleep<b>s</b> on the sofa.", "Mushuk doim divanda uxlaydi."] ] },
    { t: "gaps", title: "Which word? Look at the %", sub: "always 100% · usually 80% · sometimes 50% · never 0%. Tap to check.", w: 250, fs: 36, rows: [
      ["I ___ drink tea. (100%)", "always"], ["Lola ___ drinks coffee. (0%)", "never"], ["We ___ have lunch at home. (80%)", "usually"],
      ["He ___ plays football. (50%)", "sometimes"], ["My father ___ watches TV. (80%)", "usually"], ["Bobur ___ has breakfast. (0%)", "never"] ] },
    { t: "gaps", title: "He, she: add -s!", sub: "Open the brackets. Tap to check.", w: 220, fs: 36, rows: [
      ["Madina always ___ (get up) at six.", "gets up"], ["My brother never ___ (drink) coffee.", "drinks"], ["We usually ___ (have) lunch at home.", "have"],
      ["Lola sometimes ___ (watch) TV.", "watches"], ["Dad usually ___ (go) to work at eight.", "goes"], ["Aziz always ___ (have) breakfast.", "has"] ] },

    /* ---------- AM / IS / ARE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "Verb or am / is / are?", menu: "Verb or am / is / are?", cols: [
      { bg: "mint", label: "Verb → BEFORE", lc: "g", fs: 38, lines: ["I <span class='ca'>always</span> drink tea.", "She <span class='ca'>never</span> drinks coffee."], uz: "Oddiy fe’l (drink, get up, play): so’z fe’ldan OLDIN keladi." },
      { bg: "skyb", label: "am / is / are → AFTER", lc: "b", fs: 38, lines: ["I am <span class='ca'>always</span> tired.", "She is <span class='ca'>never</span> late."], uz: "am / is / are bo’lsa: so’z ulardan KEYIN keladi." } ],
      notes: ["I always drink = Men doim ichaman", "I am always tired = Men doim charchagan bo’laman"] },
    { t: "gaps", title: "Put the word in the right place", sub: "Say the full sentence. Tap to check.", w: 250, fs: 32, rows: [
      ["I drink tea. (always) → I ___ tea.", "always drink"], ["She is late. (never) → She ___ late.", "is never"], ["We have lunch at one. (usually) → We ___ lunch at one.", "usually have"],
      ["He plays football. (sometimes) → He ___ football.", "sometimes plays"], ["I am tired. (always) → I ___ tired.", "am always"], ["Aziz goes to bed at ten. (never) → Aziz ___ to bed at ten.", "never goes"] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "cols", eb: "Questions · So’roq", title: "How often do you…?", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 34, lines: ["<span class='cw'>How often</span> do you drink tea?", "<span class='cw'>How often</span> does she cook plov?"], uz: "Qanchalik tez-tez choy ichasiz? · U qanchalik tez-tez palov pishiradi?" },
      { bg: "mint", label: "Short answer", lc: "g", fs: 34, lines: ["Every day.", "Every week.", "Sometimes.", "Never!"], uz: "Har kuni. · Har hafta. · Ba’zan. · Hech qachon!" },
      { bg: "peach", label: "Long answer", lc: "r", fs: 34, lines: ["I <span class='ca'>always</span> drink tea.", "She cooks plov every Friday."], uz: "Men doim choy ichaman. · U har juma palov pishiradi." } ],
      notes: ["How often + do / does + who + verb? (lesson 27: Do you…? Does she…?)", "he / she → does: How often does she cook?"] },
    { t: "examples", eb: "Ask and answer · So’rang va javob bering", title: "How often…? Every…", menu: "How often…? questions", items: [
      ["<span class='cw'>How often</span> do you eat plov? · Every Friday.", "Qanchalik tez-tez palov yeysiz? · Har juma."],
      ["<span class='cw'>How often</span> do you drink tea? · Every day.", "Qanchalik tez-tez choy ichasiz? · Har kuni."],
      ["<span class='cw'>How often</span> does Aziz play football? · Every Sunday.", "Aziz qanchalik tez-tez futbol o’ynaydi? · Har yakshanba."],
      ["<span class='cw'>How often</span> do you go to the bazaar? · Every week.", "Qanchalik tez-tez bozorga borasiz? · Har hafta."],
      ["<span class='cw'>How often</span> does Lola watch TV? · Sometimes.", "Lola qanchalik tez-tez televizor ko’radi? · Ba’zan."],
      ["<span class='cw'>How often</span> do you drink coffee? · Never!", "Qanchalik tez-tez qahva ichasiz? · Hech qachon!"] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Common mistakes", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 34, lines: ["I <span class='cn'>drink always</span> tea.", "She <span class='cn'>never is</span> late.", "I <span class='cn'>don’t never</span> drink coffee.", "He usually <span class='cn'>drink</span> tea."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 34, lines: ["I <span class='ca'>always drink</span> tea.", "She <span class='ca'>is never</span> late.", "I <span class='ca'>never drink</span> coffee.", "He usually <span class='ca'>drinks</span> tea."] } ],
      notes: ["Fe’l: so’z fe’ldan oldin · am / is / are: so’z ulardan keyin", "O’zbekcha: hech qachon ichMAYman · Inglizcha: never drink (don’t yo’q!)", "he / she: baribir -s"] },

    /* ---------- PRACTICE ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men doim choy ichaman.", "I always drink tea."],
      ["Lola odatda soat yettida turadi.", "Lola usually gets up at seven."],
      ["Biz ba’zan palov pishiramiz.", "We sometimes cook plov."],
      ["Otam hech qachon qahva ichmaydi.", "My father never drinks coffee."],
      ["Men hech qachon kech qolmayman.", "I am never late."],
      ["Qanchalik tez-tez televizor ko’rasiz?", "How often do you watch TV?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I drink always tea.", "I always drink tea."],
      ["She never is late.", "She is never late."],
      ["He usually get up at six.", "He usually gets up at six."],
      ["I don’t never watch TV.", "I never watch TV."],
      ["How often you play football?", "How often do you play football?"] ] },
    { t: "spot", bg: "sky", title: "About me", sub: "Pick a card. Finish the sentence about you. Example: “I always drink tea.”", size: 52,
      cards: ["I always…", "I usually…", "I sometimes…", "I never…", "Every Sunday I…", "I am always…"] },
    { t: "spot", bg: "yel", title: "Ask a friend: how often?", sub: "Pairs. A: “How often do you…?” B: “Every day.” / “I sometimes…” / “Never!” Then change.", size: 44,
      cards: [{ t: "eat plov", uz: "palov yemoq" }, { t: "drink tea", uz: "choy ichmoq" }, { t: "watch TV", uz: "televizor ko’rmoq" }, { t: "play football", uz: "futbol o’ynamoq" }, { t: "go to the bazaar", uz: "bozorga bormoq" }, { t: "drink coffee", uz: "qahva ichmoq" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say always, usually, sometimes, never", "put the word before the verb: I always drink tea", "put it after am / is / are: She is never late", "say never with no don’t: I never drink coffee", "ask “How often do you…?” and answer “Every day.”", "use every day, every week, every Sunday"] },
    { t: "bye", chips: [["I always…", "peach"], ["I never…", "mint"], ["How often do you…?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "drink tea · ALWAYS (two thumbs up)", say: "You always drink tea!" },
      { cue: "get up at seven · USUALLY (show 7 fingers)", say: "You usually get up at seven!" },
      { cue: "play football · SOMETIMES (so-so hand)", say: "You sometimes play football!" },
      { cue: "drink coffee · NEVER (shake your head)", say: "You never drink coffee!" },
      { cue: "go to bed at ten · USUALLY", say: "You usually go to bed at ten!" },
      { cue: "cook plov · SOMETIMES", say: "You sometimes cook plov!" },
      { cue: "watch TV in the evening · ALWAYS", say: "You always watch TV in the evening!" },
      { cue: "have breakfast at home · USUALLY", say: "You usually have breakfast at home!" },
      { cue: "read a book · SOMETIMES", say: "You sometimes read a book!" },
      { cue: "sleep on the sofa · NEVER", say: "You never sleep on the sofa!" },
      { cue: "do homework · ALWAYS", say: "You always do your homework!" },
      { cue: "late for class · NEVER (look at your watch, smile)", say: "You are never late!" }
    ],
    board: [
      { cat: "The scale", qs: [["100% = ?", "always"], ["0% = ?", "never"], ["Put in order: never, always, sometimes, usually", "always · usually · sometimes · never"]] },
      { cat: "In English", qs: [["“doim” in English", "always"], ["“odatda” and “ba’zan”", "usually · sometimes"], ["“hech qachon” and “har kuni”", "never · every day"]] },
      { cat: "Where?", qs: [["Put in “always”: I drink tea.", "I always drink tea."], ["Put in “never”: She is late.", "She is never late."], ["Put in “usually”: He gets up at six.", "He usually gets up at six."]] },
      { cat: "He, she: -s", qs: [["Lola always ___ (drink) tea.", "drinks"], ["My father never ___ (watch) TV.", "watches"], ["Aziz usually ___ (have) breakfast at seven.", "has"]] },
      { cat: "How often?", qs: [["Ask: you / drink tea", "How often do you drink tea?"], ["Ask: she / cook plov", "How often does she cook plov?"], ["Answer: How often do you eat plov?", "Every … / I usually … (any true)"]] },
      { cat: "Fix it", qs: [["I drink always tea.", "I always drink tea."], ["I don’t never drink coffee.", "I never drink coffee."], ["He usually get up at six.", "He usually gets up at six."]] }
    ],
    wheel: [
      { name: "Me", tasks: ["Say: “I always…”", "Say: “I never…”", "Say: “I usually get up at…”", "Say: “I sometimes…”"] },
      { name: "Family", tasks: ["Say what your mother always does.", "Say what your father never does.", "Say: “My brother / sister usually…”", "Say who usually cooks plov in your home."] },
      { name: "Ask", tasks: ["Ask a classmate: “How often do you drink tea?”", "Ask the teacher: “How often do you…?”", "Ask a classmate: “Do you always…?”", "Ask: “How often does your mother…?”"] },
      { name: "Every…", tasks: ["Say one thing you do every day.", "Say one thing you do every week.", "Say one thing you do every Sunday.", "Say one thing you do every evening."] },
      { name: "am / is / are", tasks: ["Say: “I am always…”", "Say: “I am never late.” or “I am sometimes late.”", "Say: “My teacher is always…”", "Say: “My friend is never…”"] },
      { name: "Food", tasks: ["How often do you eat plov? Answer.", "Say: “I never eat / drink…”", "Say: “I always drink… in the morning.”", "Say: “For breakfast I usually eat…”"] }
    ],
    build: [
      { w: ["I","always","drink","tea"], e: "." }, { w: ["She","is","never","late"], e: "." },
      { w: ["He","usually","gets","up","at","six"], e: "." }, { w: ["We","sometimes","cook","plov"], e: "." },
      { w: ["How","often","do","you","watch","TV"], e: "?" }, { w: ["I","never","drink","coffee"], e: "." },
      { w: ["Lola","always","has","breakfast"], e: "." }, { w: ["I","am","always","tired"], e: "." }
    ],
    auction: [
      { s: "I always drink green tea.", ok: true },
      { s: "She drinks always coffee.", ok: false, fix: "She always drinks coffee." },
      { s: "My father is never late.", ok: true },
      { s: "He never is tired.", ok: false, fix: "He is never tired." },
      { s: "How often do you play football?", ok: true },
      { s: "I don’t never watch TV.", ok: false, fix: "I never watch TV." },
      { s: "Lola usually gets up at seven.", ok: true },
      { s: "Aziz sometimes play football.", ok: false, fix: "Aziz sometimes plays football." },
      { s: "We sometimes have lunch at school.", ok: true },
      { s: "How often you eat plov?", ok: false, fix: "How often do you eat plov?" }
    ]
  }
};
