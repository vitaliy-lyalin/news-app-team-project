const favoriteCardContainer = document.querySelector(
  '.favovite-card-container'
);

console.log(favoriteCardContainer);

import createFavoritePageCardsMarkup from './js/createFavoritePageCardsMarkup';
import { addMarkup } from './js/addMarkup';

// console.log(createFavoritePageCardsMarkup());

addMarkup(favoriteCardContainer, createFavoritePageCardsMarkup());
