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
    context.beginPath();
    context.moveTo(20, 250);
    context.lineTo(300, 250);
    context.stroke();
    context.lineTo(300, 370);
    context.stroke();
    context.lineTo(20, 370);
    context.stroke();
    context.lineTo(20, 250);
    context.stroke();


}

const recPath = document.querySelector(`#rectPath`);
recPath.addEventListener(`click`, drawRectPath);

function drawBullsEye(){
    context.beginPath();
    context.strokeStyle = `green`;
    context.lineWidth = 10;
    context.arc(400, 250, 60, 0, Math.PI * 2);
    context.stroke();
    context.closePath();
    context.strokeStyle = `green`;
    context.beginPath();
    context.arc(400, 250 , 30, 0, Math.PI * 2);
    context.stroke();
    context.closePath();

}

const circlePath = document.querySelector(`#circle`);
circlePath.addEventListener(`click`, drawBullsEye);

function drawText(){
    context.fillStyle = `blue`;
    context.font = `30px monospace`;
    context.fillText(`Ironhack`, 170, 450);
}

const ironhackText = document.querySelector(`#text`);
ironhackText.addEventListener(`click`, drawText);