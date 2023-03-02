import { getData } from "./api/api";
import { createCardMarkup } from "./markup/createCardMarkup";
import { addMarkup } from "./markup/addCardMarkup";

const card__containerEl = document.querySelector(".card__container");

getData().then(({results}) => {
console.log(results);
const markup = createCardMarkup(results);
addMarkup(card__containerEl, markup)
}).catch(error => {
    console.log(error.message);
})

