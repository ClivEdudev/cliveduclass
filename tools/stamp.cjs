#!/usr/bin/env node
/* Runs on Netlify at every deploy (netlify.toml → build.command).
   Adds ?v=<commit> to every local .js and .css link in the HTML pages, so after a deploy
   browsers always load the new files together, never new pages with old cached scripts.
   It changes the files only inside Netlify's build, never in the repository. */
"use strict";
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const V = (process.env.COMMIT_REF || Date.now().toString(36)).slice(0, 8);
let pages = 0, links = 0;
function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    if (f.name.startsWith(".") || ["node_modules", "tools", "netlify"].includes(f.name)) continue;
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith(".html")) {
      const s = fs.readFileSync(p, "utf8");
      const out = s.replace(/(<(?:script|link)\b[^>]*?\s(?:src|href)=")((?!https?:|\/\/|data:)[^"?#]+\.(?:js|css))(")/g, (m, a, url, z) => { links++; return `${a}${url}?v=${V}${z}`; });
      if (out !== s) { fs.writeFileSync(p, out); pages++; }
    }
  }
}
walk(ROOT);
/* scripts that load other files at run time read the version from here */
const sp = path.join(ROOT, "lessons/settings.js");
const st = fs.readFileSync(sp, "utf8");
if (st.includes('window.CLV_V = "dev";')) fs.writeFileSync(sp, st.replace('window.CLV_V = "dev";', `window.CLV_V = "${V}";`));
console.log(`stamp: version ${V} on ${links} links in ${pages} pages`);
