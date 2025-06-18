//Create squares in grid
function drawGrid() {
    const fragment = document.createDocumentFragment();
    const squareSize = grid.offsetWidth / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        fragment.appendChild(square);
    }

    grid.appendChild(fragment);
}

//Removes the squares in the grid
function removeGrid() {
    const squares = document.querySelectorAll(".square");
    for (let square of squares) {
        square.remove();
    }
}

//Asks for user input and draws new grid
function buttonGridClick() {
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


//Main Script
let gridSize = 16;
let colorMode = false;

const buttonGrid = document.querySelector("#buttonGrid");
buttonGrid.addEventListener("click", buttonGridClick);

const buttonColor = document.querySelector("#buttonColor");
buttonColor.addEventListener("click", () => colorMode = !colorMode)

const grid = document.querySelector("#grid");
grid.addEventListener("mouseover", (e) => {
    const target = e.target;
    
    if (target.classList.contains("square")) {
        if (!colorMode) target.style.backgroundColor = "black";
        else {
            const red = Math.floor(Math.random() *256);
            const green = Math.floor(Math.random() *256);
            const blue = Math.floor(Math.random() *256);
            target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
    }
})

drawGrid();