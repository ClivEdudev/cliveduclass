/* Lesson 11 · Some and any
   Food words, countable and uncountable nouns (an apple, two apples · rice, milk: no a / an, no -s),
   a / an with one countable thing, some in positive sentences, any in negatives and questions
   (There are some eggs. There isn’t any milk. Is there any sugar? Do you have any bread?),
   Can I have some…, please? and containers (a glass of milk, a cup of tea, a kilo of rice).
   Recycles there is / there are (lesson 2), the present simple and continuous (lessons 5, 7–8),
   prepositions of place (lesson 9) and can (lesson 1). How much / How many is lesson 13.
   Uzbek: bir nechta / bir oz · …yo’q · …bormi? · sanaladigan va sanalmaydigan otlar.
   Built for Friday 27 November 2026. */
window.LESSON = {
  n: 11,
  title: "Some and any",
  slides: [
    { t: "cover", title: "Is there <span class='cy'>any</span> milk?", lead: "Some and any: food, countable and uncountable · Some va any", chips: [["Stolda bir nechta olma bor.", "peach"], ["Muzlatgichda sut yo’q.", "mint"], ["Shakar bormi?", "skyb"]] },
    { t: "goals", items: [
      ["Say what there is with some", "There are some apples on the table.", "Stolda bir nechta olma bor."],
      ["Say what there isn’t with any", "There isn’t any milk in the fridge.", "Muzlatgichda sut yo’q."],
      ["Ask with any and ask for things with some", "Is there any bread? Can I have some tea, please?", "Non bormi? Menga choy bera olasizmi?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: what’s in your fridge?", sub: "Pick a card. Say the word in English. Is it in your fridge at home now?",
      cards: [{ t: "milk", uz: "sut" }, { t: "eggs", uz: "tuxum" }, { t: "bread", uz: "non" }, { t: "apples", uz: "olma" }, { t: "meat", uz: "go’sht" }, { t: "water", uz: "suv" }] },

    /* ---------- COUNTABLE AND UNCOUNTABLE ---------- */
    { t: "cols", eb: "When do we use it?", title: "Can you count it?", menu: "Countable and uncountable", cols: [
      { bg: "mint", label: "Countable · Sanaladigan", lc: "g", fs: 38, lines: ["<span class='ca'>an</span> apple → two apple<span class='ca'>s</span>", "<span class='ca'>an</span> egg → six egg<span class='ca'>s</span>", "<span class='ca'>a</span> tomato → three tomato<span class='ca'>es</span>"], uz: "Sanash mumkin: bitta, ikkita… a / an va ko’plikda -s oladi." },
      { bg: "skyb", label: "Uncountable · Sanalmaydigan", lc: "b", fs: 38, lines: ["milk · water · tea", "rice · bread · sugar", "meat · money"], uz: "Sanab bo’lmaydi. a / an va -s olmaydi: “two milks”, “a rice” deb aytmaymiz." },
      { bg: "peach", label: "How to count it", lc: "r", fs: 38, lines: ["<span class='ca'>a glass of</span> milk", "<span class='ca'>a cup of</span> tea", "<span class='ca'>a kilo of</span> rice"], uz: "Sanalmaydigan narsani idish yoki o’lchov bilan sanaymiz: bir stakan sut." } ],
      notes: ["Uzbek: beshta olma · English: five apples (-s!)", "bread, rice, money: no -s"] },
    { t: "formula", bg: "ink", eb: "The rule", title: "some (+) · any (− and ?)", rows: [
      { chips: [["There are", "skyb"], ["some", "peach"], ["apples.", "mint"]], uz: "Bir nechta olma bor." },
      { chips: [["There is", "skyb"], ["some", "peach"], ["milk.", "mint"]], uz: "Bir oz sut bor." },
      { chips: [["There aren’t", "skyb"], ["any", "peach"], ["eggs.", "mint"]], uz: "Tuxum yo’q." },
      { chips: [["Is there", "skyb"], ["any", "peach"], ["bread?", "mint"]], uz: "Non bormi?" } ],
      notes: ["some → yes sentences (+)", "any → no sentences (−) and questions (?)", "some / any + plural (apples) or uncountable (milk)", "Uzbek: some = bir nechta / bir oz (often no word!)"] },
    { t: "table", eb: "Plural or uncountable", title: "Is or are? Some or any?", head: ["", "Plural (eggs)", "Uncountable (rice)", "Uzbek"], rows: [
      ["+", "There are <b class='ca'>some</b> eggs.", "There is <b class='ca'>some</b> rice.", "Bir nechta tuxum bor. · Bir oz guruch bor."],
      ["−", "There aren’t <b class='cn'>any</b> eggs.", "There isn’t <b class='cn'>any</b> rice.", "Tuxum yo’q. · Guruch yo’q."],
      ["?", "Are there <b class='cw'>any</b> eggs?", "Is there <b class='cw'>any</b> rice?", "Tuxum bormi? · Guruch bormi?"],
      ["one", "There is <b class='ca'>an</b> egg.", "—", "Bitta tuxum bor."] ],
      notes: ["Plural → are · Uncountable → is", "a / an → only ONE countable thing"] },
    { t: "examples", eb: "Positive", title: "Examples: some", items: [
      ["There are <span class='ca'>some</span> apples on the table.", "Stolda bir nechta olma bor."],
      ["There is <span class='ca'>some</span> milk in the fridge.", "Muzlatgichda bir oz sut bor."],
      ["Mum is buying <span class='ca'>some</span> carrots at the bazaar.", "Onam bozordan sabzi sotib olyapti."],
      ["I need <span class='ca'>some</span> rice for plov.", "Palov uchun menga guruch kerak."],
      ["Aziz drinks <span class='ca'>some</span> water after football.", "Aziz futboldan keyin suv ichadi."],
      ["Lola has <span class='ca'>some</span> sweets in her bag.", "Lolaning sumkasida bir nechta konfet bor."] ] },
    { t: "gaps", title: "A, an or some?", sub: "One thing, or many / uncountable? Tap to check.", w: 200, fs: 38, rows: [
      ["There is ___ apple on the table.", "an"], ["I want ___ water.", "some"], ["There is ___ egg in the fridge.", "an"],
      ["We need ___ tomatoes for the salad.", "some"], ["She has ___ banana.", "a"], ["There is ___ bread on the table.", "some"] ] },
    { t: "gaps", title: "One → many", sub: "Write the plural. Careful with the spelling! Tap to check.", w: 300, fs: 36, rows: [
      ["one apple → three ___", "apples"], ["one tomato → five ___", "tomatoes"], ["one potato → two ___", "potatoes"],
      ["one cherry → ten ___", "cherries"], ["one egg → six ___", "eggs"], ["a glass of milk → two ___ of milk", "glasses"] ] },

    /* ---------- VOCABULARY ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "At the bazaar", menu: "New words: at the bazaar", items: [
      ["There are some <span class='ca'>potatoes</span> in the bag.", "potato = kartoshka"],
      ["I need some <span class='ca'>tomatoes</span> for the salad.", "tomato = pomidor"],
      ["Mum is buying some <span class='ca'>cucumbers</span>.", "cucumber = bodring"],
      ["There are some <span class='ca'>grapes</span> on the plate.", "grapes = uzum"],
      ["These <span class='ca'>melons</span> are from Khorezm.", "melon = qovun"],
      ["There are some <span class='ca'>pomegranates</span> in the box.", "pomegranate = anor"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "In the kitchen", menu: "New words: in the kitchen", items: [
      ["We need some <span class='ca'>flour</span> for samsa.", "flour = un"],
      ["I drink tea with <span class='ca'>sugar</span>.", "sugar = shakar"],
      ["There isn’t any <span class='ca'>salt</span> in the soup.", "salt = tuz"],
      ["Is there any <span class='ca'>butter</span>?", "butter = sariyog’"],
      ["There is some <span class='ca'>cheese</span> in the fridge.", "cheese = pishloq"],
      ["Dad is putting some <span class='ca'>oil</span> in the kazan.", "oil = yog’ (o’simlik yog’i)"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "A glass of, a cup of…", items: [
      { bg: "peach", w: "🥛", label: "a glass of milk = bir stakan sut", en: "I drink a glass of milk every morning.", uz: "Har kuni ertalab bir stakan sut ichaman." },
      { bg: "mint", w: "🍵", label: "a cup of tea = bir piyola choy", en: "Grandpa drinks a cup of tea after lunch.", uz: "Bobom tushlikdan keyin bir piyola choy ichadi." },
      { bg: "skyb", w: "💧", label: "a bottle of water = bir shisha suv", en: "There is a bottle of water in my bag.", uz: "Sumkamda bir shisha suv bor." },
      { bg: "butter", w: "🍚", label: "a kilo of rice = bir kilo guruch", en: "We need a kilo of rice for plov.", uz: "Palov uchun bir kilo guruch kerak." } ] },
    { t: "spot", bg: "sky", title: "Look around the room!", sub: "Pick a card. Finish the sentence about this room or your bag.", size: 46,
      cards: ["There are some… in this room.", "There aren’t any… in this room.", "In my bag there is some…", "In my bag there are some…", "Is there any… in your bag?", "Are there any… on the teacher’s desk?"] },

    /* ---------- NEGATIVE ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "not + any", rows: [
      { chips: [["There", "skyb"], ["isn’t", "peach"], ["any", "mint"], ["milk.", "butter"]], uz: "Sut yo’q." },
      { chips: [["There", "skyb"], ["aren’t", "peach"], ["any", "mint"], ["eggs.", "butter"]], uz: "Tuxum yo’q." },
      { chips: [["I", "skyb"], ["don’t have", "peach"], ["any", "mint"], ["money.", "butter"]], uz: "Menda pul yo’q." } ],
      notes: ["isn’t any · aren’t any · don’t have any", "Never: There isn’t some milk.", "Uzbek “yo’q” → not … any"] },
    { t: "examples", eb: "Negative", title: "Examples: not … any", items: [
      ["There <span class='cn'>isn’t any</span> bread at home.", "Uyda non yo’q."],
      ["There <span class='cn'>aren’t any</span> apples in the bag.", "Sumkada olma yo’q."],
      ["I <span class='cn'>don’t have any</span> money today.", "Bugun menda pul yo’q."],
      ["We <span class='cn'>don’t need any</span> sugar, thank you.", "Bizga shakar kerak emas, rahmat."],
      ["The shop <span class='cn'>doesn’t have any</span> melons today.", "Bugun do’konda qovun yo’q."],
      ["There <span class='cn'>isn’t any</span> salt in the soup!", "Sho’rvada tuz yo’q!"] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "Is there any…? Are there any…?", rows: [
      { chips: [["Is there", "peach"], ["any", "mint"], ["sugar?", "skyb"]], uz: "Shakar bormi?" },
      { chips: [["Are there", "peach"], ["any", "mint"], ["tomatoes?", "skyb"]], uz: "Pomidor bormi?" },
      { chips: [["Do you have", "peach"], ["any", "mint"], ["bread?", "skyb"]], uz: "Sizda non bormi?" } ],
      notes: ["Questions → any", "Asking for something politely → some: Can I have some water, please?", "Uzbek: …bormi?"] },
    { t: "cols", eb: "Short answers · Qisqa javoblar", title: "Yes, there is. No, there aren’t.", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 36, lines: ["<span class='cw'>Is there</span> any milk?", "<span class='cw'>Are there</span> any eggs?", "<span class='cw'>Do</span> you have any bread?"] },
      { bg: "mint", label: "Yes", lc: "g", fs: 36, lines: ["Yes, there <span class='ca'>is</span>.", "Yes, there <span class='ca'>are</span>.", "Yes, I <span class='ca'>do</span>."] },
      { bg: "peach", label: "No", lc: "r", fs: 36, lines: ["No, there <span class='cn'>isn’t</span>.", "No, there <span class='cn'>aren’t</span>.", "No, I <span class='cn'>don’t</span>."] } ],
      notes: ["Longer: Yes, there are some. · No, there aren’t any.", "Never: “Yes, there’s.”"] },
    { t: "examples", eb: "Wh- questions", title: "What? Where? Can I…?", menu: "Wh- questions", items: [
      ["<span class='cw'>What</span> is there in the fridge? — There is some cheese.", "Muzlatgichda nima bor? — Bir oz pishloq bor."],
      ["<span class='cw'>Where</span> is the sugar? — It’s next to the tea.", "Shakar qayerda? — Choyning yonida."],
      ["<span class='cw'>What</span> do you need for plov? — Some rice, meat, carrots and oil.", "Palov uchun nima kerak? — Guruch, go’sht, sabzi va yog’."],
      ["<span class='cw'>Can</span> I have some water, please? — Yes, of course.", "Menga suv bera olasizmi? — Ha, albatta."],
      ["<span class='cw'>What</span> fruit do you like? — I like grapes and melons.", "Qanday mevani yoqtirasiz? — Uzum va qovunni yoqtiraman."],
      ["<span class='cw'>Where</span> can I buy some bread? — At the bazaar.", "Qayerdan non sotib olsam bo’ladi? — Bozordan."] ] },
    { t: "quad", eb: "Key words · Asosiy so’zlar", title: "A, an, some, any", items: [
      { bg: "peach", w: "<span style='font-size:76px'>a / an</span>", label: "bitta (sanaladigan)", en: "I eat an apple every day.", uz: "Har kuni bitta olma yeyman." },
      { bg: "mint", w: "<span style='font-size:84px'>some</span>", label: "bir nechta / bir oz (+)", en: "There is some tea in the teapot.", uz: "Choynakda bir oz choy bor." },
      { bg: "skyb", w: "<span style='font-size:84px'>any</span>", label: "inkor (−) va so’roq (?) gapda", en: "Is there any juice?", uz: "Sharbat bormi?" },
      { bg: "butter", w: "<span style='font-size:54px;line-height:1.05;display:block'>Can I have<br>some…?</span>", label: "… bera olasizmi?", en: "Can I have some bread, please?", uz: "Menga non bera olasizmi?" } ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Common mistakes", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 34, lines: ["There isn’t <span class='cn'>some</span> bread.", "I want <span class='cn'>a</span> rice.", "There <span class='cn'>are</span> some milk.", "five <span class='cn'>apple</span>", "<span class='cn'>moneys</span> · <span class='cn'>breads</span>"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 34, lines: ["There isn’t <span class='ca'>any</span> bread.", "I want <span class='ca'>some</span> rice.", "There <span class='ca'>is</span> some milk.", "five <span class='ca'>apples</span>", "<span class='ca'>money</span> · <span class='ca'>bread</span>"] } ],
      notes: ["Uzbek “Non yo’q.” → There isn’t any bread. (not some)", "Uzbek “beshta olma” → five apples (-s!)"] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "Some or any?", sub: "Yes sentence, no sentence or question? Tap to check.", w: 200, fs: 36, rows: [
      ["There are ___ grapes on the plate.", "some"], ["Is there ___ sugar in my tea?", "any"], ["We don’t have ___ potatoes.", "any"],
      ["I want ___ cheese, please.", "some"], ["Are there ___ melons at the bazaar?", "any"], ["Can I have ___ water, please?", "some"] ] },
    { t: "gaps", title: "Is, are, isn’t, aren’t, any…", sub: "One word in each gap. Tap to check.", w: 200, fs: 36, rows: [
      ["There ___ some flour in the bag.", "is"], ["There ___ any tomatoes. (not)", "aren’t"], ["___ there any butter?", "Is"],
      ["___ there any cucumbers?", "Are"], ["There ___ any salt. (not)", "isn’t"], ["My sister doesn’t have ___ money.", "any"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Stolda bir nechta olma bor.", "There are some apples on the table."],
      ["Muzlatgichda sut yo’q.", "There isn’t any milk in the fridge."],
      ["Shakar bormi?", "Is there any sugar?"],
      ["Palov uchun menga guruch kerak.", "I need some rice for plov."],
      ["Menda pul yo’q.", "I don’t have any money."],
      ["Menga choy bera olasizmi?", "Can I have some tea, please?"] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: make it negative and a question", sub: "Say both. Tap to check.", fs: 36, rows: [
      ["There is some bread.", "There isn’t any bread. · Is there any bread?"],
      ["There are some eggs.", "There aren’t any eggs. · Are there any eggs?"],
      ["You have some money.", "You don’t have any money. · Do you have any money?"],
      ["She has some sugar.", "She doesn’t have any sugar. · Does she have any sugar?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["There isn’t some milk.", "There isn’t any milk."],
      ["I have three apple.", "I have three apples."],
      ["There are some rice.", "There is some rice."],
      ["Is there any eggs?", "Are there any eggs?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake: round 2", sub: "Harder ones! Tap to fix.", rows: [
      ["I need a rice for plov.", "I need some rice for plov."],
      ["We don’t have some sugar.", "We don’t have any sugar."],
      ["Can I have any bread, please?", "Can I have some bread, please?"],
      ["She buys some breads.", "She buys some bread."] ] },
    { t: "spot", bg: "sky", title: "My kitchen", sub: "Pick a card. Finish the sentence about your home.", size: 48,
      cards: ["In my fridge there is some…", "In my fridge there aren’t any…", "For breakfast I have some…", "For plov we need some…", "At home we don’t have any…", "My favourite fruit is…"] },
    { t: "spot", bg: "yel", title: "At the bazaar", sub: "Pairs. A (buyer): “Do you have any…?” B (seller): “Yes, I do!” or “Sorry, I don’t have any.” A: “Can I have a kilo, please?” Then change!", size: 44,
      cards: [{ t: "tomatoes", uz: "pomidor" }, { t: "grapes", uz: "uzum" }, { t: "melons", uz: "qovun" }, { t: "potatoes", uz: "kartoshka" }, { t: "cheese", uz: "pishloq" }, { t: "honey", uz: "asal" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say if a food word is countable or uncountable", "use a / an with one thing: an apple, a melon", "use some in yes sentences: There are some eggs.", "use any in no sentences and questions: Is there any milk?", "ask “Can I have some…, please?”", "use new words: potatoes, grapes, flour, sugar, salt, cheese…"] },
    { t: "bye", chips: [["There is some tea.", "peach"], ["There aren’t any eggs.", "mint"], ["Is there any bread?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "eat an apple", say: "You are eating an apple!" },
      { cue: "drink a glass of milk", say: "You are drinking a glass of milk!" },
      { cue: "drink a cup of hot tea", say: "You are drinking a cup of tea!" },
      { cue: "cut some tomatoes", say: "You are cutting some tomatoes!" },
      { cue: "put some salt in the soup", say: "You are putting some salt in the soup!" },
      { cue: "put some sugar in your tea", say: "You are putting some sugar in your tea!" },
      { cue: "open the fridge: it is empty!", say: "There isn’t any food in the fridge!" },
      { cue: "look in your bag: no money!", say: "You don’t have any money!" },
      { cue: "buy some grapes at the bazaar", say: "You are buying some grapes!" },
      { cue: "carry a big, heavy melon", say: "You are carrying a melon!" },
      { cue: "cook plov in a big kazan", say: "You are cooking plov!" },
      { cue: "eat soup: no salt! (make a face)", say: "There isn’t any salt in the soup!" },
      { cue: "make samsa with flour", say: "You are making samsa! You need some flour." },
      { cue: "wash some potatoes", say: "You are washing some potatoes!" },
      { cue: "eat a banana", say: "You are eating a banana!" },
      { cue: "ask for water in a café (point and smile)", say: "Can I have some water, please?" }
    ],
    board: [
      { cat: "A, an or some?", qs: [["___ apple", "an"], ["___ melon · ___ water", "a · some"], ["___ egg · ___ rice · ___ tomatoes", "an · some · some"]] },
      { cat: "Some or any?", qs: [["There are ___ grapes.", "some"], ["Is there ___ milk?", "any"], ["There aren’t ___ eggs. · Can I have ___ tea?", "any · some"]] },
      { cat: "Can you count it?", qs: [["apple: countable or uncountable?", "countable (an apple, two apples)"], ["rice · egg · water", "uncountable · countable · uncountable"], ["money · tomato · bread · cheese", "uncountable · countable · uncountable · uncountable"]] },
      { cat: "Uzbek → English", qs: [["“shakar”", "sugar"], ["“tuz” · “un”", "salt · flour"], ["“Muzlatgichda pishloq yo’q.”", "There isn’t any cheese in the fridge."]] },
      { cat: "Questions", qs: [["Ask about milk.", "Is there any milk?"], ["Short answer (no): Are there any eggs?", "No, there aren’t."], ["You are at the bazaar. Ask for some grapes politely.", "Can I have some grapes, please?"]] },
      { cat: "Fix it", qs: [["three apple", "three apples"], ["There isn’t some bread.", "There isn’t any bread."], ["There are some rice.", "There is some rice."]] }
    ],
    wheel: [
      { name: "My fridge", tasks: ["Say 3 things there are in your fridge.", "Say: “There aren’t any … in my fridge.” (2 things)", "Ask a classmate: “Is there any … in your fridge?”", "Say what you have for breakfast."] },
      { name: "Plov", tasks: ["Say what we need for plov (4 things).", "Say who cooks plov in your family and when.", "Say what you put in a salad.", "Say: “There isn’t any … in my kitchen.”"] },
      { name: "Bazaar", tasks: ["Ask a seller: “Do you have any …?”", "Say 3 fruits you can buy at the bazaar.", "Say: “Can I have a kilo of …, please?”", "Say what your family buys at the bazaar every week."] },
      { name: "Count it!", tasks: ["Say 3 countable food words.", "Say 3 uncountable food words.", "Say: one tomato → three …, one potato → two …", "Say: a glass of …, a cup of …, a bottle of …"] },
      { name: "Questions", tasks: ["Ask the teacher: “Do you have any …?”", "Ask a classmate: “Are there any … in your bag?”", "Ask: “Is there any … in this room?”", "Answer: “Are there any shops near your house?”"] },
      { name: "This room", tasks: ["Say: “There are some … on the teacher’s desk.”", "Say: “There aren’t any … in this room.”", "Say what is next to your bag.", "Say what a classmate is doing now."] }
    ],
    build: [
      { w: ["There","are","some","apples","on","the","table"], e: "." }, { w: ["There","isn’t","any","milk"], e: "." }, { w: ["Is","there","any","sugar"], e: "?" },
      { w: ["Are","there","any","eggs","in","the","fridge"], e: "?" }, { w: ["I","need","some","rice","for","plov"], e: "." },
      { w: ["We","don’t","have","any","bread"], e: "." }, { w: ["Do","you","have","any","tomatoes"], e: "?" },
      { w: ["My","mother","is","buying","some","grapes"], e: "." }, { w: ["I","drink","a","glass","of","milk","every","day"], e: "." },
      { w: ["There","is","some","cheese","next","to","the","bread"], e: "." }
    ],
    auction: [
      { s: "There are some grapes on the plate.", ok: true },
      { s: "There isn’t some salt in the soup.", ok: false, fix: "There isn’t any salt in the soup." },
      { s: "Is there any sugar?", ok: true },
      { s: "I need three tomato.", ok: false, fix: "I need three tomatoes." },
      { s: "We don’t have any flour.", ok: true },
      { s: "There are some milk in the fridge.", ok: false, fix: "There is some milk in the fridge." },
      { s: "Can I have some water, please?", ok: true },
      { s: "I want a rice.", ok: false, fix: "I want some rice." },
      { s: "Are there any potatoes?", ok: true },
      { s: "Is there any eggs?", ok: false, fix: "Are there any eggs?" },
      { s: "My mother buys some cheese at the bazaar.", ok: true },
      { s: "We have some moneys.", ok: false, fix: "We have some money." }
    ]
  }
};
