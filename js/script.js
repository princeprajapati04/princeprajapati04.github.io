// 🔄 Hide preloader after page loads
window.addEventListener('load', () => {
  const loader = document.getElementById('preloader');
  if (loader) loader.style.display = 'none';
});

// 📶 Scroll progress bar logic
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) progressBar.style.width = scrolled + '%';
});

// 🌙 Dark mode toggle logic
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
