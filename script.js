/* ══════════════════════════════════════════
   MANEL MORSLI — Portfolio Scripts
   ══════════════════════════════════════════ */

/* ════════════════════════════
   CANVAS PARTICLE NETWORK
   ════════════════════════════ */
(function () {
    const canvas = document.getElementById('bg-canvas');
    const ctx    = canvas.getContext('2d');
    let W, H, pts = [];

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function Particle() {
        this.x  = Math.random() * W;
        this.y  = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.r  = Math.random() * 1.5 + 0.5;
    }

    function init() {
        resize();
        pts = Array.from({ length: 70 }, () => new Particle());
    }

    function loop() {
        ctx.clearRect(0, 0, W, H);

        pts.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = '#7c3aed';
            ctx.fill();
        });

        for (let i = 0; i < pts.length; i++) {
            for (let j = i + 1; j < pts.length; j++) {
                const dx = pts[i].x - pts[j].x;
                const dy = pts[i].y - pts[j].y;
                const d  = Math.hypot(dx, dy);
                if (d < 120) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(124,58,237,${(1 - d / 120) * 0.5})`;
                    ctx.lineWidth   = 0.6;
                    ctx.moveTo(pts[i].x, pts[i].y);
                    ctx.lineTo(pts[j].x, pts[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(loop);
    }

    window.addEventListener('resize', init);
    init();
    loop();
})();

/* ════════════════════════════
   LANGUAGE TOGGLE (EN / FR)
   ════════════════════════════ */
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

    // Close mobile menu if open
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
}

/* ════════════════════════════
   MOBILE HAMBURGER MENU
   ════════════════════════════ */
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
}

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-links a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('open');
        document.getElementById('hamburger').classList.remove('open');
    });
});

/* ════════════════════════════
   SCROLL REVEAL
   ════════════════════════════ */
const revealObserver = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
    { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ════════════════════════════
   ACTIVE NAV LINK ON SCROLL
   ════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 110) current = s.id;
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current
            ? 'var(--primary-light)' : '';
    });
}, { passive: true });

/* ════════════════════════════
   CONTACT FORM — mailto
   ════════════════════════════ */
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

/* ════════════════════════════
   3D CARD TILT (desktop only)
   ════════════════════════════ */
if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', e => {
        document.querySelectorAll('.project-card, .skill-card').forEach(card => {
            const r = card.getBoundingClientRect();
            if (e.clientX < r.left || e.clientX > r.right ||
                e.clientY < r.top  || e.clientY > r.bottom) return;
            const rx = ((e.clientY - r.top)  / r.height - 0.5) * 7;
            const ry = (0.5 - (e.clientX - r.left) / r.width)  * 7;
            card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
        });
    });

    document.addEventListener('mouseleave', () => {
        document.querySelectorAll('.project-card, .skill-card')
            .forEach(c => { c.style.transform = ''; });
    });
}
