let shipNames = [
  {
    shipName: "Ship1",
    coordinates: [
      { x: 1, y: 2 },
      { x: 3, y: 4 },
    ],
  },
  {
    shipName: "Ship2",
    coordinates: [
      { x: 5, y: 6 },
      { x: 7, y: 8 },
    ],
  },
];

let missesArr1 = [{ x: 5, y: 6 }];
let missesArr2 = [
  { x: 5, y: 6 },
  { x: 7, y: 8 },
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];

// create new array of ships coordinates
let filteredArr = shipNames.map((e) => e.coordinates);
console.log(filteredArr);
