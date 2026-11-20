/* The course plan. Lessons follow PLAN.schedule: each part says from which lesson and date
   it applies and on which weekdays class is held (0 = Sunday … 6 = Saturday).
   Class starts at classHour; students can open a lesson from unlockHour (local time) on the day it is taught:
   when class starts, so they follow the lesson on their phones.
   teacherCode opens the teacher planner at /teacher/ on a device. */
window.PLAN = {
  start: "2026-11-10",
  schedule: [
    { fromLesson: 1, from: "2026-11-10", days: [1, 2, 3, 4, 5, 6] },   /* week 1: Monday to Saturday */
    { fromLesson: 7, from: "2026-11-19", days: [1, 4, 5] }            /* from 19 Nov: Monday, Thursday, Friday */
  ],
  teachDays: [1, 4, 5],     /* today's class days (Mon, Thu, Fri) */
  classHour: 14,            /* class at 14:00 */
  unlockHour: 14,           /* students open the lesson when class starts and follow along */
  openNowLessons: [5],      /* taught out of order; open to students straight away */
  teacherCode: "clivedu",
  autoHomework: false,      /* true = the bot sends each lesson’s homework.pdf after class (15:30 / 17:00); off since 20 Nov */
  revision: { title: "Big Revision", date: "2026-11-09", path: "revision/", openNow: true },
  /* The two class groups. Students pick their group on the home page (saved as clv-group, and as
     user.group "a" / "b" on the server so the bot sends each group its own homework). */
  groups: [
    { id: "a", name: "Elementary", when: "Mon, Thu, Fri · 14:00", uz: "Dushanba, payshanba, juma · 14:00" },
    { id: "b", name: "Beginner", when: "Mon, Thu · 15:30", uz: "Dushanba, payshanba · 15:30" }
  ],
  /* Group B · Beginner: a slow course from zero. Lesson 1 was taught on 10 Nov (start/01/);
     from 23 Nov every Monday and Thursday at 15:30 (class ends 17:00, homework goes out at 17:00).
     Lesson files: beginner/NN/ (lesson.js sets id "bN"), live-game set "bN". */
  beginner: {
    start: "2026-11-23", days: [1, 4], classHour: 15.5, unlockHour: 15.5, endHour: 17,
    first: { n: 1, title: "Hello! My name is…", focus: "greetings · names · How are you? · numbers 1–10", date: "2026-11-10", path: "start/01/", key: "s1" },
    units: [
      { name: "Unit 1 · Hello!", lessons: [
        { n: 2, title: "The alphabet", focus: "A to Z · How do you spell it? · capital letters", ready: true },
        { n: 3, title: "Numbers 11–20", focus: "How old are you? · I am 15. · phone numbers", ready: true },
        { n: 4, title: "What is this?", focus: "a / an · things in the classroom · It’s a pen.", ready: true },
        { n: 5, title: "Colours", focus: "red, blue, green… · a red car · What colour is it?", ready: true },
        { n: 6, title: "Unit 1 review", focus: "games with lessons 1–5", ready: true } ] },
      { name: "Unit 2 · Me and you", lessons: [
        { n: 7, title: "I am, you are", focus: "to be: I’m a student · You’re my friend · jobs", ready: true },
        { n: 8, title: "He is, she is, it is", focus: "Where is he from? · countries and cities", ready: true },
        { n: 9, title: "We are, they are", focus: "plurals: a book → two books · we, you, they", ready: true },
        { n: 10, title: "Not and questions with to be", focus: "I’m not… · Are you…? · Yes, I am.", ready: true },
        { n: 11, title: "My family", focus: "mother, father, brother… · my, your · This is my sister.", ready: true },
        { n: 12, title: "Unit 2 review", focus: "games with lessons 7–11", ready: true } ] },
      { name: "Unit 3 · My things, my home", lessons: [
        { n: 13, title: "I have, she has", focus: "I have a phone. · She has two brothers.", ready: true },
        { n: 14, title: "This, that, these, those", focus: "near and far · this book, those books", ready: true },
        { n: 15, title: "His, her and ’s", focus: "my, your, his, her, our, their · Ali’s bag · Whose…?", ready: true },
        { n: 16, title: "There is and there are", focus: "my home: rooms and furniture", ready: true },
        { n: 17, title: "In, on, under", focus: "in, on, under, next to · Where is the cat?", ready: true },
        { n: 18, title: "Unit 3 review", focus: "games with lessons 13–17", ready: true } ] },
      { name: "Unit 4 · What I can do", lessons: [
        { n: 19, title: "Can and can’t", focus: "I can swim. · Can you…? · Yes, I can.", ready: true },
        { n: 20, title: "Commands", focus: "Sit down! · Open your book! · Don’t…!", ready: true },
        { n: 21, title: "Numbers to 100 and prices", focus: "21–100 · How much is it? · so’m", ready: true },
        { n: 22, title: "Food and drink", focus: "bread, tea, plov… · I like… · I don’t like…", ready: true },
        { n: 23, title: "Days and time", focus: "Monday… · What time is it? · at seven o’clock", ready: true },
        { n: 24, title: "Unit 4 review", focus: "games with lessons 19–23", ready: true } ] },
      { name: "Unit 5 · My day", lessons: [
        { n: 25, title: "I work, I don’t work", focus: "present simple: I, you, we, they", ready: true },
        { n: 26, title: "She works, he doesn’t work", focus: "present simple: he, she, it + s", ready: true },
        { n: 27, title: "Do you…? Does she…?", focus: "questions and short answers: Yes, I do.", ready: true },
        { n: 28, title: "My daily routine", focus: "get up, have breakfast… · at seven o’clock", ready: true },
        { n: 29, title: "How often?", focus: "always, usually, sometimes, never", ready: true },
        { n: 30, title: "Unit 5 review", focus: "games with lessons 25–29", ready: true } ] },
      { name: "Unit 6 · Now and in town", lessons: [
        { n: 31, title: "I am reading now", focus: "present continuous: am / is / are + -ing", ready: true },
        { n: 32, title: "What are you doing?", focus: "present continuous: questions and no", ready: true },
        { n: 33, title: "Clothes and weather", focus: "It’s cold. · I’m wearing a coat.", ready: true },
        { n: 34, title: "In town", focus: "bank, shop, park · go straight, turn left", ready: true },
        { n: 35, title: "Some and any", focus: "shopping · How many…? · some apples, any milk", ready: true },
        { n: 36, title: "Final review", focus: "the big game day: all units", ready: true } ] }
    ]
  },
  /* One-off lessons that sit outside the weekly plan */
  extras: [
    { title: "Plurals", focus: "one → many · -s, -es, -ies, -ves · men, women, children, people · these / those",
      date: "2026-11-19", path: "plurals/01/", key: "pl1", group: "Grammar", pri: 1, openNow: true },
    { title: "Listening day", focus: "6 stories with sound \u00b7 am/is/are, can, have to, -ing, commands, present simple",
      date: "2026-11-16", openHour: 13, openNow: true, path: "listen/01/", key: "lis1", group: "Listening", pri: 1 },
    { title: "English Word Power", focus: "60 new words · classroom, family, house, food, town, jobs, weather, transport",
      date: "2026-11-13", path: "vocab/01/", key: "v1", group: "Vocabulary", openNow: true }
  ],
  done: [
    { title: "Making sentences", path: null }, { title: "To be: am / is / are", path: null },
    { title: "Negatives and questions", path: null }, { title: "Commands", path: null },
    { title: "May", path: null }, { title: "Must and have to", path: null }
  ],
  weeks: [
    { name: "Week 1 · Things around us", lessons: [
      { n: 1, title: "Can and can’t", focus: "ability: I can swim · Can you…?", ready: true },
      { n: 2, title: "There is and there are", focus: "places and things: There is a bank", ready: true },
      { n: 3, title: "This, that, these, those", focus: "near and far · plurals", ready: true },
      { n: 4, title: "My, your, his, her and ’s", focus: "possessives: Ali’s car · Whose…?", ready: true },
      { n: 5, title: "Present continuous", focus: "now: I am reading", ready: true },
      { n: 6, title: "Week 1 review", focus: "games with all week 1 topics", ready: true } ] },
    { name: "Week 2 · My day", lessons: [
      { n: 7, title: "Present simple or continuous?", focus: "every day vs now", ready: true },
      { n: 8, title: "How often?", focus: "always, usually, sometimes, never", ready: true },
      { n: 9, title: "Where is it?", focus: "in, on, under, next to, between" },
      { n: 10, title: "Time words", focus: "in, on, at · telling the time" },
      { n: 11, title: "Some and any", focus: "food · countable and uncountable" },
      { n: 12, title: "Week 2 review", focus: "games with all week 2 topics" } ] },
    { name: "Week 3 · Asking and comparing", lessons: [
      { n: 13, title: "How much? How many?", focus: "shopping and prices" },
      { n: 14, title: "Question words", focus: "what, where, when, who, why, how" },
      { n: 15, title: "Me, him, her, us, them", focus: "object pronouns" },
      { n: 16, title: "Like + -ing and would like", focus: "hobbies and offers" },
      { n: 17, title: "Comparatives", focus: "bigger, more beautiful, better" },
      { n: 18, title: "Week 3 review", focus: "games with all week 3 topics" } ] },
    { name: "Week 4 · The past", lessons: [
      { n: 19, title: "Superlatives", focus: "the biggest, the best" },
      { n: 20, title: "Was and were", focus: "past of to be" },
      { n: 21, title: "Past simple: regular verbs", focus: "worked, played, studied" },
      { n: 22, title: "Past simple: irregular verbs", focus: "went, ate, saw" },
      { n: 23, title: "Past simple: no and questions", focus: "didn’t · Did you…?" },
      { n: 24, title: "Week 4 review", focus: "games with all week 4 topics" } ] },
    { name: "Week 5 · The future and being polite", lessons: [
      { n: 25, title: "Going to", focus: "plans: I am going to travel" },
      { n: 26, title: "Will", focus: "predictions and offers" },
      { n: 27, title: "Should", focus: "advice: You should rest" },
      { n: 28, title: "Could you…? Would you…?", focus: "polite requests" },
      { n: 29, title: "My daily routine story", focus: "speaking: all tenses together" },
      { n: 30, title: "Final review", focus: "the big end-of-course game day" } ] }
  ]
};

