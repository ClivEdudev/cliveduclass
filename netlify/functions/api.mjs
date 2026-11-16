/* ClivEdu Class API: Telegram sign-in, progress sync, teacher progress, homework and reports.
   Storage: one Netlify Blobs store "clivedu".
     users/<tgId>      Telegram profile + display name, group, notify flag, lastSeen
     progress/<tgId>   points, picks, awarded, settings, mistakes, games, days (points per day)
     sessions/<token>  { uid, t }
     logins/<code>     { t } → { t, token, uid } once the student pressed START in the bot
     meta/teacher      { uid }        the first account that claims the teacher role keeps it
     meta/homework     [ { id, t, text, to } ]
     meta/webhook      { url }        which address Telegram is sending updates to
   The bot token lives only in the TELEGRAM_BOT_TOKEN environment variable. */
import { getStore } from "@netlify/blobs";
import { createHmac, randomBytes } from "node:crypto";

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

const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
const rid = n => randomBytes(n).toString("hex");
const esc = s => String(s == null ? "" : s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const day = (t = Date.now()) => new Date(t + 5 * 3600e3).toISOString().slice(0, 10);        /* Tashkent date */
const get = async k => { try { return await db().get(k, { type: "json" }); } catch (e) { return null; } };
const put = (k, v) => db().setJSON(k, v);
const del = k => db().delete(k).catch(() => {});
const SESSION_DAYS = 180, LOGIN_MIN = 15;

/* ---------- progress merging (same rules on every device) ---------- */
const PREF = ["clv-picks-", "clv-awarded-"];
const PLAIN = ["clv-points", "clv-settings", "clv-name", "clv-mistakes", "clv-games"];
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
    id: user.id, name: user.name || user.first || "Student", username: user.username || "", group: user.group || "",
    lastSeen: user.lastSeen || 0, joined: user.joined || 0, notify: user.notify !== false,
    points: total(d), today: ((p && p.days) || {})[day()] || 0, lessons: Object.keys(pts).filter(l => pts[l] > 0).length,
    perLesson: pts, open: mistakes.length, streak: streak((p && p.days) || {}), games: games.length,
    bestGame: games.reduce((b, g) => Math.max(b, g.score || 0), 0)
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
  const s = await get("sessions/" + tok);
  if (!s || Date.now() - s.t > SESSION_DAYS * 864e5) return null;
  const user = await get("users/" + s.uid);
  if (!user) return null;
  return { tok, uid: String(s.uid), user };
}
async function isTeacher(uid) { const t = await get("meta/teacher"); return !!t && String(t.uid) === String(uid); }
const pub = (u, teacher) => ({ id: u.id, name: u.name || u.first, first: u.first, username: u.username || "", group: u.group || "", notify: u.notify !== false, teacher: !!teacher });

/* ---------- Telegram webhook setup ---------- */
const secret = () => createHmac("sha256", TOKEN()).update("clivedu-webhook").digest("hex").slice(0, 48);
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
  if (!force && have && have.url === url) return { ok: true, url };
  const r = await tg("setWebhook", { url, secret_token: secret(), allowed_updates: ["message"], drop_pending_updates: false });
  if (r && r.ok) {
    await put("meta/webhook", { url, t: Date.now() });
    await tg("setMyCommands", { commands: [
      { command: "me", description: "My points and progress · Ballarim" },
      { command: "homework", description: "Latest homework · Uy vazifasi" },
      { command: "site", description: "Open ClivEdu · Saytni ochish" },
      { command: "stop", description: "Pause messages · Xabarlarni to‘xtatish" },
      { command: "help", description: "Help · Yordam" }
    ] });
  }
  return { ok: !!(r && r.ok), url, why: r && r.description };
}

