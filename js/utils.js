/* ===== js/utils.js — OUTILS : raccourci $, liens WhatsApp/mailto, compteurs et animations au défilement ===== */
const $=id=>document.getElementById(id),MAIL='kellyabedi09@gmail.com';
const wa=t=>L.wa+'?text='+encodeURIComponent(t),mailto=(s,b)=>'mailto:'+MAIL+'?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(b);
/* animations */
function count(el){const n=+el.dataset.count,s=el.dataset.suf||'';let i=0;const st=setInterval(()=>{el.textContent=(++i)+s;if(i>=n)clearInterval(st)},Math.max(30,900/n))}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-count]').forEach(count);io.unobserve(e.target)}}),{threshold:.12});
const reveal=r=>r.querySelectorAll('.rv').forEach((el,i)=>{el.classList.remove('in');el.style.setProperty('--d',(i%4)*90+'ms');io.observe(el)});
