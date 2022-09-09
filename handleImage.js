function getColours(event){
    const colorThief = new ColorThief();
    const previewImage = document.getElementById("image");
    const fileName = document.getElementById("fileName");
    const img = document.querySelector("img");
    let currentFile = event.target.files[0];
    let currentName = currentFile.name;
        if(currentFile.type !== "image/png" && currentFile.type !== "image/jpg" && currentFile.type !== "image/jpeg" && currentFile.type !== "image/gif"){
            alert("File must be either png, jpg or gif format only");
        }else{
            previewImage.src = URL.createObjectURL(currentFile);   // create a preview of the selected file
    }
    fileName.insertAdjacentHTML("afterBegin", currentName);
    
    var colourPalette = [];

    if(img.complete){
        colorThief.getPalette(img).map(arr => {
            colourPalette.push(`rgb(${arr[0]},${arr[1]}, ${arr[2]})`);
        });
    }else{
        image.addEventListener('load', function() {
            colorThief.getPalette(img).map((arr, index) => {
                // colourPalette.push(`rgb(${arr[0]},${arr[1]},${arr[2]})`);
                document.documentElement.style.setProperty(`--colour${index}`, `rgb(${arr[0]},${arr[1]},${arr[2]})`);
            });
        });
    }

    console.log(colourPalette)
    var colour0 = colourPalette[0];

    // console.log(colourPalette[3])
   
}

