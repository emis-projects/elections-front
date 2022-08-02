const form = document.querySelector(".election-question-answer");

// form.addEventListener("submit", e => {
//   e.preventDefault();
//   console.log(e.target.question1.value);
// });

const questions = [...document.querySelectorAll(".question-container")];
questions.forEach((question, index) => {
  const thisNumber = question.querySelector(".election-question-number");
  const allNumber = question.querySelector(".election-all-questions-number");

  thisNumber.innerHTML = index + 1 + "&nbsp;";
  allNumber.innerText = questions.length;
});
