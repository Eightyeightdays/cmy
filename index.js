function generateRandomGrid(){

  var gridHeight = document.getElementById("height").value;             // Specify grid rows for CSS
  var totalSquares = gridHeight * gridHeight;                 // Total number of squares in the grid
  var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  var viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  var smallestDimension;
  var pixelHeightAndWidth;
  var button=document.getElementById("button");
  var grid = document.getElementById("grid");
  var colourArray = [];

  if(viewportWidth < viewportHeight){
    smallestDimension = viewportWidth;
  }else{
    smallestDimension = viewportHeight; 
  }

  pixelHeightAndWidth = (smallestDimension *0.9) / gridHeight;

  if (gridHeight > 100 || gridHeight < 1){
      alert("Input must be no greater than 100");
      document.getElementById("height").value = 2;
      return;
    }
    // If a grid is already displayed clear it first
    if (grid.firstChild) {   
        button.innerHTML = "CLEAR GRID"; 
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
   grid.style.gridTemplateColumns = "repeat(" +gridHeight + ", 1fr)";
   grid.style.gridTemplateRows = "repeat(" + gridHeight + ", 1fr)";  

  // Create new divs based on random array colours
    for(let i = 0; i < totalSquares; i++){                   
      var pixel = document.createElement("div");
      pixel.style.background = colourArray[i];
      pixel.style.width = pixelHeightAndWidth +"px";  
      pixel.style.height = pixelHeightAndWidth +"px";   
      document.getElementById("grid").appendChild(pixel);
    }

    button.innerHTML = "CLEAR GRID";

   }
   
}
     

   
   