// Check the user's preference from local storage
  const currentMode = localStorage.getItem('mode');
  if (currentMode) {
      body.classList.add(currentMode);
      updateIcon(currentMode);
  } else {
      // Set default mode if not found in local storage
      body.classList.add('light-mode');
      updateIcon('light-mode');
  }

  // Toggle between light and dark mode
  modeToggle.addEventListener('click', function () {
      if (body.classList.contains('light-mode')) {
          body.classList.replace('light-mode', 'dark-mode');
          localStorage.setItem('mode', 'dark-mode');
          updateIcon('dark-mode');
      } else {
          body.classList.replace('dark-mode', 'light-mode');
          localStorage.setItem('mode', 'light-mode');
          updateIcon('light-mode');
      }
  });
  
  // ===== Contact Form Validation =====
  document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
  
    contactForm?.addEventListener("submit", (e) => {
      if (!contactForm.checkValidity()) {
        e.preventDefault();
        alert("Please fill out all required fields correctly.");
      }
    });
  });
  