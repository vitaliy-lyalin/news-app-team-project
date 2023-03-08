import NewsApiArticleSearch from './fetchData/fetchArticlesBySearch';
import { refs } from './header/refs';
import { createCardsMarkupBySearch } from './createCardsMarkupBySearch';
import { addMarkup } from './addMarkup';

import paginationLaunch from './createPagination';

import Notiflix from 'notiflix';
import { renderingNewsNotFound } from './renderingNewsNotFound';

const card__containerEl = document.querySelector('.card-container');
const mainRef = document.querySelector('main');

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
      return alert('We haven’t found news from this category');

      // const news = await newsApiArticleSearch.getArticles();
      // // console.log(news);
      // const newsMarkup = await createCardsMarkupBySearch(news);
      // try {
      //   if (news.length === 0) {
      //     mainRef.innerHTML = renderingNewsNotFound();
    } else {
      addMarkup(card__containerEl, newsMarkup);
      refs.form.reset();
      paginationLaunch(meta.hits, meta.offset);
    }
    //   console.log(newsMarkup);
  } catch (error) {
    console.error(error);
  }
}
