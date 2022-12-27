const index = require("./index-v2");

describe("ship", () => {
  const gameBoard = index.gameboard();
  const testShip = gameBoard.createShip("testShip", [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
  ]);
  it("Ship should have properties: length, beenHit, shipName, coordinates, isSunk, hit", () => {
    const result = testShip;
    const args = [
      "length",
      "beenHit",
      "hit",
      "isSunk",
      "shipName",
      "coordinates",
    ];
    args.forEach((a) => {
      expect(result).toHaveProperty(a);
    });
  });
  it("ship.hit() should increment the beenHit property", () => {
    const result = testShip;
    const currentBeenHit = result.beenHit;
    expect(result.hit()).toBe(currentBeenHit + 1);
  });
  it("ship.isSunk() should retun true if beenHit >= length", () => {
    const result = testShip;
    result.beenHit = 3;
    expect(result.isSunk()).toBeTruthy();

    result.beenHit = 2;
    expect(result.isSunk()).toBeTruthy();
  });
  it("ship.isSunk() should retun false if length > beenHit", () => {
    const result = testShip;
    result.beenHit = 1;
    expect(result.isSunk()).toBeFalsy();
  });
});

describe("gameboard", () => {
  const gameBoard = index.gameboard();
  const testShip = gameBoard.createShip("testShip", [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
  ]);
  it("reciveAttack should determine whether the attack MISSED a ship", () => {
    // why does this not work if below the 'correct ship' function?
    gameBoard.receiveAttack({ x: 6, y: 11 });
    const result = testShip.beenHit;
    expect(result).toBe(0);
  });
  it("receiveAttack records the coordinates of the missed shot", () => {
    gameBoard.receiveAttack({ x: 7, y: 12 });
    let result = gameBoard.missedShots.find((e) => e.x === 7 && e.y === 12);
    expect(result).toBeTruthy();
  });
  it("receiveAttack sends the hit function to the correct ship", () => {
    gameBoard.receiveAttack({ x: 1, y: 2 });
    const result = testShip.beenHit;
    expect(result).toBe(1);
  });
  it("Gameboards should be able to report whether or not all of their ships have been sunk.", () => {
    const testShip2 = gameBoard.createShip("testShip", [
      { x: -2, y: -2 },
      { x: -1, y: -1 },
    ]);
    const testShip3 = gameBoard.createShip("testShip", [
      { x: -3, y: -3 },
      { x: -4, y: -4 },
    ]);
    testShip.beenHit = 2;
    testShip2.beenHit = 2;
    testShip3.beenhit = 2;
    const result = gameBoard.isEveryShipSunk();
    expect(result).toBeTruthy;
  });
});
