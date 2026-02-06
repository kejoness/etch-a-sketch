const container = document.querySelector('#container');

// creates a 16x16 grid
let counter = 0;
while(counter <= 256) {
    square = document.createElement("div");
    square.style.cssText = "background-color: #d9d9d9; border-color: black; border-width: 3px; display: flex; width: 50px; height: 50px;";
    container.appendChild(square);

    counter++;
}