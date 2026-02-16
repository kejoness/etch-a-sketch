const container = document.querySelector('.container');

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
    const currentGrid = document.getElementsByClassName("container");
    while(currentGrid.length > 0) {
        currentGrid[0].parentNode.removeChild(currentGrid[0]);
    }

    const newContainer = document.createElement("div");
    newContainer.classList.toggle("container");
    
    const body = document.querySelector("body");
    body.appendChild(newContainer);

    for(row = 1; row <= num; row++) {
        let row = document.createElement('div');
        row.classList.toggle('element');
        for(cell = 0; cell <= (num - 1); cell++) {
            let cell = document.createElement("div");
            cell.classList.toggle("element");
            cell.style.cssText = "border-width: 1px; border-style: solid; height: 30px; width: 30px; background-color: #b6b8b0;";
            row.appendChild(cell);
        }
        row.style.cssText = "border-width: 1px; border-style: solid; height: 30px; width: 30px; background-color: #b6b8b0;";
        newContainer.appendChild(row);
    }
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