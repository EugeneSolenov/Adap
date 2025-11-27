document.addEventListener("DOMContentLoaded", function () {
  // Бургер-меню
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });

    document.addEventListener("click", function (event) {
      const isClickInsideNav =
        navToggle.contains(event.target) || navMenu.contains(event.target);
      if (!isClickInsideNav && navMenu.classList.contains("active")) {
        closeMobileMenu();
      }
    });

    function closeMobileMenu() {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    }
  }

  // Обработка формы контактов
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (name && email && message) {
        alert("Сообщение отправлено! Спасибо за ваше сообщение.");
        contactForm.reset();
      } else {
        alert("Пожалуйста, заполните все поля формы.");
      }
    });
  }
});