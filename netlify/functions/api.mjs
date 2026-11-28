/* ClivEdu Class API: Telegram sign-in, progress sync, teacher progress, homework and reports.
   Storage: one Netlify Blobs store "clivedu".
     users/<tgId>      Telegram profile + display name, group, notify flag, lastSeen
     progress/<tgId>   points, picks, awarded, settings, mistakes, games, days (points per day)
     sessions/<sha256(token)>  { uid, t }   (older sessions/<token> keys are moved on first use)
     cids/<number>     { uid }        c-ID number → Telegram id (each account gets exactly one)
     photos/<tgId>     the c-ID photo (webp/jpeg/png, re-encoded in the browser, max 160 KB)
     apps/<tgId>/<app> { data, t }    progress from other Clive apps saved to the c-ID (clive, vaqt, sprachwerk, vault, clivedu)
     grants/<code>     { uid, app, t } one-time code the hub hands to an app (2 minutes)
     rl/<key>          rate-limit counters
     logins/<code>     { t } → { t, token, uid } once the student pressed START in the bot
     meta/teacher      { uid }        the first account that claims the teacher role keeps it
     meta/homework     [ { id, t, text, to, file? { id, name, size } } ]   file.id = Telegram file_id
     meta/webhook      { url, v }     which address Telegram is sending updates to
     meta/open         { keys: [] }   lessons the teacher opened early from the bot ("7", "v1", …)
     meta/tstate       teacher's bot conversation state (what the next message is for)
     meta/quizzes      [ quiz ids ]   class quizzes, newest last
     quizzes/<id>      { id, t, title, to, items, sent: [uid], res: { uid: { name, i, right, done } } }
     runs/<tgId>       the quiz a student is answering now { qz, title, items, i, right }
     polls/<pollId>    { uid, qz, i } so an answer can be matched to its quiz
   The bot token lives only in the TELEGRAM_BOT_TOKEN environment variable. */
import { getStore } from "@netlify/blobs";
import { createHmac, createHash, randomBytes } from "node:crypto";

const env = k => (globalThis.Netlify && Netlify.env.get(k)) || (globalThis.process && process.env[k]) || "";
const TOKEN = () => env("TELEGRAM_BOT_TOKEN");
const BOT_NAME = () => env("TELEGRAM_BOT_USERNAME") || "clivedubot";
const TEACHER_CODE = () => env("TEACHER_CODE") || "clivedu";
const db = () => globalThis.__CLV_DB || getStore({ name: "clivedu", consistency: "strong" });
const tg = (method, body) => (globalThis.__CLV_TG || defaultTg)(method, body);
async function defaultTg(method, body) {
  const r = await fetch(`https://api.telegram.org/bot${TOKEN()}/${method}`, {
    method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body || {})
  });
  return r.json().catch(() => ({ ok: false }));
}
/* multipart upload (sendDocument with a real file) */
async function tgUpload(method, fields, file, fileField) {
  if (globalThis.__CLV_TGUP) return globalThis.__CLV_TGUP(method, fields, file);
  const f = new FormData();
  for (const [k, v] of Object.entries(fields)) f.append(k, typeof v === "string" ? v : JSON.stringify(v));
  f.append(fileField, file, file.name || "file");
  const r = await fetch(`https://api.telegram.org/bot${TOKEN()}/${method}`, { method: "POST", body: f });
  return r.json().catch(() => ({ ok: false }));
}
const MAX_FILE = 5 * 1024 * 1024;          /* Netlify functions take about 6 MB per request */

