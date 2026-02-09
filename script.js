const container = document.querySelector('#container');

// creates a 16x16 grid
counter = 0;
while(counter <= 58) {
    for(row = 0; row < 16; row++) {
        let row = document.createElement("div");
        for(cell = 1; cell < 16; cell++) {
            let cell = document.createElement("div");
            row.appendChild(cell);
        }
        row.style.cssText = "border-width: 1px; border-style: solid; height: 30px; width: 30px; background-color: #b6b8b0;";
        container.appendChild(row);
    }
    counter++;
}