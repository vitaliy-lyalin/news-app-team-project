let localStorageData = {
  options: JSON.parse(localStorage.getItem('cardsInfo'))
    ? JSON.parse(localStorage.getItem('cardsInfo'))
    : [],
};
// console.log('localStorageData', localStorageData.options);

export function addNewsToLocalStorage(event) {
  event.preventDefault();
  if (event.target.className === 'card-read-more') {
    const card = event.target.parentElement.parentElement.parentElement;
    // console.dir(card);
    const cardData = {
      readMoreLink: card.children[1].children[2].children[1].href,
      category: card.children[0].children[1].textContent,
      img: card.children[0].children[2].currentSrc,
      title: card.children[1].children[0].textContent,
      text: card.children[1].children[1].textContent,
      date: card.children[1].children[2].children[0].textContent,
      dateOfRead: new Date(),
      isRead: true,
      isFavorite: false,
    };

    if (!localStorageData.options.length) {
      addDataToLocalStorage(cardData);
    } else {
      localStorageData.options.map(({ title }) => {
        if (title !== cardData.title) {
          if (
            !localStorageData.options.find(
              item => item.title === cardData.title
            )
          ) {
            addDataToLocalStorage(cardData);
          }
        }
      });
    }
  }
}

export function addDataToLocalStorage(cardData) {
  localStorageData.options.push(cardData);
  localStorage.setItem('cardsInfo', JSON.stringify(localStorageData.options));
}
