const gridContainer = document.querySelector("#gridContainer")
/// Event triggers when the window loads

window.addEventListener("load", setGrid(16));

/// Function triggered by previous events size =16 
function setGrid(size){
    setGridSize(size);
    finishGrid(size);
}

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function finishGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList = "gridItem";
        gridItem.addEventListener("mouseover", colorChange);
        gridContainer.appendChild(gridItem);
    }
}

function colorChange(e){
    const rgbRed = Math.floor(Math.random() * 256);
    const rgbGreen = Math.floor(Math.random() * 256);
    const rgbBlue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`;
}

/// Restart Button

const restartBtn = document.getElementById("restartBtn");
restartBtn.onclick = () => restartSketch()

function restartSketch(){
    emptyGrid();
    setGrid(16);
}

function emptyGrid() {
    gridContainer.innerHTML = "";
}
