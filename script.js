const canvas = document.getElementById('canvas-box');
const context = canvas.getContext('2d');

function drawFillRectangle(){
    context.fillStyle='red';
    context.fillRect(20, 100, 40, 40);
    
}
const rectangleBtn = document.querySelector(`#rectangle`);
rectangleBtn.addEventListener(`click`, drawFillRectangle);