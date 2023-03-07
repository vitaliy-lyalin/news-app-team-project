import createRenderCategoriesMarkup from './js/createRenderCategories';
import showHideOthersCategories from './js/showHideOthersCategories';
import getCategoriesValue from './js/getCategoriesValue';

import { filterByChosenCategorie } from './js/fetchData/filters';
import { filterByDateMostViwed } from './js/fetchData/filters';

import changeLikeDislikeImg from './js/changeLikeDislikeImg';

import createCardsMarkup from './js/createCardsMarkup';
import { refs } from './js/header/refs';
import { onBurgerBtnClick } from './js/header/mobileBurger';
import { onSearchIconClick } from './js/header/searchInput';
import { addNewsToLocalStorage } from './js/addNewsToLocalStorage';

import { getArticlesByFormSubmit } from './js/getArticlesByFormSubmit';
import displayWeather from './js/displayWeather';
import flatpickr from './js/calendar.js';

const categoriesEl = document.querySelector('.filter-wrapper');
const cardContainer = document.querySelector('.card-container');
const datePicker = document.querySelector('.date-input');

// *************** Header Functionality ***************
// -> open burger menu
refs.headerBurger.addEventListener('click', onBurgerBtnClick);
//  -> open search by click on magnifying glass
refs.searchIcon.addEventListener('click', onSearchIconClick);

// *************** Render Categories ******************
createRenderCategoriesMarkup();

// -> Show - Hide others categories on 'Others' button click
categoriesEl.addEventListener('click', showHideOthersCategories);
// -> Get category value after click
categoriesEl.addEventListener('click', event => {
  const categorySelected = getCategoriesValue(event);

  if (categorySelected) {
    filterByChosenCategorie(categorySelected.toLowerCase());
    // console.log(categorySelected);
  }

  // console.log(categorySelected);
});

// *************** Render News Cards ******************
createCardsMarkup();

// -> Add remove like - dislike
cardContainer.addEventListener('click', changeLikeDislikeImg);

// *************** Render Forecast ******************
displayWeather();

// **************** FilterByDate *********************
document.addEventListener('change', filterByDateMostViwed);

// -> open burger menu
refs.headerBurger.addEventListener('click', onBurgerBtnClick);
//  -> open search by click on magnifying glass
refs.searchIcon.addEventListener('click', onSearchIconClick);

// -> search input header
refs.headerSearch.addEventListener('submit', getArticlesByFormSubmit);

// -> read more
cardContainer.addEventListener('click', addNewsToLocalStorage);
