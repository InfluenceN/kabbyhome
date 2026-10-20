import assert from 'node:assert/strict';
import fs from 'node:fs';
import {layouts,sizes,designs,templateUnits,conceptDiagram} from './concept-planning.mjs';
import {products,finishes} from './catalog-data.mjs';
for(const [layout] of layouts)for(const [size] of sizes){
 const units=templateUnits(layout,size);
 assert.ok(units.length>0);
 for(const u of units){assert.ok(products.some(p=>p.id===u.product)||['appliance','fridge'].includes(u.product));for(const key of ['x','y','w','d','h'])assert.ok(Number.isFinite(u[key]));}
 const floor=units.filter(u=>u.product!=='standard-wall');
 for(let i=0;i<floor.length;i++)for(let j=i+1;j<floor.length;j++){const a=floor[i],b=floor[j];assert.ok(!(a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.d&&a.y+a.d>b.y),`${layout}: overlapping template units`);}
 for(const f of finishes)for(const top of [true,false]){const svg=conceptDiagram(layout,size,f.id,top);assert.ok(svg.includes('role="img"'));assert.ok(!svg.includes('NaN'));assert.ok(svg.includes(f.swatch));}
}
for(const d of designs){assert.ok(layouts.some(l=>l[0]===d.layout));assert.ok(sizes.some(s=>s[0]===d.size));assert.ok(finishes.some(f=>f.id===d.finish));assert.ok(fs.existsSync('dist/assets/'+d.image));}
const result=fs.readFileSync('dist/imagine-your-kitchen/concept/index.html','utf8');assert.ok(result.includes('noindex,follow'));assert.ok(result.includes('Not for construction'));assert.ok(!result.includes('type="email"'));
console.log('Passed: all preset combinations, non-overlapping floor geometry, valid product references, both views and all finishes, gallery references and ungated noindex results.');
