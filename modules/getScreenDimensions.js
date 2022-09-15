export default function getScreenDimensions(){
    let longestDimension;
    let shortestDimension;
    let viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    // determine longest and shortest dimensions
    if(viewportWidth < viewportHeight){     // portrait orientation
        shortestDimension = viewportWidth;
        longestDimension = viewportHeight;
    }else{
        shortestDimension = viewportHeight; // landscape orientation
        longestDimension = viewportWidth;
    }
    window.longestDimension = longestDimension; // for use in header transitions
    window.shortestDimension = shortestDimension; // for restricting max grid size on smaller screens
}