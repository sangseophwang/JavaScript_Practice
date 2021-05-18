/*
    API (Application Programming Interface) : 다른 서버로부터 손쉽게 데이터를 가져올 수 있는 수단.
    API를 제공하는 웹사이트를 통해 데이터를 가져올 수 있다.
    여기서는 해당하는 지역의 데이터를 가져오는 API 를 사용했다. (openweathermap.org)
*/

const weather = document.querySelector(".js-weather");

const API_KEY = " ";

const COORDS = "coords";

/*
    then() 함수는 기본적으로 함수를 호출하는 역할을 하지만 데이터가 들어오는데 시간이 좀 걸리니 데이터가 우리에게 넘어왔을 때 호출하도록 만든다.
*/

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("We can't access geo location!");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
