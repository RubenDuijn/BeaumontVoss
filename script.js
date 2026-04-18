const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');
const tabs = document.querySelectorAll('.tab');
const year = document.getElementById('year');
const emailTriggers = document.querySelectorAll('.email-trigger');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('is-active'));
    tab.classList.add('is-active');
  });
});

emailTriggers.forEach((button) => {
  const user = button.dataset.user;
  const domain = button.dataset.domain;

  if (user && domain) {
    const mailto = `mailto:${user}@${domain}`;
    button.setAttribute('href', mailto);

    button.addEventListener('click', () => {
      window.location.href = mailto;
    });
  }
});
