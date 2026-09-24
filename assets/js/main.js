// Reveal: elements marked [data-reveal] fade in when they scroll into view.
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('[data-reveal]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!targets.length || reduceMotion || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    targets.forEach((el) => {
        el.classList.add('is-reveal-ready');
        observer.observe(el);
    });
});

// Mobile navigation: toggles the menu and keeps aria-expanded in sync.
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;

    const setOpen = (open) => {
        toggle.setAttribute('aria-expanded', String(open));
        menu.classList.toggle('header__menu--active', open);
        document.body.classList.toggle('menu-open', open);
    };

    toggle.addEventListener('click', () => {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', (event) => {
        if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            setOpen(false);
            toggle.focus();
        }
    });

    window.matchMedia('(min-width: 900px)').addEventListener('change', (event) => {
        if (event.matches) setOpen(false);
    });
});

// Umami events: clicks towards contact, e-mail links and Tally form submissions.
// Umami attaches the current page to each event.
(() => {
    const track = (name, data) => {
        if (window.umami) window.umami.track(name, data);
    };

    document.addEventListener('click', (event) => {
        const link = event.target.closest('a[href]');
        if (!link) return;
        const label = link.textContent.trim();
        if (link.protocol === 'mailto:') {
            track('clic-email', { label });
        } else if (link.pathname === '/fr/contact/' || link.getAttribute('href') === '#contact') {
            track('clic-contact', { label });
        }
    });

    window.addEventListener('message', (event) => {
        if (event.origin !== 'https://tally.so' || typeof event.data !== 'string') return;
        if (!event.data.includes('Tally.FormSubmitted')) return;
        track('formulaire-envoye');
    });
})();
