function randomCMY(height, width){
    if  (document.getElementById("height").value >100){
      alert("Input must be no greater than 100");
      document.getElementById("height").value = "";
      return;
    }
     
    if (result.firstChild) {   // IF A GRID IS ALREADY DISPLAYED CLEAR IT FIRST
        COLOUR_ARRAY = [];
     var grid= document.getElementById("result");
     while (grid.firstChild) {    
       grid.removeChild(grid.firstChild);}
   grid.style.display = "none";
   grid.style.background = "";
    var button=document.getElementById("generate");
      button.innerHTML = "GENERATE GRID"; 
   }else{
    var button=document.getElementById("generate");
      button.innerHTML = "GENERATE GRID"; 
     
    const HEIGHT = document.getElementById("height").value;             // Specify grid rows for CSS
    const SQUARES = HEIGHT*HEIGHT;    // Total number of squares
    const COLOUR_ARRAY = [];
    const VIEWPORT_WIDTH = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const VIEWPORT_HEIGHT = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    var SMALLER_SIDE;
    var PIXEL_HEIGHT_WIDTH;
     
    if(VIEWPORT_WIDTH < VIEWPORT_HEIGHT){
      SMALLER_SIDE = VIEWPORT_WIDTH;
    }else{
      SMALLER_SIDE = VIEWPORT_HEIGHT; 
    }
    
    PIXEL_HEIGHT_WIDTH = (SMALLER_SIDE *0.4) / HEIGHT;
   
    for(let i = 0; i < SQUARES; i++){ // CREATE AN ARRAY OF RANDOM COLOURS EQUAL TO THE SURFACE AREA OF THE GRID
     var colour = ""; 
     let random = Math.floor(Math.random() *3 + 1); // Number of choices = 3 + min 
     if(random == 1){ 
       colour = "cyan"; 
     }else if(random == 2){ 
       colour = "magenta"; 
     }else{ 
       colour = "yellow"; 
     } 
     COLOUR_ARRAY.push(colour); 
     } 
    
   var grid = document.getElementById("result");       // Dynamically set grid dimensions based on user input
   grid.style.gridTemplateColumns = "repeat(" +HEIGHT+ ", 1fr)";
   grid.style.gridTemplateRows = "repeat(" +HEIGHT+ ", 1fr)";  
   grid.style.display = "grid";
   grid.style.background = "black";
     
   for(let i = 0; i < SQUARES; i++){                   // Create new divs based on random array colours
     var pixel = document.createElement("div");
     pixel.style.background = COLOUR_ARRAY[i];
     pixel.style.width = PIXEL_HEIGHT_WIDTH+"px";  
     pixel.style.height = PIXEL_HEIGHT_WIDTH+"px";   
     document.getElementById("result").appendChild(pixel);
     }
     var button=document.getElementById("generate");
      button.innerHTML = "CLEAR GRID";
   }
     
   }
   
   