const ship = (shipName, coordinates) => {
  // coordinates expects array of objects eg [{x:1, y: 0}, {x:2, y:3}]
  gameboard.shipNames.push(shipName);
  return {
    length,
    beenHit: 0,
    shipName,
    coordinates,
    isSunk() {
      return length >= this.beenHit ? true : false;
    },
    hit() {
      return (this.beenHit += 1);
    },
  };
};

const gameboard = () => {
  return {
    shipNames: [],
    missedShots: [],
    createShip(shipName, coordinates) {
      return (shipName = ship(shipName, coordinates));
    },
    // Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
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
