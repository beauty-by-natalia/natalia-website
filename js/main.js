/**
 * Natália Vicente — Nail Designer
 * Main script: mobile navigation + minor UX helpers.
 */
(function () {
  'use strict';

  const body       = document.body;
  const toggle     = document.querySelector('[data-nav-toggle]');
  const drawer     = document.querySelector('[data-nav-drawer]');
  const backdrop   = document.querySelector('[data-nav-backdrop]');
  const drawerLinks = drawer ? drawer.querySelectorAll('a') : [];

  function openNav() {
    drawer.classList.add('is-open');
    backdrop.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    body.classList.add('no-scroll');
  }

  function closeNav() {
    drawer.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('no-scroll');
  }

  if (toggle && drawer && backdrop) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      expanded ? closeNav() : openNav();
    });

    backdrop.addEventListener('click', closeNav);

    drawerLinks.forEach((link) => link.addEventListener('click', closeNav));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeNav();
      }
    });
  }

  // Close drawer if viewport crosses the desktop breakpoint.
  const mq = window.matchMedia('(min-width: 960px)');
  mq.addEventListener('change', (e) => { if (e.matches) closeNav(); });
})();
