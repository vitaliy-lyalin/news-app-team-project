const favoriteCardContainer = document.querySelector(
  '.favovite-card-container'
);

console.log(favoriteCardContainer);

import createFavoritePageCardsMarkup from './js/createFavoritePageCardsMarkup';
import { addMarkup } from './js/addMarkup';
import { addActiveClassToCurrentPage } from './js/header/currentPage';
addActiveClassToCurrentPage();

// console.log(createFavoritePageCardsMarkup());

addMarkup(favoriteCardContainer, createFavoritePageCardsMarkup());
