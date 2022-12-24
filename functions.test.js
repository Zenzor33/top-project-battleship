//     // "jest --watchAll"
const index = require("./index");

describe("createShip", () => {
  const testShip = index.createShip([
    [1, 2],
    [3, 4],
  ]);
  it("should contain properties: length, beenHit, sunk, hit, and isSunk", () => {
    const result = testShip;
    const args = ["length", "beenHit", "sunk", "hit", "isSunk"];
    args.forEach((a) => {
      expect(result).toHaveProperty(a);
    });
  });
  it("createShip.hit() should increment the beenHit property", () => {
    const result = testShip;
    const currentBeenHit = result.beenHit;
    expect(result.hit()).toBe(currentBeenHit + 1);
  });
  it("createShip.isSunk() should retun true if beenHit == length", () => {
    const result = testShip;
    result.beenHit = 3;
    expect(result.isSunk()).toBe(true);
  });
  it("createShip.isSunk() should retun true if beenHit > length", () => {
    const result = testShip;
    result.beenHit = 4;
    expect(result.isSunk()).toBe(true);
  });
  it("createShip.coordinates should match the coordinate parameter", () => {
    const result = testShip;
    expect(result.coordinates).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});

describe("gameBoard", () => {
  const testShip = index.createShip([
    [1, 2],
    [3, 4],
  ]);
  const testBoard = index.gameBoard();
  it("receiveAttack should determine whether or not the attack hit a ship", () => {
    const ship = testShip;
    const board = testBoard;
    const result = board.receiveAttack([3, 4], ship.coordinates);
    expect(result).toBeTruthy();

    const result2 = board.receiveAttack([6, 9], ship.coordinates);
    expect(result2).toBeFalsy();
  });
  it("receiveAttack should throw if the parameter is not a length 2 array", () => {
    const board = testBoard;
    const ship = testShip;
    const args = [
      ["1", 0],
      [1, x],
    ];
    expect(() => {
      board.receiveAttack([[1, "x"]], ship.coordinates);
    }).toThrow();
  });
  // it('receiveAttack sends the hit function to the correct ship')
  // it('receiveAttack records the coordinates of the missed shot')
});
