const searchForm = document.querySelector('.search-form');

const URL_CATEGORIES =
  'https://api.nytimes.com/svc/news/v3/content/section-list.json';

const URL_NEWS_BY_CATEGORIES =
  'https://api.nytimes.com/svc/news/v3/content/inyt/automobiles.json';

const API_KEY = '1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';

export default class NewsApiService {
  constructor() {
    this.offset = 20;
  }

  async fetchCategories() {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`
      );

      const { results } = await response.json();
      // console.log(results);
      const categoriesArr = results.map(element => element.display_name);
      // console.log(categoriesArr);

      return categoriesArr;
    } catch (error) {
      console.log('Bad request');
    }
  }
}
