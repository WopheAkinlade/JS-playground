const html = document.documentElement;
const menuBtn = document.getElementById("menu");
const menu = document.getElementById("menu__list");
const closeMenuBtn = document.getElementById("menu__close");

const closeMenu = () => {
  menu.classList.remove("menu__list");
  menuBtn.classList.remove("closed");
  html.removeEventListener("click", closeMenuOnBodyClick);
};

// Function that the opens the menu
menuBtn.addEventListener("click", () => {
  menu.classList.add("menu__list");
  menuBtn.classList.add("closed");
  menu.addEventListener("click", closeMenu);
  html.addEventListener("click", closeMenuOnBodyClick);
});

function closeMenuOnBodyClick(event) {
  // get the event path
  const path = event.composedPath();
  // check if it has the menu element
  if (path.some((elem) => elem.id === "menu__list" || elem.id === "menu" )) {
    // terminate this function if it does
    return;
  }
  closeMenu();
}



closeMenuBtn.addEventListener("click", closeMenu);
