const header = document.querySelector("header");
const currentIconBg = document.querySelector(".current");
const navIconFill = document.querySelectorAll(".navbar__icon .icon .fill");
const circle = document.getElementById("circle");
const circleMoveRight = document.getElementById("circleMoveRight");
const circleMoveLeft = document.getElementById("circleMoveLeft");
let root = document.documentElement;

if (localStorage.getItem("mode") == "dark") {
  circle.setAttribute("cx", "36.5")
};

document.querySelector("#switch").addEventListener("click", function () {
  let circlePos = circle.cx.animVal.value;
  if (circlePos == "16.5") {
    circleMoveRight.beginElement();
    addDarkmode();
  } else {
    circleMoveLeft.beginElement();
    removeDarkmode();
  }
});
  
  function addDarkmode() {
    container.setAttribute("data-theme", "dark");
    container.style.color = "white";
    localStorage.setItem("mode", "dark"); 
  }
  
  function removeDarkmode() {
    container.setAttribute("data-theme", "light");
    container.style.color = "";
    localStorage.setItem("mode", "light");
  }