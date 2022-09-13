import { gridHeight, viewportWidth, } from "./globals.js";
import { timeoutDelay } from "./getTimeoutDelay.js";
import { direction } from "./getAnimationDirection.js";

export default function removeGrid(){
    if(gridHeight <= 50){  // only animate removal for smaller grids
        for(var child of grid.children){
          child.style.opacity = 0;
          child.style[direction] = `-${viewportWidth}px`;
        }
      }else{
        while(grid.firstChild) {    
          grid.removeChild(grid.firstChild);
        }
      }
      grid.style.outline = "1px solid transparent"; // remove outline otherwise it will still be visible when grid is empty              
      
      setTimeout(()=>{  
        while (grid.firstChild) {    
          grid.removeChild(grid.firstChild);  // remove elements from DOM after animation has run
        }
      },timeoutDelay)
}