let longestDimension;
let shortestDimension;
let maxGridWidth;

export default function getMaxGridWidth(){
  // determine longest and shortest dimensions
  if(viewportWidth < viewportHeight){     // portrait orientation
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
  window.maxGridWidth = maxGridWidth;
}

