// Adapt the existing V2 build without changing its design or its Sites deployment.
import fs from 'node:fs';
import path from 'node:path';
const base = '/' + (process.env.BASE_PATH || 'kabbie').replace(/^\/+|\/+$/g, '') + '/';
const origin = new URL(process.env.SITE_ORIGIN || 'https://ivywang1108.github.io').origin;
process.env.SITE_ORIGIN = origin;
await import('./build.mjs');
const out = path.resolve('dist');
const routes = JSON.parse(fs.readFileSync('routes.json', 'utf8'));
const roots = new Set(['assets', ...routes.map(r => r.url.split('/')[1]).filter(Boolean), ...fs.readdirSync(out)]);
const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const rootUrl = new RegExp('(["\'`(=])/(?!/)(' + [...roots].map(escape).sort((a,b)=>b.length-a.length).join('|') + ')(?=[/\\s?\\#"\'`)<]|$)', 'g');
let files = 0;
function visit(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes:true})) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) { visit(file); continue; }
    if (!/\.(html|css|js|mjs|xml|txt|svg)$/.test(file)) continue;
    let text = fs.readFileSync(file, 'utf8');
    text = text.replace(/(["'`])\/(?=[?#])/g, (_, q) => q + base);
    text = text.replace(rootUrl, (_, quote, root) => quote + base + root);
    text = text.replace(/\b(href|action)=(['"])\/(\2)/g, (_, attr, q) => `${attr}=${q}${base}${q}`);
    text = text.replace(/location\.pathname\s*===\s*(['"])\/\1/g, `location.pathname==='${base}'`);
    text = text.replace('/^\\/cabinets\\/', '/^' + base.replaceAll('/', '\\/') + 'cabinets\\/');
    // Canonical links, structured data, sitemap and robots must share the Pages origin and prefix.
    text = text.replace(new RegExp(escape(origin) + '/(?!' + escape(base.slice(1)) + ')', 'g'), origin + base);
    fs.writeFileSync(file, text); files++;
  }
}
visit(out);
fs.writeFileSync(path.join(out, '.nojekyll'), '');
console.log(`Prepared ${files} text files for ${origin}${base}`);
