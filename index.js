import handleGrid from "./handleGrid.js";
import toggleGridLines from "./toggleGridLines.js";

document.querySelector("#button").addEventListener('click', handleGrid);
document.querySelector("#toggle-grid").addEventListener("click", toggleGridLines);