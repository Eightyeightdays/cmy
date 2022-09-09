function getColoursFromImage(event){
    const colorThief = new ColorThief();
    const previewImage = document.getElementById("image");
    
    const img = document.querySelector("img");
    let currentFile = event.target.files[0];
    let currentName = currentFile.name;
        if(currentFile.type !== "image/png" && currentFile.type !== "image/jpg" && currentFile.type !== "image/jpeg" && currentFile.type !== "image/gif"){
            alert("File must be either png, jpg or gif format only");
        }else{
            previewImage.src = URL.createObjectURL(currentFile);   // create a preview of the selected file
    }

    // const fileNameLabel = document.getElementById("fileName");
    // fileNameLabel.innerText = currentName;

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

    
    
       
    var step2 = document.getElementById("step-2");
    var step3 = document.getElementById("step-3")
    var step2Label = document.getElementById("step-2-label");
    var step3Label = document.getElementById("step-3-label");
    var header = document.getElementById("header");
    var viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    header.style.left = `-${viewportWidth}px`;
    step2.style.left = 0;
    step3.style.left = 0;
    step2Label.style.right = 0;
    step3Label.style.right = 0;
}


