const body = document.querySelector("body"),
  modeSwitch = body.querySelector(".mode-switch");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  console.log("dark");
});
