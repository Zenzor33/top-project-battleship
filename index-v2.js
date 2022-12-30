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
      // returns true if hit, returns false if miss
      if (this.didHit(coordinates)) {
        const ship = this.didHit(coordinates);
        ship.hit();
        // paint dom here?
        console.log(
          `Hit on ${ship.shipName} at coordinates ${coordinates.x}, ${coordinates.y}`
        );
        return true;
      } else {
        this.missedShots.push(coordinates);
        console.log(`Miss at coordinates ${coordinates.x}, ${coordinates.y}`);
        return false;
      }
    },
    didHit(coordinates) {
      for (let i = 0; i < this.ships.length; i++) {
        const ship = this.ships[i];
        const shipCoordinates = ship.coordinates;
        // console.log(typeof coordinates.x);
        // console.log(shipCoordinates.some((e) => e.x == coordinates.x));
        const hit = shipCoordinates.some(
          (e) => e.x == coordinates.x && e.y == coordinates.y
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
