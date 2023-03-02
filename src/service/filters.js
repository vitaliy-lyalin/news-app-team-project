async function fetchCategories() {
  const BASE_URL = 'https://api.nytimes.com/svc/news/v3/content/';
  const API_KEY = 'api-key=1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';
  const url = `${BASE_URL}section-list.json?${API_KEY}`;

  const response = await fetch(url);
  const responseJson = await response.json();
  const categories = responseJson.results;
  const categoriesName = categories.map(i => i.section);
  console.log('categoriesName:', categoriesName);

  return categoriesName;
}
fetchCategories();

async function fetchChosenCategorie() {
  const BASE_URL = 'https://api.nytimes.com/svc/news/v3/content/';
  const API_KEY = 'api-key=1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7';
  const url = `${BASE_URL}inyt/automobiles.json?${API_KEY}`;

  const response = await fetch(url);
  const responseJson = await response.json();
  const categorie = responseJson.results;
  console.log('categorie:', categorie);

  return categorie;
}
fetchChosenCategorie();

async function filterByDate() {
  try {
    const categorie = await fetchChosenCategorie();
    const updateDate = categorie.map(i => {
      return i.updated_date;
    });
    console.log(updateDate.sort().reverse());
  } catch (error) {
    console.log(error.message);
  }
}
filterByDate();
