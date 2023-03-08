import { addMarkup } from "../addMarkup";

import { LOCALSTORAGE_KEYS, _setLocalStorage } from "./addToLocalStorage";
import { changeLikeImg } from "./changeLikeImg";

import { getLocalStorage } from "./getToLocalStorage";

export function favoritePage() {

    // 2 ищем кнопки с классом 
    const favoriteLink = document.querySelectorAll(".header__link")[1];
    // 3 вешаем обработчик клика на кнопк
    favoriteLink.addEventListener("click", function(e) {
        e.preventDefault(e)
        const target = e.target;

        // 4 получаем обьект из локалстораджд по ключе фаворите в виже массива состоящего из обьектов
        const data = getLocalStorage(LOCALSTORAGE_KEYS.favorite)
        // 5 вызываем функцию которая вернет нам  html разметку 
        const markup = createCardsMarkupV2(data)
          // 6 перерисовываем элемент, то есть содержимое элемента по класссу будет перерисовано настать которые хранились в локалсторадж
        addMarkup(document.querySelector(".card-container"), markup)


        document.querySelector(".weather__container").style.display = "none"
       removeElemnt(target)
    })
}

// 7 создание html разметки
export function createCardsMarkupV2(data = []) {
    console.log("render favorite ", data)

   let arr = data.map((item) => {
    const { title, abstract, media, published_date, url, section , isFavorite} = item;
    console.log(isFavorite)

    const img = media || ""

    return `
      <div class = "card"  data-is-favorite="${!!isFavorite ? 1 : 0}">
          <div class = "card-img-wrapper">
            <img class="card__img" src='${img}' alt="" width="350px" height="500px">
            <span class="card__btn">delete favorite
            <img class="like" src=${!!isFavorite ? changeLikeImg().like: changeLikeImg().dislike} alt="Add to favorite" width="16" height="16">
            </span>
            <span class="card__category">${section}</span>
          </div>
          <div class="card-description">
            <h3 class="card__title">${title}</h3>
            <p class="card__text">${abstract}</p>
            <div class="card__date-creation">
            <span class="card__date">${published_date
              .split('-')
              .reverse()
              .join('/')}</span>
            <a class="card-read-more" href="${url}" target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
          </div>
      </div>`;
  }).join('');
  console.log(arr);
  
  return arr
  
}

// удаление из страницы элемента который дизлакнули
// но есть проблемы
function removeElemnt() {
    console.log("function delete element")
    const cardContainer = document.querySelector(".card-container");
    cardContainer.addEventListener("click", _f)
}

// 9 удаление элемента из локалсторадж 
export function _f(e) {

  const target = e.target
  try {
        
    if (target.closest(".card__btn")) {

      const arrLocalStorage = getLocalStorage(LOCALSTORAGE_KEYS.favorite) || [];
      const cardDivParent = target.closest(".card")
       // получаем тайтл статьи которая будет удаляться из локалстрадж по определенному тайтлу
      console.log("==", [...cardDivParent.children])
      const [div1, div2] = [...cardDivParent.children];
      const [el1] = [...div2.children]
      let str = el1.textContent.toLowerCase().trim();
      console.log(str)
      // вернеться отфильтрованный массив кроме того обьекта у кторого совпало поле со строкой которую получили выше
      newLocalStorageData = arrLocalStorage.filter(item => item.title.toLowerCase().trim() !== str)
      console.log(newLocalStorageData)
      localStorage.setItem(LOCALSTORAGE_KEYS.favorite, JSON.stringify(newLocalStorageData))
      cardDivParent.remove();
    }
  } catch (err) {
    console.log(err)
  }

}


