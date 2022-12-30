const playerContainer = document.querySelector(".playerContainer");
const cpuContainer = document.querySelector(".cpuContainer");
const modalGrid = document.querySelector(".modalGrid");
const selectShips = document.querySelector(".selectShips");

// const createModal = () => {
//   const cells = 100;
//   for (let i = 0; i < cells; i++) {
//     const coordinateDiv = document.createElement("div");
//     coordinateDiv.classList.add("coordinate");
//     modalGrid.appendChild(coordinateDiv);
//   }
//   const ships = [
//     { name: "Carrier", length: 5, isSelected: false },
//     { name: "Battleship", length: 4, isSelected: false },
//     { name: "Destroyer", length: 3, isSelected: false },
//     { name: "Submarine", length: 3, isSelected: false },
//     { name: "Patrol boat", length: 2, isSelected: false },
//   ];
//   // display text in selectShips div as the user selects

//   const isEveryShipSelected = () => {
//     for (let i = 0; i < ships.length; i++) {
//       const ship = ships[i];
//       if (!ship.isSelected) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const getNextShip = () => {
//     for (let i = 0; i < ships.length; i++) {
//       const ship = ships[i];

//       if (!ship.isSelected) {
//         return ship;
//       }
//       return "No more ships to select"; // this closes the modal -- rewrite later
//     }
//   };
//   const changeHoverLength = (length) => {
//     //
//   };
//   const shipSelctionLogic = () => {
//     if (isEveryShipSelected()) return false;
//     else {
//       const nextShipObj = getNextShip();
//       // change coordinate selectors
//       const selectionStr = document.createTextNode(
//         `Place your ${nextShipObj.name}`
//       );
//       selectShips.appendChild(selectionStr);
//     }
//   };
//   shipSelctionLogic();
// };

export const createGrid = () => {
  console.log("createGrid executed");
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
    coordinateDiv.addEventListener("click", () =>
      console.log(coordinateDiv.id)
    );
    cpuContainer.appendChild(coordinateDiv);
  }
};

export const paintPlayerShips = (shipArr) => {
  const paintPlayerCoordinate = (x, y) => {
    const id = document.querySelector(
      `[player-cpu-x="${x}"][player-cpu-y="${y}"]`
    );
    id.style.backgroundColor = "black";
  };
  shipArr.map((e) => e.coordinates.map((e) => paintPlayerCoordinate(e.x, e.y)));
};

// export const paintPlayerShips = (shipArr) => {
//   // ship arr expects an array of objects
//   // replace ships from parameter
//   const ships = [
//     { name: "Carrier", length: 5, isSelected: false },
//     { name: "Battleship", length: 4, isSelected: false },
//     { name: "Destroyer", length: 3, isSelected: false },
//     { name: "Submarine", length: 3, isSelected: false },
//     { name: "Patrol boat", length: 2, isSelected: false },
//   ];
//   const getShipLength = (shipName) => {
//     const arr = ships.filter((e) => e.name === shipName).map((e) => e.length);
//     return arr[0];
//   };

//   // change arrOfIds to coordinates from data-attr
//   const placeShip = (shipLengthNum, arrOfIds) => {
//     for (let i = 0; i < shipLengthNum; i++) {
//       const placement = arrOfIds[i];
//       const id = document.getElementById(`${placement}`);
//       id.style.backgroundColor = "black";
//     }
//   };
//   // place Carrier at id p0 -> p4
//   const placeCarrier = () => {
//     // select id'
//     const shipLength = getShipLength("Carrier");
//     const placementId = ["p0", "p1", "p2", "p3", "p4"];
//     placeShip(shipLength, placementId);
//   };
//   placeCarrier();
//   // place Battleship at id p20 -> p24
//   const placeBattleship = () => {
//     // select id'
//     const shipLength = getShipLength("Battleship");
//     const placementId = ["p20", "p21", "p22", "p23"];
//     placeShip(shipLength, placementId);
//   };
//   placeBattleship();
//   // place Destroyer at id p40 -> p 42
//   const placeDestroyer = () => {
//     // select id'
//     const shipLength = getShipLength("Destroyer");
//     const placementId = ["p40", "p41", "p42"];
//     placeShip(shipLength, placementId);
//   };
//   placeDestroyer();
//   // Place Submarine at id p60 -> p p62
//   const placeSubmarine = () => {
//     // select id'
//     const shipLength = getShipLength("Submarine");
//     const placementId = ["p60", "p61", "p62"];
//     placeShip(shipLength, placementId);
//   };
//   placeSubmarine();
//   // place Patrol Boat at id p80 -> 81
//   const placePatrolBoat = () => {
//     // select id'
//     const shipLength = getShipLength("Patrol boat");
//     const placementId = ["p80", "p81"];
//     placeShip(shipLength, placementId);
//   };
//   placePatrolBoat();
// };

// createGrid();
// paintPlayerShips();
