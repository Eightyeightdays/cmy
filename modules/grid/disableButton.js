export default function disableButton(){
    button.disabled = true;   // disable button on click to avoid errors
    setTimeout(()=>{
      button.disabled = false;
    }, timeoutDelay)
}