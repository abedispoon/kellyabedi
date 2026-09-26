/* ===== js/quote.js — DEVIS INTELLIGENT : catégories, questions dynamiques, estimation, envoi WhatsApp/email ===== */
/* devis intelligent */
let cat=null,S={};
$('dl').innerHTML=DL.map((d,i)=>`<option value="${i}"${i==1?' selected':''}>${d[0]}</option>`).join('');
$('qcat').innerHTML=Object.keys(D).map(k=>`<button class="ccb" data-c="${k}"><b>${D[k].i}</b>${D[k].t}</button>`).join('');
const r5=n=>Math.round(n/5)*5;
function drawQ(){$('qdyn').innerHTML=D[cat].q.map((q,qi)=>`<fieldset><legend>${q.k}${q.m?' (plusieurs choix)':''}</legend><div class="opts">${q.o.map((o,oi)=>`<button type="button" class="opt${(S[qi]||[]).includes(oi)?' on':''}" data-q="${qi}" data-o="${oi}" aria-pressed="${(S[qi]||[]).includes(oi)}">${o[0]}</button>`).join('')}</div></fieldset>`).join('')}
function upd(){document.querySelectorAll('.ccb').forEach(b=>b.classList.toggle('on',b.dataset.c===cat));$('qs2').hidden=!cat;if(!cat){$('qs3').hidden=$('qs4').hidden=true;return}
const bud=+$('bud').value,dl=DL[$('dl').value];$('bo').textContent='$'+bud;let base=0,lines=[];
D[cat].q.forEach((q,qi)=>{const s=S[qi]||[];if(s.length)lines.push('• '+q.k+' : '+s.map(i=>q.o[i][0]).join(', '));s.forEach(i=>base+=q.o[i][1])});
const ok=base>0;$('qs3').hidden=$('qs4').hidden=!ok;if(!ok)return;
const lo=r5(base*dl[1]*.9),hi=r5(base*dl[1]*1.25);$('est').textContent='$'+lo+' – $'+hi;
$('estn').textContent=(bud<lo?'Votre budget est inférieur à l\'estimation : nous pourrons ajuster le périmètre. ':'Cette estimation est compatible avec votre budget. ')+'Estimation indicative, le devis final dépend du brief.';
const nm=$('qn').value.trim(),dt=$('qd').value.trim();
const msg=`Bonjour Kelly, je souhaite un devis.\n\n• Catégorie : ${D[cat].t}\n${lines.join('\n')}\n• Budget : $${bud}\n• Délai : ${dl[0]}\n• Estimation : $${lo} – $${hi}${nm?'\n• Nom : '+nm:''}${dt?'\n• Détails : '+dt:''}`;
$('qwa').href=wa(msg);$('qem').href=mailto('Demande de devis — '+D[cat].t,msg)}
$('qwrap').addEventListener('click',e=>{const c=e.target.closest('[data-c]'),o=e.target.closest('[data-o]');
if(c){cat=c.dataset.c;S={};drawQ();upd()}
if(o){const qi=+o.dataset.q,oi=+o.dataset.o,q=D[cat].q[qi],s=S[qi]||[];S[qi]=q.m?(s.includes(oi)?s.filter(x=>x!=oi):[...s,oi]):[oi];drawQ();upd()}});
['bud','dl','qn','qd'].forEach(id=>$(id).addEventListener('input',upd));upd();
