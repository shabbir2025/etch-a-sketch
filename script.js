// Take numder of grid as an input from users
const gridNumber = document.querySelector(".grid-number")
const submit = document.querySelector(".submit-btn");
const container = document.querySelector(".container");
const reset = document.querySelector(".reset-btn");
createGrids(16); 
submit.addEventListener("click", () => {
    if (gridNumber.value <=64 && gridNumber.value >= 1) {
        container.innerHTML = "";
        createGrids(gridNumber.value);
    }
})

// Clear the grid
reset.addEventListener("click", () => {
    container.innerHTML = "";
    createGrids(16);  
})


// Create a function that generate grids
function createGrids(n) {
    let totalGrid = n * n;
    let gridSize = 568 / n;
    let mouseOver = false;
    for (let i = 0; i < totalGrid; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.border = "0.1px solid #eee";
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
                if (!randomColor) {
                    if (!brushColor) {
                        grid.style.backgroundColor = "black";
                         grid.style.border = "0.1px solid black";
                    }
                    else if (brushColor && grid.style.opacity < 1) {
                        grid.style.backgroundColor = "black";
                        grid.style.border = "0.1px solid black";
                        if (grid.style.opacity === "") {
                            grid.style.opacity = 0.1;
                        } else {
                            grid.style.opacity = Number(grid.style.opacity) + 0.1;
                        }
                    }
                }

                else {
                    let color = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
                    if (!brushColor) {
                        grid.style.backgroundColor = color;
                        grid.style.border = `0.1px solid ${color}`;
                    }
                    else if (brushColor && grid.style.opacity < 1) {
                        grid.style.backgroundColor = color;
                        grid.style.border = `0.1px solid ${color}`;
                        if (grid.style.opacity === "") {
                            grid.style.opacity = 0.1;
                        } else {
                            grid.style.opacity = Number(grid.style.opacity) + 0.1;
                        }
                    }
                }
            }
        })
        container.appendChild(grid);
    }

}

function randomNum() {
    return Math.floor(Math.random() * 256);
}

let randomColor = false;

const black = document.querySelector(".black-color");
const random = document.querySelector(".random-color");

black.addEventListener("click", () => {
    randomColor = false;
})

random.addEventListener("click", () => {
    randomColor = true;
})

let brushColor = false;

const ink = document.querySelector(".ink");
const brush = document.querySelector(".brush");

ink.addEventListener("click", () => {
    brushColor = false;
    console.log(brushColor);
})

brush.addEventListener("click", () => {
    brushColor = true;
    console.log(brushColor);
})