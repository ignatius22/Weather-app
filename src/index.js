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

  
})(data, renderHomepage);
