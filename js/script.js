// 🔄 Hide preloader after page loads
window.addEventListener('load', () => {
  const loader = document.getElementById('preloader');
  if (loader) loader.style.display = 'none';

  // Set dark mode icon on load
  const isDark = localStorage.getItem('dark-mode') === 'true';
  if (isDark) document.body.classList.add('dark-mode');
  updateDarkModeIcon(isDark);
});

// 📶 Scroll progress bar logic
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) progressBar.style.width = scrolled + '%';
});

// 🌙 Dark mode toggle logic with icon swap
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', isDark);
  updateDarkModeIcon(isDark);
}

// 🌓 Update toggle icon
function updateDarkModeIcon(isDark) {
  const icon = document.getElementById('dark-mode-icon');
  if (icon) icon.textContent = isDark ? '🌞' : '🌜';
}
