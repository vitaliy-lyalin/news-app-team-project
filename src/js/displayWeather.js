import fetchDataWeather from './fetchData/fetchDataWeather';
import fetchWeeklyForecast from './fetchData/fetchWeatherforWeek';
const weatherDataWrapper = document.querySelector('.weather-content-wrapper');

function showError(error) {
  console.error('Position data is not available');
  console.error(error.message);
  setPositionRenderMarkup(null, `Error getting current position: ${error.message}`);
}

async function setPositionRenderMarkup(latitude, longitude, errorMessage) {
  const date = new Date();
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  const formattedDay = date.toLocaleDateString('en-gb', { weekday: 'short' });
  const formattedDate = date.toLocaleDateString('en-gb', options);

  if (position && position.coords) {
    if (latitude && longitude) {
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
}}

export default async function displayWeather() {
  const defaultLatitude = 51.5074;
  const defaultLongitude = 0.1278;

  let position;
  try {
    position = await getCurrentPosition();
  } catch (error) {
    showError(error);
    return;
  }

  if (position && position.coords) {
    const { latitude, longitude } = position.coords;
    await setPositionRenderMarkup(latitude, longitude);
  } else {
    await setPositionRenderMarkup(defaultLatitude, defaultLongitude);}
  }

  
  // if ('geolocation' in navigator) {
  //   navigator.geolocation.getCurrentPosition(
     
  //      setPositionRenderMarkup,
  //      showError
  //   );
  
  // } else {
  //   console.log(error);

  //   }
  // }
  


function weeklyForecast(e, forecastContainer) {
  if (e.target.innerText === 'weather for week') {
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
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  const formattedDay = date.toLocaleDateString('en-gb', { weekday: 'short' });
  const formattedDate = date.toLocaleDateString('en-gb', options);

  return `
   <div class="forecast-container">
    <div class="forecast-date">${formattedDate}</div>
     <div class="forecast-day">${formattedDay}</div>
     <div class="weather-forecast-item">
      <div class="forecast__description">${weather.description}</div>
    <div class="temp">${weather.temperature}°</div>
      <div class="forecast-icon">
      <img class="forecast-image" src="https://openweathermap.org/img/wn/${weather.icon}@4x.png"/>
      </div>
   </div>
    </div>
    `;
}