/* ---------- bot ---------- */
const kb = (text, url) => ({ inline_keyboard: [[{ text, url }]] });
const say = (chat, text, extra) => tg("sendMessage", Object.assign({ chat_id: chat, text, parse_mode: "HTML", disable_web_page_preview: true }, extra || {}));
async function upsertUser(f) {
  const id = String(f.id), old = (await get("users/" + id)) || {};
  const u = Object.assign({ joined: Date.now(), notify: true }, old, {
    id, first: f.first_name || "", last: f.last_name || "", username: f.username || "", lang: f.language_code || "", lastSeen: Date.now()
  });
  if (!u.name) u.name = [f.first_name, f.last_name].filter(Boolean).join(" ").trim() || f.username || "Student";
  await put("users/" + id, u);
  return { u, isNew: !old.id };
}
async function myHomework(u) {
  const hw = (await get("meta/homework")) || [];
  return hw.filter(h => h.to === "all" || h.to === "group:" + (u.group || "")).slice(-5);
}
async function onUpdate(up, req, context) {
  const m = up && up.message;
  if (!m || !m.from || !m.chat || m.chat.type !== "private" || m.from.is_bot) return;
  const text = String(m.text || "").trim(), chat = m.chat.id, site = siteUrl(req, context);
  const [cmd0, arg = ""] = text.split(/\s+/, 2);
  const cmd = cmd0.replace(/@\w+$/, "").toLowerCase();
  if (cmd === "/start" && arg.startsWith("login_")) {
    const code = arg.slice(6);
    const L = /^[a-z0-9]{12}$/.test(code) ? await get("logins/" + code) : null;
    if (!L || Date.now() - L.t > LOGIN_MIN * 60e3) return say(chat, "⌛ This sign-in link is old. Go back to the website and tap <b>Sign in with Telegram</b> again.\n\nBu havola eskirgan. Saytga qaytib, qaytadan bosing.");
    const { u, isNew } = await upsertUser(m.from);
    u.notify = true; await put("users/" + u.id, u);
    const token = rid(24);
    await put("sessions/" + token, { uid: u.id, t: Date.now() });
    await put("logins/" + code, { t: L.t, token, uid: u.id });
    await say(chat, `✅ <b>You are signed in, ${esc(u.name)}!</b>\nGo back to the website — it opens by itself.\n\nKirdingiz! Saytga qayting. Ballaringiz endi saqlanadi va uy vazifalari shu yerga keladi.`, { reply_markup: kb("↩️ Back to ClivEdu", site + "/") });
    if (isNew) { const t = await get("meta/teacher"); if (t && String(t.uid) !== u.id) say(t.uid, `\u{1F44B} New student signed in: <b>${esc(u.name)}</b>${u.username ? " @" + esc(u.username) : ""}`); }
    return;
  }
  const { u } = await upsertUser(m.from);
  if (cmd === "/start") {
    if (u.notify === false) { u.notify = true; await put("users/" + u.id, u); }
    return say(chat, `\u{1F44B} <b>Hello, ${esc(u.name)}!</b> This is the ClivEdu Class bot.\n\n• Sign in on the website with Telegram to save your points.\n• Homework from your teacher comes here.\n• /me shows your points.\n\nSalom! Saytga Telegram orqali kiring — ballaringiz saqlanadi, uy vazifalari shu yerga keladi.`, { reply_markup: kb("\u{1F4DA} Open ClivEdu", site + "/") });
  }
  if (cmd === "/me") {
    const s = summary(u, await get("progress/" + u.id));
    return say(chat, `⭐ <b>${esc(s.name)}</b>\nPoints · Ballar: <b>${s.points}</b>\nToday · Bugun: <b>${s.today}</b>\nLessons · Darslar: <b>${s.lessons}</b>\n\u{1F525} Streak · Ketma-ket kunlar: <b>${s.streak}</b>\n\u{1F3AF} Mistakes to fix · Xatolar: <b>${s.open}</b>\n\u{1F3AE} Live games: <b>${s.games}</b>`, { reply_markup: kb("\u{1F464} My profile", site + "/me/") });
  }
  if (cmd === "/homework") {
    const hw = await myHomework(u);
    if (!hw.length) return say(chat, "No homework yet. \u{1F389}\nHozircha uy vazifasi yo‘q.");
    const h = hw[hw.length - 1];
    return say(chat, `\u{1F4DD} <b>Homework · Uy vazifasi</b> (${day(h.t)})\n\n${esc(h.text)}`);
  }
  if (cmd === "/site") return say(chat, "\u{1F4DA} ClivEdu Class", { reply_markup: kb("Open · Ochish", site + "/") });
  if (cmd === "/stop") { u.notify = false; await put("users/" + u.id, u); return say(chat, "\u{1F515} OK, no more messages from me. Send /start to turn them on again.\nXabarlar to‘xtatildi. Qayta yoqish: /start"); }
  if (cmd === "/report" && await isTeacher(u.id)) return sendReport(u.id, site);
  return say(chat, "I am the ClivEdu Class bot \u{1F916}\n/me — my points · ballarim\n/homework — homework · uy vazifasi\n/site — open the website\n/stop — pause messages", { reply_markup: kb("\u{1F4DA} Open ClivEdu", site + "/") });
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
  if (cm.length) t += `\n\n<b>Most common mistakes today</b>\n` + cm.map(c => `• ${esc(c.q || c.lt)} → <b>${esc(c.c)}</b> (${c.n} student${c.n > 1 ? "s" : ""}${c.top ? `, said “${esc(c.top)}”` : ""})`).join("\n");
  return say(chat, t.slice(0, 4000), { reply_markup: kb("\u{1F4CA} Open Progress", site + "/teacher/progress/") });
}