const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
const rid = n => randomBytes(n).toString("hex");
const esc = s => String(s == null ? "" : s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const day = (t = Date.now()) => new Date(t + 5 * 3600e3).toISOString().slice(0, 10);        /* Tashkent date */
const get = async k => { try { return await db().get(k, { type: "json" }); } catch (e) { return null; } };
const put = (k, v) => db().setJSON(k, v);
const del = k => db().delete(k).catch(() => {});
const SESSION_DAYS = 180, LOGIN_MIN = 10;
const sha = s => createHash("sha256").update(String(s)).digest("hex");
const skey = tok => "sessions/" + sha("clv-session:" + tok);

/* ---------- c-ID: one number per Telegram account ----------
   12 digits: 2 for the year it was issued, 9 random, 1 Luhn check digit. Shown as "2611 4832 0075". */
function luhn(d) { let s = 0; for (let i = 0; i < d.length; i++) { let n = +d[d.length - 1 - i]; if (i % 2 === 0) { n *= 2; if (n > 9) n -= 9; } s += n; } return String((10 - s % 10) % 10); }
const cidOk = n => /^\d{12}$/.test(n) && luhn(n.slice(0, 11)) === n[11];
async function ensureCid(u) {
  if (u.cid && cidOk(u.cid)) return u;
  for (let i = 0; i < 8; i++) {
    const body = String(new Date().getUTCFullYear() % 100).padStart(2, "0") + String(parseInt(rid(5), 16) % 1e9).padStart(9, "0");
    const n = body + luhn(body);
    if (await get("cids/" + n)) continue;
    await put("cids/" + n, { uid: String(u.id), t: Date.now() });
    const fresh = (await get("users/" + u.id)) || u;
    if (fresh.cid && cidOk(fresh.cid)) { await del("cids/" + n); return fresh; }   /* another request got there first */
    fresh.cid = n; fresh.cidAt = Date.now();
    await put("users/" + u.id, fresh);
    Object.assign(u, fresh);
    return u;
  }
  return u;
}
/* every student who already has progress gets a c-ID without doing anything */
export async function backfillCids() {
  const { blobs } = await db().list({ prefix: "users/" });
  let made = 0;
  for (const b of blobs) { const u = await get(b.key); if (u && u.id && !u.cid && !u.cidDeleted) { await ensureCid(u); made++; } }
  /* old rate-limit counters */
  const rl = await db().list({ prefix: "rl/" }); let gone = 0;
  for (const b of rl.blobs) { const x = await get(b.key); if (!x || (x.exp || 0) < Date.now()) { await del(b.key); gone++; } }
  const gr = await db().list({ prefix: "grants/" });
  for (const b of gr.blobs) { const x = await get(b.key); if (!x || Date.now() - (x.t || 0) > 120e3) { await del(b.key); gone++; } }
  return { users: blobs.length, made, gone };
}
/* clean display names: no control or direction-changing characters (they can disguise a name) */
const cleanName = s => String(s || "").normalize("NFC").replace(/[\u0000-\u001f\u007f-\u009f\u200b-\u200f\u202a-\u202e\u2066-\u2069\ufeff]/g, "").replace(/\s+/g, " ").trim().slice(0, 40);

/* ---------- rate limits (fixed windows, kept in Blobs) ---------- */
async function limited(key, max, sec) {
  const w = Math.floor(Date.now() / (sec * 1000)), k = "rl/" + sha(key).slice(0, 32) + "-" + w;
  const n = ((await get(k)) || {}).n || 0;
  if (n >= max) return true;
  await put(k, { n: n + 1, exp: (w + 1) * sec * 1000 });
  return false;
}
const ipOf = (req, context) => (context && context.ip) || req.headers.get("x-nf-client-connection-ip") || (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "?";

/* ---------- which websites may call the API from the browser ---------- */
/* Apps that sign in with c-ID through the hub on clivesystems. Each gets its own token that can only
   read the card and its own saved data. Add a new app here (and to the card's pass) to plug it in. */
const CLIENTS = {
  sprachwerk: { name: "Sprachwerk", origins: ["https://sprachwerkclive.netlify.app"] },
  vault: { name: "Vault Studio", origins: ["https://wondervaultyoutube.netlify.app"] },
  clivedu: { name: "ClivEdu", origins: ["https://mellifluous-elf-d3aaf0.netlify.app"] }
};
const devOrigins = () => env("CID_DEV_ORIGIN").split(",").map(x => x.trim()).filter(Boolean);
const clientOrigins = app => (CLIENTS[app] ? CLIENTS[app].origins : []).concat(env("CID_DEV_ORIGIN") ? devOrigins() : []);
const ORIGINS = [/^https:\/\/clivedu\.me$/, /^https:\/\/cliveduclass\.netlify\.app$/, /^https:\/\/([a-z0-9-]+--)?clivesystems\.netlify\.app$/];
const allowed = o => !!o && (ORIGINS.some(r => r.test(o)) || Object.values(CLIENTS).some(c => c.origins.includes(o)) || devOrigins().includes(o));
const HUB = o => !!o && (ORIGINS.some(r => r.test(o)) || devOrigins().includes(o));
const siteLabel = o => /clivesystems/.test(o || "") ? "c-ID · clivesystems.netlify.app" : "clivedu.me";
const PHOTO_MAX = 160 * 1024, APP_MAX = 300 * 1024, APPS = ["clive", "vaqt", "sprachwerk", "vault", "clivedu"];
function imageType(buf) {
  const b = new Uint8Array(buf.slice(0, 12));
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return "image/jpeg";
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return "image/png";
  if (b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 && b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) return "image/webp";
  return "";
}

/* ---------- progress merging (same rules on every device) ---------- */
const PREF = ["clv-picks-", "clv-awarded-"];
const PLAIN = ["clv-points", "clv-settings", "clv-name", "clv-mistakes", "clv-games", "clv-daily", "clv-words"];
const tracked = k => PLAIN.includes(k) || PREF.some(p => k.startsWith(p) && k.length < 80);
const byId = (a, b, cap) => {
  const m = new Map();
  [...(Array.isArray(a) ? a : []), ...(Array.isArray(b) ? b : [])].forEach(x => {
    if (!x || typeof x !== "object" || !x.id) return;
    const o = m.get(x.id); m.set(x.id, o ? Object.assign({}, o, x, { fx: o.fx || x.fx }) : x);
  });
  return [...m.values()].sort((x, y) => (x.t || 0) - (y.t || 0)).slice(-cap);
};
function mergeKey(k, a, b) {
  if (b === undefined) return a;
  if (a === undefined || a === null) a = undefined;
  if (k === "clv-points") {
    const o = Object.assign({}, a || {});
    for (const [l, v] of Object.entries(b || {})) if (typeof v === "number" && v >= 0 && v < 1e5) o[l] = Math.max(o[l] || 0, v);
    return o;
  }
  if (k.startsWith("clv-picks-")) return Object.assign({}, a || {}, b || {});
  if (k.startsWith("clv-awarded-")) return [...new Set([...(a || []), ...(Array.isArray(b) ? b : [])])].slice(0, 500);
  if (k === "clv-mistakes") return byId(a, b, 200);
  if (k === "clv-games") return byId(a, b, 100);
  if (k === "clv-daily") {                                     /* daily challenge: one entry per day, keep the last 120 days */
    const o = Object.assign({}, a || {}, (b && typeof b === "object") ? b : {});
    return Object.fromEntries(Object.entries(o).filter(([d]) => /^\d{4}-\d\d-\d\d$/.test(d)).sort().slice(-120));
  }
  if (k === "clv-words") {                                     /* Word bank: per word, the newer review wins */
    const o = Object.assign({}, a || {});
    for (const [w, v] of Object.entries((b && typeof b === "object") ? b : {})) if (v && typeof v === "object" && w.length < 80 && (!o[w] || (+v.t || 0) >= (+o[w].t || 0))) o[w] = { b: Math.max(0, Math.min(5, +v.b || 0)), n: +v.n || 0, t: +v.t || 0 };
    return Object.fromEntries(Object.entries(o).slice(-800));
  }
  return b;                                                    /* settings, name: newest wins */
}
const total = d => Object.values((d && d["clv-points"]) || {}).reduce((s, v) => s + (+v || 0), 0);
function mergeProgress(p, incoming) {
  p = p || { data: {}, days: {} };
  p.data = p.data || {}; p.days = p.days || {};
  const before = total(p.data);
  for (const [k, v] of Object.entries(incoming || {})) if (tracked(k)) p.data[k] = mergeKey(k, p.data[k], v);
  const gain = total(p.data) - before;
  if (gain > 0) { const d = day(); p.days[d] = (p.days[d] || 0) + gain; }
  if (JSON.stringify(p).length > 400000) p.data["clv-mistakes"] = (p.data["clv-mistakes"] || []).slice(-60);
  return p;
}
function summary(user, p) {
  const d = (p && p.data) || {}, pts = d["clv-points"] || {};
  const mistakes = (d["clv-mistakes"] || []).filter(m => !m.fx);
  const games = d["clv-games"] || [];
  return {
    id: user.id, cid: user.cid || "", name: user.name || user.first || "Student", username: user.username || "", group: user.group || "", avatar: AV.test(user.avatar || "") ? user.avatar : "",
    quizzes: (user.quizzes || []).length, lastQuiz: (user.quizzes || []).slice(-1)[0] || null,
    lastSeen: user.lastSeen || 0, joined: user.joined || 0, notify: user.notify !== false,
    points: total(d), today: ((p && p.days) || {})[day()] || 0, lessons: Object.keys(pts).filter(l => pts[l] > 0).length,
    perLesson: pts, open: mistakes.length, streak: streak((p && p.days) || {}), games: games.length,
    bestGame: games.reduce((b, g) => Math.max(b, g.score || 0), 0),
    daily: Object.keys(d["clv-daily"] || {}).length, dailyToday: !!(d["clv-daily"] || {})[day()], dailyStreak: streak(d["clv-daily"] || {})
  };
}
function streak(days) {
  let n = 0, t = Date.now();
  if (!days[day(t)]) t -= 864e5;                                /* today not started yet: count from yesterday */
  while (days[day(t)]) { n++; t -= 864e5; }
  return n;
}

/* ---------- auth ---------- */
async function who(req) {
  const h = req.headers.get("authorization") || "";
  const tok = h.startsWith("Bearer ") ? h.slice(7).trim() : "";
  if (!/^[a-f0-9]{48}$/.test(tok)) return null;
  let s = await get(skey(tok));
  if (!s) {                                                  /* a session from before tokens were hashed: move it */
    s = await get("sessions/" + tok);
    if (s) { await put(skey(tok), s); await del("sessions/" + tok); }
  }
  if (!s || Date.now() - s.t > SESSION_DAYS * 864e5) { if (s) await del(skey(tok)); return null; }
  const user = await get("users/" + s.uid);
  if (!user) return null;
  return { tok, uid: String(s.uid), user, app: s.app || "" };
}
async function isTeacher(uid) { const t = await get("meta/teacher"); return !!t && String(t.uid) === String(uid); }
const AV = /^[gbn]\d\d$/;
const pub = (u, teacher) => ({ id: u.id, cid: u.cid || "", photo: u.photo || 0, name: u.name || u.first, first: cleanName(u.first), username: u.username || "", group: u.group || "", notify: u.notify !== false, teacher: !!teacher, avatar: AV.test(u.avatar || "") ? u.avatar : "" });

/* ---------- Telegram webhook setup ---------- */
const secret = () => createHmac("sha256", TOKEN()).update("clivedu-webhook").digest("hex").slice(0, 48);
/* the address students see in links (clivedu.me); the bot reads lesson files from the Netlify address */
const PUBLIC = () => (env("PUBLIC_URL") || "https://clivedu.me").replace(/\/$/, "");
let INTERNAL = "";
function siteUrl(req, context) {
  let u = (context && context.site && context.site.url) || new URL(req.url).origin;
  return u.replace(/^http:\/\//, "https://").replace(/\/$/, "");
}
async function ensureWebhook(req, context, force) {
  if (!TOKEN()) return { ok: false, why: "no token" };
  const prod = !context || !context.deploy || !context.deploy.context || context.deploy.context === "production";
  if (!prod) return { ok: false, why: "not production" };
  const url = siteUrl(req, context) + "/api/tg";
  const have = await get("meta/webhook");
  if (!force && have && have.url === url && have.v === HOOK_V) return { ok: true, url };
  const r = await tg("setWebhook", { url, secret_token: secret(), allowed_updates: ["message", "callback_query", "poll_answer"], drop_pending_updates: false });
  if (r && r.ok) {
    await put("meta/webhook", { url, v: HOOK_V, t: Date.now() });
    await tg("setMyCommands", { commands: STUDENT_CMDS });
    const t = await get("meta/teacher"); if (t) await teacherCommands(t.uid);
  }
  return { ok: !!(r && r.ok), url, why: r && r.description };
}

const HOOK_V = 3;
const STUDENT_CMDS = [
  { command: "daily", description: "Daily challenge · Kunlik sinov" },
  { command: "quiz", description: "Quiz yourself · Test ishlash" },
  { command: "me", description: "My points and progress · Ballarim" },
  { command: "homework", description: "Latest homework · Uy vazifasi" },
  { command: "site", description: "Open ClivEdu · Saytni ochish" },
  { command: "stop", description: "Pause messages · Xabarlarni to‘xtatish" },
  { command: "help", description: "Help · Yordam" }
];
const teacherCommands = uid => tg("setMyCommands", { scope: { type: "chat", chat_id: Number(uid) }, commands: [
  { command: "panel", description: "Teacher panel: everything in one place" },
  { command: "report", description: "Today's class report" },
  { command: "students", description: "Students and their progress" },
  { command: "daily", description: "Today's daily challenge" },
  { command: "quiz", description: "Send a quiz to the class" },
  { command: "cancel", description: "Cancel what I'm doing" }
] });

/* ---------- bot ---------- */
const kb = (text, url) => ({ inline_keyboard: [[{ text, url }]] });
const say = (chat, text, extra) => tg("sendMessage", Object.assign({ chat_id: chat, text, parse_mode: "HTML", disable_web_page_preview: true }, extra || {}));
async function upsertUser(f) {
  const id = String(f.id), old = (await get("users/" + id)) || {};
  const u = Object.assign({ joined: Date.now(), notify: true }, old, {
    id, first: f.first_name || "", last: f.last_name || "", username: f.username || "", lang: f.language_code || "", lastSeen: Date.now()
  });
  if (!u.name) u.name = cleanName([f.first_name, f.last_name].filter(Boolean).join(" ")) || f.username || "Student";
  await put("users/" + id, u);
  return { u, isNew: !old.id };
}
async function myHomework(u) {
  const hw = (await hwAll());
  return hw.filter(h => inTarget(h.to, u.group)).slice(-5);
}
const KINDS = { document: ["sendDocument", "document"], photo: ["sendPhoto", "photo"], audio: ["sendAudio", "audio"], voice: ["sendVoice", "voice"], video: ["sendVideo", "video"] };
/* the file inside a Telegram message, if any */
function fileOf(m) {
  if (m.document) return { id: m.document.file_id, name: m.document.file_name || "file", size: m.document.file_size || 0, type: m.document.mime_type || "", kind: "document" };
  if (m.photo && m.photo.length) { const p = m.photo[m.photo.length - 1]; return { id: p.file_id, name: "photo.jpg", size: p.file_size || 0, type: "image/jpeg", kind: "photo" }; }
  if (m.audio) return { id: m.audio.file_id, name: m.audio.file_name || "audio.mp3", size: m.audio.file_size || 0, type: m.audio.mime_type || "audio/mpeg", kind: "audio" };
  if (m.voice) return { id: m.voice.file_id, name: "voice.ogg", size: m.voice.file_size || 0, type: m.voice.mime_type || "audio/ogg", kind: "voice" };
  if (m.video) return { id: m.video.file_id, name: m.video.file_name || "video.mp4", size: m.video.file_size || 0, type: m.video.mime_type || "video/mp4", kind: "video" };
  return null;
}
/* One homework to one chat: the file (with the text as its caption when it fits), else a message. */
async function sendHomework(chat, head, h, markup) {
  const text = h.text ? `${head}\n\n${esc(h.text)}` : head;
  const extra = markup ? { reply_markup: markup } : {};
  if (!h.file) return say(chat, text, extra);
  const kind = KINDS[h.file.kind] ? h.file.kind : "document", [method, field] = KINDS[kind];
  if (text.length <= 1000) return tg(method, Object.assign({ chat_id: chat, [field]: h.file.id, caption: text, parse_mode: "HTML" }, extra));
  const r = await say(chat, text, extra);
  if (!r || !r.ok) return r;
  return tg(method, { chat_id: chat, [field]: h.file.id });
}
async function onUpdate(up, req, context) {
  if (up && up.callback_query) return onCallback(up.callback_query, req, context);
  if (up && up.poll_answer) return onPollAnswer(up.poll_answer, PUBLIC());
  const m = up && up.message;
  if (!m || !m.from || !m.chat || m.chat.type !== "private" || m.from.is_bot) return;
  const text = String(m.text || "").trim(), chat = m.chat.id, site = PUBLIC();
  const [cmd0, arg = ""] = text.split(/\s+/, 2);
  const cmd = cmd0.replace(/@\w+$/, "").toLowerCase();
  if (cmd === "/start" && arg.startsWith("login_")) {
    const code = arg.slice(6);
    const L = /^[a-z0-9]{12}$/.test(code) ? await get("logins/" + code) : null;
    if (!L || Date.now() - L.t > LOGIN_MIN * 60e3) return say(chat, "⌛ This sign-in link is old. Go back to the website and tap <b>Sign in with Telegram</b> again.\n\nBu havola eskirgan. Saytga qaytib, qaytadan bosing.");
    if (L.token) return say(chat, "This sign-in link was already used. · Bu havola ishlatilgan.");
    /* Ask first. Someone could send you their own sign-in link; pressing Yes would give them your account. */
    return say(chat, `\u{1F510} <b>Sign in to ${esc(L.site || "clivedu.me")}?</b>\n\nTap <b>Yes</b> only if <b>you</b> just pressed “Sign in” on that website yourself. Never press it for a link someone sent you.\n\nFaqat o‘zingiz hozir saytda “Kirish”ni bosgan bo‘lsangiz, <b>Ha</b>ni bosing. Birov yuborgan havola uchun hech qachon bosmang.`,
      { reply_markup: { inline_keyboard: [[btn("✅ Yes, it’s me · Ha, menman", "lg:" + code)], [btn("✖ No · Yo‘q", "lgx:" + code)]] } });
  }
  const { u } = await upsertUser(m.from);
  const teacher = await isTeacher(u.id);
  if (teacher) {
    if (cmd === "/cancel") { await setState(null); return panelHome(chat); }
    if (cmd === "/panel" || cmd === "/start" || cmd === "/menu") { await setState(null); return panelHome(chat); }
    if (cmd === "/students") return panelStudents(chat, null, 0);
    if (cmd === "/quiz") return panelQuizTopics(chat, null, site);
    if (cmd === "/report") return sendReport(u.id, site);
    if (!cmd.startsWith("/")) {
      const st = await getState();
      if (st) return teacherInput(m, st, site);
      return say(chat, "Tap a button to tell me what to do. · /panel", { reply_markup: { inline_keyboard: [[btn("\u{1F39B} Teacher panel", "p:home")]] } });
    }
  }
  if (cmd === "/quiz") return quizMenu(chat, site);
  if (cmd === "/daily") return say(chat, "\u{1F4C5} <b>Daily challenge · Kunlik sinov</b>\nWord of the day, say it into the microphone, 5 questions. 2 minutes!\nKun so‘zi, talaffuz va 5 ta savol.", { reply_markup: kb("\u{1F4C5} Start · Boshlash", site + "/daily/") });
  /* a student wrote to the bot: pass it on to the teacher, who can answer with one tap */
  if (!teacher && !cmd.startsWith("/") && (text || fileOf(m) || m.sticker)) {
    const t = await get("meta/teacher");
    if (t) {
      const who = `${esc(u.name)}${u.username ? " @" + esc(u.username) : ""}${u.group ? " · " + gname(u.group) : ""}`;
      if (text && !m.caption && !fileOf(m)) await say(t.uid, `\u{1F4AC} <b>${who}</b> wrote:\n\n${esc(text.slice(0, 3500))}`, { reply_markup: { inline_keyboard: [[btn("↩️ Reply", "p:dm:" + u.id), btn("\u{1F464} Profile", "p:s:" + u.id)]] } });
      else { await tg("copyMessage", { chat_id: t.uid, from_chat_id: chat, message_id: m.message_id }); await say(t.uid, `\u{1F4AC} From <b>${who}</b> ↑`, { reply_markup: { inline_keyboard: [[btn("↩️ Reply", "p:dm:" + u.id), btn("\u{1F464} Profile", "p:s:" + u.id)]] } }); }
      return say(chat, "✓ Sent to your teacher. The answer comes here.\nO‘qituvchingizga yuborildi. Javob shu yerga keladi.");
    }
  }
  if (cmd === "/start") {
    if (u.notify === false) { u.notify = true; await put("users/" + u.id, u); }
    return say(chat, `\u{1F44B} <b>Hello, ${esc(u.name)}!</b> This is the ClivEdu Class bot.\n\n• Sign in on the website with Telegram to save your points.\n• Homework from your teacher comes here.\n• /quiz — quiz yourself any time.\n• /me shows your points.\n• Write here and your teacher gets your message.\n\nSalom! Saytga Telegram orqali kiring — ballaringiz saqlanadi, uy vazifalari shu yerga keladi.`, { reply_markup: kb("\u{1F4DA} Open ClivEdu", site + "/") });
  }
  if (cmd === "/me") {
    const s = summary(u, await get("progress/" + u.id));
    return say(chat, `⭐ <b>${esc(s.name)}</b>\nPoints · Ballar: <b>${s.points}</b>\nToday · Bugun: <b>${s.today}</b>\nLessons · Darslar: <b>${s.lessons}</b>\n\u{1F525} Streak · Ketma-ket kunlar: <b>${s.streak}</b>\n\u{1F3AF} Mistakes to fix · Xatolar: <b>${s.open}</b>\n\u{1F3AE} Live games: <b>${s.games}</b>`, { reply_markup: kb("\u{1F464} My profile", site + "/me/") });
  }
  if (cmd === "/homework") {
    const hw = await myHomework(u);
    if (!hw.length) return say(chat, "No homework yet. \u{1F389}\nHozircha uy vazifasi yo‘q.");
    const h = hw[hw.length - 1];
    const head = `\u{1F4DD} <b>Homework · Uy vazifasi</b> (${day(h.t)})`;
    if (h.file) return sendHomework(chat, head, h, null);
    return say(chat, `${head}\n\n${esc(h.text)}`);
  }
  if (cmd === "/site") return say(chat, "\u{1F4DA} ClivEdu Class", { reply_markup: kb("Open · Ochish", site + "/") });
  if (cmd === "/stop") { u.notify = false; await put("users/" + u.id, u); return say(chat, "\u{1F515} OK, no more messages from me. Send /start to turn them on again.\nXabarlar to‘xtatildi. Qayta yoqish: /start"); }
  return say(chat, "I am the ClivEdu Class bot \u{1F916}\n/quiz — quiz yourself · test ishlash\n/me — my points · ballarim\n/homework — homework · uy vazifasi\n/site — open the website\n/stop — pause messages\n\nWrite me a message and your teacher gets it. · Yozing — o‘qituvchingiz oladi.", { reply_markup: kb("\u{1F4DA} Open ClivEdu", site + "/") });
}

/* ---------- teacher ---------- */
async function allStudents() {
  const { blobs } = await db().list({ prefix: "users/" });
  const t = await get("meta/teacher");
  const rows = await Promise.all(blobs.map(async b => {
    const u = await get(b.key); if (!u) return null;
    const p = await get("progress/" + u.id);
    return { u, p, teacher: !!t && String(t.uid) === String(u.id) };
  }));
  return rows.filter(Boolean);
}
function commonMistakes(rows, since = 0) {
  const m = new Map();
  rows.forEach(({ u, p }) => (((p && p.data) || {})["clv-mistakes"] || []).forEach(x => {
    if ((x.t || 0) < since) return;
    const k = (x.l || "") + "|" + (x.q || "") + "|" + (x.c || "");
    const o = m.get(k) || { l: x.l, lt: x.lt || x.l, q: x.q, c: x.c, who: new Set(), wrong: {} };
    o.who.add(u.name || u.first); if (x.a) o.wrong[x.a] = (o.wrong[x.a] || 0) + 1; m.set(k, o);
  }));
  return [...m.values()].map(o => ({ l: o.l, lt: o.lt, q: o.q, c: o.c, n: o.who.size, who: [...o.who].slice(0, 12),
    top: Object.entries(o.wrong).sort((a, b) => b[1] - a[1])[0]?.[0] || "" })).sort((a, b) => b.n - a.n).slice(0, 30);
}
async function sendReport(chat, site) {
  const rows = (await allStudents()).filter(r => !r.teacher);
  const today = day(), startToday = Date.parse(today + "T00:00:00+05:00");
  const active = rows.map(r => ({ r, s: summary(r.u, r.p) })).filter(x => x.s.today > 0 || x.s.lastSeen >= startToday).sort((a, b) => b.s.today - a.s.today);
  const quiet = rows.length - active.length;
  const cm = commonMistakes(rows, startToday).slice(0, 5);
  let t = `\u{1F4CA} <b>Class report · ${today}</b>\n\n<b>Active today: ${active.length}</b> of ${rows.length}\n`;
  t += active.slice(0, 30).map((x, i) => `${i + 1}. ${esc(x.s.name)} — ⭐${x.s.today} today (${x.s.points} total)${x.s.open ? ` · ${x.s.open} to fix` : ""}`).join("\n") || "Nobody yet.";
  if (quiet) t += `\n\n\u{1F634} Not active today: ${quiet}`;
  const daily = rows.map(r => summary(r.u, r.p)).filter(x => x.dailyToday);
  t += `\n\n\u{1F4C5} Daily challenge today: <b>${daily.length}</b>${daily.length ? " — " + daily.slice(0, 15).map(x => esc(x.name.split(" ")[0]) + (x.dailyStreak > 1 ? " \u{1F525}" + x.dailyStreak : "")).join(", ") : ""}`;
  if (cm.length) t += `\n\n<b>Most common mistakes today</b>\n` + cm.map(c => `• ${esc(c.q || c.lt)} → <b>${esc(c.c)}</b> (${c.n} student${c.n > 1 ? "s" : ""}${c.top ? `, said “${esc(c.top)}”` : ""})`).join("\n");
  return say(chat, t.slice(0, 4000), { reply_markup: kb("\u{1F4CA} Open Progress", site + "/teacher/progress/") });
}

/* run fn over a list, a few at a time (Telegram allows about 30 messages a second) */
async function each(list, fn, n = 8) {
  const out = [];
  for (let i = 0; i < list.length; i += n) out.push(...await Promise.all(list.slice(i, i + n).map(x => fn(x).catch(e => (console.error(e), null)))));
  return out;
}
/* Homework sent before HW_CLEARED_AT was deleted for everyone (teacher's request, 20 Nov 2026).
   The first read after the deploy removes it from the store for good. */
const HW_CLEARED_AT = Date.parse("2026-11-20T10:32:33Z");
async function hwAll() {
  const hw = (await get("meta/homework")) || [], keep = hw.filter(h => (h.t || 0) > HW_CLEARED_AT);
  if (keep.length !== hw.length) await put("meta/homework", keep);
  return keep;
}
/* ---------- sending to the class (website and bot use the same code) ---------- */
/* Groups: a = Elementary (Mon, Thu, Fri 14:00), b = Beginner (Mon, Thu 15:30).
   "notb" = everyone outside the Beginner group (Elementary and students with no group yet). */
const GNAME = { a: "Elementary", b: "Beginner" };
const gname = g => GNAME[g] || "no group";
const TO = { all: "all", a: "group:a", b: "group:b" };
const toLabel = to => to === "all" ? "everyone" : to === "notb" ? "Elementary + no group" : gname(to.slice(6));
const inTarget = (to, g) => to === "all" || (to === "notb" && (g || "") !== "b") || "group:" + (g || "") === to;
async function recipients(to) {
  return (await allStudents()).filter(r => !r.teacher && r.u.notify !== false && inTarget(to, r.u.group));
}
async function broadcast({ text, file, to, isHw, site }) {
  const rows = await recipients(to);
  const head = isHw ? "\u{1F4DD} <b>Homework · Uy vazifasi</b>" : "\u{1F4E2} <b>From your teacher · O‘qituvchidan</b>";
  const item = { id: rid(4), t: Date.now(), text: text || "", to };
  if (file) item.file = file;
  if (isHw) { const hw = (await hwAll()); hw.push(item); await put("meta/homework", hw.slice(-50)); }
  let sent = 0; const failed = [];
  await each(rows, async r => {
    const res = await sendHomework(r.u.id, head, item, kb("\u{1F4DA} Open ClivEdu", site + "/"));
    if (res && res.ok) sent++; else failed.push(r.u.name || r.u.first);
  });
  return { sent, failed, of: rows.length, file: !!item.file };
}
/* a plain message with a button to everyone in the target */
async function announce(to, text, button) {
  const rows = await recipients(to); let sent = 0;
  await each(rows, async r => { const x = await say(r.u.id, text, button ? { reply_markup: button } : {}); if (x && x.ok) sent++; });
  return { sent, of: rows.length };
}

/* ---------- the website's own files: lesson plan and question bank ---------- */
let siteCache = null;
async function siteData() {
  const site = INTERNAL || PUBLIC();
  if (siteCache && Date.now() - siteCache.t < 600e3) return siteCache;
  const load = async path => { try { const r = await fetch(site + "/" + path); return r.ok ? await r.text() : ""; } catch (e) { return ""; } };
  const run = (src, w) => { try { new Function("window", "localStorage", "fetch", "location", src)(w, { getItem: () => null, setItem() {} }, undefined, undefined); } catch (e) { console.error("site file", e.message); } return w; };
  const [plan, sets, qb] = await Promise.all([load("lessons/plan.js"), load("lessons/live-sets.js"), load("lessons/qbank.js")]);
  const W = {}; run(plan, W); run(sets, W); run(qb, W);
  const LIVE = W.LIVE_SETS || [], B = W.CLV_QBANK;
  /* vocabulary: every lesson with word cards */
  const vocab = [];
  if (B) for (const s of LIVE.filter(x => x.path)) {
    const src = await load(s.path); if (!/"t":\s*"words"|t:\s*"words"/.test(src)) continue;
    const w = {}; run(src, w); vocab.push(...B.vocab(B.words(w.LESSON)));
  }
  siteCache = { t: Date.now(), plan: W.PLAN || null, sets: LIVE, vocab };
  return siteCache;
}
/* Telegram quiz polls: question ≤ 300 characters, answers ≤ 100, all different */
function pollItems(rows, n) {
  const out = [];
  for (const r0 of shuffleArr(rows)) {
    const r = Array.isArray(r0) ? { q: r0[0], o: r0.slice(1) } : r0;
    if (!r || !r.q || !Array.isArray(r.o) || r.o.length < 2 || r.audio) continue;
    const q = plain(r.q), o = r.o.map(plain);
    if (q.length > 290 || o.some(x => !x || x.length > 100) || new Set(o).size !== o.length) continue;
    const order = shuffleArr(o.map((t, i) => ({ t, ok: i === 0 })));
    out.push({ q, o: order.map(x => x.t), c: order.findIndex(x => x.ok) });
    if (out.length >= n) break;
  }
  return out;
}
const plain = s => String(s == null ? "" : s).replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const shuffleArr = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
async function quizTopics(site) {
  const d = await siteData(site);
  const t = [{ id: "all", title: "Everything · Hammasi" }];
  if (d.vocab.length) t.push({ id: "vocab", title: "Vocabulary · So‘zlar" });
  d.sets.filter(s => (s.qs || []).some(q => !q.audio)).forEach(s => t.push({ id: s.id, title: plain(s.title) }));
  return t;
}
async function quizQuestions(site, topic, n) {
  const d = await siteData(site);
  let rows;
  if (topic === "vocab") rows = d.vocab.slice();
  else if (topic === "all") rows = d.sets.filter(s => !/^lis/.test(s.id)).flatMap(s => s.qs || []).concat(shuffleArr(d.vocab).slice(0, 40));
  else rows = ((d.sets.find(s => s.id === topic) || {}).qs || []).slice();
  return pollItems(rows, n);
}

/* ---------- quizzes in Telegram ---------- */
async function startRun(uid, quiz) {
  await put("runs/" + uid, { qz: quiz.id, title: quiz.title, items: quiz.items, i: 0, right: 0, t: Date.now() });
  return sendPollFor(uid);
}
async function sendPollFor(uid) {
  const run = await get("runs/" + uid); if (!run) return null;
  const it = run.items[run.i]; if (!it) return null;
  const r = await tg("sendPoll", { chat_id: uid, question: `${run.i + 1}/${run.items.length} · ${it.q}`.slice(0, 300), options: it.o.map(text => ({ text })),
    type: "quiz", correct_option_id: it.c, is_anonymous: false, explanation: ("✓ " + it.o[it.c]).slice(0, 200) });
  if (r && r.ok && r.result && r.result.poll) await put("polls/" + r.result.poll.id, { uid: String(uid), qz: run.qz, i: run.i, t: Date.now() });
  return r;
}
async function onPollAnswer(pa, site) {
  const P = await get("polls/" + pa.poll_id); if (!P) return;
  await del("polls/" + pa.poll_id);
  const uid = P.uid, run = await get("runs/" + uid);
  if (!run || run.qz !== P.qz || run.i !== P.i) return;
  const it = run.items[run.i];
  if ((pa.option_ids || [])[0] === it.c) run.right++;
  run.i++;
  const done = run.i >= run.items.length;
  await put("runs/" + uid, run);
  if (run.qz !== "self") {                                      /* a class quiz: keep the teacher's results up to date */
    const qz = await get("quizzes/" + run.qz);
    if (qz) {
      const u = await get("users/" + uid);
      qz.res = qz.res || {}; qz.res[uid] = { name: (u && (u.name || u.first)) || "Student", i: run.i, right: run.right, done };
      await put("quizzes/" + run.qz, qz);
      if (done && qz.sent && qz.sent.every(id => qz.res[id] && qz.res[id].done) && !qz.told) {
        qz.told = true; await put("quizzes/" + run.qz, qz);
        const t = await get("meta/teacher"); if (t) await say(t.uid, quizResultText(qz), { reply_markup: { inline_keyboard: [[{ text: "\u{1F39B} Panel", callback_data: "p:home" }]] } });
      }
    }
  }
  if (!done) return sendPollFor(uid);
  await del("runs/" + uid);
  const u = await get("users/" + uid);
  if (u) { u.quizzes = (u.quizzes || []).concat({ t: Date.now(), title: run.title, right: run.right, of: run.items.length, cls: run.qz !== "self" }).slice(-30); await put("users/" + uid, u); }
  const pct = Math.round(run.right / run.items.length * 100);
  return say(uid, `\u{1F3C1} <b>${run.right} / ${run.items.length}</b> · ${pct}%\n${pct >= 90 ? "Excellent! 🏆" : pct >= 70 ? "Well done! 👏" : pct >= 50 ? "Good try! 💪" : "Keep practising! 📚"}\n\n${esc(run.title)}`,
    { reply_markup: { inline_keyboard: [[{ text: "\u{1F501} Another quiz · Yana", callback_data: "q:menu" }], [{ text: "\u{1F3AE} Play a game on the website", url: site + "/play/?solo=1" }]] } });
}
function quizResultText(qz) {
  const rows = Object.values(qz.res || {}).sort((a, b) => b.right - a.right);
  const waiting = (qz.sent || []).length - rows.length;
  return `\u{1F4C8} <b>Quiz results</b> · ${esc(qz.title)}\n${day(qz.t)} · ${qz.items.length} questions · ${toLabel(qz.to)}\n\n` +
    (rows.map((r, k) => `${k + 1}. ${esc(r.name)} — <b>${r.right}/${qz.items.length}</b>${r.done ? "" : ` (answering: ${r.i}/${qz.items.length})`}`).join("\n") || "Nobody has answered yet.") +
    (waiting > 0 ? `\n\n⏳ Not started: ${waiting}` : "");
}

/* ---------- teacher panel in Telegram ---------- */
const btn = (text, data) => ({ text, callback_data: data });
const ubtn = (text, url) => ({ text, url });
async function setState(st) { if (st) await put("meta/tstate", Object.assign({ t: Date.now() }, st)); else await del("meta/tstate"); }
async function getState() { const s = await get("meta/tstate"); return s && Date.now() - s.t < 3 * 3600e3 ? s : null; }
/* show a panel screen: edit the message that was tapped, or send a new one */
const screen = (chat, msgId, text, rows) => msgId
  ? tg("editMessageText", { chat_id: chat, message_id: msgId, text, parse_mode: "HTML", disable_web_page_preview: true, reply_markup: { inline_keyboard: rows } }).then(r => r && r.ok ? r : say(chat, text, { reply_markup: { inline_keyboard: rows } }))
  : say(chat, text, { reply_markup: { inline_keyboard: rows } });
const ago = t => { if (!t) return "never"; const m = Math.round((Date.now() - t) / 60e3); return m < 2 ? "just now" : m < 60 ? m + " min ago" : m < 1440 ? Math.round(m / 60) + " h ago" : Math.round(m / 1440) + " days ago"; };
/* hour may be 15.5 = 15:30 */
const tashOpen = (dateStr, hour) => { const [y, mo, d] = dateStr.split("-").map(Number); return Date.UTC(y, mo - 1, d) + ((hour == null ? 16 : hour) - 5) * 3600e3; };
const hm = h => String(Math.floor(h)).padStart(2, "0") + ":" + String(Math.round((h % 1) * 60)).padStart(2, "0");
async function lessonList(site) {
  const P = (await siteData(site)).plan; if (!P) return [];
  const forced = ((await get("meta/open")) || {}).keys || [];
  const pad = n => String(n).padStart(2, "0");
  const out = [];
  const add = (key, title, date, hour, path, always) => out.push({ key: String(key), title: plain(title), date, path, hour: hour == null ? P.unlockHour : hour,
    open: !!always || forced.includes(String(key)) || Date.now() >= tashOpen(date, hour == null ? P.unlockHour : hour), forced: forced.includes(String(key)) });
  if (P.revision) add("rev", P.revision.title, P.revision.date, null, P.revision.path, P.revision.openNow);
  (P.starter || []).concat(P.extras || []).forEach(x => add(x.key, x.title, x.date, x.openHour, x.path, x.openNow));
  /* plan.js has already dated every lesson (l.key) by its schedule */
  (P.weeks || []).flatMap(w => w.lessons).forEach(l => {
    const ds = l.key;
    if (l.ready) add(l.n, "Lesson " + l.n + " · " + l.title, ds, null, `lessons/${pad(l.n)}/`, (P.openNowLessons || []).includes(l.n));
    else out.push({ key: String(l.n), title: plain("Lesson " + l.n + " · " + l.title), date: ds, notReady: true });
  });
  /* Group B · Beginner (plan.js dates them too) */
  const B = P.beginner;
  if (B && B.all) B.all.forEach(l => {
    if (l.ready) add(l.id, "Beginner " + l.n + " · " + l.title, l.key, B.unlockHour, l.folder, !!l.done);
    else out.push({ key: l.id, title: plain("Beginner " + l.n + " · " + l.title), date: l.key, notReady: true });
  });
  return out.sort((a, b) => a.date < b.date ? 1 : -1);
}

async function panelHome(chat, msgId) {
  const rows = (await allStudents()).filter(r => !r.teacher), today = day(), start = Date.parse(today + "T00:00:00+05:00");
  const active = rows.filter(r => { const s = summary(r.u, r.p); return s.today > 0 || s.lastSeen >= start; }).length;
  const hw = ((await hwAll())).slice(-1)[0];
  const st = await getState();
  const text = `\u{1F39B} <b>Teacher panel</b> · ${today}\n\n\u{1F465} Students: <b>${rows.length}</b> · active today: <b>${active}</b>\n\u{1F4DD} Last homework: ${hw ? day(hw.t) + (hw.file ? " \u{1F4CE}" : "") : "none"}` +
    (st ? `\n\n⏳ Waiting for: <b>${esc(stateName(st))}</b> · /cancel to stop` : "");
  return screen(chat, msgId, text, [
    [btn("\u{1F4CA} Report today", "p:rep"), btn("\u{1F465} Students", "p:stu:0")],
    [btn("\u{1F4DD} Send homework", "p:hw"), btn("\u{1F4E2} Message class", "p:msg")],
    [btn("❓ Class quiz", "p:qz"), btn("\u{1F4C8} Quiz results", "p:qr")],
    [btn("\u{1F3AE} Live game", "p:live"), btn("\u{1F4C5} Lessons", "p:les")],
    [btn("\u{1F4C4} Today’s homework PDF", "p:ahw"), btn("\u{1F4DA} Homework list", "p:hwl")],
    [ubtn("\u{1F310} Website", PUBLIC() + "/")]
  ]);
}
const stateName = s => ({ hw: "the homework (text or a file)", msg: "a message for the class", dm: "a message for " + (s.name || "a student"), code: "the live game code" }[s.mode] || s.mode);
const PER = 8;
async function panelStudents(chat, msgId, page) {
  const rows = (await allStudents()).filter(r => !r.teacher).map(r => summary(r.u, r.p)).sort((a, b) => (b.today - a.today) || (b.points - a.points));
  const pages = Math.max(1, Math.ceil(rows.length / PER)); page = Math.min(Math.max(0, page), pages - 1);
  const list = rows.slice(page * PER, page * PER + PER);
  const kbRows = list.map(s => [btn(`${s.name}${s.group ? " · " + gname(s.group) : ""} · ⭐${s.today}/${s.points}`, "p:s:" + s.id)]);
  const nav = []; if (page > 0) nav.push(btn("← Back", "p:stu:" + (page - 1))); if (page < pages - 1) nav.push(btn("More →", "p:stu:" + (page + 1)));
  if (nav.length) kbRows.push(nav);
  kbRows.push([btn("\u{1F39B} Panel", "p:home")]);
  return screen(chat, msgId, `\u{1F465} <b>Students</b> (${rows.length}) · page ${page + 1}/${pages}\n⭐ today / total. Tap a name for details.\n<i>Only you can see this.</i>`, kbRows);
}
async function panelStudent(chat, msgId, id) {
  const u = await get("users/" + id); if (!u) return panelStudents(chat, msgId, 0);
  const p = await get("progress/" + id), s = summary(u, p), d = (p && p.data) || {};
  const mist = (d["clv-mistakes"] || []).filter(m => !m.fx).slice(-3).reverse();
  const games = (d["clv-games"] || []).slice(-3).reverse();
  const qz = (u.quizzes || []).slice(-3).reverse();
  let t = `\u{1F464} <b>${esc(s.name)}</b>${s.username ? " · @" + esc(s.username) : ""}\nGroup: <b>${s.group ? gname(s.group) : "none"}</b> · seen ${ago(s.lastSeen)}${s.notify ? "" : " · \u{1F515} messages off"}\n\n` +
    `⭐ Points: <b>${s.points}</b> (today ${s.today})\n\u{1F525} Streak: ${s.streak} days · \u{1F4DA} Lessons: ${s.lessons}\n\u{1F3AE} Games: ${s.games} (best ${s.bestGame}) · ❓ Bot quizzes: ${s.quizzes}\n\u{1F4C5} Daily challenge: ${s.daily} days · streak ${s.dailyStreak}${s.dailyToday ? " · done today ✓" : ""}\n\u{1F3AF} Mistakes to fix: ${s.open}`;
  if (mist.length) t += `\n\n<b>Latest mistakes</b>\n` + mist.map(m => `• ${esc(plain(m.q).slice(0, 80))} → <b>${esc(plain(m.c))}</b>${m.a ? ` (said “${esc(plain(m.a))}”)` : ""}`).join("\n");
  if (games.length) t += `\n\n<b>Latest games</b>\n` + games.map(g => `• ${day(g.t)} ${g.solo ? "solo · " + esc(g.set || "") + ` · ${g.right}/${g.of}` : "class game · place " + g.pos + "/" + g.of} · ${g.score} pts`).join("\n");
  if (qz.length) t += `\n\n<b>Latest quizzes</b>\n` + qz.map(q => `• ${day(q.t)} ${esc(q.title)} · ${q.right}/${q.of}`).join("\n");
  return screen(chat, msgId, t.slice(0, 4000), [
    [btn((s.group === "a" ? "✓ " : "") + "Elementary", `p:g:${id}:a`), btn((s.group === "b" ? "✓ " : "") + "Beginner", `p:g:${id}:b`), btn((!s.group ? "✓ " : "") + "No group", `p:g:${id}:n`)],
    [btn("✉️ Message " + s.name.split(" ")[0], "p:dm:" + id), btn("❓ Send a quiz", "p:qs1:" + id)],
    [btn("← Students", "p:stu:0"), btn("\u{1F39B} Panel", "p:home")]
  ]);
}
async function panelQuizTopics(chat, msgId, site, forUid) {
  const topics = await quizTopics(site);
  const rows = []; for (let i = 0; i < topics.length; i += 2) rows.push(topics.slice(i, i + 2).map(t => btn(t.title.slice(0, 30), `p:qn:${t.id}:${forUid || ""}`)));
  rows.push([btn("\u{1F39B} Panel", "p:home")]);
  return screen(chat, msgId, forUid ? `❓ <b>Quiz for one student</b>\nChoose the topic:` : `❓ <b>Class quiz</b>\nStudents answer in Telegram. You get the results.\nChoose the topic:`, rows);
}
async function panelLessons(chat, msgId, site) {
  const L = await lessonList(site);
  const ready = L.filter(l => !l.notReady), next = L.filter(l => l.notReady).slice(-1)[0];
  const locked = ready.filter(l => !l.open), forced = ready.filter(l => l.forced), open = ready.filter(l => l.open).slice(0, 6);
  let t = `\u{1F4C5} <b>Lessons</b>\n\n<b>Open for students</b>\n` + (open.map(l => `✅ ${esc(l.title)}${l.forced ? " (opened early)" : ""}`).join("\n") || "none");
  const hh = String(((await siteData()).plan || {}).unlockHour || 14).padStart(2, "0");
  if (locked.length) t += `\n\n<b>Ready but locked</b>\n` + locked.slice(-8).map(l => `\u{1F512} ${esc(l.title)} · opens ${l.date} at ${hm(l.hour != null ? l.hour : +hh)}`).join("\n");
  if (next) t += `\n\nNext lesson to write: ${esc(next.title)} (${next.date})`;
  const rows = [];
  locked.slice(-4).reverse().forEach(l => rows.push([btn("\u{1F513} Open now: " + l.title.slice(0, 28), "p:lo:" + l.key)]));
  forced.slice(0, 3).forEach(l => rows.push([btn("\u{1F512} Undo early opening: " + l.title.slice(0, 20), "p:lc:" + l.key)]));
  open.slice(0, 4).forEach(l => rows.push([btn("\u{1F4E3} Tell students: " + l.title.slice(0, 26), "p:la:" + l.key)]));
  rows.push([btn("\u{1F39B} Panel", "p:home")]);
  return screen(chat, msgId, t.slice(0, 4000), rows);
}
const targetRows = (prefix) => [[btn("\u{1F465} Everyone", prefix + "all"), btn("Elementary", prefix + "a"), btn("Beginner", prefix + "b")], [btn("✖️ Cancel", "p:cancel")]];

async function onCallback(cq, req, context) {
  const data = String(cq.data || ""), chat = cq.message && cq.message.chat && cq.message.chat.id, msgId = cq.message && cq.message.message_id;
  const site = PUBLIC(), uid = String(cq.from.id);
  const ack = (text, alert) => tg("answerCallbackQuery", { callback_query_id: cq.id, text: text || "", show_alert: !!alert });
  if (!chat) return ack();
  /* sign-in confirmation */
  if (data.startsWith("lg:") || data.startsWith("lgx:")) {
    const no = data.startsWith("lgx:"), code = data.slice(no ? 4 : 3);
    const L = /^[a-z0-9]{12}$/.test(code) ? await get("logins/" + code) : null;
    const edit = text => tg("editMessageText", { chat_id: chat, message_id: msgId, text, parse_mode: "HTML" });
    if (no) { if (L && !L.token) await put("logins/" + code, Object.assign({}, L, { refused: true })); await ack("OK"); return edit("✖ Not signed in. · Kirilmadi."); }
    if (!L || L.refused || Date.now() - L.t > LOGIN_MIN * 60e3) { await ack(); return edit("⌛ This sign-in link is old. Go back to the website and tap <b>Sign in</b> again.\n\nBu havola eskirgan. Saytda qaytadan bosing."); }
    if (L.token) { await ack("Already done"); return; }
    const { u: u0, isNew } = await upsertUser(cq.from);
    u0.notify = true; delete u0.cidDeleted; await put("users/" + u0.id, u0);
    const u = await ensureCid(u0);
    const token = rid(24);
    await put(skey(token), { uid: u.id, t: Date.now() });
    await put("logins/" + code, { t: L.t, site: L.site, token, uid: u.id });
    await ack("✅");
    const cidTxt = u.cid ? `\n\u{1FAAA} Your c-ID: <code>${u.cid.replace(/(\d{4})(?=\d)/g, "$1 ")}</code>` : "";
    await edit(`✅ <b>You are signed in, ${esc(u.name)}!</b>${cidTxt}\nGo back to the website — it opens by itself.\n\nKirdingiz! Saytga qayting.`);
    if (isNew) { const t = await get("meta/teacher"); if (t && String(t.uid) !== u.id) say(t.uid, `\u{1F44B} New student signed in: <b>${esc(u.name)}</b>${u.username ? " @" + esc(u.username) : ""}`); }
    return;
  }
  /* student buttons */
  if (data === "q:menu") { await ack(); return quizMenu(chat, site); }
  if (data.startsWith("q:")) {
    await ack("Starting… · Boshlanmoqda");
    const topic = data.slice(2), topics = await quizTopics(site), tp = topics.find(t => t.id === topic) || topics[0];
    const items = await quizQuestions(site, tp.id, 10);
    if (!items.length) return say(chat, "No questions for that topic yet.");
    return startRun(uid, { id: "self", title: tp.title, items });
  }
  if (!data.startsWith("p:")) return ack();
  if (!(await isTeacher(uid))) return ack("Teacher only.", true);
  const [, a, b, c, d] = data.split(":");
  if (a === "home") { await ack(); return panelHome(chat, msgId); }
  if (a === "cancel") { await setState(null); await ack("Cancelled"); return panelHome(chat, msgId); }
  if (a === "rep") { await ack(); return sendReport(chat, site); }
  if (a === "stu") { await ack(); return panelStudents(chat, msgId, +b || 0); }
  if (a === "s") { await ack(); return panelStudent(chat, msgId, b); }
  if (a === "g") {
    const u = await get("users/" + b); if (u) { u.group = c === "n" ? "" : c; await put("users/" + b, u); }
    await ack(u ? "Saved" : "Not found"); return panelStudent(chat, msgId, b);
  }
  if (a === "dm") {
    const u = await get("users/" + b); if (!u) return ack("Not found", true);
    await setState({ mode: "dm", uid: b, name: u.name || u.first }); await ack();
    return say(chat, `✉️ Send your message for <b>${esc(u.name || u.first)}</b> now: text, a photo, a file, a voice note…\nOnly ${esc(u.name || u.first)} gets it.`, { reply_markup: { inline_keyboard: [[btn("✖️ Cancel", "p:cancel")]] } });
  }
  if (a === "hw" || a === "msg") {
    await setState({ mode: a }); await ack();
    return say(chat, a === "hw" ? "\u{1F4DD} <b>Send the homework now.</b>\nText, or a file (PDF, Word, photo, audio…) with the task in the caption. Then I ask who gets it."
      : "\u{1F4E2} <b>Send the message for the class now.</b> Text, a photo or a file. Then I ask who gets it.", { reply_markup: { inline_keyboard: [[btn("✖️ Cancel", "p:cancel")]] } });
  }
  if (a === "to") {                                           /* send the draft homework / message */
    const st = await getState();
    if (!st || !st.draft || !TO[b]) return ack("Nothing to send. Start again.", true);
    await ack("Sending…");
    await setState(null);
    if (st.mode === "code") {
      const r = await announce(TO[b], `\u{1F3AE} <b>Class game! · Sinf o‘yini!</b>\nCode · Kod: <b>${esc(st.draft.code)}</b>\nTap the button to join. · Qo‘shilish uchun bosing.`, { inline_keyboard: [[ubtn("\u{1F3AE} Join the game", `${site}/play/?code=${st.draft.code}`)]] });
      return screen(chat, msgId, `✓ Game code sent to <b>${r.sent}</b> of ${r.of} (${toLabel(TO[b])}).`, [[btn("\u{1F39B} Panel", "p:home")]]);
    }
    const r = await broadcast({ text: st.draft.text, file: st.draft.file, to: TO[b], isHw: st.mode === "hw", site });
    return screen(chat, msgId, `✓ ${st.mode === "hw" ? "Homework" : "Message"} sent to <b>${r.sent}</b> of ${r.of} (${toLabel(TO[b])})${r.file ? " with the file" : ""}.` + (r.failed.length ? `\nNot delivered: ${esc(r.failed.join(", "))}` : ""), [[btn("\u{1F39B} Panel", "p:home")]]);
  }
  if (a === "ahw") {                                       /* send today's lesson homework PDF now */
    await ack("Checking…");
    const r = await autoHomework({ force: true });
    if (r.skip === "already sent") return screen(chat, msgId, `\u{1F4C4} Today’s homework was already sent (${r.sent} of ${r.of} students).`, [[btn("\u{1F39B} Panel", "p:home")]]);
    if (r.skip) return screen(chat, msgId, `\u{1F4C4} Not sent: ${esc(r.skip)}.`, [[btn("\u{1F39B} Panel", "p:home")]]);
    if (r.error) return screen(chat, msgId, `✗ ${esc(r.error)}`, [[btn("\u{1F39B} Panel", "p:home")]]);
    return;                                                 /* autoHomework already told the teacher */
  }
  if (a === "hwl") {
    await ack();
    const hw = ((await hwAll())).slice(-6).reverse();
    return screen(chat, msgId, `\u{1F4DA} <b>Latest homework</b>\n\n` + (hw.map(h => `• ${day(h.t)} · ${toLabel(h.to)}${h.file ? " · \u{1F4CE} " + esc(h.file.name) : ""}\n  ${esc((h.text || "").slice(0, 120))}`).join("\n") || "None yet."),
      hw.map(h => [btn(`\u{1F5D1} Delete ${day(h.t)} ${(h.text || h.file && h.file.name || "").slice(0, 18)}`, "p:hwd:" + h.id)]).concat([[btn("\u{1F39B} Panel", "p:home")]]));
  }
  if (a === "hwd") {
    const hw = (await hwAll()); await put("meta/homework", hw.filter(h => h.id !== b));
    await ack("Deleted from the website and /homework"); return onCallback(Object.assign({}, cq, { data: "p:hwl", id: cq.id + "x" }), req, context);
  }
  if (a === "qz") { await ack(); return panelQuizTopics(chat, msgId, site); }
  if (a === "qs1") { await ack(); return panelQuizTopics(chat, msgId, site, b); }
  if (a === "qn") {                                            /* topic chosen: how many questions? */
    await ack();
    const rows = [[5, 10, 15].map(n => btn(n + " questions", `p:qc:${b}:${n}:${c || ""}`)), [btn("\u{1F39B} Panel", "p:home")]];
    return screen(chat, msgId, `❓ How many questions?`, rows);
  }
  if (a === "qc") {                                            /* number chosen: who gets it? (one student: send now) */
    if (d) return sendClassQuiz(chat, msgId, site, b, +c, { uid: d }, ack);
    await ack();
    return screen(chat, msgId, `❓ Who gets the quiz?`, [[btn("\u{1F465} Everyone", `p:qt:${b}:${c}:all`), btn("Group A", `p:qt:${b}:${c}:a`), btn("Group B", `p:qt:${b}:${c}:b`)], [btn("\u{1F39B} Panel", "p:home")]]);
  }
  if (a === "qt") return sendClassQuiz(chat, msgId, site, b, +c, { to: TO[d] || "all" }, ack);
  if (a === "qr") {
    await ack();
    if (b) { const qz = await get("quizzes/" + b); return screen(chat, msgId, qz ? quizResultText(qz) : "Not found.", [[btn("\u{1F504} Refresh", "p:qr:" + b), btn("← Quizzes", "p:qr")], [btn("\u{1F39B} Panel", "p:home")]]); }
    const ids = ((await get("meta/quizzes")) || []).slice(-6).reverse();
    const list = (await Promise.all(ids.map(id => get("quizzes/" + id)))).filter(Boolean);
    return screen(chat, msgId, `\u{1F4C8} <b>Quiz results</b>\n` + (list.length ? "Tap a quiz:" : "No class quizzes yet. Send one with ❓ Class quiz."),
      list.map(q => [btn(`${day(q.t)} · ${q.title.slice(0, 22)} · ${Object.values(q.res || {}).filter(r => r.done).length}/${(q.sent || []).length} done`, "p:qr:" + q.id)]).concat([[btn("\u{1F39B} Panel", "p:home")]]));
  }
  if (a === "live") {
    await ack();
    return screen(chat, msgId, `\u{1F3AE} <b>Live game</b>\n\n1. Open the host page on the classroom computer and create a game.\n2. Tap <b>Send the code</b> and type the code from the board: every student gets a Join button.\n\nStudents can also play <b>by themselves</b> any time (solo).`, [
      [ubtn("\u{1F5A5} Open the host page", site + "/live/")], [btn("\u{1F4E3} Send the code to students", "p:code")],
      [btn("\u{1F9D1}‍\u{1F393} Invite students to play solo", "p:solo")], [btn("\u{1F39B} Panel", "p:home")]]);
  }
  if (a === "code") { await setState({ mode: "code" }); await ack(); return say(chat, "\u{1F3AE} Type the game code from the board (like <b>ABCDE1</b>).", { reply_markup: { inline_keyboard: [[btn("✖️ Cancel", "p:cancel")]] } }); }
  if (a === "solo") {
    await ack("Sending…");
    const r = await announce("all", "\u{1F9D1}‍\u{1F393} <b>Practise by yourself!</b> · Yakka mashq qiling!\nQuiz, word order, right or wrong, vocabulary… no teacher needed.", { inline_keyboard: [[ubtn("\u{1F3AE} Play now · O‘ynash", site + "/play/?solo=1")]] });
    return screen(chat, msgId, `✓ Sent to ${r.sent} of ${r.of} students.`, [[btn("\u{1F39B} Panel", "p:home")]]);
  }
  if (a === "les") { await ack(); return panelLessons(chat, msgId, site); }
  if (a === "lo" || a === "lc") {
    const o = (await get("meta/open")) || { keys: [] };
    o.keys = a === "lo" ? [...new Set(o.keys.concat(b))] : o.keys.filter(k => k !== b);
    await put("meta/open", o);
    await ack(a === "lo" ? "Opened for students" : "Back to its normal time");
    return panelLessons(chat, msgId, site);
  }
  if (a === "la") {
    const l = (await lessonList(site)).find(x => x.key === b && x.open); if (!l) return ack("That lesson is not open.", true);
    await ack("Sending…");
    const r = await announce("all", `\u{1F4DA} <b>New lesson · Yangi dars</b>\n${esc(l.title)}`, { inline_keyboard: [[ubtn("Open the lesson · Darsni ochish", site + "/" + (l.path || ""))]] });
    return screen(chat, msgId, `✓ Told ${r.sent} of ${r.of} students about “${esc(l.title)}”.`, [[btn("\u{1F4C5} Lessons", "p:les"), btn("\u{1F39B} Panel", "p:home")]]);
  }
  return ack();
}
async function sendClassQuiz(chat, msgId, site, topic, n, target, ack) {
  const topics = await quizTopics(site), tp = topics.find(t => t.id === topic) || topics[0];
  const items = await quizQuestions(site, tp.id, n || 10);
  if (!items.length) return ack("No questions for that topic.", true);
  await ack("Sending the quiz…");
  let rows;
  if (target.uid) { const u = await get("users/" + target.uid); rows = u ? [{ u }] : []; }
  else rows = await recipients(target.to);
  const qz = { id: rid(4), t: Date.now(), title: tp.title, to: target.uid ? "one" : target.to, items, sent: [], res: {} };
  await each(rows, async r => {
    await say(r.u.id, `❓ <b>Quiz from your teacher · O‘qituvchidan test</b>\n${esc(tp.title)} · ${items.length} questions. Tap your answers below. · Javoblarni bosing.`);
    const x = await startRun(r.u.id, qz); if (x && x.ok) qz.sent.push(String(r.u.id));
  });
  await put("quizzes/" + qz.id, qz);
  const ids = (await get("meta/quizzes")) || []; ids.push(qz.id); await put("meta/quizzes", ids.slice(-30));
  return screen(chat, msgId, `✓ Quiz “${esc(tp.title)}” (${items.length} questions) sent to <b>${qz.sent.length}</b> student${qz.sent.length === 1 ? "" : "s"}.\nI send you the results when everyone has finished.`, [[btn("\u{1F4C8} Results now", "p:qr:" + qz.id)], [btn("\u{1F39B} Panel", "p:home")]]);
}
async function quizMenu(chat, site) {
  const topics = await quizTopics(site);
  const rows = []; for (let i = 0; i < topics.length; i += 2) rows.push(topics.slice(i, i + 2).map(t => btn(t.title.slice(0, 30), "q:" + t.id)));
  return say(chat, "❓ <b>Quiz yourself · O‘zingizni sinang</b>\n10 questions. Choose a topic: · Mavzuni tanlang:", { reply_markup: { inline_keyboard: rows } });
}
/* the teacher sent something while the bot was waiting for it */
async function teacherInput(m, st, site) {
  const chat = m.chat.id, text = String(m.text || m.caption || "").trim(), file = fileOf(m);
  if (st.mode === "dm") {
    const r = await tg("copyMessage", { chat_id: st.uid, from_chat_id: chat, message_id: m.message_id });
    if (r && r.ok) await tg("sendMessage", { chat_id: st.uid, text: "✉️ From your teacher · O‘qituvchingizdan", reply_to_message_id: r.result.message_id });
    await setState(null);
    return say(chat, r && r.ok ? `✓ Sent to <b>${esc(st.name)}</b>.` : `✗ Not delivered (${esc((r && r.description) || "error")}). They may have blocked the bot.`, { reply_markup: { inline_keyboard: [[btn("← " + st.name, "p:s:" + st.uid), btn("\u{1F39B} Panel", "p:home")]] } });
  }
  if (st.mode === "code") {
    const code = text.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!/^[A-Z]{5}[1-9]$/.test(code)) return say(chat, "The code has 5 letters and 1 number, like <b>ABCDE1</b>. Try again, or /cancel.");
    await setState({ mode: "code", draft: { code } });
    return say(chat, `\u{1F3AE} Code <b>${code}</b>. Who gets it?`, { reply_markup: { inline_keyboard: targetRows("p:to:") } });
  }
  if (st.mode === "hw" || st.mode === "msg") {
    if (!text && !file) return say(chat, "Send text or a file, or /cancel.");
    if (file && file.size > 20 * 1024 * 1024) return say(chat, "That file is over 20 MB: students could not download it on the website. Send a smaller one, or /cancel.");
    await setState({ mode: st.mode, draft: { text: text.slice(0, 3500), file } });
    return say(chat, `${st.mode === "hw" ? "\u{1F4DD} Homework" : "\u{1F4E2} Message"} ready${file ? " with \u{1F4CE} " + esc(file.name) : ""}. Who gets it?`, { reply_markup: { inline_keyboard: targetRows("p:to:") } });
  }
}


/* ---------- homework PDF after class (scheduled: netlify/functions/homework-cron.mjs) ----------
   Each group's homework.pdf (made by tools/make-homework.py with the lesson) goes out once, after class:
   Elementary (group A, lessons/NN/) from 15:30 to every student outside the Beginner group,
   Beginner (group B, beginner/NN/) from 17:00 to the Beginner group. The teacher gets a copy and a note. */
export async function autoHomework({ force = false, site = "" } = {}) {
  if (site) INTERNAL = site;
  /* plan.js autoHomework: false turns the automatic sending off (the teacher can still send it from /panel) */
  const now = new Date(Date.now() + 5 * 3600e3), hhmm = now.getUTCHours() * 60 + now.getUTCMinutes();
  const today = day(), P = (await siteData()).plan;
  if (!P) return { skip: "plan not found" };
  if (P.autoHomework === false && !force) return { skip: "automatic homework is turned off (plan.js autoHomework: false)" };
  const pad = n => String(n).padStart(2, "0"), B = P.beginner || {};
  const tracks = [
    { id: "a", label: "Lesson", after: 15 * 60 + 30, to: "notb", lesson: (P.all || []).find(l => l.key === today && l.ready), path: l => `lessons/${pad(l.n)}/`, stateKey: today },
    { id: "b", label: "Beginner · Lesson", after: Math.round((B.endHour || 17) * 60), to: "group:b", lesson: (B.all || []).find(l => l.key === today && l.ready && !l.done), path: l => l.folder, stateKey: today + ":b" }
  ];
  const results = [];
  for (const tr of tracks) {
    if (!tr.lesson) { results.push({ group: tr.id, skip: "no lesson today" }); continue; }
    if (!force && hhmm < tr.after) { results.push({ group: tr.id, skip: "before " + hm(tr.after / 60) }); continue; }
    results.push(Object.assign({ group: tr.id }, await sendLessonHomework(tr, today, tr.lesson)));
  }
  const done = results.filter(r => !r.skip);
  if (!done.length) {
    const already = results.find(r => r.skip === "already sent");
    return already ? Object.assign({}, already) : { skip: results.map(r => `${gname(r.group)}: ${r.skip}`).join("; "), results };
  }
  return Object.assign({}, done[0], { results });
}
async function sendLessonHomework(tr, today, lesson) {
  const state = (await get("meta/autohw")) || {}, sk = tr.stateKey;
  if (state[sk] && state[sk].sent != null) return { skip: "already sent", ...state[sk] };
  const t = await get("meta/teacher");
  const name0 = `${tr.label} ${lesson.n}`, base = (INTERNAL || PUBLIC()) + "/" + tr.path(lesson);
  const pdf = await fetch(base + "homework.pdf").catch(() => null);
  if (!pdf || !pdf.ok) {
    if (!state[sk] || !state[sk].warned) {
      state[sk] = { warned: true }; await put("meta/autohw", state);
      if (t) await say(t.uid, `⚠️ The homework PDF for <b>${name0} · ${esc(lesson.title)}</b> is not on the website yet, so it was not sent. I try again every 30 minutes until 20:30.`);
    }
    return { skip: "no homework.pdf yet", lesson: lesson.n };
  }
  let spec = {}; try { const j = await fetch(base + "homework.json"); if (j.ok) spec = await j.json(); } catch (e) {}
  const name = `${tr.id === "b" ? "Beginner-" : ""}Lesson-${lesson.n}-homework.pdf`;
  const file = new File([await pdf.arrayBuffer()], name, { type: "application/pdf" });
  if (!t) return { skip: "no teacher" };
  const up = await tgUpload("sendDocument", { chat_id: t.uid, caption: `\u{1F4CE} Homework for ${name0} (your copy). Sending it to ${toLabel(tr.to)} now.` }, file, "document");
  const d = up && up.ok && up.result && up.result.document;
  if (!d) return { error: "upload failed: " + ((up && up.description) || "error") };
  const text = spec.message || `${name0} · ${lesson.title}. Do it before the next lesson.`;
  const r = await broadcast({ text, file: { id: d.file_id, name, size: file.size, type: "application/pdf", kind: "document" }, to: tr.to, isHw: true, site: PUBLIC() });
  const st2 = (await get("meta/autohw")) || {};
  st2[sk] = { lesson: lesson.n, group: tr.id, sent: r.sent, of: r.of, t: Date.now() };
  const keep = Object.keys(st2).sort().slice(-60); await put("meta/autohw", Object.fromEntries(keep.map(k => [k, st2[k]])));
  await say(t.uid, `✓ Homework for <b>${name0}</b> sent to <b>${r.sent}</b> of ${r.of} students (${toLabel(tr.to)}).` + (r.failed.length ? `\nNot delivered: ${esc(r.failed.join(", "))}` : ""), { reply_markup: { inline_keyboard: [[btn("\u{1F39B} Panel", "p:home")]] } });
  return { lesson: lesson.n, ...r };
}

/* ---------- HTTP ---------- */
export default async (req, context) => {
  const origin = req.headers.get("origin") || "";
  if (req.method === "OPTIONS") {
    if (!allowed(origin)) return new Response(null, { status: 403 });
    return new Response(null, { status: 204, headers: { "access-control-allow-origin": origin, "access-control-allow-methods": "GET, POST, DELETE", "access-control-allow-headers": "authorization, content-type", "access-control-max-age": "600", vary: "origin" } });
  }
  const res = await handle(req, context);
  if (allowed(origin)) { res.headers.set("access-control-allow-origin", origin); res.headers.set("vary", "origin"); }
  return res;
};
async function handle(req, context) {
  const origin = req.headers.get("origin") || "";
  const url = new URL(req.url), path = url.pathname.replace(/^\/api/, "").replace(/\/$/, "") || "/";
  const method = req.method;
  INTERNAL = siteUrl(req, context);
  const body = async () => { try { return await req.json(); } catch (e) { return {}; } };
  try {
    if (path === "/health") {
      const hook = url.searchParams.get("fix") ? await ensureWebhook(req, context, true) : await get("meta/webhook");
      return json({ ok: true, bot: !!TOKEN(), botName: BOT_NAME(), webhook: hook && hook.url ? hook.url : null, teacher: !!(await get("meta/teacher")) });
    }
    if (path === "/tg" && method === "POST") {
      if (!TOKEN() || req.headers.get("x-telegram-bot-api-secret-token") !== secret()) return json({ ok: false }, 403);
      const up = await body();
      /* answer Telegram at once (so it never sends the same update twice), then do the work */
      const work = onUpdate(up, req, context).catch(e => console.error("bot", e));
      if (context && typeof context.waitUntil === "function") { context.waitUntil(work); return json({ ok: true }); }
      await work;
      return json({ ok: true });
    }
    if (path === "/open") return json({ open: (((await get("meta/open")) || {}).keys) || [] });   /* lessons opened early (public) */
    if (path === "/login/start" && method === "POST") {
      if (!TOKEN()) return json({ error: "The bot is not set up yet (TELEGRAM_BOT_TOKEN is missing)." }, 503);
      if (origin && !HUB(origin)) return json({ error: "Sign in with c-ID on clivesystems." }, 403);
      if (await limited("login:" + ipOf(req, context), 8, 600)) return json({ error: "Too many sign-in attempts. Wait 10 minutes. · Juda ko‘p urinish, 10 daqiqa kuting." }, 429);
      const hook = await ensureWebhook(req, context);
      if (!hook.ok) console.error("webhook", hook);
      const code = rid(6);
      await put("logins/" + code, { t: Date.now(), site: siteLabel(origin) });
      return json({ code, link: `https://t.me/${BOT_NAME()}?start=login_${code}`, bot: BOT_NAME(), minutes: LOGIN_MIN });
    }
    if (path === "/login/status") {
      const code = url.searchParams.get("code") || "";
      if (!/^[a-z0-9]{12}$/.test(code)) return json({ error: "bad code" }, 400);
      const L = await get("logins/" + code);
      if (!L || Date.now() - L.t > LOGIN_MIN * 60e3) { if (L) await del("logins/" + code); return json({ state: "expired" }); }
      if (L.refused) { await del("logins/" + code); return json({ state: "refused" }); }
      if (!L.token) return json({ state: "waiting" });
      await del("logins/" + code);
      const u = await get("users/" + L.uid);
      return json({ state: "done", token: L.token, user: pub(u, await isTeacher(L.uid)) });
    }

    /* an app swaps the one-time code from the hub for its own token */
    if (path === "/cid/exchange" && method === "POST") {
      const b = await body(), app = String(b.app || ""), code = String(b.code || "");
      if (!CLIENTS[app] || !/^[a-f0-9]{32}$/.test(code)) return json({ error: "Bad request" }, 400);
      if (await limited("exchange:" + ipOf(req, context), 30, 600)) return json({ error: "Too many tries." }, 429);
      const g = await get("grants/" + code);
      if (g) await del("grants/" + code);
      if (!g || g.app !== app || Date.now() - g.t > 120e3 || !clientOrigins(app).includes(origin)) return json({ error: "This sign-in link has expired. Try again." }, 400);
      const u = await get("users/" + g.uid); if (!u) return json({ error: "Not found" }, 404);
      const token = rid(24);
      await put(skey(token), { uid: g.uid, t: Date.now(), app });
      return json({ token, user: pub(u, false) });
    }

    const me = await who(req);
    if (!me) return json({ error: "Please sign in again." }, 401);
    /* app tokens (Sprachwerk, Vault Studio, …) may only read the card and their own data */
    if (me.app) {
      const own = path === "/cid/app" && url.searchParams.get("app") === me.app;
      if (!(own || (path === "/cid" && method === "GET") || path === "/logout")) return json({ error: "Not allowed for this app." }, 403);
    }
    const touch = async () => { if (Date.now() - (me.user.lastSeen || 0) > 60e3) { me.user.lastSeen = Date.now(); await put("users/" + me.uid, me.user); } };

    if (!me.user.cid) await ensureCid(me.user);
    if (path === "/me") {
      await touch();
      const p = await get("progress/" + me.uid), t = await isTeacher(me.uid);
      return json({ user: pub(me.user, t), data: (p && p.data) || {}, summary: summary(me.user, p), days: (p && p.days) || {} });
    }
    if (path === "/sync" && method === "POST") {
      const b = await body();
      const p = mergeProgress(await get("progress/" + me.uid), b.data);
      await put("progress/" + me.uid, p);
      await touch();
      return json({ ok: true, data: p.data, summary: summary(me.user, p), user: pub(me.user, await isTeacher(me.uid)) });
    }
    if (path === "/profile" && method === "POST") {
      const b = await body();
      if (await limited("profile:" + me.uid, 60, 3600)) return json({ error: "Too many changes. Try again later." }, 429);
      if (typeof b.name === "string" && cleanName(b.name)) { me.user.name = cleanName(b.name); me.user.nameSet = true; }
      if (typeof b.group === "string") me.user.group = ["a", "b", ""].includes(b.group) ? b.group : "";
      if (typeof b.notify === "boolean") me.user.notify = b.notify;
      if (typeof b.avatar === "string") me.user.avatar = AV.test(b.avatar) ? b.avatar : "";
      me.user.lastSeen = Date.now();
      await put("users/" + me.uid, me.user);
      return json({ user: pub(me.user, await isTeacher(me.uid)) });
    }
    if (path === "/logout" && method === "POST") { await del(skey(me.tok)); await del("sessions/" + me.tok); return json({ ok: true }); }
    if (path === "/logout-all" && method === "POST") {         /* sign out every device (lost phone) */
      const { blobs } = await db().list({ prefix: "sessions/" });
      let n = 0;
      for (const b of blobs) { const s = await get(b.key); if (s && String(s.uid) === me.uid) { await del(b.key); n++; } }
      return json({ ok: true, signedOut: n });
    }

    /* ---- c-ID ---- */
    /* the hub on clivesystems asks for a one-time code to hand to an app the user allowed */
    if (path === "/cid/grant" && method === "POST") {
      if (!HUB(origin)) return json({ error: "Not allowed." }, 403);
      const b = await body(), app = String(b.app || "");
      let back = null; try { back = new URL(String(b.redirect || "")); } catch (e) {}
      if (!CLIENTS[app] || !back || !clientOrigins(app).includes(back.origin)) return json({ error: "Unknown app." }, 400);
      if (await limited("grant:" + me.uid, 60, 3600)) return json({ error: "Too many tries." }, 429);
      const code = rid(16);
      await put("grants/" + code, { uid: me.uid, app, t: Date.now() });
      const linked = me.user.apps || {}; linked[app] = linked[app] || Date.now(); me.user.apps = linked; await put("users/" + me.uid, me.user);
      return json({ code, name: CLIENTS[app].name });
    }
    if (path === "/cid") {
      await touch();
      const p = await get("progress/" + me.uid), apps = {};
      for (const a of APPS) { const x = await get("apps/" + me.uid + "/" + a); if (x) apps[a] = { t: x.t }; }
      Object.keys(me.user.apps || {}).forEach(a => { apps[a] = Object.assign({ linked: me.user.apps[a] }, apps[a] || {}); });
      return json({ user: pub(me.user, await isTeacher(me.uid)), cidAt: me.user.cidAt || 0, joined: me.user.joined || 0, summary: me.app ? undefined : summary(me.user, p), apps });
    }
    /* delete my c-ID: the number is retired, the photo and every app's saved data are deleted and every
       device is signed out. Signing in again later opens a brand-new c-ID with a new number. */
    if (path === "/cid/delete" && method === "POST") {
      if (!HUB(origin)) return json({ error: "Not allowed." }, 403);
      const b = await body(), old = me.user.cid || "";
      if (!old || String(b.confirm || "") !== old.slice(-4)) return json({ error: "Type the last 4 digits of your c-ID number to confirm." }, 400);
      await put("cids/" + old, { uid: me.uid, retired: Date.now(), deleted: true });
      await del("photos/" + me.uid);
      for (const a of APPS) await del("apps/" + me.uid + "/" + a);
      if (b.classToo === true) await del("progress/" + me.uid);
      ["cid", "cidAt", "photo", "avatar", "apps", "nameSet"].forEach(k => { delete me.user[k]; });
      me.user.cidOld = (me.user.cidOld || []).concat([old]).slice(-10);
      me.user.cidDeleted = Date.now();
      if (me.user.first || me.user.last) me.user.name = cleanName([me.user.first, me.user.last].filter(Boolean).join(" ")) || me.user.name;
      await put("users/" + me.uid, me.user);
      const { blobs } = await db().list({ prefix: "sessions/" });
      for (const x of blobs) { const ss = await get(x.key); if (ss && String(ss.uid) === me.uid) await del(x.key); }
      return json({ ok: true, deleted: old });
    }
    /* retire this c-ID number and issue a new one; the old number is never given to anyone again */
    if (path === "/cid/renumber" && method === "POST") {
      if (!HUB(origin)) return json({ error: "Not allowed." }, 403);
      if (await limited("renumber:" + me.uid, 3, 86400)) return json({ error: "You can change your number 3 times a day." }, 429);
      const old = me.user.cid;
      if (old) await put("cids/" + old, { uid: me.uid, retired: Date.now() });
      me.user.cid = ""; me.user.cidOld = (me.user.cidOld || []).concat(old ? [old] : []).slice(-10);
      await put("users/" + me.uid, me.user);
      await ensureCid(me.user);
      return json({ user: pub(me.user, await isTeacher(me.uid)), cidAt: me.user.cidAt });
    }
    if (path === "/cid/photo") {
      if (method === "GET") {
        const r = await db().get("photos/" + me.uid, { type: "arrayBuffer" }).catch(() => null);
        if (!r) return json({ error: "No photo" }, 404);
        return new Response(r, { headers: { "content-type": imageType(r) || "application/octet-stream", "cache-control": "private, no-store", "x-content-type-options": "nosniff", "content-security-policy": "default-src 'none'; sandbox" } });
      }
      if (method === "DELETE") { await del("photos/" + me.uid); me.user.photo = 0; await put("users/" + me.uid, me.user); return json({ user: pub(me.user, await isTeacher(me.uid)) }); }
      if (method === "POST") {
        if (await limited("photo:" + me.uid, 20, 3600)) return json({ error: "Too many uploads. Try again in an hour." }, 429);
        const buf = await req.arrayBuffer();
        if (!buf.byteLength || buf.byteLength > PHOTO_MAX) return json({ error: "The picture must be under 160 KB." }, 413);
        if (!imageType(buf)) return json({ error: "That is not a picture." }, 415);
        await db().set("photos/" + me.uid, buf);
        me.user.photo = Date.now(); await put("users/" + me.uid, me.user);
        return json({ user: pub(me.user, await isTeacher(me.uid)) });
      }
    }
    if (path === "/cid/app") {
      const app = url.searchParams.get("app") || "";
      if (!APPS.includes(app)) return json({ error: "Unknown app" }, 400);
      if (method === "GET") { const x = await get("apps/" + me.uid + "/" + app); return json({ data: x ? x.data : null, t: x ? x.t : 0 }); }
      if (method === "POST") {
        if (await limited("app:" + me.uid, 240, 3600)) return json({ error: "Too many saves. Try again later." }, 429);
        const text = await req.text();
        if (text.length > APP_MAX) return json({ error: "Too large" }, 413);
        let b; try { b = JSON.parse(text); } catch (e) { return json({ error: "Bad data" }, 400); }
        if (!b || typeof b.data !== "object" || b.data === null || Array.isArray(b.data)) return json({ error: "Bad data" }, 400);
        const t = Date.now(); await put("apps/" + me.uid + "/" + app, { data: b.data, t });
        return json({ ok: true, t });
      }
    }
    if (path === "/homework") return json({ items: (await myHomework(me.user)).reverse() });
    if (path === "/homework/file") {                       /* download the attachment on the website */
      const id = url.searchParams.get("id") || "";
      const all = (await hwAll());
      const mine = await isTeacher(me.uid) ? all : await myHomework(me.user);
      const h = mine.find(x => x.id === id);
      if (!h || !h.file) return json({ error: "File not found." }, 404);
      const f = await tg("getFile", { file_id: h.file.id });
      if (!f || !f.ok) return json({ error: "Telegram could not find the file." }, 502);
      const r = await fetch(`https://api.telegram.org/file/bot${TOKEN()}/${f.result.file_path}`);
      if (!r.ok) return json({ error: "Download failed." }, 502);
      const name = h.file.name || "homework";
      return new Response(r.body, { headers: { "content-type": h.file.type || "application/octet-stream", "cache-control": "no-store",
        "content-disposition": `attachment; filename="${name.replace(/[^\w.\- ]/g, "_")}"; filename*=UTF-8''${encodeURIComponent(name)}` } });
    }
    if (path === "/homework/telegram" && method === "POST") {   /* "Send it to my Telegram" */
      const b = await body();
      const h = (await myHomework(me.user)).find(x => x.id === b.id) || ((await isTeacher(me.uid)) && ((await hwAll())).find(x => x.id === b.id));
      if (!h) return json({ error: "Homework not found." }, 404);
      const r = await sendHomework(me.uid, `\u{1F4DD} <b>Homework · Uy vazifasi</b> (${day(h.t)})`, h, null);
      return json({ ok: !!(r && r.ok), why: r && r.description });
    }
    if (path === "/teacher/claim" && method === "POST") {
      const b = await body(), t = await get("meta/teacher");
      if (t && String(t.uid) !== me.uid) return json({ error: "Another account is already the teacher." }, 403);
      if (!t && await limited("claim:" + me.uid, 5, 3600)) return json({ error: "Too many tries." }, 429);
      if (!t && (!env("TEACHER_CODE") || String(b.code || "").trim().toLowerCase() !== TEACHER_CODE())) return json({ error: "Wrong teacher code." }, 403);
      if (!t) { await put("meta/teacher", { uid: me.uid, t: Date.now() }); await teacherCommands(me.uid); }
      return json({ user: pub(me.user, true) });
    }

    /* ---- teacher only ---- */
    if (path.startsWith("/teacher/")) {
      if (!(await isTeacher(me.uid))) return json({ error: "Teacher only." }, 403);
      if (path === "/teacher/students") {
        await backfillCids();
        const rows = await allStudents();
        const students = rows.filter(r => !r.teacher).map(r => summary(r.u, r.p)).sort((a, b) => b.points - a.points);
        return json({ students, common: commonMistakes(rows.filter(r => !r.teacher)), homework: ((await hwAll())).slice(-10).reverse(), today: day() });
      }
      if (path === "/teacher/student") {
        const id = url.searchParams.get("id") || "";
        const u = await get("users/" + id); if (!u) return json({ error: "Not found" }, 404);
        const p = await get("progress/" + id), d = (p && p.data) || {};
        return json({ summary: summary(u, p), days: (p && p.days) || {}, mistakes: (d["clv-mistakes"] || []).slice(-60).reverse(), games: (d["clv-games"] || []).slice(-20).reverse() });
      }
      if (path === "/teacher/send" && method === "POST") {
        /* JSON { text, to, homework } or multipart with the same fields plus "file" */
        let b, file = null;
        if ((req.headers.get("content-type") || "").includes("multipart/form-data")) {
          const f = await req.formData();
          b = { text: f.get("text") || "", to: f.get("to") || "all", homework: f.get("homework") !== "false" };
          const x = f.get("file");
          if (x && typeof x === "object" && x.size) file = x;
        } else b = await body();
        const text = String(b.text || "").trim().slice(0, 3500), to = String(b.to || "all");
        if (!text && !file) return json({ error: "Write the message or attach a file first." }, 400);
        if (file && file.size > MAX_FILE) return json({ error: "The file is too big. The limit is 5 MB." }, 413);
        if (!/^(all|group:[ab])$/.test(to)) return json({ error: "Bad target" }, 400);
        let fileRec = null;
        if (file) {
          /* Upload once into the teacher's own chat (that is your copy); then every student gets it by file_id. */
          const up = await tgUpload("sendDocument", { chat_id: me.uid, caption: `\u{1F4CE} Your copy · ${toLabel(to)}` }, file, "document");
          const d = up && up.ok && up.result && up.result.document;
          if (!d) return json({ error: "Telegram did not accept the file: " + ((up && up.description) || "error") + ". Did you press START in @" + BOT_NAME() + "?" }, 502);
          fileRec = { id: d.file_id, name: file.name || d.file_name || "homework", size: file.size, type: file.type || d.mime_type || "", kind: "document" };
        }
        return json(await broadcast({ text, file: fileRec, to, isHw: b.homework !== false, site: PUBLIC() }));
      }
      if (path === "/teacher/report" && method === "POST") {
        const r = await sendReport(me.uid, PUBLIC());
        return json({ ok: !!(r && r.ok), why: r && r.description });
      }
      if (path === "/teacher/webhook" && method === "POST") return json(await ensureWebhook(req, context, true));
    }
    return json({ error: "Not found" }, 404);
  } catch (e) {
    console.error(e);
    return json({ error: "Server error · Xatolik. Try again." }, 500);
  }
}

export const config = { path: "/api/*" };
