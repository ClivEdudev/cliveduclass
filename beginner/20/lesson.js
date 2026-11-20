/* Beginner · Lesson 20 · Commands
   Teaches the imperative (buyruq gap): the verb comes first, no “you”.
   Sit down! · Open your book! · Look at the board. · polite “please” · Don’t + verb!
   New words: stand up, sit down, open, close, look at, listen to, come here, give me, repeat, be quiet
   (write and read come back from earlier lessons). Recycles can / can’t (lesson 19), my / your, ’s, on.
   Built for Monday 25 January 2027 (Group B · 15:30). */
window.LESSON = {
  id: "b20",
  n: 20,
  title: "Commands",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 20", title: "Sit <span class='cy'>down!</span>", lead: "Commands · Buyruq gaplar", chips: [["O’tiring!", "peach"], ["Kitobingizni oching!", "mint"], ["Yugurmang!", "skyb"]] },
    { t: "goals", items: [
      ["Give a command", "Sit down!", "O’tiring!"],
      ["Be polite with “please”", "Open the door, please.", "Eshikni oching, iltimos."],
      ["Say “no” with “Don’t”", "Don’t run!", "Yugurmang!"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: Can you…?", sub: "Pick a card. Ask a classmate. Answer: “Yes, I can.” or “No, I can’t.” · Sinfdoshingizdan so’rang.", size: 52,
      cards: [{ t: "Can you swim?", uz: "Suza olasizmi?" }, { t: "Can you cook plov?", uz: "Palov pishira olasizmi?" }, { t: "Can you sing?", uz: "Qo’shiq ayta olasizmi?" }, { t: "Can you dance?", uz: "Raqs tusha olasizmi?" }, { t: "Can you drive?", uz: "Mashina hayday olasizmi?" }, { t: "Can you play football?", uz: "Futbol o’ynay olasizmi?" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "In the classroom", menu: "New words: classroom 1", items: [
      ["<span class='ca'>Stand up</span>, please.", "stand up = o’rningizdan turing"],
      ["<span class='ca'>Sit down</span>, please.", "sit down = o’tiring"],
      ["<span class='ca'>Open</span> your book.", "open = oching · Kitobingizni oching."],
      ["<span class='ca'>Close</span> the door.", "close = yoping · Eshikni yoping."],
      ["<span class='ca'>Look at</span> the board.", "look at = qarang · Doskaga qarang."],
      ["<span class='ca'>Listen to</span> me.", "listen to = tinglang · Meni tinglang."] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "More classroom words", menu: "New words: classroom 2", items: [
      ["<span class='ca'>Come here</span>, please.", "come here = bu yerga keling"],
      ["<span class='ca'>Give me</span> a pen, please.", "give me = menga bering · Menga ruchka bering."],
      ["<span class='ca'>Write</span> your name.", "write = yozing · Ismingizni yozing."],
      ["<span class='ca'>Read</span> the book.", "read = o’qing · Kitobni o’qing."],
      ["<span class='ca'>Repeat</span>, please.", "repeat = takrorlang"],
      ["<span class='ca'>Be quiet</span>, please.", "be quiet = jim bo’ling"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Do it!", items: [
      { bg: "peach", w: "🧍", label: "stand up = turing", en: "Stand up, please.", uz: "O’rningizdan turing, iltimos." },
      { bg: "mint", w: "🪑", label: "sit down = o’tiring", en: "Sit down, please.", uz: "O’tiring, iltimos." },
      { bg: "skyb", w: "📖", label: "open = oching", en: "Open your book.", uz: "Kitobingizni oching." },
      { bg: "butter", w: "🚪", label: "close = yoping", en: "Close the door.", uz: "Eshikni yoping." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "What is a command?", menu: "The rule", cols: [
      { bg: "mint", label: "1 · Verb first", lc: "g", fs: 40, lines: ["<span class='ca'>Open</span> the door!"], uz: "Buyruq gapda fe’l birinchi keladi. “You” aytilmaydi." },
      { bg: "butter", label: "2 · Please", fs: 40, lines: ["<span class='ca'>Sit down</span>, please."], uz: "“Please” (iltimos) qo’shsak, gap muloyim bo’ladi." },
      { bg: "skyb", label: "3 · One or many", lc: "b", fs: 40, lines: ["Aziz, <span class='ca'>stand up</span>!", "Children, <span class='ca'>stand up</span>!"], uz: "Ingliz tilida bitta shakl: tur / turing / turinglar = stand up." } ],
      notes: ["O’zbekcha: Oching! O’tiring! Turing!", "English: Open! Sit down! Stand up!"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "Verb + … (+ please)", rows: [
      { chips: [["Open", "mint"], ["your book.", "skyb"]], uz: "Kitobingizni oching." },
      { chips: [["Sit down,", "mint"], ["please.", "butter"]], uz: "O’tiring, iltimos." },
      { chips: [["Look at", "mint"], ["the board.", "skyb"]], uz: "Doskaga qarang." } ],
      notes: ["No “you”: ✗ You open the book.", "please = iltimos", "Look at… · Listen to…"] },
    { t: "examples", eb: "Commands · Buyruqlar", title: "In the classroom", menu: "Examples: classroom", items: [
      ["<span class='ca'>Open</span> the window, please.", "Derazani oching, iltimos."],
      ["<span class='ca'>Close</span> your books.", "Kitoblaringizni yoping."],
      ["Aziz, <span class='ca'>come</span> here!", "Aziz, bu yerga kel!"],
      ["<span class='ca'>Listen</span> to the teacher.", "O’qituvchini tinglang."],
      ["<span class='ca'>Write</span> your name, please.", "Ismingizni yozing, iltimos."],
      ["Madina, <span class='ca'>give</span> me the red pen.", "Madina, menga qizil ruchkani ber."] ] },
    { t: "examples", eb: "Commands · Buyruqlar", title: "At home", menu: "Examples: at home", items: [
      ["Bobur, <span class='ca'>come</span> here, please!", "Bobur, bu yerga kel, iltimos!"],
      ["<span class='ca'>Close</span> the door, please.", "Eshikni yop, iltimos."],
      ["<span class='ca'>Give</span> me my phone, please.", "Telefonimni ber, iltimos."],
      ["<span class='ca'>Look</span>! It’s a cat.", "Qara! Bu mushuk."],
      ["<span class='ca'>Be</span> quiet, please! Grandma is tired.", "Jim bo’l, iltimos! Buvim charchagan."],
      ["Lola, <span class='ca'>open</span> the window.", "Lola, derazani och."] ] },
    { t: "gaps", title: "Which word?", sub: "stand · sit · open · close · look · listen. Tap to check.", w: 220, fs: 38, rows: [
      ["___ down, please. (o’tiring)", "Sit"], ["___ up, please. (turing)", "Stand"], ["___ your book. (oching)", "Open"],
      ["___ the door. (yoping)", "Close"], ["___ at the board. (qarang)", "Look"], ["___ to me. (tinglang)", "Listen"] ] },
    { t: "gaps", title: "Which word? Round 2", sub: "come · give · write · read · repeat · quiet. Tap to check.", w: 220, fs: 38, rows: [
      ["___ here, please. (keling)", "Come"], ["___ me a pen. (bering)", "Give"], ["___ your name. (yozing)", "Write"],
      ["___ the book. (o’qing)", "Read"], ["___, please. (takrorlang)", "Repeat"], ["Be ___, please! (jim)", "quiet"] ] },

    /* ---------- DON’T ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "Don’t + verb!", rows: [
      { chips: [["Don’t", "peach"], ["run!", "mint"]], uz: "Yugurmang!" },
      { chips: [["Don’t", "peach"], ["open", "mint"], ["the window.", "skyb"]], uz: "Derazani ochmang." },
      { chips: [["Don’t", "peach"], ["sit", "mint"], ["here, please.", "butter"]], uz: "Bu yerga o’tirmang, iltimos." } ],
      notes: ["Don’t = do not", "O’zbekcha: -ma / -mang (ochma, ochmang)", "✗ No run! ✗ Not run! → ✓ Don’t run!"] },
    { t: "examples", eb: "Negative · Inkor", title: "Don’t…!", menu: "Examples: Don’t", items: [
      ["<span class='cn'>Don’t</span> run!", "Yugurmang!"],
      ["<span class='cn'>Don’t</span> open the door, please.", "Eshikni ochmang, iltimos."],
      ["<span class='cn'>Don’t</span> look at my phone!", "Telefonimga qarama!"],
      ["<span class='cn'>Don’t</span> sit here. It’s Aziz’s chair.", "Bu yerga o’tirmang. Bu Azizning stuli."],
      ["<span class='cn'>Don’t</span> write in the book.", "Kitobga yozmang."],
      ["<span class='cn'>Don’t</span> stand on the chair!", "Stulga chiqmang!"] ] },
    { t: "gaps", title: "Make it “Don’t”", sub: "Say the new sentence. Tap to check.", w: 420, fs: 34, rows: [
      ["Run! → ___", "Don’t run!"], ["Sit here. → ___", "Don’t sit here."], ["Open the window. → ___", "Don’t open the window."],
      ["Look! → ___", "Don’t look!"], ["Write in the book. → ___", "Don’t write in the book."], ["Stand up. → ___", "Don’t stand up."] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 40, lines: ["<span class='cn'>You open</span> the door!", "<span class='cn'>No run</span>!", "Look <span class='cn'>the</span> board."], uz: "Buyruqda “you” yo’q. Inkor “No” emas!" },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 40, lines: ["<span class='ca'>Open</span> the door!", "<span class='ca'>Don’t run</span>!", "Look <span class='ca'>at</span> the board."], uz: "Fe’l birinchi. Inkor: Don’t + fe’l. Look at…, listen to…" } ] },

    /* ---------- PRACTICE ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["O’tiring, iltimos.", "Sit down, please."],
      ["Kitobingizni oching.", "Open your book."],
      ["Bu yerga keling!", "Come here!"],
      ["Yugurmang!", "Don’t run!"],
      ["Eshikni yopmang.", "Don’t close the door."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["You sit down, please.", "Sit down, please."],
      ["No open the window!", "Don’t open the window!"],
      ["Look the board.", "Look at the board."],
      ["Listen me, please.", "Listen to me, please."] ] },
    { t: "spot", bg: "sky", title: "Clive says…", sub: "Do it only after “Clive says…”! No “Clive says”? Don’t move! Then you are the teacher. · Faqat “Clive says…” bo’lsa bajaring!", size: 48,
      cards: [{ t: "Stand up!", uz: "Turing!" }, { t: "Sit down!", uz: "O’tiring!" }, { t: "Open your book!", uz: "Kitobingizni oching!" }, { t: "Close your book!", uz: "Kitobingizni yoping!" }, { t: "Look at the door!", uz: "Eshikka qarang!" }, { t: "Give me your pen!", uz: "Menga ruchkangizni bering!" }] },
    { t: "spot", bg: "yel", title: "Pairs: boss and robot", sub: "A is the boss, B is the robot. A gives 3 commands, B does them. Then change. · A buyruq beradi, B bajaradi.", size: 46,
      cards: [{ t: "Stand up. Sit down.", uz: "Turing. O’tiring." }, { t: "Open the book. Read.", uz: "Kitobni oching. O’qing." }, { t: "Write your name.", uz: "Ismingizni yozing." }, { t: "Look at the window.", uz: "Derazaga qarang." }, { t: "Don’t look!", uz: "Qaramang!" }, { t: "Come here. Be quiet.", uz: "Bu yerga keling. Jim bo’ling." }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["give a command: Sit down!", "be polite: Open the door, please.", "say Don’t: Don’t run!", "say look at… and listen to…", "use 10 new words: stand up, open, close…"] },
    { t: "bye", chips: [["Sit down!", "peach"], ["…, please.", "mint"], ["Don’t…!", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "stand up", say: "Stand up!" }, { cue: "sit down", say: "Sit down!" },
      { cue: "open a book", say: "Open the book!" }, { cue: "close a book", say: "Close the book!" },
      { cue: "open the door", say: "Open the door!" }, { cue: "close the window", say: "Close the window!" },
      { cue: "look at the board", say: "Look at the board!" }, { cue: "listen (hand at ear)", say: "Listen!" },
      { cue: "come here (wave to you)", say: "Come here!" }, { cue: "finger on lips: shh!", say: "Be quiet!" },
      { cue: "write your name", say: "Write your name!" }, { cue: "run, then stop: no!", say: "Don’t run!" }
    ],
    board: [
      { cat: "Words", qs: [["“O’tiring!” in English", "Sit down!"], ["“Turing!” in English", "Stand up!"], ["“Jim bo’ling!” in English", "Be quiet!"]] },
      { cat: "Commands", qs: [["Tell me: open your book.", "Open your book!"], ["Tell Aziz: come here.", "Aziz, come here!"], ["Give the class 2 commands.", "Stand up! Look at the board! (any 2)"]] },
      { cat: "Please", qs: [["Make it polite: Sit down.", "Sit down, please."], ["Make it polite: Give me a pen.", "Give me a pen, please."], ["Ask for the door: close it, politely.", "Close the door, please."]] },
      { cat: "Don’t", qs: [["Make it NO: Run!", "Don’t run!"], ["Make it NO: Open the window.", "Don’t open the window."], ["“Kitobga yozmang.” in English", "Don’t write in the book."]] },
      { cat: "Can", qs: [["Short answer (yes): Can you swim?", "Yes, I can."], ["Make it NO: I can drive.", "I can’t drive."], ["Ask the teacher with “Can you…?”", "Can you sing? (any question)"]] },
      { cat: "Fix it", qs: [["You sit down!", "Sit down!"], ["No run!", "Don’t run!"], ["Listen me.", "Listen to me."]] }
    ],
    wheel: [
      { name: "Teacher", tasks: ["Give the class 1 command.", "Give the class 2 commands.", "Tell a classmate: come here.", "Tell the class: be quiet, please."] },
      { name: "Please", tasks: ["Ask for a pen. Use please.", "Ask a classmate to stand up. Use please.", "Ask the teacher to repeat. Use please.", "Ask someone to close the door. Use please."] },
      { name: "Don’t", tasks: ["Say 1 sentence with Don’t.", "Say 2 sentences with Don’t.", "Don’t…! in the classroom: say a rule.", "Don’t…! at home: say a rule."] },
      { name: "Robot", tasks: ["Your team says 2 commands. Do them!", "Your team says 3 commands. Do them!", "Do a command. Your team says it.", "Do 2 commands. Your team says them."] },
      { name: "Uzbek", tasks: ["Say in English: O’tiring!", "Say in English: Eshikni oching.", "Say in English: Doskaga qarang.", "Say in English: Yugurmang!"] },
      { name: "Can", tasks: ["Say 1 thing you can do.", "Say 1 thing you can’t do.", "Ask a classmate: Can you…?", "Say what your friend can do."] }
    ],
    build: [
      { w: ["Sit","down,","please"], e: "." }, { w: ["Open","your","book"], e: "." }, { w: ["Look","at","the","board"], e: "." },
      { w: ["Don’t","open","the","window"], e: "." }, { w: ["Listen","to","me,","please"], e: "." }, { w: ["Aziz,","come","here"], e: "!" },
      { w: ["Give","me","a","pen,","please"], e: "." }, { w: ["Don’t","sit","here"], e: "!" }
    ],
    auction: [
      { s: "Sit down, please.", ok: true },
      { s: "You open the door!", ok: false, fix: "Open the door!" },
      { s: "Don’t run!", ok: true },
      { s: "No close the window.", ok: false, fix: "Don’t close the window." },
      { s: "Look at the board.", ok: true },
      { s: "Listen me, please.", ok: false, fix: "Listen to me, please." },
      { s: "Give me a pen, please.", ok: true },
      { s: "Not sit here!", ok: false, fix: "Don’t sit here!" },
      { s: "Be quiet, please.", ok: true },
      { s: "Please you stand up.", ok: false, fix: "Please stand up." }
    ]
  }
};
