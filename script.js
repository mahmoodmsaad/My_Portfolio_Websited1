// Handles mobile navigation toggle and closes the menu when a link is selected.
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    });
}

// Updates the copyright year automatically.
const currentYearEl = document.getElementById('current-year');
if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
}

// Adds a subtle active-state indicator to nav links while scrolling.
const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver(
    (entries) => {
        const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
            return;
        }

        const activeId = visible.target.getAttribute('id');
        navLinks?.querySelectorAll('a').forEach((link) => {
            const isActive = link.getAttribute('href') === `#${activeId}`;
            link.classList.toggle('is-active', isActive);
        });
    },
    {
        threshold: [0.3, 0.6, 0.9],
    }
);

sections.forEach((section) => observer.observe(section));
