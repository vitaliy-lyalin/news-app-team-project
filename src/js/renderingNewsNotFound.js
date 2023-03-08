const mobileImgUrl = new URL(
  '../images/newsNotFound/notFoundNews_image_mobile_1x.png?as=webp&width=250',
  // '../images/newsNotFound/notFoundNews_image_mobile_2x.png?as=webp&width=250',
  import.meta.url
);

const tabletImgUrl = new URL(
  '../images/newsNotFound/notFoundNews_image_tablet_1x.png?as=webp&width=560',
  // '../images/newsNotFound/notFoundNews_image_tablet_2x.png?as=webp&width=560',
  import.meta.url
);

const desktopImgUrl = new URL(
  '../images/newsNotFound/notFoundNews_image_desktop_1x.png?as=webp&width=600',
  // '../images/newsNotFound/notFoundNews_image_desktop_2x.png?as=webp&width=600',
  import.meta.url
);

export function renderingNewsNotFound() {
  return `<section class="news-not-found--section">
    <div class="news-not-found--container">
      <h2 class="news-not-found--title">We haven't found news from this category</h2>
      <picture>
        <source srcset="${mobileImgUrl} 1x,
                        ${mobileImgUrl} 2x" media="(max-width: 767px)">
        <source srcset="${tabletImgUrl} 1x,
                        ${tabletImgUrl} 2x" media="(min-width: 768px)">
        <source srcset="${desktopImgUrl} 1x,
                        ${desktopImgUrl} 2x" media="(min-width: 1200px)">
        <img class="news-not-found--img" src=${mobileImgUrl} alt="newspaper on the background of nature" width="250" />
      </picture>
    </div>
  </section>`;
}

// {/* <picture>
//   <source srcset="./src/images/newsNotFound/notFoundNews_image_mobile_1x.jpg 1x,
//                   ./src/images/newsNotFound/notFoundNews_image_mobile_2x.jpg 2x" media="(max-width: 767px)">
//   <source srcset="./src/images/newsNotFound/notFoundNews_image_tablet_1x.jpg 1x,
//                   ./src/images/newsNotFound/notFoundNews_image_tablet_2x.jpg 2x" media="(min-width: 768px)">
//   <source srcset="./src/images/newsNotFound/notFoundNews_image_desktop_1x.jpg 1x,
//                   ./src/images/newsNotFound/notFoundNews_image_desktop_2x.jpg 2x" media="(min-width: 1200px)">
//   <img class="news-not-found--img" src="./src/images/newsNotFound/notFoundNews_image_mobile_1x.jpg" alt="newspaper on the background of nature" width="250" />
// </picture> */}
