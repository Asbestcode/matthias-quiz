
function getAnswerHeight(answer) {
  let answerHeight = answer.offsetHeight;
  if (!answer.classList.contains("hidden")) {
    answer.classList.add("hidden")};
  return answerHeight;
};

function clickAnswer(button, answer, answerHeight) {
  button.addEventListener('click', () => {
    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      answer.style.height = answerHeight + "px";
      button.textContent = "Hide Answer";
    } else {
      answer.classList.add("hidden");
      answer.style.height = "";
      button.textContent = "Show Answer";
    }
  })
};

function clickIcon(icon) {
  icon.addEventListener('click', () => {
    const fill = icon.querySelector("g path");
    if (fill.classList.contains("fill")) {
      fill.classList.remove("fill");
      fill.classList.add("saved");
    } else {
      fill.classList.remove("saved");
      fill.classList.add("fill");
    } 
  })
};

function setUpCards() {
  let allCards = document.querySelectorAll('[data-js="card"]');
  allCards.forEach((card) => {
    const icon = card.querySelector(".card__bookmark svg");
    const button = card.querySelector(".card__button");
    const answer = card.querySelector(".card__answer");
    let answerHeight = getAnswerHeight(answer);
    clickAnswer(button, answer, answerHeight);
    clickIcon(icon);
  });
};

setUpCards();
window.addEventListener('resize', setUpCards);