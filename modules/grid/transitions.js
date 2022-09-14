function transitionOut(){
    step4.style.left = "-200px"; 
    step4Label.style.right = "-220px";
    toggle.style.left = "-200px";
    toggleIndicator.style.right = "-220px";
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