const readCardContainer = document.querySelector('.card-container');

import { createReadPageCardsMarkup } from './js/createReadPageCardsMarkup';
import { addMarkup } from './js/addMarkup';

addMarkup(readCardContainer, createReadPageCardsMarkup());

// const imageUrl = new URL(
//   '../images/svg/dislike.svg?as=svg&width=16&height=16',
//   import.meta.url
// );

// return data
//   .map(
//     (
//       {
//         headline: { main },
//         abstract,
//         multimedia,
//         pub_date,
//         web_url,
//         section_name,
//       },
//       index
//     ) => {
//       const http = 'http://static01.nyt.com/';
//       const date = new Date(pub_date);
//       const formatDate = date.toLocaleDateString();
//       const noImgUrl =
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
//       const img = multimedia.length ? http + multimedia[0].url : noImgUrl;
//       // console.log(img);
//       return `<div class = "card ${'card-' + index}">
//         <div class = "card-img-wrapper">
//         <span class="card__btn">Add to favorite
//         <img class="like" src=${imageUrl} alt="Add to favorite" width="16" height="16">

//         </span>
//         <span class="card__category">${section_name}</span>
//         <img class="card__img" src=${img} alt="" width="350px" height="500px">
//       </div>
//       <div class="card-description">
//         <h3 class="card__title">${main}</h3>
//         <p class="card__text">${abstract}</p>
//         <div class="card__date-creation">
//           <span class="card__date">${formatDate.split('.').join('/')}</span>
//           <a class="card-read-more" href="${web_url}" target="_blank" rel="noopener noreferrer">Read more</a>
//         </div>
//       </div>

//       </div>`;
//     }
//   )
//   .join('');
