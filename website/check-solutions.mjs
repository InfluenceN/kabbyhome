import assert from 'node:assert/strict';
import {recommend,priceProject,accessoryMatch,brandClaims} from './solution-engine.mjs';
import {accessories} from './catalog-data.mjs';
const base={product:'standard-base',width:30,depth:24,height:30,quantity:2,accessories:['rollout']};
assert.equal(recommend(base,['cookware'])[0].accessory.id,'rollout');
assert.deepEqual(recommend({...base,width:18},['cookware']),[]);
assert.deepEqual(recommend(base,['basic','cookware']),[]);
assert.ok(recommend(base,['cookware','waste','dishes','pantry']).length<=3);
assert.deepEqual(recommend(base,['cookware'],{rollout:{available:false}}),[]);
assert.equal(accessoryMatch(base,accessories.find(a=>a.id==='rollout'),{rollout:{internalClearance:{width:25}}}),false);
assert.equal(accessoryMatch({...base,internalClearance:{width:26}},accessories.find(a=>a.id==='rollout'),{rollout:{internalClearance:{width:25}}}),true);
assert.equal(brandClaims.origin.verified,false);
const data={cabinetData:{'standard-base':{pricing:{verified:true,amountCents:10000}}},accessoryData:{rollout:{pricing:{verified:true,amountCents:2000}}},promotions:[{verified:true,id:'test',cabinetSkus:['standard-base'],accessorySkus:['rollout'],type:'percent',value:20,perCabinet:1,maxEligibleQuantity:2,start:'2026-01-01',end:'2027-01-01'}],now:Date.parse('2026-10-14')};
let result=priceProject([base],[{accessory:'rollout',quantity:5}],data);
assert.equal(result.cabinetSubtotal,20000);assert.equal(result.accessorySubtotal,14000);assert.equal(result.bundleDiscount,800);assert.equal(result.total,33200);
assert.equal(priceProject([],[{accessory:'rollout',quantity:5}],data).bundleDiscount,0);
assert.equal(priceProject([{...base,accessories:[]}],[],data).bundleDiscount,0);
assert.equal(priceProject([{...base,quantity:1}],[],data).bundleDiscount,400);
assert.equal(priceProject([base],[],{...data,now:Date.parse('2028-01-01')}).bundleDiscount,0);
assert.equal(priceProject([base],[],{...data,promotions:[{...data.promotions[0],verified:false}]}).bundleDiscount,0);
assert.equal(priceProject([base],[],{...data,promotions:[{...data.promotions[0],type:'fixed',value:10000}]}).bundleDiscount,4000);
assert.equal(priceProject([base],[],{...data,promotions:[{...data.promotions[0],minQuantity:3}]}).bundleDiscount,0);
assert.equal(priceProject([base],[]).total,null);
assert.equal(priceProject([], [{accessory:'rollout',quantity:1}]).total,null);
assert.throws(()=>priceProject([{...base,width:18}],[],data),/Incompatible/);
assert.throws(()=>priceProject([base],[{accessory:'rollout',quantity:100}],data));
assert.equal(priceProject([{...base,price:1,total:1}],[],data).total,23200);
console.log('Passed: needs-based recommendations, basic-only opt-out, clearance/availability, standalone no-discount, quantity/date/promotion caps, removal recalculation, unknown prices, invalid matches, and client-total rejection.');

assert.equal(accessoryMatch(base,accessories.find(a=>a.id==='rollout'),{}, {'standard-base':{verifiedIncludedAccessoryIds:['rollout']}}),false);
console.log('Passed: included accessories cannot be charged again as optional upgrades.');
const {products,compatibility}=await import('./catalog-data.mjs');
const {storageHTML}=await import('./solution-ui.mjs');
for(const p of products)for(const width of p.widths){const c={product:p.id,width,depth:p.depths[0],height:p.heights[0],accessories:[]};const html=storageHTML(c,{needs:[]});for(const m of html.matchAll(/data-storage-need="([^"]+)"/g)){if(m[1]==='basic')continue;const need=(await import('./solution-data.mjs')).storageNeeds.find(n=>n.id===m[1]);assert.ok(compatibility(p,width,accessories.find(a=>a.id===need.accessory)).ok);}for(const m of html.matchAll(/data-accessory-id="([^"]+)"/g))assert.ok(compatibility(p,width,accessories.find(a=>a.id===m[1])).ok);}
console.log('Passed: every storage-need photo and add-on card matches every listed cabinet/width combination.');

// Ordinary cabinet shelves are included, never an optional upsell.
assert.equal(accessories.some(a=>a.id==='shelves'),false);
const {cabinetFacts}=await import('./solution-data.mjs');
assert(cabinetFacts['standard-base'].verifiedInclusions.includes('Standard shelves included'));
assert.equal(recommend(base,['dishes']).length,0);
assert.throws(()=>priceProject([{...base,accessories:['shelves']}],[]),/Incompatible/);
console.log('Passed: standard shelves are included and cannot be recommended or priced as optional accessories.');

const sink={...base,product:'sink-base',width:30,height:34.5,accessories:[]};
const underSink=accessories.find(a=>a.id==='under-sink');
assert.equal(accessoryMatch(sink,underSink),true);
assert.equal(accessoryMatch(base,underSink),false);
assert.equal(accessoryMatch({...sink,width:24},underSink),false);
assert.equal(recommend(sink,['sink-cleaning'])[0].accessory.id,'under-sink');
console.log('Passed: under-sink organizer is offered only for listed sink-base planning sizes.');

const wide={...base,product:'wide-base',width:72,height:36,accessories:[]};
const wideInsert=accessories.find(a=>a.id==='wide-drawer-inserts');
assert.equal(accessoryMatch(wide,wideInsert),true);
assert.equal(accessoryMatch(base,wideInsert),false);
assert.equal(accessoryMatch({...wide,width:36},wideInsert),false);
assert.equal(recommend(wide,['wide-utensils'])[0].accessory.id,'wide-drawer-inserts');
console.log('Passed: wide-unit inserts stay limited to the wide cabinet planning model.');
