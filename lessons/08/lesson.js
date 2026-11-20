/* Lesson 8 · How often?
   Adverbs of frequency with the present simple from lesson 7: always, usually, often, sometimes, never.
   Before the verb (I always drink), after am / is / are (She is never late), never with no don’t,
   How often…? with once / twice / three times a week. Uzbek: doim, odatda, tez-tez, ba’zan, hech qachon.
   Built for Friday 20 November 2026. */
window.LESSON = {
  n: 8,
  title: "How often?",
  slides: [
    { t: "cover", title: "How <span class='cy'>often?</span>", lead: "Adverbs of frequency: always, usually, sometimes, never · Qanchalik tez-tez?", chips: [["Men doim choy ichaman.", "peach"], ["U hech qachon kech qolmaydi.", "mint"], ["Qanchalik tez-tez kinoga borasiz?", "skyb"]] },
    { t: "goals", items: [
      ["Say how often you do things", "I usually get up at seven.", "Men odatda soat yettida turaman."],
      ["Put always / never in the right place", "She is never late.", "U hech qachon kech qolmaydi."],
      ["Ask and answer “How often?”", "How often do you play football? Twice a week.", "Qanchalik tez-tez futbol o’ynaysiz? Haftada ikki marta."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: every day?", sub: "Pick a card. Say “Yes, I do it every day!” or “No, not every day.”",
      cards: [{ t: "drink tea", uz: "choy ichmoq" }, { t: "eat plov", uz: "palov yemoq" }, { t: "watch TV", uz: "televizor ko’rmoq" }, { t: "play football", uz: "futbol o’ynamoq" }, { t: "go to the bazaar", uz: "bozorga bormoq" }, { t: "speak English", uz: "inglizcha gapirmoq" }] },

    /* ---------- WHEN ---------- */
    { t: "cols", eb: "When do we use it?", title: "How often? From 100% to 0%", menu: "When do we use it?", cols: [
      { bg: "mint", label: "The words", lc: "g", fs: 34, lines: ["always · 100%", "usually · 80%", "often · 60%", "sometimes · 30%", "never · 0%"], uz: "doim · odatda · tez-tez · ba’zan · hech qachon" },
      { bg: "skyb", label: "Examples", lc: "b", fs: 34, lines: ["I <span class='ca'>always</span> drink tea.", "I <span class='ca'>sometimes</span> drink coffee.", "I <span class='ca'>never</span> drink cola."], uz: "Men doim choy ichaman. Ba’zan qahva ichaman. Hech qachon kola ichmayman." },
      { bg: "peach", label: "The question", lc: "r", fs: 34, lines: ["<span class='cw'>How often</span> do you drink tea?"], uz: "Qanchalik tez-tez choy ichasiz?" } ],
      notes: ["For habits: things we do again and again (lesson 7: present simple)", "They answer the question “How often?” = Qanchalik tez-tez?"] },
    { t: "formula", bg: "ink", eb: "The rule", title: "Who + always / usually / never + verb", rows: [
      { chips: [["I", "skyb"], ["always", "peach"], ["drink", "mint"], ["tea.", "butter"]], uz: "Men doim choy ichaman." },
      { chips: [["She", "skyb"], ["usually", "peach"], ["walks", "mint"], ["to work.", "butter"]], uz: "U odatda ishga piyoda boradi." },
      { chips: [["They", "skyb"], ["never", "peach"], ["drink", "mint"], ["coffee.", "butter"]], uz: "Ular hech qachon qahva ichishmaydi." } ],
      notes: ["The word goes BEFORE the verb", "he / she / it: the verb still has -s", "never = hech qachon: no don’t!"] },
    { t: "table", eb: "Verb or to be?", title: "Where does the word go?", head: ["How often", "With a verb", "With am / is / are", "Uzbek"], rows: [
      ["always", "I <b class='ca'>always</b> drink tea.", "I am <b class='ca'>always</b> busy.", "doim"],
      ["usually", "He <b class='ca'>usually</b> walks.", "He is <b class='ca'>usually</b> tired.", "odatda"],
      ["often", "We <b class='ca'>often</b> eat plov.", "We are <b class='ca'>often</b> hungry.", "tez-tez"],
      ["sometimes", "She <b class='ca'>sometimes</b> cooks.", "She is <b class='ca'>sometimes</b> late.", "ba’zan"],
      ["never", "They <b class='ca'>never</b> play chess.", "They are <b class='ca'>never</b> late.", "hech qachon"] ],
      notes: ["Verb (drink, walk, eat…) → the word goes BEFORE it", "am / is / are → the word goes AFTER it"] },
    { t: "examples", eb: "Positive", title: "Examples: how often?", items: [
      ["I <span class='ca'>always</span> have breakfast at home.", "Men doim uyda nonushta qilaman."],
      ["Madina <span class='ca'>usually</span> goes to work by metro.", "Madina odatda ishga metroda boradi."],
      ["We <span class='ca'>often</span> visit our grandparents.", "Biz tez-tez bobo-buvimiznikiga boramiz."],
      ["Bobur <span class='ca'>sometimes</span> plays chess with his father.", "Bobur ba’zan otasi bilan shaxmat o’ynaydi."],
      ["My grandma <span class='ca'>never</span> drinks coffee.", "Buvim hech qachon qahva ichmaydi."],
      ["Aziz is <span class='ca'>always</span> happy.", "Aziz doim xursand."] ] },
    { t: "gaps", title: "Which word? Look at the %", sub: "always · usually · often · sometimes · never. Tap to check.", w: 260, fs: 36, rows: [
      ["I ___ drink tea in the morning. (100%)", "always"], ["Lola ___ eats meat. (0%)", "never"], ["We ___ go to the park on Sundays. (80%)", "usually"],
      ["He ___ plays chess. (30%)", "sometimes"], ["My father is ___ busy. (100%)", "always"], ["They are ___ late. (0%)", "never"] ] },
    { t: "gaps", title: "He, she, it: don’t forget -s!", sub: "Open the brackets. Tap to check.", w: 240, fs: 36, rows: [
      ["Madina always ___ (get up) at six.", "gets up"], ["My brother never ___ (watch) TV.", "watches"], ["We usually ___ (go) to the bazaar on Saturdays.", "go"],
      ["Lola sometimes ___ (study) in the library.", "studies"], ["The bus often ___ (come) late.", "comes"], ["I always ___ (do) my homework.", "do"] ] },

    /* ---------- VOCABULARY ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Free time", menu: "New words: free time", items: [
      ["We often <span class='ca'>visit our grandparents</span>.", "visit = borib ko’rmoq, mehmonga bormoq"],
      ["I sometimes <span class='ca'>go to the cinema</span>.", "go to the cinema = kinoga bormoq"],
      ["Bobur usually <span class='ca'>plays chess</span> on Sundays.", "play chess = shaxmat o’ynamoq"],
      ["I always <span class='ca'>listen to music</span> on the bus.", "listen to music = musiqa tinglamoq"],
      ["My brother often <span class='ca'>goes to the gym</span>.", "go to the gym = sport zaliga bormoq"],
      ["Lola sometimes <span class='ca'>meets her friends</span> at a café.", "meet friends = do’stlar bilan uchrashmoq"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Busy, tired, late…", menu: "New words: busy, tired, late", items: [
      ["My father is always <span class='ca'>busy</span>.", "busy = band"],
      ["I am often <span class='ca'>tired</span> in the evening.", "tired = charchagan"],
      ["The children are always <span class='ca'>hungry</span> after school.", "hungry = och (qorni och)"],
      ["Aziz is never <span class='ca'>late</span> for class.", "late = kech, kechikkan (kech qolmoq)"],
      ["The bus is usually <span class='ca'>on time</span>.", "on time = o’z vaqtida"],
      ["Grandma is always <span class='ca'>happy</span> to see us.", "happy = xursand"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Good habits?", items: [
      { bg: "peach", w: "🍎", label: "eat fruit = meva yemoq", en: "I eat fruit every day.", uz: "Men har kuni meva yeyman." },
      { bg: "mint", w: "💧", label: "drink water = suv ichmoq", en: "Drink water often!", uz: "Tez-tez suv iching!" },
      { bg: "skyb", w: "🚶", label: "walk = piyoda yurmoq", en: "We usually walk after dinner.", uz: "Biz odatda kechki ovqatdan keyin piyoda yuramiz." },
      { bg: "butter", w: "🍔", label: "fast food = fastfud", en: "I sometimes eat fast food.", uz: "Men ba’zan fastfud yeyman." } ] },
    { t: "spot", bg: "sky", title: "Look at a classmate!", sub: "Pick a card. Say it about someone in this room. The class guesses who it is!", size: 46,
      cards: ["He is always…", "She usually wears…", "He often sits next to…", "She is never…", "He sometimes…", "She always…"] },

    /* ---------- NEGATIVE ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "don’t usually · doesn’t often · never", rows: [
      { chips: [["I", "skyb"], ["don’t usually", "peach"], ["drink", "mint"], ["coffee.", "butter"]], uz: "Men odatda qahva ichmayman." },
      { chips: [["She", "skyb"], ["doesn’t often", "peach"], ["eat", "mint"], ["meat.", "butter"]], uz: "U go’shtni tez-tez yemaydi." },
      { chips: [["He", "skyb"], ["never", "peach"], ["drinks", "mint"], ["cola.", "butter"]], uz: "U hech qachon kola ichmaydi." } ],
      notes: ["don’t / doesn’t + usually / often + verb", "never is already NO: no don’t!", "Uzbek: hech qachon ichMAYdi · English: never drinks"] },
    { t: "examples", eb: "Negative", title: "Examples: no sentences", items: [
      ["I <span class='cn'>don’t usually</span> watch TV.", "Men odatda televizor ko’rmayman."],
      ["She <span class='cn'>doesn’t often</span> go to the cinema.", "U kinoga tez-tez bormaydi."],
      ["We <span class='cn'>never</span> eat fast food.", "Biz hech qachon fastfud yemaymiz."],
      ["My father is <span class='cn'>never</span> late.", "Otam hech qachon kech qolmaydi."],
      ["Aziz <span class='cn'>doesn’t always</span> do his homework.", "Aziz uy vazifasini har doim ham qilmaydi."],
      ["I<span class='cn'>’m not always</span> hungry.", "Men har doim ham och emasman."] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "How often + do / does + who + verb?", rows: [
      { chips: [["How often", "butter"], ["do", "peach"], ["you", "skyb"], ["play football?", "mint"]], uz: "Qanchalik tez-tez futbol o’ynaysiz?" },
      { chips: [["Does", "peach"], ["she", "skyb"], ["usually", "butter"], ["walk?", "mint"]], uz: "U odatda piyoda yuradimi?" },
      { chips: [["Is", "peach"], ["he", "skyb"], ["always", "butter"], ["late?", "mint"]], uz: "U doim kech qoladimi?" } ],
      notes: ["Do / Does + who + usually + verb?", "Is / Are + who + always…?", "How often…? = Qanchalik tez-tez…?"] },
    { t: "cols", eb: "Answers · Javoblar", title: "Once a week. Yes, I do. Never!", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 36, lines: ["<span class='cw'>How often</span> do you swim?", "<span class='cw'>Do</span> you usually walk?", "<span class='cw'>Is</span> she often late?"] },
      { bg: "mint", label: "Yes", lc: "g", fs: 36, lines: ["Once a week.", "Yes, I <span class='ca'>do</span>.", "Yes, she <span class='ca'>is</span>."] },
      { bg: "peach", label: "No", lc: "r", fs: 36, lines: ["<span class='cn'>Never!</span>", "No, I <span class='cn'>don’t</span>.", "No, she <span class='cn'>isn’t</span>."] } ],
      notes: ["How often? → every day · once a week · twice a month · sometimes · never", "Do… → Yes, I do. · Is… → Yes, she is."] },
    { t: "examples", eb: "Wh- questions", title: "How often? What? When?", menu: "Wh- questions", items: [
      ["<span class='cw'>How often</span> do you eat plov?", "Qanchalik tez-tez palov yeysiz?"],
      ["<span class='cw'>How often</span> does she go to the gym?", "U qanchalik tez-tez sport zaliga boradi?"],
      ["<span class='cw'>What</span> do you usually do on Sundays?", "Yakshanba kunlari odatda nima qilasiz?"],
      ["<span class='cw'>Where</span> do you usually have lunch?", "Odatda qayerda tushlik qilasiz?"],
      ["<span class='cw'>When</span> do you usually get up?", "Odatda qachon turasiz?"],
      ["<span class='cw'>Who</span> usually cooks in your family?", "Oilangizda odatda kim ovqat pishiradi?"] ] },
    { t: "quad", eb: "Key phrases · Asosiy iboralar", title: "Once, twice, three times", items: [
      { bg: "peach", w: "<span style='font-size:58px;line-height:1.05;display:block'>once<br>a week</span>", label: "haftada bir marta", en: "I go to the bazaar once a week.", uz: "Men haftada bir marta bozorga boraman." },
      { bg: "mint", w: "<span style='font-size:58px;line-height:1.05;display:block'>twice<br>a month</span>", label: "oyda ikki marta", en: "We visit our grandparents twice a month.", uz: "Biz oyda ikki marta bobo-buvimiznikiga boramiz." },
      { bg: "skyb", w: "<span style='font-size:58px;line-height:1.05;display:block'>three times<br>a day</span>", label: "kuniga uch marta", en: "We eat three times a day.", uz: "Biz kuniga uch mahal ovqatlanamiz." },
      { bg: "butter", w: "<span style='font-size:58px;line-height:1.05;display:block'>every<br>year</span>", label: "har yili", en: "We go to Samarkand every year.", uz: "Biz har yili Samarqandga boramiz." } ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Common mistakes", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 34, lines: ["I <span class='cn'>go always</span> by bus.", "She <span class='cn'>never is</span> late.", "I <span class='cn'>don’t never</span> eat fish.", "He usually <span class='cn'>drink</span> tea."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 34, lines: ["I <span class='ca'>always go</span> by bus.", "She <span class='ca'>is never</span> late.", "I <span class='ca'>never eat</span> fish.", "He usually <span class='ca'>drinks</span> tea."] } ],
      notes: ["Verb: the word goes before it", "am / is / are: the word goes after it", "Uzbek: hech qachon yeMAYman · English: never eat (no don’t!)", "he / she / it: still -s"] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "Put the word in the right place", sub: "Say the full sentence. Tap to check.", w: 260, fs: 32, rows: [
      ["I drink coffee. (never) → I ___ coffee.", "never drink"], ["She is late. (always) → She ___ late.", "is always"], ["We eat plov on Fridays. (usually) → We ___ plov on Fridays.", "usually eat"],
      ["He plays chess. (sometimes) → He ___ chess.", "sometimes plays"], ["They are hungry. (often) → They ___ hungry.", "are often"], ["Aziz walks to school. (always) → Aziz ___ to school.", "always walks"] ] },
    { t: "gaps", title: "Once, twice or three times?", sub: "Count the days! Tap to check.", w: 240, fs: 32, rows: [
      ["I play football on Mondays and Fridays. → I play football ___ a week.", "twice"], ["She goes to the bazaar on Saturdays. → She goes ___ a week.", "once"],
      ["He goes to the gym on Monday, Wednesday and Friday. → He goes ___ a week.", "three times"], ["I brush my teeth in the morning and in the evening. → I brush my teeth ___ a day.", "twice"],
      ["The bus comes at 8, at 12 and at 5. → It comes ___ a day.", "three times"], ["We go to Samarkand in summer. → We go ___ a year.", "once"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men doim choy ichaman.", "I always drink tea."],
      ["Madina odatda ishga metroda boradi.", "Madina usually goes to work by metro."],
      ["Biz ba’zan kinoga boramiz.", "We sometimes go to the cinema."],
      ["Otam hech qachon kech qolmaydi.", "My father is never late."],
      ["Qanchalik tez-tez sport zaliga borasiz?", "How often do you go to the gym?"],
      ["Men haftada ikki marta futbol o’ynayman.", "I play football twice a week."] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: questions and negatives", sub: "Say it. Tap to check.", fs: 36, rows: [
      ["You play chess. → How often…?", "How often do you play chess?"],
      ["She goes to the cinema. → How often…?", "How often does she go to the cinema?"],
      ["He usually walks. → negative", "He doesn’t usually walk."],
      ["They are always late. → question", "Are they always late?"],
      ["I usually eat meat. → negative", "I don’t usually eat meat."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I drink always tea.", "I always drink tea."],
      ["She never is late.", "She is never late."],
      ["He usually play football.", "He usually plays football."],
      ["We go sometimes to the park.", "We sometimes go to the park."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake: round 2", sub: "Harder ones! Tap to fix.", rows: [
      ["I don’t never eat fish.", "I never eat fish."],
      ["How often you go to the gym?", "How often do you go to the gym?"],
      ["Does she usually walks to work?", "Does she usually walk to work?"],
      ["I am usually get up at six.", "I usually get up at six."] ] },
    { t: "spot", bg: "sky", title: "About me", sub: "Pick a card. Finish the sentence about your life.", size: 52,
      cards: ["I always…", "On Sundays I usually…", "I often…", "I sometimes…", "I never…", "I am always…"] },
    { t: "spot", bg: "yel", title: "Interview: how often?", sub: "Pairs. A asks: “How often do you…?” B answers: “Every day / once a week / sometimes / never.” Then change!", size: 44,
      cards: [{ t: "eat plov", uz: "palov yemoq" }, { t: "go to the cinema", uz: "kinoga bormoq" }, { t: "visit your grandparents", uz: "bobo-buvingiznikiga bormoq" }, { t: "play football", uz: "futbol o’ynamoq" }, { t: "drink coffee", uz: "qahva ichmoq" }, { t: "go to the bazaar", uz: "bozorga bormoq" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say how often: always, usually, often, sometimes, never", "put the word before the verb: I always drink tea", "put it after am / is / are: She is never late", "use never with no don’t: I never eat fish", "ask “How often do you…?” and answer: twice a week", "use new words: busy, tired, late, go to the gym…"] },
    { t: "bye", chips: [["I always…", "peach"], ["She is never late.", "mint"], ["How often do you…?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "brushing your teeth", say: "You are brushing your teeth! / I brush my teeth twice a day." },
      { cue: "playing chess", say: "You are playing chess! / I sometimes play chess." },
      { cue: "at the gym", say: "You are at the gym! / He goes to the gym three times a week." },
      { cue: "listening to music", say: "You are listening to music! / I always listen to music on the bus." },
      { cue: "eating a burger", say: "You are eating a burger! / She sometimes eats fast food." },
      { cue: "drinking water", say: "You are drinking water! / Drink water often!" },
      { cue: "running, late for class", say: "You are late! / He is always late." },
      { cue: "very tired, yawning", say: "You are tired! / I am often tired in the evening." },
      { cue: "very hungry", say: "You are hungry! / The children are always hungry after school." },
      { cue: "watching a film at the cinema", say: "You are watching a film! / We sometimes go to the cinema." },
      { cue: "walking after dinner", say: "You are walking! / We usually walk after dinner." },
      { cue: "meeting a friend", say: "You are meeting a friend! / Lola often meets her friends." },
      { cue: "talking to grandma on the phone", say: "You are talking to your grandma! / I call my grandma every day." },
      { cue: "cooking plov", say: "You are cooking plov! / My mother cooks plov once a week." },
      { cue: "eating an apple", say: "You are eating an apple! / I eat fruit every day." },
      { cue: "very busy: phone, writing, typing", say: "You are busy! / My father is always busy." }
    ],
    board: [
      { cat: "The scale", qs: [["100% = ?", "always"], ["0% = ? · 80% = ?", "never · usually"], ["Put in order: sometimes, always, never, often, usually", "always · usually · often · sometimes · never"]] },
      { cat: "Where does it go?", qs: [["Put in “always”: I drink tea.", "I always drink tea."], ["Put in “never”: She is late.", "She is never late."], ["Put in “often” twice: He is tired and he goes to bed early.", "He is often tired and he often goes to bed early."]] },
      { cat: "Once, twice…", qs: [["1 time a week = ?", "once a week"], ["2 times a day = ?", "twice a day"], ["Say how often you brush your teeth and eat plov.", "I brush my teeth twice a day. I eat plov … (any true)"]] },
      { cat: "Questions", qs: [["Make a question with “How often”: you / play football", "How often do you play football?"], ["Short answer (no): Do you usually walk to school?", "No, I don’t."], ["Ask about Lola with “How often”: go to the cinema", "How often does Lola go to the cinema?"]] },
      { cat: "New words", qs: [["“charchagan” in English", "tired"], ["“band” and “och”", "busy · hungry"], ["“kinoga bormoq” and “shaxmat o’ynamoq”", "go to the cinema · play chess"]] },
      { cat: "Fix it", qs: [["I drink always tea.", "I always drink tea."], ["She never is late.", "She is never late."], ["I don’t never eat fish.", "I never eat fish."]] }
    ],
    wheel: [
      { name: "Me", tasks: ["Say 2 things you always do.", "Say 2 things you never do.", "Say what you usually do on Sundays.", "Say: “I am always … and I am never …”"] },
      { name: "Family", tasks: ["Say what your mother usually cooks.", "Say how often you visit your grandparents.", "Say one thing your father never does.", "Say who is always busy in your family."] },
      { name: "How often?", tasks: ["How often do you eat plov? Answer.", "How often do you go to the bazaar? Answer.", "How often do you drink coffee? Answer.", "How often do you speak English? Answer."] },
      { name: "Questions", tasks: ["Ask a classmate 2 “How often…?” questions.", "Ask the teacher: “Do you usually…?”", "Ask a classmate: “Are you often…?”", "Ask a “What do you usually…?” question."] },
      { name: "Healthy?", tasks: ["Say how often you eat fruit.", "Say how often you drink water.", "Say how often you eat fast food.", "Say: “I usually walk…” or “I never walk…”"] },
      { name: "Usually and now", tasks: ["Say: “I usually …, but now I am …”", "Make 2 sentences with “drink”: usually and now.", "Say what the teacher usually does in class and what he is doing now.", "Say what you usually wear and what you are wearing now."] }
    ],
    build: [
      { w: ["I","always","drink","tea"], e: "." }, { w: ["She","is","never","late"], e: "." }, { w: ["We","usually","eat","plov","on","Fridays"], e: "." },
      { w: ["How","often","do","you","go","to","the","gym"], e: "?" }, { w: ["He","sometimes","plays","chess"], e: "." }, { w: ["My","father","is","always","busy"], e: "." },
      { w: ["I","don’t","usually","watch","TV"], e: "." }, { w: ["Do","you","often","visit","your","grandparents"], e: "?" },
      { w: ["They","never","eat","fast","food"], e: "." }, { w: ["I","brush","my","teeth","twice","a","day"], e: "." }
    ],
    auction: [
      { s: "I always drink green tea in the morning.", ok: true },
      { s: "She drinks always coffee.", ok: false, fix: "She always drinks coffee." },
      { s: "My father is never late.", ok: true },
      { s: "We are usually go to the park.", ok: false, fix: "We usually go to the park." },
      { s: "How often do you play football?", ok: true },
      { s: "He never is tired.", ok: false, fix: "He is never tired." },
      { s: "Lola sometimes meets her friends at a café.", ok: true },
      { s: "I don’t never eat fast food.", ok: false, fix: "I never eat fast food." },
      { s: "We visit our grandparents twice a month.", ok: true },
      { s: "Aziz usually walk to school.", ok: false, fix: "Aziz usually walks to school." },
      { s: "Are you often hungry after school?", ok: true },
      { s: "How often you go to the cinema?", ok: false, fix: "How often do you go to the cinema?" }
    ]
  }
};
