const gridContainer = document.querySelector("#gridContainer")

/// Function that sets the grid 

function setGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList = "gridItem";
        gridItem.addEventListener("mouseover", colorChange);
        gridContainer.appendChild(gridItem);
    }
}

/// Function that randomly changes the color of each div.

function colorChange(e){
    const rgbRed = Math.floor(Math.random() * 256);
    const rgbGreen = Math.floor(Math.random() * 256);
    const rgbBlue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`;
}

/// Restart Button.

const restartBtn = document.getElementById("restartBtn");
restartBtn.onclick = () => restartSketch()

function restartSketch(){
    emptyGrid();
    userGridSize();
}

function emptyGrid() {
    gridContainer.innerHTML = "";
}

/// prompt to the user asking for a new grid size

function userGridSize() {
    let userSize = prompt("Please, enter a grid size from 1 to 100");

    if (userSize !== null) {
        userSize = parseInt(userSize);
        if (userSize < 1 || userSize > 100 || Number.isNaN(userSize)) {
            alert("It must be a number between 1 and 100.");
            userGridSize();
        } else {
            setGrid(userSize)
        }
    }
}

/// Declaration that initializes the program

userGridSize();