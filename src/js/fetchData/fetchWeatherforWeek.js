export default async function fetchWeeklyForecast(latitude, longitude) {
  let NEW_KEY = '59533b4b3da51af7c19202d3a8fbef18';
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${NEW_KEY}`
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
    return dailyForecast;
  } catch (error) {
    console.log(error.message);
  }
}
