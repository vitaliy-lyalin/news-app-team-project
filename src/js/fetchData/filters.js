async function fetchMostViwedCategories() {
  const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/';
  const API_KEY = 'api-key=1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';
  const url = `${BASE_URL}viewed/7.json?${API_KEY}`;

  const response = await fetch(url);
  const responseJson = await response.json();
  const popularCategories = responseJson.results;
  console.log('popularCategories:', popularCategories);

  const b = '2022/04/25';

  customSort = (popularCategories, b) => {
    const dateA = popularCategories.updated;
    const dateB = b;
  };

  return popularCategories;
}
fetchMostViwedCategories();

const news = document.querySelector('.news');

export async function fetchChosenCategorie(categorieValue) {
  const BASE_URL = 'https://api.nytimes.com/svc/news/v3/content/';
  const API_KEY = 'api-key=1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';
  const url = `${BASE_URL}inyt/${categorieValue}.json?${API_KEY}`;

  try {
    const response = await fetch(url);
    const responseJson = await response.json();
    const categorie = responseJson.results;
    console.log('categorie:', categorie);

    if (categorie === null) {
      return (news.innerHTML = renderingNewsNotFound());
    } else {
      return categorie;
    }
  } catch (error) {
    console.log(error.message);
  }
}

// async function filterByDate(a, selectedDate) {
//   try {
//     // const categorie = await fetchChosenCategorie();
//     const a = await fetchMostViwedCategories();
//     const filterPopularCategories = popularCategories.map(i => {
//       return i.filter(({ update_date }) => {
//         return update_date === selectedDate;
//       });
//     });
//     console.log(filterPopularCategories);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// filterByDate();

function renderingNewsNotFound() {
  return `<section class="news-not-found--section">
    <div class="news-not-found--container">
      <h2 class="news-not-found--title">We haven't found news from this category</h2>
      <img class="news-not-found--img" src="./images/newsNotFound/notFoundNews_image_mobile_1x.jpg" alt="newspaper on the background of nature" width="250" />
    </div>
  </section>`;
}

// {/* <picture>
//         <source srcset="./src/images/newsNotFound/notFoundNews_image_mobile_1x.jpg 1x,
//                         ./src/images/newsNotFound/notFoundNews_image_mobile_2x.jpg 2x" media="(max-width: 767px)">
//         <source srcset="./src/images/newsNotFound/notFoundNews_image_tablet_1x.jpg 1x,
//                         ./src/images/newsNotFound/notFoundNews_image_tablet_2x.jpg 2x" media="(min-width: 768px)">
//         <source srcset="./src/images/newsNotFound/notFoundNews_image_desktop_1x.jpg 1x,
//                         ./src/images/newsNotFound/notFoundNews_image_desktop_2x.jpg 2x" media="(min-width: 1200px)">
//         <img class="news-not-found--img" src="./src/images/newsNotFound/notFoundNews_image_mobile_1x.jpg" alt="newspaper on the background of nature" width="250" />
//       </picture> */}
