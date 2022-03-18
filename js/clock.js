const clock = document.querySelector("#clock");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");


function getClock(){
  const date = new Date();
  const nowHours = String(date.getHours()).padStart(2, "0");
  const nowMinutes = String(date.getMinutes()).padStart(2, "0");
  const nowSeconds = String(date.getSeconds()).padStart(2, "0");
  hour.innerText = nowHours;
  minute.innerText = nowMinutes;
  second.innerText = nowSeconds;
}

getClock();
setInterval(getClock , 100);
