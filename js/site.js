(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu-utama');
  const year = document.getElementById('tahun');

  if (year) year.textContent = new Date().getFullYear();
  if (!toggle || !menu) return;

  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';
  const closeMenu = ({ returnFocus = false } = {}) => {
    if (!isOpen()) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Buka navigasi');
    menu.classList.remove('is-open');
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener('click', () => {
    const opening = !isOpen();
    toggle.setAttribute('aria-expanded', String(opening));
    toggle.setAttribute('aria-label', opening ? 'Tutup navigasi' : 'Buka navigasi');
    menu.classList.toggle('is-open', opening);
  });

  menu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu({ returnFocus: true });
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });

  const desktopNav = window.matchMedia('(min-width: 561px)');
  desktopNav.addEventListener('change', (event) => {
    if (event.matches) closeMenu();
  });

  const links = [...menu.querySelectorAll('a[href^="#"]')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach((section) => observer.observe(section));
  }
})();
