
import createRenderCategoriesMarkup from './js/createRenderCategories';
import showHideOthersCategories from './js/showHideOthersCategories';
import getCategoriesValue from './js/getCategoriesValue';
import { createLocalStorage, renderFavorite } from "./js/fetchData/createLocalStorage";//аdded
import { getDataMostPopularNews } from './js/fetchData/fetchMostPopularNews';
import { createCardsMarkup } from './js/createCardsMarkup.js'
import { addMarkup } from './js/addMarkup';
import { onBurgerBtnClick, refs } from './js/mobileBurger';






export const objUtils = {
  allData: null,


}


let homeBtn = document.querySelector(".home_btn__show")


let favoriteBtn = document.querySelector(".favorite_btn__show")

//=============================================================


const categoriesEl = document.querySelector('.filter-wrapper');

createRenderCategoriesMarkup();

// -> Show - Hide others categories on 'Others' button click
categoriesEl.addEventListener('click', showHideOthersCategories);
// -> Get category value after click
categoriesEl.addEventListener('click', event => {
  const categorySelected = getCategoriesValue(event);
  console.log(categorySelected);
  fetchDataCategory(categorySelected.toLowerCase())
});


// ==========================================================ADD======================================================
function fetchDataCategory(str) {
    fetch('https://api.nytimes.com/svc/news/v3/content/inyt/' + str + '.json?api-key=1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7')
  .then(data => {
      console.log(data)
      return data.json()
  })
  .then(data => {
    objUtils[str] = data.results;
    const markup = createCardsMarkup(objUtils[str])
    addMarkup(document.querySelector('.card-container'), markup)
  })
}

// =================News render==============

// 2 Получаем элемент на который будет вешать обработчик события клик
const card__containerEl = document.querySelector('.card-container');
console.log(card__containerEl)

getDataMostPopularNews()
  .then(({ results }) => {
    console.log(results);
    objUtils.allData = results
    // objUtils.allData = results.map(item => ({ ...item, isFavorite: false }))
    // const markup = createCardsMarkup(results);
    const markup = createCardsMarkup(objUtils.allData);
    addMarkup(card__containerEl, markup);
    // someFunc()
  })
  .catch(error => {
    console.log(error.message);
  })
  // .finally(() => console.log(12345+"data"))

// -> open burger menu
refs.headerBurger.addEventListener('click', onBurgerBtnClick);



// function someFunc() { 
  
//     console.log(card__containerEl)
//     card__containerEl.addEventListener("click", function (e) {
//       const target = e.target;
 
//       if (target.tagName == "SPAN" && target.classList.contains("card__btn") == true) {
//         console.log(target)
//         console.log(target.closest(".card"))
//         const idCard = +target.closest(".card").dataset.idCard;

//         const obj = objUtils.allData.find((item) => item.id === idCard)
//         createLocalStorage({...obj, isfavorite: true})
//       }
//     })
// }


  
// 3 Вешаем событие обработчика на клик
// и выполняем функцию с именем f
// Функция парсит карточку из DOM элмента в обьект при нажатии на кнопку LIke (add/remove)
card__containerEl.addEventListener("click", function (e) {
  const target = e.target;
  f(target)
  
})

// 3.1 Функция парсинг элмент в обьект
// Которая при нажании на span add/remove то есть like добавим в localStorage
// сформирвоанный обьект, то есть сохраним распарсеный эелмент в localStorage по ключу - favorite-news
function f(target) {

  // делаем проверку на то чо начажили только на элемент span с классом  card__btn все остальное откидываем
  // то есть только начажатия на span с классом - ".card__btn"
  if (target.tagName == "SPAN" && target.classList.contains("card__btn") == true) {
    console.log(target)
    console.log(target.closest(".card"))
    // Ищем элемент, родительский эелмент у которого класс -".card"
    // и берем ищем дочерние элементы
    const cardChildren = [...target.closest(".card").children]; // преобразуем из псевдомассива в массив => [...HTMLCollection]
    console.log(cardChildren)

    // создаем обьект со занчениями null в коооые потом будем добавлять значения
    const objCardDiv = {
      media: null,
      title: null,
      abstract: null,
      published_date: null,
      url: null,
      section: null,
      isRead: false,
      isfavorite: false
    }

    // В цикле будем делать проверки, парсить элементв обьект , и по определенному класу будем добавлять 
    // в определенное свойство обьекта значение которое лежит в этом элементе
    // 3.2
    for(const item of cardChildren) {
      if (item.classList.contains("card-img-wrapper")) {
        objCardDiv.media = item.children[0].src;
        objCardDiv.section = item.children[2].textContent;
        console.log(item.children[0].src)
        
      }

      if (item.classList.contains("card__title")) {
        objCardDiv.title = item.textContent
       
      }

      if (item.classList.contains("card__text")) {
        objCardDiv.abstract = item.textContent
      }
      if (item.classList.contains("card__date")) {
        // Получил значение и начиная с -10 индекса возврати строку и преобразуй в обьект new Date(),
        // чтобы получить дату
        console.log(item.textContent.slice(-10).trim())
        objCardDiv.published_date = new Date(item.textContent.slice(-10).trim())
      }
      if (item.classList.contains("card__link-read-more")) {
        objCardDiv.url = item.href
      }

    }

    console.log({...objCardDiv, isFavorite: true, isRead: true})


    // 3.3 Добавляем обьект в localStorage по ключу -favorite-news
    // то есть доабвлеяем статьи которые сделали like
    createLocalStorage({...objCardDiv, isFavorite: true, isRead: true})
  }
}


