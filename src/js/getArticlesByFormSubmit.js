import NewsApiArticleSearch from './fetchData/fetchArticlesBySearch';
import { refs } from './header/refs';
import { createCardsMarkupBySearch } from './createCardsMarkupBySearch';
import { addMarkup } from './addMarkup';
import { renderingNewsNotFound } from './renderingNewsNotFound';

import paginationLaunch from './createPagination';

import Notiflix from 'notiflix';
import { renderingNewsNotFound } from './renderingNewsNotFound';

const card__containerEl = document.querySelector('.card-container');
const weatherContainer = document.querySelector('.weather__container');
const paginationContainer = document.querySelector('.pagination');

// Initialize the configuration options for notification messages
Notiflix.Notify.init({
  position: 'center-top',
  timeout: 1500,
});

export async function getArticlesByFormSubmit(event) {
  event.preventDefault();
  //   console.dir(event.target[0].value);
  const inputValue = event.target[0].value.trim();
  if (inputValue === '') {
    Notiflix.Notify.warning('Enter request');
    return;
  }
  const newsApiArticleSearch = new NewsApiArticleSearch();
  newsApiArticleSearch.searchQuery = inputValue;
  const { docs, meta } = await newsApiArticleSearch.getArticles();
  // console.log(docs, meta);
  const newsMarkup = await createCardsMarkupBySearch(docs);
  try {
    if (docs.length === 0) {
      weatherContainer.style.display = 'none';
      card__containerEl.style.display = 'block';
      paginationContainer.style.display = 'none';
      card__containerEl.innerHTML = renderingNewsNotFound();
      refs.form.reset();
    } else {
      weatherContainer.style.display = 'block';
      card__containerEl.style.display = 'grid';
      paginationContainer.style.display = 'flex';
      addMarkup(card__containerEl, newsMarkup);
      refs.form.reset();

      paginationLaunch(meta.hits, meta.offset);
    }
  } catch (error) {
    console.error(error);
  }
}
