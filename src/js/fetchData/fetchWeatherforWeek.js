const weekButton = document.querySelector('.weather__button');
weekButton.addEventListener('click', fetchWeatherForWeek);

async function fetchWeatherForWeek() {
  let URL = 'https://api.openweathermap.org/data/2.5/forecast?';
  let KEY = '0458bf71d4b2f3d6d80c258e4438f735';

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
  } else {
    console.log(error);
  }
}

function setPosition(position) {
  if (position && position.coords) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    fetchDataWeatherForWeek(latitude, longitude);
  } else {
    console.log(error.message);
  }
}

async function fetchDataWeatherForWeek(latitude, longitude) {
  try {
    const response = await fetch(
      `${URL}lat=${latitude}&lon=${longitude}&appid=${KEY}`
    );
    const weatherData = await response.json();

    const dailyWeatherData = weatherData.list.filter(
      (record, index) => index % 8 === 0
    );

    displayWeatherforWeek(dailyWeatherData);
    console.log(weatherData);
  } catch (error) {
    console.log(error.message);
  }
}

function displayWeatherforWeek(data) {
  const weekMarkup = data
    .map(
      ({ dt_txt, weather, main }) =>
        `
    <div class="weather-card">
            <p>${dt_txt}</p>
            <img
              class="weather-icon"
              src="http://openweathermap.org/img/wn/${weather[0].icon}.png"
              alt="Weather description"
            />
            <p>${weather[0].description}</p>
            <p>${Math.floor(main.temp - 273)}°</p>
          </div>
        `
    )
    .join('');
  weatherCard.innerHTML = weekMarkup;
}
