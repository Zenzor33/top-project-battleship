const ships = [
  { name: "Carrier", length: 5, isSelected: false },
  { name: "Battleship", length: 4, isSelected: false },
  { name: "Destroyer", length: 3, isSelected: false },
  { name: "Submarine", length: 3, isSelected: false },
  { name: "Patrol boat", length: 2, isSelected: false },
];

const getShipLength = () => {
  const arr = ships.filter((e) => e.name === "Carrier").map((e) => e.length);
  return arr[0];
};
const shipLength = getShipLength();

console.log(shipLength);
