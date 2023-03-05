import getDataMostPopularNews from './fetchData/fetchMostPopularNews';
import { addMarkup } from './addMarkup';
import paginationLaunch from './createPagination';

const card__containerEl = document.querySelector('.card-container');

export default async function createCardsMarkup() {
  // console.log(data);
  // -> create ULR for img
  const imageUrl = new URL(
    '../images/svg/dislike.svg?as=svg&width=16&height=16',
    import.meta.url
  );

  const data = await getDataMostPopularNews();

  // -> generate html markup for news card
  const newsCollectionMarkup = data
    .map(({ title, abstract, media, published_date, url, section }, index) => {
      // console.log(media);

      const noImgUrl =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

      const img = media.length ? media[0]['media-metadata'][2].url : noImgUrl;
      // console.log(img);
      return `<div class = "card ${'card-' + index}">
        <div class = "card-img-wrapper">
          <span class="card__btn">Add to favorite
            <img class="like" src=${imageUrl} alt="Add to favorite" width="16" height="16">
          </span>
          <span class="card__category">${section}</span>
          <img class="card__img" src=${img} alt="" width="350px" height="500px">
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
    })
    .join('');
  addMarkup(card__containerEl, newsCollectionMarkup);

  paginationLaunch();
}

// ['media-metadata'][2].url
