export default function getGridVariables(){
    window.gridHeight = document.getElementById("height").value;  // Specify grid rows for CSS
    window.totalSquares = gridHeight * gridHeight;                // Total number of squares in the grid
    window.pixelHeightAndWidth = maxGridWidth / gridHeight;        // TODO!!! rename squareDimensions
}