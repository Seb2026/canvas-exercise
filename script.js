const canvas = document.getElementById('canvas-box');
const context = canvas.getContext('2d');

function drawFillRectangle(){
    context.fillStyle='red';
    context.fillRect(20, 100, 40, 40);
    
}
const rectangleBtn = document.querySelector(`#rectangle`);
rectangleBtn.addEventListener(`click`, drawFillRectangle);

function strokeRect(){
    context.strokeStyle= "blue";
    context.strokeRect(20, 150, 50, 50);
}

const rectangle2 = document.querySelector(`#rectangle-strokerect`);
rectangle2.addEventListener(`click`, strokeRect);

function drawRectPath(){
    
}