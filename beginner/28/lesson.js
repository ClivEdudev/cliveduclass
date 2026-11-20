/* Beginner · Lesson 28 · My daily routine
   Teaches: daily routine phrases in the present simple: I get up at seven o’clock. She has breakfast at eight.
   Times: at + o’clock (lesson 23), in the morning / in the evening · then · the chunk “What time do you…?”
   Spelling for he / she: gets up, has, goes, does, comes, washes. Uzbek: Men soat yettida turaman.
   Recycles: present simple (lessons 25–27), o’clock and half past (23), his / her (15), family (11).
   New words: get up, wash my face, have breakfast, have lunch, have dinner, go to school, go to work,
   come home, do my homework, go to bed, in the morning / in the evening, then.
   Built for Mon 22 Feb 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b28",
  n: 28,
  title: "My daily routine",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 28", title: "My <span class='cy'>daily routine</span>", lead: "get up, have breakfast… · at seven o’clock · Kun tartibim", chips: [["Men soat yettida turaman.", "peach"], ["U soat sakkizda nonushta qiladi.", "mint"], ["Soat nechada turasiz?", "skyb"]] },
    { t: "goals", items: [
      ["Say your day", "I get up at seven o’clock.", "Men soat yettida turaman."],
      ["Say another person’s day", "She goes to school at eight.", "U soat sakkizda maktabga boradi."],
      ["Ask about time", "What time do you get up?", "Soat nechada turasiz?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: Do you…? Does she…?", sub: "Lesson 27! Pick a card. Ask a classmate. Answer: “Yes, I do.” / “No, she doesn’t.” · Sinfdoshingizdan so’rang.", size: 44,
      cards: [{ t: "Do you like tea?", uz: "Choyni yaxshi ko’rasizmi?" }, { t: "Does your mother cook plov?", uz: "Onangiz palov pishiradimi?" }, { t: "Do you ride a bike?", uz: "Velosiped minasizmi?" },
              { t: "Does your father drive?", uz: "Otangiz mashina haydaydimi?" }, { t: "Do you speak Russian?", uz: "Ruscha gapirasizmi?" }, { t: "Do you use a computer?", uz: "Kompyuterdan foydalanasizmi?" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "My morning", menu: "New words: my morning", items: [
      ["I <span class='ca'>get up</span> at seven o’clock.", "get up = (o’rindan) turmoq"],
      ["I <span class='ca'>wash my face</span>.", "wash my face = yuzimni yuvmoq"],
      ["I <span class='ca'>have breakfast</span>.", "have breakfast = nonushta qilmoq"],
      ["I <span class='ca'>go to school</span>.", "go to school = maktabga bormoq"],
      ["They <span class='ca'>go to work</span>.", "go to work = ishga bormoq"],
      ["We <span class='ca'>have lunch</span> at one o’clock.", "have lunch = tushlik qilmoq"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "My evening", menu: "New words: my evening", items: [
      ["I <span class='ca'>come home</span> at three o’clock.", "come home = uyga kelmoq"],
      ["I <span class='ca'>do my homework</span>.", "do my homework = uy vazifamni qilmoq"],
      ["We <span class='ca'>have dinner</span> at seven.", "have dinner = kechki ovqat qilmoq"],
      ["I <span class='ca'>go to bed</span> at ten o’clock.", "go to bed = uxlashga yotmoq"],
      ["<span class='ca'>in the morning</span> · <span class='ca'>in the evening</span>", "ertalab · kechqurun"],
      ["I get up. <span class='ca'>Then</span> I have breakfast.", "then = keyin"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Three meals and bed", items: [
      { bg: "peach", w: "🍳", label: "breakfast = nonushta", en: "I have breakfast at seven.", uz: "Men soat yettida nonushta qilaman." },
      { bg: "mint", w: "🍲", label: "lunch = tushlik", en: "We have lunch at one.", uz: "Biz soat birda tushlik qilamiz." },
      { bg: "skyb", w: "🍽️", label: "dinner = kechki ovqat", en: "They have dinner at seven.", uz: "Ular soat yettida kechki ovqat qilishadi." },
      { bg: "butter", w: "🛏️", label: "go to bed = uxlashga yotmoq", en: "I go to bed at ten.", uz: "Men soat o’nda uxlashga yotaman." } ] },

    /* ---------- THE RULE ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "at seven · in the morning", menu: "The rule: at / in the", cols: [
      { bg: "mint", label: "at + time", lc: "g", fs: 42, lines: ["I get up <span class='ca'>at</span> seven.", "<span class='ca'>at</span> one o’clock"], uz: "Soat oldidan: at. at seven = soat yettida." },
      { bg: "skyb", label: "in the + part of the day", lc: "b", fs: 42, lines: ["I work <span class='ca'>in the</span> morning.", "<span class='ca'>in the</span> evening"], uz: "Kun qismi oldidan: in the. in the morning = ertalab." } ],
      notes: ["Kun tartibi = har kuni qiladigan ishlar → hozirgi oddiy zamon", "have breakfast / lunch / dinner = ovqatlanmoq"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "Who + verb + at + time", rows: [
      { chips: [["I", "skyb"], ["get up", "mint"], ["at", "peach"], ["seven o’clock.", "butter"]], uz: "Men soat yettida turaman." },
      { chips: [["She", "skyb"], ["has breakfast", "mint"], ["at", "peach"], ["eight.", "butter"]], uz: "U soat sakkizda nonushta qiladi." },
      { chips: [["We", "skyb"], ["have dinner", "mint"], ["in the", "peach"], ["evening.", "butter"]], uz: "Biz kechqurun kechki ovqat qilamiz." } ],
      notes: ["he / she + s (26-dars): She gets up.", "O’zbekchada vaqt oldin, inglizchada oxirida: soat yettida turaman → I get up at seven."] },
    { t: "table", eb: "I and she · Men va u", title: "I get up → She gets up", head: ["I / you / we / they", "he / she", "Uzbek (u)"], rows: [
      ["get up", "get<b class='ca'>s</b> up", "turadi"],
      ["have breakfast", "<b class='ca'>has</b> breakfast", "nonushta qiladi"],
      ["go to school", "go<b class='ca'>es</b> to school", "maktabga boradi"],
      ["come home", "come<b class='ca'>s</b> home", "uyga keladi"],
      ["do my homework", "<b class='ca'>does</b> her homework", "uy vazifasini qiladi"],
      ["go to bed", "go<b class='ca'>es</b> to bed", "uxlashga yotadi"] ],
      notes: ["have → has · go → goes · do → does", "my homework → his / her homework"] },
    { t: "examples", eb: "I · Men", title: "My day", items: [
      ["I <span class='ca'>get up</span> at six o’clock.", "Men soat oltida turaman."],
      ["I wash my face. <span class='ca'>Then</span> I have breakfast.", "Yuzimni yuvaman. Keyin nonushta qilaman."],
      ["I <span class='ca'>go to school</span> at eight.", "Men soat sakkizda maktabga boraman."],
      ["I <span class='ca'>have lunch</span> at one o’clock.", "Men soat birda tushlik qilaman."],
      ["I <span class='ca'>come home</span> and do my homework.", "Uyga kelaman va uy vazifamni qilaman."],
      ["I <span class='ca'>go to bed</span> at ten o’clock.", "Men soat o’nda uxlashga yotaman."] ] },
    { t: "examples", eb: "She · U", title: "Madina’s day", items: [
      ["Madina <span class='ca'>gets up</span> at seven o’clock.", "Madina soat yettida turadi."],
      ["She <span class='ca'>has</span> breakfast in the kitchen.", "U oshxonada nonushta qiladi."],
      ["She <span class='ca'>goes</span> to work at eight.", "U soat sakkizda ishga boradi."],
      ["She <span class='ca'>has</span> lunch at work.", "U ishda tushlik qiladi."],
      ["She <span class='ca'>comes</span> home at six.", "U soat oltida uyga keladi."],
      ["She <span class='ca'>goes</span> to bed at eleven.", "U soat o’n birda uxlashga yotadi."] ] },
    { t: "gaps", title: "Which word?", sub: "Words: get · have · go · come · do · bed. Tap to check.", w: 200, fs: 38, rows: [
      ["I ___ up at seven.", "get"], ["I ___ lunch at one.", "have"], ["We ___ to school.", "go"],
      ["I ___ home at three.", "come"], ["I ___ my homework.", "do"], ["I go to ___ at ten.", "bed"] ] },
    { t: "gaps", title: "He / she: add -s", sub: "Write the verb for he / she. Tap to check. · U uchun fe’l.", w: 220, fs: 36, rows: [
      ["Lola ___ (get) up at six.", "gets"], ["Aziz ___ (have) lunch at one.", "has"], ["She ___ (go) to bed at ten.", "goes"],
      ["He ___ (do) his homework.", "does"], ["My father ___ (come) home at seven.", "comes"], ["Bobur ___ (wash) his face.", "washes"] ] },
    { t: "gaps", title: "At or in?", sub: "Time → at. Part of the day → in the. Tap to check.", w: 160, fs: 38, rows: [
      ["I get up ___ seven o’clock.", "at"], ["I have breakfast ___ the morning.", "in"], ["We have dinner ___ the evening.", "in"],
      ["She goes to bed ___ ten.", "at"], ["He comes home ___ five o’clock.", "at"], ["I do my homework ___ the evening.", "in"] ] },

    /* ---------- ASK ---------- */
    { t: "cols", eb: "Ask and answer · So’rang va javob bering", title: "What time do you…?", menu: "What time do you…?", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 40, lines: ["<span class='cw'>What time</span> do you get up?", "<span class='cw'>What time</span> does she get up?"], uz: "Soat nechada turasiz? · U soat nechada turadi?" },
      { bg: "mint", label: "Answer", lc: "g", fs: 40, lines: ["I get up at seven.", "She gets up at six."], uz: "Soat yettida turaman. · U soat oltida turadi." } ],
      notes: ["What time + do / does + who + verb?", "does she get up (-s yo’q!) → she gets up"] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 36, lines: ["I get up <span class='cn'>in</span> seven o’clock.", "She <span class='cn'>have</span> breakfast.", "He <span class='cn'>go</span> to bed at ten.", "I do my homework <span class='cn'>at</span> the evening."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 36, lines: ["I get up <span class='ca'>at</span> seven o’clock.", "She <span class='ca'>has</span> breakfast.", "He <span class='ca'>goes</span> to bed at ten.", "I do my homework <span class='ca'>in</span> the evening."],
        uz: "Soat → at. Kun qismi → in the. U → has, goes, does." } ] },

    /* ---------- PRACTICE ---------- */
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men soat yettida turaman.", "I get up at seven o’clock."],
      ["Lola soat sakkizda maktabga boradi.", "Lola goes to school at eight."],
      ["Biz kechqurun kechki ovqat qilamiz.", "We have dinner in the evening."],
      ["Soat nechada uxlashga yotasiz?", "What time do you go to bed?"],
      ["Otam soat oltida uyga keladi.", "My father comes home at six o’clock."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["She get up at six.", "She gets up at six."],
      ["I go to bed in ten o’clock.", "I go to bed at ten o’clock."],
      ["He haves lunch at one.", "He has lunch at one."],
      ["What time you get up?", "What time do you get up?"] ] },
    { t: "spot", bg: "sky", title: "My day", sub: "Pick a card. Finish the sentence about YOU. · O’zingiz haqingizda ayting.", size: 46,
      cards: [{ t: "I get up at…", uz: "Men soat …da turaman." }, { t: "I have breakfast at…", uz: "Men soat …da nonushta qilaman." }, { t: "I go to school / work at…", uz: "Men soat …da maktabga / ishga boraman." },
              { t: "I come home at…", uz: "Men soat …da uyga kelaman." }, { t: "I have dinner at…", uz: "Men soat …da kechki ovqat qilaman." }, { t: "I go to bed at…", uz: "Men soat …da uxlashga yotaman." }] },
    { t: "spot", bg: "yel", title: "Pairs: what time do you…?", sub: "A asks: “What time do you get up?” B answers. Then A tells the class: “Lola gets up at six.” · A so’raydi, B javob beradi, keyin A sinfga aytadi.", size: 50,
      cards: [{ t: "get up", uz: "turmoq" }, { t: "have breakfast", uz: "nonushta qilmoq" }, { t: "go to school / work", uz: "maktabga / ishga bormoq" },
              { t: "have lunch", uz: "tushlik qilmoq" }, { t: "come home", uz: "uyga kelmoq" }, { t: "go to bed", uz: "uxlashga yotmoq" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say my daily routine", "say times: at seven o’clock", "use in the morning / in the evening", "say another person’s day: She gets up…", "ask “What time do you…?”", "use has, goes, does for he / she"] },
    { t: "bye", chips: [["I get up at seven.", "peach"], ["She has breakfast.", "mint"], ["What time do you…?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "get up (stretch)", say: "He gets up! / She gets up!" }, { cue: "wash your face", say: "He washes his face! / She washes her face!" },
      { cue: "have breakfast", say: "He has breakfast! / She has breakfast!" }, { cue: "go to school (walk with a bag)", say: "He goes to school! / She goes to school!" },
      { cue: "go to work (drive a car)", say: "He goes to work! / She goes to work!" }, { cue: "have lunch", say: "He has lunch! / She has lunch!" },
      { cue: "come home (open the door: “Hello!”)", say: "He comes home! / She comes home!" }, { cue: "do homework", say: "He does his homework! / She does her homework!" },
      { cue: "have dinner with the family", say: "He has dinner! / She has dinner!" }, { cue: "go to bed", say: "He goes to bed! / She goes to bed!" },
      { cue: "drink tea in the morning", say: "He drinks tea! / She drinks tea!" }, { cue: "show 7 fingers, then stretch", say: "He gets up at seven! / She gets up at seven!" }
    ],
    board: [
      { cat: "Routine words", qs: [["“nonushta qilmoq” in English", "have breakfast"], ["“uyga kelmoq” in English", "come home"], ["“uxlashga yotmoq” in English", "go to bed"]] },
      { cat: "At or in?", qs: [["___ seven o’clock", "at"], ["___ the morning", "in"], ["I have dinner ___ the evening.", "in"]] },
      { cat: "He / she", qs: [["I get up → She ___", "gets up"], ["I have lunch → He ___", "has lunch"], ["I do my homework → She ___", "does her homework"]] },
      { cat: "What time?", qs: [["Say 7:00 in English.", "seven o’clock"], ["“Soat nechada turasiz?” in English", "What time do you get up?"], ["Lola: 6:00, get up. Say it!", "Lola gets up at six o’clock."]] },
      { cat: "Order", qs: [["Which is first: go to bed or get up?", "get up"], ["Say in order: dinner, breakfast, lunch.", "breakfast, lunch, dinner"], ["Say in order: have dinner, get up, go to school.", "get up → go to school → have dinner"]] },
      { cat: "Fix it", qs: [["She get up at six.", "She gets up at six."], ["I have lunch in one o’clock.", "I have lunch at one o’clock."], ["He do his homework.", "He does his homework."]] }
    ],
    wheel: [
      { name: "Morning", tasks: ["What time do you get up?", "Say 2 things you do in the morning.", "Do you drink tea in the morning?", "What time do you go to school / work?"] },
      { name: "Evening", tasks: ["What time do you have dinner?", "What time do you go to bed?", "Say 2 things you do in the evening.", "Do you watch TV in the evening?"] },
      { name: "My mother", tasks: ["What time does your mother get up?", "Say 1 thing your mother does in the morning.", "Does your mother cook dinner?", "Say 2 sentences about her day."] },
      { name: "Classmate", tasks: ["Ask a classmate: What time do you get up?", "Tell the class: He / She gets up at…", "Ask: Do you have lunch at home?", "Ask: What time do you go to bed?"] },
      { name: "Times", tasks: ["Say: 7:00.", "Say: 10:00 and 12:00.", "Say: I go to bed at…", "Say: I have lunch at…"] },
      { name: "Mime", tasks: ["Mime: get up. Your team says it.", "Mime: have breakfast. Your team says it.", "Mime: go to bed. Your team says it.", "Mime 2 things. Your team says both."] }
    ],
    build: [
      { w: ["I","get","up","at","seven"], e: "." }, { w: ["She","has","breakfast","at","eight"], e: "." },
      { w: ["We","have","lunch","at","one"], e: "." }, { w: ["He","goes","to","bed","at","ten"], e: "." },
      { w: ["What","time","do","you","get","up"], e: "?" }, { w: ["I","come","home","at","five"], e: "." },
      { w: ["Then","I","have","dinner"], e: "." }, { w: ["Lola","goes","to","school"], e: "." }
    ],
    auction: [
      { s: "I get up at seven o’clock.", ok: true },
      { s: "She have breakfast at eight.", ok: false, fix: "She has breakfast at eight." },
      { s: "We have dinner in the evening.", ok: true },
      { s: "He go to work at nine.", ok: false, fix: "He goes to work at nine." },
      { s: "What time do you go to bed?", ok: true },
      { s: "I come home in five o’clock.", ok: false, fix: "I come home at five o’clock." },
      { s: "Lola does her homework.", ok: true },
      { s: "What time you get up?", ok: false, fix: "What time do you get up?" },
      { s: "My father has lunch at work.", ok: true },
      { s: "She gets up at the morning.", ok: false, fix: "She gets up in the morning." }
    ]
  }
};
