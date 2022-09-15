export default function limitGridSize(){
    let maxGridHeight;
    if(shortestDimension < 500){
        maxGridHeight = 50;
        step2Label.innerText = "Between 1 and 50";
    }else{
        maxGridHeight = 100;
    }
    window.maxGridHeight = maxGridHeight;
}