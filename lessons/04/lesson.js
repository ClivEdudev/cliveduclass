window.LESSON = {
  n: 4,
  title: "My, your, his, her and ’s",
  lockAnswers: false,
  slides: [
    { t: "cover", title: "Whose is <span class='cy'>it?</span>", lead: "my, your, his, her… and ’s", chips: [["Bu mening kitobim.", "peach"], ["Bu Alining mashinasi.", "mint"]] },
    { t: "goals", items: [
      ["Say whose it is", "This is my book.", "Bu mening kitobim."],
      ["Use ’s with names", "This is Ali’s car.", "Bu Alining mashinasi."],
      ["Ask: Whose…?", "Whose bag is this?", "Bu kimning sumkasi?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: my family", sub: "Pick a card. Say: “My ___ is (name).” or “My ___ is a (job).”",
      cards: ["mother", "father", "brother", "sister", "grandmother", "best friend"] },
    { t: "table", eb: "The rule", title: "Who → whose", head: ["Person", "Whose", "Example", "Uzbek"], rows: [
      ["I", "my", "my book", "mening kitobim"], ["you", "your", "your book", "sizning kitobingiz"],
      ["he", "his", "his book", "uning kitobi"], ["she", "her", "her book", "uning kitobi"],
      ["it", "its", "its tail", "uning dumi"], ["we", "our", "our book", "bizning kitobimiz"],
      ["they", "their", "their book", "ularning kitobi"] ] },
    { t: "cols", eb: "Careful!", title: "His or her?", cols: [
      { bg: "skyb", label: "a boy or a man", lc: "b", huge: "his", fs: 44, lines: ["Ali and <span class='cw'>his</span> car"], uz: "Ali va uning mashinasi" },
      { bg: "peach", label: "a girl or a woman", lc: "r", huge: "her", fs: 44, lines: ["Lola and <span class='cn'>her</span> car"], uz: "Lola va uning mashinasi" } ],
      notes: ["Uzbek “uning” = his AND her", "Look at the person first!"] },
    { t: "formula", bg: "ink", eb: "Names", title: "Name + ’s", rows: [
      { chips: [["Ali", "skyb"], ["’s", "peach"], ["car", "mint"]], uz: "Alining mashinasi" },
      { chips: [["My mother", "skyb"], ["’s", "peach"], ["name", "mint"]], uz: "Onamning ismi" } ],
      notes: ["’s = -ning", "Whose…? = Kimning…?"] },
    { t: "examples", title: "Examples", items: [
      ["This is <span class='ca'>my</span> bag.", "Bu mening sumkam."],
      ["<span class='cn'>Her</span> name is Lola.", "Uning ismi Lola."],
      ["<span class='cw'>His</span> brother is a doctor.", "Uning akasi shifokor."],
      ["<span class='ca'>Our</span> teacher is kind.", "Bizning o’qituvchimiz mehribon."],
      ["<span class='ca'>Their</span> house is big.", "Ularning uyi katta."],
      ["Whose phone is this? It’s <span class='ca'>Aziz’s</span>.", "Bu kimning telefoni? Azizniki."] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Mening ismim Ali.", "My name is Ali."],
      ["Lolaning sumkasi qizil.", "Lola’s bag is red."],
      ["Bu Azizning kitobi.", "This is Aziz’s book."],
      ["Ularning mashinasi yangi.", "Their car is new."] ] },
    { t: "gaps", title: "Which word is missing?", sub: "my · your · his · her · our · their. Tap to check.", fs: 38, w: 210, rows: [
      ["I have a cat. ___ cat is white.", "My"], ["Ali has a bike. ___ bike is fast.", "His"],
      ["Lola has a dog. ___ dog is small.", "Her"], ["We have a car. ___ car is old.", "Our"],
      ["They have a house. ___ house is big.", "Their"], ["You have a phone. Is this ___ phone?", "your"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", w: 720, rows: [
      ["This is Ali car.", "This is Ali’s car."],
      ["Lola is my sister. His name is Lola.", "Her name is Lola."],
      ["Me name is Aziz.", "My name is Aziz."],
      ["Whose bag is this? It’s Aziz.", "It’s Aziz’s."] ] },
    { t: "spot", bg: "sky", title: "Talk about your family", sub: "Pick a card. Finish the sentence about your life.", size: 52,
      cards: ["My mother’s name is…", "My father’s job is…", "My best friend’s name is…", "Our house is…", "His / Her favourite food is…", "Whose … is this?"] },
    { t: "game", g: "board" },
    { t: "game", g: "mystery" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["use my, your, our, their", "choose his or her correctly", "use ’s with names", "ask “Whose … is this?”", "answer “It’s Ali’s.”", "talk about my family"] },
    { t: "bye", chips: [["My name is…", "peach"], ["My mother’s…", "mint"], ["Whose…?", "skyb"]] }
  ],
  games: {
    board: [
      { cat: "my / your", qs: [["I have a pen. It is ___ pen.", "my"], ["Ask a classmate their name.", "What is your name?"], ["Sizning ismingiz nima?", "What is your name?"]] },
      { cat: "his / her", qs: [["Ali → ___ car", "his"], ["Lola → ___ phone", "her"], ["Uzbek “uning” = which two English words?", "his and her"]] },
      { cat: "our / their / its", qs: [["we → ___", "our"], ["they → ___", "their"], ["The dog has a long tail. ___ tail is long.", "Its"]] },
      { cat: "’s", qs: [["the book of Aziz →", "Aziz’s book"], ["the name of my mother →", "my mother’s name"], ["Akamning mashinasi", "my brother’s car"]] },
      { cat: "Whose?", qs: [["“Kimning?” in English", "Whose?"], ["Ask about a bag.", "Whose bag is this?"], ["Answer: Whose pen is this? (Lola)", "It’s Lola’s."]] },
      { cat: "Translate", qs: [["Bizning sinfimiz", "our class"], ["Ularning uyi katta.", "Their house is big."], ["Uning ismi Bobur. (a boy)", "His name is Bobur."]] }
    ],
    mystery: { title: "Whose is it?", unit: "Owner", how: "Read the clues about the thing. Guess whose it is: “It’s the teacher’s!” After 1 clue: 300, after 2: 200, after 3: 100.", items: [
      { p: "the teacher’s", uz: "o’qituvchiniki", c: ["Her bag is full of books and markers.", "Her desk is at the front.", "She writes on the board every day."] },
      { p: "a doctor’s", uz: "shifokorniki", c: ["His coat is white.", "His job is at a hospital.", "He helps sick people."] },
      { p: "a baby’s", uz: "chaqaloqniki", c: ["Its clothes are very small.", "Its bottle is full of milk.", "It sleeps and cries a lot."] },
      { p: "a cat’s", uz: "mushukniki", c: ["Its bowl is on the floor.", "Its tail is long.", "It says “meow”."] },
      { p: "a football player’s", uz: "futbolchiniki", c: ["His shoes are special.", "His shirt has a number.", "His job is on a big green field."] },
      { p: "a cook’s", uz: "oshpazniki", c: ["Her hat is tall and white.", "Her kitchen is big.", "She makes plov every day."] } ] },
    build: [
      { w: ["My","name","is","Lola"], e: "." }, { w: ["This","is","Ali’s","car"], e: "." }, { w: ["Her","bag","is","red"], e: "." },
      { w: ["Whose","phone","is","this"], e: "?" }, { w: ["Our","teacher","is","kind"], e: "." }, { w: ["Their","house","is","big"], e: "." }
    ],
    auction: [
      { s: "This is my brother’s car.", ok: true },
      { s: "She is Lola. His bag is red.", ok: false, fix: "She is Lola. Her bag is red." },
      { s: "Whose book is this?", ok: true },
      { s: "This is Aziz phone.", ok: false, fix: "This is Aziz’s phone." },
      { s: "Me sister is a nurse.", ok: false, fix: "My sister is a nurse." },
      { s: "Our school is big.", ok: true },
      { s: "Their names are Ali and Lola.", ok: true },
      { s: "We love ours teacher.", ok: false, fix: "We love our teacher." }
    ]
  }
};
