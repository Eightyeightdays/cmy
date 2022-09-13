export var gridHeight = document.getElementById("height").value;  // Specify grid rows for CSS
export var totalSquares = gridHeight * gridHeight;                // Total number of squares in the grid
export var transitionLength = 1;
export var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
export var viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
export var button=document.getElementById("button");
export var grid = document.getElementById("grid"); 