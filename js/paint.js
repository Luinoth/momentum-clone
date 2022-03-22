const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 2000;
canvas.height = 2000;

ctx.lineWidth = "2.5";
ctx.lineCap = "round";
ctx.strokeStyle = "#2c2c2c";

let painting = false;

function startPainting(event){
  painting = true;
}

function stopPainting(event){
  painting = false;
}

function onMouseMove(event){
  const X = event.offsetX;
  const Y = event.offsetY;
  if(!painting){
    ctx.beginPath();
    ctx.moveTo(X, Y);
  }else{
    ctx.lineTo(X, Y);
    ctx.stroke();
  }
}

function onMouseDown(event){
  painting = true;
}


if(canvas){
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}