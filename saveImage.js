function saveImage(){
    var node = document.getElementById("grid");
    domtoimage.toPng(node)
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'grid.jpeg';
        link.href = dataUrl;
        link.click();
    });
}
