var isLight = false;
const toggleBtn = document.querySelector("#toggle-theme");

let darkModePath =
  "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z";
let darkModePathDown =
  "M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8z";
let lightModePath =
  "M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z";
let lightModePathDown =
  "M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z";

const swapTheme = (lightMode) => {
  if (lightMode) swapToLight();
  else swapToDark();
};
const swapToLight = () => {
  // change main
  main.classList.replace("bg-black", "bg-light");
  main.classList.replace("text-light", "text-dark");

  //change showcase
  showcase.classList.replace("bg-light", "bg-dark");
  showcase.querySelector("h2").classList.replace("text-light", "text-dark");
  for (let card of cards) {
    card.classList.replace("bg-black", "bg-white");
    card.classList.replace("text-light", "text-dark");
  }

  //change resume
  resumeActual.classList.replace("bg-dark", "bg-white");
  resumeActual.classList.replace("text-light", "text-dark");
  resumeActual.querySelector("a").classList.replace("text-light", "text-dark");

  //change contact
  contact.classList.replace("bg-light", "bg-dark");
  for (let input of inputs) input.classList.replace("text-light", "text-dark");
  contact
    .querySelector("textArea")
    .classList.replace("text-light", "text-dark");
};
const swapToDark = () => {
  // change main
  main.classList.replace("bg-light", "bg-black");
  main.classList.replace("text-dark", "text-light");

  //change showcase
  showcase.classList.replace("bg-dark", "bg-light");
  showcase.querySelector("h2").classList.replace("text-dark", "text-light");
  for (let card of cards) {
    card.classList.replace("bg-white", "bg-black");
    card.classList.replace("text-dark", "text-light");
  }

  //change resume
  resumeActual.classList.replace("bg-white", "bg-dark");
  resumeActual.classList.replace("text-dark", "text-light");
  resumeActual.querySelector("a").classList.replace("text-dark", "text-light");

  //change contact
  contact.classList.replace("bg-dark", "bg-light");
  for (let input of inputs) input.classList.replace("text-dark", "text-light");
  contact
    .querySelectorAll("textArea")[0]
    .classList.replace("text-dark", "text-light");

  // for (let i = 0; i < inputs.length; i++)
  //   inputs[i].classList.replace("text-dark", "text-light");
};
const lower = (svg) => {
  svg.style.transform = "translate(0%, 25%)";
};
const resetPosistion = (svg) => {
  svg.style.transform = "translate(0%, 0%)";
};
const draw = (path) => {
  toggleBtn
    .getElementsByTagName("svg")[0]
    .getElementsByTagName("path")[0]
    .setAttribute("d", path);
};

toggleBtn.addEventListener("click", () => {
  isLight = !isLight;
  swapTheme(isLight);
  if (isLight) draw(lightModePath);
  else draw(darkModePath);
  resetPosistion(toggleBtn.querySelector("svg"));
});

toggleBtn.addEventListener("mouseover", () => {
  if (isLight) draw(lightModePathDown);
  else draw(darkModePathDown);
  lower(toggleBtn.querySelector("svg"));
});

toggleBtn.addEventListener("mouseout", () => {
  if (isLight) draw(lightModePath);
  else draw(darkModePath);
  resetPosistion(toggleBtn.querySelector("svg"));
});
