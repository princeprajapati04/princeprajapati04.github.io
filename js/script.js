// ✅ Preloader (runs after full page load)
window.addEventListener('load', () => {
  const loader = document.getElementById('preloader');
  if (loader) loader.style.display = 'none';

  const isDark = localStorage.getItem('dark-mode') === 'true';
  if (isDark) {
    document.body.classList.add('dark-mode');
    updateDarkModeIcon(isDark);
  } else {
    updateDarkModeIcon(false);
  }
});

// ✅ All DOM logic
document.addEventListener('DOMContentLoaded', () => {
  // 🌙 Dark Mode Icon Toggle
  const icon = document.getElementById('dark-mode-icon');
  if (icon) {
    icon.addEventListener('click', toggleDarkMode);
  }

  // 🍔 Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobileOverlay');

  if (hamburger && mobileOverlay) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileOverlay.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-links a').forEach(link => {
      link.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      const isClickInside = mobileOverlay.contains(e.target) || hamburger.contains(e.target);
      if (!isClickInside) {
        mobileOverlay.classList.remove('active');
      }
    });
  }

  // 📶 Scroll Progress Bar
  const progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    if (!progressBar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
});

// 🌙 Toggle dark mode (make sure this is globally accessible)
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', isDark);
  updateDarkModeIcon(isDark);
}

// 🌞 Update icon for dark mode
function updateDarkModeIcon(isDark) {
  const icon = document.getElementById('dark-mode-icon');
  if (!icon) return;
  icon.classList.remove('fa-moon', 'fa-sun');
  icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
}
