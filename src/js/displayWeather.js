import fetchDataWeather from './fetchData/fetchDataWeather';

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
      <img class="weather__icon-image" src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" width="165" height="155"/>
    </div>
    <div class="weather-card_body-bottom">
      <div class="day">
        ${formattedDay}
      </div>
      <div class="date">
        ${formattedDate}
      </div>
      </div>
    <button type="button" class="weather__button">weather for week</button>
  `;
    // cardElement.insertAdjacentHTML('beforeend', markup);
    weatherDataWrapper.innerHTML = markup;

    return 'HELLO WORLD';
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
