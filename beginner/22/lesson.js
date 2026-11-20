/* Beginner · Lesson 22 · Food and drink
   Teaches food and drink words and two fixed phrases (chunks, not yet the present simple):
   I like plov. · I don’t like fish. · I like tea. And you? — I like tea, too.
   New words: bread, plov, soup, meat, fish, apple, tea, coffee, water, milk, juice, cake.
   Recycles prices (lesson 21), commands with please (lesson 20), there is / are (lesson 16), plurals (lesson 9).
   Built for Monday 1 February 2027 (Group B · 15:30). */
window.LESSON = {
  id: "b22",
  n: 22,
  title: "Food and drink",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 22", title: "I like <span class='cy'>plov!</span>", lead: "Food and drink · Ovqat va ichimliklar", chips: [["Men palovni yaxshi ko’raman.", "peach"], ["Men baliqni yoqtirmayman.", "mint"], ["Choy yoki kofe?", "skyb"]] },
    { t: "goals", items: [
      ["Name food and drink", "bread, tea, plov…", "non, choy, palov…"],
      ["Say what you like", "I like tea.", "Men choyni yaxshi ko’raman."],
      ["Say what you don’t like", "I don’t like fish.", "Men baliqni yoqtirmayman."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: how much is it?", sub: "Teacher points at a price. Say it: “It’s forty-five thousand so’m.” · Narxni inglizcha ayting.", size: 64,
      cards: ["45,000 so’m", "12,000 so’m", "99,000 so’m", "3,000 so’m", "70,000 so’m", "18,000 so’m"] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Food · Ovqat", menu: "New words: food", items: [
      ["This <span class='ca'>bread</span> is from the bazaar.", "bread = non · Bu non bozordan."],
      ["My mum’s <span class='ca'>plov</span> is very good.", "plov = palov · Oyimning palovi juda zo’r."],
      ["There is <span class='ca'>soup</span> in the kitchen.", "soup = sho’rva · Oshxonada sho’rva bor."],
      ["There is <span class='ca'>meat</span> in plov.", "meat = go’sht · Palovda go’sht bor."],
      ["The <span class='ca'>fish</span> is on the table.", "fish = baliq · Baliq stolda."],
      ["There are five <span class='ca'>apples</span> on the table.", "an apple = olma · Stolda beshta olma bor."] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Drinks and cake · Ichimliklar va tort", menu: "New words: drinks", items: [
      ["Green <span class='ca'>tea</span>, please.", "tea = choy · Ko’k choy, iltimos."],
      ["Black <span class='ca'>coffee</span>, please.", "coffee = kofe · Qora kofe, iltimos."],
      ["Give me <span class='ca'>water</span>, please.", "water = suv · Menga suv bering, iltimos."],
      ["The <span class='ca'>milk</span> is in the fridge.", "milk = sut · Sut muzlatkichda."],
      ["Apple <span class='ca'>juice</span>, please.", "juice = sharbat · Olma sharbati, iltimos."],
      ["This <span class='ca'>cake</span> is for you!", "cake = tort · Bu tort siz uchun!"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Like or don’t like?", items: [
      { bg: "peach", w: "🍞", label: "bread = non", en: "I like bread.", uz: "Men nonni yaxshi ko’raman." },
      { bg: "mint", w: "🍵", label: "tea = choy", en: "I like green tea.", uz: "Men ko’k choyni yaxshi ko’raman." },
      { bg: "skyb", w: "🐟", label: "fish = baliq", en: "I don’t like fish.", uz: "Men baliqni yoqtirmayman." },
      { bg: "butter", w: "🍎", label: "an apple = olma", en: "I like apples.", uz: "Men olmani yaxshi ko’raman." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "I like… · I don’t like…", menu: "The rule", cols: [
      { bg: "mint", label: "I like 🙂", lc: "g", fs: 40, lines: ["I <span class='ca'>like</span> tea.", "I <span class='ca'>like</span> plov."], uz: "Yoqadigan narsa: I like + ovqat. Men choyni yaxshi ko’raman." },
      { bg: "peach", label: "I don’t like 🙁", lc: "r", fs: 40, lines: ["I <span class='cn'>don’t like</span> fish.", "I <span class='cn'>don’t like</span> milk."], uz: "Yoqmaydigan narsa: I don’t like + ovqat. Men baliqni yoqtirmayman." },
      { bg: "skyb", label: "And you?", lc: "b", fs: 40, lines: ["I like tea. <span class='cw'>And you?</span>", "I like tea, <span class='ca'>too</span>."], uz: "Do’stingizdan so’rang: Sizchi? — Men ham (too)." } ] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "I like / I don’t like + food", rows: [
      { chips: [["I", "skyb"], ["like", "mint"], ["plov.", "butter"]], uz: "Men palovni yaxshi ko’raman." },
      { chips: [["I", "skyb"], ["don’t like", "peach"], ["coffee.", "butter"]], uz: "Men kofeni yoqtirmayman." },
      { chips: [["I", "skyb"], ["like", "mint"], ["apples.", "butter"]], uz: "Men olmani yaxshi ko’raman." } ],
      notes: ["don’t = do not", "No “am”: ✗ I am like tea.", "apple → I like apples (-s)"] },
    { t: "examples", eb: "I like · 🙂", title: "Examples: I like…", menu: "Examples: I like", items: [
      ["I <span class='ca'>like</span> plov.", "Men palovni yaxshi ko’raman."],
      ["I <span class='ca'>like</span> green tea.", "Men ko’k choyni yaxshi ko’raman."],
      ["I <span class='ca'>like</span> Samarkand bread.", "Men Samarqand nonini yaxshi ko’raman."],
      ["I <span class='ca'>like</span> apples.", "Men olmani yaxshi ko’raman."],
      ["I <span class='ca'>like</span> my grandma’s soup.", "Men buvimning sho’rvasini yaxshi ko’raman."],
      ["I <span class='ca'>like</span> cake. And you?", "Men tortni yaxshi ko’raman. Sizchi?"] ] },
    { t: "examples", eb: "I don’t like · 🙁", title: "Examples: I don’t like…", menu: "Examples: I don’t like", items: [
      ["I <span class='cn'>don’t like</span> fish.", "Men baliqni yoqtirmayman."],
      ["I <span class='cn'>don’t like</span> coffee.", "Men kofeni yoqtirmayman."],
      ["I <span class='cn'>don’t like</span> milk.", "Men sutni yoqtirmayman."],
      ["I <span class='cn'>don’t like</span> black tea.", "Men qora choyni yoqtirmayman."],
      ["I like meat. I <span class='cn'>don’t like</span> fish.", "Men go’shtni yaxshi ko’raman. Baliqni yoqtirmayman."],
      ["I <span class='cn'>don’t like</span> apple juice.", "Men olma sharbatini yoqtirmayman."] ] },
    { t: "gaps", title: "Like or don’t like?", sub: "🙂 = like · 🙁 = don’t like. Tap to check.", w: 270, fs: 38, rows: [
      ["I ___ plov. 🙂", "like"], ["I ___ fish. 🙁", "don’t like"], ["I ___ green tea. 🙂", "like"],
      ["I ___ milk. 🙁", "don’t like"], ["I ___ apples. 🙂", "like"], ["I ___ coffee. 🙁", "don’t like"] ] },
    { t: "gaps", title: "Which food?", sub: "Say the word in English. Tap to check.", w: 220, fs: 38, rows: [
      ["I like ___. (non)", "bread"], ["I don’t like ___. (baliq)", "fish"], ["I like ___. (go’sht)", "meat"],
      ["Give me ___, please. (suv)", "water"], ["I like apple ___. (sharbat)", "juice"], ["I don’t like ___. (kofe)", "coffee"] ] },
    { t: "gaps", title: "Drinks and prices", sub: "Old and new together! Tap to check.", w: 260, fs: 36, rows: [
      ["___ much is the tea?", "How"], ["It’s five ___ so’m.", "thousand"], ["Green tea, ___. (iltimos)", "please"],
      ["I like tea. ___ you? (Sizchi?)", "And"], ["I like tea, ___. (ham)", "too"], ["___ me water, please.", "Give"] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 40, lines: ["I <span class='cn'>am like</span> tea.", "I <span class='cn'>not like</span> fish.", "I like <span class='cn'>apple</span>."], uz: "“am” kerak emas. “not” emas, “don’t”!" },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 40, lines: ["I <span class='ca'>like</span> tea.", "I <span class='ca'>don’t like</span> fish.", "I like <span class='ca'>apples</span>."], uz: "I like… · I don’t like… · Olma kabi sanaladigan narsalar: -s (apples)." } ] },

    /* ---------- PRACTICE ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men palovni yaxshi ko’raman.", "I like plov."],
      ["Men baliqni yoqtirmayman.", "I don’t like fish."],
      ["Ko’k choy, iltimos.", "Green tea, please."],
      ["Menga suv bering, iltimos.", "Give me water, please."],
      ["Men olmani yaxshi ko’raman. Sizchi?", "I like apples. And you?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I am like plov.", "I like plov."],
      ["I not like coffee.", "I don’t like coffee."],
      ["I like apple.", "I like apples."],
      ["I don’t likes milk.", "I don’t like milk."] ] },
    { t: "spot", bg: "sky", title: "Like or don’t like?", sub: "Pick a card. Say a true sentence: “I like…” or “I don’t like…”. · Rost gapni ayting.", size: 52,
      cards: [{ t: "🍲 plov", uz: "palov" }, { t: "🐟 fish", uz: "baliq" }, { t: "☕ coffee", uz: "kofe" }, { t: "🥛 milk", uz: "sut" }, { t: "🎂 cake", uz: "tort" }, { t: "🍎 apples", uz: "olma" }] },
    { t: "spot", bg: "yel", title: "Pairs: at the choyxona", sub: "A: “How much is the plov?” B: “It’s thirty-five thousand so’m.” A: “I like plov! Plov, please.” Then change. · Choyxonada.", size: 46,
      cards: [{ t: "🍲 plov · 35,000", uz: "palov" }, { t: "🍵 green tea · 5,000", uz: "ko’k choy" }, { t: "🥣 soup · 25,000", uz: "sho’rva" }, { t: "🍞 bread · 4,000", uz: "non" }, { t: "🧃 juice · 12,000", uz: "sharbat" }, { t: "🎂 cake · 30,000", uz: "tort" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["name 12 foods and drinks", "say “I like…”", "say “I don’t like…”", "ask “And you?” and answer “…, too.”", "ask the price of food: How much is the plov?"] },
    { t: "bye", chips: [["I like…", "peach"], ["I don’t like…", "mint"], ["And you?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "eat plov with a big spoon, happy face", say: "I like plov!" }, { cue: "drink hot tea from a small bowl (piyola)", say: "Tea!" },
      { cue: "smell fish, bad face", say: "I don’t like fish!" }, { cue: "eat an apple: crunch!", say: "an apple / apples" },
      { cue: "drink milk, white moustache", say: "Milk!" }, { cue: "drink coffee, eyes wide open", say: "Coffee!" },
      { cue: "break round bread with your hands", say: "Bread!" }, { cue: "eat soup with a spoon", say: "Soup!" },
      { cue: "blow out candles on a cake", say: "Cake!" }, { cue: "very thirsty, drink a lot", say: "Water, please!" },
      { cue: "drink juice, then bad face", say: "I don’t like juice!" }, { cue: "ask the seller with your hands", say: "How much is it?" }
    ],
    board: [
      { cat: "Food", qs: [["“non” in English", "bread"], ["“go’sht” in English", "meat"], ["“sho’rva” and “baliq” in English", "soup · fish"]] },
      { cat: "Drinks", qs: [["“choy” in English", "tea"], ["“suv” in English", "water"], ["“sut” and “sharbat” in English", "milk · juice"]] },
      { cat: "I like", qs: [["Say: Men palovni yaxshi ko’raman.", "I like plov."], ["Say 2 things you like.", "I like… (any 2 true)"], ["Answer: I like tea. And you?", "I like tea, too. / I don’t like tea."]] },
      { cat: "I don’t like", qs: [["Make it NO: I like fish.", "I don’t like fish."], ["Say: Men kofeni yoqtirmayman.", "I don’t like coffee."], ["Say 1 food you like and 1 you don’t like.", "I like… I don’t like… (any true)"]] },
      { cat: "Prices", qs: [["Ask the price of the plov.", "How much is the plov?"], ["Say 5,000 so’m.", "five thousand so’m"], ["Say 35,000 so’m.", "thirty-five thousand so’m"]] },
      { cat: "Fix it", qs: [["I am like tea.", "I like tea."], ["I not like milk.", "I don’t like milk."], ["I like apple.", "I like apples."]] }
    ],
    wheel: [
      { name: "Food", tasks: ["Say 3 foods.", "Say 3 drinks.", "Say 2 foods and 2 drinks.", "Say 5 foods and drinks fast!"] },
      { name: "I like", tasks: ["Say 1 food you like.", "Say 1 drink you like.", "Say 3 things you like.", "Say 1 food and 1 drink you like."] },
      { name: "I don’t like", tasks: ["Say 1 food you don’t like.", "Say 1 drink you don’t like.", "Say 2 things you don’t like.", "Say 1 like and 1 don’t like."] },
      { name: "And you?", tasks: ["Ask a classmate: I like tea. And you?", "Ask the teacher: I like plov. And you?", "Answer a classmate with “too”.", "Ask 2 classmates: I like coffee. And you?"] },
      { name: "Choyxona", tasks: ["Ask for green tea. Use please.", "Ask the price of the plov.", "Say: It’s twenty thousand so’m.", "Say: Here you are."] },
      { name: "Commands", tasks: ["Say: Give me water, please.", "Say a command with Don’t.", "Tell the class: sit down, please.", "Tell a classmate: give me an apple."] }
    ],
    build: [
      { w: ["I","like","plov"], e: "." }, { w: ["I","don’t","like","fish"], e: "." }, { w: ["Green","tea,","please"], e: "." },
      { w: ["I","like","tea.","And","you"], e: "?" }, { w: ["I","like","apples,","too"], e: "." }, { w: ["Give","me","water,","please"], e: "." },
      { w: ["How","much","is","the","soup"], e: "?" }, { w: ["There","is","meat","in","plov"], e: "." }
    ],
    auction: [
      { s: "I like green tea.", ok: true },
      { s: "I am like plov.", ok: false, fix: "I like plov." },
      { s: "I don’t like fish.", ok: true },
      { s: "I not like coffee.", ok: false, fix: "I don’t like coffee." },
      { s: "I like apple.", ok: false, fix: "I like apples." },
      { s: "Give me water, please.", ok: true },
      { s: "I don’t likes milk.", ok: false, fix: "I don’t like milk." },
      { s: "I like cake. And you?", ok: true },
      { s: "How many is the plov?", ok: false, fix: "How much is the plov?" },
      { s: "There is meat in plov.", ok: true }
    ]
  }
};
