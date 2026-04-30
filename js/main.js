// ============================================
// Menu Mobile — King Burger
// ============================================

const initMobileMenu = () => {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navLinks = document.querySelector("[data-menu]");

  if (!menuToggle || !navLinks) return;

  // Criar overlay se não existir no HTML
  let overlay = document.querySelector(".menu-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "menu-overlay";
    document.body.appendChild(overlay);
  }

  const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    const newState = !isExpanded;
    menuToggle.setAttribute("aria-expanded", newState);
    navLinks.classList.toggle("is-active", newState);
    overlay.classList.toggle("is-active", newState);
    document.body.style.overflow = newState ? "hidden" : "";
  };

  menuToggle.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // Fecha o menu ao clicar em um link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("is-active")) {
        toggleMenu();
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  console.log("🍔 King Burger: Menu inicializado");
});
