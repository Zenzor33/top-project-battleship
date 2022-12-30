export const ship = (shipName, coordinates) => {
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

export const gameboard = () => {
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

export const player = (name, humanOrComputer) => {
  return {
    player,
  };
};

// const playerGameboard = gameboard();
// playerGameboard.createShip("Carrier", [
//   { x: 0, y: 9 },
//   { x: 1, y: 9 },
//   { x: 2, y: 9 },
//   { x: 3, y: 9 },
//   { x: 4, y: 9 },
// ]);
// playerGameboard.createShip("Battleship", [
//   { x: 0, y: 7 },
//   { x: 1, y: 7 },
//   { x: 2, y: 7 },
//   { x: 3, y: 7 },
// ]);
// playerGameboard.createShip("Destroyer", [
//   { x: 0, y: 5 },
//   { x: 1, y: 5 },
//   { x: 2, y: 5 },
// ]);
// playerGameboard.createShip("Submarine", [
//   { x: 0, y: 3 },
//   { x: 1, y: 3 },
//   { x: 2, y: 3 },
// ]);
// playerGameboard.createShip("Patrol boat", [
//   { x: 0, y: 1 },
//   { x: 1, y: 1 },
//   { x: 2, y: 1 },
// ]);

// console.log(playerGameboard.ships);
