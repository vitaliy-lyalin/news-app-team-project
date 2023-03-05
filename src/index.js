import createRenderCategoriesMarkup from './js/createRenderCategories';
import showHideOthersCategories from './js/showHideOthersCategories';
import getCategoriesValue from './js/getCategoriesValue';
import changeLikeDislikeImg from './js/changeLikeDislikeImg';

import createCardsMarkup from './js/createCardsMarkup';
import { refs } from './js/header/refs';
import { onBurgerBtnClick } from './js/header/mobileBurger';
import { onSearchIconClick } from './js/header/searchInput';

import { getArticlesByFormSubmit } from './js/getArticlesByFormSubmit';
import displayWeather from './js/displayWeather';
import flatpickr from './js/calendar.js';


const categoriesEl = document.querySelector('.filter-wrapper');
const cardContainer = document.querySelector('.card-container');

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
  // console.log(categorySelected);
});

// *************** Render News Cards ******************
createCardsMarkup();

// -> Add remove like - dislike
cardContainer.addEventListener('click', changeLikeDislikeImg);

// *************** Render Forecast ******************
displayWeather();

getDataMostPopularNews()
  .then(({ results }) => {
    const markup = createCardsMarkup(results);
    addMarkup(card__containerEl, markup);
  })
  .catch(error => {
    console.log(error.message);
  });

// -> open burger menu
refs.headerBurger.addEventListener('click', onBurgerBtnClick);
//  -> open search by click on magnifying glass
refs.searchIcon.addEventListener('click', onSearchIconClick);
// -> search input header
refs.headerSearch.addEventListener('submit', getArticlesByFormSubmit);

