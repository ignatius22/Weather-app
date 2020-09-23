import data from './data';
import renderHomepage from './renderPage';
import './style.css';
/* eslint-disable no-unused-vars */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-expressions */
const controller = ((data, renderHomepage) => {
  let wD;
  let units = 'F';
  const toggleUnits = (units) => (units === 'F' ? 'imperial' : 'metric');
  const searchValue = document.getElementById('searchInput');

  const resetValue = (searchVal) => {
    searchValue.value = '';
  };
  const defaultWeather = async (city = 'Abuja', unit = 'imperial') => {
    try {
      const result = await data.getWeather(city, unit);
      renderHomepage.renderPage(result, units);
      wD = await result;
      return result;
    } catch (e) {
      return e;
    }
  };
  const handleClick = (event) => {
    if (event.target.id === 'searchInput') {
      resetValue(searchValue);
    } else if (event.target.id === 'toggeleUnits') {
      event.peventDefault;
      units = units === 'F' ? 'C' : 'F';
      defaultWeather(wD.name, toggleUnits(units));
    } else if (searchValue.value) {
      defaultWeather(searchValue.value, toggleUnits(units));
      resetValue(searchValue);
    }
  };
  const myKeyPress = (event) => {
    if (searchValue.value && event.which === 13) {
      defaultWeather(searchValue.value, toggleUnits(units));
    }
  };

  defaultWeather();

  searchValue.addEventListener('click', handleClick);
  searchValue.addEventListener('click', myKeyPress);
  document.getElementById('searchBtn').addEventListener('click', handleClick);
  document.getElementById('toggeleUnits').addEventListener('click', handleClick);
  /* eslint-disable consistent-return */
})(data, renderHomepage);
