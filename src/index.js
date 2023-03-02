import createRenderCategoriesMarkup from './js/createRenderCategories';
import showHideOthersCategories from './js/showHideOthersCategories';
import getCategoriesValue from './js/getCategoriesValue';
import { onBurgerBtnClick, refs } from './js/mobileBurger';

const categoriesEl = document.querySelector('.filter-wrapper');

createRenderCategoriesMarkup();

// -> Show - Hide others categories on 'Others' button click
categoriesEl.addEventListener('click', showHideOthersCategories);
// -> Get category value after click
categoriesEl.addEventListener('click', event => {
  const categorySelected = getCategoriesValue(event);
  console.log(categorySelected);
});
// -> open burger menu
refs.headerBurger.addEventListener('click', onBurgerBtnClick);
