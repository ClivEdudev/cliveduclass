window.LESSON = {
  n: 2,
  title: "There is and there are",
  slides: [
    { t: "cover", title: "There is…<br><span class='cy'>There are…</span>", lead: "Talking about places and things", chips: [["Xonada stol bor.", "peach"], ["Ko’p kitoblar bor.", "mint"]] },
    { t: "goals", items: [
      ["Talk about one thing", "There is a cat.", "Mushuk bor."],
      ["Talk about many things", "There are two cats.", "Ikkita mushuk bor."],
      ["Ask: Is there…?", "Is there a park?", "Park bormi?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: look around the classroom", sub: "Pick a card. Say a sentence: “There is a… / There are…”",
      cards: ["a board", "chairs", "a door", "windows", "a clock", "books"] },
    { t: "formula", bg: "ink", eb: "The rule", title: "There is / There are", rows: [
      { chips: [["There is", "peach"], ["a cat", "mint"], ["in the room.", "skyb"]], uz: "Xonada mushuk bor." },
      { chips: [["There are", "peach"], ["two cats", "mint"], ["in the room.", "skyb"]], uz: "Xonada ikkita mushuk bor." } ],
      notes: ["one thing → There is (There’s)", "two or more → There are", "Uzbek: … bor"] },
    { t: "cols", eb: "Three forms", title: "Yes, no and questions", cols: [
      { bg: "mint", label: "Yes", lc: "g", fs: 40, lines: ["There <span class='ca'>is</span> a bank.", "There <span class='ca'>are</span> shops."], uz: "Bank bor. Do’konlar bor." },
      { bg: "peach", label: "No", lc: "r", fs: 40, lines: ["There <span class='cn'>isn’t</span> a bank.", "There <span class='cn'>aren’t</span> any shops."], uz: "Bank yo’q. Do’konlar yo’q." },
      { bg: "skyb", label: "Question", lc: "b", fs: 40, lines: ["<span class='cw'>Is there</span> a bank?", "<span class='cw'>Are there</span> any shops?"], uz: "Bank bormi? Do’konlar bormi?" } ],
      notes: ["Yes, there is. · No, there isn’t.", "Yes, there are. · No, there aren’t."] },
    { t: "examples", title: "Examples", items: [
      ["There <span class='ca'>is</span> a cat on the bed.", "Karavotda mushuk bor."],
      ["There <span class='ca'>are</span> three apples.", "Uchta olma bor."],
      ["There <span class='cn'>isn’t</span> a pen in my bag.", "Sumkamda ruchka yo’q."],
      ["There <span class='cn'>aren’t</span> any students here.", "Bu yerda o’quvchilar yo’q."],
      ["<span class='cw'>Is there</span> a café near here?", "Yaqin atrofda kafe bormi?"],
      ["<span class='cw'>Are there</span> any parks in your city?", "Shahringizda parklar bormi?"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", w: 720, rows: [
      ["Stolda kitob bor.", "There is a book on the table."],
      ["Sinfda o’nta o’quvchi bor.", "There are ten students in the class."],
      ["Muzlatgichda sut yo’q.", "There isn’t any milk in the fridge."],
      ["Yaqinda bank bormi?", "Is there a bank near here?"] ] },
    { t: "gaps", title: "Which word is missing?", sub: "is · are · isn’t · aren’t. Tap to check.", w: 220, rows: [
      ["There ___ a dog in the garden.", "is"], ["There ___ five chairs.", "are"],
      ["___ there a TV?", "Is"], ["There ___ any eggs. (not)", "aren’t"],
      ["___ there any shops?", "Are"], ["There ___ a problem. (not)", "isn’t"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", w: 720, rows: [
      ["There are a cat.", "There is a cat."],
      ["There is two books.", "There are two books."],
      ["Is there any shops?", "Are there any shops?"],
      ["It is a park near my house.", "There is a park near my house."] ] },
    { t: "spot", bg: "sky", title: "Talk about your home and city", sub: "Pick a card. Finish the sentence about your life.", size: 52,
      cards: ["In my room there is…", "In my city there are…", "In our classroom there isn’t…", "Is there a … near your house?", "There are … people in my family.", "In my bag there is…"] },
    { t: "game", g: "board" },
    { t: "game", g: "mystery" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say There is for one thing", "say There are for many things", "make negatives: isn’t / aren’t", "ask Is there…? / Are there…?", "give short answers", "describe my room"] },
    { t: "bye", chips: [["There is…", "peach"], ["There are…", "mint"], ["Is there…?", "skyb"]] }
  ],
  games: {
    board: [
      { cat: "There is", qs: [["Say one thing in this classroom.", "There is a board. (any true sentence)"], ["a cat / in the box", "There is a cat in the box."], ["Short form of “There is”", "There’s"]] },
      { cat: "There are", qs: [["three / chairs", "There are three chairs."], ["How many days are in a week?", "There are seven days in a week."], ["How many months are in a year?", "There are twelve months in a year."]] },
      { cat: "Negatives", qs: [["Make it NO: There is a dog.", "There isn’t a dog."], ["Make it NO: There are shops.", "There aren’t any shops."], ["Say two things that aren’t in this room.", "There isn’t a… There aren’t any…"]] },
      { cat: "Questions", qs: [["Make a question: There is a bank.", "Is there a bank?"], ["Short answer (yes): Is there a park?", "Yes, there is."], ["Short answer (no): Are there any eggs?", "No, there aren’t."]] },
      { cat: "Translate", qs: [["Stol bor.", "There is a table."], ["Ikkita deraza bor.", "There are two windows."], ["Shaharda metro bormi?", "Is there a metro in the city?"]] },
      { cat: "Fix it", qs: [["There are a pen.", "There is a pen."], ["There is four cats.", "There are four cats."], ["Is there any apples?", "Are there any apples?"]] }
    ],
    mystery: { title: "Guess the room", unit: "Room", how: "Read the clues. Guess with “Is it a…?”. After 1 clue: 300 points, after 2: 200, after 3: 100.", items: [
      { p: "Kitchen", uz: "Oshxona", c: ["There are plates and cups.", "There is a fridge.", "There is a cooker."] },
      { p: "Bathroom", uz: "Hammom", c: ["There is a mirror.", "There are towels.", "There is a shower."] },
      { p: "Classroom", uz: "Sinfxona", c: ["There are many chairs.", "There is a teacher.", "There is a board."] },
      { p: "Bedroom", uz: "Yotoqxona", c: ["There is a wardrobe.", "There are pillows.", "There is a big bed."] },
      { p: "Park", uz: "Park", c: ["There isn’t a roof.", "There are benches.", "There are many trees."] },
      { p: "Bazaar", uz: "Bozor", c: ["There are many people.", "There isn’t a ticket office.", "There are fruits and vegetables."] } ] },
    build: [
      { w: ["There","is","a","cat"], e: "." }, { w: ["There","are","two","books"], e: "." }, { w: ["Is","there","a","bank"], e: "?" },
      { w: ["There","aren’t","any","shops"], e: "." }, { w: ["Are","there","any","eggs"], e: "?" }, { w: ["There","is","a","park","near","here"], e: "." }
    ],
    auction: [
      { s: "There are a dog.", ok: false, fix: "There is a dog." },
      { s: "There is a clock on the wall.", ok: true },
      { s: "Is there any chairs?", ok: false, fix: "Are there any chairs?" },
      { s: "There aren’t any eggs.", ok: true },
      { s: "There is three windows.", ok: false, fix: "There are three windows." },
      { s: "Are there any parks here?", ok: true },
      { s: "There isn’t a bus.", ok: true },
      { s: "It has a shop near here.", ok: false, fix: "There is a shop near here." }
    ]
  }
};
