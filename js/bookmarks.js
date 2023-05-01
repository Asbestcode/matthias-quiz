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
    darkmode = localStorage.setItem("darkmode", "true");
    root.style.setProperty('--color-body', "#ffffff");
  }
  
  function removeDarkmode() {
    darkmode = localStorage.setItem("darkmode", "false");
    root.style.setProperty('--color-body', "#2c2c3d");
  }