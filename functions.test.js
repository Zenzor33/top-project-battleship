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
  it("receiveAttack sends the hit function to the correct ship", () => {
    const gameBoard = gameBoard;
    const testShip = testShip;
    gameBoard.receiveAttack({ x: 1, y: 2 });
    const result = testShip.beenHit;
    expect(result).toBe(1);
  });
});
// describe("createShip", () => {
//   const testShip = index.createShip([
//     { x: 3, y: 4 },
//     { x: 1, y: 2 },
//   ]);
//   it("should contain properties: length, beenHit, sunk, hit, and isSunk", () => {
//     const result = testShip;
//     const args = ["length", "beenHit", "sunk", "hit", "isSunk"];
//     args.forEach((a) => {
//       expect(result).toHaveProperty(a);
//     });
//   });
//   it("createShip.hit() should increment the beenHit property", () => {
//     const result = testShip;
//     const currentBeenHit = result.beenHit;
//     expect(result.hit()).toBe(currentBeenHit + 1);
//   });
//   it("createShip.isSunk() should retun true if beenHit == length", () => {
//     const result = testShip;
//     result.beenHit = 3;
//     expect(result.isSunk()).toBe(true);
//   });
//   it("createShip.isSunk() should retun true if beenHit > length", () => {
//     const result = testShip;
//     result.beenHit = 4;
//     expect(result.isSunk()).toBe(true);
//   });
//   it("createShip.coordinates should match the coordinate parameter", () => {
//     const result = testShip;
//     expect(result.coordinates).toEqual([
//       { x: 3, y: 4 },
//       { x: 1, y: 2 },
//     ]);
//   });
//   it("createShip sends ship data to playerShips array", () => {
//     const testShip = index.createShip(
//       [
//         { x: 3, y: 4 },
//         { x: 1, y: 2 },
//       ],
//       "testShip"
//     );
//     const result = index.playerShips.find(
//       (e) =>
//         e.shipName === "testShip" &&
//         e.coordinates ===
//           [
//             { x: 3, y: 4 },
//             { x: 1, y: 2 },
//           ]
//     );
//     expect(result).toBeTruthy();
//   });
// });

// describe("gameBoard", () => {
//   const testShip = index.createShip([
//     { x: 3, y: 4 },
//     { x: 1, y: 2 },
//   ]);
//   const testBoard = index.gameBoard();
//   it("receiveAttack should determine whether the attack HIT a ship", () => {
//     const ship = testShip;
//     const board = testBoard;
//     board.receiveAttack([3, 4], ship.coordinates);
//     expect(ship.beenHit).toBe(1);
//   });
//   it("reciveAttack should determine whether the attack MISSED a ship", () => {
//     const ship = testShip;
//     const board = testBoard;
//     board.receiveAttack([6, 9], ship.coordinates);
//     expect(ship.beenHit).toBe(0);
//   });
//   it("receiveAttack records the coordinates of the missed shot", () => {
//     const ship = testShip;
//     const board = testBoard;
//     board.receiveAttack([6, 9], ship.coordinates);
//     let result = board.missedShots.find((e) => e.x === 6 && e.y === 9);
//     expect(result).toBeTruthy();
//   });
//   it("receiveAttack should throw if the parameter is not a length 2 array of numbers", () => {
//     const board = testBoard;
//     const ship = testShip;
//     const args = [["1", 0], [1, "x"], [[1, 2]]];
//     args.forEach((a) =>
//       expect(() => {
//         board.receiveAttack(a, ship.coordinates);
//       }).toThrow()
//     );
//   });
//   it("receiveAttack sends the hit function to the correct ship", () => {
//     const testShip = index.createShip(
//       [
//         { x: 3, y: 4 },
//         { x: 1, y: 2 },
//       ],
//       "testShip"
//     );
//     const board = testBoard;
//     let xyList = index.playerShips;
//     board.receiveAttack([3, 4], testShip.coordinates);
//     expect(testShip.beenHit).toBe(1);
//   });
// });
