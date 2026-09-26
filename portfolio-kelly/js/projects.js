/* ===== js/projects.js — PROJETS : onglets par catégorie + filtre par client ===== */
/* projets */
let cur='logofolio',filt=null;
$('ptabs').innerHTML=ORD.map(k=>`<button data-k="${k}">${C[k].t}</button>`).join('');
function clientsOf(o){const seen=[];o.i.forEach(t=>{if(t[3]&&!seen.includes(t[3]))seen.push(t[3])});return seen}
function drawG(){const o=C[cur];$('pd').textContent=o.d;document.querySelectorAll('#ptabs button').forEach(b=>b.classList.toggle('on',b.dataset.k===cur));
const cls=clientsOf(o);
$('pfilter').innerHTML=cls.length>1?`<div class="opts" style="justify-content:center">${['Tous',...cls].map(c=>`<button class="opt${(filt===c||(!filt&&c==='Tous'))?' on':''}" data-f="${c}">${c}</button>`).join('')}</div>`:'';
const items=o.i.filter(t=>!filt||t[3]===filt);
$('gal').innerHTML=items.map((t,j)=>`<div class="tile ${o.c} rv"><div class="art" style="background:${G[j%4]}">${t[2]?`<img src="${t[2]}" alt="${t[0]}" loading="lazy">`:`<div>${t[0][0]}</div><em>Visuel à ajouter</em>`}</div><h3>${t[0]}</h3><small>${t[1]}</small></div>`).join('');
reveal($('gal'))}
$('ptabs').onclick=e=>{const b=e.target.closest('button');if(b){cur=b.dataset.k;filt=null;drawG()}};
$('pfilter').addEventListener('click',e=>{const b=e.target.closest('[data-f]');if(!b)return;filt=b.dataset.f==='Tous'?null:b.dataset.f;drawG()});
