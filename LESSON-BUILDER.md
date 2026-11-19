# How a ClivEdu lesson is built

This is the recipe for building one lesson of the course. It is used by the automatic lesson
builder on the morning of each lesson day (Monday, Thursday, Friday; class at 14:00 Tashkent time),
and by anyone adding a lesson by hand. Follow it exactly. The students are **beginner Uzbek
speakers**: short sentences, everyday words, Uzbek help everywhere.

## 1. Which lesson to build

1. Today's date in Tashkent (UTC+5): `TZ=Asia/Tashkent date +%F`.
2. In `lessons/plan.js` the lessons are dated by `PLAN.schedule`. Find the lesson to build: the
   earliest lesson without `ready: true` whose date is **today or tomorrow**:
   ```bash
   node -e 'global.window={};global.localStorage={getItem:()=>null};require("./lessons/plan.js");
   const P=window.PLAN,t=process.argv[1],m=new Date(Date.parse(t)+864e5).toISOString().slice(0,10);
   const l=P.all.find(l=>!l.ready&&l.key>=t&&l.key<=m);console.log(l?JSON.stringify({n:l.n,title:l.title,focus:l.focus,date:l.key}):"none")' "$(TZ=Asia/Tashkent date +%F)"
   ```
3. Stop without changing anything if it prints `none`, or `lessons/NN/` already exists.
4. The lesson's `title` and `focus` in plan.js say what to teach. Keep the title exactly.

## 2. Files to create or change

| File | What |
|---|---|
| `lessons/NN/index.html` | Copy `lessons/05/index.html`; change only `<title>Lesson N · Title</title>` |
| `lessons/NN/lesson.js` | The lesson itself (section 3). `NN` = two digits: `07` |
| `lessons/live-sets.js` | Add the live-game set `l7` (section 5) after the last `l…` set |
| `lessons/plan.js` | Add `ready: true` to the lesson |
| `lessons/NN/homework.json` + `homework.pdf` | The homework the bot sends at 15:30 (section 5b) |

Change nothing else. Never edit other lessons.

## 3. lesson.js

Do **not** set `lockAnswers` (lesson 5 has `lockAnswers: false` only because it was taught early):
by default students follow the lesson on their phones and each answer stays hidden until the
teacher opens that slide in class.

Model it on **`lessons/05/lesson.js`** (the newest full lesson): read it completely first, and
also one older lesson, so the style matches. Start with a short comment block like lesson 5.

```js
window.LESSON = {
  n: 7,
  title: "Present simple or continuous?",
  slides: [ … ],
  games: { mime: […], board: […], wheel: […], build: […], auction: […] }
};
```

### Slide order for a normal lesson (about 30–37 slides)

1. `cover`: `title` with one word in `<span class='cy'>…</span>`, `lead` = "topic · Uzbek name", 3 `chips` [Uzbek sentence, colour]
2. `goals`: 3 items `[can-do in English, example sentence, Uzbek translation]`
3. `spot` warm-up, `bg: "yel"`: 6 cards (strings or `{t, uz}`)
4. `cols` "When do we use it?" (2–3 coloured columns with `label`, `lines`, `uz`, optional `notes`)
5. `formula`, `bg: "ink"`: the rule as coloured chips + Uzbek
6. `table` if the form changes by person (I / you / he…)
7. `examples` positive: 6 items `[English with <span class='ca'>…</span>, Uzbek]`
8. 2 × `gaps` practice (6 rows `[sentence with ___, answer]`)
9. New words: 2 × `examples` (`eb: "New words · Yangi so’zlar"`, items `[sentence, "word = so‘z"]`) and 1 `quad` (4 picture-word cards with emoji)
10. `spot` speaking practice about the room / classmates, `bg: "sky"`
11. Negative: `formula` (ink) + `examples` (`<span class='cn'>…</span>`)
12. Questions: `formula` (ink) + `cols` short answers + `examples` Wh- questions (`<span class='cw'>…</span>`)
13. `quad` signal words or key phrases
14. `cols` "Be careful! · Ehtiyot bo’ling!": Wrong ✗ / Right ✓ common mistakes of Uzbek learners
15. 2 × `gaps` harder
16. `quiz` `kind: "uz"`, `bg: "yel"`: Uzbek → English (4–6 rows)
17. `quiz` `kind: "en"`: transform sentences (negative, question…)
18. 2 × `quiz` `kind: "fix"`: find the mistake
19. 2 × `spot` speaking (personal sentences; pair role-play)
20. Games: `{t:"game",g:"mime",bg:"sky"}`, `{t:"game",g:"board"}`, `{t:"game",g:"wheel",bg:"sky"}`, `{t:"game",g:"build"}`, `{t:"game",g:"auction",bg:"ink"}`
21. `check`: 5–6 "I can…" lines
22. `bye`: 3 chips

**Never** add the clue game (`g: "mystery"`): it was removed from the course.

