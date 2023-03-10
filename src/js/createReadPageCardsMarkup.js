export function createReadPageCardsMarkup() {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem('cardsInfo'));

  const readItems = dataFromLocalStorage.filter(item => item.isRead === true);
  return readItems
    .map(
      (
        { isRead, img, title, text, date, category, readMoreLink, isFavorite },
        index
      ) => {
        const favoriteText = isFavorite
          ? 'Remove from favorite'
          : 'Add to favorite';

        let imageUrl = '';
        if (isFavorite) {
          imageUrl = new URL(
            '../images/svg/like.svg?as=svg&width=16&height=16',
            import.meta.url
          );
        } else {
          imageUrl = new URL(
            '../images/svg/dislike.svg?as=svg&width=16&height=16',
            import.meta.url
          );
        }
        return `<div class = "card">
          <div class = "card-img-wrapper">
          <span class="card__read">Have read</span>
          <span class="card__btn">${favoriteText}
          <img class="like" src=${imageUrl} alt=${favoriteText} width="16" height="16">

          </span>
          <span class="card__category">${category}</span>
          <img class="card__img" src=${img} alt="" width="350px" height="500px">
        </div>
        <div class="card-description">
          <h3 class="card__title">${title}</h3>
          <p class="card__text">${text}</p>
          <div class="card__date-creation">
            <span class="card__date">${date}</span>
            <a class="card-read-more" href="${readMoreLink}" target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        </div>

        </div>`;
      }
    )
    .join('');
}
