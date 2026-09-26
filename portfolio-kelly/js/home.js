/* ===== js/home.js — ACCUEIL : témoignages, cartes des catégories, rotation des rôles du hero ===== */
/* accueil */
$('tq-home').innerHTML=T.map(x=>`<figure class="tq rv"><div class="qb" aria-hidden="true">“</div><div class="st" role="img" aria-label="5 étoiles sur 5">★★★★★</div><blockquote>${x.q}</blockquote><figcaption><b>${x.n}</b><span>${x.r}</span></figcaption><em class="tag">Recommandation · ${x.t}</em></figure>`).join('');
$('cats').innerHTML=ORD.map(k=>{const o=C[k];return `<a class="cat rv" href="#/${k}"><div class="n">${o.n}</div><h3>${o.t}</h3><p>${o.d}</p><span class="ct"><b data-count="${o.i.length}">0</b> projets</span></a>`}).join('');

const R=["Designer d'Identité Visuelle","Développeur Web Backend","Administrateur de Bases de Données","Chief Operating Officer"];let ri=0;const rl=$('role');
setInterval(()=>{rl.classList.add('out');setTimeout(()=>{ri=(ri+1)%R.length;rl.textContent=R[ri];rl.classList.remove('out')},400)},2800);
