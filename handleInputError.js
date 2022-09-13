var step2Label = document.getElementById("step-2-label");

export default function handleInputError(){
    step2Label.classList.add("error-animation");
    document.getElementById("height").value = 2;
    setTimeout(()=>{
      step2Label.classList.remove("error-animation");
    }, 1000)
    return;
}
