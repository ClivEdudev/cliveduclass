/* Beginner · Lesson 14 · This, that, these, those
   Teaches: near and far. this / that for one thing, these / those for many things;
   this / that + is, these / those + are; What is that? What are these? It’s… / They’re…
   New words: apple, cup, key, watch, shoes, bike, tree, flower, bird, near, far.
   Uses only lessons 1–13: to be, a / an, colours, plurals, not and questions, my / your, have / has.
   Built for Monday 4 January 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b14",
  n: 14,
  title: "This, that, these, those",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 14", title: "This, that, <span class='cy'>these, those</span>", lead: "Near and far · Yaqin va uzoq", chips: [["Bu olma.", "peach"], ["Anavi daraxt.", "mint"], ["Bular mening kitoblarim.", "skyb"]] },
    { t: "goals", items: [
      ["Say this and that (one thing)", "This is a pen. That is a tree.", "Bu ruchka. Anavi daraxt."],
      ["Say these and those (many things)", "These are apples. Those are birds.", "Bular — olmalar. Anavilar — qushlar."],
      ["Ask about things near and far", "What is that? What are these?", "Anavi nima? Bular nima?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: I have…", sub: "Pick a card. Say one sentence with have or has. · have / has bilan bitta gap ayting.", size: 52,
      cards: [{ t: "I have a…", uz: "Menda … bor" }, { t: "I have two…", uz: "Menda ikkita … bor" }, { t: "My mother has…", uz: "Onamda … bor" },
              { t: "My friend has…", uz: "Do’stimda … bor" }, { t: "I have a … phone.", uz: "rangini ayting" }, { t: "She has two…", uz: "Unda ikkita … bor" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "My things", menu: "New words: my things", items: [
      ["It’s an <span class='ca'>apple</span>.", "apple = olma"],
      ["It’s a <span class='ca'>cup</span>.", "cup = chashka, piyola"],
      ["It’s a <span class='ca'>key</span>.", "key = kalit"],
      ["It’s a <span class='ca'>watch</span>.", "watch = qo’l soati"],
      ["They are my <span class='ca'>shoes</span>.", "shoes = poyabzal, tufli"],
      ["It’s a <span class='ca'>bike</span>.", "bike = velosiped"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Outside", menu: "New words: outside", items: [
      ["It’s a <span class='ca'>tree</span>.", "tree = daraxt"],
      ["It’s a <span class='ca'>flower</span>.", "flower = gul"],
      ["It’s a <span class='ca'>bird</span>.", "bird = qush"],
      ["two birds · three flowers", "Ko’plik: + s (9-dars)"],
      ["The cup is <span class='ca'>near</span> me.", "near = yaqin"],
      ["The tree is <span class='ca'>far</span>.", "far = uzoq"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Say the word", items: [
      { bg: "peach", w: "🍎", label: "apple = olma", en: "It’s a red apple.", uz: "Bu qizil olma." },
      { bg: "mint", w: "🔑", label: "key = kalit", en: "It’s my key.", uz: "Bu mening kalitim." },
      { bg: "skyb", w: "🐦", label: "bird = qush", en: "It’s a blue bird.", uz: "Bu ko’k qush." },
      { bg: "butter", w: "🌳", label: "tree = daraxt", en: "It’s a green tree.", uz: "Bu yashil daraxt." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "Near or far? · Yaqin yoki uzoq?", menu: "Near or far?", cols: [
      { bg: "mint", label: "Near · Yaqin 👇", lc: "g", fs: 46, lines: ["<span class='ca'>this</span> → 1", "<span class='ca'>these</span> → 2, 3, 4…"], uz: "Yaqindagi narsa. this = bu (bitta), these = bular (ko’p)." },
      { bg: "skyb", label: "Far · Uzoq 👉", lc: "b", fs: 46, lines: ["<span class='ca'>that</span> → 1", "<span class='ca'>those</span> → 2, 3, 4…"], uz: "Uzoqdagi narsa. that = anavi (bitta), those = anavilar (ko’p)." } ],
      notes: ["Bitta narsa → this / that", "Ko’p narsa → these / those", "this ≈ bu · that ≈ anavi, u"] },
    { t: "table", eb: "The rule · Qoida", title: "One or many? · Bitta yoki ko’p?", head: ["", "One · Bitta", "Many · Ko’p", "Uzbek"], rows: [
      ["Near 👇", "<b class='ca'>this</b> book", "<b class='ca'>these</b> books", "bu kitob · bu kitoblar"],
      ["Far 👉", "<b class='ca'>that</b> book", "<b class='ca'>those</b> books", "anavi kitob · anavi kitoblar"] ],
      notes: ["these / those + kitoblar: oxirida -s", "O’zbekcha “bu kitoblar” = these books"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "this / that + is · these / those + are", rows: [
      { chips: [["This", "skyb"], ["is", "peach"], ["a pen.", "mint"]], uz: "Bu ruchka." },
      { chips: [["That", "skyb"], ["is", "peach"], ["a tree.", "mint"]], uz: "Anavi daraxt." },
      { chips: [["These", "skyb"], ["are", "peach"], ["apples.", "mint"]], uz: "Bular — olmalar." },
      { chips: [["Those", "skyb"], ["are", "peach"], ["birds.", "mint"]], uz: "Anavilar — qushlar." } ],
      notes: ["Bitta: this / that + is", "Ko’p: these / those + are", "Ko’pda “a” yo’q: These are apples."] },
    { t: "examples", eb: "Near · Yaqin 👇", title: "This and these", items: [
      ["<span class='ca'>This</span> is my phone.", "Bu mening telefonim."],
      ["<span class='ca'>This</span> apple is red.", "Bu olma qizil."],
      ["<span class='ca'>This</span> is my sister, Lola.", "Bu mening singlim, Lola."],
      ["<span class='ca'>These</span> are my keys.", "Bular mening kalitlarim."],
      ["<span class='ca'>These</span> apples are green.", "Bu olmalar yashil."],
      ["<span class='ca'>These</span> shoes are black.", "Bu tuflilar qora."] ] },
    { t: "examples", eb: "Far · Uzoq 👉", title: "That and those", items: [
      ["<span class='ca'>That</span> is a bird.", "Anavi — qush."],
      ["<span class='ca'>That</span> tree is green.", "Anavi daraxt yashil."],
      ["<span class='ca'>That</span> is my bike.", "Anavi mening velosipedim."],
      ["<span class='ca'>Those</span> are flowers.", "Anavilar — gullar."],
      ["<span class='ca'>Those</span> birds are white.", "Anavi qushlar oq."],
      ["<span class='ca'>Those</span> are my brothers.", "Anavilar mening akalarim."] ] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "Near 👇: this or these?", sub: "One → this. Many → these. Tap to check.", w: 200, fs: 40, rows: [
      ["___ is a pen.", "This"], ["___ are apples.", "These"], ["___ is my bag.", "This"],
      ["___ are my keys.", "These"], ["___ book is blue.", "This"], ["___ cups are white.", "These"] ] },
    { t: "gaps", title: "Far 👉: that or those?", sub: "One → that. Many → those. Tap to check.", w: 200, fs: 40, rows: [
      ["___ is a tree.", "That"], ["___ are birds.", "Those"], ["___ is my bike.", "That"],
      ["___ flowers are red.", "Those"], ["___ are my sisters.", "Those"], ["___ bird is black.", "That"] ] },
    { t: "gaps", title: "Is or are?", sub: "this / that → is. these / those → are. Tap to check.", w: 160, fs: 40, rows: [
      ["This ___ a key.", "is"], ["These ___ my shoes.", "are"], ["That ___ a flower.", "is"],
      ["Those ___ trees.", "are"], ["That cup ___ green.", "is"], ["These apples ___ red.", "are"] ] },
    { t: "gaps", title: "All four! 👇 or 👉?", sub: "👇 = near · yaqin. 👉 = far · uzoq. Tap to check.", w: 200, fs: 40, rows: [
      ["👇 ___ is a watch.", "This"], ["👉 ___ are trees.", "Those"], ["👇 ___ are flowers.", "These"],
      ["👉 ___ is a bird.", "That"], ["👉 ___ is my father.", "That"], ["👇 ___ are my books.", "These"] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "cols", eb: "Questions · Savollar", title: "What is this? What are these?", menu: "Questions", cols: [
      { bg: "skyb", label: "Question · Savol", lc: "b", fs: 40, lines: ["<span class='cw'>What</span> is this?", "<span class='cw'>What</span> are these?"], uz: "Bu nima? · Bular nima?" },
      { bg: "mint", label: "Answer · Javob", lc: "g", fs: 40, lines: ["It’s an apple.", "They’re apples."], uz: "Javobda: bitta → It’s…, ko’p → They’re…" },
      { bg: "peach", label: "Yes / No", lc: "r", fs: 40, lines: ["<span class='cw'>Is</span> this your bag?", "Yes, it is. · No, it isn’t."], uz: "Bu sizning sumkangizmi? Ha. · Yo’q." } ],
      notes: ["Savol: What is this / that?", "Savol: What are these / those?", "They’re = They are"] },
    { t: "examples", eb: "Ask and answer", title: "At the bazaar · Bozorda", items: [
      ["A: <span class='cw'>What</span> is that?", "A: Anavi nima?"],
      ["B: It’s a bird.", "B: U — qush."],
      ["A: <span class='cw'>What</span> are these?", "A: Bular nima?"],
      ["B: They’re apples. They’re red.", "B: Bular — olmalar. Ular qizil."],
      ["A: <span class='cw'>Is</span> this your key?", "A: Bu sizning kalitingizmi?"],
      ["B: Yes, it is. Thank you!", "B: Ha. Rahmat!"] ] },
    { t: "spot", bg: "sky", title: "In our classroom", sub: "Point and say. Near → this / these. Far → that / those. · Ko’rsating va ayting.", size: 54,
      cards: ["This is my…", "That is a…", "These are my…", "Those are…", "What is that?", "What are these?"] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Many things → these, those + are", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["<span class='cn'>This are</span> apples.", "<span class='cn'>These is</span> my pen.", "These are <span class='cn'>a books</span>.", "<span class='cn'>This</span> books are red."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["<span class='ca'>These are</span> apples.", "<span class='ca'>This is</span> my pen.", "These are <span class='ca'>books</span>.", "<span class='ca'>These</span> books are red."] },
      { bg: "butter", label: "Why? · Nega?", fs: 34, lines: ["ko’p → these", "bitta → this is", "ko’pda “a” yo’q", "bu kitoblar = these books"], uz: "O’zbekchada “bu” bitta ham, ko’p ham. Inglizchada ko’p bo’lsa: these!" } ] },

    /* ---------- QUIZ ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Bu kalit.", "This is a key."],
      ["Anavi — qush.", "That is a bird."],
      ["Bular mening tuflilarim.", "These are my shoes."],
      ["Anavi gullar qizil.", "Those flowers are red."],
      ["Bu nima?", "What is this?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["This are my keys.", "These are my keys."],
      ["Those is a tree.", "That is a tree."],
      ["That are birds.", "Those are birds."],
      ["What is these?", "What are these?"] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "yel", title: "My things · Mening narsalarim", sub: "Show your things. Say: “This is my…” or “These are my…” · O’z narsalaringizni ko’rsating.", size: 56,
      cards: [{ t: "phone", uz: "telefon" }, { t: "bag", uz: "sumka" }, { t: "pen", uz: "ruchka" }, { t: "keys", uz: "kalitlar" }, { t: "books", uz: "kitoblar" }, { t: "shoes", uz: "poyabzal" }] },
    { t: "spot", bg: "sky", title: "Pairs: what is it?", sub: "Pairs. A points and asks: “What is this?” / “What are those?” B answers: “It’s… / They’re…”", size: 64,
      cards: [{ t: "👇 🍎", uz: "near · yaqin" }, { t: "👉 🌳🌳", uz: "far · uzoq" }, { t: "👇 🔑🔑", uz: "near · yaqin" }, { t: "👉 🐦", uz: "far · uzoq" }, { t: "👇 ⌚", uz: "near · yaqin" }, { t: "👉 🌸🌸", uz: "far · uzoq" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say this and that for one thing", "say these and those for many things", "use is with this / that, are with these / those", "ask: What is this? What are those?", "answer: It’s… / They’re…", "say new words: apple, key, tree, bird…"] },
    { t: "bye", chips: [["This is…", "peach"], ["That is…", "mint"], ["These / Those are…", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "hold up one pen", say: "This is a pen." }, { cue: "hold up two books", say: "These are books." },
      { cue: "point at the door (far)", say: "That is a door." }, { cue: "point at the window (far)", say: "That is a window." },
      { cue: "point at birds in the sky (far)", say: "Those are birds." }, { cue: "hold up your keys", say: "These are my keys." },
      { cue: "show your watch", say: "This is my watch." }, { cue: "hold an apple, then eat it", say: "This is an apple." },
      { cue: "drink tea from a cup", say: "This is a cup." }, { cue: "point at a tall tree far away", say: "That is a tree." },
      { cue: "smell a flower", say: "This is a flower." }, { cue: "point at your shoes", say: "These are my shoes." }
    ],
    board: [
      { cat: "This / These", qs: [["One pen near you: ___ is a pen.", "This"], ["Many books near you: ___ are books.", "These"], ["Make it many: This is an apple.", "These are apples."]] },
      { cat: "That / Those", qs: [["One tree far away: ___ is a tree.", "That"], ["Many birds far away: ___ are birds.", "Those"], ["Make it many: That is a flower.", "Those are flowers."]] },
      { cat: "Is or are?", qs: [["This ___ my bag.", "is"], ["Those ___ my shoes.", "are"], ["These apples ___ green.", "are"]] },
      { cat: "Questions", qs: [["“Bu nima?” in English", "What is this?"], ["“Anavilar nima?” in English", "What are those?"], ["Answer: What are these? (🍎🍎)", "They’re apples."]] },
      { cat: "New words", qs: [["“kalit” in English", "key"], ["“daraxt” and “qush”", "tree · bird"], ["“gul” and “olma”: many", "flowers · apples"]] },
      { cat: "Translate", qs: [["Bu mening telefonim.", "This is my phone."], ["Anavi qush qora.", "That bird is black."], ["Bular mening kitoblarim.", "These are my books."]] }
    ],
    wheel: [
      { name: "This", tasks: ["Show 1 thing: “This is my…”", "Hold a pen: “This pen is…” (colour)", "Point at a classmate: “This is…”", "Show your phone: “This is my phone.”"] },
      { name: "That", tasks: ["Point at the door: “That is…”", "Point far: “That is a…”", "Point at the teacher’s bag: “That bag is…” (colour)", "Point at a window: “That is…”"] },
      { name: "These", tasks: ["Show 2 things: “These are my…”", "Hold 2 pens: “These pens are…” (colour)", "Point at your shoes: “These are…”", "Make it many: This is a key."] },
      { name: "Those", tasks: ["Point at chairs far away: “Those are…”", "Point far: “Those … are…” (colour)", "Make it many: That is a bird.", "Make it many: That is a tree."] },
      { name: "Questions", tasks: ["Point far. Ask: “What is that?”", "Show 2 things. Ask: “What are these?”", "Answer: “It’s a…”", "Ask a classmate: “Is this your…?”"] },
      { name: "Words", tasks: ["Say 3 new words. · 3 ta yangi so’z", "“olma, kalit, gul” in English", "Say: near and far in Uzbek", "Spell: K-E-Y, B-I-R-D"] }
    ],
    build: [
      { w: ["This", "is", "my", "phone"], e: "." }, { w: ["That", "is", "a", "bird"], e: "." },
      { w: ["These", "are", "my", "keys"], e: "." }, { w: ["Those", "flowers", "are", "red"], e: "." },
      { w: ["What", "is", "that"], e: "?" }, { w: ["What", "are", "these"], e: "?" },
      { w: ["Is", "this", "your", "cup"], e: "?" }, { w: ["These", "apples", "are", "green"], e: "." }
    ],
    auction: [
      { s: "This is my key.", ok: true },
      { s: "These is my shoes.", ok: false, fix: "These are my shoes." },
      { s: "That is a tree.", ok: true },
      { s: "Those are birds.", ok: true },
      { s: "This are apples.", ok: false, fix: "These are apples." },
      { s: "What are those?", ok: true },
      { s: "That flowers are red.", ok: false, fix: "Those flowers are red." },
      { s: "These are a books.", ok: false, fix: "These are books." },
      { s: "Is this your bike?", ok: true },
      { s: "What is these?", ok: false, fix: "What are these?" }
    ]
  }
};
