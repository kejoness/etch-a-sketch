const container = document.querySelector('#container');

// creates a 16x16 grid
counter = 0;
while(counter <= 7) {
   for(row = 0; row <= 1; row++) {
       let row = document.createElement("div");
       for(cell = 0; cell < 16; cell++) {
           let cell = document.createElement("div");
           cell.style.cssText = "border-width: 1px; border-style: solid; height: 30px; width: 30px; background-color: #b6b8b0;";
           row.appendChild(cell);
       }
       row.style.cssText = "border-width: 1px; border-style: solid; height: 30px; width: 30px; background-color: #b6b8b0;";
       container.appendChild(row);
   }
   counter++;
}

// generate a random color when mouse hovers over square div
let gridElement = document.querySelectorAll(".element");

gridElement.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
        // let target = e.target;
        target.style.cssText = "background-color: red;";
    });

    element.addEventListener("mouseout", (e) => {
        // let target = e.target;
        target.style.cssText = "background-color: #b6b8b0";
    });
});

// for(i = 0; i < gridElement.length; i++) {
//     gridElement[i].addEventListener('mouseenter', () => {
//         gridElement[i].style.cssText = "background-color: red;";
//     });
// }