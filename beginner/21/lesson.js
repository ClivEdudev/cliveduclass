/* Beginner · Lesson 21 · Numbers to 100 and prices
   Teaches the numbers 21–100 (twenty-one… a hundred), -teen or -ty, and prices in so’m:
   How much is it? · It’s fifty thousand so’m.
   New words: thirty, forty… ninety, a hundred, thousand, How much…?, so’m, cheap, expensive, Here you are.
   Recycles numbers 1–20 and How old (lesson 3), this / that (lesson 14), commands (lesson 20).
   Built for Thursday 28 January 2027 (Group B · 15:30). */
window.LESSON = {
  id: "b21",
  n: 21,
  title: "Numbers to 100 and prices",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 21", title: "How much <span class='cy'>is it?</span>", lead: "Numbers 21–100 and prices · 21 dan 100 gacha sonlar va narxlar", chips: [["Bu qancha turadi?", "peach"], ["Ellik ming so’m.", "mint"], ["Yigirma bir, yigirma ikki…", "skyb"]] },
    { t: "goals", items: [
      ["Count from 21 to 100", "twenty-one, twenty-two…", "yigirma bir, yigirma ikki…"],
      ["Ask the price", "How much is it?", "Bu qancha turadi?"],
      ["Say a price in so’m", "It’s fifty thousand so’m.", "Bu ellik ming so’m."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: do it!", sub: "Teacher reads a card. Do it! Then you read a card to the class. · Buyruqni bajaring!", size: 50,
      cards: [{ t: "Stand up!", uz: "Turing!" }, { t: "Sit down!", uz: "O’tiring!" }, { t: "Show me 15 fingers!", uz: "15 ta barmoq ko’rsating!" }, { t: "Write 18 on the board.", uz: "Doskaga 18 ni yozing." }, { t: "Count from 11 to 20.", uz: "11 dan 20 gacha sanang." }, { t: "Don’t look!", uz: "Qaramang!" }] },

    /* ---------- NEW WORDS: THE TENS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "The tens · O’nliklar", menu: "New words: the tens", items: [
      ["20 <span class='ca'>twenty</span> · 30 <span class='ca'>thirty</span>", "yigirma · o’ttiz"],
      ["40 <span class='ca'>forty</span> · 50 <span class='ca'>fifty</span>", "qirq · ellik"],
      ["60 <span class='ca'>sixty</span> · 70 <span class='ca'>seventy</span>", "oltmish · yetmish"],
      ["80 <span class='ca'>eighty</span> · 90 <span class='ca'>ninety</span>", "sakson · to’qson"],
      ["100 <span class='ca'>a hundred</span>", "yuz"],
      ["1,000 <span class='ca'>a thousand</span>", "ming"] ] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "ten + - + one", menu: "The rule: 21–99", rows: [
      { chips: [["twenty", "skyb"], ["-", "butter"], ["one", "mint"]], uz: "21 · yigirma bir" },
      { chips: [["forty", "skyb"], ["-", "butter"], ["seven", "mint"]], uz: "47 · qirq yetti" },
      { chips: [["ninety", "skyb"], ["-", "butter"], ["nine", "mint"]], uz: "99 · to’qson to’qqiz" } ],
      notes: ["O’zbekcha kabi: yigirma + bir", "Chiziqcha (-) yozing: twenty-one", "100 = a hundred"] },
    { t: "examples", eb: "Numbers · Sonlar", title: "Numbers in my life", menu: "Examples: numbers", items: [
      ["My father is <span class='ca'>forty-five</span>.", "Otam qirq besh yoshda."],
      ["My grandma is <span class='ca'>seventy-two</span>.", "Buvim yetmish ikki yoshda."],
      ["There are <span class='ca'>thirty</span> students in my class.", "Sinfimda o’ttizta o’quvchi bor."],
      ["My house is number <span class='ca'>eighty-four</span>.", "Uyimning raqami sakson to’rt."],
      ["Bus <span class='ca'>sixty-seven</span> is here!", "Oltmish yettinchi avtobus keldi!"],
      ["My grandpa is <span class='ca'>a hundred</span>! Wow!", "Bobom yuz yoshda! Voy!"] ] },
    { t: "spot", bg: "sky", title: "Number race", sub: "Teacher taps a number. The first student to say it in English gets a point! · Birinchi aytgan o’quvchi ochko oladi!", size: 96,
      cards: ["34", "58", "71", "99", "46", "83", "100", "62", "27", "95"] },
    { t: "gaps", title: "Say the number", sub: "Say it, then spell it. Tap to check.", w: 330, fs: 38, rows: [
      ["35 = ___", "thirty-five"], ["42 = ___", "forty-two"], ["68 = ___", "sixty-eight"],
      ["90 = ___", "ninety"], ["77 = ___", "seventy-seven"], ["53 = ___", "fifty-three"] ] },
    { t: "gaps", title: "Which number?", sub: "Careful: -teen or -ty? Tap to check.", w: 160, fs: 40, rows: [
      ["fifty-four = ___", "54"], ["thirteen = ___", "13"], ["thirty = ___", "30"],
      ["eighty-one = ___", "81"], ["nineteen = ___", "19"], ["ninety = ___", "90"] ] },
    { t: "cols", eb: "Listen! · Eshiting!", title: "-teen or -ty?", menu: "-teen or -ty?", cols: [
      { bg: "mint", label: "-teen · 13–19", lc: "g", fs: 40, lines: ["13 thir<b>TEEN</b>", "14 four<b>TEEN</b>", "15 fif<b>TEEN</b>", "18 eigh<b>TEEN</b>"], uz: "-teen: urg’u oxirida, uzun “ii”." },
      { bg: "skyb", label: "-ty · 30–90", lc: "b", fs: 40, lines: ["30 <b>THIR</b>ty", "40 <b>FOR</b>ty", "50 <b>FIF</b>ty", "80 <b>EIGH</b>ty"], uz: "-ty: urg’u boshida, qisqa “ti”." } ],
      notes: ["four → forty (no “u”!)", "five → fifty · eight → eighty"] },

    /* ---------- NEW WORDS: PRICES ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Prices · Narxlar", menu: "New words: prices", items: [
      ["<span class='cw'>How much</span> is it?", "How much…? = Qancha turadi?"],
      ["It’s five <span class='ca'>thousand</span> so’m.", "thousand = ming"],
      ["It’s two thousand <span class='ca'>so’m</span>.", "so’m = so’m (bizning pulimiz)"],
      ["The pen is <span class='ca'>cheap</span>.", "cheap = arzon"],
      ["The bag is <span class='ca'>expensive</span>.", "expensive = qimmat"],
      ["<span class='ca'>Here you are</span>.", "Here you are. = Mana, oling."] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "How much is it?", items: [
      { bg: "peach", w: "✏️", label: "a pencil = qalam", en: "It’s two thousand so’m.", uz: "Ikki ming so’m." },
      { bg: "mint", w: "📓", label: "a notebook = daftar", en: "It’s five thousand so’m.", uz: "Besh ming so’m." },
      { bg: "skyb", w: "📘", label: "a book = kitob", en: "It’s forty thousand so’m.", uz: "Qirq ming so’m." },
      { bg: "butter", w: "🎒", label: "a bag = sumka", en: "It’s ninety thousand so’m.", uz: "To’qson ming so’m." } ] },
    { t: "formula", bg: "ink", eb: "Ask and answer · So’rang va javob bering", title: "How much is it?", menu: "The rule: prices", rows: [
      { chips: [["How much", "peach"], ["is", "skyb"], ["it?", "mint"]], uz: "Bu qancha turadi?" },
      { chips: [["How much", "peach"], ["is", "skyb"], ["the red bag?", "mint"]], uz: "Qizil sumka qancha turadi?" },
      { chips: [["It’s", "skyb"], ["twenty thousand", "mint"], ["so’m.", "butter"]], uz: "Yigirma ming so’m." } ],
      notes: ["How much = qancha (pul)", "thousand: no -s! ✗ five thousands", "It’s = It is"] },
    { t: "examples", eb: "At the bazaar · Bozorda", title: "A short dialogue", menu: "Dialogue at the bazaar", items: [
      ["A: Excuse me! <span class='cw'>How much</span> is this bag?", "A: Kechirasiz! Bu sumka qancha turadi?"],
      ["B: It’s <span class='ca'>sixty thousand</span> so’m.", "B: Oltmish ming so’m."],
      ["A: Oh, it’s expensive! And that bag?", "A: Voy, qimmat ekan! Anavi sumka-chi?"],
      ["B: That bag is <span class='ca'>thirty-five thousand</span>.", "B: Anavi sumka o’ttiz besh ming."],
      ["A: OK. Here you are.", "A: Mayli. Mana, oling."],
      ["B: Thank you!", "B: Rahmat!"] ] },
    { t: "gaps", title: "Say the price", sub: "Say the full price in English. Tap to check.", w: 470, fs: 32, rows: [
      ["4,000 so’m = ___", "four thousand so’m"], ["25,000 so’m = ___", "twenty-five thousand so’m"], ["50,000 so’m = ___", "fifty thousand so’m"],
      ["12,000 so’m = ___", "twelve thousand so’m"], ["99,000 so’m = ___", "ninety-nine thousand so’m"], ["___ is it? (qancha)", "How much"] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 40, lines: ["<span class='cn'>fourty</span>", "five <span class='cn'>thousands</span> so’m", "How <span class='cn'>many</span> is it?"], uz: "Bu xatolar juda ko’p uchraydi!" },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 40, lines: ["<span class='ca'>forty</span>", "five <span class='ca'>thousand</span> so’m", "How <span class='ca'>much</span> is it?"], uz: "forty: “u” yo’q. thousand: -s yo’q. Narx: How much." } ] },

    /* ---------- PRACTICE ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Bu qancha turadi?", "How much is it?"],
      ["qirq besh", "forty-five"],
      ["O’n ming so’m.", "It’s ten thousand so’m."],
      ["Otam ellik yoshda.", "My father is fifty."],
      ["Ruchka arzon.", "The pen is cheap."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["It’s fourty thousand so’m.", "It’s forty thousand so’m."],
      ["How many is the bag?", "How much is the bag?"],
      ["It’s three thousands so’m.", "It’s three thousand so’m."],
      ["My mother is forty one.", "My mother is forty-one."] ] },
    { t: "spot", bg: "sky", title: "Pairs: at the bazaar", sub: "A: “How much is the bag?” B: “It’s eighty-five thousand so’m.” A: “Here you are.” Then change. · Juftlikda.", size: 46,
      cards: [{ t: "a bag · 85,000", uz: "sumka" }, { t: "a book · 32,000", uz: "kitob" }, { t: "a pen · 3,000", uz: "ruchka" }, { t: "a ball · 45,000", uz: "to’p" }, { t: "a notebook · 7,000", uz: "daftar" }, { t: "a ruler · 4,000", uz: "chizg’ich" }] },
    { t: "spot", bg: "yel", title: "My numbers", sub: "Pick a card. Finish it with a number from 21 to 100. · Gapni son bilan tugating.", size: 46,
      cards: [{ t: "My mother is…", uz: "Onam … yoshda." }, { t: "My father is…", uz: "Otam … yoshda." }, { t: "My grandma is…", uz: "Buvim … yoshda." }, { t: "There are … students in our class.", uz: "Sinfimizda … o’quvchi bor." }, { t: "My house is number…", uz: "Uyimning raqami…" }, { t: "My bag is … thousand so’m.", uz: "Sumkam … ming so’m." }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["count from 21 to 100", "hear -teen or -ty: 13 or 30", "spell forty, fifty, eighty", "ask “How much is it?”", "say a price: It’s twenty thousand so’m."] },
    { t: "bye", chips: [["How much is it?", "peach"], ["It’s … so’m.", "mint"], ["a hundred!", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "show 10 fingers 2 times, then 1 finger (21)", say: "twenty-one" }, { cue: "show 10 fingers 3 times (30)", say: "thirty" },
      { cue: "show 10 fingers 5 times (50)", say: "fifty" }, { cue: "write 44 in the air", say: "forty-four" },
      { cue: "write 100 in the air", say: "a hundred" }, { cue: "write 67 in the air", say: "sixty-seven" },
      { cue: "very old grandpa, show 9 and 0", say: "ninety" }, { cue: "point at a bag, ask with your face", say: "How much is it?" },
      { cue: "look at the price, shocked face", say: "It’s expensive!" }, { cue: "look at the price, happy face", say: "It’s cheap!" },
      { cue: "give money with your hand", say: "Here you are." }, { cue: "count money: 1, 2, 3 thousand", say: "three thousand so’m" }
    ],
    board: [
      { cat: "Tens", qs: [["Say 30, 40, 50.", "thirty, forty, fifty"], ["Say 60, 70, 80.", "sixty, seventy, eighty"], ["Count from 90 to 100 in tens.", "ninety, a hundred"]] },
      { cat: "21–99", qs: [["Say 25.", "twenty-five"], ["Say 63 and 88.", "sixty-three, eighty-eight"], ["Count from 97 to 100.", "ninety-seven, ninety-eight, ninety-nine, a hundred"]] },
      { cat: "-teen / -ty", qs: [["Say 13 and 30.", "thirteen, thirty"], ["Say 15 and 50.", "fifteen, fifty"], ["Spell 40.", "F-O-R-T-Y"]] },
      { cat: "Prices", qs: [["“Bu qancha turadi?” in English", "How much is it?"], ["Say 5,000 so’m.", "five thousand so’m"], ["Say 75,000 so’m.", "seventy-five thousand so’m"]] },
      { cat: "Words", qs: [["“arzon” in English", "cheap"], ["“qimmat” in English", "expensive"], ["“Mana, oling.” in English", "Here you are."]] },
      { cat: "Commands", qs: [["“O’tiring!” in English", "Sit down!"], ["Make it NO: Open the window.", "Don’t open the window."], ["Make it polite: Give me a pen.", "Give me a pen, please."]] }
    ],
    wheel: [
      { name: "Count", tasks: ["Count from 21 to 25.", "Count from 30 to 100 in tens.", "Count from 95 to 100.", "Count from 50 down to 45."] },
      { name: "Ages", tasks: ["Say: My mother is…", "Say: My father is…", "Say how old your grandma or grandpa is.", "Ask a classmate: How old are you?"] },
      { name: "Prices", tasks: ["Ask the price of a pen.", "Say 10,000 so’m.", "Say 48,000 so’m.", "Say a price: It’s … thousand so’m."] },
      { name: "Cheap or expensive?", tasks: ["A pen: 50,000 so’m. Cheap or expensive?", "A book: 1,000 so’m. Cheap or expensive?", "Say: The bag is expensive.", "Say: The pencil is cheap."] },
      { name: "Spell it", tasks: ["Spell: forty.", "Spell: fifty.", "Spell: thirty.", "Spell: ninety."] },
      { name: "Commands", tasks: ["Give the class 1 command.", "Say a command with please.", "Say a command with Don’t.", "Tell a classmate: write 75."] }
    ],
    build: [
      { w: ["How","much","is","it"], e: "?" }, { w: ["It’s","five","thousand","so’m"], e: "." }, { w: ["My","father","is","forty-five"], e: "." },
      { w: ["How","much","is","this","bag"], e: "?" }, { w: ["The","pen","is","cheap"], e: "." }, { w: ["That","book","is","expensive"], e: "." },
      { w: ["OK.","Here","you","are"], e: "." }, { w: ["It’s","sixty","thousand","so’m"], e: "." }
    ],
    auction: [
      { s: "My grandma is seventy-two.", ok: true },
      { s: "It’s fourty thousand so’m.", ok: false, fix: "It’s forty thousand so’m." },
      { s: "How much is this book?", ok: true },
      { s: "How many is the pen?", ok: false, fix: "How much is the pen?" },
      { s: "It’s ten thousands so’m.", ok: false, fix: "It’s ten thousand so’m." },
      { s: "Here you are.", ok: true },
      { s: "50 = fifteen", ok: false, fix: "50 = fifty" },
      { s: "The bag is expensive.", ok: true },
      { s: "My father is fifty six.", ok: false, fix: "My father is fifty-six." },
      { s: "There are thirty students in my class.", ok: true }
    ]
  }
};
