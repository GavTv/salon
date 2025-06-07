// Можно добавить функциональность для кнопки
document.querySelector(".consult-btn").addEventListener("click", function () {
  alert("Consultation booking form will appear here");
  // Здесь будет логика открытия формы
});

// Анимация появления элементов при скролле
document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  timelineItems.forEach((item) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(item);
  });
});
