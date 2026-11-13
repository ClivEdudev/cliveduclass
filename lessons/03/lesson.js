window.LESSON = {
  n: 3,
  title: "This, that, these, those",
  lockAnswers: false,
  slides: [
    { t: "cover", title: "This or <span class='cy'>that?</span>", lead: "This, that, these, those, and plurals", chips: [["Bu nima?", "peach"], ["Anavi nima?", "mint"]] },
    { t: "goals", items: [
      ["Things near you", "This is my pen.", "Bu mening ruchkam."],
      ["Things far away", "That is a bus.", "Anavi avtobus."],
      ["Many things", "These are books.", "Bular kitoblar."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: point and say", sub: "Pick a card. Point at something real in the room and say the sentence.",
      cards: ["This is a…", "That is a…", "These are…", "Those are…", "What is this?", "What are those?"] },
    { t: "quad", eb: "The rule", title: "Near or far? One or many?", items: [
      { w: "this", bg: "mint", label: "here · one", en: "This is my bag.", uz: "Bu mening sumkam." },
      { w: "these", bg: "mint", label: "here · many", en: "These are my keys.", uz: "Bular mening kalitlarim." },
      { w: "that", bg: "skyb", label: "there · one", en: "That is a car.", uz: "Anavi mashina." },
      { w: "those", bg: "skyb", label: "there · many", en: "Those are birds.", uz: "Anavilar qushlar." } ] },
    { t: "cols", eb: "Plurals", title: "One → many", cols: [
      { bg: "mint", label: "+ s", lc: "g", fs: 44, lines: ["book → books", "pen → pens", "car → cars"] },
      { bg: "butter", label: "+ es", fs: 44, lines: ["box → boxes", "bus → buses", "watch → watches"] },
      { bg: "skyb", label: "y → ies", lc: "b", fs: 44, lines: ["baby → babies", "city → cities", "family → families"] } ],
      notes: ["man → men", "woman → women", "child → children", "person → people"] },
    { t: "examples", title: "Examples", items: [
      ["Is <span class='ca'>this</span> your phone?", "Bu sizning telefoningizmi?"],
      ["Are <span class='ca'>these</span> your shoes?", "Bular sizning poyabzalingizmi?"],
      ["<span class='cw'>That</span> man is my teacher.", "Anavi kishi mening o’qituvchim."],
      ["<span class='cw'>Those</span> children are happy.", "Anavi bolalar xursand."],
      ["What is <span class='ca'>this</span>?", "Bu nima?"],
      ["What are <span class='cw'>those</span>?", "Anavilar nima?"] ] },
    { t: "gaps", title: "Make it plural", sub: "one → two. Tap to check.", w: 300, rows: [
      ["one book → two ___", "books"], ["one box → three ___", "boxes"],
      ["one baby → two ___", "babies"], ["one child → five ___", "children"],
      ["one man → two ___", "men"], ["one city → many ___", "cities"] ] },
    { t: "quiz", bg: "yel", kind: "en", title: "Quiz: this, that, these or those?", sub: "Look at the hint in brackets. Tap to check.", w: 440, rows: [
      ["___ is my pen. (in my hand)", "This"],
      ["___ are my shoes. (on my feet)", "These"],
      ["___ is a plane. (in the sky)", "That"],
      ["___ are stars. (in the sky)", "Those"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["This are my books.", "These are my books."],
      ["Those is a dog.", "That is a dog."],
      ["I have two childs.", "I have two children."],
      ["These boxs are heavy.", "These boxes are heavy."] ] },
    { t: "spot", bg: "sky", title: "Show and tell", sub: "Take three things from your bag. Pick a card and say a sentence.", size: 56,
      cards: ["This is my…", "These are my…", "That is… (point)", "Those are…", "Is this your…?", "Are these your…?"] },
    { t: "game", g: "board" },
    { t: "game", g: "mystery" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["use this for one thing near me", "use these for many things near me", "use that and those for far things", "make plurals with -s and -es", "change y to -ies", "remember men, women, children"] },
    { t: "bye", chips: [["This is…", "peach"], ["Those are…", "mint"], ["What is that?", "skyb"]] }
  ],
  games: {
    board: [
      { cat: "This / these", qs: [["Hold a pen: ___ is a pen.", "This"], ["Hold two pens: ___ are pens.", "These"], ["Make it plural: This is my book.", "These are my books."]] },
      { cat: "That / those", qs: [["Point to the door: ___ is a door.", "That"], ["Point to the windows and say it.", "Those are windows."], ["Make it plural: That is a car.", "Those are cars."]] },
      { cat: "Plurals", qs: [["cat →", "cats"], ["bus →", "buses"], ["child →", "children"]] },
      { cat: "Questions", qs: [["Ask about a thing in your hand.", "What is this?"], ["Ask about things far away.", "What are those?"], ["Short answer (yes): Is this your bag?", "Yes, it is."]] },
      { cat: "Translate", qs: [["Bu kitob.", "This is a book."], ["Anavilar daraxtlar.", "Those are trees."], ["Bular sizning kalitlaringizmi?", "Are these your keys?"]] },
      { cat: "Fix it", qs: [["These is my bag.", "This is my bag."], ["Those car is red.", "That car is red."], ["two womans", "two women"]] }
    ],
    mystery: { title: "What is this?", unit: "Thing", how: "Read the clues. Guess with “Is it a…?” or “Are they…?”. After 1 clue: 300 points, after 2: 200, after 3: 100.", items: [
      { p: "a phone", uz: "telefon", c: ["This is small and you have it every day.", "It is in your pocket or your bag.", "You call your friends with this."] },
      { p: "keys", uz: "kalitlar", c: ["These are small and made of metal.", "You need these at the door.", "These open your house and your car."] },
      { p: "the sun", uz: "quyosh", c: ["That is very, very far away.", "That is hot and yellow.", "You see that in the sky in the day."] },
      { p: "shoes", uz: "poyabzal", c: ["You have two of these.", "These are on your feet.", "You put these on before you go out."] },
      { p: "a board", uz: "doska", c: ["That is in every classroom.", "That is on the wall.", "The teacher writes on that."] },
      { p: "stars", uz: "yulduzlar", c: ["Those are very far away.", "You see those at night.", "Those are small lights in the sky."] } ] },
    build: [
      { w: ["This","is","my","pen"], e: "." }, { w: ["These","are","my","books"], e: "." }, { w: ["That","is","a","big","bus"], e: "." },
      { w: ["Those","are","birds"], e: "." }, { w: ["Is","this","your","phone"], e: "?" }, { w: ["What","are","those"], e: "?" }
    ],
    auction: [
      { s: "These are my shoes.", ok: true },
      { s: "This are my keys.", ok: false, fix: "These are my keys." },
      { s: "Those children are happy.", ok: true },
      { s: "I have three boxs.", ok: false, fix: "I have three boxes." },
      { s: "That is a tall tree.", ok: true },
      { s: "Those is my car.", ok: false, fix: "That is my car." },
      { s: "Two mans are here.", ok: false, fix: "Two men are here." },
      { s: "Is that your teacher?", ok: true }
    ]
  }
};
