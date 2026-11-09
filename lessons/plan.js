/* The course plan. Lessons are taught Monday to Saturday, starting on PLAN.start.
   Students can open a lesson from unlockHour (local time) on the day it is taught.
   teacherCode opens the teacher planner at /teacher/ on a device. */
window.PLAN = {
  start: "2026-11-10",
  teachDays: [1, 2, 3, 4, 5, 6],
  unlockHour: 16,
  teacherCode: "clivedu",
  revision: { title: "Big Revision", date: "2026-11-09", path: "revision/" },
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
      { n: 7, title: "Present simple or continuous?", focus: "every day vs now" },
      { n: 8, title: "How often?", focus: "always, usually, sometimes, never" },
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
  P.all.forEach(l => {
    while (!P.teachDays.includes(d.getDay())) d.setDate(d.getDate() + 1);
    l.date = new Date(d); l.key = P.key(d); l.folder = `lessons/${pad(l.n)}/`;
    d.setDate(d.getDate() + 1);
  });
  P.openAt = date => { const o = new Date(date); o.setHours(P.unlockHour, 0, 0, 0); return o; };
  P.isOpen = date => Date.now() >= P.openAt(date).getTime();
  P.lesson = n => P.all.find(l => l.n === n);
  P.fmt = d => d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
  P.isTeacher = () => { try { return localStorage.getItem("clv-teacher") === "1"; } catch (e) { return false; } };
  P.points = () => { try { return JSON.parse(localStorage.getItem("clv-points") || "{}"); } catch (e) { return {}; } };
})(window.PLAN);
