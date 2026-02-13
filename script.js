const container = document.querySelector('#container');

// creates a 16x16 grid
counter = 0;
while(counter <= 7) {
   for(row = 0; row <= 1; row++) {
       let row = document.createElement("div");
       row.classList.toggle("element");
       for(cell = 0; cell < 16; cell++) {
           let cell = document.createElement("div");
           cell.classList.toggle("element");
           cell.style.cssText = "border-width: 1px; border-style: solid; height: 30px; width: 30px; background-color: #b6b8b0;";
           row.appendChild(cell);
       }
       row.style.cssText = "border-width: 1px; border-style: solid; height: 30px; width: 30px; background-color: #b6b8b0;";
       container.appendChild(row);
   }
   counter++;
}

// turn square div red when mouse hovers over it
let gridElement = document.querySelectorAll(".element");

gridElement.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
        e.currentTarget.style.backgroundColor = "red";
    });
});

// make button generate a new grid when clicked
function generateNewGrid(num) {
    const currentGrid = document.getElementById('container');
    currentGrid.remove();

    let amountOfGrids = num * num;
    // return alert(`You would like a ${num}x${num} grid.`);
}

let generateButton = document.querySelector('#button-wrapper');

generateButton.addEventListener('click', () => {
    let numOfGrids = prompt('How many grids do you want in your new sketchpad? Please enter one number and do not go above 100.');
    if(numOfGrids > 100) {
        alert("That's too many grids!");
    } else {
        generateNewGrid(numOfGrids);
    }
});