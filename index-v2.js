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
