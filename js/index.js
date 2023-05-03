const AllButtons = document.querySelectorAll(".card__button");
const AllAnswers = document.querySelectorAll(".card__answer");
const bookmarkIcons = document.querySelectorAll(".card__bookmark svg");

AllButtons.forEach((element, index) => {
  element.addEventListener('click', () => {
    const answer = AllAnswers[index];
    const button = AllButtons[index];
    answer.classList.toggle("hidden");
    if (button.textContent.includes("Show Answer")) {
      button.textContent = "Hide Answer"
    } else {
      button.textContent = "Show Answer"
    }
  })
})

bookmarkIcons.forEach((element) => {
  element.addEventListener('click', () => {
    const fill = element.querySelector("g path");
    bookmarkIconSwitch(fill);
  })
});

function bookmarkIconSwitch (fill) {
  if (fill.classList.contains("fill")) {
    fill.classList.remove("fill");
    fill.classList.add("saved");
  } else {
    fill.classList.remove("saved");
    fill.classList.add("fill");
  } 
};
