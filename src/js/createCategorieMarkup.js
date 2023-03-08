export function createCategoriesCardMarkup(data) {
  // -> create ULR for img

  const imageUrl = new URL(
    '../images/svg/dislike.svg?as=svg&width=16&height=16',
    import.meta.url
  );

  return data
    .map(
      (
        { title, abstract, multimedia, published_date, url, section },
        index
      ) => {
       // const formattedPublishedDate = new Date(
       //   published_date
      //  ).toLocaleDateString('en-GB');

        const titleLength = 33;
        const abstractLength = 200;

        const trimmedTitle = title.substring(title, titleLength).concat('...');
        const trimmedAbstract = abstract
          .substring(abstract, abstractLength)
          .concat('...');

        const noImgUrl =
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';

        const img = multimedia.length ? multimedia[2].url : noImgUrl;

        const inComingDate = new Date(published_date);

        function addLeadingZero(d) {
          return d < 10 ? '0' + d : d;
        }

        function getUserTime(t) {
          let Y = t.getFullYear();
          let M = addLeadingZero(t.getMonth() + 1);
          let D = addLeadingZero(t.getDate());

          return `${D}/${M}/${Y}`;
        }

        const transformDate = getUserTime(inComingDate);

        return `<div class = "card ${'card-' + index}">
        <div class = "card-img-wrapper">
          <span class="card__btn">Add to favorite
          <img class="like" src=${imageUrl} alt="Add to favorite" width="16" height="16">

          </span>
          <span class="card__category">${section}</span>
          <img class="card__img" src=${img} alt="" width="350px" height="500px">
        </div>
        <div class="card-description">
          <h3 class="card__title">${trimmedTitle}</h3>
          <p class="card__text">${trimmedAbstract}</p>
          <div class="card__date-creation">

            <span class="card__date">${transformDate}</span>

        //    <span class="card__date">${formattedPublishedDate}</span>

            <a class="card-read-more" href="${url}" target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        </div>
        
        </div>`;
      }
    )
    .join('');
}
