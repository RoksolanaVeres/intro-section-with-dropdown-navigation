// DOM elements
const overlay = document.querySelector(".overlay");
const hamburgerIcon = document.querySelector(".menu-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownCloseButton = document.querySelector(".dropdown__close-button");
const featuresSubmenu = document.querySelector(".features__submenu");
const featuresDropdown = document.querySelector(".features__dropdown");
const companySubmenu = document.querySelector(".company__submenu");
const companyDropdown = document.querySelector(".company__dropdown");

// functions

// event listeners
hamburgerIcon.addEventListener("click", () => {
  dropdownMenu.classList.add("dropdown-menu--open");
  overlay.classList.add("overlay--visible");
});

dropdownCloseButton.addEventListener("click", () => {
  overlay.classList.remove("overlay--visible");
  dropdownMenu.classList.remove("dropdown-menu--open");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("overlay--visible");
  dropdownMenu.classList.remove("dropdown-menu--open");
});

featuresSubmenu.addEventListener("click", () => {
  featuresDropdown.classList.toggle("features__dropdown--open");
  featuresSubmenu.classList.toggle("submenu__dropdown-arrow--up");
});

companySubmenu.addEventListener("click", () => {
  companyDropdown.classList.toggle("company__dropdown--open");
  companySubmenu.classList.toggle("submenu__dropdown-arrow--up");
});
