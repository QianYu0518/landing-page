const menuButton = document.getElementById('menuButton');
const siteNav = document.getElementById('siteNav');

menuButton.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '✕' : '☰';
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
