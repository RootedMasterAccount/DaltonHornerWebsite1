// Update the copyright year.
const yearLabel = document.getElementById('year');
yearLabel.textContent = new Date().getFullYear();

// Mobile navigation.
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('primary-nav');
const desktopLayout = window.matchMedia('(min-width: 701px)');

// Update the menu's visibility and accessibility labels.
function setMenuOpen(isOpen) {
  navigation.classList.toggle('open', isOpen);

  menuToggle.setAttribute('aria-expanded', String(isOpen));

  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Close navigation' : 'Open navigation'
  );
}

function closeMenu() {
  setMenuOpen(false);
}

// Open or close the menu when its button is clicked.
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

  setMenuOpen(!isOpen);
});

// Close the menu after selecting a navigation link.
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Close the menu with Escape and return focus to its button.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuToggle.focus();
  }
});

// Reset the mobile menu when switching to the desktop layout.
desktopLayout.addEventListener('change', (event) => {
  if (event.matches) {
    closeMenu();
  }
});