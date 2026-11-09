/* Big Revision, converted to the lesson engine. */
(function () {
const AUCTION = [
  { s: "She has to wear a uniform.", ok: true },
  { s: "May I to sit here?", ok: false, fix: "May I sit here?" },
  { s: "They isn’t at school.", ok: false, fix: "They aren’t at school." },
  { s: "Don’t touch the cake!", ok: true },
  { s: "Does he like music?", ok: true },
  { s: "I doesn’t have to go.", ok: false, fix: "I don’t have to go." },
  { s: "You mustn’t run here.", ok: true },
  { s: "We am very happy.", ok: false, fix: "We are very happy." },
  { s: "He plays football every day.", ok: true },
  { s: "Please to open the window.", ok: false, fix: "Please open the window." },
  { s: "It mays rain tomorrow.", ok: false, fix: "It may rain tomorrow." },
  { s: "Is your sister a nurse?", ok: true }
];
const BOARD = [
  { cat: "Sentences", qs: [["Put in order: football / plays / Ali","Ali plays football."],["Correct it: She eat apples every day.","She eats apples every day."],["Translate: Men har kuni non yeyman.","I eat bread every day."]] },
  { cat: "To be", qs: [["I ___ a student.","am"],["They ___ at home.","are"],["Translate: Biz charchaganmiz.","We are tired."]] },
  { cat: "No & ?", qs: [["Make a question: You like tea.","Do you like tea?"],["Make it negative: He works here.","He doesn’t work here."],["Short answer (yes): Is she a doctor?","Yes, she is."]] },
  { cat: "Commands", qs: [["Say “sit down” politely.","Please sit down."],["Make it negative: Run!","Don’t run!"],["Translate: Telefoningizni o’chiring.","Turn off your phone."]] },
  { cat: "May", qs: [["You are late. Ask to come in.","May I come in?"],["Say no politely to “May I go out?”","No, you may not."],["Maybe it will rain tomorrow. Use may.","It may rain tomorrow."]] },
  { cat: "Have to", qs: [["She ___ to work. (have or has?)","has"],["It is free. I ___ pay.","don’t have to"],["In a library, talking loudly is forbidden. Make a rule.","You mustn’t talk loudly."]] }
];
const WHEEL = [
  { name: "Sentences", color: "#1F5FD1", tasks: ["Say 3 things your mother does every day.","Make a sentence with “plays”.","Tell us one thing you do every morning.","Say what your best friend likes."] },
  { name: "To be", color: "#0B6E70", tasks: ["Describe the person on your left with “is”.","Say 3 sentences about you with “I am”.","Where are your family now? Use is / are.","Say two jobs: My father is… My mother is…"] },
  { name: "No & ?", color: "#B42318", tasks: ["Ask the teacher 2 questions with “Do you…?”","Say 2 things you don’t like.","Ask a classmate: “Are you…?”","Make a question with “Does…?” about a famous person."] },
  { name: "Commands", color: "#E7A61C", dark: true, tasks: ["Give your team 3 commands. They must do them!","Give 2 “Don’t” rules for this classroom.","Ask the teacher to do something, politely!","Guide a teammate to the door: walk, stop, turn left…"] },
  { name: "May", color: "#157347", tasks: ["Ask the teacher for permission 2 times.","Say 2 things that may happen tomorrow.","Someone asks “May I use your phone?” Say no politely.","Ask a classmate for something with “May I…?”"] },
  { name: "Have to", color: "#5B3FA8", tasks: ["Say 3 things you have to do this week.","Say 2 things you don’t have to do on Sunday.","Say 2 school rules with “mustn’t”.","Ask a classmate: “Do you have to…?”"] }
];
const BUILD = [
  { w: ["I","have","to","work"], e: "." }, { w: ["May","I","come","in"], e: "?" }, { w: ["She","doesn’t","like","fish"], e: "." },
  { w: ["Is","she","a","doctor"], e: "?" }, { w: ["Please","open","the","door"], e: "." }, { w: ["They","are","at","school"], e: "." },
  { w: ["Does","he","play","football"], e: "?" }, { w: ["You","mustn’t","run","here"], e: "!" }, { w: ["It","may","rain","tomorrow"], e: "." },
  { w: ["Don’t","be","late"], e: "!" }, { w: ["Do","you","have","to","work"], e: "?" }, { w: ["My","brother","plays","football"], e: "." }
];
const BOSS = [
  ["stand up","turing"],["sit down","o’tiring"],["touch your nose","burningizga tegining"],["clap twice","ikki marta chapak chaling"],
  ["raise your hand","qo’lingizni ko’taring"],["close your eyes","ko’zlaringizni yuming"],["turn around","orqaga o’giriling"],["smile","jilmaying"],
  ["touch your head","boshingizga tegining"],["wave to the teacher","o’qituvchiga qo’l silkiting"],["jump","sakrang"],["look at the door","eshikka qarang"],
  ["don’t laugh","kulmang"],["don’t move","qimirlamang"]
];
const BOSS_MAY = ["open the window","drink some water","go out","sit next to my friend","use your pen","stand up"];
const PLACES = [
  { p: "Library", uz: "Kutubxona", c: ["You don’t have to pay.","You have to be quiet.","You have to give the books back."] },
  { p: "Hospital", uz: "Kasalxona", c: ["You have to wait your turn.","You mustn’t make noise.","Doctors have to help sick people."] },
  { p: "Airport", uz: "Aeroport", c: ["You have to arrive early.","You mustn’t carry big bottles of water.","You have to show your passport."] },
  { p: "Cinema", uz: "Kinoteatr", c: ["You have to turn off your phone.","You have to buy a ticket.","You sit in the dark and watch a big screen."] },
  { p: "Restaurant", uz: "Restoran", c: ["You don’t have to cook.","You have to pay the bill.","A waiter has to bring your food."] },
  { p: "Swimming pool", uz: "Basseyn", c: ["You have to wear special clothes.","You have to take a shower first.","You mustn’t run near the water."] },
  { p: "Bazaar", uz: "Bozor", c: ["You don’t have to buy a ticket.","You may ask for a lower price.","You have to carry your bags of fruit and vegetables."] },
  { p: "School", uz: "Maktab", c: ["You have to do homework.","You mustn’t use your phone in class.","You have to wear a uniform."] }
];
const MIME = [
  { cue: "tired", say: "You are tired. / She is tired." }, { cue: "hungry", say: "You are hungry. / He is hungry." },
  { cue: "cold", say: "You are cold. / She is cold." }, { cue: "happy", say: "You are happy. / He is happy." },
  { cue: "a doctor", say: "You are a doctor. / She is a doctor." }, { cue: "a driver", say: "You are a driver. / He is a driver." },
  { cue: "play football", say: "You play football. / He plays football." }, { cue: "drink tea", say: "You drink tea. / She drinks tea." },
  { cue: "read a book", say: "You read a book. / He reads a book." }, { cue: "cook plov", say: "You cook plov. / She cooks plov." },
  { cue: "don’t like fish", say: "You don’t like fish. / He doesn’t like fish." }, { cue: "have to get up early", say: "You have to get up early. / She has to get up early." },
  { cue: "swim", say: "You swim. / He swims." }, { cue: "a teacher", say: "You are a teacher. / She is a teacher." }
];
window.LESSON = {
  n: 0,
  title: "Big Revision",
  openDate: "2026-11-09",
  slides: [
 {
  "t": "raw",
  "cls": "ink center",
  "title": "Cover",
  "html": "<div><span class=\"tag\">Revision lesson</span></div>\n  <h1 class=\"h1\">Big<br><span class=\"cy\">Revision</span></h1>\n  <p class=\"lead\">Sentences · to be · negatives and questions · commands · may · must · have to</p>\n  <div class=\"row\"><span class=\"bub peach\">Let’s review!</span><span class=\"bub mint\">Takrorlaymiz!</span></div>"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Today we revise",
  "html": "<h2 class=\"h2\">Today we revise</h2>\n  <p class=\"sub\" style=\"margin-top:-24px\">Tap a topic to jump to it.</p>\n  <div class=\"g3 r2 flex1\">\n    <button class=\"card peach spot\" data-jump=\"sent\" style=\"text-align:left\"><span class=\"eb\">1</span><span class=\"enb\">Making sentences</span><span class=\"en\" style=\"font-size:36px\">I eat apples.</span><span class=\"uz small\">Men olma yeyman.</span></button>\n    <button class=\"card mint spot\" data-jump=\"tobe\" style=\"text-align:left\"><span class=\"eb\" style=\"color:var(--green)\">2</span><span class=\"enb\">To be</span><span class=\"en\" style=\"font-size:36px\">She is happy.</span><span class=\"uz small\">U xursand.</span></button>\n    <button class=\"card skyb spot\" data-jump=\"negrec\" style=\"text-align:left\"><span class=\"eb\" style=\"color:var(--blue)\">3</span><span class=\"enb\">Negatives and questions</span><span class=\"en\" style=\"font-size:36px\">Do you like tea?</span><span class=\"uz small\">Choyni yoqtirasizmi?</span></button>\n    <button class=\"card butter spot\" data-jump=\"imprec\" style=\"text-align:left\"><span class=\"eb\" style=\"color:var(--ochre)\">4</span><span class=\"enb\">Commands</span><span class=\"en\" style=\"font-size:36px\">Open the door!</span><span class=\"uz small\">Eshikni oching!</span></button>\n    <button class=\"card peach spot\" data-jump=\"mayrec\" style=\"text-align:left\"><span class=\"eb\">5</span><span class=\"enb\">May</span><span class=\"en\" style=\"font-size:36px\">May I come in?</span><span class=\"uz small\">Kirsam bo’ladimi?</span></button>\n    <button class=\"card mint spot\" data-jump=\"haverec\" style=\"text-align:left\"><span class=\"eb\" style=\"color:var(--green)\">6</span><span class=\"enb\">Must and have to</span><span class=\"en\" style=\"font-size:36px\">I have to work.</span><span class=\"uz small\">Men ishlashim kerak.</span></button>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "yel",
  "title": "Warm-up",
  "html": "<div class=\"row\" style=\"justify-content:space-between\"><h2 class=\"h2\">Warm-up: finish the sentence</h2><button class=\"sbtn\" data-spotlight=\"warm\">Pick for me</button></div>\n  <p class=\"sub\">Pick a start. Say one true sentence about you.</p>\n  <div class=\"g3 r2 flex1\" id=\"warm\">\n    <div class=\"card spot\" style=\"background:var(--cream);align-items:center\"><span class=\"enb\" style=\"font-size:72px\">I am…</span></div>\n    <div class=\"card spot\" style=\"background:var(--cream);align-items:center\"><span class=\"enb\" style=\"font-size:72px\">I don’t…</span></div>\n    <div class=\"card spot\" style=\"background:var(--cream);align-items:center\"><span class=\"enb\" style=\"font-size:72px\">Do you…?</span></div>\n    <div class=\"card spot\" style=\"background:var(--cream);align-items:center\"><span class=\"enb\" style=\"font-size:72px\">Please…</span></div>\n    <div class=\"card spot\" style=\"background:var(--cream);align-items:center\"><span class=\"enb\" style=\"font-size:72px\">May I…?</span></div>\n    <div class=\"card spot\" style=\"background:var(--cream);align-items:center\"><span class=\"enb\" style=\"font-size:72px\">I have to…</span></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "ink",
  "title": "Topic 1: Who + Action + What",
  "html": "<div><p class=\"eb\">Topic 1 · Recap</p><h2 class=\"h2\" style=\"margin-top:12px\">Who + Action + What</h2></div>\n  <div class=\"frow\"><span class=\"fc skyb\">I</span><span class=\"fc peach\">play</span><span class=\"fc mint\">football.</span><span class=\"uz\">Men futbol o’ynayman.</span></div>\n  <div class=\"frow\"><span class=\"fc skyb\">She</span><span class=\"fc peach\">play<span class=\"cn\">s</span></span><span class=\"fc mint\">football.</span><span class=\"uz\">U futbol o’ynaydi.</span></div>\n  <div class=\"notes\"><span class=\"note\">he · she · it → verb + s</span><span class=\"note\">have → has</span></div>",
  "id": "sent"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Topic 2: am / is / are",
  "html": "<div><p class=\"eb\">Topic 2 · Recap</p><h2 class=\"h2\" style=\"margin-top:12px\">Who + am / is / are + Detail</h2></div>\n  <div class=\"cols flex1\">\n    <div class=\"card big skyb\"><p class=\"who\">I</p><p class=\"huge\">am</p><p class=\"en\" style=\"font-size:36px\">I am a student.</p><p class=\"uz small\">Men talabaman.</p></div>\n    <div class=\"card big skyb\"><p class=\"who\">he · she · it</p><p class=\"huge\">is</p><p class=\"en\" style=\"font-size:36px\">She is a doctor.</p><p class=\"uz small\">U shifokor.</p></div>\n    <div class=\"card big skyb\"><p class=\"who\">you · we · they</p><p class=\"huge\">are</p><p class=\"en\" style=\"font-size:36px\">We are at home.</p><p class=\"uz small\">Biz uydamiz.</p></div>\n  </div>",
  "id": "tobe"
 },
 {
  "t": "raw",
  "cls": "yel",
  "title": "Quiz 1",
  "html": "<h2 class=\"h2\">Quiz 1: say it in English</h2>\n  <p class=\"sub\">Students answer first. Tap to reveal each answer.</p>\n  <div class=\"qlist\">\n    <div class=\"qrow\"><span class=\"num\">1</span><p class=\"qt\">Men choy ichaman.</p><button class=\"ans\">I drink tea.</button></div>\n    <div class=\"qrow\"><span class=\"num\">2</span><p class=\"qt\">U shifokor.</p><button class=\"ans\">She is a doctor.</button></div>\n    <div class=\"qrow\"><span class=\"num\">3</span><p class=\"qt\">Ular maktabda.</p><button class=\"ans\">They are at school.</button></div>\n    <div class=\"qrow\"><span class=\"num\">4</span><p class=\"qt\">Akam futbol o’ynaydi.</p><button class=\"ans\">My brother plays football.</button></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Topic 3: Saying no",
  "html": "<div><p class=\"eb\">Topic 3 · Recap</p><h2 class=\"h2\" style=\"margin-top:12px\">Saying no</h2></div>\n  <div class=\"cols flex1\">\n    <div class=\"card big peach\"><span class=\"lbl\">With be: add not</span><p class=\"en\">I am <span class=\"cn\">not</span> tired.</p><p class=\"en\">She <span class=\"cn\">isn’t</span> tired.</p><p class=\"en\">They <span class=\"cn\">aren’t</span> tired.</p><p class=\"uz small\">Men charchagan emasman.</p></div>\n    <div class=\"card big mint\"><span class=\"lbl\">With actions: don’t / doesn’t</span><p class=\"en\">I <span class=\"cn\">don’t</span> like fish.</p><p class=\"en\">He <span class=\"cn\">doesn’t</span> like fish.</p><p class=\"en\">We <span class=\"cn\">don’t</span> like fish.</p><p class=\"uz small\">Men baliqni yoqtirmayman.</p></div>\n  </div>",
  "id": "negrec"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Topic 3: Asking questions",
  "html": "<div><p class=\"eb\">Topic 3 · Recap</p><h2 class=\"h2\" style=\"margin-top:12px\">Asking questions</h2></div>\n  <div class=\"cols flex1\">\n    <div class=\"card big skyb\"><span class=\"lbl\">With be: move it to the front</span><p class=\"en\"><span class=\"cw\">Is</span> she happy?</p><p class=\"en\"><span class=\"cw\">Are</span> you ready?</p><p class=\"uz small\">U xursandmi? · Tayyormisiz?</p></div>\n    <div class=\"card big skyb\"><span class=\"lbl\">With actions: Do / Does first</span><p class=\"en\"><span class=\"cw\">Do</span> you like tea?</p><p class=\"en\"><span class=\"cw\">Does</span> he work here?</p><p class=\"uz small\">Choyni yoqtirasizmi? · U shu yerda ishlaydimi?</p></div>\n  </div>\n  <div class=\"notes\"><span class=\"note\">Yes, she is. · No, she isn’t.</span><span class=\"note\">Yes, I do. · No, he doesn’t.</span></div>"
 },
 {
  "t": "raw",
  "cls": "yel",
  "title": "Quiz 2",
  "html": "<h2 class=\"h2\">Quiz 2: change it</h2>\n  <p class=\"sub\">NO = make it negative. ? = make a question. Tap to check.</p>\n  <div class=\"qlist\">\n    <div class=\"qrow\"><span class=\"mk\" style=\"background:var(--red)\">NO</span><p class=\"qt e\">He is a teacher.</p><button class=\"ans\">He isn’t a teacher.</button></div>\n    <div class=\"qrow\"><span class=\"mk\" style=\"background:var(--blue)\">&nbsp;?&nbsp;</span><p class=\"qt e\">You like coffee.</p><button class=\"ans\">Do you like coffee?</button></div>\n    <div class=\"qrow\"><span class=\"mk\" style=\"background:var(--red)\">NO</span><p class=\"qt e\">She plays tennis.</p><button class=\"ans\">She doesn’t play tennis.</button></div>\n    <div class=\"qrow\"><span class=\"mk\" style=\"background:var(--blue)\">&nbsp;?&nbsp;</span><p class=\"qt e\">They are at home.</p><button class=\"ans\">Are they at home?</button></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Topic 4: Commands",
  "html": "<div><p class=\"eb\">Topic 4 · Recap</p><h2 class=\"h2\" style=\"margin-top:12px\">Commands</h2></div>\n  <div class=\"cols flex1\">\n    <div class=\"card big peach\"><span class=\"lbl\">Do it</span><p class=\"ca\" style=\"font-size:32px;font-weight:800\">Verb + …</p><p class=\"enb\">Open the door!</p><p class=\"uz small\">Eshikni oching!</p></div>\n    <div class=\"card big rose\"><span class=\"lbl\">Don’t do it</span><p class=\"cn\" style=\"font-size:32px;font-weight:800\">Don’t + verb</p><p class=\"enb\">Don’t run!</p><p class=\"uz small\">Yugurmang!</p></div>\n    <div class=\"card big mint\"><span class=\"lbl\">Be polite</span><p class=\"cg\" style=\"font-size:32px;font-weight:800\">Please + verb</p><p class=\"enb\">Please sit down.</p><p class=\"uz small\">Iltimos, o’tiring.</p></div>\n  </div>\n  <div class=\"notes\"><span class=\"note\">No subject · base verb · verb first</span></div>",
  "id": "imprec"
 },
 {
  "t": "raw",
  "cls": "yel",
  "title": "Quiz 3",
  "html": "<h2 class=\"h2\">Quiz 3: give the command</h2>\n  <p class=\"sub\">Say it in English. Tap to reveal.</p>\n  <div class=\"qlist\">\n    <div class=\"qrow\"><span class=\"num\">1</span><p class=\"qt\">Doskaga qarang!</p><button class=\"ans\">Look at the board!</button></div>\n    <div class=\"qrow\"><span class=\"num\">2</span><p class=\"qt\">Telefondan foydalanmang!</p><button class=\"ans\">Don’t use your phone!</button></div>\n    <div class=\"qrow\"><span class=\"num\">3</span><p class=\"qt\">Iltimos, derazani yoping.</p><button class=\"ans\">Please close the window.</button></div>\n    <div class=\"qrow\"><span class=\"num\">4</span><p class=\"qt\">Kechikmang!</p><button class=\"ans\">Don’t be late!</button></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Topic 5: May",
  "html": "<div><p class=\"eb\">Topic 5 · Recap</p><h2 class=\"h2\" style=\"margin-top:12px\">May: two jobs</h2></div>\n  <div class=\"cols flex1\">\n    <div class=\"card big mint\"><span class=\"lbl\">1 · Permission</span><p class=\"enb\"><span class=\"ca\">May</span> I come in?</p><p class=\"uz\">Kirsam bo’ladimi?</p><p class=\"en\" style=\"font-size:32px\">Yes, you may. · No, you may not.</p></div>\n    <div class=\"card big butter\"><span class=\"lbl\">2 · Possibility</span><p class=\"enb\">It <span class=\"ca\">may</span> rain.</p><p class=\"uz\">Yomg’ir yog’ishi mumkin.</p><p class=\"en\" style=\"font-size:32px\">may = maybe, not 100% sure</p></div>\n  </div>\n  <div class=\"notes\"><span class=\"note\">No -s: she may</span><span class=\"note\">No to: may go</span></div>",
  "id": "mayrec"
 },
 {
  "t": "raw",
  "cls": "yel",
  "title": "Quiz 4",
  "html": "<h2 class=\"h2\">Quiz 4: what do you say with may?</h2>\n  <p class=\"sub\">Read the situation. Make a sentence with may. Tap to check.</p>\n  <div class=\"qlist\">\n    <div class=\"qrow\"><span class=\"num\">1</span><p class=\"qt\" style=\"font-size:36px\">Siz suv ichmoqchisiz.</p><button class=\"ans\">May I drink some water?</button></div>\n    <div class=\"qrow\"><span class=\"num\">2</span><p class=\"qt\" style=\"font-size:36px\">Osmonda qora bulutlar bor.</p><button class=\"ans\">It may rain.</button></div>\n    <div class=\"qrow\"><span class=\"num\">3</span><p class=\"qt\" style=\"font-size:36px\">Siz darsga kechikib keldingiz.</p><button class=\"ans\">May I come in?</button></div>\n    <div class=\"qrow\"><span class=\"num\">4</span><p class=\"qt\" style=\"font-size:36px\">Do’stingiz ertaga kelishi mumkin.</p><button class=\"ans\">My friend may come tomorrow.</button></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Topic 6: Have to",
  "html": "<div><p class=\"eb\">Topic 6 · Recap</p><h2 class=\"h2\" style=\"margin-top:12px\">Have to: four forms</h2></div>\n  <div class=\"g2 r2 flex1\">\n    <div class=\"card mint\"><span class=\"lbl\">I · you · we · they</span><p class=\"enb\">I <span class=\"ca\">have to</span> work.</p><p class=\"uz small\">Men ishlashim kerak.</p></div>\n    <div class=\"card mint\"><span class=\"lbl\">he · she · it</span><p class=\"enb\">She <span class=\"ca\">has to</span> work.</p><p class=\"uz small\">U ishlashi kerak.</p></div>\n    <div class=\"card peach\"><span class=\"lbl r\">Negative</span><p class=\"enb\">He <span class=\"cn\">doesn’t have to</span> work.</p><p class=\"uz small\">U ishlashi shart emas.</p></div>\n    <div class=\"card skyb\"><span class=\"lbl b\">Question</span><p class=\"enb\"><span class=\"cw\">Do</span> you <span class=\"ca\">have to</span> work?</p><p class=\"uz small\">Ishlashingiz kerakmi?</p></div>\n  </div>",
  "id": "haverec"
 },
 {
  "t": "raw",
  "cls": "ink",
  "title": "Must or have to?",
  "html": "<div><p class=\"eb\">Topic 6 · Recap</p><h2 class=\"h2\" style=\"margin-top:12px\">Must or have to?</h2></div>\n  <div class=\"cols\">\n    <div class=\"card big\" style=\"background:var(--ink2)\"><p class=\"enb cy\">must</p><p class=\"lead\" style=\"font-size:32px\">My own rule, I feel it is important</p><p class=\"en\">I must study harder.</p></div>\n    <div class=\"card big\" style=\"background:var(--ink2)\"><p class=\"enb\" style=\"color:var(--mint)\">have to</p><p class=\"lead\" style=\"font-size:32px\">A rule from outside: school, job, law</p><p class=\"en\">I have to wear a uniform.</p></div>\n  </div>\n  <div class=\"cols flex1\">\n    <div class=\"card big rose\"><p class=\"enb cn\" style=\"font-size:48px\">mustn’t = forbidden</p><p class=\"en\" style=\"font-size:40px\">You mustn’t smoke here.</p><p class=\"uz small\">Bu yerda chekish mumkin emas.</p></div>\n    <div class=\"card big mint\"><p class=\"enb cg\" style=\"font-size:48px\">don’t have to = not needed</p><p class=\"en\" style=\"font-size:40px\">You don’t have to pay.</p><p class=\"uz small\">Pul to’lashingiz shart emas.</p></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "yel",
  "title": "Quiz 5",
  "html": "<h2 class=\"h2\">Quiz 5: mustn’t or don’t have to?</h2>\n  <p class=\"sub\">Forbidden or not needed? Tap to check.</p>\n  <div class=\"qlist\">\n    <div class=\"qrow\"><span class=\"num\">1</span><p class=\"qt e\" style=\"font-size:40px\">You ______ smoke in the hospital.</p><button class=\"ans bad\" style=\"width:440px\">mustn’t</button></div>\n    <div class=\"qrow\"><span class=\"num\">2</span><p class=\"qt e\" style=\"font-size:40px\">It’s Sunday. I ______ get up early.</p><button class=\"ans\" style=\"width:440px\">don’t have to</button></div>\n    <div class=\"qrow\"><span class=\"num\">3</span><p class=\"qt e\" style=\"font-size:40px\">Careful! You ______ touch the fire.</p><button class=\"ans bad\" style=\"width:440px\">mustn’t</button></div>\n    <div class=\"qrow\"><span class=\"num\">4</span><p class=\"qt e\" style=\"font-size:40px\">It’s free. She ______ pay.</p><button class=\"ans\" style=\"width:440px\">doesn’t have to</button></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Everything in one table",
  "html": "<h2 class=\"h2\">Everything in one table</h2>\n  <table class=\"tbl\">\n    <tr><th style=\"width:17%\">Form</th><th style=\"width:21%\">Meaning</th><th style=\"width:29%\">Example</th><th>Uzbek</th></tr>\n    <tr><td>Command</td><td>order, request</td><td>Sit down, please.</td><td>Iltimos, o’tiring.</td></tr>\n    <tr><td>Don’t + verb</td><td>don’t do it</td><td>Don’t run!</td><td>Yugurmang!</td></tr>\n    <tr><td>May I…?</td><td>permission</td><td>May I go out?</td><td>Chiqsam bo’ladimi?</td></tr>\n    <tr><td>may</td><td>possibility</td><td>It may rain.</td><td>Yomg’ir yog’ishi mumkin.</td></tr>\n    <tr><td>must</td><td>my strong rule</td><td>I must study.</td><td>O’qishim shart.</td></tr>\n    <tr><td>mustn’t</td><td>forbidden</td><td>You mustn’t run.</td><td>Yugurish mumkin emas.</td></tr>\n    <tr><td>have to</td><td>rule, duty</td><td>I have to work.</td><td>Ishlashim kerak.</td></tr>\n    <tr><td>don’t have to</td><td>not needed</td><td>I don’t have to pay.</td><td>To’lashim shart emas.</td></tr>\n  </table>"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Which word is missing?",
  "html": "<div><h2 class=\"h2\">Which word is missing?</h2><p class=\"sub\" style=\"margin-top:8px\">am · is · are · do · does. Tap to check.</p></div>\n  <div class=\"g2 r3 flex1\">\n    <div class=\"qrow ln\"><p class=\"qt e\">1. ____ you like tea?</p><button class=\"ans sm\">Do</button></div>\n    <div class=\"qrow ln\"><p class=\"qt e\">2. ____ she a teacher?</p><button class=\"ans sm\">Is</button></div>\n    <div class=\"qrow ln\"><p class=\"qt e\">3. He ____ not hungry.</p><button class=\"ans sm\">is</button></div>\n    <div class=\"qrow ln\"><p class=\"qt e\">4. ____ they live here?</p><button class=\"ans sm\">Do</button></div>\n    <div class=\"qrow ln\"><p class=\"qt e\">5. We ____ happy today.</p><button class=\"ans sm\">are</button></div>\n    <div class=\"qrow ln\"><p class=\"qt e\">6. ____ your brother work?</p><button class=\"ans sm\">Does</button></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Find the mistake 1",
  "html": "<h2 class=\"h2\">Find the mistake · Part 1</h2>\n  <p class=\"sub\">Shout “Stop!” when you see it. Tap to fix.</p>\n  <div class=\"qlist\">\n    <div class=\"qrow warn\"><span class=\"bang\">!</span><p class=\"qt e\">She don’t like milk.</p><button class=\"ans\">She doesn’t like milk.</button></div>\n    <div class=\"qrow warn\"><span class=\"bang\">!</span><p class=\"qt e\">I is a student.</p><button class=\"ans\">I am a student.</button></div>\n    <div class=\"qrow warn\"><span class=\"bang\">!</span><p class=\"qt e\">May I to go out?</p><button class=\"ans\">May I go out?</button></div>\n    <div class=\"qrow warn\"><span class=\"bang\">!</span><p class=\"qt e\">He have to work.</p><button class=\"ans\">He has to work.</button></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Find the mistake 2",
  "html": "<h2 class=\"h2\">Find the mistake · Part 2</h2>\n  <p class=\"sub\">Shout “Stop!” when you see it. Tap to fix.</p>\n  <div class=\"qlist\">\n    <div class=\"qrow warn\"><span class=\"bang\">!</span><p class=\"qt e\">Does he plays football?</p><button class=\"ans\">Does he play football?</button></div>\n    <div class=\"qrow warn\"><span class=\"bang\">!</span><p class=\"qt e\">Don’t to shout!</p><button class=\"ans\">Don’t shout!</button></div>\n    <div class=\"qrow warn\"><span class=\"bang\">!</span><p class=\"qt e\">They isn’t at home.</p><button class=\"ans\">They aren’t at home.</button></div>\n    <div class=\"qrow warn\"><span class=\"bang\">!</span><p class=\"qt e\">You mustn’t to run.</p><button class=\"ans\">You mustn’t run.</button></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "yel",
  "title": "Translation challenge",
  "html": "<h2 class=\"h2\">Translation challenge</h2>\n  <p class=\"sub\">All topics mixed. Pairs race to say it first. Tap to check.</p>\n  <div class=\"qlist\">\n    <div class=\"qrow\"><span class=\"num\">1</span><p class=\"qt\" style=\"font-size:36px\">Men o’qituvchiman.</p><button class=\"ans\">I am a teacher.</button></div>\n    <div class=\"qrow\"><span class=\"num\">2</span><p class=\"qt\" style=\"font-size:36px\">U qahva ichmaydi.</p><button class=\"ans\">He doesn’t drink coffee.</button></div>\n    <div class=\"qrow\"><span class=\"num\">3</span><p class=\"qt\" style=\"font-size:36px\">Eshikni yoping, iltimos.</p><button class=\"ans\">Close the door, please.</button></div>\n    <div class=\"qrow\"><span class=\"num\">4</span><p class=\"qt\" style=\"font-size:36px\">Ertaga ishlashim shart emas.</p><button class=\"ans\">I don’t have to work tomorrow.</button></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Put the words in order",
  "html": "<h2 class=\"h2\">Put the words in order</h2>\n  <p class=\"sub\">Work with your partner. Tap to check.</p>\n  <div class=\"qlist\">\n    <div class=\"qrow ln\"><span class=\"num\">1</span><div class=\"row flex1\" style=\"gap:14px\"><span class=\"chipw\">have</span><span class=\"chipw\">I</span><span class=\"chipw\">work</span><span class=\"chipw\">to</span></div><button class=\"ans\">I have to work.</button></div>\n    <div class=\"qrow ln\"><span class=\"num\">2</span><div class=\"row flex1\" style=\"gap:14px\"><span class=\"chipw\">door</span><span class=\"chipw\">open</span><span class=\"chipw\">please</span><span class=\"chipw\">the</span></div><button class=\"ans\">Please open the door.</button></div>\n    <div class=\"qrow ln\"><span class=\"num\">3</span><div class=\"row flex1\" style=\"gap:14px\"><span class=\"chipw\">happy</span><span class=\"chipw\">she</span><span class=\"chipw\">is</span><span class=\"chipw\">?</span></div><button class=\"ans\">Is she happy?</button></div>\n    <div class=\"qrow ln\"><span class=\"num\">4</span><div class=\"row flex1\" style=\"gap:14px\"><span class=\"chipw\">may</span><span class=\"chipw\">in</span><span class=\"chipw\">I</span><span class=\"chipw\">come</span></div><button class=\"ans\">May I come in?</button></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "sky",
  "title": "Talk about you",
  "html": "<div class=\"row\" style=\"justify-content:space-between\"><div class=\"row\"><h2 class=\"h2\">Talk about you</h2><span class=\"tag dk\">Pair work</span></div><button class=\"sbtn\" data-spotlight=\"speak\">Pick for me</button></div>\n  <p class=\"sub\">Finish each sentence about your life. Then ask your partner a question.</p>\n  <div class=\"g3 r2 flex1\" id=\"speak\">\n    <div class=\"card spot\" style=\"background:var(--cream)\"><span class=\"eb\">have to</span><span class=\"enb\" style=\"font-size:48px\">Every day I have to…</span></div>\n    <div class=\"card spot\" style=\"background:var(--cream)\"><span class=\"eb\">don’t have to</span><span class=\"enb\" style=\"font-size:48px\">At weekends I don’t have to…</span></div>\n    <div class=\"card spot\" style=\"background:var(--cream)\"><span class=\"eb\">mustn’t</span><span class=\"enb\" style=\"font-size:48px\">In class we mustn’t…</span></div>\n    <div class=\"card spot\" style=\"background:var(--cream)\"><span class=\"eb\">may</span><span class=\"enb\" style=\"font-size:48px\">Tomorrow I may…</span></div>\n    <div class=\"card spot\" style=\"background:var(--cream)\"><span class=\"eb\">to be</span><span class=\"enb\" style=\"font-size:48px\">My best friend is…</span></div>\n    <div class=\"card spot\" style=\"background:var(--cream)\"><span class=\"eb\">question</span><span class=\"enb\" style=\"font-size:48px\">Do you…? Are you…?</span></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Role-play",
  "html": "<div class=\"row\" style=\"justify-content:space-between\"><h2 class=\"h2\">Role-play: late for class</h2><button class=\"sbtn y\" data-blur=\"teacherCard\">Hide teacher lines</button></div>\n  <div><span class=\"note\">A student comes in late. Use all the topics!</span></div>\n  <div class=\"cols flex1\">\n    <div class=\"card big skyb\"><p class=\"enb cw\" style=\"font-size:44px\">Student</p><p class=\"en\" style=\"font-size:36px\">May I come in?</p><p class=\"en\" style=\"font-size:36px\">Sorry, I am late. The bus was slow.</p><p class=\"en\" style=\"font-size:36px\">Do I have to do the homework?</p><p class=\"en\" style=\"font-size:36px\">May I open the window?</p></div>\n    <div class=\"card big mint blurable\" id=\"teacherCard\"><p class=\"enb cg\" style=\"font-size:44px\">Teacher</p><p class=\"en\" style=\"font-size:36px\">Yes, you may. Please sit down.</p><p class=\"en\" style=\"font-size:36px\">It’s OK, but don’t be late again!</p><p class=\"en\" style=\"font-size:36px\">Yes, you do. You have to do page 10.</p><p class=\"en\" style=\"font-size:36px\">No, you may not. It is cold today.</p></div>\n  </div>"
 },
 {
  "t": "raw",
  "cls": "yel",
  "title": "Game 1: Grammar Auction rules",
  "html": "<div style=\"width:620px;display:flex;flex-direction:column;gap:32px\"><div><span class=\"tag dk\">Game 1</span></div><h1 class=\"h1\" style=\"font-size:120px\">Grammar<br>Auction</h1><p class=\"en\" style=\"font-size:40px;font-weight:800\">Each team starts with 1000 points</p><div><button class=\"sbtn\" data-start1000>Give every team 1000</button></div></div>\n  <div class=\"flex1 qlist\" style=\"gap:20px\">\n    <div class=\"qrow\"><span class=\"num\" style=\"width:72px;height:72px;line-height:72px\">1</span><p class=\"qt e\" style=\"font-size:36px\">Make 3 or 4 teams (3–4 students each).</p></div>\n    <div class=\"qrow\"><span class=\"num\" style=\"width:72px;height:72px;line-height:72px\">2</span><p class=\"qt e\" style=\"font-size:36px\">Read a sentence. Is it right or wrong? Talk in your team.</p></div>\n    <div class=\"qrow\"><span class=\"num\" style=\"width:72px;height:72px;line-height:72px\">3</span><p class=\"qt e\" style=\"font-size:36px\">Bid 100 to 500 points if you think it is right.</p></div>\n    <div class=\"qrow\"><span class=\"num\" style=\"width:72px;height:72px;line-height:72px\">4</span><p class=\"qt e\" style=\"font-size:36px\">Right = win your bid. Wrong = lose it. Fix a wrong one = +100!</p></div>\n  </div>",
  "style": "flex-direction:row;align-items:center;gap:64px",
  "classOnly": true
 },
 {
  "t": "game",
  "g": "auction",
  "bg": "ink"
 },
 {
  "t": "raw",
  "cls": "sky",
  "title": "Game 2: Quiz Board rules",
  "html": "<div style=\"width:620px;display:flex;flex-direction:column;gap:32px\"><div><span class=\"tag dk\">Game 2</span></div><h1 class=\"h1\" style=\"font-size:120px\">Quiz<br>Board</h1><p class=\"en\" style=\"font-size:40px;font-weight:800\">20 seconds per question</p></div>\n  <div class=\"flex1 qlist\" style=\"gap:20px\">\n    <div class=\"qrow\"><span class=\"num\" style=\"width:72px;height:72px;line-height:72px\">1</span><p class=\"qt e\" style=\"font-size:36px\">Same teams. Take turns.</p></div>\n    <div class=\"qrow\"><span class=\"num\" style=\"width:72px;height:72px;line-height:72px\">2</span><p class=\"qt e\" style=\"font-size:36px\">Choose a topic and points: “Have to for 200!”</p></div>\n    <div class=\"qrow\"><span class=\"num\" style=\"width:72px;height:72px;line-height:72px\">3</span><p class=\"qt e\" style=\"font-size:36px\">The teacher taps the square. Answer together.</p></div>\n    <div class=\"qrow\"><span class=\"num\" style=\"width:72px;height:72px;line-height:72px\">4</span><p class=\"qt e\" style=\"font-size:36px\">Wrong? The next team can steal the points!</p></div>\n  </div>",
  "style": "flex-direction:row;align-items:center;gap:64px",
  "classOnly": true
 },
 {
  "t": "game",
  "g": "board",
  "bg": "ink"
 },
 {
  "t": "game",
  "g": "wheel",
  "bg": "ink"
 },
 {
  "t": "game",
  "g": "build"
 },
 {
  "t": "game",
  "g": "boss",
  "bg": "yel"
 },
 {
  "t": "game",
  "g": "mystery"
 },
 {
  "t": "game",
  "g": "mime",
  "bg": "sky"
 },
 {
  "t": "raw",
  "cls": "",
  "title": "Can you…?",
  "html": "<div><h2 class=\"h2\">Can you…?</h2><p class=\"sub\" style=\"margin-top:8px\">Thumb up = yes. Middle = a little. Down = not yet. Tap a line when the class is confident.</p></div>\n  <div class=\"g2 r3 flex1\">\n    <button class=\"qrow ln checkit\"><span class=\"tick\">✓</span><p class=\"qt e\" style=\"font-size:40px;text-align:left\">make a sentence with an action</p></button>\n    <button class=\"qrow ln checkit\"><span class=\"tick\">✓</span><p class=\"qt e\" style=\"font-size:40px;text-align:left\">use am, is and are</p></button>\n    <button class=\"qrow ln checkit\"><span class=\"tick\">✓</span><p class=\"qt e\" style=\"font-size:40px;text-align:left\">make negatives and questions</p></button>\n    <button class=\"qrow ln checkit\"><span class=\"tick\">✓</span><p class=\"qt e\" style=\"font-size:40px;text-align:left\">give commands, politely too</p></button>\n    <button class=\"qrow ln checkit\"><span class=\"tick\">✓</span><p class=\"qt e\" style=\"font-size:40px;text-align:left\">ask for permission with may</p></button>\n    <button class=\"qrow ln checkit\"><span class=\"tick\">✓</span><p class=\"qt e\" style=\"font-size:40px;text-align:left\">talk about rules with must and have to</p></button>\n  </div>"
 },
 {
  "t": "bye",
  "chips": [
   [
    "I have to…",
    "peach"
   ],
   [
    "May I…?",
    "mint"
   ],
   [
    "Don’t…!",
    "skyb"
   ]
  ]
 }
],
  games: { auction: AUCTION, board: BOARD, wheel: WHEEL, build: BUILD, boss: { cmds: BOSS, may: BOSS_MAY }, mystery: { title: "Mystery Place", unit: "Place", items: PLACES }, mime: MIME }
};
})();
