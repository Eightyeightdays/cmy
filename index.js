function generateRandomGrid(){
  var direction;
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
  var delay = 0.1; // add dynamic transition delay
  var delayIncrement;
  var timeoutDelay;
  var transitionLength = 3;
  var header = document.getElementById("header");
  var step3 = document.getElementById("step-3");

  // determine delay increment based on grid size
  if(gridHeight >= 40){
    delayIncrement = 0.001;
  }else if(gridHeight >= 30){
    delayIncrement = 0.002;
  }else if(gridHeight >= 20){
    delayIncrement = 0.003;
  }else if(gridHeight >= 10){
    delayIncrement = 0.004;
  }else{
    delayIncrement = 0.1;
  }

  // determine timeout duration in milliseconds based on total animation runtime
  var timeoutDelay = ((((totalSquares -1) * delayIncrement) + delay) + transitionLength) * 1000;
  console.log(timeoutDelay)

  // determine screen orientation for optimal animation direction
  if(screen.orientation.type === "portrait-primary" || screen.orientation.type === "portrait-secondary"){
      direction = "left";
    }else{
      direction = "right";
  }
  // console.log(screen.orientation.type)

  // determine longest and shortest dimensions
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
    // If a grid is already displayed, clear it first
    if (grid.firstChild) {   
      header.style.left = 0;

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
      // remove elements from DOM after animation has run
      setTimeout(()=>{  
        while (grid.firstChild) {    
          grid.removeChild(grid.firstChild);
        }
      },timeoutDelay)

      button.innerHTML = "GENERATE GRID"; 
      step3.style.display = "none";
   }else{
    // Create an array of random colours equal to the surface area of the grid
    //  dynamically set grid transition length
    document.documentElement.style.setProperty("--transitionLength", timeoutDelay+"ms");
    //  hidden grid gets displayed on button click (REMOVE?)
    document.querySelector(".container-grid").style.display = "grid";
    //
    header.style.left = `-${viewportWidth}px`;
    // Dynamically set grid dimensions based on user input
    grid.style.gridTemplateColumns = "repeat(" + gridHeight + ", 1fr)";
    grid.style.gridTemplateRows = "repeat(" + gridHeight + ", 1fr)";  
    grid.style.outline = "1px solid black";

    // Create new divs based on colour palette
    for(let i = 0; i < totalSquares; i++){       
      let random = Math.floor(Math.random() *9 + 1);             
      var pixel = document.createElement("div");

      Object.assign(pixel.style, {
        background: `var(--colour${random})`,
        width: pixelHeightAndWidth + "px",
        height: pixelHeightAndWidth + "px",
        border: "1px solid black",
        opacity: 0,
        position: "relative",
      });

      if(gridHeight <= 50){ // only animate smaller grids
        pixel.style.transition = `all ${transitionLength}s ease-out ${delay}s`;
      }

      pixel.style[direction] =`-${viewportWidth}px`, // dynamically set pixel position for transition
      delay+= delayIncrement;
      document.getElementById("grid").appendChild(pixel);
    }
    // once the child nodes have been created, change their properties to initiate transitions
    setTimeout(()=>{
      for(var child of grid.children){
        child.style.opacity = 1;
        child.style[direction] = 0;
      }
    },1);

    button.innerHTML = "CLEAR GRID";

    setTimeout(()=>{  
    step3.style.display = "block";
    },timeoutDelay)
    
  } 
  
}
   
//  allow user to activate button with enter key
var input = document.getElementById("height");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    // console.log("HERE")
    event.preventDefault();
    document.getElementById("button").click();
  }
}); 
  
//



