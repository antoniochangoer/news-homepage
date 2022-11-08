const menuOpen = document.querySelector(".nav__hamburger");
const menuClose = document.querySelector(".nav__logo--close");
const sideMenu = document.querySelector(".side-menu");
const backdrop = document.querySelector(".backdrop");

const openMenu = () => {
  backdrop.classList.add("backdrop--show");
  sideMenu.classList.add("show-menu");
};

const closeMenu = () => {
  backdrop.classList.remove("backdrop--show");
  sideMenu.classList.remove("show-menu");
};

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);
