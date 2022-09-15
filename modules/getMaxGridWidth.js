export default function getMaxGridWidth(){  
  let maxGridWidth;
  // calculate largest possible grid width given the available space
  if(shortestDimension > longestDimension / 2){
    maxGridWidth = (longestDimension / 2) - 2;
  }else{
    maxGridWidth = shortestDimension - 2;
  }
  window.maxGridWidth = maxGridWidth;
}

