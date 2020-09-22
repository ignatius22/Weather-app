/* eslint-disable camelcase */
const getDate = document.getElementById('date')
const getName = document.getElementById('name')
const getDescription = document.getElementById('description')
const getFeels = document.getElementById('feels')
const getTemp = document.getElementById('temp')
const getToggleUnit = document.getElementById('toggeleUnits')

const renderHomepage = (() => {
  const renderPage = async (weather, unit = 'F') => {
    const {
      feels_like, temp, temp_min, temp_max,
    } = weather.main;

    const { main, description } = weather.weather[0];
    const { name } = weather;
    const curDate = Date();

    getDate.innerText = `${curDate}`;
    getName.innerText = `${name}, ${weather.sys.country} - ${Math.round(temp)}º${unit}`;
    getDescription.innerText = `${description.toUpperCase()} - ${main}`;
    getFeels.innerText = `Feels like: ${Math.round(feels_like)} º${unit}`;
    getTemp.innerText = `Min temp ${Math.round(temp_min)} º${unit} - Max temp ${Math.round(temp_max)} º${unit}`;
    getToggleUnit.innerText = `Change to º${
      unit === 'C' ? 'F' : 'C'}`;
  };

  return {
    renderPage,
  };
})();

export default renderHomepage ;