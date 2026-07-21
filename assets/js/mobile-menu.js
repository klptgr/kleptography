const menu = document.querySelector(".mobile-menu");
const toggle = document.querySelector(".mobile-menu-toggle");
const panel = document.querySelector(".mobile-menu-panel");
const header = document.querySelector(".site-header");

if (menu && toggle && panel && header) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    header.classList.toggle("is-menu-open", isOpen);
    document.body.classList.toggle("mobile-menu-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    panel.setAttribute("aria-hidden", !isOpen);
  });
}
