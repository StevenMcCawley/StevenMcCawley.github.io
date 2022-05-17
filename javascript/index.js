Array.from(
  document.getElementById("navbar-nav-buttons").getElementsByClassName("nav-link")
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