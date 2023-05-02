const AllButtons = document.querySelectorAll(".card__button");
const AllAnswers = document.querySelectorAll(".card__answer");
const bookmarkIcons = document.querySelectorAll(".card__bookmark svg");

AllButtons.forEach((el, i) => {
  el.addEventListener('click', () => {
    const answer = AllAnswers[i];
    const button = AllButtons[i];
    answer.classList.toggle("hidden");
    if (button.textContent.includes("Show Answer")) {
      button.textContent = "Hide Answer"
    } else {
      button.textContent = "Show Answer"
    }
  })
})

bookmarkIcons.forEach((el) => {
  el.addEventListener('click', () => {
    const fill = el.querySelector("g path");
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

