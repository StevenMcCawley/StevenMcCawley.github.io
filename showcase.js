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
  /* Get card objects into a list */
  var cards = document.getElementsByClassName("myShowcaseCard");
  /* interating over the list... */
  for (
    let i = 0;
    i < cards.length && i < gitHubRepos.length && i < descriptions.length;
    i++
  ) {
    let card = cards[i];
    /* get link to github repo for project */
    let repoLink = gitHubRepos[i];

    // console.log("card");
    // console.log(card);
    let image = card.firstElementChild;
    let body = card.lastElementChild;

    /* set card-img-top src to project thumbnail src */
    image.src = `https://raw.githubusercontent.com/${repoLink.substring(
      repoLink.indexOf("Steven")
    )}/main/thumbnail.png`;
    /* set card-img-top alt to project thumbnail alt */
    image.alt = `${repoLink.substring(
      repoLink.lastIndexOf("McCawley") + 9
    )}-Thumbnail`;

    let bodyChildren = body.childNodes;
    // console.log("Children of card body");
    // console.log(bodyChildren);

    let title = bodyChildren[1];
    // console.log("Card title: ");
    // console.log(title);
    title.classList.remove("placeholder-wave");
    title.innerHTML = `${repoLink
      .substring(repoLink.lastIndexOf("McCawley") + 9)
      .replace(/-/g, " ")}`;

    let text = bodyChildren[3];
    // console.log("Card text: ");
    // console.log(text);
    text.classList.remove("placeholder-wave");
    let first = text.firstElementChild;
    while (first) {
      first.remove();
      first = text.firstElementChild;
    }
    text.innerHTML = descriptions[i];

    let buttonGroup = bodyChildren[5];
    // console.log("Card buttons: ");
    // console.log(buttonGroup);
    let actionButton = buttonGroup.firstElementChild;
    let repoButton = buttonGroup.lastElementChild;

    actionButton.href = `https://stevenmccawley.github.io/${repoLink.substring(
      repoLink.lastIndexOf("McCawley") + 9
    )}/`;
    actionButton.classList.remove("placeholder-wave");
    actionButton.classList.remove("disabled");

    repoButton.href = repoLink;
    repoButton.classList.remove("placeholder-wave");
    repoButton.classList.remove("disabled");

    card.classList.remove("blankCard");

    // console.log("image");
    // console.log(image);
    // console.log("body");
    // console.log(body);
  }
}

function removeEmptyCards() {
  let blankCards = document.getElementsByClassName("blankCard");
  if (blankCards.length <= 0) return;

  // console.log("Blank cards: " + blankCards.length);
  // console.log(blankCards);

  let len = blankCards.length;
  for (let i = 0; i < len; i++)
    // console.log("Removing card...");
    // console.log(card);
    blankCards[0].remove();

  // let classlist = document.getElementById("cardContainer").classList
  // classlist.remove("justify-content-center");
  // classlist.remove("justify-content-md-between");
  // classlist.add("justify-content-center");
  // classlist.add("justify-content-md-between");
}

window.onload = () => {
  console.log("Hello world!");
  populateCards();
  //removeEmptyCards();
};
