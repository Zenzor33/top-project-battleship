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

const gameboard = () => {
  return {
    shipNames: [], // array of obj
    missedShots: [],
    pushShipName(shipName, coordinates) {
      return this.shipNames.push({ shipName, coordinates });
    },
    createShip(shipName, coordinates) {
      this.pushShipName(shipName, coordinates);
      return (shipName = ship(shipName, coordinates));
    },
    receiveAttack(coordinates) {
      // coordinates expects array of objects eg [{x:1, y: 0}, {x:2, y:3}]
      console.log(this.didHit(coordinates));
      if (this.didHit(coordinates)) {
        const ship = this.didHit(coordinates);
        ship.hit();
        console.log("here");
        return console.log(
          `Hit on ${ship.shipName} at coordinates ${ship.coordinates}`
        );
      } else {
        this.missedShots.push(coordinates);
      }
    },
    didHit(coordinates) {
      for (let i = 0; i < this.shipNames.length; i++) {
        const ship = this.shipNames[i];
        const hit = ship.coordinates.some(
          (e) => e.x === coordinates.x && e.y === coordinates.y
        );
        if (hit) return ship;
      }
      return false;
    },
    isEveryShipSunk(shipNames) {
      for (let i = 0; i < shipNames.length; i++) {
        if (shipNames[i].isSunk()) continue;
        return false;
      }
      return true;
    },
  };
};

const gameBoard = gameboard();
const testShip = gameBoard.createShip("testShip", [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
]);
console.log(gameBoard.receiveAttack({ x: 1, y: 2 }));
