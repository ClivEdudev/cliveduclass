window.LESSON = {
  n: 6,
  title: "Week 1 review",
  slides: [
    { t: "cover", tag: "Lesson 6 · Review", title: "Week 1<br><span class='cy'>Review</span>", lead: "can · there is / are · this / that · my / ’s · -ing", chips: [["Let’s play!", "peach"], ["O’ynaymiz!", "mint"]] },
    { t: "examples", title: "This week we learned", items: [
      ["I <span class='ca'>can</span> swim. She <span class='cn'>can’t</span> fly.", "Men suza olaman. U ucha olmaydi."],
      ["<span class='ca'>There are</span> two beds in my room.", "Xonamda ikkita karavot bor."],
      ["<span class='ca'>These</span> are my books. <span class='cw'>That</span> is a bus.", "Bular mening kitoblarim. Anavi avtobus."],
      ["This is <span class='ca'>Lola’s</span> bag. <span class='cw'>Her</span> bag is red.", "Bu Lolaning sumkasi. Uning sumkasi qizil."],
      ["My brother <span class='ca'>is working</span> now.", "Akam hozir ishlayapti."],
      ["<span class='cw'>Can</span> you…? <span class='cw'>Is there</span>…? <span class='cw'>What are</span> you doing?", "Questions for every topic!"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: one sentence each", sub: "Pick a start. Say one true sentence about you.",
      cards: ["I can…", "There is… in my room.", "These are my…", "My best friend’s name is…", "Right now I am…", "Can you…?"] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "All topics mixed. Tap to reveal.", w: 720, rows: [
      ["Men gitara chala olaman.", "I can play the guitar."],
      ["Xonada ikkita karavot bor.", "There are two beds in the room."],
      ["Bular mening kitoblarim.", "These are my books."],
      ["Akam hozir ishlayapti.", "My brother is working now."] ] },
    { t: "gaps", title: "Which word is missing?", sub: "All topics mixed. Tap to check.", fs: 38, w: 230, rows: [
      ["Can you swim? Yes, I ___.", "can"], ["___ there any milk?", "Is"],
      ["___ are my shoes. (here)", "These"], ["Ali has a cat. ___ cat is white.", "His"],
      ["Look! It ___ raining.", "is"], ["There ___ three chairs.", "are"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["There is two cats.", "There are two cats."],
      ["She can sings.", "She can sing."],
      ["This is Lola bag.", "This is Lola’s bag."],
      ["He is play now.", "He is playing now."] ] },
    { t: "game", g: "wheel", bg: "ink" },
    { t: "game", g: "board" },
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "mystery" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say what I can and can’t do", "use there is and there are", "use this, that, these, those", "use my, his, her and ’s", "talk about now with -ing", "ask a question for every topic"] },
    { t: "bye", chips: [["I can…", "peach"], ["There is…", "mint"], ["I am…ing", "skyb"]] }
  ],
  games: {
    wheel: [
      { name: "Can", tasks: ["Say 3 things you can do.", "Say 2 things you can’t do.", "Ask the teacher 2 “Can you…?” questions.", "Say what a cat can and can’t do."] },
      { name: "There is", tasks: ["Describe your kitchen with there is / there are.", "Say 3 things in this classroom.", "Ask: “Is there a … near your house?”", "Say 2 things that aren’t in this room."] },
      { name: "This / that", tasks: ["Point and say 2 sentences with this and these.", "Point far and say 2 sentences with that and those.", "Make plurals: child, box, city.", "Point at something and ask: “What is that?”"] },
      { name: "Whose", tasks: ["Say 3 things about your family with “my”.", "Talk about a classmate with his or her.", "Pick up something and ask: “Whose … is this?”", "Say your mother’s or father’s name with ’s."] },
      { name: "-ing", tasks: ["Mime an action. Your team says what you are doing.", "Say what 3 people in your family are doing now.", "Ask a classmate: “What are you doing?”", "Say 2 things you aren’t doing now."] },
      { name: "Mixed", tasks: ["Say one sentence with “can” and one with -ing.", "Describe your dream room: There is…", "Talk about your best friend for 20 seconds.", "Ask your team 2 different questions."] }
    ],
    board: [
      { cat: "Can", qs: [["Make it NO: I can drive.", "I can’t drive."], ["Short answer (yes): Can you swim?", "Yes, I can."], ["Fix it: She cans dance.", "She can dance."]] },
      { cat: "There is / are", qs: [["___ a book on the desk.", "There is"], ["Make a question: There are eggs.", "Are there any eggs?"], ["How many days are in a week?", "There are seven days in a week."]] },
      { cat: "This / these", qs: [["Plural: one box → two ___", "boxes"], ["Make it plural: That is a bird.", "Those are birds."], ["Plural: child →", "children"]] },
      { cat: "Whose", qs: [["Lola → ___ bag", "her"], ["the car of Ali →", "Ali’s car"], ["Ask about a phone.", "Whose phone is this?"]] },
      { cat: "-ing", qs: [["run →", "running"], ["Make it NO: She is sleeping.", "She isn’t sleeping."], ["Translate: Nima qilyapsiz?", "What are you doing?"]] },
      { cat: "Translate", qs: [["U suza olmaydi.", "He / She can’t swim."], ["Sumkamda ruchka yo’q.", "There isn’t a pen in my bag."], ["Bu Azizning telefoni.", "This is Aziz’s phone."]] }
    ],
    mime: [
      { cue: "can swim", say: "You can swim!" }, { cue: "is cooking", say: "You are cooking! / She is cooking." },
      { cue: "can’t see", say: "You can’t see!" }, { cue: "is sleeping", say: "You are sleeping! / He is sleeping." },
      { cue: "can play the guitar", say: "You can play the guitar!" }, { cue: "is reading", say: "You are reading!" },
      { cue: "is dancing", say: "You are dancing! / She is dancing." }, { cue: "can’t swim", say: "You can’t swim!" },
      { cue: "is driving", say: "You are driving!" }, { cue: "is eating plov", say: "You are eating plov!" }
    ],
    mystery: { title: "Guess the room", unit: "Room", how: "Read the clues. Guess with “Is it a…?”. After 1 clue: 300 points, after 2: 200, after 3: 100.", items: [
      { p: "Kitchen", uz: "Oshxona", c: ["People are cooking here.", "There are plates and cups.", "There is a fridge."] },
      { p: "Classroom", uz: "Sinfxona", c: ["Students are learning here.", "There are many chairs.", "There is a board."] },
      { p: "Bedroom", uz: "Yotoqxona", c: ["Someone is sleeping here.", "There are pillows.", "There is a big bed."] },
      { p: "Swimming pool", uz: "Basseyn", c: ["You can swim here.", "There is a lot of water.", "People are wearing swimsuits."] },
      { p: "Library", uz: "Kutubxona", c: ["People are reading here.", "There are thousands of books.", "You can’t talk loudly here."] },
      { p: "Stadium", uz: "Stadion", c: ["There are thousands of people.", "They are watching a match.", "Players are running on the grass."] } ] },
    build: [
      { w: ["I","can","play","chess"], e: "." }, { w: ["There","are","two","beds"], e: "." }, { w: ["These","are","my","keys"], e: "." },
      { w: ["Whose","bag","is","this"], e: "?" }, { w: ["She","is","reading","a","book"], e: "." }, { w: ["Can","you","swim"], e: "?" },
      { w: ["Is","there","a","bank","here"], e: "?" }, { w: ["What","are","you","doing"], e: "?" }
    ],
    auction: [
      { s: "There is two cats.", ok: false, fix: "There are two cats." },
      { s: "She can play the piano.", ok: true },
      { s: "This is Ali’s bike.", ok: true },
      { s: "They is watching TV.", ok: false, fix: "They are watching TV." },
      { s: "Those children are happy.", ok: true },
      { s: "Lola is my friend. His dog is small.", ok: false, fix: "Lola is my friend. Her dog is small." },
      { s: "Are there any eggs?", ok: true },
      { s: "I can to cook.", ok: false, fix: "I can cook." },
      { s: "We are learning English.", ok: true },
      { s: "These boxs are heavy.", ok: false, fix: "These boxes are heavy." }
    ]
  }
};