### Review lessons ("Week N review")
Model on `lessons/06/lesson.js`: cover (`tag: "Lesson N · Review"`), `examples` "This week we
learned" (one line per lesson), warm-up `spot`, `quiz` uz, `gaps` mixed, `quiz` fix, the games
(wheel, board, mime, build, auction, mixing all the week's topics), `check`, `bye`.

### Writing rules
- **Uzbek**: Latin script, the same apostrophe style as lesson 5 (`o’`, `g’`). Natural Uzbek, short.
  Every example, quiz answer, rule and new word has Uzbek.
- **Colours in sentences**: `ca` = the grammar form (positive), `cn` = negative, `cw` = question word,
  `cg` = green. Chip colours: `peach`, `mint`, `skyb`, `butter`. Slide backgrounds: `yel`, `sky`, `ink`.
- English: A1 level, short sentences, Uzbek life (plov, bazaar, Tashkent, Samarkand, names like
  Aziz, Madina, Bobur, Lola, Dilnoza).
- Recycle earlier lessons (can, there is, this/that, my/’s, present continuous…) in examples and games.
- `’` (curly apostrophe) in English text, as in the other lessons.

### Games (in `games`)
- `mime`: 12–16 `{cue, say}`: an action to act out and the sentence the class says
- `board`: 6 categories `{cat, qs: [[question, answer] × 3]}` (100 / 200 / 300 points; easy → hard)
- `wheel`: 6 `{name, tasks: [4 speaking tasks]}`
- `build`: 8–10 `{w: [words in the right order], e: "." or "?"}`
- `auction`: 10–12 `{s, ok: true}` or `{s, ok: false, fix}`, about half wrong

## 4. Check it

```bash
node tools/check-lesson.cjs 7          # must print ✓ (fix every ✗)
python3 -m http.server 8811 &          # then open the page in Playwright:
```
Open `http://localhost:8811/lessons/07/` with Playwright (phone size 390×844, and 1280×800):
no page errors in the console, the cover shows the title, scroll to the end.
Also check dark mode: set `localStorage.clv-settings = {"theme":"dark"}` before loading.
To see the lesson as a student, the date must be past; testing as teacher is fine
(`localStorage.clv-teacher = "1"`).

Make sure the live game can use it: `node -e` load `lessons/live-sets.js` and check `l7` has 25+
questions with 4 different answers each.

## 5. Live game set (lessons/live-sets.js)

```js
  { id: "l7", lesson: 7, path: "lessons/07/lesson.js", title: "Present simple or continuous?", topic: "Lesson 7", qs: [
    ["She ___ to school every day.", "goes", "is going", "go", "going"],
    …                                   // 30 rows: [question, RIGHT, wrong, wrong, wrong]
  ] },
```
The right answer is always first (the game shuffles). For a review lesson:
`{ id: "l12", lesson: 12, path: "lessons/12/lesson.js", title: "Week 2 review", topic: "Lesson 12 · lessons 7–11 mixed", mixOf: ["l7","l8","l9","l10","l11"], qs: [] }`.
Keep the set "all" working: it is built automatically from every set.

## 5b. Homework (sent to every student by the bot at 15:30)

Write `lessons/NN/homework.json` and make the PDF:
```bash
python3 tools/make-homework.py N        # writes lessons/NN/homework.pdf
```
The format and every part type are described at the top of `tools/make-homework.py`; copy the
shape of `lessons/07/homework.json`. Rules:
- Grammar and vocabulary only (no listening), **no answers** in the file. About 35 minutes, 45–55 points,
  2–3 pages. Uzbek line under every part title (`uz`).
- Parts, in this order: today's grammar (circle), verb gaps, today's new words (match), negatives and
  questions (transform), word order, Uzbek → English (translate, 4 sentences), **"What we learnt
  before"** (circle, 6 items from earlier lessons: to be, can, there is/are, this/these, ’s, have to,
  present continuous… whatever the course has taught), and "Write about …" (write, 6 lines).
- Every item must have exactly one right answer. In `circle` items the options go in `{a|b}`.
- `message`: one short line the bot sends with the PDF ("Lesson N · Title. Do it before the next lesson.").
- Open the PDF (`pdftoppm -r 60 -jpeg lessons/NN/homework.pdf /tmp/hw` and look at the pages):
  nothing cut off, Uzbek letters shown correctly.
The PDF goes out by itself after class (`netlify/functions/homework-cron.mjs`); nothing else to do.

## 6. Publish

```bash
git add lessons/NN lessons/live-sets.js lessons/plan.js     # lessons/NN has homework.json and homework.pdf
git commit -m "Lesson N: Title (built automatically for <date>)"
git push origin main
```
Netlify publishes in about a minute. Check `https://clivedu.me/lessons/NN/` answers 200.
Students can open it when class starts (plan.js `unlockHour`, 14:00) and follow along on their phones;
the teacher sees it at once.

## 7. Tell the teacher

One short message: the lesson number and title, how many slides, the games, the link
`https://clivedu.me/lessons/NN/`, and anything that needs a human look (for example a word you
were unsure how to translate).
