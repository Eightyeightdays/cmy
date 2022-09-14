function transitionOut(){
    step4.style.left = "var(--offset)"; 
    step4Label.style.right = "var(--offset)";
    toggle.style.left = "var(--offset)";
    toggleIndicator.style.right = "var(--offset)";
}

function transitionIn(){
    // once the grid squares have been created, change their properties to initiate transitions
    setTimeout(()=>{
        for(var pixel of grid.children){
          pixel.style.opacity = 1;
        }
      },1);

    // animate buttons
    setTimeout(()=>{  
    if(gridHeight <= 75){ // only show save file button for smaller grids 
        step4.style.left = 0;  
        step4Label.style.right = 0;
    }
    toggle.style.left = 0;
    toggleIndicator.style.right = 0;
    },timeoutDelay)
}

export {transitionOut, transitionIn};