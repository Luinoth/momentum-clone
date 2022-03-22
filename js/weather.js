const API_KEY = "1888e89fa1b52c9dc1837ed9508e7426";

const icons ={
  // "https://openweathermap.org/weather-conditions" 참고
};


function onGeoOk(position){
  const latitude = position.coords.latitude ;
  const longitude= position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    const icon = document.querySelector("#weatherIcon img");
    const iconNumber = data.weather[0].icon;
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
    icon.src = `http://openweathermap.org/img/wn/${iconNumber}@2x.png`
    icon.alt = "날씨 아이콘";
  });
}


function onGeoError(){
  alert("위치를 찾지 못했습니다. 날씨정보를 확인할 수 없습니다.");
  const noWeather = document.querySelector("#weather span:first-child");
  const retry = document.querySelector("#weather span:last-child");
  noWeather.innerText = "날씨를 찾을수 없음";
  retry.innerHTML = `<button>다시 찾기</button>`;
  retry.addEventListener("click",reload);
}

function reload(){
  window.location.reload();
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);