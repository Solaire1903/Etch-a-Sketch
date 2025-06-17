let gridSize = 16;
const grid = document.querySelector("#grid");

//Create squares in grid
for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${grid.offsetWidth / gridSize}px`;
    square.style.height = `${grid.offsetWidth / gridSize}px`;
    grid.appendChild(square);
}

//Event Listener for drawing on the grid
grid.addEventListener("mouseover", (e) => {
    const target = e.target;
    
    target.style.backgroundColor = "black";
})

const button = document.querySelector("button");
button.addEventListener("click", buttonClick);

function buttonClick() {
    const input = prompt("Enter new grid Size (must be smaller than 100):");
}