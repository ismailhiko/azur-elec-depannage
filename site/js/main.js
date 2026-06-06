(function () {
  'use strict';

  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* Header scroll */
  function onScroll() {
    if (!header) {
      return;
    }

    if (window.scrollY > 20) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  if (burger && nav) {
    burger.addEventListener('click', function () {
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!expanded));
      burger.setAttribute('aria-label', expanded ? 'Ouvrir le menu' : 'Fermer le menu');
      nav.classList.toggle('open');
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape' || !nav.classList.contains('open')) {
        return;
      }

      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Ouvrir le menu');
      nav.classList.remove('open');
      burger.focus();
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Ouvrir le menu');
        nav.classList.remove('open');
      });
    });
  }

  /* Scroll reveal */
  const revealEls = document.querySelectorAll(
    '.card, .pricing__main, .pricing__row, .examples__item, .feature, .contact-map, .contact-action, .section__header'
  );

  revealEls.forEach(function (el, index) {
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', Math.min(index % 6, 5) * 70 + 'ms');
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* Subtle hero pointer light */
  const hero = document.querySelector('.hero');
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (hero && !motionQuery.matches) {
    hero.addEventListener('pointermove', function (event) {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty('--hero-x', x.toFixed(2) + '%');
      hero.style.setProperty('--hero-y', y.toFixed(2) + '%');
    });
  }

  /* Smooth anchor offset handled via scroll-padding-top in CSS */
})();
