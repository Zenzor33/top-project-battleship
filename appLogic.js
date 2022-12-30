// const index = require("./index-v2");
// const dom = require("./dom"); // require is not defined
import * as dom from "./dom.js";
import * as index from "./index-v2.js";

export const playerGameboard = index.gameboard();
export const cpuGameboard = index.gameboard();
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
const createCpuShips = () => {
  cpuGameboard.createShip("Carrier", [
    { x: 5, y: 9 },
    { x: 6, y: 9 },
    { x: 7, y: 9 },
    { x: 8, y: 9 },
    { x: 9, y: 9 },
  ]);
  cpuGameboard.createShip("Battleship", [
    { x: 4, y: 7 },
    { x: 5, y: 7 },
    { x: 6, y: 7 },
    { x: 7, y: 7 },
  ]);
  cpuGameboard.createShip("Destroyer", [
    { x: 3, y: 5 },
    { x: 4, y: 5 },
    { x: 5, y: 5 },
  ]);
  cpuGameboard.createShip("Submarine", [
    { x: 3, y: 3 },
    { x: 4, y: 3 },
    { x: 5, y: 3 },
  ]);
  cpuGameboard.createShip("Patrol boat", [
    { x: 3, y: 1 },
    { x: 4, y: 1 },
    { x: 5, y: 1 },
  ]);
};

// Logic to handle shots at computer gameboard
// Event listener in coordinate grid sends X,Y coordinates to ...
// playerGameboard.receiveAttack()  ??
// is it playerGameboard or cpuGameboard?

createPlayerShips();
createCpuShips();
dom.createGrid();
dom.paintPlayerShips(playerGameboard.ships);
