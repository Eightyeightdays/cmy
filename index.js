function generateRandomGrid(){
  
  var button=document.getElementById("button");
  var grid = document.getElementById("grid");
  var gridHeight = document.getElementById("height").value;             // Specify grid rows for CSS
  var totalSquares = gridHeight * gridHeight;                 // Total number of squares in the grid
  var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  var viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  var longestDimension;
  var shortestDimension;
  var maxGridWidth;
  var pixelHeightAndWidth;
  var colourArray = [];

  if(viewportWidth < viewportHeight){   // portrait orientation
    shortestDimension = viewportWidth;
    longestDimension = viewportHeight;
  }else{
    shortestDimension = viewportHeight; // landscape orientation
    longestDimension = viewportWidth;
  }
  
  // calculate largest possible grid width given the available space
  if(shortestDimension > longestDimension / 2){
    maxGridWidth = (longestDimension / 2) - 2;
  }else{
    maxGridWidth = shortestDimension - 2;
  }
  
  pixelHeightAndWidth = maxGridWidth / gridHeight;
  

  if (gridHeight > 100 || gridHeight < 1){
      alert("Input must be between 1 and 100");
      document.getElementById("height").value = 2;
      return;
    }
    // If a grid is already displayed clear it first
    if (grid.firstChild) {   
        button.innerHTML = "CLEAR GRID"; 
        grid.style.outline = 0;
        while (grid.firstChild) {    
            grid.removeChild(grid.firstChild);
        }
        button.innerHTML = "GENERATE GRID"; 
   }else{
    // Create an array of random colours equal to the surface area of the grid
    for(let i = 0; i < totalSquares; i++){ 
     var colour = ""; 
     let random = Math.floor(Math.random() *3 + 1); // Number of colours + min 
     if(random == 1){ 
       colour = "cyan"; 
     }else if(random == 2){ 
       colour = "magenta"; 
     }else{ 
       colour = "yellow"; 
     } 
      colourArray.push(colour); 
     } 
    
  // Dynamically set grid dimensions based on user input
    grid.style.gridTemplateColumns = "repeat(" + gridHeight + ", 1fr)";
    grid.style.gridTemplateRows = "repeat(" + gridHeight + ", 1fr)";  
    grid.style.outline = "1px solid black";

  // Create new divs based on random array colours
    var delay = 0.1; 
    for(let i = 0; i < totalSquares; i++){                    
      var pixel = document.createElement("div");
      pixel.style.background = colourArray[i];
      pixel.style.width = pixelHeightAndWidth +"px";  
      pixel.style.height = pixelHeightAndWidth +"px"; 
      pixel.style.border = "1px solid black";  
      pixel.style.animationDelay = delay +"s";
      pixel.style.opacity = 0;
      pixel.style.position = "relative";
      pixel.style.top = "-200px";
      pixel.classList.add("animation")
      document.getElementById("grid").appendChild(pixel);
      delay+= 0.05;
    }

    button.innerHTML = "CLEAR GRID";
    
   }
   
}
   
//  allow user to activate button with enter key
var input = document.getElementById("height");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
}); 

   
   