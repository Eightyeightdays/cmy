function createImageFromGrid(){
    var node = document.getElementById("grid");
    domtoimage.toPng(node, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'grid.jpeg';
        link.href = dataUrl;
        link.click();
    });
}
