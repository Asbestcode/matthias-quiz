const container = document.body;
if (localStorage.getItem("mode") == "dark") {
  container.setAttribute("data-theme", "dark");
} else {
  container.setAttribute("data-theme", "light");
}