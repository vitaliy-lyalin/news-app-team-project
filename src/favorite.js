import createFavoritePageCardsMarkup from './js/createFavoritePageCardsMarkup';
import { addMarkup } from './js/addMarkup';
import { addActiveClassToCurrentPage } from './js/header/currentPage';
addActiveClassToCurrentPage();
import { renderingNewsNotFound } from './js/renderingNewsNotFound';
import { addNewsToLocalStorage } from './js/addNewsToLocalStorage';

const favoriteCardContainer = document.querySelector(
  '.favorite-card-container'
);

// -> Add to local Storage
favoriteCardContainer.addEventListener('click', addNewsToLocalStorage);

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

      if (localStorageData[indexOfELemToRemove].isRead === false) {
        localStorageData.splice(indexOfELemToRemove, 1);
      } else {
        console.log(localStorageData[indexOfELemToRemove]);

        localStorageData[indexOfELemToRemove].isFavorite = false;
      }

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
