/* ===== js/main.js — DÉMARRAGE : applique les liens, lance le routeur, menu burger, barre de progression ===== */
document.querySelectorAll('[data-l]').forEach(a=>{const u=L[a.dataset.l];a.href=u;if(!u.startsWith('mailto')){a.target='_blank';a.rel='noopener'}if(a.dataset.l==='cv'||a.dataset.l==='pf')a.setAttribute('download','')});
$('fab').href=wa("Bonjour Kelly, j'ai vu votre portfolio et je souhaite échanger sur un projet/formation.");

route();
$('burger').onclick=()=>{const o=$('menu').classList.toggle('open');$('burger').setAttribute('aria-expanded',o)};
addEventListener('scroll',()=>{const d=document.documentElement;$('bar').style.width=(scrollY/Math.max(1,d.scrollHeight-innerHeight)*100)+'%'},{passive:true});
