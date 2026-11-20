/* After class on lesson days (Mon, Thu, Fri), send each group its lesson's homework PDF:
   Elementary from 15:30, Beginner (Mon, Thu) from 17:00. Runs every 30 minutes from 15:00 to 20:30
   Tashkent time (10:00–15:30 UTC); autoHomework sends once per group per day and tells the teacher
   if a PDF is missing. */
import { autoHomework } from "./api.mjs";

export default async (req, context) => {
  const r = await autoHomework({ site: (context && context.site && context.site.url) || "" }).catch(e => ({ error: String(e && e.message || e) }));
  console.log("homework-cron", JSON.stringify(r));
  return new Response(JSON.stringify(r), { headers: { "content-type": "application/json" } });
};

export const config = { schedule: "*/30 10-15 * * 1,4,5" };
