(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu-utama');
  const year = document.getElementById('tahun');

  if (year) year.textContent = new Date().getFullYear();
  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Buka navigasi');
    menu.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Buka navigasi' : 'Tutup navigasi');
    menu.classList.toggle('is-open', !isOpen);
  });

  menu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu();
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
