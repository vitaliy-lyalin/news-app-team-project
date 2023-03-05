import { createCardsMarkup } from '../createCardsMarkup';
import { createCategorieCardMarkup } from '../createCategorieMarkup';
import { renderingNewsNotFound } from '../renderingNewsNotFound';

const news = document.querySelector('.news');
const card__containerEl = document.querySelector('.card-container');

async function filterByDateMostViwed() {
  const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/';
  const API_KEY = 'api-key=1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';
  const url = `${BASE_URL}viewed/7.json?${API_KEY}`;

  // if (!date) {
  //   return;
  // } else {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    const popularCategories = responseJson.results;

    const filterByDatePopularNews = popularCategories.filter(i => {
      return i.published_date >= '2023-03-01';
    });
    console.log('filterByDatePopularNews:', filterByDatePopularNews);
    if (filterByDatePopularNews.length === 0) {
      return (news.innerHTML = renderingNewsNotFound());
    } else {
      return (card__containerEl.innerHTML = createCardsMarkup(
        filterByDatePopularNews
      ));
    }
  } catch (error) {
    console.log(error);
  }
}
filterByDateMostViwed();

// export async function filterByChosenCategorie(categorieValue) {
//   const BASE_URL = 'https://api.nytimes.com/svc/news/v3/content/';
//   const API_KEY = 'api-key=1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';
//   const url = `${BASE_URL}inyt/${categorieValue}.json?${API_KEY}`;

//   try {
//     const response = await fetch(url);
//     const responseJson = await response.json();
//     const chosenCategorie = responseJson.results;

//     if (chosenCategorie === null) {
//       news.innerHTML = renderingNewsNotFound();
//     } else {
//       // console.log(chosenCategorie)
//       card__containerEl.innerHTML = createCategorieCardMarkup(chosenCategorie);

//       return chosenCategorie;
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// async function filterByDateCategorie() {
//   try {
//     const categorie = await filterByChosenCategorie(chosenCategorie);
//     console.log('categorie:', categorie);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// filterByDateCategorie();
