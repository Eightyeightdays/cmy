import { timeoutDelay } from "./getTimeoutDelay.js";
import { transitionOut, transitionIn } from "./transitions.js";
import { gridHeight } from "./globals.js";
import handleInputError from "./handleInputError.js";
import disableButton from "./disableButton.js";
import removeGrid from "./removeGrid.js";
import createGrid from "./createGrid.js";

export default function handleGrid(){
  if(gridHeight > 100 || gridHeight < 1){
    handleInputError();
  }else if(gridHeight > 50){
    timeoutDelay = 0;           // animate buttons immediately for large grids
  }
  disableButton();              // avoid double clicking
  if(grid.firstChild) {         // If a grid is already displayed, clear it first
    transitionOut();
    removeGrid();
    button.innerHTML = "Generate Grid"; 
  }else{
    createGrid();
    transitionIn();
    button.innerHTML = "Clear Grid";
  } 
}