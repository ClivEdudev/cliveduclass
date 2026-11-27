/* Extra lesson: Countable and uncountable nouns.
   Countable: a / an, one → two + -s (an apple, two apples). Uncountable: no a/an, no -s (water, rice, money).
   some (both), How many + countable, How much + uncountable, containers: a bottle of water, a cup of tea, a piece of bread.
   The big trap for Uzbek speakers: “ikkita non” is fine in Uzbek, but in English bread is uncountable → two loaves / two pieces of bread. */
window.LESSON = {
  id: "cu1",
  title: "Countable and uncountable",
  openDate: "2026-11-27",
  openNow: true,
  slides: [
    { t: "cover", tag: "Extra lesson · Grammar", title: "An apple, some <span class='cy'>water</span>", lead: "Countable and uncountable nouns · Sanaladigan va sanalmaydigan otlar", chips: [["an apple", "peach"], ["two apples", "mint"], ["some water", "skyb"]] },
    { t: "goals", items: [
      ["Say which words we can count", "an egg, three eggs · milk, rice", "tuxum — sanaladi · sut — sanalmaydi"],
      ["Use a / an, some, How many / How much", "some bread · How much water?", "biroz non · Qancha suv?"],
      ["Order food and drinks", "a cup of tea, a bottle of water", "bir piyola choy, bir shisha suv"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: what is in your kitchen?", sub: "Say a food or a drink in English. The class shouts: “Count it!” or “Can’t count it!”",
      cards: [{ t: "apples", uz: "olmalar" }, { t: "milk", uz: "sut" }, { t: "eggs", uz: "tuxumlar" }, { t: "rice", uz: "guruch" }, { t: "tomatoes", uz: "pomidorlar" }, { t: "tea", uz: "choy" }] },

    /* ---------- COUNT OR NOT ---------- */
    { t: "cols", eb: "The idea", title: "Can you count it?", menu: "Countable or uncountable?", cols: [
      { bg: "mint", label: "Countable ✓", lc: "g", fs: 40, lines: ["an apple", "two apple<span class='ca'>s</span>", "three egg<span class='ca'>s</span>"], uz: "Sanaladi: 1, 2, 3… Birlik va ko’plik bor." },
      { bg: "skyb", label: "Uncountable ✗", lc: "b", fs: 40, lines: ["water", "rice", "money"], uz: "Sanalmaydi: a / an yo’q, -s yo’q." },
      { bg: "peach", label: "Why?", lc: "r", fs: 36, lines: ["apples → 1, 2, 3", "water → ? ? ?", "rice → too small!"], uz: "Suvni, guruchni bittalab sanab bo’lmaydi." } ],
      notes: ["Countable: a / an + word, or number + word-s", "Uncountable: just the word: water, milk, rice"] },
    { t: "formula", bg: "ink", eb: "The rules", title: "Countable vs uncountable", rows: [
      { chips: [["a / an", "skyb"], ["+ countable", "mint"], ["→", "butter"], ["an egg", "peach"]], uz: "bitta tuxum" },
      { chips: [["two, three…", "skyb"], ["+ countable + s", "mint"], ["→", "butter"], ["three eggs", "peach"]], uz: "uchta tuxum" },
      { chips: [["—", "skyb"], ["uncountable", "mint"], ["→", "butter"], ["milk", "peach"]], uz: "sut (a yo’q, -s yo’q)" } ],
      notes: ["Never: a water ✗, two milks ✗, rices ✗"] },
    { t: "table", eb: "Words to know · Bilish kerak", title: "Two groups", head: ["Countable · sanaladi", "Uncountable · sanalmaydi"], rows: [
      ["an apple, a banana", "<b class='ca'>water</b>, milk, juice"],
      ["an egg, a potato", "<b class='ca'>rice</b>, sugar, salt"],
      ["a cup, a bottle", "<b class='ca'>tea</b>, coffee"],
      ["a book, a pen", "<b class='ca'>money</b>, homework"],
      ["a sandwich, a cake", "<b class='ca'>bread</b>, cheese, butter, meat"],
      ["a student, a friend", "<b class='ca'>music</b>, time, weather"] ],
      notes: ["bread = non: uncountable in English!", "money = pul: uncountable (not “moneys”)"] },
    { t: "gaps", title: "Countable or uncountable?", sub: "Say C (countable) or U (uncountable). Tap to check.", w: 120, fs: 40, rows: [
      ["banana → ___", "C"], ["water → ___", "U"], ["rice → ___", "U"], ["egg → ___", "C"], ["money → ___", "U"], ["cup → ___", "C"] ] },
    { t: "gaps", title: "a, an or —?", sub: "Write a, an or — (nothing). Tap to check.", w: 120, fs: 40, rows: [
      ["I want ___ apple.", "an"], ["I want ___ milk.", "—"], ["She has ___ pen.", "a"],
      ["We need ___ sugar.", "—"], ["He eats ___ egg every day.", "an"], ["Drink ___ water!", "—"] ] },

    /* ---------- VOCABULARY ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Food and drinks", menu: "New words: food and drinks", items: [
      ["I put <span class='ca'>sugar</span> in my tea.", "sugar = shakar"],
      ["We cook <span class='ca'>rice</span> for plov.", "rice = guruch"],
      ["Can I have some <span class='ca'>cheese</span>?", "cheese = pishloq"],
      ["Mum buys <span class='ca'>meat</span> at the bazaar.", "meat = go‘sht"],
      ["I like orange <span class='ca'>juice</span>.", "juice = sharbat"],
      ["Put some <span class='ca'>salt</span> on it.", "salt = tuz"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Containers: how to count the uncountable", items: [
      { bg: "skyb", w: "🍶", label: "a bottle of = bir shisha", en: "a bottle of water", uz: "bir shisha suv" },
      { bg: "peach", w: "🍵", label: "a cup of = bir piyola", en: "two cups of tea", uz: "ikki piyola choy" },
      { bg: "mint", w: "🍞", label: "a piece of = bir bo‘lak", en: "a piece of bread", uz: "bir bo‘lak non" },
      { bg: "butter", w: "🥛", label: "a glass of = bir stakan", en: "a glass of milk", uz: "bir stakan sut" } ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "More containers", items: [
      ["I buy <span class='ca'>a kilo of</span> rice.", "a kilo of = bir kilo"],
      ["We need <span class='ca'>a packet of</span> sugar.", "a packet of = bir paket"],
      ["She drinks <span class='ca'>a glass of</span> juice.", "a glass of = bir stakan"],
      ["Two <span class='ca'>loaves of</span> bread, please.", "a loaf of = bitta (butun) non"],
      ["<span class='ca'>A bowl of</span> soup, please.", "a bowl of = bir kosa"],
      ["He has <span class='ca'>a lot of</span> homework.", "a lot of = ko‘p"] ] },
    { t: "spot", bg: "sky", title: "Count it!", sub: "Pick a card. Say it with a container: “two bottles of water”.", size: 46,
      cards: ["water 🍶 ×2", "tea 🍵 ×3", "bread 🍞 ×1", "milk 🥛 ×2", "rice 🍚 ×1 kilo", "sugar 🧂 ×1 packet"] },

    /* ---------- SOME, HOW MANY / HOW MUCH ---------- */
    { t: "cols", eb: "some · biroz, bir nechta", title: "some: for both groups", menu: "some", cols: [
      { bg: "mint", label: "some + countable (-s)", lc: "g", fs: 38, lines: ["some apple<span class='ca'>s</span>", "some egg<span class='ca'>s</span>", "some friend<span class='ca'>s</span>"], uz: "bir nechta olma, tuxum, do’st" },
      { bg: "skyb", label: "some + uncountable", lc: "b", fs: 38, lines: ["some water", "some bread", "some money"], uz: "biroz suv, non, pul" } ],
      notes: ["I have some apples. · I have some milk.", "Not: some apple ✗"] },
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "How many? How much?", rows: [
      { chips: [["How many", "peach"], ["+ countable (-s)", "mint"], ["eggs do you need?", "skyb"]], uz: "Nechta tuxum kerak?" },
      { chips: [["How much", "butter"], ["+ uncountable", "mint"], ["water do you drink?", "skyb"]], uz: "Qancha suv ichasiz?" },
      { chips: [["How much", "butter"], ["is it?", "skyb"], ["→ It’s 5,000 so’m.", "peach"]], uz: "Bu qancha turadi? (narx)" } ],
      notes: ["many → you can count: How many apples?", "much → you can’t count: How much rice?"] },
    { t: "examples", eb: "Examples", title: "At the bazaar", items: [
      ["<span class='ca'>How many</span> tomatoes do you want? — Six, please.", "Nechta pomidor kerak? — Oltita."],
      ["<span class='ca'>How much</span> rice do you need? — Two kilos.", "Qancha guruch kerak? — Ikki kilo."],
      ["I’d like <span class='ca'>some</span> bread and <span class='ca'>some</span> eggs.", "Menga non va tuxum kerak."],
      ["<span class='ca'>How much</span> is a bottle of water? — 3,000 so’m.", "Bir shisha suv qancha? — 3000 so’m."],
      ["Can I have <span class='ca'>a cup of</span> tea, please?", "Bir piyola choy bera olasizmi?"],
      ["There is <span class='ca'>some</span> milk in the fridge.", "Muzlatgichda biroz sut bor."] ] },
    { t: "cols", eb: "is or are?", title: "There is… / There are…", cols: [
      { bg: "skyb", label: "Uncountable → is", lc: "b", fs: 38, lines: ["There <span class='ca'>is</span> some water.", "The rice <span class='ca'>is</span> hot.", "My money <span class='ca'>is</span> in my bag."], uz: "Sanalmaydigan so’z + is" },
      { bg: "mint", label: "Countable (-s) → are", lc: "g", fs: 38, lines: ["There <span class='ca'>are</span> some eggs.", "The apples <span class='ca'>are</span> red.", "My books <span class='ca'>are</span> in my bag."], uz: "Ko’plik + are" } ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Common mistakes", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 36, lines: ["two <span class='cn'>breads</span>", "<span class='cn'>a</span> water", "<span class='cn'>moneys</span>", "How <span class='cn'>many</span> milk?", "The rice <span class='cn'>are</span> hot."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 36, lines: ["two <span class='ca'>pieces of bread</span>", "<span class='ca'>some</span> water", "<span class='ca'>money</span>", "How <span class='ca'>much</span> milk?", "The rice <span class='ca'>is</span> hot."] },
      { bg: "butter", label: "Remember", fs: 36, lines: ["bread, money, rice:", "no a / an, no -s", "much + uncountable"], uz: "O’zbekchada “ikkita non”, inglizchada esa “two loaves of bread”." } ] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "many or much?", sub: "Say the full question. Tap to check.", w: 180, fs: 38, rows: [
      ["How ___ apples?", "many"], ["How ___ water?", "much"], ["How ___ students?", "many"],
      ["How ___ sugar?", "much"], ["How ___ eggs?", "many"], ["How ___ money?", "much"] ] },
    { t: "gaps", title: "Finish it", sub: "a bottle of, a cup of, a piece of, a kilo of… Tap to check.", w: 260, fs: 34, rows: [
      ["___ water 🍶", "a bottle of"], ["___ tea 🍵", "a cup of"], ["___ bread 🍞", "a piece of"],
      ["___ rice 🍚", "a kilo of"], ["___ milk 🥛", "a glass of"], ["___ soup 🥣", "a bowl of"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Menga biroz suv kerak.", "I need some water."],
      ["Nechta olma bor?", "How many apples are there?"],
      ["Bir piyola choy, iltimos.", "A cup of tea, please."],
      ["Qancha guruch kerak?", "How much rice do you need?"] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: a, an or some?", sub: "Make it right. Tap to check.", fs: 38, rows: [
      ["I want ___ orange.", "I want an orange."],
      ["Can I have ___ juice?", "Can I have some juice?"],
      ["She has ___ new phone.", "She has a new phone."],
      ["We need ___ eggs.", "We need some eggs."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I want a water.", "I want some water. / I want a bottle of water."],
      ["How many milk do you drink?", "How much milk do you drink?"],
      ["I have three breads.", "I have three pieces of bread."],
      ["He has a lot of moneys.", "He has a lot of money."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake: round 2", sub: "Harder ones! Tap to fix.", rows: [
      ["The rice are hot.", "The rice is hot."],
      ["There is some apples.", "There are some apples."],
      ["How much eggs do you need?", "How many eggs do you need?"],
      ["Can I have a cup of teas?", "Can I have a cup of tea?"] ] },
    { t: "spot", bg: "yel", title: "At the bazaar!", sub: "Pairs. A sells, B buys: “Hello! How much rice do you want?” — “Two kilos, please.” Then change.", size: 48,
      cards: [{ t: "rice · kilos", uz: "guruch" }, { t: "tomatoes", uz: "pomidorlar" }, { t: "bread · loaves", uz: "non" }, { t: "milk · bottles", uz: "sut" }, { t: "eggs", uz: "tuxumlar" }, { t: "sugar · packets", uz: "shakar" }] },
    { t: "spot", bg: "sky", title: "My breakfast", sub: "Pick a card. Tell the class. Use some, a, an, a cup of…", size: 46,
      cards: ["For breakfast I eat…", "For breakfast I drink…", "In my fridge there is…", "In my fridge there are…", "I never eat…", "My family needs…"] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say if a word is countable or uncountable", "use a / an only with countable words", "use some with both groups", "ask How many…? and How much…?", "count the uncountable: a bottle of, a cup of, a piece of", "use new words: rice, sugar, salt, cheese, meat, juice…"] },
    { t: "bye", chips: [["an apple", "peach"], ["some water", "mint"], ["How much?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "drinking a cup of tea", say: "You are drinking a cup of tea!" }, { cue: "eating some rice", say: "You are eating some rice!" },
      { cue: "pouring a glass of milk", say: "You are pouring a glass of milk!" }, { cue: "putting sugar in your tea", say: "You are putting sugar in your tea!" },
      { cue: "counting money", say: "You are counting money!" }, { cue: "cutting a piece of bread", say: "You are cutting a piece of bread!" },
      { cue: "eating an apple", say: "You are eating an apple!" }, { cue: "opening a bottle of water", say: "You are opening a bottle of water!" },
      { cue: "putting salt on food", say: "You are putting salt on your food!" }, { cue: "carrying a kilo of potatoes", say: "You are carrying potatoes!" },
      { cue: "eating a bowl of soup", say: "You are eating a bowl of soup!" }, { cue: "breaking two eggs", say: "You are breaking two eggs!" },
      { cue: "drinking orange juice", say: "You are drinking orange juice!" }, { cue: "buying meat at the bazaar", say: "You are buying meat!" }
    ],
    board: [
      { cat: "C or U?", qs: [["apple · water", "C · U"], ["rice · egg", "U · C"], ["money · book · bread", "U · C · U"]] },
      { cat: "a / an / —", qs: [["___ orange", "an orange"], ["___ milk", "— milk (no a)"], ["___ banana · ___ sugar", "a banana · — sugar"]] },
      { cat: "many / much", qs: [["How ___ eggs?", "many"], ["How ___ water?", "much"], ["How ___ people · How ___ money?", "many · much"]] },
      { cat: "Containers", qs: [["___ of tea 🍵", "a cup of tea"], ["___ of water 🍶", "a bottle of water"], ["___ of bread 🍞 · ___ of rice 🍚", "a piece of bread · a kilo of rice"]] },
      { cat: "New words", qs: [["“shakar” and “tuz”", "sugar · salt"], ["“pishloq” and “go‘sht”", "cheese · meat"], ["Say 3 uncountable foods.", "rice, bread, milk… (any)"]] },
      { cat: "Fix it", qs: [["a water", "some water / a bottle of water"], ["three breads", "three pieces of bread"], ["How many milk?", "How much milk?"]] }
    ],
    wheel: [
      { name: "Sort it", tasks: ["Say 3 countable foods.", "Say 3 uncountable foods.", "Say 3 things in your bag: countable!", "Say 3 drinks: are they countable?"] },
      { name: "Containers", tasks: ["Order: a bottle of… and a cup of…", "Say what is in your fridge with containers.", "Say: a piece of… a kilo of…", "Buy 3 things at the bazaar with containers."] },
      { name: "Questions", tasks: ["Ask a classmate a “How many…?” question.", "Ask a classmate a “How much…?” question.", "Ask the teacher: How much is…?", "Answer: How much water do you drink every day?"] },
      { name: "some", tasks: ["Make 2 sentences with some + countable.", "Make 2 sentences with some + uncountable.", "Say what you need for plov (use some).", "Say what is on your table now."] },
      { name: "Bazaar", tasks: ["Sell rice to a classmate.", "Buy bread and milk from a classmate.", "Ask the price of 2 things.", "Say your shopping list (5 things)."] },
      { name: "is / are", tasks: ["Make it right: The rice are hot.", "Say: There is… (uncountable) ×2", "Say: There are… (countable) ×2", "Fix: There is some apples."] }
    ],
    build: [
      { w: ["I", "need", "some", "water"], e: "." }, { w: ["How", "many", "eggs", "do", "you", "need"], e: "?" }, { w: ["How", "much", "rice", "do", "you", "want"], e: "?" },
      { w: ["Can", "I", "have", "a", "cup", "of", "tea"], e: "?" }, { w: ["There", "is", "some", "milk", "in", "the", "fridge"], e: "." },
      { w: ["There", "are", "some", "apples", "on", "the", "table"], e: "." }, { w: ["I", "eat", "an", "egg", "every", "morning"], e: "." },
      { w: ["Two", "bottles", "of", "water", "please"], e: "." }, { w: ["How", "much", "is", "the", "bread"], e: "?" }, { w: ["We", "need", "a", "kilo", "of", "rice"], e: "." }
    ],
    auction: [
      { s: "I want some water.", ok: true },
      { s: "Can I have a bread?", ok: false, fix: "Can I have some bread / a piece of bread?" },
      { s: "How many apples do you want?", ok: true },
      { s: "How many milk do you drink?", ok: false, fix: "How much milk do you drink?" },
      { s: "There is some rice in the bag.", ok: true },
      { s: "He has a lot of moneys.", ok: false, fix: "He has a lot of money." },
      { s: "I eat an egg every day.", ok: true },
      { s: "The rice are cold.", ok: false, fix: "The rice is cold." },
      { s: "Two cups of tea, please.", ok: true },
      { s: "There are some sugar.", ok: false, fix: "There is some sugar." },
      { s: "How much is a bottle of water?", ok: true },
      { s: "I need three breads.", ok: false, fix: "I need three pieces of bread / three loaves of bread." }
    ]
  }
};
