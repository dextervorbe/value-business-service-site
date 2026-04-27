const toggleButton = document.querySelector(".mobile-toggle");
const navMenu = document.querySelector(".primary-nav");

if (toggleButton && navMenu) {
  toggleButton.addEventListener("click", () => {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", String(!isExpanded));
    navMenu.classList.toggle("is-open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 860) {
        navMenu.classList.remove("is-open");
        toggleButton.setAttribute("aria-expanded", "false");
      }
    });
  });
}

if (document.body.classList.contains("page-about")) {
  window.addEventListener("load", () => {
    requestAnimationFrame(() => {
      document.body.classList.add("is-ready");
    });
  });
}
