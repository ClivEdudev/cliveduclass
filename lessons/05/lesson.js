window.LESSON = {
  n: 5,
  title: "Present continuous",
  slides: [
    { t: "cover", title: "What are you <span class='cy'>doing?</span>", lead: "Present continuous: actions happening now", chips: [["Men o’qiyapman.", "peach"], ["U uxlayapti.", "mint"]] },
    { t: "goals", items: [
      ["Say what is happening now", "I am reading.", "Men o’qiyapman."],
      ["Say what is not happening", "She isn’t sleeping.", "U uxlamayapti."],
      ["Ask about now", "What are you doing?", "Nima qilyapsiz?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: what is the teacher doing?", sub: "The teacher mimes an action. You shout: “You are writing!”",
      cards: ["writing", "drinking", "sleeping", "singing", "reading", "dancing"] },
    { t: "formula", bg: "ink", eb: "The rule", title: "Who + am / is / are + verb-ing", rows: [
      { chips: [["I", "skyb"], ["am", "peach"], ["reading", "mint"], ["now.", "butter"]], uz: "Men hozir o’qiyapman." },
      { chips: [["She", "skyb"], ["is", "peach"], ["cooking", "mint"], ["now.", "butter"]], uz: "U hozir ovqat pishiryapti." },
      { chips: [["They", "skyb"], ["are", "peach"], ["playing", "mint"], ["now.", "butter"]], uz: "Ular hozir o’ynashyapti." } ],
      notes: ["am / is / are + verb-ing", "now · at the moment · Look!", "Uzbek: -yap-"] },
    { t: "cols", eb: "Spelling", title: "How to add -ing", cols: [
      { bg: "mint", label: "+ ing", lc: "g", fs: 44, lines: ["read → reading", "play → playing", "eat → eating"] },
      { bg: "butter", label: "e → ing", fs: 44, lines: ["write → writing", "dance → dancing", "make → making"] },
      { bg: "skyb", label: "double", lc: "b", fs: 44, lines: ["swim → swimming", "run → running", "sit → sitting"] } ] },
    { t: "cols", eb: "Three forms", title: "Yes, no and questions", cols: [
      { bg: "mint", label: "Yes", lc: "g", lines: ["He <span class='ca'>is working</span>."], uz: "U ishlayapti." },
      { bg: "peach", label: "No", lc: "r", lines: ["He <span class='cn'>isn’t</span> working."], uz: "U ishlamayapti." },
      { bg: "skyb", label: "Question", lc: "b", lines: ["<span class='cw'>Is</span> he working?"], uz: "U ishlayaptimi?" } ],
      notes: ["Yes, he is. · No, he isn’t.", "What are you doing?"] },
    { t: "examples", title: "Examples", items: [
      ["I <span class='ca'>am learning</span> English.", "Men ingliz tilini o’rganyapman."],
      ["She <span class='ca'>is cooking</span> plov.", "U palov pishiryapti."],
      ["We <span class='cn'>aren’t watching</span> TV.", "Biz televizor ko’rmayapmiz."],
      ["They <span class='ca'>are playing</span> football.", "Ular futbol o’ynashyapti."],
      ["<span class='cw'>Is</span> it raining?", "Yomg’ir yog’yaptimi?"],
      ["What <span class='cw'>are</span> you doing?", "Nima qilyapsiz?"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men choy ichyapman.", "I am drinking tea."],
      ["U uxlayapti.", "He is sleeping."],
      ["Biz kutyapmiz.", "We are waiting."],
      ["Nima qilyapsiz?", "What are you doing?"] ] },
    { t: "gaps", title: "Add -ing", sub: "Careful with the spelling! Tap to check.", w: 330, rows: [
      ["swim → ___", "swimming"], ["write → ___", "writing"], ["play → ___", "playing"],
      ["run → ___", "running"], ["dance → ___", "dancing"], ["sit → ___", "sitting"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["She cooking now.", "She is cooking now."],
      ["I am write a letter.", "I am writing a letter."],
      ["They is playing.", "They are playing."],
      ["He is runing.", "He is running."] ] },
    { t: "spot", bg: "sky", title: "Right now…", sub: "Pick a card. Finish the sentence. Imagine if you need to!", size: 52,
      cards: ["Right now I am…", "My mother is probably…", "In this room, someone is…", "My friends are…", "What are you doing?", "Is it raining now?"] },
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["use am / is / are + -ing", "spell -ing words correctly", "make negatives: isn’t / aren’t", "ask “What are you doing?”", "give short answers", "describe what is happening now"] },
    { t: "bye", chips: [["I am…ing", "peach"], ["She is…ing", "mint"], ["What are you doing?", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "swimming", say: "You are swimming! / He is swimming." }, { cue: "cooking", say: "You are cooking! / She is cooking." },
      { cue: "sleeping", say: "You are sleeping! / He is sleeping." }, { cue: "dancing", say: "You are dancing! / She is dancing." },
      { cue: "driving", say: "You are driving! / He is driving." }, { cue: "reading", say: "You are reading! / She is reading." },
      { cue: "playing football", say: "You are playing football!" }, { cue: "eating", say: "You are eating! / He is eating." },
      { cue: "singing", say: "You are singing! / She is singing." }, { cue: "crying", say: "You are crying! / He is crying." },
      { cue: "laughing", say: "You are laughing! / She is laughing." }, { cue: "writing", say: "You are writing! / He is writing." }
    ],
    board: [
      { cat: "-ing", qs: [["read →", "reading"], ["write →", "writing"], ["swim →", "swimming"]] },
      { cat: "am / is / are", qs: [["I ___ eating.", "am"], ["They ___ running.", "are"], ["My cat ___ sleeping.", "is"]] },
      { cat: "Negatives", qs: [["Make it NO: He is working.", "He isn’t working."], ["Make it NO: We are playing.", "We aren’t playing."], ["Say one thing you aren’t doing now.", "I am not sleeping. (any true sentence)"]] },
      { cat: "Questions", qs: [["Make a question: She is cooking.", "Is she cooking?"], ["Short answer (yes): Are you listening?", "Yes, I am."], ["Ask a friend about now.", "What are you doing?"]] },
      { cat: "Translate", qs: [["Men o’qiyapman.", "I am reading."], ["Ular kulishyapti.", "They are laughing."], ["Yomg’ir yog’yaptimi?", "Is it raining?"]] },
      { cat: "Fix it", qs: [["She reading.", "She is reading."], ["I am siting.", "I am sitting."], ["Are he working?", "Is he working?"]] }
    ],
    build: [
      { w: ["I","am","reading","a","book"], e: "." }, { w: ["She","is","cooking","plov"], e: "." }, { w: ["They","aren’t","playing"], e: "." },
      { w: ["What","are","you","doing"], e: "?" }, { w: ["Is","it","raining"], e: "?" }, { w: ["We","are","learning","English"], e: "." }
    ],
    auction: [
      { s: "She is cooking dinner.", ok: true },
      { s: "I am write a letter.", ok: false, fix: "I am writing a letter." },
      { s: "Are they playing football?", ok: true },
      { s: "He is swiming now.", ok: false, fix: "He is swimming now." },
      { s: "We aren’t watching TV.", ok: true },
      { s: "My mother cooking now.", ok: false, fix: "My mother is cooking now." },
      { s: "Is it raining?", ok: true },
      { s: "They is dancing.", ok: false, fix: "They are dancing." }
    ]
  }
};
