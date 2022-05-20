const gitHubRepos = [
  "https://github.com/StevenMcCawley/Real-Time-Bus-Tracker",
  "https://github.com/StevenMcCawley/PacMenExercise",
  "https://github.com/StevenMcCawley/Eyes-That-Follow",
];
const descriptions = [
  "Small exercise to track busses near MIT in real time",
  "Creates PacMen dynamically on the page that bounce against the edge of the window",
  "A short exercise with eyes that track mouse movement on screen",
];

const populateCards = () => {
  for (
    let i = 0;
    i < cards.length && i < gitHubRepos.length && i < descriptions.length;
    i++
  ) {
    const card = cards[i];
    const repoLink = gitHubRepos[i];
    const image = card.querySelector(".card-img-top");
    const body = card.querySelector(".card-body");
    const projectTitle = `${repoLink.substring(repoLink.lastIndexOf("/") + 1)}`;
    const title = body.querySelector(".card-title");
    // const title = body.querySelector(".carb-body > .card-title");
    const text = body.querySelector(".card-text");
    // const text = body.querySelector(".carb-body > .card-text");
    const btnGroup = card.querySelectorAll(".btn");

    image.src = `https://raw.githubusercontent.com/StevenMcCawley/${projectTitle}/main/thumbnail.png`;
    image.alt = `${projectTitle}-Thumbnail`;

    title.classList.remove("placeholder-wave");
    title.innerHTML = projectTitle.replace(/-/g, " ");

    text.classList.remove("placeholder-wave");
    for (let p of text.querySelectorAll(".placeholder")) p.remove();
    text.innerHTML = descriptions[i];

    for (let btn of btnGroup)
      btn.classList.remove("placeholder-wave", "disabled");
    btnGroup[0].href = `https://stevenmccawley.github.io/${projectTitle}/`;
    btnGroup[1].href = repoLink;

    card.classList.remove("blankCard");
  }
};

const removeEmptyCards = () => {
  let blankCards = document.getElementsByClassName("blankCard");
  if (blankCards.length <= 0) return;

  let len = blankCards.length;
  for (let i = 0; i < len; i++) blankCards[0].remove();
};

window.onload = () => {
  populateCards();
};
