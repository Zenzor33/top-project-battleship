import * as index from "./index-v2.js";
import * as appLogic from "./appLogic.js";

const playerContainer = document.querySelector(".playerContainer");
const cpuContainer = document.querySelector(".cpuContainer");

export const createGrid = () => {
  const cells = 100;
  const calculateX = (num) => num % 10;
  const calculateY = (num) => {
    if (num <= 9) return 9;
    if (num > 9 && num <= 19) return 8;
    if (num > 19 && num <= 29) return 7;
    if (num > 29 && num <= 39) return 6;
    if (num > 39 && num <= 49) return 5;
    if (num > 49 && num <= 59) return 4;
    if (num > 59 && num <= 69) return 3;
    if (num > 69 && num <= 79) return 2;
    if (num > 79 && num <= 89) return 1;
    if (num > 89 && num <= 100) return 0;
  };
  // create playerGameboard ship placements
  for (let i = 0; i < cells; i++) {
    const coordinateDiv = document.createElement("div");
    coordinateDiv.classList.add("playerCoordinate");
    coordinateDiv.setAttribute("id", `p${i}`);
    coordinateDiv.setAttribute("player-cpu-x", calculateX(i));
    coordinateDiv.setAttribute("player-cpu-y", calculateY(i));
    playerContainer.appendChild(coordinateDiv);
  }
  // create playerGameboard attacking gameboard
  for (let i = 0; i < cells; i++) {
    const coordinateDiv = document.createElement("div");
    coordinateDiv.classList.add("cpuCoordinate");
    coordinateDiv.setAttribute("id", `c${i}`);
    coordinateDiv.setAttribute("data-cpu-x", calculateX(i));
    coordinateDiv.setAttribute("data-cpu-y", calculateY(i));
    coordinateDiv.addEventListener("click", nameLater);
    cpuContainer.appendChild(coordinateDiv);
  }
};

function nameLater(e) {
  const x = e.target.getAttribute("data-cpu-x");
  const y = e.target.getAttribute("data-cpu-y");
  const didHit = appLogic.cpuGameboard.receiveAttack({ x: x, y: y });
  didHit ? processHit(x, y) : processMiss(x, y);
  // is everyCpuShipSunk ? endGame : processCpuMove
  const isEveryCpuShipSunk = appLogic.cpuGameboard.isEveryShipSunk();
  isEveryCpuShipSunk ? endGame("player") : processCpuMove();
}

function generateRandomX() {
  return Math.floor(Math.random() * 10);
}

function generateRandomY() {
  return Math.floor(Math.random() * 10);
}

const targets = [];
function processCpuMove() {
  const x = generateRandomX();
  const y = generateRandomY();
  if (targets.some((e) => e.x == x && e.y == y)) processCpuMove();
  appLogic.playerGameboard.receiveAttack({ x: x, y: y });
  targets.push({ x: x, y: y });
  const isEveryPlayerShipSunk = appLogic.playerGameboard.isEveryShipSunk();
  if (isEveryPlayerShipSunk) endGame("computer");
}

function endGame(winner) {
  winner === "player"
    ? console.log("player wins")
    : console.log("computer wins");
}

function processHit(x, y) {
  const id = document.querySelector(`[data-cpu-x="${x}"][data-cpu-y="${y}"]`);
  id.style.backgroundColor = "red";
  id.removeEventListener("click", nameLater);
}

function processMiss(x, y) {
  const id = document.querySelector(`[data-cpu-x="${x}"][data-cpu-y="${y}"]`);
  id.style.backgroundColor = "blue";
  id.removeEventListener("click", nameLater);
}

export const paintPlayerShips = (shipArr) => {
  const paintPlayerCoordinate = (x, y) => {
    const id = document.querySelector(
      `[player-cpu-x="${x}"][player-cpu-y="${y}"]`
    );
    id.style.backgroundColor = "black";
  };
  shipArr.map((e) => e.coordinates.map((e) => paintPlayerCoordinate(e.x, e.y)));
};