/* ---------- HTTP ---------- */
export default async (req, context) => {
  const url = new URL(req.url), path = url.pathname.replace(/^\/api/, "").replace(/\/$/, "") || "/";
  const method = req.method;
  const body = async () => { try { return await req.json(); } catch (e) { return {}; } };
  try {
    if (path === "/health") {
      const hook = url.searchParams.get("fix") ? await ensureWebhook(req, context, true) : await get("meta/webhook");
      return json({ ok: true, bot: !!TOKEN(), botName: BOT_NAME(), webhook: hook && hook.url ? hook.url : null, teacher: !!(await get("meta/teacher")) });
    }
    if (path === "/tg" && method === "POST") {
      if (!TOKEN() || req.headers.get("x-telegram-bot-api-secret-token") !== secret()) return json({ ok: false }, 403);
      const up = await body();
      try { await onUpdate(up, req, context); } catch (e) { console.error("bot", e); }
      return json({ ok: true });
    }
    if (path === "/login/start" && method === "POST") {
      if (!TOKEN()) return json({ error: "The bot is not set up yet (TELEGRAM_BOT_TOKEN is missing)." }, 503);
      const hook = await ensureWebhook(req, context);
      if (!hook.ok) console.error("webhook", hook);
      const code = rid(6);
      await put("logins/" + code, { t: Date.now() });
      return json({ code, link: `https://t.me/${BOT_NAME()}?start=login_${code}`, bot: BOT_NAME(), minutes: LOGIN_MIN });
    }
    if (path === "/login/status") {
      const code = url.searchParams.get("code") || "";
      if (!/^[a-z0-9]{12}$/.test(code)) return json({ error: "bad code" }, 400);
      const L = await get("logins/" + code);
      if (!L || Date.now() - L.t > LOGIN_MIN * 60e3) { if (L) await del("logins/" + code); return json({ state: "expired" }); }
      if (!L.token) return json({ state: "waiting" });
      await del("logins/" + code);
      const u = await get("users/" + L.uid);
      return json({ state: "done", token: L.token, user: pub(u, await isTeacher(L.uid)) });
    }

    const me = await who(req);
    if (!me) return json({ error: "Please sign in again." }, 401);
    const touch = async () => { if (Date.now() - (me.user.lastSeen || 0) > 60e3) { me.user.lastSeen = Date.now(); await put("users/" + me.uid, me.user); } };

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
      if (typeof b.name === "string" && b.name.trim()) { me.user.name = b.name.trim().slice(0, 40); me.user.nameSet = true; }
      if (typeof b.group === "string") me.user.group = ["a", "b", ""].includes(b.group) ? b.group : "";
      if (typeof b.notify === "boolean") me.user.notify = b.notify;
      me.user.lastSeen = Date.now();
      await put("users/" + me.uid, me.user);
      return json({ user: pub(me.user, await isTeacher(me.uid)) });
    }
    if (path === "/logout" && method === "POST") { await del("sessions/" + me.tok); return json({ ok: true }); }
    if (path === "/homework") return json({ items: (await myHomework(me.user)).reverse() });
    if (path === "/teacher/claim" && method === "POST") {
      const b = await body(), t = await get("meta/teacher");
      if (t && String(t.uid) !== me.uid) return json({ error: "Another account is already the teacher." }, 403);
      if (!t && String(b.code || "").trim().toLowerCase() !== TEACHER_CODE()) return json({ error: "Wrong teacher code." }, 403);
      if (!t) await put("meta/teacher", { uid: me.uid, t: Date.now() });
      return json({ user: pub(me.user, true) });
    }

    /* ---- teacher only ---- */
    if (path.startsWith("/teacher/")) {
      if (!(await isTeacher(me.uid))) return json({ error: "Teacher only." }, 403);
      if (path === "/teacher/students") {
        const rows = await allStudents();
        const students = rows.filter(r => !r.teacher).map(r => summary(r.u, r.p)).sort((a, b) => b.points - a.points);
        return json({ students, common: commonMistakes(rows.filter(r => !r.teacher)), homework: ((await get("meta/homework")) || []).slice(-10).reverse(), today: day() });
      }
      if (path === "/teacher/student") {
        const id = url.searchParams.get("id") || "";
        const u = await get("users/" + id); if (!u) return json({ error: "Not found" }, 404);
        const p = await get("progress/" + id), d = (p && p.data) || {};
        return json({ summary: summary(u, p), days: (p && p.days) || {}, mistakes: (d["clv-mistakes"] || []).slice(-60).reverse(), games: (d["clv-games"] || []).slice(-20).reverse() });
      }
      if (path === "/teacher/send" && method === "POST") {
        const b = await body(), text = String(b.text || "").trim().slice(0, 3500), to = String(b.to || "all");
        if (!text) return json({ error: "Write the message first." }, 400);
        if (!/^(all|group:[ab])$/.test(to)) return json({ error: "Bad target" }, 400);
        const rows = (await allStudents()).filter(r => !r.teacher && r.u.notify !== false && (to === "all" || "group:" + (r.u.group || "") === to));
        const site = siteUrl(req, context);
        if (b.homework !== false) {
          const hw = (await get("meta/homework")) || [];
          hw.push({ id: rid(4), t: Date.now(), text, to }); await put("meta/homework", hw.slice(-50));
        }
        const head = b.homework !== false ? "\u{1F4DD} <b>Homework · Uy vazifasi</b>\n\n" : "\u{1F4E2} <b>From your teacher · O‘qituvchidan</b>\n\n";
        let sent = 0, failed = [];
        for (const r of rows) {
          const res = await say(r.u.id, head + esc(text), { reply_markup: kb("\u{1F4DA} Open ClivEdu", site + "/") });
          if (res && res.ok) sent++; else failed.push(r.u.name || r.u.first);
          await new Promise(z => setTimeout(z, 40));
        }
        return json({ sent, failed, of: rows.length });
      }
      if (path === "/teacher/report" && method === "POST") {
        const r = await sendReport(me.uid, siteUrl(req, context));
        return json({ ok: !!(r && r.ok), why: r && r.description });
      }
      if (path === "/teacher/webhook" && method === "POST") return json(await ensureWebhook(req, context, true));
    }
    return json({ error: "Not found" }, 404);
  } catch (e) {
    console.error(e);
    return json({ error: "Server error · Xatolik. Try again." }, 500);
  }
};

export const config = { path: "/api/*" };
