// async function fetchCategories() {
//   const BASE_URL = 'https://api.nytimes.com/svc/news/v3/content/';
//   const API_KEY = 'api-key=1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';
//   const url = `${BASE_URL}section-list.json?${API_KEY}`;

//   const response = await fetch(url);
//   const responseJson = await response.json();
//   const categories = responseJson.results;
//   const categoriesName = categories.map(i => i);
//   // console.log('categoriesName:', categoriesName);

//   return categoriesName;
// }
// // fetchCategories();

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

// async function filterByDate() {
//   try {
//     const categorie = await fetchChosenCategorie();
//     const updateDate = categorie.map(i => {
//       return i.updated_date;
//     });
//     // console.log(updateDate.sort().reverse());
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// // filterByDate();

function renderingNewsNotFound() {
  return `<section class="news-not-found--section">
    <div class="news-not-found--container">
      <h2 class="news-not-found--title">We haven't found news from this category</h2>
      <picture>
        <source srcset="/src/images/newsNotFound/notFoundNews_image_mobile_1x.jpg 1x,
                        /src/images/newsNotFound/notFoundNews_image_mobile_2x.jpg 2x" media="(max-width: 767px)">
        <source srcset="/src/images/newsNotFound/notFoundNews_image_tablet_1x.jpg 1x,
                        /src/images/newsNotFound/notFoundNews_image_tablet_2x.jpg 2x" media="(min-width: 768px)">
        <source srcset="/src/images/newsNotFound/notFoundNews_image_desktop_1x.jpg 1x,
                        /src/images/newsNotFound/notFoundNews_image_desktop_2x.jpg 2x" media="(min-width: 1200px)">
        <img class="news-not-found--img" src="/src/images/newsNotFound/notFoundNews_image_mobile_1x.jpg" alt="newspaper on the background of nature" width="250" />
      </picture>
    </div>
  </section>`;
}
