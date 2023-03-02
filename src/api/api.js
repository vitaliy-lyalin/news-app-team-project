const API_KEY = '1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';
const MOST_POPULAR_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;
export function getData(path = "") {
  return fetch(`${MOST_POPULAR_URL}${path}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}


// import axios from 'axios';

// const API_KEY = '1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';
// const baseURL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json`;

// axios.defaults.baseURL = baseURL;

// export async function getData(input, page) {
//   const params = {
//     key: API_KEY,
//     q: input,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     per_page: 9,
//     page: page,
//   };
//   return await axios.get('/', { params });
// }