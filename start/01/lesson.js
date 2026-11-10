window.LESSON = {
  id: "s1",
  title: "Hello! My name is…",
  openDate: "2026-11-10",
  openNow: true,
  slides: [
    { t: "cover", tag: "New group · Lesson 1", title: "Hello! <span class='cy'>My name is…</span>", lead: "First words in English · Ingliz tilida birinchi so‘zlar", chips: [["Salom!", "peach"], ["Mening ismim…", "mint"]] },
    { t: "goals", items: [
      ["Say hello and goodbye", "Hello! · Goodbye!", "Salom! · Xayr!"],
      ["Say your name", "My name is Ali.", "Mening ismim Ali."],
      ["Ask and answer: How are you?", "I’m fine, thank you.", "Yaxshiman, rahmat."],
      ["Count from 1 to 10", "one, two, three…", "bir, ikki, uch…"] ] },
    { t: "examples", title: "Hello and goodbye", items: [
      ["<span class='ca'>Hello!</span> · <span class='ca'>Hi!</span>", "Salom! · Assalomu alaykum!"],
      ["<span class='ca'>Good morning!</span>", "Xayrli tong! (ertalab)"],
      ["<span class='ca'>Good afternoon!</span>", "Xayrli kun! (tushdan keyin)"],
      ["<span class='ca'>Good evening!</span>", "Xayrli kech! (kechqurun)"],
      ["<span class='cn'>Goodbye!</span> · <span class='cn'>Bye!</span>", "Xayr! · Ko‘rishguncha!"],
      ["<span class='cn'>See you tomorrow!</span>", "Ertaga ko‘rishamiz!"] ] },
    { t: "spot", bg: "yel", title: "What time is it? Say hello!", sub: "Teacher says a time. Students say the right greeting: Good morning / Good afternoon / Good evening.",
      cards: ["08:00", "14:00", "19:00", "07:30", "15:00", "20:00"] },
    { t: "formula", bg: "ink", eb: "Your name", title: "My name is + name", rows: [
      { chips: [["My name", "skyb"], ["is", "peach"], ["Ali.", "mint"]], uz: "Mening ismim Ali." },
      { chips: [["I", "skyb"], ["am", "peach"], ["Madina.", "mint"]], uz: "Men Madinaman." } ],
      notes: ["I’m = I am", "My name is… = I’m…", "Name = ism"] },
    { t: "cols", eb: "Ask and answer", title: "What’s your name?", cols: [
      { bg: "skyb", label: "Question", lc: "b", lines: ["<span class='cw'>What’s</span> your name?"], uz: "Ismingiz nima?" },
      { bg: "mint", label: "Answer", lc: "g", lines: ["My name is Ali.", "I’m Ali."], uz: "Ismim Ali. · Men Aliman." },
      { bg: "peach", label: "Then say", lc: "r", lines: ["Nice to meet you!"], uz: "Tanishganimdan xursandman!" } ],
      notes: ["What’s = What is", "Answer: Nice to meet you, too!"] },
    { t: "examples", title: "A short dialogue", items: [
      ["A: <span class='ca'>Hello!</span> What’s your name?", "A: Salom! Ismingiz nima?"],
      ["B: Hi! My name is Jasur. And you?", "B: Salom! Ismim Jasur. Sizniki-chi?"],
      ["A: I’m Lola.", "A: Men Lolaman."],
      ["B: Nice to meet you, Lola!", "B: Tanishganimdan xursandman, Lola!"],
      ["A: Nice to meet you, too!", "A: Men ham xursandman!"],
      ["A & B: <span class='cn'>Goodbye!</span>", "A va B: Xayr!"] ] },
    { t: "spot", bg: "sky", title: "Meet your classmates", sub: "Stand up. Find 5 classmates. Say: “Hello! What’s your name?” → “My name is…” → “Nice to meet you!”", size: 56,
      cards: ["Hello!", "What’s your name?", "My name is…", "Nice to meet you!", "Nice to meet you, too!", "Goodbye!"] },
    { t: "cols", eb: "Ask and answer", title: "How are you?", cols: [
      { bg: "skyb", label: "Question", lc: "b", lines: ["<span class='cw'>How</span> are you?"], uz: "Qalaysiz? · Ishlaringiz yaxshimi?" },
      { bg: "mint", label: "Good 🙂", lc: "g", lines: ["I’m fine, thank you.", "I’m very well!"], uz: "Yaxshiman, rahmat. · Juda yaxshi!" },
      { bg: "peach", label: "Not good 🙁", lc: "r", lines: ["I’m OK.", "I’m tired."], uz: "Yomon emas. · Charchadim." } ],
      notes: ["Then ask back: And you?", "thank you = rahmat"] },
    { t: "examples", title: "Polite words", items: [
      ["<span class='ca'>Thank you!</span> · <span class='ca'>Thanks!</span>", "Rahmat!"],
      ["<span class='ca'>Please</span>", "Iltimos"],
      ["<span class='ca'>Yes</span> · <span class='cn'>No</span>", "Ha · Yo‘q"],
      ["<span class='ca'>Sorry!</span>", "Kechirasiz!"],
      ["<span class='ca'>Excuse me</span>", "Kechirasiz (e’tibor so‘rash)"],
      ["<span class='ca'>You’re welcome!</span>", "Arzimaydi!"] ] },
    { t: "examples", title: "Numbers 1 to 10", items: [
      ["1 <span class='ca'>one</span> · 2 <span class='ca'>two</span>", "bir · ikki"],
      ["3 <span class='ca'>three</span> · 4 <span class='ca'>four</span>", "uch · to‘rt"],
      ["5 <span class='ca'>five</span> · 6 <span class='ca'>six</span>", "besh · olti"],
      ["7 <span class='ca'>seven</span> · 8 <span class='ca'>eight</span>", "yetti · sakkiz"],
      ["9 <span class='ca'>nine</span> · 10 <span class='ca'>ten</span>", "to‘qqiz · o‘n"],
      ["0 <span class='cn'>zero</span>", "nol"] ] },
    { t: "spot", bg: "yel", title: "Number race", sub: "Teacher taps a number. The first student to say it in English gets a point!", size: 96,
      cards: ["3", "7", "1", "9", "5", "10", "2", "8", "4", "6"] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Salom!", "Hello! / Hi!"],
      ["Ismingiz nima?", "What’s your name?"],
      ["Mening ismim Aziz.", "My name is Aziz."],
      ["Tanishganimdan xursandman!", "Nice to meet you!"] ] },
    { t: "quiz", kind: "en", title: "Quiz 2: answer the question", sub: "Say the answer. Tap to check.", rows: [
      ["Hello!", "Hello! / Hi!"],
      ["How are you?", "I’m fine, thank you. And you?"],
      ["What’s your name?", "My name is … / I’m …"],
      ["Nice to meet you!", "Nice to meet you, too!"] ] },
    { t: "quiz", kind: "uz", title: "Quiz 3: what does it mean?", sub: "Say it in Uzbek. Tap to reveal.", rows: [
      ["Good morning!", "Xayrli tong!"],
      ["Thank you!", "Rahmat!"],
      ["Goodbye!", "Xayr!"],
      ["seven · four · ten", "yetti · to‘rt · o‘n"] ] },
    { t: "game", g: "board" },
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say hello and goodbye", "say Good morning / afternoon / evening", "say “My name is…”", "ask “What’s your name?”", "ask and answer “How are you?”", "count from 1 to 10"] },
    { t: "bye", chips: [["Hello!", "peach"], ["My name is…", "mint"], ["Goodbye!", "skyb"]] }
  ],
  games: {
    board: [
      { cat: "Hello", qs: [["Say hello two ways.", "Hello! · Hi!"], ["It’s 9 in the morning. Say hello.", "Good morning!"], ["It’s 8 in the evening. Say hello.", "Good evening!"]] },
      { cat: "Goodbye", qs: [["Say goodbye two ways.", "Goodbye! · Bye!"], ["“Ertaga ko‘rishamiz!” in English", "See you tomorrow!"], ["“Xayr!” in English", "Goodbye!"]] },
      { cat: "Names", qs: [["Ask a classmate their name.", "What’s your name?"], ["Say your name two ways.", "My name is … · I’m …"], ["What do you say after a new name?", "Nice to meet you!"]] },
      { cat: "How are you?", qs: [["Answer: How are you? (good)", "I’m fine, thank you."], ["“Charchadim.” in English", "I’m tired."], ["Ask back after your answer.", "And you?"]] },
      { cat: "Numbers", qs: [["Count from 1 to 5.", "one, two, three, four, five"], ["Say 8, 3 and 10.", "eight, three, ten"], ["Count from 10 down to 6.", "ten, nine, eight, seven, six"]] },
      { cat: "Polite", qs: [["“Rahmat!” in English", "Thank you!"], ["“Iltimos” in English", "Please"], ["Answer: Thank you!", "You’re welcome!"]] }
    ],
    mime: [
      { cue: "wave hello", say: "Hello! / Hi!" }, { cue: "wave goodbye", say: "Goodbye! / Bye!" },
      { cue: "wake up and stretch", say: "Good morning!" }, { cue: "yawn, go to bed", say: "Good evening! / Good night!" },
      { cue: "shake hands", say: "Nice to meet you!" }, { cue: "happy face, thumbs up", say: "I’m fine, thank you!" },
      { cue: "tired face", say: "I’m tired." }, { cue: "hand on heart, small bow", say: "Thank you!" },
      { cue: "show 7 fingers", say: "seven" }, { cue: "show 4 fingers", say: "four" },
      { cue: "show 10 fingers", say: "ten" }, { cue: "bump into someone", say: "Sorry!" }
    ],
    build: [
      { w: ["My","name","is","Ali"], e: "." }, { w: ["What’s","your","name"], e: "?" }, { w: ["How","are","you"], e: "?" },
      { w: ["I’m","fine,","thank","you"], e: "." }, { w: ["Nice","to","meet","you"], e: "!" }, { w: ["See","you","tomorrow"], e: "!" },
      { w: ["Good","morning,","teacher"], e: "!" }, { w: ["Nice","to","meet","you,","too"], e: "!" }
    ],
    auction: [
      { s: "My name is Lola.", ok: true },
      { s: "My name Lola.", ok: false, fix: "My name is Lola." },
      { s: "What is your name?", ok: true },
      { s: "How you are?", ok: false, fix: "How are you?" },
      { s: "I’m fine, thank you.", ok: true },
      { s: "Nice meet you!", ok: false, fix: "Nice to meet you!" },
      { s: "Good morning! (at 20:00)", ok: false, fix: "Good evening!" },
      { s: "Goodbye! See you tomorrow!", ok: true }
    ]
  }
};
