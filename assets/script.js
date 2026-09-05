const printButtons = document.querySelectorAll('[data-print]');

printButtons.forEach((button) => {
  button.addEventListener('click', () => window.print());
});

const navLinks = document.querySelectorAll('nav a');
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.toggleAttribute('aria-current', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach((section) => observer.observe(section));
}
