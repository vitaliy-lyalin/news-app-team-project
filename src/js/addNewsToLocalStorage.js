import { removeFavoriteFromLocalStorage } from './removeFromLocalStorage';
// -> get local storage data
let localStorageData = {
  options: JSON.parse(localStorage.getItem('cardsInfo'))
    ? JSON.parse(localStorage.getItem('cardsInfo'))
    : [],
};

// console.log('localStorageData', localStorageData.options.length);

export function addNewsToLocalStorage(event) {
  const cardData = {
    readMoreLink: '',
    category: '',
    img: '',
    title: '',
    text: '',
    date: '',
    dateOfRead: new Date(),
    isRead: false,
    isFavorite: false,
  };

  // -> click on link "Read More"
  if (event.target.classList.contains('card-read-more')) {
    // event.preventDefault();
    if (event.target.className === 'card-read-more') {
      const card = event.target.parentElement.parentElement.parentElement;
      // console.dir(card);

      // const cardData = {
      //   readMoreLink: card.children[1].children[2].children[1].href,
      //   category: card.children[0].children[1].textContent,
      //   img: card.children[0].children[2].currentSrc,
      //   title: card.children[1].children[0].textContent,
      //   text: card.children[1].children[1].textContent,
      //   date: card.children[1].children[2].children[0].textContent,
      //   dateOfRead: new Date(),
      //   isRead: true,
      //   isFavorite: true,
      // };

      cardData.readMoreLink = card.children[1].children[2].children[1].href;
      cardData.category = card.children[0].children[1].textContent;
      cardData.img = card.children[0].children[2].currentSrc;
      cardData.title = card.children[1].children[0].textContent;
      cardData.text = card.children[1].children[1].textContent;
      cardData.date = card.children[1].children[2].children[0].textContent;
      cardData.dateOfRead = new Date();
      cardData.isRead = true;
      // cardData.isFavorite = true;

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
          } else {
            updateLocalStorage(cardData.title, 'isRead');
          }
        });
      }
    }
  }

  // -> click on "Add to favorite"
  if (event.target.classList.contains('card__btn')) {
    // console.log('localStorageData length', localStorageData.options.length);

    const card = event.target.parentElement.parentElement;
    // console.dir(card);

    cardData.readMoreLink = card.children[1].children[2].children[1].href;
    cardData.category = card.children[0].children[1].textContent;
    cardData.img = card.children[0].children[2].currentSrc;
    cardData.title = card.children[1].children[0].textContent;
    cardData.text = card.children[1].children[1].textContent;
    cardData.date = card.children[1].children[2].children[0].textContent;
    cardData.dateOfRead = new Date();
    // cardData.isRead = true;
    cardData.isFavorite = true;

    if (!localStorageData.options.length) {
      addDataToLocalStorage(cardData);
    } else {
      if (
        localStorageData.options.find(
          element => element.title === cardData.title
        )
      ) {
        console.log('Record exist');
        updateLocalStorage(cardData.title, 'isFavorite', localStorageData);
      } else {
        addDataToLocalStorage(cardData);
      }
    }

    // if (!localStorageData.options.length) {
    //   addDataToLocalStorage(cardData);
    //   for (const key in localStorageData) {
    //     delete localStorageData[key];
    //   }
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
    //     } else {
    //       updateLocalStorage(cardData.title, 'isFavorite');
    //     }
    //   });
    // }
  }
}

export function addDataToLocalStorage(cardData) {
  localStorageData.options.push(cardData);
  localStorage.setItem('cardsInfo', JSON.stringify(localStorageData.options));
}

function updateLocalStorage(cardTitle, propertyToUpdate, localStorageData) {
  for (let i = 0; i < localStorageData.options.length; i++) {
    if (localStorageData.options[i].title === cardTitle) {
      if (localStorageData.options[i][propertyToUpdate] !== true) {
        localStorageData.options[i][propertyToUpdate] = true;
      }
    } else if (localStorageData.options[i].title === cardTitle) {
      if (propertyToUpdate === 'isFavorite') {
        if (localStorageData.options[i][propertyToUpdate] === true) {
          if (localStorageData.options[i].isRead === false) {
            localStorageData.options.splice(i, 1);
            console.log(localStorageData.options);
          }
        }
      }
    } else if (localStorageData.options[i].title === cardTitle) {
      if (propertyToUpdate === 'isFavorite') {
        if (localStorageData.options[i][propertyToUpdate] === true) {
          localStorageData.options[i][propertyToUpdate] = false;
        }
      }
    }
  }

  localStorage.setItem('cardsInfo', JSON.stringify(localStorageData.options));
}
