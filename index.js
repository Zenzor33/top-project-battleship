// Begin your app by creating the Ship factory function
// Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.

module.exports.createShip = function (length) {
  return {
    length,
    beenHit: 0,
    sunk: false,
    hit() {
      this.beenHit += 1;
    },
    isSunk() {
      this.beenHit >= this.length ? true : false;
    },
  };
};

// module.exports = createShip;
