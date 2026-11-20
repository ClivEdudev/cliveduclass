/* Beginner · Lesson 18 · Unit 3 review
   Games and practice with Unit 3 (lessons 13–17) only:
   have / has (13), this / that / these / those (14), my / your / his / her / our / their, ’s, Whose…? (15),
   there is / there are, rooms and furniture (16), in / on / under / next to, Where is…? (17).
   No new grammar.
   Built for Mon 18 Jan 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b18",
  n: 18,
  title: "Unit 3 review",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 18", title: "Unit 3<br><span class='cy'>Review</span>", lead: "have · this / that · his / her · there is · in / on · Takrorlash", chips: [["Let’s play!", "peach"], ["O’ynaymiz!", "mint"], ["Takrorlaymiz!", "skyb"]] },
    { t: "examples", title: "In Unit 3 we learned", items: [
      ["I <span class='ca'>have</span> a phone. She <span class='ca'>has</span> two brothers.", "Telefonim bor. Uning ikkita akasi bor."],
      ["<span class='ca'>This</span> is my bag. <span class='ca'>Those</span> are your books.", "Bu mening sumkam. Anavilar sizning kitoblaringiz."],
      ["This is <span class='ca'>Ali’s</span> pen. <span class='ca'>His</span> pen is blue.", "Bu Alining ruchkasi. Uning ruchkasi ko’k."],
      ["<span class='ca'>There is</span> a sofa. <span class='ca'>There are</span> two beds.", "Divan bor. Ikkita karavot bor."],
      ["The cat is <span class='ca'>under</span> the bed.", "Mushuk karavot tagida."],
      ["<span class='cw'>Whose</span> bag is this? <span class='cw'>Where</span> are my keys?", "Bu kimning sumkasi? Kalitlarim qayerda?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: one sentence each", sub: "Pick a start. Say one true sentence about you.",
      cards: [{ t: "I have…", uz: "Menda … bor" }, { t: "This is my…", uz: "Bu mening …im" }, { t: "My friend’s name is…", uz: "Do’stimning ismi …" }, { t: "There is a … in my home.", uz: "Uyimda … bor" }, { t: "My phone is on / in…", uz: "Telefonim … ustida / ichida" }, { t: "My mother has…", uz: "Onamning … bor" }] },

    /* ---------- QUICK REMINDERS ---------- */
    { t: "cols", eb: "Remember · Eslab qoling", title: "Have or has? Is or are?", menu: "Have / has · is / are", cols: [
      { bg: "mint", label: "have", lc: "g", fs: 38, lines: ["I <span class='ca'>have</span>", "you / we / they <span class='ca'>have</span>"], uz: "Men, siz, biz, ular → have" },
      { bg: "peach", label: "has", lc: "r", fs: 38, lines: ["he <span class='ca'>has</span>", "she / it <span class='ca'>has</span>"], uz: "U (bitta odam yoki narsa) → has" },
      { bg: "skyb", label: "is / are", lc: "b", fs: 38, lines: ["There <span class='ca'>is</span> a bed.", "There <span class='ca'>are</span> two beds."], uz: "Bitta → is, ko’p → are" } ] },
    { t: "quad", eb: "Remember · Eslab qoling", title: "This, that, these, those", items: [
      { bg: "peach", w: "👉📕", label: "this = bu (yaqin)", en: "This is my book.", uz: "Bu mening kitobim." },
      { bg: "mint", w: "👉📕📕", label: "these = bular (yaqin)", en: "These are my books.", uz: "Bular mening kitoblarim." },
      { bg: "skyb", w: "👉 … 🚗", label: "that = anavi (uzoq)", en: "That is Aziz’s car.", uz: "Anavi Azizning mashinasi." },
      { bg: "butter", w: "👉 … 🚗🚗", label: "those = anavilar (uzoq)", en: "Those are red cars.", uz: "Anavilar qizil mashinalar." } ] },
    { t: "table", eb: "Remember · Eslab qoling", title: "My, your, his, her…", head: ["Who", "Whose", "Example", "Uzbek"], rows: [
      ["I", "<b class='ca'>my</b>", "my bag", "mening sumkam"],
      ["you", "<b class='ca'>your</b>", "your bag", "sizning sumkangiz"],
      ["he", "<b class='ca'>his</b>", "his bag", "uning sumkasi (o’g’il bola)"],
      ["she", "<b class='ca'>her</b>", "her bag", "uning sumkasi (qiz bola)"],
      ["we", "<b class='ca'>our</b>", "our bag", "bizning sumkamiz"],
      ["they", "<b class='ca'>their</b>", "their bag", "ularning sumkasi"] ],
      notes: ["Ali’s bag = Alining sumkasi", "Whose bag is this? = Bu kimning sumkasi?"] },

    /* ---------- PRACTICE ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "All Unit 3 mixed. Tap to reveal.", rows: [
      ["Mening ikkita singlim bor.", "I have two sisters."],
      ["Bular mening kitoblarim.", "These are my books."],
      ["Bu Lolaning sumkasi.", "This is Lola’s bag."],
      ["Oshxonada muzlatkich bor.", "There is a fridge in the kitchen."],
      ["Mushuk divan tagida.", "The cat is under the sofa."] ] },
    { t: "gaps", title: "Which word is missing?", sub: "All Unit 3 mixed. Tap to check.", w: 200, fs: 36, rows: [
      ["She ___ a red phone.", "has"], ["___ are my keys. (here)", "These"], ["Bobur has a bag. ___ bag is black.", "His"],
      ["There ___ two chairs.", "are"], ["The cat is ___ the box. (ichida)", "in"], ["___ bag is this? — It’s Madina’s.", "Whose"] ] },
    { t: "gaps", title: "Which word is missing? Round 2", sub: "Say the full sentence. Tap to check.", w: 200, fs: 36, rows: [
      ["We ___ a big kitchen.", "have"], ["___ is a bus. (far)", "That"], ["Lola has a cat. ___ cat is white.", "Her"],
      ["There ___ a TV in my room.", "is"], ["Where ___ my books?", "are"], ["This is ___ book. (Aziz)", "Aziz’s"] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: one → many", sub: "Make it many. Tap to check.", fs: 38, rows: [
      ["This is my book.", "These are my books."],
      ["That is a car.", "Those are cars."],
      ["There is a chair.", "There are two chairs."],
      ["The key is on the table.", "The keys are on the table."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["She have a phone.", "She has a phone."],
      ["This are my books.", "These are my books. / This is my book."],
      ["This is Lola bag.", "This is Lola’s bag."],
      ["There is two beds.", "There are two beds."],
      ["The cat under the bed.", "The cat is under the bed."] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "sky", title: "Tell your partner about your home", sub: "Pairs. Say 4 sentences. Your partner listens and asks one question: “Where is your…?”", size: 44,
      cards: ["There is a … in my kitchen.", "There are … rooms.", "My bed is next to…", "My TV is in…", "I have a…", "My brother / sister has…"] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "wheel", bg: "ink" },
    { t: "game", g: "board" },
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say what I have and what she has", "use this, that, these, those", "use my, your, his, her, our, their and ’s", "ask “Whose … is this?”", "describe my home with there is / there are", "say where things are: in, on, under, next to"] },
    { t: "bye", chips: [["I have…", "peach"], ["There is…", "mint"], ["It’s under the bed.", "skyb"]] }
  ],
  games: {
    wheel: [
      { name: "Have / has", tasks: ["Say 2 things you have.", "Say one thing your mother has.", "Say: I have a … and a …", "Say: My friend has…"] },
      { name: "This / that", tasks: ["Point near: This is my…", "Point far: That is a…", "Point at 2 things: These are…", "Point far at 2 things: Those are…"] },
      { name: "Whose?", tasks: ["Pick up a pen. Ask: Whose pen is this?", "Say your mother’s name: My mother’s name is…", "Talk about a boy: His bag is…", "Talk about a girl: Her bag is…"] },
      { name: "My home", tasks: ["Say: There are … rooms in my home.", "Say one thing in your kitchen.", "Say one thing in your bedroom.", "Say: There is a … in my living room."] },
      { name: "Where?", tasks: ["Where is your phone now?", "Where is your bag now?", "Put a pen under a book. Say it.", "Who is next to you?"] },
      { name: "Mixed", tasks: ["Say 2 sentences about your family.", "Say 2 things in this classroom.", "Say one sentence with “our”.", "Say one sentence with “their”."] }
    ],
    board: [
      { cat: "Have / has", qs: [["I ___ a phone.", "have"], ["Madina ___ two sisters.", "has"], ["I → she: I have a cat.", "She has a cat."]] },
      { cat: "This / these", qs: [["Near, one: ___ is my bag.", "This"], ["Far, many: ___ are cars.", "Those"], ["Make it many: This is a book.", "These are books."]] },
      { cat: "His / her", qs: [["Aziz → ___ bag", "his"], ["Lola → ___ phone", "her"], ["we → ___ home · they → ___ home", "our · their"]] },
      { cat: "’s and Whose", qs: [["the bag of Ali →", "Ali’s bag"], ["“Bu kimning ruchkasi?”", "Whose pen is this?"], ["“Bu Dilnozaning kitobi.”", "This is Dilnoza’s book."]] },
      { cat: "There is / are", qs: [["There ___ a sofa.", "is"], ["There ___ three beds.", "are"], ["“Oshxonada muzlatkich bor.”", "There is a fridge in the kitchen."]] },
      { cat: "In / on / under", qs: [["“tagida” in English", "under"], ["Where ___ my keys?", "are"], ["“Telefon stol ustida.”", "The phone is on the table."]] }
    ],
    mime: [
      { cue: "show your phone proudly", say: "I have a phone!" },
      { cue: "point at a bag near you", say: "This is my bag." },
      { cue: "point at the door, far away", say: "That is the door." },
      { cue: "hold up two pens", say: "These are my pens." },
      { cue: "take a friend’s pen, look puzzled", say: "Whose pen is this?" },
      { cue: "give a pen back to a boy", say: "It’s his pen." },
      { cue: "put a pen in a bag", say: "The pen is in the bag." },
      { cue: "put a book under the chair", say: "The book is under the chair." },
      { cue: "sit on the floor", say: "You are on the floor!" },
      { cue: "stand next to the window", say: "You are next to the window." },
      { cue: "be a cat sleeping under a desk", say: "The cat is under the desk!" }
    ],
    build: [
      { w: ["She","has","two","brothers"], e: "." },
      { w: ["These","are","my","keys"], e: "." },
      { w: ["Whose","bag","is","this"], e: "?" },
      { w: ["This","is","Aziz’s","phone"], e: "." },
      { w: ["There","are","three","rooms"], e: "." },
      { w: ["My","phone","is","on","the","table"], e: "." },
      { w: ["The","cat","is","under","the","bed"], e: "." },
      { w: ["Where","are","my","books"], e: "?" }
    ],
    auction: [
      { s: "She has a new phone.", ok: true },
      { s: "He have two sisters.", ok: false, fix: "He has two sisters." },
      { s: "Those are my friends.", ok: true },
      { s: "This are my books.", ok: false, fix: "These are my books. / This is my book." },
      { s: "Lola is my friend. His bag is red.", ok: false, fix: "Lola is my friend. Her bag is red." },
      { s: "This is Bobur’s car.", ok: true },
      { s: "There are two beds in my room.", ok: true },
      { s: "There is three chairs.", ok: false, fix: "There are three chairs." },
      { s: "The ball is under the sofa.", ok: true },
      { s: "Where is my keys?", ok: false, fix: "Where are my keys?" }
    ]
  }
};
