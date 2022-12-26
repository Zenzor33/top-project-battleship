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
    shipNames: [],
    pushShipName(shipName) {
      return this.shipNames.push(shipName);
    },
    missedShots: [],
    createShip(shipName, coordinates) {
      this.pushShipName(shipName);
      return (shipName = ship(shipName, coordinates));
    },
    receiveAttack(coordinates) {
      // coordinates expects array of objects eg [{x:1, y: 0}, {x:2, y:3}]
      if (this.didHit(coordinates)) {
        const ship = this.didHit(coordinates);
        ship.hit();
      } else {
        this.missedShots.push(coordinates);
      }
    },
    didHit(coordinates) {
      for (let i = 0; i < this.shipNames.length; i++) {
        const ship = gametboard.shipNames[i];
        if (ship.coordinates.some((e) => e === coordinates)) return ship;
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
