import fs from 'node:fs';
import path from 'node:path';
const routes=JSON.parse(fs.readFileSync('routes.json','utf8'));
const failures=[];
for(const route of routes){const file=path.join('dist',route.url,'index.html');const html=fs.readFileSync(file,'utf8');if((html.match(/<h1[ >]/g)||[]).length!==1)failures.push(`${route.url}: missing or duplicate h1`);for(const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)){const url=match[1].split(/[?#]/)[0];if(!url.startsWith('/'))continue;let target=path.join('dist',decodeURIComponent(url));if(url.endsWith('/'))target=path.join(target,'index.html');if(!fs.existsSync(target))failures.push(`${route.url}: missing ${url}`);}if(!html.includes('name="viewport"'))failures.push(`${route.url}: missing viewport`);}
if(failures.length){console.error(failures.join('\n'));process.exit(1);}
console.log(`Passed: ${routes.length} page routes, local links and assets, headings and responsive metadata.`);
