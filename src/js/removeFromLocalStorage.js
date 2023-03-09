// console.log('localStorageData', localStorageData.options.length);

export function removeFavoriteFromLocalStorage(event) {
  console.log('remove from local storage');

  // const card = event.target.parentElement.parentElement;
  // // console.dir(card);

  // cardData.readMoreLink = card.children[1].children[2].children[1].href;
  // cardData.category = card.children[0].children[1].textContent;
  // cardData.img = card.children[0].children[2].currentSrc;
  // cardData.title = card.children[1].children[0].textContent;
  // cardData.text = card.children[1].children[1].textContent;
  // cardData.date = card.children[1].children[2].children[0].textContent;
  // cardData.dateOfRead = new Date();
  // // cardData.isRead = true;
  // cardData.isFavorite = true;

  // // console.log(localStorageData.options.length);

  // if (!localStorageData.options.length) {
  //   addDataToLocalStorage(cardData);
  // } else {
  //   localStorageData.options.map(({ title }) => {
  //     if (title !== cardData.title) {
  //       if (
  //         !localStorageData.options.find(
  //           item => item.title === cardData.title
  //         )
  //       ) {
  //         addDataToLocalStorage(cardData);
  //       }
  //       addDataToLocalStorage(cardData);
  //     } else {
  //       updateLocalStorage(cardData.title, 'isFavorite');
  //     }
  //   });
  // }
  // }
}

// export function addDataToLocalStorage(cardData) {
//   localStorageData.options.push(cardData);
//   localStorage.setItem('cardsInfo', JSON.stringify(localStorageData.options));
// }

// function updateLocalStorage(cardTitle, propertyToUpdate) {
//   const localStorageData = JSON.parse(localStorage.getItem('cardsInfo'));
//   // console.log(localStorageData[0]);
//   localStorageData.forEach(el => {
//     if (el.title === cardTitle) {
//       el[propertyToUpdate] = true;
//     }
//     localStorage.setItem('cardsInfo', JSON.stringify(localStorageData));
//   });
// }