// 4 
// Вешаем событие клик на кнопку HOME при нажатии на кнопку
// будем переррисовывать в card__container, популярные статьи 
// которые были загружены при первом входе на страницу 
// и были добавлны в обьект object.allData смотреть выше 
homeBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const markup = createCardsMarkup(objUtils.allData)
  addMarkup(card__containerEl, markup)
})


// 5 
// Вешаем событие клик на кнопку FAVORITE при нажатии на кнопку
// будем переррисовывать в card__container,  статьи 
// которые были  добавленые ранее в localstorage по ключу favorite_news 
// ключ favorite_news  находиться в файле js/fetchData/createLocalstorage
favoriteBtn.addEventListener("click", function (e) { 
  e.preventDefault()

  // 5.1 необходимо прейти в файл js/fetchData/createLocalstorage
  // в котором располоагеться логика данные из localstorage по ключу favorite_news 
  // также логика отрисовки/перерисовки на стрицу в элемент который был передан то есть card__containerEl
  // внутрь него будут перезаписаны новые статьи взяятые из localStorage
  renderFavorite(card__containerEl)
})




// setTimeout(() => {
//   fetch('https://api.nytimes.com/svc/news/v3/content/inyt/automobiles.json?api-key=1H8y2dY2rihC7fdcuGY6W6JByrUaIDi7')
//   .then(data => {
//       console.log(data)
//       return data.json()
//   })
//   .then(data => {
//       const markup = JSON.stringify(data.results)
//       addMarkup(card__containerEl, markup)
//   })
// }, 5000)

const STORAGE_KEY = "favorite-news";


export function renderFavorite(elem) {

    /// 5.2
    // Получаю данные из localstorage в виде массива где кажыдй эелмент обьект
    const data = getLocalStorage();

    //5.3
    // перерисовываю содержимое элемента который был предан
    // то есть элемент с классом ".card__container" 
    // котоырй находиться внутри другого элемента с классом - ".news" по классу который был передан
    const html = createCardsMarkupV2(data);

    // 5.4
    addMarkupV2(elem, html)
}


// const data = {
//     title: "text1",
//     abstract: "text2",
//     media: "text3",
//     published_date: new Date().getFullYear(),
//     url: "#",
//     section: "sport",

//     favorite: true,
//     //readMore: true,
// }

// const favoriteBtn = document.querySelectorAll(".card__btn")
// console.log(favoriteBtn)

// [...favoriteBtn].map().addEventListener("click", addFavotiteToStorage)


// function addFavotiteToStorage() {
//     const card = favoriteBtn.closest(".card")
//     console.log(card.dataset.idCard);

// }


// Создаем обьект у которого есть свойство Arr которое содержит пустой массив
// Внутрь которого будем пушить обьект который пришел из файла index.js то есть распарсенный обьект
const localStorageUtils = {
    arr: []
}

// функция которая добавляет в localstorage по ключу favorite обьект
// и делаем проверку чтобы не могли добавить одну статью несколько раз в LocalStorage
export function createLocalStorage(obj) {
    console.log(obj)
    if (!localStorageUtils.arr.find(item => item.title == obj.title))
        localStorageUtils.arr.push(obj)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageUtils.arr))
}



// export function createLocalStorage(key, data) {
//      try {
//          const serializedData = JSON.stringify(data);
//          localStorage.setItem(key, serializedData);
//      } catch (err) {
//          console.error(err);
//    }
// }
// createLocalStorage(STORAGE_KEY, data)



// Функция которая парсит localStorage данные по ключу favorite в обьект
function getLocalStorage() { 
    try {
        const key = localStorage.getItem(STORAGE_KEY)
        if (key) { 
            const dataJson = JSON.parse(key);
            return dataJson
        }
        
    } catch (error) {
        console.log("===Error",error);
        return error
    }
  
}


// 5.3.1 функцию вызываем выше по коду внутри функции  renderFavorite
export function createCardsMarkupV2(data = []) {
    console.log(data)
   let arr = data.map((item) => {
    const { title, abstract, media, published_date, url, section , isFavorite} = item;


    const img = media || ""

    return `
      <div class = "card"  data-is-favorite="${isFavorite}">
          <div class = "card-img-wrapper">
            <img class="card__img" src='${img}' alt="" width="350px" height="500px">
            <span class="card__btn">add/remove</span>
            <span class="card__category">${section}</span>
          </div>
          <h3 class="card__title">${title}</h3>
          <p class="card__text">${abstract}</p>
          <span class="card__date">published_date: ${published_date}</span>
          <a href="${url}">read more</a>
      </div>`;
  }).join('');
  // console.log(arr);
  return arr

}

function addMarkupV2(elem, html) {
    // elem.insertAdjacentHTML("beforeend", html);
    elem.innerHTML = html
}











