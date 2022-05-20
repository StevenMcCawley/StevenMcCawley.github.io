const main = document.querySelector("#main");
const [about, showcase, resume, contact] = [
  ...document.querySelectorAll("#main > section"),
];
const cards = showcase.querySelectorAll(".card");
const resumeActual = resume.querySelector("#actualResume");
const inputs = contact.querySelectorAll("input");

for (let e of [
  ...document.querySelectorAll("#navbar-nav-buttons > .nav-link"),
]) {
  e.addEventListener("mouseover", () => {
    e.classList.replace("border-dark", "border-primary");
    e.classList.add("text-white");
  });

  e.addEventListener("mouseout", () => {
    e.classList.replace("border-primary", "border-dark");
    e.classList.remove("text-white");
  });
}
