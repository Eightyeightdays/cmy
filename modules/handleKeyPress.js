//  allow user to activate grid generate/clear button with enter key
function handleKeyPress(){
    var input = document.getElementById("height");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("button").click();
        }
    });
}

window.addEventListener("load", handleKeyPress);

 