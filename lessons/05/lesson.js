window.LESSON = {
  n: 5,
  title: "Present continuous",
  openNow: true,
  lockAnswers: false,      /* taught on 13 Nov: answers open for revision */
  slides: [
    { t: "cover", title: "What are you <span class='cy'>doing?</span>", lead: "Present continuous: actions happening now · Hozirgi davomli zamon", chips: [["Men o’qiyapman.", "peach"], ["U uxlayapti.", "mint"], ["Nima qilyapsiz?", "skyb"]] },
    { t: "goals", items: [
      ["Say what is happening now", "I am reading.", "Men o’qiyapman."],
      ["Say what is not happening", "She isn’t sleeping.", "U uxlamayapti."],
      ["Ask about now", "What are you doing?", "Nima qilyapsiz?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: what is the teacher doing?", sub: "The teacher mimes an action. You shout: “You are writing!”",
      cards: [{ t: "writing", uz: "yozyapti" }, { t: "drinking", uz: "ichyapti" }, { t: "sleeping", uz: "uxlayapti" }, { t: "singing", uz: "kuylayapti" }, { t: "reading", uz: "o’qiyapti" }, { t: "dancing", uz: "raqsga tushyapti" }] },

    /* ---------- WHEN ---------- */
    { t: "cols", eb: "When do we use it?", title: "Three situations", menu: "When do we use it?", cols: [
      { bg: "mint", label: "1 · Right now", lc: "g", fs: 40, lines: ["I <span class='ca'>am speaking</span> English now."], uz: "Aynan hozir bo’layotgan ish. Men hozir inglizcha gapiryapman." },
      { bg: "skyb", label: "2 · These days", lc: "b", fs: 40, lines: ["I <span class='ca'>am learning</span> English this month."], uz: "Shu kunlarda davom etayotgan ish. Bu oy ingliz tilini o’rganyapman." },
      { bg: "peach", label: "3 · Look! Listen!", lc: "r", fs: 40, lines: ["Look! It <span class='ca'>is snowing</span>!"], uz: "Biror narsaga e’tibor qaratganda. Qarang! Qor yog’yapti!" } ],
      notes: ["Uzbek: -yap- (o’qi-yap-man)", "Not finished yet: the action is in progress"] },
    { t: "formula", bg: "ink", eb: "The rule", title: "Who + am / is / are + verb-ing", rows: [
      { chips: [["I", "skyb"], ["am", "peach"], ["reading", "mint"], ["now.", "butter"]], uz: "Men hozir o’qiyapman." },
      { chips: [["She", "skyb"], ["is", "peach"], ["cooking", "mint"], ["now.", "butter"]], uz: "U hozir ovqat pishiryapti." },
      { chips: [["They", "skyb"], ["are", "peach"], ["playing", "mint"], ["now.", "butter"]], uz: "Ular hozir o’ynashyapti." } ],
      notes: ["2 parts: to be + verb-ing", "Never forget am / is / are!", "Never forget -ing!"] },
    { t: "table", eb: "Who + to be", title: "Am, is or are?", head: ["Who", "to be", "verb-ing", "Short form", "Uzbek"], rows: [
      ["I", "<b class='ca'>am</b>", "working", "I’m working", "Men ishlayapman"],
      ["You", "<b class='ca'>are</b>", "working", "You’re working", "Siz ishlayapsiz"],
      ["He / She / It", "<b class='ca'>is</b>", "working", "He’s / She’s / It’s working", "U ishlayapti"],
      ["We", "<b class='ca'>are</b>", "working", "We’re working", "Biz ishlayapmiz"],
      ["They", "<b class='ca'>are</b>", "working", "They’re working", "Ular ishlashyapti"] ],
      notes: ["One person or thing (Ali, my cat) → is", "Many (Ali and Vali, my cats) → are"] },
    { t: "examples", eb: "Positive", title: "Examples: yes sentences", items: [
      ["I <span class='ca'>am learning</span> English.", "Men ingliz tilini o’rganyapman."],
      ["You <span class='ca'>are listening</span> to me.", "Siz meni tinglayapsiz."],
      ["She <span class='ca'>is cooking</span> plov.", "U palov pishiryapti."],
      ["It <span class='ca'>is raining</span>.", "Yomg’ir yog’yapti."],
      ["We <span class='ca'>are sitting</span> in the classroom.", "Biz sinfxonada o’tiribmiz."],
      ["They <span class='ca'>are playing</span> football.", "Ular futbol o’ynashyapti."] ] },

    /* ---------- SPELLING ---------- */
    { t: "cols", eb: "Spelling", title: "How to add -ing", cols: [
      { bg: "mint", label: "+ ing", lc: "g", fs: 44, lines: ["read → reading", "play → playing", "eat → eating"], uz: "Ko’p fe’llar: shunchaki -ing qo’shamiz." },
      { bg: "butter", label: "e → ing", fs: 44, lines: ["write → writing", "dance → dancing", "make → making"], uz: "Oxiri -e bo’lsa: e tushib qoladi." },
      { bg: "skyb", label: "double", lc: "b", fs: 44, lines: ["swim → swimming", "run → running", "sit → sitting"], uz: "Qisqa fe’l (undosh-unli-undosh): oxirgi harf ikkilanadi." } ],
      notes: ["Special: lie → lying · die → dying", "No double: open → opening · listen → listening"] },
    { t: "gaps", title: "Add -ing", sub: "Careful with the spelling! Tap to check.", w: 330, rows: [
      ["swim → ___", "swimming"], ["write → ___", "writing"], ["play → ___", "playing"],
      ["run → ___", "running"], ["dance → ___", "dancing"], ["sit → ___", "sitting"] ] },
    { t: "gaps", title: "Add -ing: round 2", sub: "New verbs! Tap to check.", w: 330, rows: [
      ["cut → ___", "cutting"], ["ride → ___", "riding"], ["wait → ___", "waiting"],
      ["shop → ___", "shopping"], ["smile → ___", "smiling"], ["carry → ___", "carrying"] ] },

    /* ---------- VOCABULARY ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "At home", menu: "New words: at home", items: [
      ["Mum <span class='ca'>is washing the dishes</span>.", "wash the dishes = idish yuvmoq"],
      ["Dad <span class='ca'>is fixing</span> the car.", "fix = tuzatmoq"],
      ["I <span class='ca'>am cleaning</span> my room.", "clean = tozalamoq"],
      ["Grandma <span class='ca'>is watering</span> the flowers.", "water = sug’ormoq"],
      ["My sister <span class='ca'>is ironing</span> a shirt.", "iron = dazmollamoq"],
      ["The baby <span class='ca'>is crying</span>.", "cry = yig’lamoq"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "In the street", menu: "New words: in the street", items: [
      ["We <span class='ca'>are waiting for</span> the bus.", "wait for = kutmoq"],
      ["A man <span class='ca'>is crossing</span> the street.", "cross = kesib o’tmoq"],
      ["She <span class='ca'>is carrying</span> a heavy bag.", "carry = ko’tarib yurmoq"],
      ["The boys <span class='ca'>are riding</span> bikes.", "ride = minmoq"],
      ["He <span class='ca'>is buying</span> bread.", "buy = sotib olmoq"],
      ["They <span class='ca'>are laughing</span>.", "laugh = kulmoq"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "What are you wearing?", items: [
      { bg: "peach", w: "👕", label: "wear = kiymoq", en: "I am wearing a white shirt.", uz: "Men oq ko’ylak kiyganman." },
      { bg: "mint", w: "🧥", label: "a jacket", en: "He is wearing a black jacket.", uz: "U qora kurtka kiygan." },
      { bg: "skyb", w: "👗", label: "a dress", en: "She is wearing a red dress.", uz: "U qizil ko’ylak kiygan." },
      { bg: "butter", w: "👟", label: "trainers", en: "They are wearing new trainers.", uz: "Ular yangi krossovka kiyishgan." } ] },
    { t: "spot", bg: "sky", title: "Look at a classmate!", sub: "Pick a card and say it about someone in this room. The class guesses who it is!", size: 46,
      cards: ["He is wearing…", "She is wearing…", "He is sitting next to…", "She is holding…", "He is looking at…", "She is smiling at…"] },

    /* ---------- NEGATIVE ---------- */
    { t: "formula", bg: "ink", eb: "Negative · Inkor", title: "am / is / are + not + verb-ing", rows: [
      { chips: [["I", "skyb"], ["am not", "peach"], ["sleeping.", "mint"]], uz: "Men uxlamayapman." },
      { chips: [["He", "skyb"], ["isn’t", "peach"], ["working.", "mint"]], uz: "U ishlamayapti." },
      { chips: [["We", "skyb"], ["aren’t", "peach"], ["watching TV.", "mint"]], uz: "Biz televizor ko’rmayapmiz." } ],
      notes: ["is not = isn’t", "are not = aren’t", "I am not = I’m not (no “amn’t”!)"] },
    { t: "examples", eb: "Negative", title: "Examples: no sentences", items: [
      ["I<span class='cn'>’m not</span> eating now.", "Men hozir ovqat yemayapman."],
      ["She <span class='cn'>isn’t</span> listening.", "U tinglamayapti."],
      ["It <span class='cn'>isn’t</span> snowing today.", "Bugun qor yog’mayapti."],
      ["You <span class='cn'>aren’t</span> writing.", "Siz yozmayapsiz."],
      ["They <span class='cn'>aren’t</span> waiting for us.", "Ular bizni kutishmayapti."],
      ["My phone <span class='cn'>isn’t</span> working.", "Telefonim ishlamayapti."] ] },

    /* ---------- QUESTIONS ---------- */
    { t: "formula", bg: "ink", eb: "Questions · So’roq", title: "Am / Is / Are + who + verb-ing?", rows: [
      { chips: [["Are", "peach"], ["you", "skyb"], ["listening?", "mint"]], uz: "Tinglayapsizmi?" },
      { chips: [["Is", "peach"], ["she", "skyb"], ["cooking?", "mint"]], uz: "U ovqat pishiryaptimi?" },
      { chips: [["Are", "peach"], ["they", "skyb"], ["coming?", "mint"]], uz: "Ular kelishyaptimi?" } ],
      notes: ["to be goes FIRST", "No do / does here!", "Uzbek: -yap…-mi?"] },
    { t: "cols", eb: "Short answers · Qisqa javoblar", title: "Yes, I am. No, I’m not.", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 40, lines: ["<span class='cw'>Are</span> you working?", "<span class='cw'>Is</span> he sleeping?", "<span class='cw'>Are</span> they playing?"] },
      { bg: "mint", label: "Yes", lc: "g", fs: 40, lines: ["Yes, I <span class='ca'>am</span>.", "Yes, he <span class='ca'>is</span>.", "Yes, they <span class='ca'>are</span>."] },
      { bg: "peach", label: "No", lc: "r", fs: 40, lines: ["No, I<span class='cn'>’m not</span>.", "No, he <span class='cn'>isn’t</span>.", "No, they <span class='cn'>aren’t</span>."] } ],
      notes: ["Don’t repeat the verb: “Yes, I am working” is too long", "Never: “Yes, I’m.”"] },
    { t: "examples", eb: "Wh- questions", title: "What? Where? Who? Why?", menu: "Wh- questions", items: [
      ["<span class='cw'>What</span> are you doing?", "Nima qilyapsiz?"],
      ["<span class='cw'>Where</span> is he going?", "U qayerga ketyapti?"],
      ["<span class='cw'>Who</span> is she talking to?", "U kim bilan gaplashyapti?"],
      ["<span class='cw'>Why</span> are you laughing?", "Nega kulyapsiz?"],
      ["<span class='cw'>What</span> is she wearing?", "U nima kiygan?"],
      ["<span class='cw'>What</span> are they eating?", "Ular nima yeyishyapti?"] ] },
    { t: "quad", eb: "Signal words · Belgi so’zlar", title: "Words that say “now”", items: [
      { bg: "peach", w: "now", label: "hozir", en: "I am working now.", uz: "Men hozir ishlayapman." },
      { bg: "mint", w: "<span style='font-size:62px;line-height:1.05;display:block'>at the<br>moment</span>", label: "ayni paytda", en: "She is busy at the moment.", uz: "U ayni paytda band." },
      { bg: "skyb", w: "<span style='font-size:84px'>Look!</span>", label: "Qarang!", en: "Look! The bus is coming.", uz: "Qarang! Avtobus kelyapti." },
      { bg: "butter", w: "<span style='font-size:84px'>Listen!</span>", label: "Eshiting!", en: "Listen! Someone is singing.", uz: "Eshiting! Kimdir kuylayapti." } ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Verbs with no -ing", menu: "Verbs with no -ing", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 40, lines: ["I <span class='cn'>am liking</span> tea.", "She <span class='cn'>is wanting</span> water.", "I <span class='cn'>am knowing</span> him."] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 40, lines: ["I <span class='ca'>like</span> tea.", "She <span class='ca'>wants</span> water.", "I <span class='ca'>know</span> him."] },
      { bg: "butter", label: "The list", fs: 40, lines: ["like · love · hate", "want · need", "know · understand"], uz: "Bular his-tuyg’u va fikr fe’llari: -ing olmaydi." } ] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "Am, is or are?", sub: "Say the full sentence. Tap to check.", w: 200, fs: 38, rows: [
      ["I ___ drinking tea.", "am"], ["My friends ___ waiting.", "are"], ["The cat ___ sleeping.", "is"],
      ["We ___ learning English.", "are"], ["Madina ___ cooking.", "is"], ["You ___ sitting.", "are"] ] },
    { t: "gaps", title: "Open the brackets", sub: "Use am / is / are + verb-ing. Tap to check.", w: 330, fs: 34, rows: [
      ["She ___ (wash) the dishes.", "is washing"], ["They ___ (ride) bikes.", "are riding"], ["I ___ (not / sleep).", "am not sleeping"],
      ["He ___ (carry) a bag.", "is carrying"], ["___ you ___ (wait)?", "Are … waiting"], ["It ___ (not / rain).", "isn’t raining"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men choy ichyapman.", "I am drinking tea."],
      ["U uxlamayapti.", "He isn’t sleeping."],
      ["Biz avtobus kutyapmiz.", "We are waiting for the bus."],
      ["Nima qilyapsiz?", "What are you doing?"] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: make it negative and a question", sub: "Say both. Tap to check.", fs: 38, rows: [
      ["She is cooking.", "She isn’t cooking. · Is she cooking?"],
      ["They are playing.", "They aren’t playing. · Are they playing?"],
      ["You are listening.", "You aren’t listening. · Are you listening?"],
      ["It is raining.", "It isn’t raining. · Is it raining?"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["She cooking now.", "She is cooking now."],
      ["I am write a letter.", "I am writing a letter."],
      ["They is playing.", "They are playing."],
      ["He is runing.", "He is running."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake: round 2", sub: "Harder ones! Tap to fix.", rows: [
      ["Do you listening?", "Are you listening?"],
      ["I am liking this song.", "I like this song."],
      ["What you are doing?", "What are you doing?"],
      ["She don’t working today.", "She isn’t working today."] ] },
    { t: "spot", bg: "sky", title: "Right now…", sub: "Pick a card. Finish the sentence. Imagine if you need to!", size: 52,
      cards: ["Right now I am…", "My mother is probably…", "In this room, someone is…", "My friends are…", "What are you doing?", "Is it raining now?"] },
    { t: "spot", bg: "yel", title: "Phone call!", sub: "Pairs. A: “Hello! Where are you? What are you doing?” B answers from the card with 2 sentences.", size: 48,
      cards: [{ t: "at the bazaar", uz: "bozorda" }, { t: "in the kitchen", uz: "oshxonada" }, { t: "in the park", uz: "bog’da" }, { t: "on the bus", uz: "avtobusda" }, { t: "at a wedding", uz: "to’yda" }, { t: "at the stadium", uz: "stadionda" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "mystery", menu: "Mystery Action" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["use am / is / are + -ing", "spell -ing words correctly", "make negatives: isn’t / aren’t", "ask questions and give short answers", "use new verbs: wash, fix, carry, wear…", "remember: like, want, know have no -ing"] },
    { t: "bye", chips: [["I am…ing", "peach"], ["She isn’t…ing", "mint"], ["What are you doing?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "swimming", say: "You are swimming! / He is swimming." }, { cue: "cooking", say: "You are cooking! / She is cooking." },
      { cue: "washing the dishes", say: "You are washing the dishes!" }, { cue: "ironing a shirt", say: "You are ironing a shirt!" },
      { cue: "driving", say: "You are driving! / He is driving." }, { cue: "riding a bike", say: "You are riding a bike!" },
      { cue: "playing football", say: "You are playing football!" }, { cue: "carrying a heavy bag", say: "You are carrying a heavy bag!" },
      { cue: "crying", say: "You are crying! / He is crying." }, { cue: "laughing", say: "You are laughing! / She is laughing." },
      { cue: "waiting for the bus", say: "You are waiting for the bus!" }, { cue: "watering the flowers", say: "You are watering the flowers!" },
      { cue: "talking on the phone", say: "You are talking on the phone!" }, { cue: "cleaning the window", say: "You are cleaning the window!" },
      { cue: "taking a selfie", say: "You are taking a selfie!" }, { cue: "brushing your teeth", say: "You are brushing your teeth!" }
    ],
    board: [
      { cat: "-ing", qs: [["read →", "reading"], ["write →", "writing"], ["swim → · shop → · cut →", "swimming · shopping · cutting"]] },
      { cat: "am / is / are", qs: [["I ___ eating.", "am"], ["My parents ___ working.", "are"], ["Ali and his cat ___ sleeping.", "are"]] },
      { cat: "Negatives", qs: [["Make it NO: He is working.", "He isn’t working."], ["Make it NO: I am reading.", "I’m not reading."], ["Say two things you aren’t doing now.", "I’m not sleeping. I’m not eating. (any true)"]] },
      { cat: "Questions", qs: [["Make a question: She is cooking.", "Is she cooking?"], ["Short answer (no): Are they coming?", "No, they aren’t."], ["Ask with “Where”: He is going to the bazaar.", "Where is he going?"]] },
      { cat: "New words", qs: [["“kutmoq” in English", "wait (for)"], ["“tuzatmoq” and “ko’tarib yurmoq”", "fix · carry"], ["Say what you are wearing today.", "I am wearing … (any true)"]] },
      { cat: "Fix it", qs: [["She reading.", "She is reading."], ["I am siting.", "I am sitting."], ["I am wanting tea.", "I want tea."]] }
    ],
    mystery: { title: "Mystery Action", unit: "Action", how: "What am I doing? Guess with “Are you …ing?”. After 1 clue: 300 points, after 2: 200, after 3: 100.", items: [
      { p: "Cooking plov", uz: "Palov pishiryapman", c: ["I am standing in the kitchen.", "I am cutting carrots and onions.", "I am putting rice in a big kazan."] },
      { p: "Watching football", uz: "Futbol ko’ryapman", c: ["I am sitting on the sofa.", "I am looking at a screen.", "I am shouting “Goal!”"] },
      { p: "Shopping at the bazaar", uz: "Bozorda xarid qilyapman", c: ["I am walking and looking around.", "I am carrying heavy bags.", "I am asking: “How much is it?”"] },
      { p: "Taking a taxi", uz: "Taksida ketyapman", c: ["I am sitting, but I am moving.", "I am telling a man my address.", "I am paying the driver."] },
      { p: "Doing homework", uz: "Uy vazifasini qilyapman", c: ["I am sitting at a desk.", "I am holding a pen.", "I am writing in my English notebook."] },
      { p: "Sleeping", uz: "Uxlayapman", c: ["I am not standing and I am not sitting.", "I am not speaking.", "My eyes are closed and I am dreaming."] },
      { p: "Washing a car", uz: "Mashina yuvyapman", c: ["I am standing outside.", "I am using water.", "I am cleaning the windows and the wheels."] },
      { p: "Dancing at a wedding", uz: "To’yda raqsga tushyapman", c: ["I am wearing nice clothes.", "I am listening to loud music.", "I am moving my arms and feet."] },
      { p: "Flying on a plane", uz: "Samolyotda uchyapman", c: ["I am sitting next to a small window.", "I am wearing a seat belt.", "I am looking at the clouds below me."] },
      { p: "Teaching English", uz: "Ingliz tili o’rgatyapman", c: ["I am standing in front of many people.", "I am asking a lot of questions.", "I am saying: “Repeat after me!”"] }
    ] },
    wheel: [
      { name: "Now", tasks: ["Say 3 things you are doing right now.", "Say 2 things you aren’t doing now.", "Say what the teacher is doing.", "Say what 2 classmates are doing."] },
      { name: "Family", tasks: ["What is your mother doing now? Guess!", "What is your father doing now? Guess!", "Say what 3 people in your family are doing.", "Is your best friend sleeping now? Answer in a full sentence."] },
      { name: "Clothes", tasks: ["Say what you are wearing.", "Describe a classmate’s clothes. The class guesses who.", "Say what the teacher is wearing.", "Say 2 things you aren’t wearing."] },
      { name: "Questions", tasks: ["Ask a classmate: “What are you doing?”", "Ask the teacher 2 questions with -ing.", "Ask a “Where … going?” question.", "Ask a “Why are you …ing?” question."] },
      { name: "Mime", tasks: ["Mime an action at home. Your team says it.", "Mime an action in the street. Your team says it.", "Mime 2 actions together. Your team says both.", "Mime a job. Your team says what you are doing."] },
      { name: "Spelling", tasks: ["Spell: swimming.", "Spell: writing and riding.", "Spell: sitting and shopping.", "Spell: carrying and lying."] }
    ],
    build: [
      { w: ["I","am","reading","a","book"], e: "." }, { w: ["She","is","washing","the","dishes"], e: "." }, { w: ["They","aren’t","playing"], e: "." },
      { w: ["What","are","you","doing"], e: "?" }, { w: ["Is","it","raining"], e: "?" }, { w: ["We","are","waiting","for","the","bus"], e: "." },
      { w: ["Where","is","he","going"], e: "?" }, { w: ["He","is","wearing","a","black","jacket"], e: "." },
      { w: ["I’m","not","sleeping","now"], e: "." }, { w: ["Why","are","you","laughing"], e: "?" }
    ],
    auction: [
      { s: "She is cooking dinner.", ok: true },
      { s: "I am write a letter.", ok: false, fix: "I am writing a letter." },
      { s: "Are they playing football?", ok: true },
      { s: "He is swiming now.", ok: false, fix: "He is swimming now." },
      { s: "We aren’t watching TV.", ok: true },
      { s: "My mother cooking now.", ok: false, fix: "My mother is cooking now." },
      { s: "Where is he going?", ok: true },
      { s: "They is dancing.", ok: false, fix: "They are dancing." },
      { s: "I am wanting a new phone.", ok: false, fix: "I want a new phone." },
      { s: "She is wearing a red dress.", ok: true },
      { s: "Do you waiting for the bus?", ok: false, fix: "Are you waiting for the bus?" },
      { s: "Look! The baby is smiling.", ok: true }
    ]
  }
};
