const main = document.querySelector("main");
const form = document.querySelector('[data-js="form"]');
const question = document.querySelector('[data-js="form__question"]');
const answer = document.querySelector('[data-js="form__answer"]');
const template = document.querySelector("#template");

function countCharacters() {
    const textArea = this.querySelector("textarea");
    const countDisplay = this.querySelector("div");
    let input = textArea.value.length;
    let count = 150 - input;
    countDisplay.textContent = count + " / 150";
    if (count == 0) {
        textArea.style.backgroundColor = "var(--mid-color)";
    };
}

function countReset() {
    const countDisplay = document.querySelectorAll(".count-display");
    countDisplay.forEach((element) => {
        element.textContent = "150 / 150";
    });
}

function backgroundEffect() {
    main.classList.add("background-effect");
    setTimeout(() => {
        main.classList.remove("background-effect");
    }, "500");
}

function setClickIcon(clone) {
    const cardIcon = clone.querySelector(".card__bookmark svg");
    cardIcon.addEventListener('click', () => {
        const fill = cardIcon.querySelector("g path");
        if (fill.classList.contains("fill")) {
            fill.classList.remove("fill");
            fill.classList.add("saved");
        } else {
            fill.classList.remove("saved");
            fill.classList.add("fill");
        }; 
    });
}

function setClickButton(clone) {
    const button = clone.querySelector(".card__button");
    const answer = clone.querySelector(".card__answer");
    button.addEventListener('click', () => {
        answer.classList.toggle("hidden");
        if (button.textContent.includes("Show Answer")) {
          button.textContent = "Hide Answer"
        } else {
          button.textContent = "Show Answer"
        }
    });
}

function addCard(data) {
    const clone = template.content.cloneNode(true);
    const cardTag = document.createElement("div"); cardTag.textContent = "#" + data.tags;
    clone.querySelector(".card__question").textContent = data.question;
    clone.querySelector(".card__answer").textContent = data.answer;
    clone.querySelector(".card__tags").appendChild(cardTag);
    setClickIcon(clone);
    setClickButton(clone);
    main.appendChild(clone);
}

question.addEventListener('input', countCharacters);
answer.addEventListener('input', countCharacters);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    addCard(data);
    countReset();
    backgroundEffect();
    event.target.reset();
    event.target.elements.question.focus();
})