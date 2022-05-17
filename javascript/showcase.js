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

function populateCards() {
  var cards = document.getElementsByClassName("myShowcaseCard");
  for (
    let i = 0;
    i < cards.length && i < gitHubRepos.length && i < descriptions.length;
    i++
  ) {
    let card = cards[i];
    let repoLink = gitHubRepos[i];

    let image = card.firstElementChild;
    let body = card.lastElementChild;

    image.src = `https://raw.githubusercontent.com/${repoLink.substring(
      repoLink.indexOf("Steven")
    )}/main/thumbnail.png`;

    image.alt = `${repoLink.substring(
      repoLink.lastIndexOf("McCawley") + 9
    )}-Thumbnail`;

    let title = body.childNodes[1];
    title.classList.remove("placeholder-wave");
    title.innerHTML = `${repoLink
      .substring(repoLink.lastIndexOf("McCawley") + 9)
      .replace(/-/g, " ")}`;

    let text = body.childNodes[3];
    text.classList.remove("placeholder-wave");
    let first = text.firstElementChild;
    while (first) {
      first.remove();
      first = text.firstElementChild;
    }
    text.innerHTML = descriptions[i];

    let actionButton = body.childNodes[5].firstElementChild;
    let repoButton = body.childNodes[5].lastElementChild;

    actionButton.href = `https://stevenmccawley.github.io/${repoLink.substring(
      repoLink.lastIndexOf("McCawley") + 9
    )}/`;
    actionButton.classList.remove("placeholder-wave");
    actionButton.classList.remove("disabled");

    repoButton.href = repoLink;
    repoButton.classList.remove("placeholder-wave");
    repoButton.classList.remove("disabled");

    card.classList.remove("blankCard");
  }
}

function removeEmptyCards() {
  let blankCards = document.getElementsByClassName("blankCard");
  if (blankCards.length <= 0) return;

  let len = blankCards.length;
  for (let i = 0; i < len; i++) blankCards[0].remove();
}

window.onload = () => {
  populateCards();
};
