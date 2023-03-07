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

    const weather = await fetchDataWeather(latitude, longitude);

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
    <button type="button" class="weather__button fixed-bottom">weather for week</button>
  `;
    // cardElement.insertAdjacentHTML('beforeend', markup);
    weatherDataWrapper.innerHTML = markup;

    // function celsiustoFahrenheit(temperature) {
    //   return (temperature * 9) / 5 + 32;
    // }
    // tempElement.addEventListener('click', function () {
    //   if (weather.temperature.value === undefined) return;
    //   if (weather.temperature.unit == 'celsius') {
    //     let fahrenheit = celsiustoFahrenheit(weather.temperature.value);
    //     fahrenheit = Math.floor(fahrenheit);

    //     tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
    //     weather.temperature.unit = 'fahrenheit';
    //   } else {
    //     tempElement.innerHTML = `${weather.temperature.value}°`;
    //     weather.temperature.unit = 'celsius';
    //   }
    // });

    const btnChangeWeather = document.querySelector('.weather__button');
    const forecastContainer = document.querySelector(
      '.weather-content-wrapper'
    );

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
    const topWrapper = forecastContainer.querySelector('.top-wrapper');
    const weatherIcon = forecastContainer.querySelector('.weather__icon');
    const weatherCardBodyBottom = forecastContainer.querySelector(
      '.weather-card_body-bottom'
    );
    topWrapper.style.display = 'none';
    weatherIcon.style.display = 'none';
    weatherCardBodyBottom.style.display = 'none';

    // weatherDataWrapper.innerHTML = '';
    // forecastContainer.innerHTML = forecastMarkup;
    e.target.innerText = 'current weather';
  } else {
    e.target.innerText = 'weather for week';
    // weatherDataWrapper.innerHTML = markup;
    // forecastContainer.innerHTML = '';
  }
}

// forecastMarkup = `
//    <div class="weather-forecast-item">

//       <div class="forecast-icon">
//       <img class="forecast-image" src="https://openweathermap.org/img/wn/${weather.icon}@4x.png"
//       </div>
//     <div class="forecast__description">${forecast.description}</div>;
//     <div class="temp">${forecast.temperature}°</div>
//     </div>
//       <button type="button" class="weather__button">weather for week</button>
//     `;
// forecastContainer.innerHTML = forecastMarkup;

fetchWeeklyForecast();
