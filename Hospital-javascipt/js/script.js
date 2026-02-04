// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Header micro-interaction on scroll
const header = document.querySelector('header');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const goingDown = y > lastY;
    lastY = y;

    // subtle shadow / blur strength
    if (y > 8) {
        header.style.boxShadow = '0 10px 28px rgba(0,0,0,0.18)';
        header.style.backgroundColor = 'rgba(11, 94, 215, 0.86)';
    } else {
        header.style.boxShadow = 'none';
        header.style.backgroundColor = '#0b5ed7';
    }

    // tiny hide/show when scrolling down on mobile
    if (window.innerWidth <= 768) {
        header.style.transform = (goingDown && y > 120) ? 'translateY(-100%)' : 'translateY(0)';
    } else {
        header.style.transform = 'translateY(0)';
    }
}, { passive: true });

// Modal functionality
const modal = document.getElementById('appointmentModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close');

function openModal() {
    modal.classList.add('is-open');
}

function closeModal() {
    modal.classList.remove('is-open');
}

openBtn.onclick = openModal;
closeBtn.onclick = closeModal;

window.onclick = (e) => {
    if (e.target == modal) {
        closeModal();
    }
};

// Form validation
const form = document.getElementById('appointmentForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name.length < 3) {
        alert("Enter valid name");
        return;
    }

    if (phone.length < 10) {
        alert("Enter valid phone number");
        return;
    }

    alert("Appointment Booked Successfully!");
    closeModal();
    form.reset();
});

// Smooth scroll for nav links (safe)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        nav.classList.remove('active');
    });
});

// Scroll reveal + stagger + counters
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('.reveal');

function animateCounter(el) {
    const to = Number(el.getAttribute('data-count') || '0');
    if (!Number.isFinite(to) || to <= 0) return;
    if (el.getAttribute('data-counted') === 'true') return;
    el.setAttribute('data-counted', 'true');

    const duration = 900;
    const start = performance.now();
    const from = 0;

    function format(n) {
        return n >= 1000 ? n.toLocaleString() : String(n);
    }

    function tick(now) {
        const t = Math.min(1, (now - start) / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        const val = Math.round(from + (to - from) * eased);
        el.textContent = format(val);
        if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
}

function onInView(el) {
    el.classList.add('in-view');
    if (el.classList.contains('stat')) animateCounter(el);
}

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            onInView(entry.target);
            io.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => {
        if (el.hasAttribute('data-stagger')) {
            // stagger based on order inside its parent
            const parent = el.parentElement;
            const siblings = parent ? Array.from(parent.querySelectorAll('[data-stagger]')) : [];
            const idx = Math.max(0, siblings.indexOf(el));
            el.style.setProperty('--stagger-delay', `${idx * 90}ms`);
        }
        io.observe(el);
    });
} else {
    // fallback: show everything
    revealEls.forEach((el) => onInView(el));
}

// Counters are inside highlight cards; mark those as "stat" too if needed
document.querySelectorAll('.stat').forEach((el) => {
    // ensure counter runs when revealed (even if not marked reveal)
    if (el.closest('.reveal')) return;
});
