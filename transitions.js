import { grid, gridHeight } from "./handleGrid.js";
import { timeoutDelay } from "./getTimeoutDelay.js";
var toggleIndicator = document.getElementById("toggleIndicator");
var step4 = document.getElementById("step-4");
var step4Label = document.getElementById("step-4-label");
var toggle = document.getElementById("toggle-grid");

function transitionOut(){
    step4.style.left = "-200px"; 
    step4Label.style.right = "-220px";
    toggle.style.left = "-200px";
    toggleIndicator.style.right = "-220px";
}

function transitionIn(){
    // once the grid squares have been created, change their properties to initiate transitions
    setTimeout(()=>{
        for(var pixel of grid.children){
          pixel.style.opacity = 1;
          pixel.style[direction] = 0;
        }
      },1);

    // animate buttons
    setTimeout(()=>{  
    if(gridHeight <= 75){ // only show save file button for smaller grids 
        step4.style.left = 0;  
        step4Label.style.right = 0;
    }
    toggle.style.left = 0;
    toggleIndicator.style.right = 0;
    },timeoutDelay)
}

export {toggleIndicator, transitionOut, transitionIn};