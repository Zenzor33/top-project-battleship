// Begin your app by creating the Ship factory function
// Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.

export const createShip = (length, coordinates) => {
  // coordinates expects a 2d array
  return {
    length,
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
    recieveAttack(coordinates) {
      // if (ship1.coordinates.includes(coordinates))
    },
  };
};

/* 
Gameboards should have a receiveAttack function 
- that takes a pair of coordinates, 
- determines whether or not the attack hit a ship and 
- then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
*/
