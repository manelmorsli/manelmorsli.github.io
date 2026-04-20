/* ═══════════════════════════════════════════════
   MANEL MORSLI — Portfolio Scripts
   ═══════════════════════════════════════════════ */

/* ── NAV SCROLLED STATE ── */
(function () {
    const nav = document.querySelector('nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();

/* ── LANGUAGE TOGGLE (EN / FR) ── */
let lang = 'en';

function toggleLang() {
    lang = lang === 'en' ? 'fr' : 'en';
    document.getElementById('langBtn').textContent = lang === 'en' ? 'FR' : 'EN';

    document.querySelectorAll('[data-en][data-fr]').forEach(el => {
        const val = el.getAttribute('data-' + lang);
        const tn  = Array.from(el.childNodes).find(n => n.nodeType === 3 && n.textContent.trim());
        if (tn) {
            tn.textContent = val;
        } else if (!el.children.length) {
            el.textContent = val;
        } else {
            el.innerHTML = val;
        }
    });

    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
}

/* ── MOBILE HAMBURGER MENU ── */
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
}

document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
        document.getElementById('hamburger').classList.remove('open');
    });
});

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
    { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── ACTIVE NAV LINK ON SCROLL ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 110) current = s.id;
    });
    navLinks.forEach(a => {
        const isActive = a.getAttribute('href') === '#' + current;
        a.classList.toggle('active', isActive);
    });
}, { passive: true });

/* ── CONTACT FORM — mailto ── */
function sendMsg(e) {
    e.preventDefault();
    const name  = document.getElementById('fn').value.trim();
    const email = document.getElementById('fe').value.trim();
    const subj  = document.getElementById('fs').value.trim() || 'Portfolio Contact';
    const msg   = document.getElementById('fm').value.trim();
    const s = encodeURIComponent(`[Portfolio] ${subj} — from ${name}`);
    const b = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${msg}`);
    window.location.href = `mailto:manelmorsli@hotmail.com?subject=${s}&body=${b}`;
}
