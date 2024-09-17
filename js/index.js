const body = document.querySelector("body"),
  modeSwitch = body.querySelector(".mode-switch"),
  menuItems = body.querySelector(".menu-items li");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  console.log("dark");
});

menuItems.addEventListener("click", () => {
  menuItems.classList.toggle("open");
});
