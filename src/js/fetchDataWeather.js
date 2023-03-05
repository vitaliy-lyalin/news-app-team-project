const tempElement = document.querySelector('.weather__temp');
const descElement = document.querySelector('.weather__description');
const locationElement = document.querySelector('.weather__location');
const iconElement = document.querySelector('.weather-icon__container');
const dayElement = document.querySelector('.day');
const dateElement = document.querySelector('.date');
const cardElement = document.querySelector('.weather__container');

let weather = {
  temperature: {
    value: '',
  },
  description: '',
  icon: '',
  city: '',
  country: '',
};

const date = new Date();
const options = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
};
const formattedDay = date.toLocaleDateString('en-gb', { weekday: 'short' });
const formattedDate = date.toLocaleDateString('en-gb', options);

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  console.log(error);
}

function setPosition(position) {
  if (position && position.coords) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    fetchDataWeather(latitude, longitude);
  } else {
    console.log(error.message);
  }
}

function showError(error) {
  console.error('Position data is not available');
}

async function fetchDataWeather(latitude, longitude) {
  let BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
  let API_KEY = '0458bf71d4b2f3d6d80c258e4438f735';
  try {
    const response = await fetch(
      `${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    const weatherData = await response.json();
    weather.temperature.value = Math.floor(weatherData.main.temp - 273);
    weather.description = weatherData.weather[0].description;
    weather.icon = weatherData.weather[0].icon;
    weather.city = weatherData.name;
    weather.country = weatherData.sys.country;
    displayWeather(weather.icon);
  } catch (error) {
    console.log(error.message);
  }
}

function displayWeather() {
  const markup = `
  <div class="top-wrapper">
      <div clas="weather-card__body-top">
        <p class="weather__temp">${weather.temperature.value}°</p>
      </div>
      <div class="description-wrapper">
        <div class="weather__description">${weather.description}</div>
        <div class="weather__location"></use>
         ${weather.city}
         </svg>
        </div>
      </div>
    </div>
    <div class="weather__icon"><img class="weather__icon-image" src="https://openweathermap.org/img/wn/${weather.icon}@4x.png" width="165" height="155"/></div>
    <div clas="weather-card_body-bottom">
      <div class="day">
        ${formattedDay}
      </div>
      <div class="date">
        ${formattedDate}
      </div>
    </div>
    <button type="button" class="weather__button">weather for week</button>
  </div>
  `;
  cardElement.insertAdjacentHTML('beforeend', markup);
}
//==============================================================================

// const forecastWeatherContainer = document.querySelector('.forecast__container');
// const buttonElement = document.querySelector('.weather__button');
// buttonElement.addEventListener('click', function (e) {
//   if (e.target.innetText === 'weather for week') {
//     e.target.innetText = 'current weather';
//     console.log(target.innerText);
//   } else {
//     e.target.innerText = 'weather for week';
//   }
// });
