import assert from 'node:assert/strict';
import {products,finishes,accessories,byId,compatibility,validateConfiguration,filterProducts,productSvg} from './catalog-data.mjs';
assert.deepEqual(finishes.map(f=>f.id),['soft-white','warm-ivory','natural-oak','charcoal-gray']);
const p=byId('standard-base'),rollout=accessories.find(a=>a.id==='rollout');
const c={product:p.id,width:30,depth:24,height:30,style:'Shaker',finish:'natural-oak',doorMaterial:'Oak-look laminate on engineered wood',boxMaterial:'Plywood',quantity:1,accessories:['rollout']};
assert.equal(validateConfiguration(c),'');
assert.equal(compatibility(p,18,rollout).ok,false);
assert.notEqual(validateConfiguration({...c,width:18}),'');
assert.notEqual(validateConfiguration({...c,width:29}),'');
assert.notEqual(validateConfiguration({...c,accessories:['corner']}),'');
assert.notEqual(validateConfiguration({...c,finish:'soft-white'}),'');
assert.equal(filterProducts({width:'18',storage:'rollout'}).length,0);
assert.equal(filterProducts({finish:'natural-oak',material:'Painted MDF'}).length,0);
assert.ok(filterProducts({category:'base',width:'30',finish:'natural-oak',storage:'rollout'}).some(p=>p.id==='standard-base'));
assert.ok(products.every(p=>p.price===null));
console.log('Passed: finish identities, valid 30-inch oak configuration, incompatible accessories, custom-size rejection, filter intersections and unknown price integrity.');

assert.equal(new Set(products.map(p=>productSvg(p).replace(/aria-label="[^"]*"/g,''))).size,products.length,'Every cabinet type must have a distinct drawing, independent of its label.');
console.log('Passed: all 11 cabinet illustrations have distinct visible geometry.');
