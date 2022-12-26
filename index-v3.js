const ship = (shipName, coordinates) => {
  // coordinates expects array of objects eg [{x:1, y: 0}, {x:2, y:3}]
  return {
    length: coordinates.length,
    beenHit: 0,
    shipName,
    coordinates,
    isSunk() {
      return this.beenHit >= this.length ? true : false;
    },
    hit() {
      return (this.beenHit += 1);
    },
  };
};

const gameBoard = () => {
  return {
    ships: [], // array of objects of all ships created
    missedShots: [],
    createShip(shipName, coordinates) {
      const newShip = ship(shipName, coordinates);
      this.ships.push(newShip);
      return newShip;
    },
    receiveAttack(coordinates) {
      if (this.didHit(coordinates)) {
        const ship = this.didHit(coordinates);
        ship.hit();
        return console.log(
          `Hit on ${ship.shipName} at coordinates ${coordinates.x}, ${coordinates.y}`
        );
      } else {
        this.missedShots.push(coordinates);
        return console.log(
          `Miss at coordinates ${coordinates.x}, ${coordinates.y}`
        );
      }
    },
    didHit(coordinates) {
      for (let i = 0; i < this.ships.length; i++) {
        const ship = this.ships[i];
        const hit = ship.coordinates.some(
          (e) => e.x === coordinates.x && e.y === coordinates.y
        );
        if (hit) return ship;
      }
      return false;
    },
    isEveryShipSunk() {
      for (let i = 0; i < this.ships.length; i++) {
        const ship = this.ships[i];
        if (ship.isSunk()) continue;
        else return false;
      }
      return true;
    },
  };
};

const board1 = gameBoard();
const testShip = board1.createShip("testShip", [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
]);
console.log(board1.receiveAttack({ x: 1, y: 2 }));
console.log(board1.receiveAttack({ x: 6, y: 9 }));
console.log(board1.isEveryShipSunk());
