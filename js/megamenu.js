const body = document.querySelector("body"),
  modeSwitch = body.querySelector(".checkbox-label"),
  modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});
