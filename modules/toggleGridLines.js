export default function toggleGridLines(){
    document.querySelectorAll(".pixel").forEach(pixel => { 
        if(pixel.classList.contains("border")){
            pixel.classList.remove("border");
            toggleIndicator.innerText = "Off";
        }else{
            pixel.classList.add("border");
            toggleIndicator.innerText = "On";
        }
    });
}