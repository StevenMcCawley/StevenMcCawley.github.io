//let navbar = document.getElementById("navOptions");

// let n = document
//   .getElementById("navOptions")
//   .getElementsByClassName("nav-link");

Array.from(
  document.getElementById("navOptions").getElementsByClassName("nav-link")
).forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.replace("border-dark", "border-primary");
    element.classList.add("text-white");
  });

  element.addEventListener("mouseout", () => {
    element.classList.replace("border-primary", "border-dark");
    element.classList.remove("text-white");
  });
});