#!/usr/bin/env node
/* Runs on Netlify after stamp.cjs (netlify.toml → build.command).
   Smart boards and old Android browsers (old Chrome/WebView) cannot read new JavaScript
   such as a?.b or a ?? b, so the page stays empty. This rewrites every site script and every
   inline <script> into older JavaScript and puts small polyfills at the top of each page.
   It changes the files only inside Netlify's build, never in the repository. */
"use strict";
const fs = require("fs"), path = require("path"), esbuild = require("esbuild");
const ROOT = path.join(__dirname, "..");
const TARGET = ["chrome51"];
const POLY = `<script>/*legacy*/(function(){var A=Array.prototype,O=Object,E=window.Element&&Element.prototype,S=String.prototype;
if(typeof globalThis==="undefined")window.globalThis=window;
if(!O.values)O.values=function(o){return O.keys(o).map(function(k){return o[k]})};
if(!O.entries)O.entries=function(o){return O.keys(o).map(function(k){return[k,o[k]]})};
if(!O.fromEntries)O.fromEntries=function(l){var o={};Array.from(l).forEach(function(p){o[p[0]]=p[1]});return o};
if(!O.assign)O.assign=function(t){for(var i=1;i<arguments.length;i++){var s=arguments[i];if(s)for(var k in s)if(O.prototype.hasOwnProperty.call(s,k))t[k]=s[k]}return t};
if(!S.padStart)S.padStart=function(n,c){var s=String(this);c=c===undefined?" ":String(c);while(s.length<n)s=c+s;return s.length>n&&c.length>1?s.slice(s.length-n):s};
if(!S.padEnd)S.padEnd=function(n,c){var s=String(this);c=c===undefined?" ":String(c);while(s.length<n)s+=c;return s.slice(0,Math.max(n,String(this).length))};
if(!S.replaceAll)S.replaceAll=function(a,b){return typeof a==="string"?this.split(a).join(b):this.replace(a,b)};
if(!S.includes)S.includes=function(x,i){return this.indexOf(x,i)>-1};
if(!S.startsWith)S.startsWith=function(x,i){i=i||0;return this.substr(i,x.length)===x};
if(!S.endsWith)S.endsWith=function(x){return this.slice(-x.length)===x};
if(!A.includes)A.includes=function(x){return this.indexOf(x)>-1||(x!==x&&this.some(function(y){return y!==y}))};
if(!A.flat)A.flat=function(d){d=d===undefined?1:d;return this.reduce(function(a,v){return a.concat(Array.isArray(v)&&d>0?v.flat(d-1):[v])},[])};
if(!A.flatMap)A.flatMap=function(f,t){return this.map(f,t).flat()};
if(!A.at)A.at=function(i){i=Math.trunc(i)||0;if(i<0)i+=this.length;return this[i]};
if(!S.at)S.at=function(i){i=Math.trunc(i)||0;if(i<0)i+=this.length;return this[i]};
if(!A.find)A.find=function(f,t){for(var i=0;i<this.length;i++)if(f.call(t,this[i],i,this))return this[i]};
if(!A.findIndex)A.findIndex=function(f,t){for(var i=0;i<this.length;i++)if(f.call(t,this[i],i,this))return i;return -1};
if(!Array.from)Array.from=function(l,f){var a=[].slice.call(l);return f?a.map(f):a};
if(window.NodeList&&!NodeList.prototype.forEach)NodeList.prototype.forEach=A.forEach;
if(E){if(!E.matches)E.matches=E.webkitMatchesSelector||E.msMatchesSelector;
if(!E.closest)E.closest=function(s){var e=this;while(e&&e.nodeType===1){if(e.matches(s))return e;e=e.parentNode}return null};
function nodes(a){var f=document.createDocumentFragment();A.forEach.call(a,function(n){f.appendChild(typeof n==="string"?document.createTextNode(n):n)});return f}
[E,window.CharacterData&&CharacterData.prototype,window.DocumentType&&DocumentType.prototype].forEach(function(p){if(!p)return;
if(!p.remove)p.remove=function(){if(this.parentNode)this.parentNode.removeChild(this)};
if(!p.replaceWith)p.replaceWith=function(){if(this.parentNode)this.parentNode.replaceChild(nodes(arguments),this)};
if(!p.before)p.before=function(){if(this.parentNode)this.parentNode.insertBefore(nodes(arguments),this)};
if(!p.after)p.after=function(){if(this.parentNode)this.parentNode.insertBefore(nodes(arguments),this.nextSibling)}});
[E,Document.prototype,DocumentFragment.prototype].forEach(function(p){
if(!p.append)p.append=function(){this.appendChild(nodes(arguments))};
if(!p.prepend)p.prepend=function(){this.insertBefore(nodes(arguments),this.firstChild)}});
if(!E.toggleAttribute)E.toggleAttribute=function(n,f){if(f===undefined)f=!this.hasAttribute(n);if(f)this.setAttribute(n,"");else this.removeAttribute(n);return f}}
if(!window.ResizeObserver)window.ResizeObserver=function(cb){var els=[],self=this;function run(){cb(els.map(function(t){return{target:t,contentRect:t.getBoundingClientRect()}}),self)}window.addEventListener("resize",run);this.observe=function(e){els.push(e);setTimeout(run,0)};this.unobserve=function(e){els=els.filter(function(x){return x!==e})};this.disconnect=function(){els=[]}};
if(!window.queueMicrotask)window.queueMicrotask=function(f){Promise.resolve().then(f)};
if(window.Promise&&!Promise.prototype.finally)Promise.prototype.finally=function(f){return this.then(function(v){return Promise.resolve(f()).then(function(){return v})},function(e){return Promise.resolve(f()).then(function(){throw e})})};
if(!window.structuredClone)window.structuredClone=function(v){return JSON.parse(JSON.stringify(v))};
if(!window.requestIdleCallback)window.requestIdleCallback=function(f){return setTimeout(function(){f({timeRemaining:function(){return 5},didTimeout:false})},1)};
})();</script>`;

const SKIP = ["node_modules", "tools", "netlify"];
let files = 0, inline = 0, pages = 0, bad = [];
function lower(code, name) {
  try { return esbuild.transformSync(code, { loader: "js", target: TARGET, charset: "utf8", legalComments: "inline" }).code; }
  catch (e) { bad.push(name + ": " + e.message.split("\n")[0]); return code; }
}
function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    if (f.name.startsWith(".") || SKIP.includes(f.name)) continue;
    const p = path.join(dir, f.name), rel = path.relative(ROOT, p);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith(".js")) { fs.writeFileSync(p, lower(fs.readFileSync(p, "utf8"), rel)); files++; }
    else if (f.name.endsWith(".html")) {
      let s = fs.readFileSync(p, "utf8");
      s = s.replace(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/gi, (m, attrs, body) => {
        attrs = attrs || "";
        if (/\bsrc=/i.test(attrs) || /type=["']?(module|application\/(ld\+)?json|text\/template)/i.test(attrs) || !body.trim()) return m;
        inline++;
        return `<script${attrs}>${lower(body, rel + " (inline)").replace(/<\/script/gi, "<\\/script")}</script>`;
      });
      /* polyfills go first, before any other script */
      if (!s.includes("/*legacy*/")) s = s.replace(/<head([^>]*)>/i, (m) => m + POLY);
      fs.writeFileSync(p, s); pages++;
    }
  }
}
walk(ROOT);
console.log(`legacy: ${files} scripts, ${inline} inline scripts, ${pages} pages → ${TARGET.join(", ")}`);
if (bad.length) { console.log("legacy: left unchanged:\n  " + bad.join("\n  ")); }
