// navbar --------------------------------------------

const navbarToggle = document.querySelector(".navbar__toggle");
const navbar = document.querySelector(".navbar");

function expandMenu() {
  navbar.classList.add("navbar_expanded");
}

function collapseMenu() {
  navbar.classList.remove("navbar_expanded");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("navbar_expanded")) {
    collapseMenu();
  } else {
    expandMenu();
  }
});

const navbarMenu = navbar.querySelector(".navbar__menu");
const navbarList = navbar.querySelector(".navbar__list");

navbarList.addEventListener("click", (e) => {
  e.stopPropagation();
})

navbarMenu.addEventListener("click", collapseMenu);

//----------------------------------------------------

