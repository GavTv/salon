document.addEventListener("DOMContentLoaded", function () {
  // Анимация при прокрутке
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(".service-card, .about-content");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.classList.add("fade-in");
      }
    });
  };

  // Запускаем при загрузке
  animateOnScroll();

  // И при прокрутке
  window.addEventListener("scroll", animateOnScroll);

  // Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Учитываем высоту хедера
          behavior: "smooth",
        });
      }
    });
  });
});
