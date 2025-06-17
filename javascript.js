//Create squares in grid
function drawGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${grid.offsetWidth / gridSize}px`;
        square.style.height = `${grid.offsetWidth / gridSize}px`;
        square.style.outline = "solid red 1px"
        grid.appendChild(square);
    }
}

//Removes the squares in the grid
function removeGrid() {
    const squares = document.querySelectorAll(".square");
    for (let square of squares) {
        square.remove();
    }
}

function buttonClick() {
    const input = prompt("Enter new Grid Size (must be between 1 and 100):");
    if (input === null) {
        return;
    }
    if (!Number.isInteger(Number(input)) || input > 100 || input < 1) {
        alert("Please enter a valid number");
        return;
    }

    gridSize = Number(input);

    removeGrid();
    drawGrid();
}

let gridSize = 16;

const grid = document.querySelector("#grid");
//Event for drawing on the grid
grid.addEventListener("mouseover", (e) => {
    const target = e.target;
    
    target.style.backgroundColor = "black";
})

const button = document.querySelector("button");
button.addEventListener("click", buttonClick);
drawGrid();




