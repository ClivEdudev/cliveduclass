/* Lesson 10 · Time words
   Telling the time (seven o’clock, half past seven, quarter past / quarter to, ten past / ten to)
   and the time prepositions: at + a time (at seven, at night, at the weekend), on + a day or date
   (on Monday, on 21 March), in + a month, year, season or part of the day (in May, in 2026, in winter,
   in the morning). No preposition before today, tomorrow, every day, next week. Questions with
   What time…? and When…? Recycles the present simple (lessons 7–8), how often (lesson 8), to be and
   the present continuous (lesson 5). Uzbek: soat necha? · soat yettida · dushanba kuni · mayda.
   Built for Thursday 26 November 2026. */
window.LESSON = {
  n: 10,
  title: "Time words",
  slides: [
    { t: "cover", title: "What <span class='cy'>time</span> is it?", lead: "Time words: in, on, at · telling the time · Vaqt so’zlari", chips: [["Soat necha?", "peach"], ["Dars soat ikkida boshlanadi.", "mint"], ["Tug’ilgan kunim mayda.", "skyb"]] },
    { t: "goals", items: [
      ["Tell the time", "It’s half past seven.", "Soat yetti yarim."],
      ["Say when with at, on, in", "I have English on Monday at two o’clock.", "Dushanba kuni soat ikkida ingliz tili darsim bor."],
      ["Ask “What time…?” and “When…?”", "What time do you get up? At seven.", "Soat nechada turasiz? Soat yettida."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: what time is it?", sub: "Pick a card. Say the time in Uzbek, then try in English!",
      cards: [{ t: "7:00", uz: "soat yetti" }, { t: "2:00", uz: "soat ikki" }, { t: "9:30", uz: "soat to’qqiz yarim" }, { t: "12:00", uz: "soat o’n ikki" }, { t: "6:30", uz: "soat olti yarim" }, { t: "3:15", uz: "soat uchdan o’n besh daqiqa o’tdi" }] },

    /* ---------- TELLING THE TIME ---------- */
    { t: "cols", eb: "Telling the time · Soatni aytish", title: "O’clock, half past, quarter", menu: "Telling the time", cols: [
      { bg: "mint", label: "7:00", lc: "g", fs: 40, lines: ["It’s seven <span class='ca'>o’clock</span>."], uz: "Soat yetti. (o’clock = soat, to’liq)" },
      { bg: "skyb", label: "7:30", lc: "b", fs: 40, lines: ["It’s <span class='ca'>half past</span> seven."], uz: "Soat yetti yarim. (half = yarim)" },
      { bg: "peach", label: "7:15 · 7:45", lc: "r", fs: 40, lines: ["It’s <span class='ca'>quarter past</span> seven.", "It’s <span class='ca'>quarter to</span> eight."], uz: "Yettidan o’n besh daqiqa o’tdi. · Sakkizga o’n besh daqiqa qoldi." } ],
      notes: ["past = o’tdi · to = qoldi", "quarter = chorak (15 daqiqa)", "Easy way: say the numbers: 7:15 = seven fifteen"] },
    { t: "table", eb: "Telling the time", title: "What time is it?", head: ["Time", "English", "Easy way", "Uzbek"], rows: [
      ["8:00", "It’s eight <b class='ca'>o’clock</b>.", "eight o’clock", "Soat sakkiz."],
      ["8:10", "It’s ten <b class='ca'>past</b> eight.", "eight ten", "Sakkizdan o’n daqiqa o’tdi."],
      ["8:15", "It’s quarter <b class='ca'>past</b> eight.", "eight fifteen", "Sakkizdan o’n besh daqiqa o’tdi."],
      ["8:30", "It’s <b class='ca'>half past</b> eight.", "eight thirty", "Soat sakkiz yarim."],
      ["8:45", "It’s quarter <b class='ca'>to</b> nine.", "eight forty-five", "To’qqizga o’n besh daqiqa qoldi."],
      ["8:50", "It’s ten <b class='ca'>to</b> nine.", "eight fifty", "To’qqizga o’n daqiqa qoldi."] ],
      notes: ["Always start with It’s…", "Never: “It’s eight hours.”", "Minutes 1–30 → past · minutes 31–59 → to"] },
    { t: "gaps", title: "What time is it?", sub: "Say “It’s…”. Tap to check.", w: 330, fs: 36, rows: [
      ["9:00 → It’s ___.", "nine o’clock"], ["4:30 → It’s ___.", "half past four"], ["3:15 → It’s ___.", "quarter past three"],
      ["5:45 → It’s ___.", "quarter to six"], ["10:10 → It’s ___.", "ten past ten"], ["11:50 → It’s ___.", "ten to twelve"] ] },

    /* ---------- AT, ON, IN ---------- */
    { t: "cols", eb: "When do we use it?", title: "At, on or in?", menu: "When do we use it?", cols: [
      { bg: "mint", label: "at · a time", lc: "g", fs: 34, lines: ["<span class='ca'>at</span> seven o’clock", "<span class='ca'>at</span> night", "<span class='ca'>at</span> the weekend"], uz: "Soat: soat yettida, kechasi" },
      { bg: "skyb", label: "on · a day", lc: "b", fs: 34, lines: ["<span class='ca'>on</span> Monday", "<span class='ca'>on</span> 21 March", "<span class='ca'>on</span> my birthday"], uz: "Kun, sana: dushanba kuni, 21-martda" },
      { bg: "peach", label: "in · a long time", lc: "r", fs: 34, lines: ["<span class='ca'>in</span> May · <span class='ca'>in</span> 2026", "<span class='ca'>in</span> winter", "<span class='ca'>in</span> the morning"], uz: "Oy, yil, fasl: mayda, qishda, ertalab" } ],
      notes: ["Uzbek: -da (yettida, mayda) · English: the word comes FIRST", "on 21 March = on the twenty-first of March"] },
    { t: "formula", bg: "ink", eb: "The rule", title: "at + time · on + day · in + month", rows: [
      { chips: [["I get up", "skyb"], ["at", "peach"], ["seven o’clock.", "mint"]], uz: "Men soat yettida turaman." },
      { chips: [["We have English", "skyb"], ["on", "peach"], ["Monday.", "mint"]], uz: "Dushanba kuni ingliz tili darsimiz bor." },
      { chips: [["My birthday is", "skyb"], ["in", "peach"], ["May.", "mint"]], uz: "Tug’ilgan kunim mayda." } ],
      notes: ["at → soat", "on → kun", "in → oy, yil, fasl"] },
    { t: "examples", eb: "Positive", title: "Examples: when?", items: [
      ["Our class starts <span class='ca'>at two o’clock</span>.", "Darsimiz soat ikkida boshlanadi."],
      ["I usually get up <span class='ca'>at half past six</span>.", "Men odatda soat olti yarimda turaman."],
      ["We have English <span class='ca'>on Monday, Thursday and Friday</span>.", "Bizda dushanba, payshanba va juma kunlari ingliz tili bor."],
      ["Navruz is <span class='ca'>on 21 March</span>.", "Navro’z 21-martda."],
      ["It’s very hot in Tashkent <span class='ca'>in summer</span>.", "Yozda Toshkentda juda issiq bo’ladi."],
      ["My grandmother drinks green tea <span class='ca'>in the morning</span>.", "Buvim ertalab ko’k choy ichadi."] ] },
    { t: "gaps", title: "At, on or in?", sub: "A time, a day or a month? Tap to check.", w: 200, fs: 38, rows: [
      ["I play football ___ Sunday.", "on"], ["The film starts ___ eight o’clock.", "at"], ["My birthday is ___ June.", "in"],
      ["We drink tea ___ the evening.", "in"], ["The bazaar is busy ___ Saturday.", "on"], ["The new school year starts ___ September.", "in"] ] },

    /* ---------- VOCABULARY ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Parts of the day", menu: "New words: parts of the day", items: [
      ["I go to work <span class='ca'>in the morning</span>.", "morning = ertalab"],
      ["We have English <span class='ca'>in the afternoon</span>.", "afternoon = tushdan keyin"],
      ["My family has dinner <span class='ca'>in the evening</span>.", "evening = kechqurun"],
      ["I sleep <span class='ca'>at night</span>.", "night = tun, kechasi"],
      ["We have lunch <span class='ca'>at midday</span>.", "midday = tush payti (soat 12:00)"],
      ["The café closes <span class='ca'>at midnight</span>.", "midnight = yarim tun"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Time words", menu: "New words: time words", items: [
      ["There are sixty <span class='ca'>minutes</span> in an <span class='ca'>hour</span>.", "minute = daqiqa · hour = soat"],
      ["There are seven days in a <span class='ca'>week</span>.", "week = hafta"],
      ["I don’t work <span class='ca'>at the weekend</span>.", "weekend = dam olish kunlari (shanba, yakshanba)"],
      ["Aziz is always <span class='ca'>early</span> for class.", "early = erta, barvaqt"],
      ["Sorry, I’m <span class='ca'>late</span>!", "late = kech, kechikkan"],
      ["Look at my <span class='ca'>watch</span>. It’s ten to two!", "watch = qo’l soati"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "The four seasons", items: [
      { bg: "skyb", w: "❄️", label: "winter = qish", en: "It’s cold in winter.", uz: "Qishda sovuq bo’ladi." },
      { bg: "mint", w: "🌸", label: "spring = bahor", en: "Navruz is in spring.", uz: "Navro’z bahorda." },
      { bg: "butter", w: "☀️", label: "summer = yoz", en: "We go to the mountains in summer.", uz: "Yozda tog’ga boramiz." },
      { bg: "peach", w: "🍂", label: "autumn = kuz", en: "School starts in autumn.", uz: "Maktab kuzda boshlanadi." } ] },
    { t: "spot", bg: "sky", title: "Ask a classmate!", sub: "Pick a card. Ask a classmate. They answer with at, on or in!", size: 44,
      cards: ["What time is it now?", "What time do you get up?", "When is your birthday?", "What do you do on Sunday?", "What do you do in the evening?", "When do we have English?"] },

    /* ---------- NEGATIVE ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "don’t / doesn’t / isn’t + time", rows: [
      { chips: [["I", "skyb"], ["don’t work", "peach"], ["on", "mint"], ["Sunday.", "butter"]], uz: "Men yakshanba kuni ishlamayman." },
      { chips: [["The bus", "skyb"], ["doesn’t come", "peach"], ["at", "mint"], ["night.", "butter"]], uz: "Avtobus kechasi kelmaydi." },
      { chips: [["It", "skyb"], ["isn’t", "peach"], ["three o’clock", "mint"], ["now.", "butter"]], uz: "Hozir soat uch emas." } ],
      notes: ["I / you / we / they → don’t + verb", "he / she / it → doesn’t + verb (no -s!)", "It’s… → It isn’t… (to be)"] },
    { t: "examples", eb: "Negative", title: "Examples: no sentences", items: [
      ["I <span class='cn'>don’t</span> get up early at the weekend.", "Dam olish kunlari erta turmayman."],
      ["Madina <span class='cn'>doesn’t</span> work on Friday.", "Madina juma kuni ishlamaydi."],
      ["The shop <span class='cn'>doesn’t</span> open at seven. It opens at nine.", "Do’kon soat yettida ochilmaydi. Soat to’qqizda ochiladi."],
      ["It <span class='cn'>isn’t</span> cold in summer.", "Yozda sovuq bo’lmaydi."],
      ["My birthday <span class='cn'>isn’t</span> in May. It’s in June.", "Tug’ilgan kunim mayda emas. Iyunda."],
      ["We <span class='cn'>don’t</span> have English on Tuesday.", "Seshanba kuni ingliz tili darsimiz yo’q."] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "What time…? · When…?", rows: [
      { chips: [["What time", "butter"], ["is", "peach"], ["it?", "skyb"]], uz: "Soat necha?" },
      { chips: [["What time", "butter"], ["do", "peach"], ["you", "skyb"], ["get up?", "mint"]], uz: "Soat nechada turasiz?" },
      { chips: [["When", "butter"], ["is", "peach"], ["your birthday?", "skyb"]], uz: "Tug’ilgan kuningiz qachon?" } ],
      notes: ["What time…? → at seven, at half past two", "When…? → on Monday, in May, at night", "he / she → What time does she…?"] },
    { t: "cols", eb: "Short answers · Qisqa javoblar", title: "At seven. On Monday. In May.", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 34, lines: ["<span class='cw'>What time</span> is it?", "<span class='cw'>What time</span> does the film start?", "<span class='cw'>When</span> is your birthday?", "<span class='cw'>Is</span> it six o’clock?"] },
      { bg: "mint", label: "Answer", lc: "g", fs: 34, lines: ["It’s <span class='ca'>quarter to five</span>.", "<span class='ca'>At</span> eight o’clock.", "<span class='ca'>In</span> May. / <span class='ca'>On</span> 5 May.", "Yes, it <span class='ca'>is</span>. / No, it <span class='cn'>isn’t</span>."] } ],
      notes: ["Short answer: just the time words (At eight. On Monday.)", "Never: “Yes, it’s.”"] },
    { t: "examples", eb: "Wh- questions", title: "What time? When? How often?", menu: "Wh- questions", items: [
      ["<span class='cw'>What time</span> is it? — It’s half past two.", "Soat necha? — Ikki yarim."],
      ["<span class='cw'>What time</span> do you have breakfast? — At seven.", "Soat nechada nonushta qilasiz? — Soat yettida."],
      ["<span class='cw'>What time</span> does the bank open? — At nine o’clock.", "Bank soat nechada ochiladi? — Soat to’qqizda."],
      ["<span class='cw'>When</span> do you go to the bazaar? — On Saturday.", "Bozorga qachon borasiz? — Shanba kuni."],
      ["<span class='cw'>When</span> is your birthday? — In October.", "Tug’ilgan kuningiz qachon? — Oktabrda."],
      ["<span class='cw'>How often</span> do you visit Samarkand? — Once a year, in summer.", "Samarqandga qanchalik tez-tez borasiz? — Yiliga bir marta, yozda."] ] },
    { t: "quad", eb: "Key words · Asosiy so’zlar", title: "No at, on, in!", items: [
      { bg: "peach", w: "<span style='font-size:84px'>today</span>", label: "bugun", en: "I am busy today.", uz: "Bugun bandman." },
      { bg: "mint", w: "<span style='font-size:66px'>tomorrow</span>", label: "ertaga", en: "We have English tomorrow.", uz: "Ertaga ingliz tili darsimiz bor." },
      { bg: "skyb", w: "<span style='font-size:58px;line-height:1.05;display:block'>every<br>day</span>", label: "har kuni", en: "I drink tea every day.", uz: "Men har kuni choy ichaman." },
      { bg: "butter", w: "<span style='font-size:58px;line-height:1.05;display:block'>next<br>week</span>", label: "keyingi hafta", en: "My brother is coming home next week.", uz: "Akam keyingi hafta uyga keladi." } ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Common mistakes", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 34, lines: ["<span class='cn'>in</span> Monday", "<span class='cn'>at</span> the morning", "<span class='cn'>in</span> night", "It’s seven <span class='cn'>hours</span>.", "<span class='cn'>on</span> next week"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 34, lines: ["<span class='ca'>on</span> Monday", "<span class='ca'>in</span> the morning", "<span class='ca'>at</span> night", "It’s seven <span class='ca'>o’clock</span>.", "next week"] } ],
      notes: ["in the morning / afternoon / evening, BUT at night", "Uzbek “soat yetti” → seven o’clock (not “hours”)", "today, tomorrow, every day, next week: no at / on / in"] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "At, on, in or nothing (–)?", sub: "Careful! Some have no word. Tap to check.", w: 200, fs: 36, rows: [
      ["We have lunch ___ midday.", "at"], ["I visit my grandparents ___ the weekend.", "at"], ["It snows ___ winter.", "in"],
      ["I am busy ___ today.", "–"], ["The wedding is ___ 12 December.", "on"], ["My father gets up early ___ every day.", "–"] ] },
    { t: "gaps", title: "Questions and answers", sub: "What time · When · do · does · isn’t · On… Tap to check.", w: 220, fs: 34, rows: [
      ["___ time is it? — It’s six o’clock.", "What"], ["___ is your birthday? — In June.", "When"], ["What time ___ you get up? — At seven.", "do"],
      ["What time ___ the bus come? — At ten past eight.", "does"], ["Is it half past three? — No, it ___.", "isn’t"], ["When does Aziz play football? — ___ Saturday.", "On"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Soat necha?", "What time is it?"],
      ["Soat yetti yarim.", "It’s half past seven."],
      ["Men soat oltida turaman.", "I get up at six o’clock."],
      ["Dushanba kuni ishlayman.", "I work on Monday."],
      ["Tug’ilgan kunim aprelda.", "My birthday is in April."],
      ["Kechasi uxlaymiz.", "We sleep at night."] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: negative, question, What time…?", sub: "Say it. Tap to check.", fs: 34, rows: [
      ["He works on Saturday. → negative + question", "He doesn’t work on Saturday. · Does he work on Saturday?"],
      ["They get up at six. → negative + question", "They don’t get up at six. · Do they get up at six?"],
      ["It’s five o’clock. → negative + question", "It isn’t five o’clock. · Is it five o’clock?"],
      ["The lesson starts at two. → What time…?", "What time does the lesson start?"],
      ["Her birthday is in March. → When…?", "When is her birthday?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I go to the bazaar in Saturday.", "I go to the bazaar on Saturday."],
      ["It’s eight hours.", "It’s eight o’clock."],
      ["We have lunch in midday.", "We have lunch at midday."],
      ["My birthday is on July.", "My birthday is in July."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake: round 2", sub: "Harder ones! Tap to fix.", rows: [
      ["I don’t sleep in night.", "I don’t sleep at night."],
      ["What time you get up?", "What time do you get up?"],
      ["She doesn’t works on Sunday.", "She doesn’t work on Sunday."],
      ["See you on tomorrow!", "See you tomorrow!"] ] },
    { t: "spot", bg: "sky", title: "My day and my year", sub: "Pick a card. Finish the sentence about you.", size: 48,
      cards: ["I get up at…", "I have lunch at…", "On Sunday I usually…", "In the evening I…", "My birthday is in…", "In summer I…"] },
    { t: "spot", bg: "yel", title: "Let’s meet!", sub: "Pairs. A: “Are you free on Saturday? Let’s go to the…!” B: “Yes! What time?” A: “At three o’clock.” B: “OK, see you on Saturday!” Then change!", size: 44,
      cards: [{ t: "the cinema", uz: "kinoteatr" }, { t: "the bazaar", uz: "bozor" }, { t: "the park", uz: "bog’" }, { t: "the stadium", uz: "stadion" }, { t: "a café", uz: "kafe" }, { t: "the museum", uz: "muzey" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["tell the time: seven o’clock, half past seven, quarter to eight", "use at + a time: at two o’clock, at night", "use on + a day: on Monday, on 21 March", "use in + a month, year, season: in May, in 2026, in winter", "ask “What time…?” and “When…?” and answer", "use new words: morning, evening, weekend, early, late, watch…"] },
    { t: "bye", chips: [["It’s half past three.", "peach"], ["See you on Friday!", "mint"], ["What time is it?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "make a clock with your arms: 3:00", say: "It’s three o’clock!" },
      { cue: "make a clock with your arms: 6:00", say: "It’s six o’clock!" },
      { cue: "make a clock with your arms: 12:15", say: "It’s quarter past twelve!" },
      { cue: "make a clock with your arms: 9:45", say: "It’s quarter to ten!" },
      { cue: "wake up and stretch (a sunny morning)", say: "You get up in the morning!" },
      { cue: "go to sleep (the moon, dark)", say: "You sleep at night!" },
      { cue: "look at your watch and run: you are late!", say: "You are late!" },
      { cue: "eat lunch at a big table at midday", say: "You have lunch at midday!" },
      { cue: "you are very cold: snow!", say: "It’s winter! It’s cold in winter." },
      { cue: "you are very hot: sun!", say: "It’s summer! It’s hot in summer." },
      { cue: "smell the flowers", say: "It’s spring! Navruz is in spring." },
      { cue: "blow out candles on a cake", say: "It’s your birthday! Your birthday is in … (month)" },
      { cue: "sleep a lot, no work: Sunday!", say: "You don’t work at the weekend!" },
      { cue: "come in early and sit down: no one is here", say: "You are early!" },
      { cue: "watch a film in the evening", say: "You watch TV in the evening!" },
      { cue: "drink tea and read the news in the morning", say: "You drink tea in the morning!" }
    ],
    board: [
      { cat: "At, on, in", qs: [["___ Monday", "on"], ["___ seven o’clock · ___ May", "at · in"], ["___ the morning · ___ night · ___ the weekend", "in · at · at"]] },
      { cat: "What time is it?", qs: [["5:00", "It’s five o’clock."], ["8:30 · 2:15", "half past eight · quarter past two"], ["10:45 · 11:50", "quarter to eleven · ten to twelve"]] },
      { cat: "Uzbek → English", qs: [["“ertalab”", "in the morning"], ["“kechasi” · “dam olish kunlari”", "at night · at the weekend"], ["“Tug’ilgan kunim iyulda.”", "My birthday is in July."]] },
      { cat: "Questions", qs: [["Ask about the time now.", "What time is it?"], ["Ask: Aziz gets up at six. (What time…?)", "What time does Aziz get up?"], ["Ask about a classmate’s birthday, then answer about yours.", "When is your birthday? — In … (any true)"]] },
      { cat: "New words", qs: [["“qish” and “yoz”", "winter · summer"], ["“erta” and “kech”", "early · late"], ["“bahor”, “kuz” and “qo’l soati”", "spring · autumn · watch"]] },
      { cat: "Fix it", qs: [["in Friday", "on Friday"], ["It’s nine hours.", "It’s nine o’clock."], ["See you on tomorrow.", "See you tomorrow."]] }
    ],
    wheel: [
      { name: "My day", tasks: ["Say what time you get up.", "Say what time you have lunch.", "Say what you do in the evening.", "Say what time you go to bed."] },
      { name: "My week", tasks: ["Say what you do on Monday.", "Say what you do at the weekend.", "Say which day you go to the bazaar.", "Say 2 things you don’t do on Sunday."] },
      { name: "My year", tasks: ["Say when your birthday is.", "Say what you do in summer.", "Say which season you like and why.", "Say when Navruz is."] },
      { name: "Clock", tasks: ["The teacher says a time. Draw it on the board.", "Say the time now.", "Say: 7:30, 4:15 and 9:45.", "Say: 10:10 and 11:50 (past / to)."] },
      { name: "Questions", tasks: ["Ask a classmate: “What time do you get up?”", "Ask the teacher: “When is your birthday?”", "Ask 2 “What time does…?” questions about town (bank, bazaar, metro).", "Ask a classmate: “What do you do on Sunday?”"] },
      { name: "Now and every day", tasks: ["Say: “It’s … now and we are …ing.”", "Say what your mother is doing now. Guess!", "Say: “I always … in the morning.”", "Say: “I never … at night.”"] }
    ],
    build: [
      { w: ["What","time","is","it"], e: "?" }, { w: ["It’s","half","past","seven"], e: "." }, { w: ["I","get","up","at","six","o’clock"], e: "." },
      { w: ["We","have","English","on","Monday"], e: "." }, { w: ["My","birthday","is","in","May"], e: "." },
      { w: ["What","time","does","the","bank","open"], e: "?" }, { w: ["When","is","your","birthday"], e: "?" },
      { w: ["I","don’t","work","at","the","weekend"], e: "." }, { w: ["It’s","very","cold","in","winter"], e: "." },
      { w: ["My","grandfather","sleeps","in","the","afternoon"], e: "." }
    ],
    auction: [
      { s: "It’s quarter past four.", ok: true },
      { s: "I go to the bazaar in Sunday.", ok: false, fix: "I go to the bazaar on Sunday." },
      { s: "We have lunch at midday.", ok: true },
      { s: "It’s six hours.", ok: false, fix: "It’s six o’clock." },
      { s: "My birthday is in September.", ok: true },
      { s: "I sleep in night.", ok: false, fix: "I sleep at night." },
      { s: "What time does the film start?", ok: true },
      { s: "We have English on next week.", ok: false, fix: "We have English next week." },
      { s: "Navruz is on 21 March.", ok: true },
      { s: "What time you get up?", ok: false, fix: "What time do you get up?" },
      { s: "I drink tea at the morning.", ok: false, fix: "I drink tea in the morning." },
      { s: "Madina doesn’t work at the weekend.", ok: true }
    ]
  }
};
