// ---------- Dark mode ----------
(() => {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);
})();

function pulseSections() {
  // Briefly fade every major section's hue to signal the toggle is "active"
  const targets = document.querySelectorAll('header, main section, main .cs-header, main .cs-hero-image, footer');
  targets.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('theme-fade');
      setTimeout(() => el.classList.remove('theme-fade'), 300);
    }, i * 25);
  });
}

function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    pulseSections();
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// Scroll-reveal: fade/slide in elements as they enter the viewport
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();

  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // slight stagger for elements revealing together
        setTimeout(() => entry.target.classList.add('is-visible'), i * 40);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((el) => observer.observe(el));

  // Active nav link highlight based on scroll position
  const sections = document.querySelectorAll('main section, footer');
  const navLinks = document.querySelectorAll('.site-header nav a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--ink)' : '';
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach((section) => {
    if (section.id) navObserver.observe(section);
  });
});
