/* Beginner · Lesson 13 · I have, she has
   Teaches: have / has (positive only): I have a phone. · She has two brothers.
   I / you / we / they → have · he / she / it → has. "Who has a…?" for speaking.
   New words: phone, car, bike, computer, watch, key, dog, cat (+ have, has).
   Recycles: family words and my (11), plurals (9), colours (5), numbers 1–20 (1, 3), to be.
   No "don’t have" or "Do you have…?" yet: they come with the present simple (lessons 25–27).
   Built for Thu 31 Dec 2026 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b13",
  n: 13,
  title: "I have, she has",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 13", title: "I have, she <span class='cy'>has</span>", lead: "have and has · … bor",
      chips: [["Mening telefonim bor.", "peach"], ["Uning ikkita akasi bor.", "mint"], ["Bizning mushugimiz bor.", "skyb"]] },
    { t: "goals", items: [
      ["Say what I have", "I have a phone.", "Mening telefonim bor."],
      ["Say what he or she has", "She has a cat.", "Uning mushugi bor."],
      ["Talk about my family", "I have two brothers.", "Mening ikkita akam bor."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: my family", sub: "Pick a card. Say: “This is my…” and one more sentence. Example: “This is my brother. He is 12.” (Lesson 11)", size: 54,
      cards: [{ t: "mother", uz: "ona" }, { t: "father", uz: "ota" }, { t: "brother", uz: "aka / uka" }, { t: "sister", uz: "opa / singil" }, { t: "grandmother", uz: "buvi" }, { t: "grandfather", uz: "bobo" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "My things", menu: "New words: my things", items: [
      ["I have a <span class='ca'>phone</span>.", "phone = telefon"],
      ["My father has a <span class='ca'>car</span>.", "car = mashina"],
      ["I have a <span class='ca'>bike</span>.", "bike = velosiped"],
      ["Lola has a <span class='ca'>computer</span>.", "computer = kompyuter"],
      ["Aziz has a <span class='ca'>watch</span>.", "watch = qo’l soati"],
      ["I have a <span class='ca'>key</span>.", "key = kalit"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Pets and people", menu: "New words: pets and people", items: [
      ["We have a <span class='ca'>dog</span>.", "dog = it"],
      ["She has a <span class='ca'>cat</span>.", "cat = mushuk"],
      ["<span class='ca'>I have</span> a red bike.", "have = … bor (men, siz, biz, ular)"],
      ["<span class='ca'>He has</span> a black car.", "has = … bor (u: bitta odam)"],
      ["I have two <span class='ca'>brothers</span>.", "Mening ikkita akam bor. (Lesson 11)"],
      ["She has a <span class='ca'>sister</span>.", "Uning singlisi bor. (Lesson 11)"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Things we have", menu: "New words: pictures", items: [
      { bg: "peach", w: "📱", label: "a phone = telefon", en: "I have a phone.", uz: "Mening telefonim bor." },
      { bg: "mint", w: "🚗", label: "a car = mashina", en: "My father has a car.", uz: "Otamning mashinasi bor." },
      { bg: "skyb", w: "🐱", label: "a cat = mushuk", en: "Lola has a white cat.", uz: "Lolaning oq mushugi bor." },
      { bg: "butter", w: "🚲", label: "a bike = velosiped", en: "We have two bikes.", uz: "Bizning ikkita velosipedimiz bor." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "Have or has?", menu: "Have or has?", cols: [
      { bg: "mint", label: "have", lc: "g", fs: 44, lines: ["I <span class='ca'>have</span>", "you <span class='ca'>have</span>", "we <span class='ca'>have</span>", "they <span class='ca'>have</span>"], uz: "Men, siz / sen, biz, ular → have" },
      { bg: "peach", label: "has", lc: "r", fs: 44, lines: ["he <span class='ca'>has</span>", "she <span class='ca'>has</span>", "it <span class='ca'>has</span>"], uz: "U (bitta odam yoki narsa) → has" },
      { bg: "butter", label: "Uzbek", fs: 38, lines: ["I have a phone.", "= Mening telefonim bor."], uz: "have / has = … bor. O’zbekchada “bor” gap oxirida, inglizchada have / has odamdan keyin keladi." } ],
      notes: ["Like am / is / are: he, she, it are special", "Aziz → he → has · Aziz and Lola → they → have"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "Who + have / has + thing", rows: [
      { chips: [["I", "skyb"], ["have", "peach"], ["a phone.", "mint"]], uz: "Mening telefonim bor." },
      { chips: [["She", "skyb"], ["has", "peach"], ["two brothers.", "mint"]], uz: "Uning ikkita akasi bor." },
      { chips: [["We", "skyb"], ["have", "peach"], ["a dog.", "mint"]], uz: "Bizning itimiz bor." } ],
      notes: ["No am / is / are with have: I have ✓ · I am have ✗", "one → a phone · two → two phones (-s)"] },
    { t: "table", eb: "Have or has?", title: "All the people", menu: "Have or has: the table", head: ["Who", "have / has", "Example", "Uzbek"], rows: [
      ["I", "<b class='ca'>have</b>", "I have a bike.", "Mening velosipedim bor."],
      ["You", "<b class='ca'>have</b>", "You have a cat.", "Sizning mushugingiz bor."],
      ["He", "<b class='ca'>has</b>", "He has a car.", "Uning mashinasi bor."],
      ["She", "<b class='ca'>has</b>", "She has a watch.", "Uning qo’l soati bor."],
      ["We", "<b class='ca'>have</b>", "We have a computer.", "Bizning kompyuterimiz bor."],
      ["They", "<b class='ca'>have</b>", "They have two dogs.", "Ularning ikkita iti bor."] ],
      notes: ["he / she → has", "everyone else → have"] },
    { t: "examples", eb: "Have", title: "Examples with have", items: [
      ["I <span class='ca'>have</span> a phone.", "Mening telefonim bor."],
      ["You <span class='ca'>have</span> a red bag.", "Sizning qizil sumkangiz bor."],
      ["We <span class='ca'>have</span> a cat.", "Bizning mushugimiz bor."],
      ["They <span class='ca'>have</span> two cars.", "Ularning ikkita mashinasi bor."],
      ["My parents <span class='ca'>have</span> a computer.", "Ota-onamning kompyuteri bor."],
      ["I <span class='ca'>have</span> two sisters.", "Mening ikkita opam bor."] ] },
    { t: "examples", eb: "Has", title: "Examples with has", items: [
      ["She <span class='ca'>has</span> a cat.", "Uning mushugi bor."],
      ["He <span class='ca'>has</span> a blue bike.", "Uning ko’k velosipedi bor."],
      ["Madina <span class='ca'>has</span> a phone.", "Madinaning telefoni bor."],
      ["My father <span class='ca'>has</span> a black car.", "Otamning qora mashinasi bor."],
      ["Bobur <span class='ca'>has</span> two brothers.", "Boburning ikkita akasi bor."],
      ["My grandmother <span class='ca'>has</span> a dog.", "Buvimning iti bor."] ] },

    /* ---------- EASY PRACTICE ---------- */
    { t: "gaps", title: "Have or has?", sub: "he / she → has. Tap to check.", w: 180, fs: 40, rows: [
      ["I ___ a bike.", "have"], ["She ___ a cat.", "has"], ["We ___ a dog.", "have"],
      ["Aziz ___ a phone.", "has"], ["They ___ a car.", "have"], ["My mother ___ a computer.", "has"] ] },
    { t: "gaps", title: "New words", sub: "Say the English word. Tap to check.", w: 220, fs: 38, rows: [
      ["I have a ___. (kalit)", "key"], ["She has a ___. (it)", "dog"], ["We have a ___. (mashina)", "car"],
      ["He has a ___. (qo’l soati)", "watch"], ["I have a ___. (velosiped)", "bike"], ["They have a ___. (mushuk)", "cat"] ] },
    { t: "gaps", title: "Round 3: a bit harder", sub: "Many people → have. Many things → -s. Tap to check.", w: 220, fs: 36, rows: [
      ["My brothers ___ bikes.", "have"], ["Lola and Aziz ___ a cat.", "have"], ["My sister ___ two phones.", "has"],
      ["I have two ___. (aka)", "brothers"], ["She has three ___. (singil)", "sisters"], ["You ___ a white car.", "have"] ] },
    { t: "spot", bg: "sky", title: "Who has a…?", sub: "Teacher asks: “Who has a phone?” Students answer: “I have a phone!” Then say it about a classmate: “Aziz has a phone.”", size: 54,
      cards: [{ t: "a phone", uz: "telefon" }, { t: "a bike", uz: "velosiped" }, { t: "a cat", uz: "mushuk" }, { t: "a dog", uz: "it" }, { t: "a sister", uz: "opa / singil" }, { t: "a brother", uz: "aka / uka" }] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["She <span class='cn'>have</span> a cat.", "I <span class='cn'>has</span> a phone.", "I <span class='cn'>am have</span> a car.", "I have two <span class='cn'>brother</span>."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["She <span class='ca'>has</span> a cat.", "I <span class='ca'>have</span> a phone.", "I <span class='ca'>have</span> a car.", "I have two <span class='ca'>brothers</span>."] },
      { bg: "butter", label: "Why?", fs: 34, lines: ["he / she → has", "I → have"], uz: "have bilan am / is / are kerak emas. Ikkita, uchta… bo’lsa, so’z oxiriga -s qo’shamiz (Lesson 9)." } ] },

    /* ---------- QUIZ ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Mening telefonim bor.", "I have a phone."],
      ["Uning mushugi bor.", "He / She has a cat."],
      ["Bizning mashinamiz bor.", "We have a car."],
      ["Mening ikkita akam bor.", "I have two brothers."],
      ["Azizning velosipedi bor.", "Aziz has a bike."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["He have a dog.", "He has a dog."],
      ["I has two sisters.", "I have two sisters."],
      ["My parents has a car.", "My parents have a car."],
      ["She is has a phone.", "She has a phone."],
      ["We have three cat.", "We have three cats."] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "sky", title: "About me", sub: "Pick a card. Finish the sentence. True or funny!", size: 50,
      cards: [{ t: "I have a…", uz: "Mening … bor." }, { t: "I have two…", uz: "Mening ikkita … bor." }, { t: "My mother has a…", uz: "Onamning … bor." },
              { t: "My father has a…", uz: "Otamning … bor." }, { t: "My friend has a…", uz: "Do’stimning … bor." }, { t: "My family has a…", uz: "Oilamizning … bor." }] },
    { t: "spot", bg: "yel", title: "Tell the class", sub: "Pairs. A says 2 things: “I have a bike. I have a sister.” B tells the class: “Aziz has a bike. He has a sister.” Then change!", size: 50,
      cards: [{ t: "I have…", uz: "Mening … bor." }, { t: "You have…", uz: "Sizning … bor." }, { t: "He has…", uz: "Uning … bor." },
              { t: "She has…", uz: "Uning … bor." }, { t: "We have…", uz: "Bizning … bor." }, { t: "They have…", uz: "Ularning … bor." }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say “I have…” and “She has…”", "know when to use have and when has", "say 8 new words: phone, car, bike…", "say what my family has", "use colours and numbers with have", "ask “Who has a…?”"] },
    { t: "bye", chips: [["I have a phone.", "peach"], ["She has a cat.", "mint"], ["Who has a bike?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "talk on the phone", say: "You have a phone! / She has a phone." }, { cue: "drive a car", say: "You have a car! / He has a car." },
      { cue: "ride a bike", say: "You have a bike!" }, { cue: "type on a computer", say: "You have a computer!" },
      { cue: "look at your watch", say: "You have a watch!" }, { cue: "open a door with a key", say: "You have a key!" },
      { cue: "pat a dog: “Woof!”", say: "You have a dog!" }, { cue: "pat a cat: “Meow!”", say: "You have a cat!" },
      { cue: "show 2 fingers, then a tall boy", say: "You have two brothers!" }, { cue: "show 3 fingers, then long hair", say: "You have three sisters!" },
      { cue: "hold a baby boy in your arms", say: "You have a son!" }
    ],
    board: [
      { cat: "Have or has?", qs: [["I ___ a cat.", "have"], ["She ___ a car.", "has"], ["My parents ___ a dog.", "have"]] },
      { cat: "New words", qs: [["“telefon” in English", "phone"], ["“kalit” in English", "key"], ["“qo’l soati” in English", "watch"]] },
      { cat: "Family", qs: [["Say: Mening akam bor.", "I have a brother."], ["Say: Uning ikkita singlisi bor.", "He / She has two sisters."], ["Finish: I have … brothers.", "I have two brothers. (any true)"]] },
      { cat: "Colours", qs: [["Say: Mening qizil velosipedim bor.", "I have a red bike."], ["Say: Uning qora mushugi bor.", "He / She has a black cat."], ["Say: Bizning oq mashinamiz bor.", "We have a white car."]] },
      { cat: "One or many?", qs: [["one key → two ___", "keys"], ["I have three ___. (cat)", "cats"], ["We have four ___. (phone)", "phones"]] },
      { cat: "Fix it", qs: [["She have a dog.", "She has a dog."], ["I has a bike.", "I have a bike."], ["He is has a car.", "He has a car."]] }
    ],
    wheel: [
      { name: "Me", tasks: ["Say 2 things you have.", "Finish: “I have a … phone.” (colour)", "Finish: “I have two…”", "Say: “I have a key.”"] },
      { name: "Family", tasks: ["Finish: “My mother has a…”", "Finish: “My father has a…”", "Finish: “My brother has…”", "Finish: “We have a…”"] },
      { name: "Classmates", tasks: ["Look at a classmate: “He has…” / “She has…”", "Ask the class: “Who has a cat?”", "Ask the class: “Who has a bike?”", "Say 2 things the teacher has."] },
      { name: "Colours", tasks: ["Say: a red car, a blue bike.", "Finish: “I have a black…”", "Say: “She has a white cat.”", "Say: “We have a green car.”"] },
      { name: "Spell", tasks: ["Spell: phone.", "Spell: key.", "Spell: bike.", "Spell: computer."] },
      { name: "Have or has?", tasks: ["I → have or has?", "she → have or has?", "my parents → have or has?", "Lola → have or has?"] }
    ],
    build: [
      { w: ["I","have","a","phone"], e: "." }, { w: ["She","has","a","cat"], e: "." }, { w: ["We","have","a","red","car"], e: "." },
      { w: ["My","father","has","a","bike"], e: "." }, { w: ["They","have","two","dogs"], e: "." }, { w: ["Aziz","has","three","sisters"], e: "." },
      { w: ["I","have","a","black","watch"], e: "." }, { w: ["Who","has","a","key"], e: "?" }
    ],
    auction: [
      { s: "I have a phone.", ok: true },
      { s: "She have a cat.", ok: false, fix: "She has a cat." },
      { s: "We have a white car.", ok: true },
      { s: "My brother have a bike.", ok: false, fix: "My brother has a bike." },
      { s: "They have two dogs.", ok: true },
      { s: "I am have a computer.", ok: false, fix: "I have a computer." },
      { s: "Lola has two brothers.", ok: true },
      { s: "He has three key.", ok: false, fix: "He has three keys." },
      { s: "My parents have a car.", ok: true },
      { s: "I has a watch.", ok: false, fix: "I have a watch." }
    ]
  }
};
