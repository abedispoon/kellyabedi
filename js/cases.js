/* ===== js/cases.js — ÉTUDES DE CAS : cartes + modale plein écran ===== */
/* études de cas + modale */
$('csg').innerHTML=CS.map((c,i)=>`<button class="cat rv" data-cs="${i}"><div class="n">0${i+1}</div><h3>${c.t}</h3><p>${c.g}</p><span class="ct">Voir l'étude de cas</span></button>`).join('');
let lf=null;
function openCS(i){const c=CS[i];lf=document.activeElement;$('mb').innerHTML=`<div class="num" style="color:var(--sg);font:700 1.1rem Outfit">Étude de cas · ${c.g}</div><h2 id="mt">${c.t}</h2><h3>Le Problème</h3><p>${c.p}</p><h3>La Solution Apportée</h3><p>${c.s}</p><h3>Les Résultats / Impact</h3><ul>${c.r.map(x=>`<li>${x}</li>`).join('')}</ul><h3>Tech Stack / Outils</h3><div class="chips">${c.k.map(x=>`<span>${x}</span>`).join('')}</div><div class="two" style="justify-content:flex-start;margin-top:26px"><a class="btn" href="#/devis" onclick="closeCS()">Un projet similaire ?</a><a class="btn o" href="#/contact" onclick="closeCS()">Me contacter</a></div>`;
$('modal').classList.add('on');document.body.style.overflow='hidden';$('mx').focus()}
function closeCS(){if(!$('modal').classList.contains('on'))return;$('modal').classList.remove('on');document.body.style.overflow='';if(lf)lf.focus()}
$('csg').onclick=e=>{const b=e.target.closest('[data-cs]');if(b)openCS(+b.dataset.cs)};$('mx').onclick=closeCS;
addEventListener('keydown',e=>{if(e.key==='Escape')closeCS()});
