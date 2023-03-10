const readCardContainer = document.querySelector('.card-container');

import { createReadPageCardsMarkup } from './js/createReadPageCardsMarkup';
import { addMarkup } from './js/addMarkup';
import { addActiveClassToCurrentPage } from './js/header/currentPage';
addActiveClassToCurrentPage();

addMarkup(readCardContainer, createReadPageCardsMarkup());

readCardContainer.addEventListener('click', event => {
  if (event.target.classList.contains('card__btn')) {
    const card = event.target.parentNode.parentNode;
    const cardTitle = card.querySelector('.card__title').textContent;

    let localStorageData = JSON.parse(localStorage.getItem('cardsInfo'));

    const indexOfELemToUpdate = localStorageData.findIndex(
      card => card.title === cardTitle
    );

    if (localStorageData[indexOfELemToUpdate].isFavorite === false) {
      localStorageData[indexOfELemToUpdate].isFavorite = true;
    } else {
      localStorageData[indexOfELemToUpdate].isFavorite = false;
    }

    localStorage.setItem('cardsInfo', JSON.stringify(localStorageData));

    addMarkup(readCardContainer, createReadPageCardsMarkup());
  }
});
