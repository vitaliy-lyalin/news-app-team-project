import fetchDataWeather from './fetchData/fetchDataWeather';
import fetchWeeklyForecast from './fetchData/fetchWeatherforWeek';
const tempElement = document.querySelector('.weather__temp');
const weatherDataWrapper = document.querySelector('.weather-content-wrapper');

function showError(error) {
  console.error('Position data is not available');
  console.error(error.message);
}

async function setPositionRenderMarkup(position) {
  const date = new Date();
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  const formattedDay = date.toLocaleDateString('en-gb', { weekday: 'short' });
  const formattedDate = date.toLocaleDateString('en-gb', options);

  if (position && position.coords) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    const forecastContainer = document.querySelector(
      '.forecast-content-wrapper'
    );

    const weather = await fetchDataWeather(latitude, longitude);
    const markupArray = await fetchWeeklyForecast(latitude, longitude);
    const forecastMarkup =
      markupArray.length &&
      markupArray
        .map(elem => {
          return getForecast(elem);
        })
        .join('');
    forecastContainer.innerHTML = forecastMarkup;
    console.log(forecastContainer);

    const markup = `
    <div class="top-wrapper">
      <div class="weather-card__body-top">
        <p class="weather__temp">${weather.temperature.value}°</p>
      </div>
      <div class="description-wrapper">
        <div class="weather__description">${weather.description}</div>
        <div class="weather__location">${weather.city}</div>
      </div>
    </div>
    <div class="weather__icon">
      <img class="weather__icon-image" src="https://openweathermap.org/img/wn/${weather.icon}@4x.png" width="165" height="155"/>
    </div>
    <div class="weather-card_body-bottom">
      <div class="day">
        ${formattedDay}
      </div>
      <div class="date">
        ${formattedDate}
      </div>
      </div>
  `;

    weatherDataWrapper.innerHTML = markup;

    const btnChangeWeather = document.querySelector('.weather__button');

    btnChangeWeather.addEventListener('click', function (e) {
      weeklyForecast(e, forecastContainer);
    });
  } else {
    console.log(error.message);
  }
}

export default async function displayWeather() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      setPositionRenderMarkup,
      showError
    );
  } else {
    console.log(error);
  }
}

function weeklyForecast(e, forecastContainer) {
  if (e.target.innerText === 'weather for week') {
    // const topWrapper = forecastContainer.querySelector('.top-wrapper');
    // const weatherIcon = forecastContainer.querySelector('.weather__icon');
    // const weatherCardBodyBottom = forecastContainer.querySelector(
    //   '.weather-card_body-bottom'
    // );
    e.target.innerText = 'current weather';
    weatherDataWrapper.style.display = 'none';
    forecastContainer.style.display = 'block';
  } else {
    e.target.innerText = 'weather for week';
    forecastContainer.style.display = 'none';
    weatherDataWrapper.style.display = 'block';
  }
}

function getForecast(weather) {
  const date = new Date(weather.date);
  console.log(weather.date);
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  const formattedDay = date.toLocaleDateString('en-gb', { weekday: 'short' });
  const formattedDate = date.toLocaleDateString('en-gb', options);

  return `
   <div class="weather-forecast-item">
    <div class="date">${formattedDate}</div>
     <div class="date">${formattedDay}</div>
      <div class="forecast-icon">
      <img class="forecast-image" src="https://openweathermap.org/img/wn/${weather.icon}@4x.png"/>
      </div>
    <div class="forecast__description">${weather.description}</div>
    <div class="temp">${weather.temperature}°</div>
    </div>
    `;
}

fetchWeeklyForecast();
