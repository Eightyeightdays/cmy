import { timeoutDelay } from "./getTimeoutDelay.js";
import { transitionOut, transitionIn } from "./transitions.js";
import handleInputError from "./handleInputError.js";
import disableButton from "./disableButton.js";
import removeGrid from "./removeGrid.js";
import createGrid from "./createGrid.js";

export var gridHeight = document.getElementById("height").value;  // Specify grid rows for CSS
export var totalSquares = gridHeight * gridHeight;                // Total number of squares in the grid
export var transitionLength = 1;
export var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
export var viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
export var button=document.getElementById("button");
export var grid = document.getElementById("grid"); 

export function handleGrid(){
  if(gridHeight > 100 || gridHeight < 1){
    handleInputError();
  }else if(gridHeight > 50){
    timeoutDelay = 0;           // animate buttons immediately for large grids
  }
  disableButton();              // avoid double clicking
  if(grid.firstChild) {         // If a grid is already displayed, clear it first
    removeGrid();
    transitionOut();
    button.innerHTML = "Generate Grid"; 
  }else{
    createGrid();
    transitionIn();
    button.innerHTML = "Clear Grid";
  } 
}