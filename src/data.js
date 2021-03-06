const getWeatherData = (() => {
  const getWeather = async (city, unit = 'F') => {
    const API_KEY = '3bcff5eb7f5c2ce7a067f51ae1ab8863';
    const URL = 'https://api.openweathermap.org/data/2.5/weather?q';

    try {
      const getData = await fetch(`${URL}=${city}&units=${unit}&APPID=${API_KEY}`, { mode: 'cors' });
      const weatherData = await getData.json();
      return weatherData;
    } catch (error) {
      return error;
    }
  };
  return { getWeather };
})();

export default getWeatherData;
