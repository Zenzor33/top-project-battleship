const playerContainer = document.querySelector(".playerContainer");
const cpuContainer = document.querySelector(".cpuContainer");
const moduleContainer = document.querySelector(".module");

const createModule = () => {
  const cells = 100;
  for (let i = 0; i < cells; i++) {
    const coordinateDiv = document.createElement("div");
    coordinateDiv.classList.add("coordinate");
    playerContainer.appendChild(coordinateDiv);
  }
};

const createGrid = () => {
  const cells = 100;
  for (let i = 0; i < cells; i++) {
    const coordinateDiv = document.createElement("div");
    coordinateDiv.classList.add("coordinate");
    playerContainer.appendChild(coordinateDiv);
  }
  for (let i = 0; i < cells; i++) {
    const coordinateDiv = document.createElement("div");
    coordinateDiv.classList.add("coordinate");
    cpuContainer.appendChild(coordinateDiv);
  }
};

createGrid();
