const currentWeatherContainer = document.querySelector('.weather-container');
const forecastWeatherContainer = document.querySelector('.forecast__container');
const buttonElement = document.querySelector('.weather__button');

// let weeklyWeatherData = [];

// async function showForecast(latitude, longitude) {

//   currentWeatherContainer.classList.add('hidden');
//   let URL = 'https://api.openweathermap.org/data/2.5/forecast?';
//   let API_KEY = '0458bf71d4b2f3d6d80c258e4438f735';

//   try {
//     const response = await fetch(
//       `${URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
//     );
//     const forecastData = await response.json();
//     console.log(forecastData);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// buttonElement.addEventListener('click', () => {
//   buttonElement.innerText = 'current weather';
// });
// console.log(buttonElement);

// 1. достать елементы с разметки -контейнеры и кнопка
// 2.повесить слушателя на кнопку и когда нажимается кнопка weather for week должно
// 2.1 пропадает разметка текущая(display none) и менятся разметка погоды на неделю
// 2.2 меняется название кнопки на current weather
// 3.Прописать функцию с помощью которой мы получаем погоду на неделю
// 4.сделать разметку для одной  карточки погоды на неделю
