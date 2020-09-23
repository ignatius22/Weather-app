import data from './data';
import renderHomepage from './renderPage';
/* eslint-disable no-unused-vars */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-expressions */
const controller = ((data, renderHomepage) => {
  let wD;
  let units = 'F';
  const toggleUnits = (units) => (units === 'F' ? 'imperial' : 'metric');
  const searchVal = document.getElementById('searchInput');

  const resetValue = (searchVal) => {
    searchVal.value = '';
  };
 const defaultWeather = async (city = 'Nigeria', unit = 'imperial') => {
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
      resetValue(searchVal);
    } else if (event.target.id === 'toggeleUnits') {
      event.peventDefault;
      units = units === 'F' ? 'C' : 'F';
      defaultWeather(wD.name, toggleUnits(units));
    } else if (searchVal.value) {
      defaultWeather(searchVal.value, toggleUnits(units));
      resetValue(searchVal);
    }
  };


  
})(data, renderHomepage);
