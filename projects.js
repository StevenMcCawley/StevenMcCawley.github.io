var exercises = [];

function makeCard(title, description, githubRepoLink, githubPagesLink) {
  let colDiv = document.createElement("div");
  colDiv.classList.add("col");

  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "shadow-sm");

  let newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  newSVG.classList.add("bd-placeholder-img", "card-img-top");
  newSVG.setAttribute("width", "100%");
  newSVG.setAttribute("height", "225");
  newSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  newSVG.setAttribute("role", "img");
  newSVG.setAttribute("aria-label", "Placeholder: Thumbnail");
  newSVG.setAttribute("preserveAspectRatio", "xMidYMid slice");
  newSVG.setAttribute("focusable", "false");

  let newTitleSVG = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "title"
  );
  newTitleSVG.innerHTML = title;

  let newRectSVG = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );
  newRectSVG.setAttribute("width", "100%");
  newRectSVG.setAttribute("height", "100%");
  newRectSVG.setAttribute("fill", "#55595c");

  let newTextSVG = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  newTextSVG.setAttribute("x", "5%");
  newTextSVG.setAttribute("y", "90%");
  newTextSVG.setAttribute("fill", "#eceeef");
  newTextSVG.setAttribute("dy", ".3em");
  newTextSVG.innerHTML = title;

  newSVG.appendChild(newTitleSVG);
  newSVG.appendChild(newRectSVG);
  newSVG.appendChild(newTextSVG);

  let cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body");

  let cardTextP = document.createElement("p");
  cardTextP.classList.add("card-text");
  cardTextP.innerHTML = description;

  let cardFlexDiv = document.createElement("div");
  cardFlexDiv.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  let cardBtnGroupDiv = document.createElement("div");
  cardBtnGroupDiv.classList.add("btn-group");

  let newAnchorAction = document.createElement("a");
  newAnchorAction.setAttribute("href", githubPagesLink);
  newAnchorAction.setAttribute("target", "_blank");

  let actionBtn = document.createElement("button");
  actionBtn.classList.add("btn", "btn-sm", "btn-outline-secondary");
  actionBtn.setAttribute("type", "button");
  actionBtn.style.backgroundColor = "#0d6efd";
  actionBtn.style.color = "#fff";
  actionBtn.style.borderColor = "#0d6efd";
  actionBtn.innerHTML = "See it in action";

  let newAnchorSource = document.createElement("a");
  newAnchorSource.setAttribute("href", githubRepoLink);
  newAnchorSource.setAttribute("target", "_blank");

  let sourceBtn = document.createElement("button");
  sourceBtn.classList.add("btn", "btn-sm", "btn-outline-secondary");
  sourceBtn.setAttribute("type", "button");
  sourceBtn.setAttribute("href", githubRepoLink);
  sourceBtn.innerHTML = "View source code";

  newAnchorAction.appendChild(actionBtn);
  newAnchorSource.appendChild(sourceBtn);
  //cardBtnGroupDiv.appendChild(actionBtn);
  cardBtnGroupDiv.appendChild(newAnchorAction);
  cardBtnGroupDiv.appendChild(newAnchorSource);
  cardFlexDiv.appendChild(cardBtnGroupDiv);
  cardBodyDiv.appendChild(cardTextP);
  cardBodyDiv.appendChild(cardFlexDiv);
  cardDiv.appendChild(newSVG);
  cardDiv.appendChild(cardBodyDiv);
  colDiv.appendChild(cardDiv);

  exercises.push(colDiv);

  //projectsContainer.appendChild(colDiv);
}

window.onload = () => {
  const projectsContainer = document.getElementById("myProjectsContainer");
  // console.log(projectsContainer);

  makeCard(
    "PacMen Exercise",
    "Short exercise that produces PacMen that bounce around the window",
    "https://github.com/StevenMcCawley/PacMenExercise",
    "https://stevenmccawley.github.io/PacMenExercise/"
  );

  makeCard(
    "Eye Exercise",
    "Short exercise where two eyes on screen follow the mouse.",
    "https://github.com/StevenMcCawley/EyeExercise",
    "https://stevenmccawley.github.io/EyeExercise/"
  );

  makeCard(
    "Real Time Bus Tracker",
    "Exercise to track busses around MIT in real time",
    "https://github.com/StevenMcCawley/Real-Time-Bus-Tracker",
    "https://stevenmccawley.github.io/Real-Time-Bus-Tracker/"
  );

  console.log(exercises);
  exercises.forEach((element) => {
    projectsContainer.appendChild(element);
  });
};
