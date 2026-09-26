/* ===== js/router.js — ROUTEUR : navigation par #/page ===== */
/* routeur */
function route(){let h=location.hash.replace('#/','')||'home';if(C[h]){cur=h;filt=null;h='projets'}if(!P.includes(h))h='home';
P.forEach(p=>$(p).classList.toggle('on',p===h));
document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('cur',a.dataset.nav===h));
$('menu').classList.remove('open');$('burger').setAttribute('aria-expanded','false');closeCS();
if(h==='projets')drawG();scrollTo(0,0);reveal($(h))}
addEventListener('hashchange',route);
