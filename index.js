
document.addEventListener("mousemove", (e) => {
  const overlay = document.querySelector(".background-overlay");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  overlay.style.transform = `translate(-${x * 15}px, -${y * 15}px)`;
});


window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".glass");
  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  setTimeout(() => {
    elements.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, 300);
});


