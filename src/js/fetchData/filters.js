import { createCardsMarkup } from '../createCardsMarkup';
import { createCategoriesCardMarkup } from '../createCategorieMarkup';
import { renderingNewsNotFound } from '../renderingNewsNotFound';
import { createCardsMarkupNoBackend } from '../createCardsMarkupNoBackend';

const card__containerEl = document.querySelector('.card-container');
const weatherContainer = document.querySelector('.weather__container');

export async function filterByDateMostViwed(e) {
  const dateFromInput = e.target.value;
  // console.log('dateFromInput:', dateFromInput);
  const transformDate = dateFromInput.split('/').reverse().join('-');

  // console.log('transformDate:', transformDate);

  if (!dateFromInput) {
    return;
  } else {
    const API_KEY = '1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';
    const MOST_POPULAR_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?&api-key=${API_KEY}`;

    const response = await fetch(`${MOST_POPULAR_URL}`);
    const responseJson = await response.json();
    const results = responseJson.results;

    const filterByDatePopularNews = results.filter(i => {
      return i.published_date == transformDate;
    });

    console.log(filterByDatePopularNews.length);

    // if (filterByDatePopularNews.length === 0) {
    //   weatherContainer.style.display = 'none';
    //   card__containerEl.style.display = 'block';
    //   card__containerEl.innerHTML = renderingNewsNotFound();
    // } else {
    //   weatherContainer.style.display = 'block';
    //   card__containerEl.style.display = 'grid';
    //   card__containerEl.innerHTML = createCardsMarkupNoBackend(
    //     filterByDatePopularNews
    //   );
    // }
  }
}

export async function filterByChosenCategorie(categorieValue) {
  const BASE_URL = 'https://api.nytimes.com/svc/news/v3/content/';
  const API_KEY = 'api-key=1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';
  const url = `${BASE_URL}inyt/${categorieValue}.json?${API_KEY}`;

  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    const chosenCategorie = responseJson.results;

    if (chosenCategorie === null) {
      weatherContainer.style.display = 'none';
      card__containerEl.style.display = 'block';
      card__containerEl.innerHTML = renderingNewsNotFound();
    } else {
      weatherContainer.style.display = 'block';
      card__containerEl.style.display = 'grid';
      card__containerEl.innerHTML = createCategoriesCardMarkup(chosenCategorie);

      // console.log(chosenCategorie);
    }
  } catch (error) {
    console.log(error.message);
  }
}

// // async function filterByDateCategorie() {
// //   try {
// //     const categorie = await filterByChosenCategorie(chosenCategorie);
// //     console.log('categorie:', categorie);
// //   } catch (error) {
// //     console.log(error.message);
// //   }
// // }
// // filterByDateCategorie();
