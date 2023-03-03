const tempElement = document.querySelector('.weather__temp');
const descElement = document.querySelector('.weather__description');
const locationElement = document.querySelector('.weather__location');
const iconElement = document.querySelector('.weather__icon');
// const weatherCard = document.querySelector('.weather__card');
const dayElement = document.querySelector('.day');
const dateElement = document.querySelector('.date');

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
  month: 'long',
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
    displayWeather();
    console.log(weatherData);
  } catch (error) {
    console.log(error.message);
  }
}

function displayWeather() {
  iconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png"/>`;
  console.log(iconElement.innerHTML);
  tempElement.innerHTML = `${weather.temperature.value}`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
  dayElement.innerHTML = `${formattedDay}`;
  dateElement.innerHTML = `${formattedDate}`;
}
