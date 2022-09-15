import { transitionOut, transitionIn } from "./transitions.js";
import handleInputError from "./handleInputError.js";
import disableButton from "./disableButton.js";
import removeGrid from "./removeGrid.js";
import createGrid from "./createGrid.js";
import getGridVariables from "./getGridVariables.js";
import getDelayIncrement from "./getDelayIncrement.js";
import getScreenDimensions from "../getScreenDimensions.js";
import getMaxGridWidth from "../getMaxGridWidth.js";

export default function handleGrid(){
  getScreenDimensions();
  getMaxGridWidth();    // by checking viewport sizes
  getGridVariables();   // gridHeight, totalSquares, pixelHeightAndWidth
  getDelayIncrement();  // delayIncrement
  window.timeoutDelay = (((totalSquares * delayIncrement) + delay) + transitionLength) * 1000;
  
  if(!grid.firstChild){ // only show error animation when creating grid, NOT clearing one
    if(gridHeight > maxGridHeight || gridHeight < 1){
      handleInputError();          // only allow grids up to 100x100
      return;
    }else if(gridHeight > 50){
      timeoutDelay = 0;           // animate buttons immediately for large grids
    }
  }
  
  disableButton();              // avoid double clicking

  if(grid.firstChild){         // If a grid is already displayed, clear it first
    transitionOut();
    removeGrid();
    button.innerHTML = "Generate Grid"; 
  }else{
    createGrid();
    transitionIn();
    button.innerHTML = "Clear Grid";
  } 
}