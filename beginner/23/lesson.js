/* Beginner · Lesson 23 · Days and time
   Teaches: the days of the week (Monday… Sunday) · What day is it today? It’s Monday.
   What time is it? It’s seven o’clock. / It’s half past three. · on + day, at + time:
   The lesson is on Thursday at half past three. Uzbek: dushanba kuni, soat yettida.
   Recycles: numbers 1–12 (lessons 1, 3), capital letters (2), is / are (7–10), in / on (17),
   can (19), commands (20), I like… (22).
   New words: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, today, tomorrow,
   weekend, o’clock, half past.
   Built for Thu 4 Feb 2027 (Group B · Beginner, 15:30). */
window.LESSON = {
  id: "b23",
  n: 23,
  title: "Days and time",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 23", title: "Days and <span class='cy'>time</span>", lead: "Monday… · What time is it? · Hafta kunlari va soat", chips: [["Bugun dushanba.", "peach"], ["Soat necha?", "mint"], ["Soat yettida.", "skyb"]] },
    { t: "goals", items: [
      ["Say the days of the week", "Today is Monday.", "Bugun dushanba."],
      ["Ask and say the time", "What time is it? It’s three o’clock.", "Soat necha? Soat uch."],
      ["Say when: on + day, at + time", "The lesson is on Thursday at half past three.", "Dars payshanba kuni soat uch yarimda."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: I like…", sub: "Lesson 22! Pick a card. Say: “I like …” or “I don’t like …”",
      cards: [{ t: "plov", uz: "palov" }, { t: "tea", uz: "choy" }, { t: "bread", uz: "non" }, { t: "milk", uz: "sut" }, { t: "fish", uz: "baliq" }, { t: "apples", uz: "olmalar" }] },

    /* ---------- DAYS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "The days of the week", menu: "New words: the days", items: [
      ["<span class='ca'>Monday</span>", "dushanba"],
      ["<span class='ca'>Tuesday</span>", "seshanba"],
      ["<span class='ca'>Wednesday</span>", "chorshanba"],
      ["<span class='ca'>Thursday</span>", "payshanba"],
      ["<span class='ca'>Friday</span>", "juma"],
      ["<span class='ca'>Saturday</span> · <span class='ca'>Sunday</span>", "shanba · yakshanba"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Today, tomorrow, the weekend", menu: "New words: today, tomorrow", items: [
      { bg: "peach", w: "📅", label: "today = bugun", en: "Today is Thursday.", uz: "Bugun payshanba." },
      { bg: "mint", w: "➡️", label: "tomorrow = ertaga", en: "Tomorrow is Friday.", uz: "Ertaga juma." },
      { bg: "skyb", w: "🎉", label: "the weekend = dam olish kunlari", en: "Saturday and Sunday are the weekend.", uz: "Shanba va yakshanba — dam olish kunlari." },
      { bg: "butter", w: "7️⃣", label: "a week = hafta", en: "There are seven days in a week.", uz: "Bir haftada yetti kun bor." } ] },
    { t: "spot", bg: "sky", title: "What day is next?", sub: "Teacher taps a card. Say the next day! · Keyingi kunni ayting!", size: 54,
      cards: ["Monday → ?", "Thursday → ?", "Saturday → ?", "Tuesday → ?", "Sunday → ?", "Wednesday → ?"] },
    { t: "cols", eb: "Ask and answer · So’rang va javob bering", title: "What day is it today?", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 42, lines: ["<span class='cw'>What day</span> is it today?"], uz: "Bugun qaysi kun?" },
      { bg: "mint", label: "Answer", lc: "g", fs: 42, lines: ["It’s <span class='ca'>Monday</span>.", "Today is <span class='ca'>Monday</span>."], uz: "Bugun dushanba." },
      { bg: "peach", label: "Tomorrow", lc: "r", fs: 42, lines: ["Tomorrow is <span class='ca'>Tuesday</span>."], uz: "Ertaga seshanba." } ],
      notes: ["Days always have a big letter: Monday ✓ monday ✗", "Kunlar doim katta harf bilan yoziladi."] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "on + day", rows: [
      { chips: [["The lesson", "skyb"], ["is", "peach"], ["on", "mint"], ["Monday.", "butter"]], uz: "Dars dushanba kuni." },
      { chips: [["Football", "skyb"], ["is", "peach"], ["on", "mint"], ["Saturday.", "butter"]], uz: "Futbol shanba kuni." },
      { chips: [["We", "skyb"], ["are", "peach"], ["at home", "butter"], ["on", "mint"], ["Sunday.", "butter"]], uz: "Yakshanba kuni biz uydamiz." } ],
      notes: ["Kun bilan “on” ishlatamiz: on Monday = dushanba kuni", "on Friday · on Sunday · on the weekend"] },
    { t: "gaps", title: "What day is missing?", sub: "Say the day. Tap to check. · Qaysi kun yo’q?", w: 280, fs: 38, rows: [
      ["Monday, ___, Wednesday", "Tuesday"], ["Thursday, ___, Saturday", "Friday"], ["Saturday, ___, Monday", "Sunday"],
      ["___, Thursday, Friday", "Wednesday"], ["Friday, Saturday, ___", "Sunday"], ["___, Tuesday, Wednesday", "Monday"] ] },

    /* ---------- TIME ---------- */
    { t: "cols", eb: "Ask and answer · So’rang va javob bering", title: "What time is it?", menu: "What time is it?", cols: [
      { bg: "skyb", label: "Question", lc: "b", fs: 42, lines: ["<span class='cw'>What time</span> is it?"], uz: "Soat necha?" },
      { bg: "mint", label: "7:00", lc: "g", fs: 42, lines: ["It’s seven <span class='ca'>o’clock</span>."], uz: "Soat yetti." },
      { bg: "peach", label: "7:30", lc: "r", fs: 42, lines: ["It’s <span class='ca'>half past</span> seven."], uz: "Soat yetti yarim." } ],
      notes: ["o’clock = soat (to’liq soat)", "half past = yarim"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "It’s + number + o’clock · It’s half past + number", menu: "The rule: o’clock, half past", rows: [
      { chips: [["It’s", "peach"], ["seven", "skyb"], ["o’clock.", "mint"]], uz: "7:00 · Soat yetti." },
      { chips: [["It’s", "peach"], ["twelve", "skyb"], ["o’clock.", "mint"]], uz: "12:00 · Soat o’n ikki." },
      { chips: [["It’s", "peach"], ["half past", "mint"], ["three.", "skyb"]], uz: "3:30 / 15:30 · Soat uch yarim." } ],
      notes: ["Inglizlar ko’pincha 1 dan 12 gacha sanaydi: 15:00 = three o’clock", "half past three = uch yarim (“three and half” emas!)"] },
    { t: "examples", eb: "Examples · Misollar", title: "What time is it?", items: [
      ["7:00 · It’s <span class='ca'>seven o’clock</span>.", "Soat yetti."],
      ["9:00 · It’s <span class='ca'>nine o’clock</span>.", "Soat to’qqiz."],
      ["12:00 · It’s <span class='ca'>twelve o’clock</span>.", "Soat o’n ikki."],
      ["8:30 · It’s <span class='ca'>half past eight</span>.", "Soat sakkiz yarim."],
      ["6:30 · It’s <span class='ca'>half past six</span>.", "Soat olti yarim."],
      ["15:30 · It’s <span class='ca'>half past three</span>.", "Soat uch yarim. Darsimiz vaqti!"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Look at the clock", menu: "Look at the clock", items: [
      { bg: "peach", w: "🕖", label: "o’clock = soat", en: "It’s seven o’clock.", uz: "Soat yetti." },
      { bg: "mint", w: "🕒", label: "o’clock = soat", en: "It’s three o’clock.", uz: "Soat uch." },
      { bg: "skyb", w: "🕤", label: "half past = yarim", en: "It’s half past nine.", uz: "Soat to’qqiz yarim." },
      { bg: "butter", w: "🕦", label: "half past = yarim", en: "It’s half past eleven.", uz: "Soat o’n bir yarim." } ] },
    { t: "spot", bg: "yel", title: "What time is it?", sub: "Teacher taps a time. Say: “It’s … o’clock.” or “It’s half past …”", size: 96,
      cards: ["7:00", "3:00", "11:00", "8:30", "12:30", "5:30"] },
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "at + time", rows: [
      { chips: [["The lesson", "skyb"], ["is", "peach"], ["at", "mint"], ["half past three.", "butter"]], uz: "Dars soat uch yarimda." },
      { chips: [["I", "skyb"], ["am", "peach"], ["at school", "butter"], ["at", "mint"], ["eight o’clock.", "butter"]], uz: "Soat sakkizda men maktabdaman." },
      { chips: [["Plov", "skyb"], ["is", "peach"], ["at", "mint"], ["one o’clock.", "butter"]], uz: "Palov soat birda." } ],
      notes: ["Soat bilan “at” ishlatamiz: at seven o’clock = soat yettida", "Kun → on · Soat → at"] },
    { t: "examples", eb: "Examples · Misollar", title: "When? Day and time", items: [
      ["The English lesson is <span class='ca'>on Monday</span>.", "Ingliz tili darsi dushanba kuni."],
      ["It’s <span class='ca'>at half past three</span>.", "U soat uch yarimda."],
      ["Football is <span class='ca'>on Saturday at four o’clock</span>.", "Futbol shanba kuni soat to’rtda."],
      ["Plov is <span class='ca'>on Thursday</span>.", "Palov payshanba kuni."],
      ["I am at home <span class='ca'>at six o’clock</span>.", "Soat oltida men uydaman."],
      ["See you <span class='ca'>on Friday</span>!", "Juma kuni ko’rishamiz!"] ] },
    { t: "gaps", title: "On or at?", sub: "Day → on · Time → at. Tap to check.", w: 160, fs: 38, rows: [
      ["The lesson is ___ Monday.", "on"], ["The lesson is ___ half past three.", "at"], ["Football is ___ Saturday.", "on"],
      ["I am at home ___ six o’clock.", "at"], ["See you ___ Friday!", "on"], ["Plov is ___ one o’clock.", "at"] ] },
    { t: "gaps", title: "Say the time", sub: "Say the full sentence. Tap to check.", w: 330, fs: 38, rows: [
      ["7:00 → It’s seven ___.", "o’clock"], ["8:30 → It’s half past ___.", "eight"], ["12:00 → It’s ___ o’clock.", "twelve"],
      ["4:30 → It’s ___ four.", "half past"], ["10:00 → It’s ___.", "ten o’clock"], ["15:30 → It’s ___.", "half past three"] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 38, lines: ["<span class='cn'>in</span> Monday", "<span class='cn'>on</span> seven o’clock", "It’s <span class='cn'>three and half</span>.", "<span class='cn'>monday</span>"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 38, lines: ["<span class='ca'>on</span> Monday", "<span class='ca'>at</span> seven o’clock", "It’s <span class='ca'>half past three</span>.", "<span class='ca'>Monday</span>"],
        uz: "Kun → on, soat → at. “Uch yarim” = half past three. Kunlar katta harf bilan." } ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Bugun dushanba.", "Today is Monday. / It’s Monday."],
      ["Ertaga juma.", "Tomorrow is Friday."],
      ["Soat necha?", "What time is it?"],
      ["Soat yetti.", "It’s seven o’clock."],
      ["Dars payshanba kuni soat uch yarimda.", "The lesson is on Thursday at half past three."] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["The lesson is in Monday.", "The lesson is on Monday."],
      ["It’s nine clock.", "It’s nine o’clock."],
      ["See you on sunday!", "See you on Sunday!"],
      ["The lesson is on four o’clock.", "The lesson is at four o’clock."] ] },
    { t: "spot", bg: "sky", title: "My week", sub: "Pick a card. Finish the sentence about you. · Gapni o’zingiz haqingizda tugating.", size: 50,
      cards: ["Today is…", "Tomorrow is…", "My English lesson is on…", "The lesson is at…", "On Sunday I am at…", "Now it’s…"] },
    { t: "spot", bg: "yel", title: "Pairs: what time is it?", sub: "A points at a card: “What time is it?” B: “It’s …”. Then change. · Juftlikda.", size: 96,
      cards: ["9:00", "2:30", "6:00", "10:30", "1:00", "7:30"] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["say the 7 days of the week", "ask “What day is it today?”", "ask “What time is it?”", "say the time: seven o’clock, half past three", "use on + day: on Monday", "use at + time: at four o’clock"] },
    { t: "bye", chips: [["See you on Monday!", "peach"], ["It’s five o’clock.", "mint"], ["Goodbye!", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "tap your wrist, look puzzled", say: "What time is it?" },
      { cue: "arms like clock hands: both up (12:00)", say: "It’s twelve o’clock." },
      { cue: "arms: one up, one down (6:00)", say: "It’s six o’clock." },
      { cue: "arms: one up, one to the right (3:00)", say: "It’s three o’clock." },
      { cue: "arms: one up, one to the left (9:00)", say: "It’s nine o’clock." },
      { cue: "yawn and stretch: it’s morning", say: "Good morning! It’s seven o’clock." },
      { cue: "dance happily: no school!", say: "It’s Saturday! It’s the weekend!" },
      { cue: "eat plov with a big spoon", say: "It’s Thursday! Plov day!" },
      { cue: "open a book, sit down: lesson time", say: "The lesson is at half past three." },
      { cue: "wave goodbye, point forward", say: "See you tomorrow!" },
      { cue: "point at the calendar", say: "Today is … (the real day)!" },
      { cue: "show 7 fingers, then draw a calendar", say: "There are seven days in a week." }
    ],
    board: [
      { cat: "Days", qs: [["Say the day after Monday.", "Tuesday"], ["“payshanba” in English", "Thursday"], ["Say the 7 days.", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]] },
      { cat: "Today", qs: [["“ertaga” in English", "tomorrow"], ["Which two days are the weekend?", "Saturday and Sunday"], ["Ask about the day and answer.", "What day is it today? It’s … (the real day)."]] },
      { cat: "O’clock", qs: [["5:00", "It’s five o’clock."], ["12:00", "It’s twelve o’clock."], ["Ask about the time.", "What time is it?"]] },
      { cat: "Half past", qs: [["6:30", "It’s half past six."], ["9:30", "It’s half past nine."], ["15:30 (our lesson!)", "It’s half past three."]] },
      { cat: "On or at?", qs: [["___ Friday", "on"], ["___ eight o’clock", "at"], ["The lesson is ___ Thursday ___ half past three.", "on · at"]] },
      { cat: "Translate", qs: [["Bugun shanba.", "Today is Saturday. / It’s Saturday."], ["Soat necha?", "What time is it?"], ["Dars dushanba kuni soat to’rtda.", "The lesson is on Monday at four o’clock."]] }
    ],
    wheel: [
      { name: "Days", tasks: ["Say the 7 days.", "Say the day after Wednesday.", "Say the day after Saturday.", "Spell: Thursday."] },
      { name: "Today", tasks: ["What day is it today?", "What day is it tomorrow?", "Say the two weekend days.", "Say: “See you on …!”"] },
      { name: "Time", tasks: ["Say 7:00 in English.", "Say 8:30 in English.", "Say 15:30 in English.", "Ask a classmate: “What time is it?”"] },
      { name: "My week", tasks: ["Finish: “My English lesson is on…”", "Finish: “The lesson is at…”", "Finish: “On Sunday I am at…”", "Say a day you like: “I like …”"] },
      { name: "Spell", tasks: ["Spell: Monday.", "Spell: Friday.", "Spell: Sunday.", "Spell: Wednesday."] },
      { name: "Unit 4", tasks: ["Say: 30, 45, 60.", "Say one thing you can do.", "Give a command: “Open …!”", "Say a food you like."] }
    ],
    build: [
      { w: ["Today", "is", "Monday"], e: "." },
      { w: ["What", "time", "is", "it"], e: "?" },
      { w: ["It’s", "seven", "o’clock"], e: "." },
      { w: ["What", "day", "is", "it", "today"], e: "?" },
      { w: ["The", "lesson", "is", "on", "Thursday"], e: "." },
      { w: ["It’s", "half", "past", "three"], e: "." },
      { w: ["Tomorrow", "is", "Friday"], e: "." },
      { w: ["The", "lesson", "is", "at", "four", "o’clock"], e: "." }
    ],
    auction: [
      { s: "Today is Monday.", ok: true },
      { s: "The lesson is in Friday.", ok: false, fix: "The lesson is on Friday." },
      { s: "What time is it?", ok: true },
      { s: "It’s seven clock.", ok: false, fix: "It’s seven o’clock." },
      { s: "See you on Saturday!", ok: true },
      { s: "The lesson is on half past three.", ok: false, fix: "The lesson is at half past three." },
      { s: "It’s half past four.", ok: true },
      { s: "Tomorrow is sunday.", ok: false, fix: "Tomorrow is Sunday." },
      { s: "What time it is?", ok: false, fix: "What time is it?" },
      { s: "The lesson is on Thursday at four o’clock.", ok: true }
    ]
  }
};
