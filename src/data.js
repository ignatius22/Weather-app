const getWeatherData = (() => {
  const getWeather = async (city, unit = 'F') => {
    const key = '3bcff5eb7f5c2ce7a067f51ae1ab8863';
    const getData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${key}`,
      { mode: 'cors' });
    const weatherData = await getData.json();
    return weatherData;
  };
  return { getWeather };
})();

export default getWeatherData ;