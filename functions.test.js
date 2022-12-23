// const { it } = require("node:test");
// const { describe } = require("yargs");
// const { exportAllDeclaration } = require("@babel/types");
const index = require("./index");

describe("createShip", () => {
  it("should contain properties: length, beenHit, sunk, hit, and isSunk", () => {
    const result = index.createShip(1);
    console.log(result);
    const args = ["length", "beenHit", "sunk", "hit", "isSunk"];
    args.forEach((a) => {
      expect(result).toHaveProperty(a);
    });
  });
});