/* Helpers shared by the home page, the teacher planner and the lesson engine. */
(function (P) {
  const pad = n => String(n).padStart(2, "0");
  P.key = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  P.parse = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  P.all = P.weeks.flatMap(w => w.lessons);
  let d = P.parse(P.start);
  const segs = (P.schedule || [{ fromLesson: 1, from: P.start, days: P.teachDays }]).slice().sort((a, b) => a.fromLesson - b.fromLesson);
  P.all.forEach(l => {
    const seg = segs.filter(x => x.fromLesson <= l.n).pop() || segs[0];
    if (seg.from) { const f = P.parse(seg.from); if (f > d) d = f; }
    while (!seg.days.includes(d.getDay())) d.setDate(d.getDate() + 1);
    l.date = new Date(d); l.key = P.key(d); l.folder = `lessons/${pad(l.n)}/`;
    d.setDate(d.getDate() + 1);
  });
  /* hour can be 15.5 (= 15:30) */
  P.openAt = (date, hour) => { const h = hour == null ? P.unlockHour : hour, o = new Date(date); o.setHours(Math.floor(h), Math.round((h % 1) * 60), 0, 0); return o; };
  P.hm = h => String(Math.floor(h)).padStart(2, "0") + ":" + String(Math.round((h % 1) * 60)).padStart(2, "0");
  /* Group B · Beginner: dated by its own days, from lesson 2 on */
  const B = P.beginner;
  if (B) {
    const f = B.first;
    B.all = [Object.assign({ ready: true, done: true, id: f.key, folder: f.path }, f, { date: P.parse(f.date), key: f.date })];
    let bd = P.parse(B.start);
    B.units.forEach(u => u.lessons.forEach(l => {
      while (!B.days.includes(bd.getDay())) bd.setDate(bd.getDate() + 1);
      l.date = new Date(bd); l.key = P.key(bd); l.id = "b" + l.n; l.folder = `beginner/${pad(l.n)}/`;
      B.all.push(l); bd.setDate(bd.getDate() + 1);
    }));
    B.units[0].lessons.unshift(B.all[0]);
    B.lesson = n => B.all.find(l => l.n === n);
  }
  /* a lesson by its id: "b5" (beginner) or a number (elementary) */
  P.byId = id => { const m = /^b(\d+)$/.exec(String(id || "")); return m ? (B && B.lesson(+m[1])) : (id === "s1" ? B && B.all[0] : null); };
  P.groupOf = () => { try { const g = localStorage.getItem("clv-group"); return g === "a" || g === "b" ? g : ""; } catch (e) { return ""; } };
  P.setGroup = g => { try { localStorage.setItem("clv-group", g); } catch (e) {} };
  P.groupName = g => { const x = (P.groups || []).find(y => y.id === g); return x ? `${x.name} · ${x.when}` : ""; };
  P.isOpen = (date, hour) => Date.now() >= P.openAt(date, hour).getTime();
  P.lesson = n => P.all.find(l => l.n === n);
  P.fmt = d => d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
  P.isTeacher = () => { try { return localStorage.getItem("clv-teacher") === "1"; } catch (e) { return false; } };
  /* Lessons the teacher opened early from the Telegram bot. Cached on the phone so the page
     draws at once, then checked with the server; if it changed, the page is told ("clv-open"). */
  let forced = []; try { forced = JSON.parse(localStorage.getItem("clv-open") || "[]"); } catch (e) {}
  /* a phone that cannot save (private browsing, full storage) gets the list in the address instead */
  try { const q = new URLSearchParams(location.search).get("clvopen"); if (q != null) forced = [...new Set(forced.concat(q.split(",").filter(Boolean)))]; } catch (e) {}
  P.isForced = k => k != null && forced.includes(String(k));
  /* reload the page once to show a lesson the teacher just opened; never loop */
  P.reloadForOpen = list => {
    let saved = false;
    try { localStorage.setItem("clv-open", JSON.stringify(list)); saved = JSON.parse(localStorage.getItem("clv-open") || "null").join() === list.join(); } catch (e) {}
    if (saved) return location.reload();
    const u = new URL(location.href), want = list.join(",");
    if (u.searchParams.get("clvopen") === want) return;          /* already showing this list */
    u.searchParams.set("clvopen", want); location.replace(u.toString());
  };
  if (typeof fetch === "function" && typeof location !== "undefined" && /^https?:/.test(location.protocol)) {
    fetch("/api/open", { cache: "no-store" }).then(r => r.ok ? r.json() : null).then(j => {
      if (!j || !Array.isArray(j.open)) return;
      const next = j.open.map(String).sort(), was = forced.slice().sort();
      if (JSON.stringify(next) === JSON.stringify(was)) return;
      forced = next;
      try { window.dispatchEvent(new CustomEvent("clv-open", { detail: next })); } catch (e) {}
    }).catch(() => {});
  }
  P.points = () => { try { return JSON.parse(localStorage.getItem("clv-points") || "{}"); } catch (e) { return {}; } };
})(window.PLAN);
