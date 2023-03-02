const notificationElement = document.querySelector('.notification');
const tempElement = document.querySelector('.weather-card_temp');
const descElement = document.querySelector('.weather-card_desc');
const locationElement = document.querySelector('.weather-card_location');
const iconElement = document.querySelector('.weather-icon');
const weatherCard = document.querySelector('.weather-card');

let weather = {
  temperature: {
    value: undefined,
  },
  description: undefined,
  icon: undefined,
  city: undefined,
  country: undefined,
};

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
    displayWeather([weather]);
    console.log(weatherData);
  } catch (error) {
    console.log(error.message);
  }
}

function displayWeather(data) {
  const date = new Date(); // создаем объект Date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${day}.${month}.${year}`; // создаем строку формата даты

  const weatherMarkup = data
    .map(
      ({ icon, description, temperature, city, country }) =>
        `<p class="weather-card_temp">${temperature.value}°</p>
         <h3 class="weather-card_desc">${description}</h3>
        <p class="weather-card_location">${city}, ${country}</p>
        <img
          class="weather-icon"
          src="http://openweathermap.org/img/wn/${icon}.png"
          alt="Weather description"
        />
      </div>
      <div clas="weather-card_body-bottom">
        <p class="weather-card_text">current day: ${formattedDate}</p>
        <button type="button" class="weather-button">weather for week</button>
      </div>
      </div>
    `
    )
    .join('');
  weatherCard.insertAdjacentHTML('beforeend', weatherMarkup);
}
