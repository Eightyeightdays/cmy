function getColoursFromImage(event){
    const colorThief = new ColorThief();
    let currentFile = event.target.files[0];

    if(currentFile.type !== "image/png" && currentFile.type !== "image/jpg" && currentFile.type !== "image/jpeg" && currentFile.type !== "image/gif"){
        alert("File must be either png, jpg or gif format only");
    }else{
        previewImage.src = URL.createObjectURL(currentFile);   // create a preview of the selected file
        URL.revokeObjectURL(currentFile);
        container.style.background = "transparent"; // remove coloured background once file loaded
    }

    if(img.complete){
        colorThief.getPalette(img).map((arr, index) => {
            document.documentElement.style.setProperty(`--colour${index}`, `rgb(${arr[0]},${arr[1]},${arr[2]})`);
        });
    }else{
        image.addEventListener('load', function() {
            colorThief.getPalette(img).map((arr, index) => {
                document.documentElement.style.setProperty(`--colour${index}`, `rgb(${arr[0]},${arr[1]},${arr[2]})`);
            });
        });
    }
    
    // animate buttons after file is selected
    header.style.left = longestDimension + 100 + "px";
    step2.style.left = 0;
    step3.style.left = 0;
    step2Label.style.right = 0;
    step3Label.style.right = 0;
}


