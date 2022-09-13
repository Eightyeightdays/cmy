import {gridHeight} from "./globals.js";
var delayIncrement;

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

  export {delayIncrement};