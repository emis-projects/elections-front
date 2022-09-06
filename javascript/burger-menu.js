const burger = document.querySelectorAll(".burger-svg");
const showNav = document.querySelectorAll(".burger-menu-navbar");

burger.forEach(singleBurger => {
  singleBurger.addEventListener("click", () => {
    showNav.forEach(singleShowNav => {
      singleShowNav.classList.toggle("show-burger-menu");
    });
  });
});
