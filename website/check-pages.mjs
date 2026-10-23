import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = path.resolve('dist');
const base = '/' + (process.env.BASE_PATH || 'kabbie').replace(/^\/+|\/+$/g, '') + '/';
const origin = new URL(process.env.SITE_ORIGIN || 'https://ivywang1108.github.io').origin;
let pages = 0, references = 0;
function visit(dir) {
  for (const item of fs.readdirSync(dir, {withFileTypes:true})) {
    const file = path.join(dir,item.name);
    if(item.isDirectory()){visit(file);continue;}
    if(!file.endsWith('.html'))continue;
    pages++;
    const text=fs.readFileSync(file,'utf8');
    for(const m of text.matchAll(/\b(?:href|src|poster|action)=["'](\/[^"']*)["']/g)) {
      if(m[1].startsWith('//'))continue;
      assert(m[1].startsWith(base),`Unprefixed URL in ${file}: ${m[1]}`);
      const local=decodeURIComponent(new URL(m[1],'https://example.test').pathname.slice(base.length));
      assert(fs.existsSync(path.join(root,local)),`Missing file in ${file}: ${m[1]}`);
      references++;
    }
    for(const m of text.matchAll(/<link rel="canonical" href="([^"]+)"/g))assert(m[1].startsWith(origin+base),`Wrong canonical: ${m[1]}`);
  }
}
visit(root);
assert(pages>=100);
for(const name of ['index.html','kitchens/index.html','request-quote/index.html','assets/cabinet-layouts-2026.mp4'])assert(fs.existsSync(path.join(root,name)),`Missing ${name}`);
console.log(`Passed: ${pages} pages, ${references} local URL references, canonical URLs and video asset.`);
