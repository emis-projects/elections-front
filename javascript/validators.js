const votingEndBtn = document.getElementById("votingEndBtn");
const votingSuccessPopup = document.querySelector(".voting-success-popup");
const votingCloseX = document.querySelector(".voting-success-message-x");

votingEndBtn.addEventListener("click", () => {
  votingSuccessPopup.style.display = "flex";
});

votingCloseX.addEventListener("click", () => {
  votingSuccessPopup.style.display = "none";
});
