const container = document.querySelector('#container');

// creates a 16x16 grid
for(i = 0; i <= 256; i++) {
    square = document.createElement("div");
    container.appendChild(square);
}