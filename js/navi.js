const home = document.querySelector("#homeIcon");
const paint = document.querySelector("#jsCanvasIcon");

function homeScreen(){
  const canvasContainer = document.querySelector("#canvasContainer");
  const canvas = document.querySelector("#jsCanvas");
  const homeImg = document.querySelector("#bgImage");
  const homeContainer = document.querySelector("#todoContainer");
  const canvasControl = document.querySelector("#controls");
  canvasContainer.classList.add("hidden");
  canvas.classList.add("hidden");
  canvasControl.classList.add("hidden");
  homeImg.classList.remove("hidden");
  homeContainer.classList.remove("hidden");
}

function paintScreen(){
  const homeImg = document.querySelector("#bgImage");
  const canvasContainer = document.querySelector("#canvasContainer");
  const canvas = document.querySelector("#jsCanvas");
  const homeContainer = document.querySelector("#todoContainer");
  const canvasControl = document.querySelector("#controls");
  homeImg.classList.add("hidden");
  canvasContainer.classList.remove("hidden");
  canvas.classList.remove("hidden");
  canvasControl.classList.remove("hidden");
  homeContainer.classList.add("hidden");
}
homeScreen();
home.addEventListener("click", homeScreen);
paint.addEventListener("click", paintScreen);
