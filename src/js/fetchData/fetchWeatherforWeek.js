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

<<<<<<< Updated upstream
    displayWeatherforWeek(dailyWeatherData);
    console.log(weatherData);
=======
    const forecastData = await response.json();

    const filteredForecast = forecastData.list.filter(item =>
      item.dt_txt.includes('12:00:00')
    );
    const dailyForecast = filteredForecast.map(item => {
      return {
        date: item.dt_txt.slice(0, 10),
        temperature: Math.floor(item.main.temp - 273),
        description: item.weather[0].description,
        icon: item.weather[0].icon,
      };
    });

    return dailyForecast;
>>>>>>> Stashed changes
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
