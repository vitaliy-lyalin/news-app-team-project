const URL_ARTICLE_SEARCH =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const API_KEY = '1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';

export default class NewsApiArticleSearch {
  constructor() {
    this.searchQuery = '';
  }

  async getArticles() {
    const data = await fetch(
      `${URL_ARTICLE_SEARCH}?q=${this.searchQuery}&api-key=${API_KEY}`
    );
    const {
      response: { docs },
    } = await data.json();
    // console.log(docs);
    return docs;
  }
}
