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

// 🌞 Update icon based on mode
function updateDarkModeIcon(isDark) {
  const icon = document.getElementById('dark-mode-icon');
  if (!icon) return;
  icon.classList.remove('fa-moon', 'fa-sun');
  icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
}

// 🚀 Rocket Launch + Hero Reveal + Mobile Menu Logic
window.addEventListener('DOMContentLoaded', () => {
  // Rocket Animation
  const rocket = document.getElementById('rocket');
  const smoke = document.getElementById('smoke');
  const heroContent = document.getElementById('hero-content');

  if (rocket && smoke && heroContent) {
    rocket.addEventListener('click', () => {
      rocket.classList.add('launching');
      smoke.classList.add('smoke-active');
      setTimeout(() => {
        heroContent.style.opacity = 1;
        heroContent.style.transition = 'opacity 1s ease-in';
      }, 2000);
    });
  }

  // ✅ Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const closeBtn = document.getElementById('closeBtn');

  if (hamburger && mobileOverlay) {
    hamburger.addEventListener('click', () => {
      mobileOverlay.classList.add('active');
    });

    // ✅ Close menu when any link is clicked
    document.querySelectorAll('.mobile-links a').forEach(link => {
      link.addEventListener('click', () => {
        mobileOverlay.classList.remove('active');
      });
    });
  }
});
