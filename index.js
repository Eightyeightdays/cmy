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
        for(var child of grid.children){
          child.classList.remove("animation");
          child.classList.add("animation-out");
        }
        document.documentElement.style.setProperty("--screenWidth", `-${viewportWidth}px`); // update the CSS variable to dynamically set keyframe rule
        grid.style.outline = "1px solid transparent"; // remove outline otherwise it will still be visible when grid is empty              
        // remove elements from DOM after animation has run
        setTimeout(()=>{
              
          while (grid.firstChild) {    
            grid.removeChild(grid.firstChild);
          }
        },"3000")

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
    var delay = 0.1; // add dynamic animation delay
    
    for(let i = 0; i < totalSquares; i++){                    
      var pixel = document.createElement("div");
      pixel.classList.add("animation");

      Object.assign(pixel.style, {
        background: colourArray[i],
        width: pixelHeightAndWidth + "px",
        height: pixelHeightAndWidth + "px",
        border: "1px solid black",
        animationDelay: delay + "s",
        opacity: 0,
        position: "relative",
        left: `-${viewportWidth}px`,
      });
     
      delay+= 0.035;
      document.getElementById("grid").appendChild(pixel);
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

   
   