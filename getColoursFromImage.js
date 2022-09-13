function getColoursFromImage(event){
    const colorThief = new ColorThief();
    const step2 = document.getElementById("step-2");
    const step3 = document.getElementById("step-3")
    const step2Label = document.getElementById("step-2-label");
    const step3Label = document.getElementById("step-3-label");
    const header = document.getElementById("header");
    const previewImage = document.getElementById("image");
    const img = document.querySelector("img");
    let currentFile = event.target.files[0];

    if(currentFile.type !== "image/png" && currentFile.type !== "image/jpg" && currentFile.type !== "image/jpeg" && currentFile.type !== "image/gif"){
        alert("File must be either png, jpg or gif format only");
    }else{
        previewImage.src = URL.createObjectURL(currentFile);   // create a preview of the selected file
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
    URL.revokeObjectURL(currentFile);

    // animate buttons after file is selected
    header.style.left = "-4000px";
    step2.style.left = 0;
    step3.style.left = 0;
    step2Label.style.right = 0;
    step3Label.style.right = 0;
}


