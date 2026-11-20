/* Beginner · Lesson 30 · Unit 5 review
   Review of Unit 5 · My day (lessons 25–29), games and practice only, nothing new:
   present simple I / you / we / they and don’t (25), he / she + -s and doesn’t (26),
   Do you…? Does she…? Yes, I do. / No, she doesn’t. (27), daily routine at seven o’clock (28),
   always, usually, sometimes, never and How often? (29).
   Built for Mon 1 Mar 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b30",
  n: 30,
  title: "Unit 5 review",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 30", title: "Unit 5<br><span class='cy'>Review</span>", lead: "I work · she works · Do you…? · my day · always, never", chips: [["Let’s play!", "peach"], ["O’ynaymiz!", "mint"], ["Mening kunim", "skyb"]] },
    { t: "examples", title: "In Unit 5 we learned", menu: "In Unit 5 we learned", items: [
      ["I <span class='ca'>work</span> in Tashkent. I <span class='cn'>don’t work</span> on Sunday.", "Men Toshkentda ishlayman. Yakshanba kuni ishlamayman."],
      ["Madina <span class='ca'>works</span> in a shop. Bobur <span class='cn'>doesn’t work</span>.", "Madina do’konda ishlaydi. Bobur ishlamaydi."],
      ["<span class='cw'>Do</span> you like plov? Yes, I <span class='ca'>do</span>.", "Palovni yoqtirasizmi? Ha, yoqtiraman."],
      ["<span class='cw'>Does</span> she drink coffee? No, she <span class='cn'>doesn’t</span>.", "U qahva ichadimi? Yo’q, ichmaydi."],
      ["I <span class='ca'>get up</span> at seven o’clock. I <span class='ca'>have breakfast</span> at eight.", "Men soat yettida turaman. Soat sakkizda nonushta qilaman."],
      ["I <span class='ca'>always</span> drink tea. I <span class='ca'>never</span> drink coffee.", "Men doim choy ichaman. Hech qachon qahva ichmayman."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: one sentence each", sub: "Pick a card. Say one true sentence about you.",
      cards: [{ t: "I live in…", uz: "Men …da yashayman" }, { t: "I get up at…", uz: "Men soat …da turaman" }, { t: "I don’t like…", uz: "Men …ni yoqtirmayman" }, { t: "My mother / father…", uz: "Onam / Otam …" }, { t: "I always…", uz: "Men doim …" }, { t: "I never…", uz: "Men hech qachon …" }] },
    { t: "table", eb: "The rule · Qoida", title: "work or works?", menu: "work or works?", head: ["Who", "Yes +", "No −", "Question ?"], rows: [
      ["I / you / we / they", "I <b class='ca'>work</b>.", "I <b class='cn'>don’t work</b>.", "<b class='cw'>Do</b> you work?"],
      ["he / she / it", "She <b class='ca'>works</b>.", "She <b class='cn'>doesn’t work</b>.", "<b class='cw'>Does</b> she work?"],
      ["Short answers", "Yes, I <b class='ca'>do</b>. · Yes, she <b class='ca'>does</b>.", "No, I <b class='cn'>don’t</b>. · No, she <b class='cn'>doesn’t</b>.", "—"] ],
      notes: ["he / she / it: fe’lga -s qo’shiladi: works, watches, goes, has", "doesn’t va Does dan keyin -s YO’Q: She doesn’t work. Does she work?", "always / never fe’ldan oldin: I always drink tea."] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "All topics mixed. Tap to reveal.", rows: [
      ["Men Toshkentda yashayman.", "I live in Tashkent."],
      ["Akam do’konda ishlaydi.", "My brother works in a shop."],
      ["Men qahva ichmayman.", "I don’t drink coffee."],
      ["Lola futbol o’ynamaydi.", "Lola doesn’t play football."],
      ["Siz choy ichasizmi? Ha.", "Do you drink tea? Yes, I do."],
      ["Men odatda soat yettida turaman.", "I usually get up at seven o’clock."] ] },
    { t: "gaps", title: "work or works?", sub: "Open the brackets. Tap to check.", w: 220, fs: 36, rows: [
      ["I ___ (live) in Samarkand.", "live"], ["Madina ___ (live) in Tashkent.", "lives"], ["My father ___ (work) in a shop.", "works"],
      ["We ___ (like) plov.", "like"], ["Aziz ___ (watch) TV every evening.", "watches"], ["Lola ___ (go) to school at eight.", "goes"] ] },
    { t: "gaps", title: "Do, does, don’t or doesn’t?", sub: "Tap to check.", w: 220, fs: 36, rows: [
      ["___ you like tea? Yes, I do.", "Do"], ["___ she work in a shop? No, she doesn’t.", "Does"], ["I ___ drink coffee.", "don’t"],
      ["My brother ___ play football.", "doesn’t"], ["Do they live in Bukhara? Yes, they ___.", "do"], ["Does Bobur like plov? No, he ___.", "doesn’t"] ] },
    { t: "gaps", title: "My day and how often", sub: "Lessons 28 and 29. Tap to check.", w: 220, fs: 36, rows: [
      ["I get up ___ seven o’clock.", "at"], ["I ___ breakfast at eight.", "have"], ["Madina ___ to bed at ten.", "goes"],
      ["I ___ drink coffee. (0%)", "never"], ["She is ___ late. (100%)", "always"], ["___ often do you eat plov?", "How"] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: make it NO and a question", sub: "Say both. Tap to check.", fs: 36, rows: [
      ["You like tea.", "You don’t like tea. · Do you like tea?"],
      ["She works in a shop.", "She doesn’t work in a shop. · Does she work in a shop?"],
      ["They live in Samarkand.", "They don’t live in Samarkand. · Do they live in Samarkand?"],
      ["He plays football.", "He doesn’t play football. · Does he play football?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["She work in a shop.", "She works in a shop."],
      ["He don’t like coffee.", "He doesn’t like coffee."],
      ["Does she likes tea?", "Does she like tea?"],
      ["I get up in seven o’clock.", "I get up at seven o’clock."],
      ["I drink always tea.", "I always drink tea."] ] },
    { t: "spot", bg: "sky", title: "Interview: ask a friend", sub: "Pairs. A asks the question on the card. B answers with a full sentence. Then change!", size: 44,
      cards: [{ t: "Where do you live?", uz: "Qayerda yashaysiz?" }, { t: "Do you like plov?", uz: "Palovni yoqtirasizmi?" }, { t: "What time do you get up?", uz: "Soat nechada turasiz?" }, { t: "How often do you drink tea?", uz: "Qanchalik tez-tez choy ichasiz?" }, { t: "Does your mother work?", uz: "Onangiz ishlaydimi?" }, { t: "Do you watch TV every evening?", uz: "Har kuni kechqurun televizor ko’rasizmi?" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "wheel", bg: "ink" },
    { t: "game", g: "board" },
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say what I do: I work, I don’t work", "say what he and she do: she works, he doesn’t work", "ask “Do you…? Does she…?” and answer “Yes, I do.”", "talk about my day: I get up at seven o’clock", "say how often: always, usually, sometimes, never", "ask “How often do you…?”"] },
    { t: "bye", chips: [["I work.", "peach"], ["She works.", "mint"], ["Do you…?", "skyb"]] }
  ],
  games: {
    wheel: [
      { name: "I work", tasks: ["Say 2 things you do every day.", "Say 2 things you don’t do.", "Say: “I live in…”", "Say: “I like…, but I don’t like…”"] },
      { name: "She works", tasks: ["Say 2 things about your mother: “She…”", "Say 2 things about your father: “He…”", "Say one thing your friend doesn’t like.", "Say where your best friend lives."] },
      { name: "Questions", tasks: ["Ask a classmate: “Do you like…?”", "Ask: “Does your brother / sister…?”", "Answer: Do you drink coffee?", "Answer: Does your mother cook plov?"] },
      { name: "My day", tasks: ["Say what time you get up.", "Say what time you have breakfast.", "Say 2 things you do in the evening.", "Say what time you go to bed."] },
      { name: "How often", tasks: ["Say: “I always…”", "Say: “I never…”", "Ask a classmate: “How often do you…?”", "Say one thing you do every Sunday."] },
      { name: "Mixed", tasks: ["Talk about your morning: 3 sentences.", "Say 2 things your best friend does every day.", "Ask the teacher 2 questions with “Do you…?”", "Say: “I usually…, but my brother never…”"] }
    ],
    board: [
      { cat: "I / we / they", qs: [["Make it NO: I like coffee.", "I don’t like coffee."], ["We ___ (live) in Tashkent.", "live"], ["“Men choy ichaman.” in English", "I drink tea."]] },
      { cat: "He / she", qs: [["She ___ (work) in a shop.", "works"], ["He ___ (watch) TV.", "watches"], ["Make it NO: Lola plays football.", "Lola doesn’t play football."]] },
      { cat: "Questions", qs: [["___ you like plov?", "Do"], ["Short answer (yes): Does she work?", "Yes, she does."], ["Make a question: He lives in Bukhara.", "Does he live in Bukhara?"]] },
      { cat: "My day", qs: [["“nonushta qilmoq” in English", "have breakfast"], ["“o’rnidan turmoq” and “uxlashga yotmoq”", "get up · go to bed"], ["Say your morning: 2 sentences with times.", "I get up at… I have breakfast at… (any true)"]] },
      { cat: "How often", qs: [["0% = ?", "never"], ["Put in “always”: She is late.", "She is always late."], ["Ask with “How often”: you / eat plov", "How often do you eat plov?"]] },
      { cat: "Fix it", qs: [["She work in a shop.", "She works in a shop."], ["Does he likes tea?", "Does he like tea?"], ["I don’t never drink coffee.", "I never drink coffee."]] }
    ],
    mime: [
      { cue: "get up · show 7 fingers", say: "He / She gets up at seven o’clock!" },
      { cue: "have breakfast · show 8 fingers", say: "He / She has breakfast at eight o’clock!" },
      { cue: "go to school with a bag", say: "He / She goes to school!" },
      { cue: "drink tea · ALWAYS (two thumbs up)", say: "He / She always drinks tea!" },
      { cue: "cook plov · every Friday", say: "He / She cooks plov every Friday!" },
      { cue: "watch TV · every evening", say: "He / She watches TV every evening!" },
      { cue: "play football · every Sunday", say: "He / She plays football every Sunday!" },
      { cue: "drink coffee · NEVER (shake your head)", say: "He / She never drinks coffee!" },
      { cue: "do homework · show 5 fingers", say: "He / She does homework at five o’clock!" },
      { cue: "go to bed · show 10 fingers", say: "He / She goes to bed at ten o’clock!" },
      { cue: "have lunch · show 1 finger", say: "He / She has lunch at one o’clock!" },
      { cue: "read a book · SOMETIMES (so-so hand)", say: "He / She sometimes reads a book!" }
    ],
    build: [
      { w: ["I","live","in","Tashkent"], e: "." }, { w: ["She","works","in","a","shop"], e: "." },
      { w: ["I","don’t","drink","coffee"], e: "." }, { w: ["Does","he","play","football"], e: "?" },
      { w: ["Do","you","like","plov"], e: "?" }, { w: ["I","get","up","at","seven"], e: "." },
      { w: ["She","is","never","late"], e: "." }, { w: ["How","often","do","you","eat","plov"], e: "?" }
    ],
    auction: [
      { s: "She works in a shop.", ok: true },
      { s: "He don’t like tea.", ok: false, fix: "He doesn’t like tea." },
      { s: "Do you live in Samarkand?", ok: true },
      { s: "Does she likes plov?", ok: false, fix: "Does she like plov?" },
      { s: "I get up at seven o’clock.", ok: true },
      { s: "My father watch TV every evening.", ok: false, fix: "My father watches TV every evening." },
      { s: "We never drink coffee.", ok: true },
      { s: "I go always to school at eight.", ok: false, fix: "I always go to school at eight." },
      { s: "Do you like green tea? Yes, I do.", ok: true },
      { s: "Lola doesn’t works on Sunday.", ok: false, fix: "Lola doesn’t work on Sunday." }
    ]
  }
};
