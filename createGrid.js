import { grid, gridHeight, totalSquares, transitionLength, viewportWidth } from "./handleGrid.js";
import { direction } from "./getAnimationDirection.js";
import { delayIncrement } from "./getDelayIncrement.js";
import { toggleIndicator } from "./transitions.js";
import { maxGridWidth } from "./getMaxGridWidth.js";
import { timeoutDelay } from "./getTimeoutDelay.js";

export var delay = 0.1;  // add dynamic transition delay

var pixelHeightAndWidth = maxGridWidth / gridHeight;

export default function createGrid(){
    //  dynamically set grid transition length via CSS variable
    document.documentElement.style.setProperty("--transitionLength", timeoutDelay+"ms");
    // Dynamically set grid dimensions based on user input
    grid.style.gridTemplateColumns = "repeat(" + gridHeight + ", 1fr)";
    grid.style.gridTemplateRows = "repeat(" + gridHeight + ", 1fr)";  
    grid.style.outline = "1px solid black";
    // Create new divs based on colour palette

    for(let i = 0; i < totalSquares; i++){       
        let random = Math.floor(Math.random() *9 + 1);             
        var pixel = document.createElement("div");
        
        if(toggleIndicator.innerText === "On"){
            pixel.classList.add("pixel", "border"); // only add border when toggle is set to ON
        }else{
            pixel.classList.add("pixel")
        }
        
        Object.assign(pixel.style, {
            background: `var(--colour${random})`,
            width: pixelHeightAndWidth + "px",
            height: pixelHeightAndWidth + "px",
        });

        if(gridHeight <= 50){ // only animate smaller grids
            pixel.style.transition = `all ${transitionLength}s ease-out ${delay}s`;
        }

        pixel.style[direction] =`-${viewportWidth}px`, // dynamically set transition direction
        delay+= delayIncrement;                       // increase transition delay for each subsequent pixel
        document.getElementById("grid").appendChild(pixel);
    }
}