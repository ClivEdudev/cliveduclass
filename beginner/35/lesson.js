/* Beginner · Lesson 35 · Some and any
   Teaches: some in yes sentences (some apples, some milk), any in no sentences and questions
   (There aren’t any eggs. · Is there any milk?), How many + plural? · shopping words:
   tomato, potato, onion, carrot, egg, rice, sugar, buy, a kilo, shopping list.
   Recycles: there is / are (16), have / has (13), present simple and do / does (25–27),
   present continuous (31–32), How much is it? (21), I like (22).
   Built for Thu 18 Mar 2027. */
window.LESSON = {
  id: "b35",
  n: 35,
  title: "Some and any",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 35", title: "Some and <span class='cy'>any</span>", lead: "Shopping · Xarid qilish", chips: [["Bir nechta olma bor.", "peach"], ["Sut bormi?", "mint"], ["Nechta tuxum bor?", "skyb"]] },
    { t: "goals", items: [
      ["Say what there is with some", "There are some apples.", "Bir nechta olma bor."],
      ["Use any in no sentences and questions", "Is there any milk?", "Sut bormi?"],
      ["Ask How many…?", "How many eggs are there?", "Nechta tuxum bor?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: in town", sub: "Lesson 34. Read a card. Then make a sentence: “The shop is next to the bank.” · Kartani o’qing va gap tuzing.",
      cards: [{ t: "Go straight.", uz: "To’g’riga yuring." }, { t: "Turn left.", uz: "Chapga buriling." }, { t: "Turn right.", uz: "O’ngga buriling." }, { t: "the bank", uz: "bank" }, { t: "the shop", uz: "do’kon" }, { t: "the park", uz: "bog’" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "At the bazaar", menu: "New words: at the bazaar", items: [
      ["These are <span class='ca'>tomatoes</span>.", "tomato = pomidor"],
      ["I like <span class='ca'>potatoes</span>.", "potato = kartoshka"],
      ["There are <span class='ca'>onions</span> in plov.", "onion = piyoz"],
      ["<span class='ca'>Carrots</span> are orange.", "carrot = sabzi"],
      ["I have two <span class='ca'>eggs</span>.", "egg = tuxum"],
      ["one tomato → two <span class='ca'>tomatoes</span>", "potato → potatoes (+ es)"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "In the shop", menu: "New words: in the shop", items: [
      ["I eat <span class='ca'>rice</span> every day.", "rice = guruch"],
      ["I don’t like <span class='ca'>sugar</span> in my tea.", "sugar = shakar"],
      ["My mother <span class='ca'>buys</span> bread every day.", "buy = sotib olmoq"],
      ["<span class='ca'>A kilo</span> of carrots, please.", "a kilo = bir kilo"],
      ["This is my <span class='ca'>shopping list</span>.", "shopping list = xaridlar ro’yxati"],
      ["We go <span class='ca'>shopping</span> on Sunday.", "go shopping = xarid qilishga bormoq"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "What can you buy?", items: [
      { bg: "peach", w: "🍅", label: "tomatoes = pomidor", en: "two red tomatoes", uz: "ikkita qizil pomidor" },
      { bg: "mint", w: "🥔", label: "potatoes = kartoshka", en: "a kilo of potatoes", uz: "bir kilo kartoshka" },
      { bg: "skyb", w: "🥚", label: "eggs = tuxum", en: "ten eggs", uz: "o’nta tuxum" },
      { bg: "butter", w: "🍚", label: "rice = guruch", en: "rice for plov", uz: "palov uchun guruch" } ] },

    /* ---------- TWO KINDS OF WORDS ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "Two kinds of words", menu: "Count or not?", cols: [
      { bg: "mint", label: "We can count", lc: "g", fs: 40, lines: ["one apple → two apples", "one egg → six eggs", "one onion → three onions"], uz: "Sanaladigan narsalar. Ko’plikda -s oladi: apples, eggs." },
      { bg: "skyb", label: "We can’t count", lc: "b", fs: 40, lines: ["milk · water · tea", "rice · sugar", "bread"], uz: "Sanalmaydigan narsalar. -s olmaydi: “two milks” demaymiz." } ],
      notes: ["apples, eggs → are (ko’p)", "milk, rice → is (bitta deb olinadi)"] },

    /* ---------- SOME ---------- */
    { t: "formula", bg: "ink", eb: "Some · Bir nechta, biroz", title: "Yes sentences: some", rows: [
      { chips: [["There are", "skyb"], ["some", "peach"], ["apples.", "mint"]], uz: "Bir nechta olma bor." },
      { chips: [["There is", "skyb"], ["some", "peach"], ["milk.", "mint"]], uz: "Biroz sut bor." },
      { chips: [["I have", "skyb"], ["some", "peach"], ["eggs.", "mint"]], uz: "Menda bir nechta tuxum bor." } ],
      notes: ["some = bir nechta / biroz", "some → ijobiy (+) gapda", "some apples (-s) · some milk (-s yo’q)"] },
    { t: "examples", eb: "Some", title: "Examples: some", items: [
      ["There are <span class='ca'>some</span> tomatoes on the table.", "Stolda bir nechta pomidor bor."],
      ["There is <span class='ca'>some</span> milk in the kitchen.", "Oshxonada biroz sut bor."],
      ["I have <span class='ca'>some</span> apples.", "Menda bir nechta olma bor."],
      ["Madina is buying <span class='ca'>some</span> carrots.", "Madina sabzi sotib olyapti."],
      ["We have <span class='ca'>some</span> rice for plov.", "Bizda palov uchun guruch bor."],
      ["There is <span class='ca'>some</span> bread on the table.", "Stolda biroz non bor."] ] },
    { t: "gaps", title: "A, an or some?", sub: "One thing → a / an. Many things or milk → some. Tap to check.", w: 220, fs: 38, rows: [
      ["There is ___ apple on the table.", "an"], ["I have ___ eggs.", "some"], ["There is ___ milk in the cup.", "some"],
      ["She has ___ phone.", "a"], ["We have ___ rice.", "some"], ["There are ___ onions in the bag.", "some"] ] },

    /* ---------- ANY ---------- */
    { t: "formula", bg: "ink", eb: "Any · Inkor va so’roq", title: "No sentences and questions: any", rows: [
      { chips: [["There aren’t", "skyb"], ["any", "peach"], ["eggs.", "mint"]], uz: "Umuman tuxum yo’q." },
      { chips: [["I don’t have", "skyb"], ["any", "peach"], ["milk.", "mint"]], uz: "Menda sut yo’q." },
      { chips: [["Are there", "skyb"], ["any", "peach"], ["apples?", "mint"]], uz: "Olma bormi?" } ],
      notes: ["any → inkor (–) gapda va so’roq (?) gapda", "O’zbekchada ko’pincha tarjima qilinmaydi", "any eggs (-s) · any milk (-s yo’q)"] },
    { t: "examples", eb: "Negative · Inkor", title: "Examples: not any", items: [
      ["There <span class='cn'>aren’t any</span> eggs.", "Umuman tuxum yo’q."],
      ["There <span class='cn'>isn’t any</span> sugar.", "Umuman shakar yo’q."],
      ["I <span class='cn'>don’t have any</span> bread.", "Menda non yo’q."],
      ["We <span class='cn'>don’t have any</span> potatoes.", "Bizda kartoshka yo’q."],
      ["Lola <span class='cn'>doesn’t have any</span> brothers.", "Lolaning aka-ukasi yo’q."],
      ["There <span class='cn'>aren’t any</span> tomatoes in the shop.", "Do’konda pomidor yo’q."] ] },
    { t: "examples", eb: "Questions · So’roq", title: "Examples: any?", items: [
      ["<span class='cw'>Are there any</span> apples? Yes, there are.", "Olma bormi? Ha, bor."],
      ["<span class='cw'>Is there any</span> milk? No, there isn’t.", "Sut bormi? Yo’q."],
      ["<span class='cw'>Do</span> you <span class='cw'>have any</span> eggs? Yes, I do.", "Sizda tuxum bormi? Ha, bor."],
      ["<span class='cw'>Does</span> Bobur <span class='cw'>have any</span> sisters? No, he doesn’t.", "Boburning opa-singlisi bormi? Yo’q."],
      ["<span class='cw'>Are there any</span> onions? No, there aren’t.", "Piyoz bormi? Yo’q."],
      ["<span class='cw'>Is there any</span> rice? Yes, there is.", "Guruch bormi? Ha, bor."] ] },
    { t: "cols", eb: "The rule · Qoida", title: "Some or any?", menu: "Some or any?", cols: [
      { bg: "mint", label: "+ Yes", lc: "g", fs: 36, lines: ["There are <span class='ca'>some</span> eggs.", "I have <span class='ca'>some</span> rice."], uz: "Ijobiy gap → some" },
      { bg: "peach", label: "– No", lc: "r", fs: 36, lines: ["There aren’t <span class='cn'>any</span> eggs.", "I don’t have <span class='cn'>any</span> rice."], uz: "Inkor gap → any" },
      { bg: "skyb", label: "? Question", lc: "b", fs: 36, lines: ["Are there <span class='cw'>any</span> eggs?", "Do you have <span class='cw'>any</span> rice?"], uz: "So’roq gap → any" } ],
      notes: ["+ → some", "– va ? → any"] },
    { t: "gaps", title: "Some or any?", sub: "Yes → some. No or question → any. Tap to check.", w: 220, fs: 38, rows: [
      ["There are ___ apples in the bag.", "some"], ["There aren’t ___ eggs.", "any"], ["Do you have ___ sugar?", "any"],
      ["I have ___ tomatoes.", "some"], ["Is there ___ milk?", "any"], ["We don’t have ___ potatoes.", "any"] ] },

    /* ---------- HOW MANY ---------- */
    { t: "formula", bg: "ink", eb: "How many? · Nechta?", title: "How many + things (-s)?", rows: [
      { chips: [["How many", "skyb"], ["apples", "peach"], ["are there?", "mint"]], uz: "Nechta olma bor?" },
      { chips: [["How many", "skyb"], ["brothers", "peach"], ["do you have?", "mint"]], uz: "Nechta aka-ukangiz bor?" },
      { chips: [["There are", "skyb"], ["five", "peach"], ["apples.", "mint"]], uz: "Beshta olma bor." } ],
      notes: ["How many = Nechta?", "How many + -s: How many eggs?", "How much is it? = Narxi qancha? (21-dars)"] },
    { t: "examples", eb: "How many?", title: "Examples: How many?", items: [
      ["<span class='cw'>How many</span> eggs are there? Six.", "Nechta tuxum bor? Oltita."],
      ["<span class='cw'>How many</span> students are there? Twelve.", "Nechta o’quvchi bor? O’n ikkita."],
      ["<span class='cw'>How many</span> sisters do you have? Two.", "Nechta opa-singlingiz bor? Ikkita."],
      ["<span class='cw'>How many</span> carrots are there? Ten.", "Nechta sabzi bor? O’nta."],
      ["<span class='cw'>How many</span> days are there in a week? Seven.", "Haftada necha kun bor? Yetti."],
      ["<span class='cw'>How many</span> apples does Lola have? Three.", "Lolada nechta olma bor? Uchta."] ] },
    { t: "gaps", title: "How many…?", sub: "Write the missing word. Tap to check.", w: 240, fs: 36, rows: [
      ["How many ___ are there? (egg)", "eggs"], ["How many ___ are there? (tomato)", "tomatoes"], ["How ___ apples do you have?", "many"],
      ["How many potatoes ___ there?", "are"], ["How many brothers ___ you have?", "do"], ["How many sisters ___ Madina have?", "does"] ] },

    /* ---------- BE CAREFUL ---------- */
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Some, any, -s", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 36, lines: ["There are <span class='cn'>any</span> eggs.", "I don’t have <span class='cn'>some</span> milk.", "How many <span class='cn'>apple</span> are there?", "I have some <span class='cn'>rices</span>."], uz: "Noto’g’ri" },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 36, lines: ["There are <span class='ca'>some</span> eggs.", "I don’t have <span class='ca'>any</span> milk.", "How many <span class='ca'>apples</span> are there?", "I have some <span class='ca'>rice</span>."], uz: "To’g’ri: + gapda some, – gapda any. How many dan keyin -s. rice, milk, sugar -s olmaydi." } ] },

    /* ---------- QUIZZES ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Stolda bir nechta olma bor.", "There are some apples on the table."],
      ["Biroz sut bor.", "There is some milk."],
      ["Menda non yo’q.", "I don’t have any bread."],
      ["Tuxum bormi?", "Are there any eggs? / Do you have any eggs?"],
      ["Nechta pomidor bor?", "How many tomatoes are there?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["There are any carrots.", "There are some carrots."],
      ["We don’t have some sugar.", "We don’t have any sugar."],
      ["How many egg are there?", "How many eggs are there?"],
      ["I have some rices.", "I have some rice."],
      ["Do you have any tomato?", "Do you have any tomatoes?"] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "sky", title: "My home, my bag", sub: "Pick a card. Say a true sentence. · Kartani tanlang va to’g’ri gap ayting.", size: 40,
      cards: [{ t: "At home there is some…", uz: "Uyda biroz … bor." }, { t: "There aren’t any … in my bag.", uz: "Sumkamda … yo’q." }, { t: "I have some … in my bag.", uz: "Sumkamda bir nechta … bor." },
        { t: "How many brothers do you have?", uz: "Nechta aka-ukangiz bor?" }, { t: "How many students are there here?", uz: "Bu yerda nechta o’quvchi bor?" }, { t: "Is there any bread at home?", uz: "Uyda non bormi?" }] },
    { t: "spot", bg: "yel", title: "At the bazaar", sub: "Pairs. A sells, B buys. B: “Do you have any…?” A: “Yes, I do. How many?” or “Sorry, no.” B: “How much is it?” · A – sotuvchi, B – xaridor.", size: 52,
      cards: [{ t: "tomatoes 🍅", uz: "pomidor" }, { t: "potatoes 🥔", uz: "kartoshka" }, { t: "onions 🧅", uz: "piyoz" }, { t: "carrots 🥕", uz: "sabzi" }, { t: "eggs 🥚", uz: "tuxum" }, { t: "apples 🍎", uz: "olma" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say what there is with some", "use any in no sentences", "ask questions with any", "ask “How many…?” and answer", "name tomatoes, potatoes, onions, carrots, eggs", "remember: milk, rice, sugar have no -s"] },
    { t: "bye", chips: [["some apples", "peach"], ["any milk?", "mint"], ["How many?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "eat an apple", say: "You are eating an apple!" },
      { cue: "buy tomatoes at the bazaar", say: "You are buying some tomatoes!" },
      { cue: "drink a glass of milk", say: "You are drinking some milk!" },
      { cue: "cook plov in a big kazan", say: "You are cooking plov!" },
      { cue: "look in your bag: it’s empty, sad face", say: "There aren’t any apples!" },
      { cue: "look in a cup: it’s empty, sad face", say: "There isn’t any milk!" },
      { cue: "count eggs with your finger", say: "How many eggs are there?" },
      { cue: "show 5 fingers, point at the apples", say: "There are five apples." },
      { cue: "pay money at the shop", say: "How much is it?" },
      { cue: "write a shopping list", say: "You are writing a shopping list!" },
      { cue: "eat bread", say: "You are eating some bread!" },
      { cue: "say no to sugar in your tea", say: "No sugar, please!" }
    ],
    board: [
      { cat: "New words", qs: [["“pomidor” in English", "tomato · tomatoes"], ["“piyoz” and “sabzi” in English", "onion · carrot"], ["Say 3 things in plov.", "rice, carrots, onions (meat…)"]] },
      { cat: "Some", qs: [["There are ___ apples.", "some"], ["Make a sentence: I have / some / eggs", "I have some eggs."], ["Say 2 things with some at your home.", "There is some … · There are some … (any true)"]] },
      { cat: "Any: no", qs: [["There aren’t ___ eggs.", "any"], ["Make it NO: There are some apples.", "There aren’t any apples."], ["Make it NO: I have some milk.", "I don’t have any milk."]] },
      { cat: "Any: ?", qs: [["___ there any milk?", "Is"], ["Make a question: There are some eggs.", "Are there any eggs?"], ["Short answer (no): Do you have any sugar?", "No, I don’t."]] },
      { cat: "How many?", qs: [["How many ___ are there? (egg)", "eggs"], ["“Nechta olma bor?” in English", "How many apples are there?"], ["How many days are there in a week?", "There are seven."]] },
      { cat: "Fix it", qs: [["There are any apples.", "There are some apples."], ["I have some rices.", "I have some rice."], ["How many tomato do you have?", "How many tomatoes do you have?"]] }
    ],
    wheel: [
      { name: "My kitchen", tasks: ["Say 1 sentence: There is some…", "Say 1 sentence: There aren’t any…", "Ask a friend: Is there any milk at home?", "Say 3 things in plov."] },
      { name: "Bazaar", tasks: ["Ask: Do you have any tomatoes?", "Answer: Yes, I do. / No, I don’t.", "Ask the price: How much is it?", "Say: A kilo of potatoes, please."] },
      { name: "How many?", tasks: ["Ask a friend: How many brothers…?", "How many students are here? Count!", "How many windows are there?", "Ask the teacher a How many… question."] },
      { name: "Some", tasks: ["Say 2 sentences with some.", "Say: I have some … in my bag.", "Plural: tomato → ? · potato → ?", "Spell: onions."] },
      { name: "Any", tasks: ["Say 2 sentences with not any.", "Say: There aren’t any … in this room.", "Ask a question with any.", "Make it NO: I have some eggs."] },
      { name: "Words", tasks: ["Say 4 new words.", "Spell: carrot.", "“guruch” and “shakar” in English?", "What colour are tomatoes?"] }
    ],
    build: [
      { w: ["There","are","some","apples"], e: "." },
      { w: ["I","don’t","have","any","milk"], e: "." },
      { w: ["Are","there","any","eggs"], e: "?" },
      { w: ["How","many","eggs","are","there"], e: "?" },
      { w: ["We","have","some","rice"], e: "." },
      { w: ["Do","you","have","any","tomatoes"], e: "?" },
      { w: ["There","isn’t","any","sugar"], e: "." },
      { w: ["How","many","sisters","do","you","have"], e: "?" }
    ],
    auction: [
      { s: "There are some carrots.", ok: true },
      { s: "There are any onions.", ok: false, fix: "There are some onions." },
      { s: "Is there any milk?", ok: true },
      { s: "I don’t have some bread.", ok: false, fix: "I don’t have any bread." },
      { s: "How many apples are there?", ok: true },
      { s: "How many egg do you have?", ok: false, fix: "How many eggs do you have?" },
      { s: "We have some rice for plov.", ok: true },
      { s: "There is some sugars.", ok: false, fix: "There is some sugar." },
      { s: "Do you have any potatoes?", ok: true },
      { s: "There aren’t some tomatoes.", ok: false, fix: "There aren’t any tomatoes." }
    ]
  }
};
