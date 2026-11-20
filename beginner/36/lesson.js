/* Beginner · Lesson 36 · Final review
   The big game day for the whole beginner course, units 1–6:
   Unit 1 hello, alphabet, numbers, a / an, colours · Unit 2 to be, family, my / your ·
   Unit 3 have / has, this / these, his / her / ’s, there is / are, in / on / under ·
   Unit 4 can, commands, prices, food, time · Unit 5 present simple, routine, how often ·
   Unit 6 present continuous, clothes and weather, in town, some / any.
   No new grammar: everything is review and games.
   Built for Mon 22 Mar 2027. */
window.LESSON = {
  id: "b36",
  n: 36,
  title: "Final review",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 36", title: "Final<br><span class='cy'>review</span>", lead: "The big game day: all units · Katta o’yin kuni: hamma mavzular", chips: [["O’ynaymiz!", "peach"], ["Hammasini takrorlaymiz!", "mint"], ["Barakalla!", "skyb"]] },
    { t: "examples", title: "We learned: Units 1–3", menu: "Units 1–3", items: [
      ["<span class='ca'>Hello!</span> My name is Aziz. I’m fifteen.", "Salom! Ismim Aziz. O’n besh yoshdaman."],
      ["It’s <span class='ca'>an</span> apple. It’s <span class='ca'>red</span>.", "Bu olma. U qizil."],
      ["She <span class='ca'>is</span> a doctor. She’s from Samarkand.", "U shifokor. U Samarqanddan."],
      ["I<span class='cn'>’m not</span> a teacher. <span class='cw'>Are</span> you a student?", "Men o’qituvchi emasman. Siz o’quvchimisiz?"],
      ["I <span class='ca'>have</span> a sister. <span class='ca'>Her</span> name is Lola.", "Mening singlim bor. Uning ismi Lola."],
      ["<span class='ca'>There is</span> a cat <span class='ca'>under</span> the table.", "Stol ostida mushuk bor."] ] },
    { t: "examples", title: "We learned: Units 4–6", menu: "Units 4–6", items: [
      ["I <span class='ca'>can</span> swim. I <span class='cn'>can’t</span> drive.", "Men suza olaman. Men mashina hayday olmayman."],
      ["<span class='ca'>Sit down</span>, please! <span class='cn'>Don’t</span> run!", "Iltimos, o’tiring! Yugurmang!"],
      ["I <span class='ca'>like</span> plov. It’s seven <span class='ca'>o’clock</span>.", "Men palovni yaxshi ko’raman. Soat yetti."],
      ["She <span class='ca'>gets up</span> at six. He <span class='cn'>doesn’t</span> work.", "U soat oltida turadi. U ishlamaydi."],
      ["<span class='cw'>Do</span> you <span class='ca'>usually</span> drink tea? Yes, I do.", "Odatda choy ichasizmi? Ha, ichaman."],
      ["I’m <span class='ca'>wearing</span> a coat. <span class='cw'>Are there any</span> apples?", "Men palto kiyganman. Olma bormi?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: one sentence each", sub: "Pick a card. Say one true sentence about you. · Kartani tanlang va o’zingiz haqingizda bitta gap ayting.",
      cards: [{ t: "My name is…", uz: "Mening ismim…" }, { t: "I am from…", uz: "Men …danman." }, { t: "In my room there is…", uz: "Xonamda … bor." },
        { t: "I can…", uz: "Men … olaman." }, { t: "Every day I…", uz: "Har kuni men…" }, { t: "Right now I am…", uz: "Hozir men …yapman." }] },

    /* ---------- QUIZZES ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: Units 1–3 in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Ismingiz nima?", "What’s your name?"],
      ["Men o’n besh yoshdaman.", "I’m fifteen."],
      ["U Toshkentdan.", "He’s from Tashkent. / She’s from Tashkent."],
      ["Mening ikkita akam bor.", "I have two brothers."],
      ["Xonamda stol bor.", "There is a table in my room."] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 2: Units 4–6 in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men suza olaman.", "I can swim."],
      ["Eshikni yoping!", "Close the door!"],
      ["Soat necha?", "What time is it?"],
      ["Akam har kuni choy ichadi.", "My brother drinks tea every day."],
      ["Men hozir kitob o’qiyapman.", "I am reading a book now."] ] },
    { t: "gaps", title: "Units 1–3: which word?", sub: "Say the full sentence. Tap to check.", w: 220, fs: 38, rows: [
      ["I ___ a student.", "am"], ["Lola ___ from Bukhara.", "is"], ["It’s ___ orange.", "an"],
      ["She ___ two sisters.", "has"], ["This is Aziz. ___ bag is blue.", "His"], ["There ___ three chairs in the room.", "are"] ] },
    { t: "gaps", title: "Units 4–6: which word?", sub: "Say the full sentence. Tap to check.", w: 220, fs: 38, rows: [
      ["Can you swim? Yes, I ___.", "can"], ["___ talk in class!", "Don’t"], ["She ___ (work) in a bank.", "works"],
      ["___ he play football? Yes, he does.", "Does"], ["Look! They ___ dancing.", "are"], ["Are there ___ eggs?", "any"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake: Units 1–3", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["She are my sister.", "She is my sister."],
      ["I have a apple.", "I have an apple."],
      ["He have a car.", "He has a car."],
      ["There is two beds.", "There are two beds."],
      ["This is Bobur book.", "This is Bobur’s book."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake: Units 4–6", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I can to swim.", "I can swim."],
      ["She work in a bank.", "She works in a bank."],
      ["Do he like plov?", "Does he like plov?"],
      ["I am read now.", "I am reading now."],
      ["There are any apples.", "There are some apples."] ] },
    { t: "spot", bg: "sky", title: "Interview a friend", sub: "Pairs. Ask all 6 questions. Your friend answers in full sentences. · Juftlikda: 6 ta savol bering.", size: 40,
      cards: [{ t: "How old are you?", uz: "Necha yoshdasiz?" }, { t: "Where are you from?", uz: "Qayerdansiz?" }, { t: "Do you have any brothers?", uz: "Aka-ukangiz bormi?" },
        { t: "Can you swim?", uz: "Suza olasizmi?" }, { t: "What time do you get up?", uz: "Soat nechada turasiz?" }, { t: "What are you wearing?", uz: "Nima kiygansiz?" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "wheel", bg: "ink" },
    { t: "game", g: "board" },
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say hello, my name, my age and numbers", "use am, is, are, not and questions", "talk about my family and my home", "say what I can do and give commands", "talk about my day with the present simple", "say what is happening now with -ing"] },
    { t: "bye", chips: [["Well done!", "peach"], ["Barakalla!", "mint"], ["See you soon!", "skyb"]] }
  ],
  games: {
    wheel: [
      { name: "Unit 1 · Hello!", tasks: ["Say hello and your name.", "Spell your name.", "Count from 11 to 20.", "Point at a thing: What colour is it?"] },
      { name: "Unit 2 · Me and you", tasks: ["Say your job or “I’m a student.”", "Where is your friend from?", "Make it NO: I am a doctor.", "Say 3 people in your family."] },
      { name: "Unit 3 · My home", tasks: ["Say 2 things you have.", "Say 2 sentences: There is… / There are…", "Where is your phone? (in, on, under)", "Pick up a pen: Whose pen is this?"] },
      { name: "Unit 4 · I can", tasks: ["Say 2 things you can do.", "Give the class 2 commands.", "Say 2 foods you like and 1 you don’t like.", "What time is it now?"] },
      { name: "Unit 5 · My day", tasks: ["Say 3 things you do every morning.", "What does your mother do every day?", "Ask a friend a question: Do you…?", "Say 1 thing you never do."] },
      { name: "Unit 6 · Now and in town", tasks: ["Say what you are wearing.", "Say the weather today: It’s…", "Tell a friend the way to the door: Go straight…", "Ask: How many … are there?"] }
    ],
    board: [
      { cat: "Unit 1", qs: [["“Xayrli tong!” in English", "Good morning!"], ["a or an? ___ egg", "an"], ["What colour is the sky?", "It’s blue."]] },
      { cat: "Unit 2", qs: [["I ___ a student.", "am"], ["Make a question: She is from Tashkent.", "Is she from Tashkent?"], ["Short answer (no): Are you a teacher?", "No, I’m not."]] },
      { cat: "Unit 3", qs: [["He ___ a car. (have)", "has"], ["Near, many: ___ books", "these"], ["Where is the cat? (stol ostida)", "It’s under the table."]] },
      { cat: "Unit 4", qs: [["Make it NO: I can drive.", "I can’t drive."], ["Say 45 in English.", "forty-five"], ["Make it NO: Open the window!", "Don’t open the window!"]] },
      { cat: "Unit 5", qs: [["She ___ (work) in a bank.", "works"], ["Make a question: He likes tea.", "Does he like tea?"], ["“Men hech qachon sut ichmayman.” in English", "I never drink milk."]] },
      { cat: "Unit 6", qs: [["read → ___ (-ing)", "reading"], ["Make a question: They are playing.", "Are they playing?"], ["some or any? There aren’t ___ eggs.", "any"]] }
    ],
    mime: [
      { cue: "wave hello", say: "Hello! / Hi!" },
      { cue: "count on your fingers to 10", say: "one, two, three… ten!" },
      { cue: "point at a chair (a command)", say: "Sit down!" },
      { cue: "swim", say: "You can swim! / You are swimming!" },
      { cue: "look at your watch", say: "What time is it?" },
      { cue: "eat plov, happy face", say: "You are eating plov! / You like plov!" },
      { cue: "brush your teeth", say: "You are brushing your teeth!" },
      { cue: "read a book", say: "You are reading a book!" },
      { cue: "drink tea", say: "You are drinking tea!" },
      { cue: "shake with cold", say: "It’s cold!" },
      { cue: "walk and turn left", say: "Turn left!" },
      { cue: "sleep", say: "You are sleeping!" }
    ],
    build: [
      { w: ["My","name","is","Dilnoza"], e: "." },
      { w: ["She","is","from","Samarkand"], e: "." },
      { w: ["I","have","two","sisters"], e: "." },
      { w: ["The","cat","is","under","the","table"], e: "." },
      { w: ["Can","you","swim"], e: "?" },
      { w: ["Does","he","like","plov"], e: "?" },
      { w: ["What","are","you","doing"], e: "?" },
      { w: ["There","aren’t","any","eggs"], e: "." }
    ],
    auction: [
      { s: "My name is Bobur.", ok: true },
      { s: "I am have a car.", ok: false, fix: "I have a car." },
      { s: "Where are you from?", ok: true },
      { s: "She have two sisters.", ok: false, fix: "She has two sisters." },
      { s: "There are three chairs.", ok: true },
      { s: "He can speaks English.", ok: false, fix: "He can speak English." },
      { s: "Does she like plov?", ok: true },
      { s: "I am go to school now.", ok: false, fix: "I am going to school now." },
      { s: "We aren’t watching TV.", ok: true },
      { s: "There are any apples.", ok: false, fix: "There are some apples." },
      { s: "It’s a orange.", ok: false, fix: "It’s an orange." },
      { s: "Turn left at the bank.", ok: true }
    ]
  }
};
