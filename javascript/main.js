//header user popup

let popupArror = document.getElementById("popup-arrow");
let userPopup = document.querySelector(".header-user-popup");
let popupContainer = document.querySelector(".header-user-container-popup-wrapper");

popupArror.addEventListener("click", () => {
  if (userPopup.style.display === "none") {
    userPopup.style.display = "block";
    popupContainer.style.border = "2px solid black";
  } else {
    userPopup.style.display = "none";
    popupContainer.style.border = "none";
  }
});
