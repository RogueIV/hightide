const canvasElements = document.getElementsByTagName('canvas');
(Array.prototype.slice.call(canvasElements) || []).forEach(canvasElement => {
    const canvasContext = canvasElement.getContext('2d');
    const canvasImage = new Image();
    canvasImage.src = canvasElement.getAttribute('data-after');
    canvasImage.onload = () => {
        canvasElement.onmousemove = (e) => wipeImage(e, canvasElement, canvasContext, canvasImage);
        canvasElement.ontouchmove = (e) => wipeImage(e, canvasElement, canvasContext, canvasImage);
    };
});

function wipeImage(e, element, context, image) {
    const r = element.getBoundingClientRect();
    const x = e.clientX - r.left;
    context.clearRect(0, 0, element.width, element.height);
    context.drawImage(image, 0, 0, x, element.height,  0, 0, x, element.height);
    context.fillStyle = '#1278b1';
    context.fillRect(x, 0, 3, element.height);
};