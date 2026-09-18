// Take numder of grid as an input from users
const gridNumber = document.querySelector(".grid-number")
const submit = document.querySelector(".submit-btn");
const container = document.querySelector(".container");
const reset = document.querySelector(".reset-btn");
submit.addEventListener("click", () => {
    if (gridNumber.value <=64 && gridNumber.value >= 1) {
        container.innerHTML = "";
        createGrids(gridNumber.value);
    }
})

// Clear the grid
reset.addEventListener("click", () => {
    const grids = document.querySelectorAll(".grid")
    grids.forEach((grid) => {
        grid.style.backgroundColor = "";
    }
)})


// Create a function that generate grids
function createGrids(n) {
    let totalGrid = n * n;
    let gridSize = 560 / n;
    let mouseOver = false;
    for (let i = 0; i < totalGrid; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.border = "2px solid black";
        grid.style.width = `${gridSize}px`
        grid.style.height = `${gridSize}px`;
        grid.addEventListener("click", () => {
            if (!mouseOver) {
                mouseOver = true;
            }
            else if (mouseOver) {
                mouseOver = false;
            }
        })
        grid.addEventListener("mouseover", () => {
            if (mouseOver) {
                grid.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
            }
        })
        container.appendChild(grid);
    }

}

function randomNum() {
    return Math.floor(Math.random() * 256);
}