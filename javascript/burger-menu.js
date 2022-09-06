const burger = document.querySelectorAll(".burger-svg");
const showNav = document.querySelectorAll(".burger-menu-navbar");

burger.forEach(singleBurger => {
  singleBurger.addEventListener("click", () => {
    console.log(1);
    showNav.forEach(singleShowNav => {
      singleShowNav.classList.toggle("show-burger-menu");
      console.log(2);
    });
  });
});

// function hideMenuQuery(x) {
//   if (!x.matches) {
//     showNav.style.display = "none";
//   }
// }

// let x = window.matchMedia("(max-width: 768px)");
// hideMenuQuery(x);
// x.addListener(hideMenuQuery);
