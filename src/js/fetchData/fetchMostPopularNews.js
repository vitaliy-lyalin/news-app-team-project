const API_KEY = '1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';
const MOST_POPULAR_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;
export async function getDataMostPopularNews(path = "") {
  const response = await fetch(`${MOST_POPULAR_URL}${path}`);
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.statusText);
}