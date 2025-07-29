document.addEventListener("DOMContentLoaded", function () {
  const fullscreenMenu = document.querySelector(".fullscreen-menu");

  // Показываем меню сразу при загрузке
  fullscreenMenu.classList.add("active");

  // Закрытие меню при клике на пункт
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      fullscreenMenu.classList.remove("active");
    });
  });
});

