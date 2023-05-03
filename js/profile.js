const header = document.querySelector("header");
const currentIconBg = document.querySelector(".current");
const navIconFill = document.querySelectorAll(".navbar__icon .icon .fill");
const circle = document.getElementById("circle");
const circleMoveRight = document.getElementById("circleMoveRight");
const circleMoveLeft = document.getElementById("circleMoveLeft");
let root = document.documentElement;

document.querySelector("#switch").addEventListener("click", function () {
  let circlePos = circle.cx.animVal.value;
  if (circlePos == "16.5") {
    addDarkmode();
    circleMoveRight.beginElement();
  } else {
    removeDarkmode();
    circleMoveLeft.beginElement();
  }
});
  
  function addDarkmode() {
    root.style.setProperty('--light-color', "#2c2c3d");
    root.style.setProperty('--mid-color', "#161626");
    root.style.setProperty('--dark-color', "#4b4285");
    root.style.setProperty('--white', "#000000");
    root.style.setProperty('--icon-light', "#2c2c3d");
    root.style.setProperty('--icon-dark', "#ffedf4");
    document.body.style.color = "#ffedf4";
    header.style.color = "#ffedf4";
    currentIconBg.classList.remove("current");
    currentIconBg.style.backgroundColor = "#4b4285";
    navIconFill.forEach(navIconFill => navIconFill.style.fill = "transparent");
  }
  
  function removeDarkmode() {
    root.style.setProperty('--light-color', "#ffedf4");
    root.style.setProperty('--mid-color', "#a9a3e4");
    root.style.setProperty('--dark-color', "#2c2c3d");
    root.style.setProperty('--white', "#ffffff");
    root.style.setProperty('--icon-light', "#ffffff");
    root.style.setProperty('--icon-dark', "#2c2c3d");
    document.body.style.color = "";
    currentIconBg.classList.add("current");
    currentIconBg.style.backgroundColor = "";
    navIconFill.forEach(navtIconFill => navtIconFill.style.fill = "");
  }