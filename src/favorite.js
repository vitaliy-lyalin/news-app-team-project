import createFavoritePageCardsMarkup from './js/createFavoritePageCardsMarkup';
import { addMarkup } from './js/addMarkup';
import { addActiveClassToCurrentPage } from './js/header/currentPage';
addActiveClassToCurrentPage();
import { renderingNewsNotFound } from './js/renderingNewsNotFound';

const favoriteCardContainer = document.querySelector(
  '.favorite-card-container'
);

let localStorageData = JSON.parse(localStorage.getItem('cardsInfo'));

if (!localStorageData) {
  favoriteCardContainer.innerHTML = renderingNewsNotFound();
  favoriteCardContainer.style.display = 'block';
} else {
  favoriteCardContainer.style.display = 'grid';
  addMarkup(favoriteCardContainer, createFavoritePageCardsMarkup());

  favoriteCardContainer.addEventListener('click', event => {
    if (event.target.classList.contains('card__btn')) {
      const card = event.target.parentNode.parentNode;
      const cardTitle = card.querySelector('.card__title').textContent;

      const indexOfELemToRemove = localStorageData.findIndex(
        card => card.title === cardTitle
      );

      localStorageData.splice(indexOfELemToRemove, 1);

      localStorage.setItem('cardsInfo', JSON.stringify(localStorageData));

      const localStorageStatus = JSON.parse(localStorage.getItem('cardsInfo'));
      console.log(localStorageStatus.length);

      if (localStorageStatus.length) {
        addMarkup(favoriteCardContainer, createFavoritePageCardsMarkup());
      } else {
        favoriteCardContainer.innerHTML = renderingNewsNotFound();
        favoriteCardContainer.style.display = 'block';
      }
    }
  });
}
