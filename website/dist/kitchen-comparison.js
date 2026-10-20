const compare=document.querySelector('[data-quote-compare]'),range=document.querySelector('#quote-compare-range');
if(compare&&range){
 let previous=Number(range.value),settle;
 const lean=delta=>{if(Math.abs(delta)<.05)return;clearTimeout(settle);compare.style.setProperty('--kabbie-tilt',delta>0?'12deg':'-12deg');};
 const reset=()=>{clearTimeout(settle);compare.classList.remove('is-dragging');compare.style.setProperty('--kabbie-tilt','0deg');};
 const reveal=value=>{const v=Math.max(0,Math.min(100,Number(value)));lean(v-previous);previous=v;compare.style.setProperty('--compare',v+'%');range.value=String(v);};
 range.addEventListener('input',()=>{compare.classList.add('is-dragging');reveal(range.value);clearTimeout(settle);settle=setTimeout(reset,160);});
 range.addEventListener('change',reset);range.addEventListener('blur',reset);
 const move=e=>{const r=compare.getBoundingClientRect();reveal((e.clientX-r.left)/r.width*100);};
 compare.addEventListener('pointerdown',e=>{if(e.button!==0)return;previous=Number(range.value);compare.setPointerCapture(e.pointerId);compare.classList.add('is-dragging');move(e);});
 compare.addEventListener('pointermove',e=>{if(compare.hasPointerCapture(e.pointerId))move(e);});
 compare.addEventListener('pointerup',e=>{if(compare.hasPointerCapture(e.pointerId))compare.releasePointerCapture(e.pointerId);reset();});
 compare.addEventListener('pointercancel',reset);compare.addEventListener('lostpointercapture',reset);
 compare.addEventListener('dragstart',e=>e.preventDefault());
}
