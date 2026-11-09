window.LESSON = {
  n: 1,
  title: "Can and can’t",
  slides: [
    { t: "cover", title: "I <span class='cy'>can!</span>", lead: "Ability: can and can’t", chips: [["Men suza olaman.", "peach"], ["Men ucha olmayman.", "mint"]] },
    { t: "goals", items: [
      ["Say what you can do", "I can swim.", "Men suza olaman."],
      ["Say what you can’t do", "I can’t fly.", "Men ucha olmayman."],
      ["Ask: Can you…?", "Can you cook?", "Ovqat pishira olasizmi?"] ] },
    { t: "spot", bg: "yel", title: "Warm-up: Can you…?", sub: "Pick an action. Ask a classmate: “Can you…?” They answer: “Yes, I can!” or “No, I can’t.”",
      cards: ["swim", "cook plov", "dance", "drive a car", "play chess", "speak Russian"] },
    { t: "formula", bg: "ink", eb: "The rule", title: "Who + can + verb", rows: [
      { chips: [["I", "skyb"], ["can", "peach"], ["swim.", "mint"]], uz: "Men suza olaman." },
      { chips: [["She", "skyb"], ["can", "peach"], ["swim.", "mint"]], uz: "U suza oladi." } ],
      notes: ["Same for everyone: no -s", "No “to”: can swim", "Uzbek: -a olaman"] },
    { t: "cols", eb: "Three forms", title: "Yes, no and questions", cols: [
      { bg: "mint", label: "Yes", lc: "g", lines: ["She <span class='ca'>can</span> swim."], uz: "U suza oladi." },
      { bg: "peach", label: "No", lc: "r", lines: ["She <span class='cn'>can’t</span> swim."], uz: "U suza olmaydi." },
      { bg: "skyb", label: "Question", lc: "b", lines: ["<span class='cw'>Can</span> she swim?"], uz: "U suza oladimi?" } ],
      notes: ["can’t = cannot", "Yes, she can. · No, she can’t."] },
    { t: "examples", title: "Examples", items: [
      ["I <span class='ca'>can</span> speak Uzbek.", "Men o’zbekcha gapira olaman."],
      ["He <span class='ca'>can</span> play the piano.", "U pianino chala oladi."],
      ["We <span class='cn'>can’t</span> fly.", "Biz ucha olmaymiz."],
      ["My cat <span class='cn'>can’t</span> swim.", "Mushugim suza olmaydi."],
      ["<span class='cw'>Can</span> you drive?", "Mashina hayday olasizmi?"],
      ["<span class='cw'>Can</span> they dance?", "Ular raqsga tusha oladimi?"] ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Men suza olaman.", "I can swim."],
      ["U ovqat pishira olmaydi.", "He can’t cook."],
      ["Ingliz tilida gapira olasizmi?", "Can you speak English?"],
      ["Biz futbol o’ynay olamiz.", "We can play football."] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: short answers", sub: "Answer with “Yes, … can.” or “No, … can’t.”", rows: [
      ["Can you swim? (yes)", "Yes, I can."],
      ["Can he drive? (no)", "No, he can’t."],
      ["Can they cook? (yes)", "Yes, they can."],
      ["Can a fish fly? (no)", "No, it can’t."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["She cans swim.", "She can swim."],
      ["I can to dance.", "I can dance."],
      ["He can’t plays chess.", "He can’t play chess."],
      ["Do you can cook?", "Can you cook?"] ] },
    { t: "spot", bg: "sky", title: "Find someone who can…", sub: "Stand up. Ask: “Can you…?” Find a classmate who says “Yes, I can!”", size: 56,
      cards: ["whistle", "cook plov", "ride a bike", "sing a song", "draw a cat", "count to 20 in English"] },
    { t: "game", g: "board" },
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say what I can do", "say what I can’t do", "ask “Can you…?”", "give short answers", "remember: no -s after can", "remember: no “to” after can"] },
    { t: "bye", chips: [["I can…", "peach"], ["I can’t…", "mint"], ["Can you…?", "skyb"]] }
  ],
  games: {
    board: [
      { cat: "I can", qs: [["Say one thing you can do.", "I can … (any true sentence)"], ["Say two sports you can play.", "I can play football and chess."], ["Say three things you can do in English.", "I can read, write and speak."]] },
      { cat: "Can’t", qs: [["Make it negative: I can swim.", "I can’t swim."], ["can’t = ? (long form)", "cannot"], ["Say two things a baby can’t do.", "A baby can’t walk. A baby can’t talk."]] },
      { cat: "Can you…?", qs: [["Make a question: You can cook.", "Can you cook?"], ["Short answer (yes): Can she sing?", "Yes, she can."], ["Short answer (no): Can they drive?", "No, they can’t."]] },
      { cat: "Animals", qs: [["Can a fish swim?", "Yes, it can."], ["Can a cat fly?", "No, it can’t."], ["Say two things a bird can do.", "It can fly. It can sing."]] },
      { cat: "Translate", qs: [["Men yugura olaman.", "I can run."], ["U gapira olmaydi.", "She can’t speak."], ["Velosipedda yura olasizmi?", "Can you ride a bike?"]] },
      { cat: "Fix it", qs: [["He cans run.", "He can run."], ["I can to swim.", "I can swim."], ["Does she can dance?", "Can she dance?"]] }
    ],
    mime: [
      { cue: "swim", say: "You can swim! / He can swim." }, { cue: "cook", say: "You can cook! / She can cook." },
      { cue: "drive a car", say: "You can drive a car!" }, { cue: "play the guitar", say: "You can play the guitar!" },
      { cue: "dance", say: "You can dance! / He can dance." }, { cue: "ride a horse", say: "You can ride a horse!" },
      { cue: "play tennis", say: "You can play tennis!" }, { cue: "sing", say: "You can sing! / She can sing." },
      { cue: "can’t swim", say: "You can’t swim!" }, { cue: "can’t see", say: "You can’t see!" },
      { cue: "type fast", say: "You can type fast!" }, { cue: "juggle", say: "You can juggle!" }
    ],
    build: [
      { w: ["I","can","swim"], e: "." }, { w: ["She","can’t","drive"], e: "." }, { w: ["Can","you","cook"], e: "?" },
      { w: ["We","can","speak","English"], e: "." }, { w: ["Can","he","play","chess"], e: "?" }, { w: ["My","dog","can’t","fly"], e: "." },
      { w: ["They","can","dance"], e: "." }, { w: ["Can","a","fish","swim"], e: "?" }
    ],
    auction: [
      { s: "She can sings.", ok: false, fix: "She can sing." },
      { s: "Can you play chess?", ok: true },
      { s: "I can’t to drive.", ok: false, fix: "I can’t drive." },
      { s: "He can speak English.", ok: true },
      { s: "Do they can swim?", ok: false, fix: "Can they swim?" },
      { s: "My cat can’t fly.", ok: true },
      { s: "We cans dance.", ok: false, fix: "We can dance." },
      { s: "Can she cook plov?", ok: true }
    ]
  }
};
