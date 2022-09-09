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

    
    var step1 = document.getElementById("step-1");
    // step1.classList.add("spin");
       
    var step2 = document.getElementById("step-2");
    step2.style.display = "block";
}


