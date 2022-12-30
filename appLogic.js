// const index = require("./index-v2");
// const dom = require("./dom"); // require is not defined
import * as dom from "./dom.js";
import * as index from "./index-v2.js";

const playerGameboard = index.gameboard();
const createPlayerShips = () => {
  playerGameboard.createShip("Carrier", [
    { x: 0, y: 9 },
    { x: 1, y: 9 },
    { x: 2, y: 9 },
    { x: 3, y: 9 },
    { x: 4, y: 9 },
  ]);
  playerGameboard.createShip("Battleship", [
    { x: 0, y: 7 },
    { x: 1, y: 7 },
    { x: 2, y: 7 },
    { x: 3, y: 7 },
  ]);
  playerGameboard.createShip("Destroyer", [
    { x: 0, y: 5 },
    { x: 1, y: 5 },
    { x: 2, y: 5 },
  ]);
  playerGameboard.createShip("Submarine", [
    { x: 0, y: 3 },
    { x: 1, y: 3 },
    { x: 2, y: 3 },
  ]);
  playerGameboard.createShip("Patrol boat", [
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
  ]);
};

// Logic to handle shots at computer gameboard

dom.createGrid();
createPlayerShips();
dom.paintPlayerShips(playerGameboard.ships);
