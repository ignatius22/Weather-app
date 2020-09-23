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

  /* eslint-disable consistent-return */
 
})(data, ui);
