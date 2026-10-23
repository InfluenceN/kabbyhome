// Shared architectural axonometric diagrams. One drawing unit represents two inches.
// Base: 24 in deep / 34.5 in high + counter. Refrigerator: counter-depth envelope.
export function isometricLayout(layout){
 const pt=(x,y,z=0)=>[175+(x-y)*2,45+(x+y)*.92-z*1.2];
 const pts=c=>c.map(v=>pt(...v).map(n=>n.toFixed(2)).join(',')).join(' ');
 const poly=(c,fill,stroke='#85867d',sw=.65)=>`<polygon points="${pts(c)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round"/>`;
 const line=(a,b,color='#9e9d91',w=.6)=>`<path d="M${pt(...a)}L${pt(...b)}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`;
 const box=({x,y,w,d,h=17.25,fridge=false})=>{
 let s=poly([[x,y+d,0],[x+w,y+d,0],[x+w,y+d,h],[x,y+d,h]],fridge?'#d8ddd9':'#f5f0e4')+poly([[x+w,y,0],[x+w,y+d,0],[x+w,y+d,h],[x+w,y,h]],fridge?'#b1bbb7':'#d5d0c2');
 if(fridge){s+=line([x,y+d,11],[x+w,y+d,11],'#788783',.8)+line([x+w/2,y+d,11],[x+w/2,y+d,h],'#788783',.7);for(const a of [w/2-1.4,w/2+1.4])s+=line([x+a,y+d,19],[x+a,y+d,27],'#66736e',1);}
 else {
 s+=line([x,y+d,1.8],[x+w,y+d,1.8],'#a8a18f',1.5)+line([x+w,y,1.8],[x+w,y+d,1.8],'#a8a18f',1.5);
 for(let a=0;a<w;a+=12){const end=Math.min(a+12,w);if(a)s+=line([x+a,y+d,2],[x+a,y+d,h]);s+=line([x+a+2,y+d,14],[x+end-2,y+d,14],'#9b8255',1);}
 for(let a=0;a<d;a+=12){if(a)s+=line([x+w,y+a,2],[x+w,y+a,h]);s+=line([x+w,y+a+3,14],[x+w,y+Math.min(a+9,d-2),14],'#9b8255',1);}
 }
 s+=poly([[x,y,h],[x+w,y,h],[x+w,y+d,h],[x,y+d,h]],fridge?'#edf0e9':'#455650');
 if(!fridge)s+=poly([[x,y,h+.8],[x+w,y,h+.8],[x+w,y+d,h+.8],[x,y+d,h+.8]],'#53645c','#3e5149');
 return s;
 };
 const parts=[{x:0,y:0,w:72,d:12},{x:72,y:0,w:18,d:12,h:35,fridge:true}];
 if(['L-shaped','U-shaped','Island kitchen','Peninsula kitchen'].includes(layout))parts.push({x:0,y:12,w:12,d:48});
 if(layout==='U-shaped')parts.push({x:60,y:12,w:12,d:48});
 if(layout==='Galley')parts.push({x:0,y:36,w:72,d:12}); // 48 in clear aisle
 if(layout==='Island kitchen')parts.push({x:36,y:36,w:30,d:15}); // 48 in clear from both runs
 if(layout==='Peninsula kitchen')parts.push({x:12,y:48,w:36,d:12});
 let body=poly([[-4,-4],[94,-4],[94,65],[-4,65]],'#edece3','none');
 for(let x=8;x<94;x+=18)body+=line([x,-4],[x,65],'#dfddd1',.4);for(let y=8;y<65;y+=18)body+=line([-4,y],[94,y],'#dfddd1',.4);
 body+=parts.sort((a,b)=>(a.x+a.y)-(b.x+b.y)).map(box).join('');
 body+=poly([[22,2,18.15],[34,2,18.15],[34,10,18.15],[22,10,18.15]],'#bcc8c1','#e3e8df');
 body+=poly([[23,3,18.2],[33,3,18.2],[33,9,18.2],[23,9,18.2]],'#718880','#aab9b0');
 const [fx,fy]=pt(28,2,18.3);body+=`<path d="M${fx} ${fy}v-5q0-4 3-3v4" fill="none" stroke="#e1e6dc" stroke-width="1.3"/>`;
 body+=poly([[48,2,18.2],[62,2,18.2],[62,10,18.2],[48,10,18.2]],'#263a33','#9ca99f');
 for(const [x,y]of [[51,4],[59,4],[51,8],[59,8]]){const [cx,cy]=pt(x,y,18.4);body+=`<ellipse cx="${cx}" cy="${cy}" rx="3" ry="1.4" fill="none" stroke="#b8c1b5" stroke-width=".65"/>`;}
 const tips={'One wall':'One simple run.','Single wall':'One simple run.','L-shaped':'Make a useful corner.','U-shaped':'Storage on three sides.','Galley':'Two runs. One clear path.','Island kitchen':'Room to gather around.','Peninsula kitchen':'Connected. Open. Practical.'};
 const tip=tips[layout]||'Find your everyday flow.';
 const [px,py]=pt(7,5,18.5);
 body+=`<g aria-hidden="true"><ellipse cx="${px}" cy="${py}" rx="4" ry="2" fill="#b49a72"/><path d="M${px-3} ${py-5}l1 5h4l1-5z" fill="#c9ad7d"/><path d="M${px} ${py-5}v-7m0 3q-7-6-5-1m5 2q7-7 5-2" stroke="#738564" fill="none" stroke-width="1.6" stroke-linecap="round"/></g>`;
 body+=`<g class="layout-kabbie-guide" aria-hidden="true"><ellipse cx="126" cy="218" rx="25" ry="4" fill="#c9c2ac" opacity=".35"/><image href="/assets/kabbie-wood-cutout.png" x="98" y="160" width="58" height="58" preserveAspectRatio="xMidYMid meet"/><path d="M160 179h143q8 0 8 8v20q0 8-8 8H160l-10 6 3-14v-20q0-8 7-8z" fill="#fbf7e9" stroke="#d8cfb8" stroke-width=".8"/><text x="169" y="192" font-family="Arial,sans-serif" font-size="7" letter-spacing="1" fill="#947142">KABBIE’S LAYOUT TIP</text><text x="169" y="205" font-family="Arial,sans-serif" font-size="8.2" fill="#43543c">${tip}</text></g>`;
 return `<svg class="isometric-layout" viewBox="25 -18 345 260" role="img" aria-label="${layout}: proportioned cabinet runs, counter-depth refrigerator, sink and cooktop; conceptual layout with Kabbie as your guide, without seating" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}
