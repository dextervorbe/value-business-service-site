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

const servicesLightbox = document.getElementById("services-showcase-lightbox");
const servicesLightboxOpen = document.getElementById("services-showcase-open");

if (servicesLightbox && servicesLightboxOpen) {
  const dismissTargets = servicesLightbox.querySelectorAll("[data-lightbox-dismiss]");
  const closeButton = servicesLightbox.querySelector(".image-lightbox-close");
  let lastFocused = null;

  const setOpen = (open) => {
    servicesLightbox.classList.toggle("is-open", open);
    servicesLightbox.hidden = !open;
    servicesLightboxOpen.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";

    if (open) {
      lastFocused = document.activeElement;
      if (closeButton) {
        closeButton.focus();
      }
    } else if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  };

  servicesLightboxOpen.addEventListener("click", () => {
    setOpen(true);
  });

  dismissTargets.forEach((el) => {
    el.addEventListener("click", () => {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && servicesLightbox.classList.contains("is-open")) {
      setOpen(false);
    }
  });
}
