import createRenderCategoriesMarkup from './js/createRenderCategories';
import showHideOthersCategories from './js/showHideOthersCategories';
import getCategoriesValue from './js/getCategoriesValue';
import changeLikeDislikeImg from './js/changeLikeDislikeImg';

import createCardsMarkup from './js/createCardsMarkup';
import { refs } from './js/header/refs';
import { onBurgerBtnClick } from './js/header/mobileBurger';
import { onSearchIconClick } from './js/header/searchInput';

const categoriesEl = document.querySelector('.filter-wrapper');
const cardContainer = document.querySelector('.card-container');

createRenderCategoriesMarkup();

// -> Show - Hide others categories on 'Others' button click
categoriesEl.addEventListener('click', showHideOthersCategories);
// -> Get category value after click
categoriesEl.addEventListener('click', event => {
  const categorySelected = getCategoriesValue(event);
  // console.log(categorySelected);
});

// =================News render==============
createCardsMarkup();

// -> open burger menu
refs.headerBurger.addEventListener('click', onBurgerBtnClick);
//  -> open search by click on magnifying glass
refs.searchIcon.addEventListener('click', onSearchIconClick);

// -> Like Dislike
cardContainer.addEventListener('click', e => {
  changeLikeDislikeImg(e, cardContainer);
});
