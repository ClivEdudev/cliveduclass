/* Beginner · Lesson 24 · Unit 4 review
   Revises Unit 4 · What I can do (lessons 19–23), with games:
   can / can’t (19) · commands: Sit down! Don’t run! (20) · numbers 21–100, How much is it? so’m (21)
   · food and drink, I like… / I don’t like… (22) · days, What time is it?, on Monday, at seven o’clock (23).
   No new grammar and no new words.
   Built for Mon 8 Feb 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b24",
  n: 24,
  title: "Unit 4 review",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 24", title: "Unit 4<br><span class='cy'>Review</span>", lead: "can · commands · numbers and prices · food · days and time", chips: [["Let’s play!", "peach"], ["O’ynaymiz!", "mint"], ["4-bo’limni takrorlaymiz", "skyb"]] },
    { t: "examples", eb: "Unit 4 · What I can do", title: "In Unit 4 we learned", items: [
      ["I <span class='ca'>can</span> swim. I <span class='cn'>can’t</span> drive.", "Men suza olaman. Men mashina hayday olmayman."],
      ["<span class='ca'>Sit down!</span> <span class='cn'>Don’t</span> run!", "O’tiring! Yugurmang!"],
      ["Forty-five · ninety-nine · <span class='cw'>How much</span> is it?", "Qirq besh · to’qson to’qqiz · Bu qancha turadi?"],
      ["I <span class='ca'>like</span> plov. I <span class='cn'>don’t like</span> fish.", "Men palovni yaxshi ko’raman. Men baliqni yoqtirmayman."],
      ["The lesson is <span class='ca'>on Monday</span> <span class='ca'>at half past three</span>.", "Dars dushanba kuni soat uch yarimda."],
      ["<span class='cw'>Can</span> you swim? <span class='cw'>What time</span> is it?", "Suza olasizmi? Soat necha?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: quick numbers", sub: "Lesson 21! Teacher taps a number. The first student to say it gets a point!", size: 96,
      cards: ["21", "35", "48", "60", "77", "100"] },
    { t: "quad", eb: "Unit 4 · 4-bo’lim", title: "Five lessons, one unit", menu: "Unit 4 in pictures", items: [
      { bg: "peach", w: "🏊", label: "can = qila olmoq", en: "I can swim. Can you?", uz: "Men suza olaman. Siz-chi?" },
      { bg: "mint", w: "🚪", label: "commands = buyruqlar", en: "Close the door, please!", uz: "Eshikni yoping, iltimos!" },
      { bg: "skyb", w: "🍞", label: "How much? = Qancha?", en: "How much is the bread?", uz: "Non qancha turadi?" },
      { bg: "butter", w: "🕒", label: "time = vaqt", en: "It’s three o’clock.", uz: "Soat uch." } ] },
    { t: "quiz", kind: "en", title: "Quiz 1: answer the question", sub: "Say a full answer. Tap to check.", rows: [
      ["Can you swim?", "Yes, I can. / No, I can’t."],
      ["Can a fish fly?", "No, it can’t."],
      ["What time is it? (8:00)", "It’s eight o’clock."],
      ["What day is it today? (Friday)", "It’s Friday. / Today is Friday."],
      ["What day is it tomorrow? (Saturday)", "Tomorrow is Saturday."] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 2: say it in English", sub: "All topics mixed. Tap to reveal.", rows: [
      ["Men suza olaman.", "I can swim."],
      ["Eshikni oching!", "Open the door!"],
      ["Bu qancha turadi?", "How much is it?"],
      ["Men baliqni yoqtirmayman.", "I don’t like fish."],
      ["Dars juma kuni soat to’rtda.", "The lesson is on Friday at four o’clock."] ] },
    { t: "gaps", title: "Which word is missing?", sub: "All topics mixed. Say the full sentence. Tap to check.", w: 220, fs: 36, rows: [
      ["Can you swim? Yes, I ___.", "can"], ["___ run! (Yugurmang!)", "Don’t"], ["45 = forty-___", "five"],
      ["I ___ like fish. (yoqtirmayman)", "don’t"], ["The lesson is ___ Monday.", "on"], ["It’s seven ___.", "o’clock"] ] },
    { t: "gaps", title: "Numbers, prices and time", sub: "Say it. Tap to check.", w: 300, fs: 36, rows: [
      ["30 = ___", "thirty"], ["50 = ___", "fifty"], ["72 = ___", "seventy-two"],
      ["How ___ is it?", "much"], ["9:30 → It’s ___.", "half past nine"], ["I ___ drive. (olmayman)", "can’t"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I can to swim.", "I can swim."],
      ["She cans cook.", "She can cook."],
      ["Don’t to open the window!", "Don’t open the window!"],
      ["I no like fish.", "I don’t like fish."],
      ["The lesson is on five o’clock.", "The lesson is at five o’clock."] ] },
    { t: "spot", bg: "sky", title: "Teacher says!", sub: "Teacher or a student says a command. Do it! “Don’t …!” → don’t do it! · Buyruqni bajaring!", size: 46,
      cards: ["Stand up!", "Sit down!", "Open your book!", "Close your eyes!", "Look at the board!", "Don’t talk!"] },
    { t: "spot", bg: "yel", title: "Pairs: at the bazaar", sub: "A: “How much is the …?” B says a price: “It’s … so’m.” A: “Thank you!” Then change. · Juftlikda.", size: 50,
      cards: [{ t: "🍞 bread", uz: "non" }, { t: "🍎 apples", uz: "olmalar" }, { t: "🍵 tea", uz: "choy" }, { t: "🥛 milk", uz: "sut" }, { t: "🍉 a melon", uz: "qovun" }, { t: "🐟 fish", uz: "baliq" }] },
    { t: "spot", bg: "sky", title: "About me", sub: "Pick a card. Say a true sentence about you. · O’zingiz haqingizda ayting.", size: 52,
      cards: ["I can…", "I can’t…", "I like…", "I don’t like…", "My English lesson is on…", "Now it’s…"] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "wheel", bg: "ink" },
    { t: "game", g: "board" },
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say what I can and can’t do", "give commands: Sit down! Don’t run!", "say numbers to 100", "ask “How much is it?”", "say what I like and don’t like", "say the days and the time"] },
    { t: "bye", chips: [["I can…", "peach"], ["I like…", "mint"], ["See you on Thursday!", "skyb"]] }
  ],
  games: {
    wheel: [
      { name: "Can", tasks: ["Say 2 things you can do.", "Say 2 things you can’t do.", "Ask a classmate: “Can you …?”", "Say what a cat can do."] },
      { name: "Commands", tasks: ["Give the class a command.", "Say a “Don’t …!” command.", "Say 2 commands for the classroom.", "Say “please” with a command."] },
      { name: "Numbers", tasks: ["Count: 20, 30, 40… 100.", "Say 33, 66, 99.", "Say your phone number.", "Ask: “How much is it?”"] },
      { name: "Food", tasks: ["Say 3 foods you like.", "Say 2 foods you don’t like.", "Say 2 drinks.", "Say: “I like plov and …”"] },
      { name: "Days and time", tasks: ["Say the 7 days.", "What time is it now?", "Say 8:30 in English.", "Finish: “The lesson is on…”"] },
      { name: "Mixed", tasks: ["Say one sentence with “can” and one with “like”.", "Ask your team 2 questions.", "Say: “See you on …!”", "Talk about you for 20 seconds."] }
    ],
    board: [
      { cat: "Can", qs: [["Make it NO: I can drive.", "I can’t drive."], ["Short answer (yes): Can you swim?", "Yes, I can."], ["Fix it: She cans dance.", "She can dance."]] },
      { cat: "Commands", qs: [["“O’tiring!” in English", "Sit down!"], ["Make it NO: Open the window!", "Don’t open the window!"], ["“Kitobingizni oching!” in English", "Open your book!"]] },
      { cat: "Numbers", qs: [["40 =", "forty"], ["Say 65.", "sixty-five"], ["Count from 95 to 100.", "ninety-five, ninety-six, ninety-seven, ninety-eight, ninety-nine, a hundred"]] },
      { cat: "Prices", qs: [["“Bu qancha turadi?” in English", "How much is it?"], ["Ask about the bread.", "How much is the bread?"], ["Fix it: How many is it?", "How much is it?"]] },
      { cat: "Food", qs: [["“non” and “choy” in English", "bread · tea"], ["Make it NO: I like coffee.", "I don’t like coffee."], ["Say 2 foods you like.", "I like … and … (any true)"]] },
      { cat: "Days and time", qs: [["The day after Friday?", "Saturday"], ["7:30", "It’s half past seven."], ["___ Monday ___ four o’clock", "on · at"]] }
    ],
    mime: [
      { cue: "swim", say: "You can swim!" },
      { cue: "try to fly, then fall: can’t!", say: "You can’t fly!" },
      { cue: "play the guitar", say: "You can play the guitar!" },
      { cue: "point at a chair, then sit", say: "Sit down!" },
      { cue: "shake your finger: no running!", say: "Don’t run!" },
      { cue: "open a book", say: "Open your book!" },
      { cue: "hold up an apple, look at the seller", say: "How much is it?" },
      { cue: "eat plov happily", say: "I like plov!" },
      { cue: "taste fish, make a bad face", say: "I don’t like fish!" },
      { cue: "drink hot tea", say: "I like tea!" },
      { cue: "tap your wrist, look puzzled", say: "What time is it?" },
      { cue: "dance happily: no school!", say: "It’s Saturday! It’s the weekend!" }
    ],
    build: [
      { w: ["I", "can", "swim"], e: "." },
      { w: ["Can", "you", "cook"], e: "?" },
      { w: ["Open", "your", "book"], e: "!" },
      { w: ["Don’t", "run", "in", "the", "classroom"], e: "!" },
      { w: ["How", "much", "is", "it"], e: "?" },
      { w: ["I", "don’t", "like", "fish"], e: "." },
      { w: ["What", "time", "is", "it"], e: "?" },
      { w: ["The", "lesson", "is", "on", "Monday"], e: "." }
    ],
    auction: [
      { s: "I can play football.", ok: true },
      { s: "He can to drive.", ok: false, fix: "He can drive." },
      { s: "Close the door, please!", ok: true },
      { s: "Not run!", ok: false, fix: "Don’t run!" },
      { s: "How much is it?", ok: true },
      { s: "How many is the bread?", ok: false, fix: "How much is the bread?" },
      { s: "I don’t like milk.", ok: true },
      { s: "I not like fish.", ok: false, fix: "I don’t like fish." },
      { s: "It’s half past seven.", ok: true },
      { s: "The lesson is in Thursday.", ok: false, fix: "The lesson is on Thursday." }
    ]
  }
};
