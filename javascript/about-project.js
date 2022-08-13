const about = document.querySelectorAll(".about-project");
const aboutPage = document.querySelectorAll(".about-project-container");
const aboutPageX = document.querySelectorAll(".about-project-container-close-x");
const wholeAboutPageContent = document.querySelectorAll(".about-project-container");
const aboutPageChildContainer = document.querySelectorAll(".about-project-child-container");

about.forEach(link => {
  link.addEventListener("click", () => {
    aboutPage.forEach(page => {
      page.style.display = "flex";
    });
  });
});

aboutPageX.forEach(x => {
  x.addEventListener("click", () => {
    aboutPage.forEach(page => {
      page.style.display = "none";
    });
  });
});

wholeAboutPageContent.forEach(a => {
  a.addEventListener("click", event => {
    aboutPageChildContainer.forEach(a => {
      if (a !== event.target && !a.contains(event.target)) {
        aboutPage.forEach(page => {
          page.style.display = "none";
        });
      }
    });
  });
});
