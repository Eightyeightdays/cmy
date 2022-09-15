import handleGrid from "./modules/grid/handleGrid.js";
import toggleGridLines from "./modules/toggleGridLines.js";
import getScreenDimensions from "./modules/getScreenDimensions.js";
import getColoursFromImage from "./modules/getColoursFromImage.js";

getScreenDimensions();

window.header = document.getElementById("header");
window.step2 = document.getElementById("step-2");
window.step2Label = document.getElementById("step-2-label");
window.step3 = document.getElementById("step-3")
window.step3Label = document.getElementById("step-3-label");
window.step4 = document.getElementById("step-4");
window.step4Label = document.getElementById("step-4-label");
window.toggle = document.getElementById("toggle-grid");
window.toggleIndicator = document.getElementById("toggleIndicator");
window.button = document.getElementById("button");
window.grid = document.getElementById("grid"); 
window.previewImage = document.getElementById("image");
window.img = document.querySelector("img");
window.container = document.getElementById("container-inner");

window.transitionLength = 1;
window.delay = 0.1;

document.querySelector("#button").addEventListener('click', handleGrid);
document.querySelector("#toggle-grid").addEventListener("click", toggleGridLines);
document.getElementById("selectFile").addEventListener("change", getColoursFromImage);

let maxOffset = document.getElementById("step-2").offsetWidth;
document.documentElement.style.setProperty("--offset", `-${maxOffset}px`);