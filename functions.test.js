//     // "jest --watchAll"
const index = require("./index");

describe("createShip", () => {
  it("should contain properties: length, beenHit, sunk, hit, and isSunk", () => {
    const result = index.createShip(1);
    const args = ["length", "beenHit", "sunk", "hit", "isSunk"];
    args.forEach((a) => {
      expect(result).toHaveProperty(a);
    });
  });
  it("createShip.hit() should increment the beenHit property", () => {
    const result = index.createShip(1);
    const currentBeenHit = result.beenHit;
    expect(result.hit()).toBe(currentBeenHit + 1);
  });
  it("createShip.isSunk() should retun true if beenHit == length", () => {
    const result = index.createShip(3);
    result.beenHit = 3;
    expect(result.isSunk()).toBe(true);
  });
  it("createShip.isSunk() should retun true if beenHit > length", () => {
    const result = index.createShip(3);
    result.beenHit = 4;
    expect(result.isSunk()).toBe(true);
  });
  it("createShip.coordinates should match the coordinate parameter", () => {
    const result = index.createShip(3, [
      [1, 2],
      [2, 3],
      [4, 5],
    ]);
    expect(result.coordinates).toEqual([
      [1, 2],
      [2, 3],
      [4, 5],
    ]);
  });
});

describe("gameBoard", () => {
  it("receiveAttack should take a pair coordinates", () => {
    const result = index.gameBoard.receiveAttack([3, 4]);
  });
  // it('receiveAttack should determine whether or not the attack hit a ship')
  // it('receiveAttack sends the hit function to the correct ship')
  // it('receiveAttack records the coordinates of the missed shot')
});
