// Begin your app by creating the Ship factory function
// Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.

export const createShip = (coordinates, shipName) => {
  // coordinates expects an array of objects
  // playerShips.push({shipName: {coordinates}})
  return {
    length: coordinates.length,
    beenHit: 0,
    sunk: false,
    coordinates,
    hit() {
      return (this.beenHit += 1);
    },
    isSunk() {
      return this.beenHit >= this.length ? true : false;
    },
  };
};

export const gameBoard = () => {
  return {
    missedShots: {},
    receiveAttack(coordsArr, shipXY) {
      // coordsArr NOW expects a 2-length array of numbers
      // shipXY expects an array of objects
      if (
        coordsArr.length != 2 ||
        coordsArr.some((e) => typeof e !== "number")
      ) {
        throw new Error("invalid coordinates length");
      }
      // check if ship exists on the coordinates
      return this.doCoordsExist(coordsArr, shipXY);
    },
    doCoordsExist(coordsArr, shipXY) {
      let x = coordsArr[0];
      let y = coordsArr[1];
      let xExists = null;
      let yExists = null;
      for (let i = 0; i < shipXY.length; i++) {
        for (let j = 0; j < shipXY[i].length; j++) {
          if (j === 0 && shipXY[i][j] === x) xExists = true;
          if (j === 1 && shipXY[i][j] === y) yExists = true;
        }
      }
      return xExists && yExists ? true : false;
    },
  };
};

/* 
Gameboards should have a receiveAttack function 
- that takes a pair of coordinates, 
- determines whether or not the attack hit a ship and 
- then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
*/
