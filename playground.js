let testShipCoords = [
  [1, 2],
  [5, 6],
];

let shipXY = [
  [1, 2],
  [5, 6],
];

function doCoordsExist(coordsArr) {
  // coordsArr expects a 2-length array
  let x = coordsArr[0];
  let y = coordsArr[1];
  let xExists = null;
  let yExists = null;
  for (let i = 0; i < shipXY.length; i++) {
    for (let j = 0; j < shipXY[i].length; j++) {
      if (j === 0 && shipXY[i][j] === x) xExists = true;
      if (j === 1 && shipXY[i][j] === y) yExists = true;
    }
  }
  return xExists && yExists ? true : false;
}

let testArr = [0, 2, "s"];
console.log(testArr.some((e) => typeof e !== "number"));
