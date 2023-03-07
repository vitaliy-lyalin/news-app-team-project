export default async function fetchDataWeather(latitude, longitude) {
  let BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
  let API_KEY = '0458bf71d4b2f3d6d80c258e4438f735';
  try {
    const response = await fetch(
      `${BASE_URL}lat=50.45&lon=30.52&appid=${API_KEY}`
    );

    let weather = {
      temperature: {
        value: '',
      },
      description: '',
      icon: '',
      city: '',
      country: '',
    };

    const weatherData = await response.json();
    // console.log(weatherData);
    weather.temperature.value = Math.floor(weatherData.main.temp - 273);
    weather.description = weatherData.weather[0].description;
    weather.icon = weatherData.weather[0].icon;
    weather.city = weatherData.name;
    weather.country = weatherData.sys.country;
    // displayWeather(weather.icon);
    return weather;
  } catch (error) {
    console.log(error.message);
  }
}
