document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const hamburger = document.querySelector(".hamburger-menu");
  const links = document.querySelectorAll(".links a");

  hamburger.addEventListener("click", () => {
    container.classList.toggle("active");
    if (container.classList.contains("active")) {
      links.forEach((link, index) => {
        link.style.setProperty('--i', `${index * 0.1}s`);
      });
    }
  });
});
