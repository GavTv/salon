// Анимация появления блоков при прокрутке
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Применяем ко всем fade-in
const fadeElems = document.querySelectorAll(".fade-in");
fadeElems.forEach((el) => observer.observe(el));
