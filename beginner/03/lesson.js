/* Beginner · Lesson 3 · Numbers 11–20
   The numbers eleven to twenty (spelling traps: thirteen, fifteen, eighteen), age with to be
   (How old are you? · I’m 15. · I’m 15 years old.) and phone numbers said digit by digit (double five).
   Recycles lessons 1–2: numbers 1–10, My name is…, spelling, How do you spell it?
   Built for Thursday 26 November 2026. */
window.LESSON = {
  id: "b3",
  n: 3,
  title: "Numbers 11–20",
  slides: [
    { t: "cover", tag: "Beginner · Lesson 3", title: "Numbers <span class='cy'>11–20</span>", lead: "How old are you? · Phone numbers · Sonlar, yosh va telefon raqami", chips: [["Necha yoshdasiz?", "peach"], ["Men 15 yoshdaman.", "mint"], ["Telefon raqamingiz necha?", "skyb"]] },
    { t: "goals", items: [
      ["Count from 11 to 20", "eleven, twelve… twenty", "11 dan 20 gacha sanash"],
      ["Say how old you are", "How old are you? I’m 15.", "Necha yoshdasiz? Men 15 yoshdaman."],
      ["Say a phone number", "My phone number is 90 123 45 67.", "Mening telefon raqamim 90 123 45 67."] ] },
    { t: "spot", bg: "yel", title: "Warm-up: lessons 1 and 2", sub: "Pick a card. Say it in English. · Kartani tanlang, inglizcha ayting.",
      cards: [{ t: "1, 2, 3… 10", uz: "1 dan 10 gacha sanang" }, { t: "A, B, C… Z", uz: "Alifboni ayting" }, { t: "Spell your name.", uz: "Ismingizni harfma-harf ayting" }, { t: "How do you spell “seven”?", uz: "“seven” qanday yoziladi?" }, { t: "6 + 3 = ?", uz: "Javobni inglizcha ayting" }, { t: "How are you?", uz: "Qalaysiz?" }] },

    /* ---------- NEW WORDS ---------- */
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Numbers 11 to 16", menu: "New words: 11–16", items: [
      ["11 <span class='ca'>eleven</span>", "o’n bir"],
      ["12 <span class='ca'>twelve</span>", "o’n ikki"],
      ["13 <span class='ca'>thirteen</span>", "o’n uch"],
      ["14 <span class='ca'>fourteen</span>", "o’n to’rt"],
      ["15 <span class='ca'>fifteen</span>", "o’n besh"],
      ["16 <span class='ca'>sixteen</span>", "o’n olti"] ] },
    { t: "examples", eb: "New words · Yangi so’zlar", title: "Numbers 17 to 20 and new words", menu: "New words: 17–20", items: [
      ["17 <span class='ca'>seventeen</span>", "o’n yetti"],
      ["18 <span class='ca'>eighteen</span>", "o’n sakkiz"],
      ["19 <span class='ca'>nineteen</span>", "o’n to’qqiz"],
      ["20 <span class='ca'>twenty</span>", "yigirma"],
      ["<span class='cw'>How old</span> are you?", "How old…? = necha yosh(da)?"],
      ["<span class='ca'>phone number</span>: 90 123 45 67", "phone number = telefon raqami"] ] },
    { t: "quad", eb: "New words · Yangi so’zlar", title: "Age and phone", items: [
      { bg: "peach", w: "🎂", label: "How old are you? = Necha yoshdasiz?", en: "I’m 15.", uz: "Men 15 yoshdaman." },
      { bg: "mint", w: "🧒", label: "years old = yoshda", en: "I’m 12 years old.", uz: "Men 12 yoshdaman." },
      { bg: "skyb", w: "📱", label: "phone number = telefon raqami", en: "What’s your phone number?", uz: "Telefon raqamingiz necha?" },
      { bg: "butter", w: "5️⃣5️⃣", label: "double = ikkita bir xil", en: "55 = double five", uz: "Ikkita bir xil raqam: double" } ] },

    /* ---------- THE NUMBERS ---------- */
    { t: "cols", eb: "The rule · Qoida", title: "11–20: how do we make them?", menu: "How to make 13–19", cols: [
      { bg: "skyb", label: "Special · Maxsus", lc: "b", fs: 44, lines: ["11 eleven", "12 twelve"], uz: "11 va 12 maxsus so’zlar. Ularni yodlab oling." },
      { bg: "mint", label: "number + teen", lc: "g", fs: 44, lines: ["14 four<span class='ca'>teen</span>", "16 six<span class='ca'>teen</span>", "17 seven<span class='ca'>teen</span>", "19 nine<span class='ca'>teen</span>"], uz: "13–19: son + -teen. -teen = “o’n …”." },
      { bg: "peach", label: "Be careful · Ehtiyot", lc: "r", fs: 44, lines: ["13 <span class='cn'>thir</span>teen", "15 <span class='cn'>fif</span>teen", "18 eigh<span class='cn'>teen</span>"], uz: "three → thir-, five → fif-. eighteen: bitta t." } ],
      notes: ["20 = twenty", "-teen ga urg’u bering: fif-TEEN", "0 = zero"] },
    { t: "spot", bg: "sky", title: "Number race!", sub: "Teacher taps a number. The first student to say it in English gets a point! · Birinchi aytgan ochko oladi!", size: 96,
      cards: ["13", "17", "11", "19", "15", "20", "12", "18", "14", "16"] },

    /* ---------- AGE ---------- */
    { t: "formula", bg: "ink", eb: "The rule · Qoida", title: "How old are you? · I’m 15.", sub: "O’zbekchada: 15 yosh + -daman. Inglizchada: I + am + 15. “am” ni unutmang!", menu: "How old are you?", rows: [
      { chips: [["How old", "skyb"], ["are", "peach"], ["you?", "mint"]], uz: "Necha yoshdasiz?" },
      { chips: [["I", "skyb"], ["am", "peach"], ["15.", "mint"]], uz: "Men 15 yoshdaman." },
      { chips: [["I’m", "skyb"], ["15", "mint"], ["years old.", "butter"]], uz: "Men 15 yoshdaman. (years old = yoshda)" } ],
      notes: ["I’m = I am", "I’m 15. = I’m 15 years old.", "“years old” — ikkala so’z birga"] },
    { t: "examples", eb: "Examples", title: "How old are you?", items: [
      ["A: <span class='cw'>How old</span> are you, Aziz?", "A: Aziz, necha yoshdasiz?"],
      ["B: <span class='ca'>I’m 12</span>. And you?", "B: Men 12 yoshdaman. Siz-chi?"],
      ["A: <span class='ca'>I’m 14</span>.", "A: Men 14 yoshdaman."],
      ["Madina: I’m <span class='ca'>17 years old</span>.", "Madina: Men 17 yoshdaman."],
      ["Bobur: I’m <span class='ca'>nineteen</span>.", "Bobur: Men o’n to’qqiz yoshdaman."],
      ["Lola: I’m <span class='ca'>twenty</span>.", "Lola: Men yigirma yoshdaman."] ] },

    /* ---------- PHONE NUMBERS ---------- */
    { t: "formula", bg: "ink", eb: "Phone numbers · Telefon raqami", title: "What’s your phone number?", sub: "O’zbekchada: to’qson, bir yuz yigirma uch… Inglizchada har bir raqamni alohida aytamiz: nine-zero, one-two-three…", menu: "Phone numbers", rows: [
      { chips: [["What’s", "skyb"], ["your", "peach"], ["phone number?", "mint"]], uz: "Telefon raqamingiz necha?" },
      { chips: [["My phone number is", "skyb"], ["90 123 45 67.", "mint"]], uz: "Mening telefon raqamim 90 123 45 67." },
      { chips: [["90 123 45 67", "butter"], ["nine-zero, one-two-three, four-five, six-seven", "mint"]], uz: "Raqamlarni bittadan aytamiz." } ],
      notes: ["0 = zero (yoki “oh”)", "55 = double five", "What’s = What is"] },
    { t: "examples", eb: "Say it · Ayting", title: "Phone numbers: one by one", items: [
      ["<span class='ca'>nine-zero</span>", "90 (to’qson)"],
      ["<span class='ca'>one-two-three</span>", "123 (bir yuz yigirma uch)"],
      ["<span class='ca'>double five</span>", "55 (ellik besh)"],
      ["<span class='ca'>one-zero</span>", "10 (o’n)"],
      ["<span class='ca'>nine-nine-eight</span>", "998 (O’zbekiston kodi)"],
      ["<span class='ca'>double seven</span>, <span class='ca'>double three</span>", "77 33"] ] },

    /* ---------- PRACTICE ---------- */
    { t: "gaps", title: "Say the number", sub: "Say it in English. Tap to check. · Inglizcha ayting.", w: 300, fs: 46, rows: [
      ["13 = ___", "thirteen"], ["15 = ___", "fifteen"], ["11 = ___", "eleven"],
      ["18 = ___", "eighteen"], ["12 = ___", "twelve"], ["20 = ___", "twenty"] ] },
    { t: "gaps", title: "Count and add", sub: "What’s the next number? Tap to check. · Keyingi son qaysi?", w: 300, fs: 38, rows: [
      ["eleven, twelve, ___", "thirteen"], ["fourteen, ___, sixteen", "fifteen"], ["seventeen, eighteen, ___", "nineteen"],
      ["10 + 2 = ___", "twelve"], ["10 + 7 = ___", "seventeen"], ["20 − 4 = ___", "sixteen"] ] },
    { t: "gaps", title: "Which word is missing?", sub: "old · are · am · number · What’s · years. Tap to check.", w: 220, fs: 38, rows: [
      ["How ___ are you?", "old"], ["How old ___ you?", "are"], ["I ___ 15.", "am"],
      ["I’m 16 ___ old.", "years"], ["My phone ___ is 90 123 45 67.", "number"], ["___ your phone number?", "What’s"] ] },
    { t: "cols", eb: "Be careful! · Ehtiyot bo’ling!", title: "Common mistakes", menu: "Be careful!", cols: [
      { bg: "peach", label: "Wrong ✗", lc: "r", fs: 40, lines: ["I <span class='cn'>15</span>.", "I’m 15 <span class='cn'>years</span>.", "How old <span class='cn'>you are</span>?", "<span class='cn'>fiveteen</span> · <span class='cn'>threeteen</span>"] },
      { bg: "mint", label: "Right ✓", lc: "g", fs: 40, lines: ["I <span class='ca'>am</span> 15.", "I’m 15 <span class='ca'>years old</span>.", "How old <span class='ca'>are you</span>?", "<span class='ca'>fifteen</span> · <span class='ca'>thirteen</span>"] },
      { bg: "butter", label: "Why? · Nega?", fs: 30, lines: ["“am” kerak: I am.", "“years old” birga.", "So’roqda “are” oldinda.", "five → fif-, three → thir-"] } ] },
    { t: "quiz", bg: "yel", kind: "uz", title: "Quiz 1: say it in English", sub: "Students answer first. Tap to reveal.", rows: [
      ["Necha yoshdasiz?", "How old are you?"],
      ["Men 14 yoshdaman.", "I’m 14. / I’m 14 years old."],
      ["Telefon raqamingiz necha?", "What’s your phone number?"],
      ["Men 18 yoshdaman. Siz-chi?", "I’m 18. And you?"],
      ["o’n bir · o’n ikki · yigirma", "eleven · twelve · twenty"] ] },
    { t: "quiz", kind: "fix", title: "Find the mistake", sub: "Shout “Stop!” at the mistake. Tap to fix.", rows: [
      ["I 13.", "I’m 13. / I am 13."],
      ["How old you are?", "How old are you?"],
      ["I’m 17 years.", "I’m 17 years old. / I’m 17."],
      ["15 = fiveteen", "15 = fifteen"] ] },

    /* ---------- SPEAKING ---------- */
    { t: "spot", bg: "sky", title: "Pairs: who are you?", sub: "Pick a card: this is you! A asks: What’s your name? How old are you? What’s your phone number? B answers. · Kartadagi odam — siz!", size: 54,
      cards: [{ t: "Aziz · 12", uz: "90 123 45 67" }, { t: "Madina · 17", uz: "93 515 18 20" }, { t: "Bobur · 19", uz: "91 772 30 14" }, { t: "Lola · 15", uz: "97 400 11 16" }, { t: "Dilnoza · 11", uz: "99 318 12 19" }, { t: "Jasur · 20", uz: "94 660 13 17" }] },
    { t: "spot", bg: "yel", title: "Numbers and me", sub: "Pick a card. Say it in English. · Kartani tanlang, inglizcha ayting.", size: 48,
      cards: [{ t: "How old are you?", uz: "Necha yoshdasiz?" }, { t: "Your phone number", uz: "Telefon raqamingiz (real bo’lmasa ham bo’ladi)" }, { t: "Count 11–20.", uz: "11 dan 20 gacha sanang" }, { t: "Spell “twelve”.", uz: "“twelve” ni harfma-harf ayting" }, { t: "20 − 1 = ?", uz: "Javobni inglizcha ayting" }, { t: "Count 20 → 11.", uz: "20 dan 11 gacha teskari sanang" }] },

    /* ---------- GAMES ---------- */
    { t: "game", g: "mime", bg: "sky" },
    { t: "game", g: "board" },
    { t: "game", g: "wheel", bg: "sky" },
    { t: "game", g: "build" },
    { t: "game", g: "auction", bg: "ink" },
    { t: "check", items: ["count from 11 to 20", "spell thirteen, fifteen, eighteen", "ask “How old are you?”", "say “I’m 15.” or “I’m 15 years old.”", "ask “What’s your phone number?”", "say a phone number one by one"] },
    { t: "bye", chips: [["eleven… twenty", "peach"], ["How old are you?", "mint"], ["I’m 15.", "skyb"]] }
  ],
  games: {
    mime: [
      { cue: "show 10 fingers, then 1", say: "eleven!" }, { cue: "show 10 fingers, then 3", say: "thirteen!" },
      { cue: "show 10 fingers, then 5", say: "fifteen!" }, { cue: "show 10 fingers, then 8", say: "eighteen!" },
      { cue: "show 10 fingers, then 10", say: "twenty!" }, { cue: "show 10 fingers, then 4", say: "fourteen!" },
      { cue: "show 10 fingers, then 6", say: "sixteen!" }, { cue: "show 10 fingers, then 9", say: "nineteen!" },
      { cue: "write 17 in the air", say: "seventeen!" }, { cue: "blow out the candles on a cake", say: "How old are you?" },
      { cue: "hold a phone to your ear", say: "What’s your phone number?" }, { cue: "show 5 fingers on each hand", say: "double five!" }
    ],
    board: [
      { cat: "11–15", qs: [["Say 11.", "eleven"], ["Say 13.", "thirteen"], ["Say 15.", "fifteen"]] },
      { cat: "16–20", qs: [["Say 20.", "twenty"], ["Say 18.", "eighteen"], ["Say 16 and 19.", "sixteen · nineteen"]] },
      { cat: "Count", qs: [["Count 11 to 14.", "eleven, twelve, thirteen, fourteen"], ["10 + 7 = ?", "seventeen"], ["Count 20 down to 16.", "twenty, nineteen, eighteen, seventeen, sixteen"]] },
      { cat: "Age", qs: [["“Necha yoshdasiz?”", "How old are you?"], ["“Men 14 yoshdaman.”", "I’m 14. / I’m 14 years old."], ["Fix it: I’m 15 years.", "I’m 15 years old."]] },
      { cat: "Phone", qs: [["Say: 55", "double five"], ["“Telefon raqamingiz necha?”", "What’s your phone number?"], ["Say: 90 123 45 67", "nine-zero, one-two-three, four-five, six-seven"]] },
      { cat: "Spell it", qs: [["Spell: ten.", "T-E-N"], ["Spell: twelve.", "T-W-E-L-V-E"], ["Spell: fifteen.", "F-I-F-T-E-E-N"]] }
    ],
    wheel: [
      { name: "Count", tasks: ["Count 11 to 15.", "Count 16 to 20.", "Count 20 down to 11.", "Say 11, 13, 15, 17, 19."] },
      { name: "Age", tasks: ["Ask a classmate: How old are you?", "Say: I’m 12. I’m 18.", "Fix it: I 15.", "Say 13 and 20 in English."] },
      { name: "Phone", tasks: ["Say: 90 512 11 22.", "Say: 77 33.", "Ask: What’s your phone number?", "Say a phone number (real or not)."] },
      { name: "Spell it", tasks: ["Spell: eleven.", "Spell: twelve.", "Spell: thirteen.", "Spell: twenty."] },
      { name: "Sums", tasks: ["10 + 1 = ?", "10 + 9 = ?", "20 − 6 = ?", "9 + 9 = ?"] },
      { name: "Lessons 1–2", tasks: ["Spell your name.", "Say A to J.", "Ask: How are you?", "Ask: How do you spell it?"] }
    ],
    build: [
      { w: ["How","old","are","you"], e: "?" }, { w: ["I","am","fifteen","years","old"], e: "." },
      { w: ["What’s","your","phone","number"], e: "?" }, { w: ["My","phone","number","is","93 456 78 10"], e: "." },
      { w: ["I’m","nineteen","years","old"], e: "." }, { w: ["How","do","you","spell","twelve"], e: "?" },
      { w: ["I","am","twenty"], e: "." }, { w: ["How","old","are","you,","Madina"], e: "?" }
    ],
    auction: [
      { s: "I am 13.", ok: true },
      { s: "I 16.", ok: false, fix: "I am 16. / I’m 16." },
      { s: "How old are you?", ok: true },
      { s: "How old you are?", ok: false, fix: "How old are you?" },
      { s: "I’m 18 years old.", ok: true },
      { s: "I’m 14 years.", ok: false, fix: "I’m 14 years old. / I’m 14." },
      { s: "What’s your phone number?", ok: true },
      { s: "15 = fiveteen", ok: false, fix: "15 = fifteen" },
      { s: "12 = twelve", ok: true },
      { s: "My phone number 90 123 45 67.", ok: false, fix: "My phone number is 90 123 45 67." }
    ]
  }
};
