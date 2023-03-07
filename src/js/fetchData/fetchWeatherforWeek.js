export default async function fetchWeeklyForecast(latitude, longitude) {
  let NEW_KEY = '59533b4b3da51af7c19202d3a8fbef18';
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=50.45&lon=30.52&appid=${NEW_KEY}`
    );

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
    console.log(dailyForecast);
  } catch (error) {
    console.log(error.message);
  }
}

// // 1. достать елементы с разметки -контейнеры и кнопка
// // 2.повесить слушателя на кнопку и когда нажимается кнопка weather for week должно
// // 2.1 пропадает разметка текущая(display none) и менятся разметка погоды на неделю
// // 2.2 меняется название кнопки на current weather
// // 3.Прописать функцию с помощью которой мы получаем погоду на неделю
// // 4.сделать разметку для одной  карточки погоды на неделю
