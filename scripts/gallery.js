const outerContainer = document.querySelector(".outer-container");
const cardContainer = document.querySelector(".card-container");
const imgPaths = [
  "/img/path-tree-side.jpg",
  "/img/susie-castle.jpg",
  "/img/trail-path-ft-baby.jpg",
  "/img/trail-roots.jpg",
  "/img/tree-log-rainbow.jpg",
  "/img/water.jpg",
  "/img/waterfall-ft-leaves.jpg"
];


function createCard() {
  for (let i = 0; i < imgPaths.length; i++) {
    let tempContainer = document.createElement("div");
    tempContainer.className = "card-container";
    tempContainer.style.backgroundImage = `url("${imgPaths[i]}")`;
    outerContainer.append(tempContainer);
  }
}

createCard()