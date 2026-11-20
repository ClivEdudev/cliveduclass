/* Beginner · Lesson 33 · Clothes and weather
   The weather with “It’s …” (It’s cold. It’s raining.) and clothes with the present continuous
   of wear (I’m wearing a coat.), plus “What’s the weather like?” and “What are you wearing?”.
   Recycles lessons 31–32 (am / is / are + -ing, no, questions), colours and commands.
   Built for Thu 11 Mar 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b33",
  n: 33,
  title: "Clothes and weather",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 33", title: "Clothes and <span class='cy'>weather</span>", lead: "It’s cold. I’m wearing a coat. · Kiyim va ob-havo",
      chips: [["Havo sovuq.", "peach"], ["Men palto kiyganman.", "mint"], ["Havo qanday?", "skyb"]] },
    { t: "goals", items: [
      ["Say what the weather is like", "It’s cold today.", "Bugun havo sovuq."],
      ["Say what you are wearing", "I’m wearing a coat.", "Men palto kiyganman."],
      ["Ask about weather and clothes", "What’s the weather like?", "Havo qanday?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: ask and answer", sub: "Lesson 32! Pick a card. Ask a classmate. Answer: “Yes, I am.” / “No, I’m not.” · Savol bering, javob bering.", size: 46,
      cards: ["What are you doing?", "Are you sleeping?", "Is the teacher singing?", "Are you listening to music?", "What is your mum doing now?", "Are your friends playing?"] },

    /* ---------- WEATHER ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "The weather", menu: "New words: the weather", items: [
      ["It’s <span class='ca'>hot</span>.", "hot = issiq"],
      ["It’s <span class='ca'>cold</span>.", "cold = sovuq"],
      ["It’s <span class='ca'>sunny</span>.", "sunny = quyoshli"],
      ["It’s <span class='ca'>raining</span>.", "rain = yomg’ir · Yomg’ir yog’yapti."],
      ["It’s <span class='ca'>snowing</span>.", "snow = qor · Qor yog’yapti."],
      ["<span class='cw'>What’s</span> the weather like?", "Havo qanday?"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Look and say", items: [
      { bg: "butter", w: "☀️", label: "sunny = quyoshli", en: "It’s sunny in Tashkent.", uz: "Toshkentda havo quyoshli." },
      { bg: "skyb", w: "🌧️", label: "raining = yomg’ir yog’yapti", en: "It’s raining today.", uz: "Bugun yomg’ir yog’yapti." },
      { bg: "mint", w: "❄️", label: "snowing = qor yog’yapti", en: "It’s snowing in Samarkand.", uz: "Samarqandda qor yog’yapti." },
      { bg: "peach", w: "🥵", label: "hot = issiq", en: "It’s very hot today.", uz: "Bugun havo juda issiq." } ] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "It’s + weather",
      sub: "Qoida: ob-havo haqida doim <b>It’s</b> (It is) bilan boshlaymiz. O’zbekchada “Sovuq.” deymiz, inglizchada “It’s cold.” It kerak!", rows: [
      { chips: [["It", "skyb"], ["’s", "peach"], ["cold.", "mint"]], uz: "Havo sovuq." },
      { chips: [["It", "skyb"], ["’s", "peach"], ["raining.", "mint"]], uz: "Yomg’ir yog’yapti. (hozir)" },
      { chips: [["It", "skyb"], ["isn’t", "peach"], ["hot.", "mint"]], uz: "Havo issiq emas." },
      { chips: [["Is", "peach"], ["it", "skyb"], ["snowing?", "mint"]], uz: "Qor yog’yaptimi?" } ],
      notes: ["It’s = It is", "raining, snowing = hozir (-ing)", "Is it cold? Yes, it is. / No, it isn’t."] },
    { t: "examples", eb: "The weather · Ob-havo", title: "Examples: the weather", items: [
      ["<span class='cw'>What’s</span> the weather like? It’s cold.", "Havo qanday? Sovuq."],
      ["It<span class='ca'>’s</span> sunny in Tashkent.", "Toshkentda havo quyoshli."],
      ["It<span class='ca'>’s</span> snowing in Samarkand.", "Samarqandda qor yog’yapti."],
      ["It <span class='cn'>isn’t</span> hot today.", "Bugun havo issiq emas."],
      ["<span class='cw'>Is</span> it raining? Yes, it is.", "Yomg’ir yog’yaptimi? Ha."],
      ["<span class='cw'>Is</span> it cold? No, it isn’t.", "Havo sovuqmi? Yo’q."] ] },
    { t: "gaps", title: "What’s the weather like?", sub: "Look at the picture. Say the word. Tap to check.", w: 220, fs: 42, rows: [
      ["☀️ It’s ___.", "sunny"], ["🌧️ It’s ___.", "raining"], ["❄️ It’s ___.", "snowing"],
      ["🥶 It’s ___.", "cold"], ["🥵 It’s ___.", "hot"], ["___ the weather like?", "What’s"] ] },

    /* ---------- CLOTHES ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Clothes", menu: "New words: clothes", items: [
      ["I’m wearing a <span class='ca'>coat</span>.", "coat = palto"],
      ["Aziz is wearing a <span class='ca'>hat</span>.", "hat = shapka"],
      ["Lola is wearing a red <span class='ca'>scarf</span>.", "scarf = sharf"],
      ["Bobur is wearing a white <span class='ca'>T-shirt</span>.", "T-shirt = futbolka"],
      ["Madina is wearing a blue <span class='ca'>dress</span>.", "dress = ko’ylak (ayollar ko’ylagi)"],
      ["I’m wearing black <span class='ca'>shoes</span>.", "shoes = tufli, oyoq kiyim"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "What is it?", items: [
      { bg: "peach", w: "🧥", label: "a coat = palto", en: "My coat is black.", uz: "Paltom qora." },
      { bg: "mint", w: "🧣", label: "a scarf = sharf", en: "Her scarf is red.", uz: "Uning sharfi qizil." },
      { bg: "skyb", w: "👗", label: "a dress = ko’ylak", en: "This dress is blue.", uz: "Bu ko’ylak ko’k." },
      { bg: "butter", w: "👞", label: "shoes = tufli", en: "These shoes are white.", uz: "Bu tuflilar oq." } ] },
    { t: "formula", bg: "ink", eb: "wear = kiymoq", title: "am / is / are + wearing",
      sub: "Qoida: hozir ustimizdagi kiyim haqida <b>am / is / are + wearing</b> deymiz. O’zbekchada “kiyganman”, inglizchada “I’m wearing”.", rows: [
      { chips: [["I", "skyb"], ["am", "peach"], ["wearing", "mint"], ["a coat.", "butter"]], uz: "Men palto kiyganman." },
      { chips: [["She", "skyb"], ["is", "peach"], ["wearing", "mint"], ["a hat.", "butter"]], uz: "U shapka kiygan." },
      { chips: [["They", "skyb"], ["are", "peach"], ["wearing", "mint"], ["T-shirts.", "butter"]], uz: "Ular futbolka kiyishgan." } ],
      notes: ["a coat, a hat, a dress", "shoes (ko’plik): no “a”", "colour first: a red scarf"] },
    { t: "examples", eb: "Weather and clothes", title: "It’s cold. I’m wearing a coat.", menu: "Weather and clothes", items: [
      ["It’s cold. I<span class='ca'>’m wearing</span> a coat.", "Havo sovuq. Men palto kiyganman."],
      ["It’s hot. Aziz <span class='ca'>is wearing</span> a T-shirt.", "Havo issiq. Aziz futbolka kiygan."],
      ["It’s snowing. Lola <span class='ca'>is wearing</span> a hat.", "Qor yog’yapti. Lola shapka kiygan."],
      ["It’s sunny. Madina <span class='ca'>is wearing</span> a dress.", "Havo quyoshli. Madina ko’ylak kiygan."],
      ["I<span class='cn'>’m not wearing</span> a scarf.", "Men sharf kiymaganman."],
      ["<span class='cw'>What are</span> you wearing?", "Nima kiygansiz?"] ] },
    { t: "gaps", title: "Clothes: write the word", sub: "Look at the picture. Tap to check.", w: 220, fs: 42, rows: [
      ["🧥 I’m wearing a ___.", "coat"], ["🧣 Lola is wearing a ___.", "scarf"], ["👗 Madina is wearing a ___.", "dress"],
      ["👞 I’m wearing white ___.", "shoes"], ["👕 Bobur is wearing a ___.", "T-shirt"], ["Aziz ___ wearing a hat.", "is"] ] },

    /* ---------- NO AND QUESTIONS ---------- */
    { t: "cols", eb: "Questions · So’roq", title: "Is it cold? Are you wearing a coat?", menu: "Questions and short answers", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 38, lines: ["<span class='cw'>Is</span> it cold?", "<span class='cw'>Is</span> it raining?", "<span class='cw'>Are</span> you wearing a hat?", "<span class='cw'>What are</span> you wearing?"] },
      { bg: "mint", label: "Yes ✓", lc: "g", fs: 38, lines: ["Yes, it <span class='ca'>is</span>.", "Yes, it <span class='ca'>is</span>.", "Yes, I <span class='ca'>am</span>.", "I’m wearing a coat."] },
      { bg: "peach", label: "No ✗", lc: "r", fs: 38, lines: ["No, it <span class='cn'>isn’t</span>.", "No, it <span class='cn'>isn’t</span>.", "No, I<span class='cn'>’m not</span>.", "—"] } ],
      notes: ["32-dars kabi: am / is / are boshida", "Havo sovuqmi? = Is it cold?"] },
    { t: "gaps", title: "Ask and answer", sub: "Write one word. Tap to check.", w: 180, fs: 40, rows: [
      ["Is it raining? Yes, it ___.", "is"], ["Is it hot? No, it ___.", "isn’t"], ["Are you wearing a coat? No, I’m ___.", "not"],
      ["What ___ you wearing?", "are"], ["It’s cold! ___ your hat! (command)", "Wear"], ["🌧️ It isn’t sunny. It’s ___.", "raining"] ] },

    /* ---------- CAREFUL ---------- */
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 40, lines: ["<span class='cn'>Is</span> cold today.", "It<span class='cn'>’s rain</span>.", "I <span class='cn'>wearing</span> a hat.", "I’m wearing <span class='cn'>a shoes</span>."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 40, lines: ["<span class='ca'>It’s</span> cold today.", "It<span class='ca'>’s raining</span>.", "I<span class='ca'>’m wearing</span> a hat.", "I’m wearing <span class='ca'>shoes</span>."] },
      { bg: "butter", label: "Why?", fs: 34, lines: ["It’s + weather"], uz: "Inglizchada gapda “It” bo’lishi shart. Yomg’ir hozir yog’sa: raining. “wearing” oldida am / is / are. shoes ko’plik: “a” yo’q." } ] },

    /* ---------- QUIZZES ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", w: 640, rows: [
      ["Bugun havo sovuq.", "It’s cold today."],
      ["Yomg’ir yog’yapti.", "It’s raining."],
      ["Men palto kiyganman.", "I’m wearing a coat."],
      ["Havo qanday?", "What’s the weather like?"],
      ["Lola qizil shapka kiygan.", "Lola is wearing a red hat."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["Is hot today.", "It’s hot today."],
      ["It’s snow now.", "It’s snowing now."],
      ["She wearing a dress.", "She is wearing a dress."],
      ["I’m wearing a scarf red.", "I’m wearing a red scarf."] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "sky", title: "Me today", sub: "Pick a card. Finish the sentence about you. · Gapni o’zingiz haqida tugating.", size: 50,
      cards: ["Today it’s…", "I’m wearing…", "I’m not wearing…", "My teacher is wearing…", "Is it cold now?", "What’s the weather like?"] },
    { t: "spot", bg: "yel", title: "Weather phone call", sub: "Pairs. A: “Hello! What’s the weather like in …?” B looks at the card: “It’s sunny. I’m wearing a T-shirt.” · Juftlikda gapiring.", size: 50,
      cards: [{ t: "☀️ Tashkent", uz: "quyoshli" }, { t: "❄️ Samarkand", uz: "qor yog’yapti" }, { t: "🌧️ London", uz: "yomg’ir yog’yapti" }, { t: "🥵 Bukhara", uz: "issiq" }, { t: "🥶 Moscow", uz: "sovuq" }, { t: "☀️ Khiva", uz: "quyoshli" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say the weather: It’s cold. It’s sunny.", "say It’s raining. / It’s snowing.", "ask: What’s the weather like?", "say: I’m wearing a coat.", "ask: What are you wearing?", "name clothes: coat, hat, scarf, dress…"] },
    { t: "bye", chips: [["It’s cold!", "peach"], ["I’m wearing a coat.", "mint"], ["What’s the weather like?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "cold · sovuq (titrang)", say: "It’s cold!" }, { cue: "hot · juda issiq", say: "It’s hot!" },
      { cue: "rain · yomg’ir yog’yapti", say: "It’s raining!" }, { cue: "snow · qor yog’yapti", say: "It’s snowing!" },
      { cue: "sunny · quyoshli", say: "It’s sunny!" }, { cue: "a coat · palto kiying", say: "You’re wearing a coat!" },
      { cue: "a hat · shapka kiying", say: "You’re wearing a hat!" }, { cue: "a scarf · sharf o’rang", say: "You’re wearing a scarf!" },
      { cue: "shoes · oyoq kiyim kiying", say: "You’re wearing shoes!" }, { cue: "a T-shirt · futbolka kiying", say: "You’re wearing a T-shirt!" },
      { cue: "cold: a coat and a hat · sovuq: palto va shapka", say: "It’s cold. You’re wearing a coat and a hat!" }, { cue: "hot: no coat · issiq: paltoni yeching", say: "It’s hot. You aren’t wearing a coat!" }
    ],
    board: [
      { cat: "Weather", qs: [["☀️ What’s the weather like?", "It’s sunny."], ["🌧️ What’s the weather like?", "It’s raining."], ["❄️ and 🥶 together", "It’s snowing. It’s cold."]] },
      { cat: "Clothes", qs: [["🧥 What is it?", "a coat"], ["🧣 What is it?", "a scarf"], ["Name 3 clothes.", "coat, hat, scarf, T-shirt, dress, shoes (any 3)"]] },
      { cat: "wearing", qs: [["I ___ wearing a hat.", "am"], ["Aziz ___ wearing a coat.", "is"], ["Say what you are wearing.", "I’m wearing … (any true)"]] },
      { cat: "Questions", qs: [["Is it hot? (no)", "No, it isn’t."], ["Ask about the weather.", "What’s the weather like?"], ["Ask a classmate about clothes.", "What are you wearing? / Are you wearing a …?"]] },
      { cat: "Translate", qs: [["“Havo sovuq.”", "It’s cold."], ["“Qor yog’yapti.”", "It’s snowing."], ["“U qizil ko’ylak kiygan.”", "She is wearing a red dress."]] },
      { cat: "Fix it", qs: [["Is cold.", "It’s cold."], ["It’s rain.", "It’s raining."], ["I wearing a coat.", "I’m wearing a coat."]] }
    ],
    wheel: [
      { name: "Weather", tasks: ["What’s the weather like today?", "Say: It isn’t hot.", "Say the weather in Samarkand now. Guess!", "Ask: Is it raining?"] },
      { name: "Me", tasks: ["Say 2 things you are wearing.", "Say what colour your shoes are.", "Say 1 thing you aren’t wearing.", "Say: Today it’s … and I’m wearing …"] },
      { name: "Classmates", tasks: ["Say what a classmate is wearing. The class guesses who.", "Ask: “What are you wearing?”", "Ask: “Are you wearing a hat?”", "Say what the teacher is wearing."] },
      { name: "Mime", tasks: ["Mime: it’s cold. The class says it.", "Mime: it’s raining.", "Mime: put on a coat.", "Mime: it’s hot."] },
      { name: "Colours", tasks: ["Say: a red scarf.", "Say: a black coat.", "Say: white shoes.", "Say: a blue dress."] },
      { name: "Words", tasks: ["Say 3 weather words.", "Spell: coat.", "Say in English: sharf.", "Say in English: futbolka."] }
    ],
    build: [
      { w: ["It’s", "cold", "today"], e: "." }, { w: ["It’s", "raining", "now"], e: "." },
      { w: ["I’m", "wearing", "a", "coat"], e: "." }, { w: ["What’s", "the", "weather", "like"], e: "?" },
      { w: ["Is", "it", "snowing"], e: "?" }, { w: ["She", "is", "wearing", "a", "red", "dress"], e: "." },
      { w: ["What", "are", "you", "wearing"], e: "?" }, { w: ["It", "isn’t", "hot", "today"], e: "." }
    ],
    auction: [
      { s: "It’s cold today.", ok: true },
      { s: "Is hot today.", ok: false, fix: "It’s hot today." },
      { s: "I’m wearing a black coat.", ok: true },
      { s: "It’s rain now.", ok: false, fix: "It’s raining now." },
      { s: "What’s the weather like?", ok: true },
      { s: "She wearing a hat.", ok: false, fix: "She is wearing a hat." },
      { s: "Is it snowing? Yes, it is.", ok: true },
      { s: "I’m wearing a shoes.", ok: false, fix: "I’m wearing shoes." },
      { s: "Lola is wearing a scarf red.", ok: false, fix: "Lola is wearing a red scarf." },
      { s: "It isn’t sunny in Samarkand.", ok: true }
    ]
  }
};
