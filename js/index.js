const answerButtons = document.querySelectorAll(".card__button");
const AllAnswers = document.querySelectorAll(".card__answer");
const bookmarkIcons = document.querySelectorAll(".card__bookmark svg");

answerButtons.forEach((item, index) => {
  item.addEventListener('click', () => {
    const answer = AllAnswers[index];
    const button = answerButtons[index];
    answer.classList.toggle("hidden");
    if (button.textContent.includes("Show Answer")) {
      button.textContent = "Hide Answer"
    } else {
      button.textContent = "Show Answer"
    }
  })
})

bookmarkIcons.forEach((item) => {
  item.addEventListener('click', () => {
    const path = item.querySelector("g path");
    bookmarkIconSwitch(path);
  })
});

function bookmarkIconSwitch (path) {
  if (path.classList.contains("fill")) {
    path.classList.remove("fill");
    path.classList.add("saved");
  } else {
    path.classList.remove("saved");
    path.classList.add("fill");
  } 
};

