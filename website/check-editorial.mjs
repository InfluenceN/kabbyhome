import assert from 'node:assert/strict';
import fs from 'node:fs';
import {articles,verifiedStories,neighborStories} from './editorial-data.mjs';
import {editorialRoutes} from './editorial-pages.mjs';
import {products} from './catalog-data.mjs';
const routes=JSON.parse(fs.readFileSync('routes.json','utf8'));
assert.equal(new Set(routes.map(r=>r.url)).size,routes.length,'duplicate route');
assert.equal(articles.length,16);
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');
for(const a of articles){assert(a.sections.length>=2);assert.equal(a.author,null);assert.equal(a.reviewer,null);assert.equal(a.status,'draft');assert.equal(a.publishedAt,null);assert(a.hero.usagePermission);for(const id of a.relatedProducts)assert(products.some(p=>p.id===id));for(const slug of a.relatedArticles)assert(articles.some(a=>a.slug===slug));const path='/ideas-guides/'+a.slug+'/';const html=fs.readFileSync('dist'+path+'index.html','utf8');assert(html.includes('content="noindex,follow"'));assert(!sitemap.includes(path));assert(html.includes('Review draft'));assert(html.includes('BreadcrumbList'));}
for(const r of editorialRoutes()){const html=fs.readFileSync('dist'+r.url+'index.html','utf8');for(const m of html.matchAll(/href="(\/[^"?]*#[^"]+)"/g)){const [path,hash]=m[1].split('#');const file='dist'+path+'index.html';assert(fs.existsSync(file),file);assert(fs.readFileSync(file,'utf8').includes('id="'+hash+'"'),m[1]);}}
assert.equal(neighborStories.length,0);assert.equal(verifiedStories().length,0);assert(!fs.readFileSync('dist/neighbor-stories/index.html','utf8').includes('data-story-filter='));
console.log('Passed: 16 draft articles, review labels, related records, canonical route uniqueness, draft exclusion from sitemap, breadcrumbs, new fragment links and honest story empty state.');
