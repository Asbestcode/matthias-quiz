const header = document.querySelector("header");
const currentIconBg = document.querySelector(".current");
const navIconFill = document.querySelectorAll(".navbar__icon .icon .fill");
const circle = document.getElementById("circle");
const circleMove = document.getElementById("circleMove");
let root = document.documentElement;

let darkmode = localStorage.getItem("darkmode");

if (darkmode == "true") {
    addDarkmode();
  }
  document.querySelector("#switch").addEventListener("click", function () {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode == "true") {
      removeDarkmode();
    } else {
      addDarkmode();
    }
  });
  
  function addDarkmode() {
    circleMove.beginElement();
    circle.setAttribute("cx", "36.5");
    circleMove.setAttribute("from", "36.5");
    circleMove.setAttribute("to", "16.5");
    darkmode = localStorage.setItem("darkmode", "true");
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
    circleMove.beginElement();
    circle.setAttribute("cx", "16.5");
    circleMove.setAttribute("from", "16.5");
    circleMove.setAttribute("to", "36.5");
    darkmode = localStorage.setItem("darkmode", "false");
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