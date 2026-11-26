/* Extra lesson: Past continuous (taught Thursday 26 November 2026, Group A).
   was / were + verb-ing for an action in progress at a time in the past: At eight o’clock yesterday
   I was having breakfast. Built on the present continuous (lesson 5: am / is / are → was / were)
   and today’s time words (at seven o’clock, in the morning, yesterday, last night).
   Negatives (wasn’t / weren’t), questions (Were you…? What were you doing?) with short answers,
   and while (two long actions at the same time). Uzbek: -yotgan edi (o’qiyotgan edim). */
window.LESSON = {
  id: "pc1",
  title: "Past continuous",
  openDate: "2026-11-26",
  openNow: true,
  slides: [
    { t: "cover", tag: "Extra lesson · Grammar", title: "What were you <span class='cy'>doing?</span>", lead: "Past continuous: was / were + -ing · O’tgan davomli zamon", chips: [["Men kitob o’qiyotgan edim.", "peach"], ["U uxlayotgan edi.", "mint"], ["Nima qilayotgan edingiz?", "skyb"]] },
    { t: "goals", items: [
      ["Say what was happening at a time in the past", "At eight o’clock I was having breakfast.", "Soat sakkizda nonushta qilayotgan edim."],
      ["Say what was not happening", "We weren’t watching TV.", "Biz televizor ko’rmayotgan edik."],
      ["Ask about the past", "What were you doing last night?", "Kecha kechqurun nima qilayotgan edingiz?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: yesterday at this time", sub: "It’s two o’clock now. What were you doing yesterday at two o’clock? Pick a card and say it in Uzbek, then in English!",
      cards: [{ t: "working", uz: "ishlayotgan edim" }, { t: "sleeping", uz: "uxlayotgan edim" }, { t: "having lunch", uz: "tushlik qilayotgan edim" }, { t: "studying", uz: "o’qiyotgan edim" }, { t: "driving", uz: "mashina haydayotgan edim" }, { t: "shopping", uz: "xarid qilayotgan edim" }] },

    /* ---------- NOW AND THEN ---------- */
    { t: "cols", eb: "Now and then · Hozir va o’shanda", title: "Present continuous → past continuous", menu: "Now and then", cols: [
      { bg: "mint", label: "Now (lesson 5)", lc: "g", fs: 38, lines: ["I <span class='ca'>am reading</span> now.", "She <span class='ca'>is cooking</span> now.", "They <span class='ca'>are playing</span> now."], uz: "Hozir: o’qiyapman, pishiryapti, o’ynashyapti" },
      { bg: "skyb", label: "Then (yesterday)", lc: "b", fs: 38, lines: ["I <span class='ca'>was reading</span> at 8:00.", "She <span class='ca'>was cooking</span> at 8:00.", "They <span class='ca'>were playing</span> at 8:00."], uz: "O’shanda: o’qiyotgan edim, pishirayotgan edi, o’ynashayotgan edi" } ],
      notes: ["am / is → was", "are → were", "-ing stays the same!"] },
    { t: "cols", eb: "When do we use it?", title: "Two situations", menu: "When do we use it?", cols: [
      { bg: "mint", label: "1 · At a time in the past", lc: "g", fs: 38, lines: ["At seven o’clock yesterday I <span class='ca'>was having</span> breakfast."], uz: "O’tmishdagi aniq bir vaqtda davom etayotgan ish. Kecha soat yettida nonushta qilayotgan edim." },
      { bg: "peach", label: "2 · Two actions together", lc: "r", fs: 38, lines: ["I <span class='ca'>was cooking</span> while my sister <span class='ca'>was cleaning</span>."], uz: "Bir vaqtda bo’layotgan ikki ish. Men ovqat pishirayotgan edim, singlim esa tozalayotgan edi." } ],
      notes: ["The action was in progress: not finished", "Uzbek: -yotgan edi (o’qiyotgan edim)"] },
    { t: "formula", bg: "ink", eb: "The rule", title: "Who + was / were + verb-ing", rows: [
      { chips: [["I", "skyb"], ["was", "peach"], ["sleeping", "mint"], ["at midnight.", "butter"]], uz: "Yarim tunda uxlayotgan edim." },
      { chips: [["He", "skyb"], ["was", "peach"], ["working", "mint"], ["at nine o’clock.", "butter"]], uz: "U soat to’qqizda ishlayotgan edi." },
      { chips: [["We", "skyb"], ["were", "peach"], ["watching TV", "mint"], ["last night.", "butter"]], uz: "Kecha kechqurun televizor ko’rayotgan edik." } ],
      notes: ["2 parts: was / were + verb-ing", "Never forget was / were!", "Spelling of -ing: like lesson 5 (swimming, writing)"] },
    { t: "table", eb: "Who + was / were", title: "Was or were?", head: ["Who", "was / were", "verb-ing", "Uzbek"], rows: [
      ["I", "<b class='ca'>was</b>", "working", "Men ishlayotgan edim"],
      ["You", "<b class='ca'>were</b>", "working", "Siz ishlayotgan edingiz"],
      ["He / She / It", "<b class='ca'>was</b>", "working", "U ishlayotgan edi"],
      ["We", "<b class='ca'>were</b>", "working", "Biz ishlayotgan edik"],
      ["They", "<b class='ca'>were</b>", "working", "Ular ishlayotgan edi"] ],
      notes: ["I, he, she, it, one person → was", "you, we, they, many people → were"] },
    { t: "examples", eb: "Positive", title: "Examples: yes sentences", items: [
      ["At eight o’clock I <span class='ca'>was having</span> breakfast.", "Soat sakkizda nonushta qilayotgan edim."],
      ["My mother <span class='ca'>was cooking</span> plov at midday.", "Onam tushda palov pishirayotgan edi."],
      ["It <span class='ca'>was raining</span> in the morning.", "Ertalab yomg’ir yog’ayotgan edi."],
      ["We <span class='ca'>were waiting</span> for the bus at half past seven.", "Soat yetti yarimda avtobus kutayotgan edik."],
      ["Aziz and Bobur <span class='ca'>were playing</span> football after school.", "Aziz va Bobur maktabdan keyin futbol o’ynashayotgan edi."],
      ["You <span class='ca'>were sleeping</span> at midnight.", "Siz yarim tunda uxlayotgan edingiz."] ] },
    { t: "gaps", title: "Was or were?", sub: "Say the full sentence. Tap to check.", w: 200, fs: 38, rows: [
      ["I ___ reading a book.", "was"], ["My friends ___ waiting for me.", "were"], ["The baby ___ sleeping.", "was"],
      ["We ___ having dinner.", "were"], ["Madina ___ cooking.", "was"], ["You ___ talking on the phone.", "were"] ] },
    { t: "gaps", title: "Open the brackets", sub: "was / were + verb-ing. Tap to check.", w: 330, fs: 34, rows: [
      ["She ___ (watch) TV at nine o’clock.", "was watching"], ["They ___ (play) chess.", "were playing"], ["I ___ (write) a letter.", "was writing"],
      ["It ___ (snow) in the morning.", "was snowing"], ["We ___ (sit) in the café.", "were sitting"], ["He ___ (run) in the park.", "was running"] ] },

    /* ---------- VOCABULARY ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Past time words", menu: "New words: past time words", items: [
      ["I was working <span class='ca'>yesterday</span> at ten o’clock.", "yesterday = kecha"],
      ["I was sleeping at eleven o’clock <span class='ca'>last night</span>.", "last night = kecha kechasi"],
      ["She was cooking <span class='ca'>yesterday morning</span>.", "yesterday morning = kecha ertalab"],
      ["We were travelling <span class='ca'>last week</span>.", "last week = o’tgan hafta"],
      ["<span class='ca'>At that time</span> I was living in Samarkand.", "at that time = o’sha paytda"],
      ["I was watching TV <span class='ca'>while</span> my brother was sleeping.", "while = …ayotganda, …gan paytda"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Things we do", menu: "New words: things we do", items: [
      ["I was <span class='ca'>travelling</span> to Bukhara by train.", "travel = sayohat qilmoq"],
      ["Lola was <span class='ca'>chatting</span> with her friend.", "chat = suhbatlashmoq"],
      ["Dad was <span class='ca'>repairing</span> the car.", "repair = ta’mirlamoq"],
      ["The children were <span class='ca'>shouting</span> in the garden.", "shout = baqirmoq"],
      ["I was <span class='ca'>looking for</span> my keys.", "look for = qidirmoq"],
      ["Grandma was <span class='ca'>feeding</span> the chickens.", "feed = boqmoq, ovqat bermoq"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "What was the weather like?", items: [
      { bg: "skyb", w: "🌧️", label: "rain = yomg’ir yog’moq", en: "It was raining all day.", uz: "Kun bo’yi yomg’ir yog’ayotgan edi." },
      { bg: "mint", w: "❄️", label: "snow = qor yog’moq", en: "It was snowing in Tashkent.", uz: "Toshkentda qor yog’ayotgan edi." },
      { bg: "butter", w: "☀️", label: "shine = charaqlamoq", en: "The sun was shining.", uz: "Quyosh charaqlab turgan edi." },
      { bg: "peach", w: "💨", label: "blow = esmoq", en: "The wind was blowing.", uz: "Shamol esayotgan edi." } ] },
    { t: "spot", bg: "sky", title: "This morning in our class", sub: "Pick a card. Make a sentence about this morning or a classmate. The class says “True!” or “False!”", size: 44,
      cards: ["At eight o’clock I was…", "At ten o’clock the teacher was…", "This morning it was…", "At nine o’clock my mother was…", "At seven o’clock … was…", "At midday we were…"] },

    /* ---------- NEGATIVE ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "was not / were not + verb-ing", rows: [
      { chips: [["I", "skyb"], ["wasn’t", "peach"], ["sleeping.", "mint"]], uz: "Men uxlamayotgan edim." },
      { chips: [["She", "skyb"], ["wasn’t", "peach"], ["listening.", "mint"]], uz: "U tinglamayotgan edi." },
      { chips: [["They", "skyb"], ["weren’t", "peach"], ["working.", "mint"]], uz: "Ular ishlamayotgan edi." } ],
      notes: ["was not = wasn’t", "were not = weren’t", "Uzbek: -mayotgan edi"] },
    { t: "examples", eb: "Negative", title: "Examples: no sentences", items: [
      ["I <span class='cn'>wasn’t</span> sleeping at midnight. I was reading.", "Yarim tunda uxlamayotgan edim. Kitob o’qiyotgan edim."],
      ["It <span class='cn'>wasn’t</span> raining yesterday.", "Kecha yomg’ir yog’mayotgan edi."],
      ["Bobur <span class='cn'>wasn’t</span> listening to the teacher.", "Bobur o’qituvchini tinglamayotgan edi."],
      ["We <span class='cn'>weren’t</span> watching TV. We were talking.", "Biz televizor ko’rmayotgan edik. Gaplashayotgan edik."],
      ["You <span class='cn'>weren’t</span> wearing a coat.", "Siz palto kiymagan edingiz."],
      ["My parents <span class='cn'>weren’t</span> working last week.", "Ota-onam o’tgan hafta ishlamayotgan edi."] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "Was / Were + who + verb-ing?", rows: [
      { chips: [["Were", "peach"], ["you", "skyb"], ["sleeping?", "mint"]], uz: "Uxlayotgan edingizmi?" },
      { chips: [["Was", "peach"], ["she", "skyb"], ["cooking?", "mint"]], uz: "U ovqat pishirayotgan edimi?" },
      { chips: [["What", "butter"], ["were", "peach"], ["they", "skyb"], ["doing?", "mint"]], uz: "Ular nima qilayotgan edi?" } ],
      notes: ["was / were goes FIRST", "No did here!", "Like lesson 5: Are you…? → Were you…?"] },
    { t: "cols", eb: "Short answers · Qisqa javoblar", title: "Yes, I was. No, they weren’t.", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 40, lines: ["<span class='cw'>Were</span> you working?", "<span class='cw'>Was</span> he sleeping?", "<span class='cw'>Were</span> they playing?"] },
      { bg: "mint", label: "Yes", lc: "g", fs: 40, lines: ["Yes, I <span class='ca'>was</span>.", "Yes, he <span class='ca'>was</span>.", "Yes, they <span class='ca'>were</span>."] },
      { bg: "peach", label: "No", lc: "r", fs: 40, lines: ["No, I <span class='cn'>wasn’t</span>.", "No, he <span class='cn'>wasn’t</span>.", "No, they <span class='cn'>weren’t</span>."] } ],
      notes: ["Were you…? → Yes, I was. (not “I were”)", "Don’t repeat the verb: Yes, I was."] },
    { t: "examples", eb: "Wh- questions", title: "What? Where? Who? Why?", menu: "Wh- questions", items: [
      ["<span class='cw'>What</span> were you doing at eight o’clock?", "Soat sakkizda nima qilayotgan edingiz?"],
      ["<span class='cw'>Where</span> were you going?", "Qayerga ketayotgan edingiz?"],
      ["<span class='cw'>Who</span> was she talking to?", "U kim bilan gaplashayotgan edi?"],
      ["<span class='cw'>Why</span> were you laughing?", "Nega kulayotgan edingiz?"],
      ["<span class='cw'>What</span> was he wearing?", "U nima kiygan edi?"],
      ["<span class='cw'>What</span> were the children eating?", "Bolalar nima yeyayotgan edi?"] ] },
    { t: "quad", eb: "Key words · Asosiy so’zlar", title: "Words for the past", items: [
      { bg: "peach", w: "<span style='font-size:62px'>yesterday</span>", label: "kecha", en: "I was working yesterday.", uz: "Kecha ishlayotgan edim." },
      { bg: "mint", w: "<span style='font-size:58px;line-height:1.05;display:block'>last<br>night</span>", label: "kecha kechasi", en: "It was raining last night.", uz: "Kecha kechasi yomg’ir yog’ayotgan edi." },
      { bg: "skyb", w: "<span style='font-size:58px;line-height:1.05;display:block'>at that<br>time</span>", label: "o’sha paytda", en: "At that time we were living in Bukhara.", uz: "O’sha paytda Buxoroda yashayotgan edik." },
      { bg: "butter", w: "<span style='font-size:84px'>while</span>", label: "…ayotganda", en: "I was reading while she was cooking.", uz: "U ovqat pishirayotganda men kitob o’qiyotgan edim." } ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Common mistakes", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 36, lines: ["I <span class='cn'>sleeping</span> at ten.", "They <span class='cn'>was</span> playing.", "I was <span class='cn'>watch</span> TV.", "<span class='cn'>Did you</span> sleeping?"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 36, lines: ["I <span class='ca'>was sleeping</span> at ten.", "They <span class='ca'>were</span> playing.", "I was <span class='ca'>watching</span> TV.", "<span class='ca'>Were you</span> sleeping?"] } ],
      notes: ["Never forget was / were", "you, we, they → were", "was / were + -ing, always"] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "Negatives and questions", sub: "wasn’t · weren’t · Was · Were · was · were. Tap to check.", w: 220, fs: 34, rows: [
      ["I ___ sleeping. I was reading. (inkor)", "wasn’t"], ["They ___ listening. (inkor)", "weren’t"], ["___ you working at nine?", "Were"],
      ["___ it raining yesterday?", "Was"], ["Was Lola cooking? — Yes, she ___.", "was"], ["Were they playing? — No, they ___.", "weren’t"] ] },
    { t: "gaps", title: "Now or then?", sub: "am / is / are or was / were + -ing? Look at the time word! Tap to check.", w: 330, fs: 34, rows: [
      ["Look! The baby ___ (smile) now.", "is smiling"], ["At eight o’clock yesterday I ___ (drive).", "was driving"], ["Be quiet! We ___ (study) now.", "are studying"],
      ["Last night they ___ (watch) a film.", "were watching"], ["At the moment she ___ (cook).", "is cooking"], ["At midnight it ___ (snow).", "was snowing"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men televizor ko’rayotgan edim.", "I was watching TV."],
      ["U uxlamayotgan edi.", "He wasn’t sleeping."],
      ["Biz avtobus kutayotgan edik.", "We were waiting for the bus."],
      ["Soat sakkizda nima qilayotgan edingiz?", "What were you doing at eight o’clock?"],
      ["Kecha yomg’ir yog’ayotgan edi.", "It was raining yesterday."] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: make it negative and a question", sub: "Say both. Tap to check.", fs: 36, rows: [
      ["She was cooking.", "She wasn’t cooking. · Was she cooking?"],
      ["They were playing.", "They weren’t playing. · Were they playing?"],
      ["You were listening.", "You weren’t listening. · Were you listening?"],
      ["It was raining.", "It wasn’t raining. · Was it raining?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["She cooking at seven o’clock.", "She was cooking at seven o’clock."],
      ["We was watching TV.", "We were watching TV."],
      ["I was write a letter.", "I was writing a letter."],
      ["He was swiming in the river.", "He was swimming in the river."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake: round 2", sub: "Harder ones! Tap to fix.", rows: [
      ["Did you sleeping at midnight?", "Were you sleeping at midnight?"],
      ["What you were doing?", "What were you doing?"],
      ["Were you working? — Yes, I were.", "Yes, I was."],
      ["Yesterday at ten I am working.", "Yesterday at ten I was working."] ] },
    { t: "spot", bg: "sky", title: "Yesterday…", sub: "Pick a card. Say what you were doing. Imagine if you need to!", size: 48,
      cards: ["At seven o’clock yesterday I was…", "At midday yesterday I was…", "Last night at nine I was…", "At midnight I wasn’t…", "Yesterday morning my family was…", "While I was …ing, my friend was …ing."] },
    { t: "spot", bg: "yel", title: "Detective!", sub: "Pairs. A is the detective: “Where were you at eight o’clock last night? What were you doing? Who were you with?” B answers from the card. Then change!", size: 44,
      cards: [{ t: "at the cinema", uz: "kinoteatrda" }, { t: "at a wedding", uz: "to’yda" }, { t: "at the bazaar", uz: "bozorda" }, { t: "in the kitchen", uz: "oshxonada" }, { t: "at the stadium", uz: "stadionda" }, { t: "on the train", uz: "poyezdda" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["use was / were + -ing", "say what I was doing at a time yesterday", "make negatives: wasn’t / weren’t", "ask “Were you…?” and answer “Yes, I was.”", "ask “What were you doing?”", "use while, yesterday, last night, at that time"] },
    { t: "bye", chips: [["I was …ing", "peach"], ["They weren’t …ing", "mint"], ["What were you doing?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "sleeping (8 o’clock yesterday)", say: "You were sleeping!" }, { cue: "cooking plov", say: "You were cooking plov!" },
      { cue: "driving a car", say: "You were driving!" }, { cue: "reading a book", say: "You were reading a book!" },
      { cue: "playing football", say: "You were playing football!" }, { cue: "talking on the phone", say: "You were talking on the phone!" },
      { cue: "walking in the rain with an umbrella", say: "You were walking in the rain!" }, { cue: "dancing at a wedding", say: "You were dancing at a wedding!" },
      { cue: "repairing a car", say: "You were repairing a car!" }, { cue: "looking for your keys", say: "You were looking for your keys!" },
      { cue: "eating a big lunch", say: "You were eating lunch!" }, { cue: "washing the dishes", say: "You were washing the dishes!" },
      { cue: "taking a selfie", say: "You were taking a selfie!" }, { cue: "feeding the chickens", say: "You were feeding the chickens!" }
    ],
    board: [
      { cat: "Was or were?", qs: [["I ___ working.", "was"], ["They ___ playing.", "were"], ["My mother and my sister ___ cooking.", "were"]] },
      { cat: "Make it past", qs: [["I am reading. →", "I was reading."], ["They are playing. →", "They were playing."], ["Is she sleeping? →", "Was she sleeping?"]] },
      { cat: "Negatives", qs: [["Make it NO: He was working.", "He wasn’t working."], ["Make it NO: We were watching TV.", "We weren’t watching TV."], ["Say 2 things you weren’t doing at midnight.", "I wasn’t … (any true)"]] },
      { cat: "Questions", qs: [["Make a question: You were sleeping.", "Were you sleeping?"], ["Short answer (no): Were they playing?", "No, they weren’t."], ["Ask with What: at eight o’clock yesterday", "What were you doing at eight o’clock yesterday?"]] },
      { cat: "New words", qs: [["“kecha” in English", "yesterday"], ["“qidirmoq” and “ta’mirlamoq”", "look for · repair"], ["“o’tgan hafta” and “o’sha paytda”", "last week · at that time"]] },
      { cat: "Fix it", qs: [["She cooking at seven.", "She was cooking at seven."], ["We was playing.", "We were playing."], ["Did you sleeping?", "Were you sleeping?"]] }
    ],
    wheel: [
      { name: "Yesterday", tasks: ["Say what you were doing at seven o’clock yesterday.", "Say what you were doing at midday yesterday.", "Say what you were doing at nine o’clock last night.", "Say 2 things you weren’t doing yesterday."] },
      { name: "Family", tasks: ["Say what your mother was doing at eight o’clock this morning.", "Say what your father was doing yesterday evening.", "Say what 2 people in your family were doing last night.", "Was your friend sleeping at midnight? Guess!"] },
      { name: "Weather", tasks: ["Was it raining yesterday? Say it.", "Say what the weather was doing this morning.", "Say: “It was snowing / raining / … when …”", "Say what the sun was doing yesterday."] },
      { name: "Questions", tasks: ["Ask a classmate: “What were you doing at 8:00?”", "Ask the teacher 2 “Were you…?” questions.", "Ask a “Where were you going?” question.", "Ask a “Who were you talking to?” question."] },
      { name: "Mime", tasks: ["Mime what you were doing this morning. Your team says it.", "Mime what your mother was doing. Your team says it.", "Mime 2 actions. Your team says “You were … while …”", "Mime a job. Your team says what you were doing."] },
      { name: "While", tasks: ["Say: “I was … while my brother was …”", "Say 2 things that were happening at the same time in class.", "Say: “While we were eating, …”", "Make a sentence with while about a wedding."] }
    ],
    build: [
      { w: ["I","was","reading","a","book"], e: "." }, { w: ["She","was","cooking","plov"], e: "." }, { w: ["They","weren’t","playing"], e: "." },
      { w: ["What","were","you","doing"], e: "?" }, { w: ["Was","it","raining"], e: "?" }, { w: ["We","were","waiting","for","the","bus"], e: "." },
      { w: ["Where","were","you","going"], e: "?" }, { w: ["At","eight","o’clock","I","was","having","breakfast"], e: "." },
      { w: ["I","wasn’t","sleeping","at","midnight"], e: "." }, { w: ["I","was","reading","while","she","was","cooking"], e: "." }
    ],
    auction: [
      { s: "She was cooking dinner.", ok: true },
      { s: "I was write a letter.", ok: false, fix: "I was writing a letter." },
      { s: "Were they playing football?", ok: true },
      { s: "We was watching TV.", ok: false, fix: "We were watching TV." },
      { s: "It wasn’t raining yesterday.", ok: true },
      { s: "My father working at nine o’clock.", ok: false, fix: "My father was working at nine o’clock." },
      { s: "What were you doing last night?", ok: true },
      { s: "Did you sleeping at midnight?", ok: false, fix: "Were you sleeping at midnight?" },
      { s: "Were you listening? — Yes, I were.", ok: false, fix: "Were you listening? — Yes, I was." },
      { s: "I was reading while my sister was sleeping.", ok: true },
      { s: "He was swiming in the river.", ok: false, fix: "He was swimming in the river." },
      { s: "The sun was shining in the morning.", ok: true }
    ]
  }
};
