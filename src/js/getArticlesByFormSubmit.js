import NewsApiArticleSearch from './fetchData/fetchArticlesBySearch';
import { refs } from './header/refs';
import { createCardsMarkupBySearch } from './createCardsMarkupBySearch';
import { addMarkup } from './addMarkup';

export async function getArticlesByFormSubmit(event) {
  event.preventDefault();

  const card__containerEl = document.querySelector('.card-container');

  //   console.dir(event.target[0].value);
  const inputValue = event.target[0].value.trim();
  if (inputValue === '') {
    alert('Enter request');
  }
  const newsApiArticleSearch = new NewsApiArticleSearch();
  newsApiArticleSearch.searchQuery = inputValue;
  const news = await newsApiArticleSearch.getArticles();
  console.log(news);
  const newsMarkup = await createCardsMarkupBySearch(news);
  try {
    if (news.length === 0) {
      return alert('We haven’t found news from this category');
    } else {
      addMarkup(card__containerEl, newsMarkup);
      refs.form.reset();
    }
    //   console.log(newsMarkup);
  } catch (error) {
    console.error(error);
  }
}
