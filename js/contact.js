/* ===== js/contact.js — CONTACT : interrupteur Client / Formateur-Recruteur, envoi WhatsApp/email ===== */
/* contact */
const M={c:{t:'Un projet de marque, de site ou de données ?',p:'Décrivez votre besoin (identité, print, web, base de données) : je vous réponds rapidement.',ph:'Type de livrable, échéance, budget indicatif…',s:'Nouveau projet — Portfolio',h:"je souhaite discuter d'un projet."},
r:{t:'Une formation ou un poste à pourvoir ?',p:"Formation informatique, atelier tech ou poste (design, DBA, backend) : parlez-moi de votre besoin.",ph:"Organisation, public ou poste visé, durée, calendrier…",s:'Formation / Opportunité professionnelle',h:'je souhaite échanger sur une formation ou une opportunité.'}};
let mode='c';
function mail(){const o=M[mode],b='Bonjour Kelly, '+o.h+'\n\n'+$('msg').value+($('nm').value?'\n\n— '+$('nm').value:'');$('ct-wa').href=wa(b);$('ct-m').href=mailto(o.s,b)}
function tab(m){mode=m;const o=M[m];$('ct-t').textContent=o.t;$('ct-p').textContent=o.p;$('msg').placeholder=o.ph;document.querySelectorAll('.tabs [data-m]').forEach(b=>{const on=b.dataset.m===m;b.classList.toggle('on',on);b.setAttribute('aria-selected',on)});mail()}
document.querySelectorAll('.tabs [data-m]').forEach(b=>b.onclick=()=>tab(b.dataset.m));$('msg').oninput=$('nm').oninput=mail;tab('c');
