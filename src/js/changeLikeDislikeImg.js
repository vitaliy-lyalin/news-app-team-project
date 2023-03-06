import { addTolocalStorage } from "./favorite/addToLocalStorage";
import { deleteFromLocalStorage } from "./favorite/deleteFromLocalStorage";

export default function changeLikeDislikeImg(e) {
  if (e.target.classList.contains('card__btn')) {
    const imgEl = e.target.querySelector('.like');
    const imgElSrc = imgEl.getAttribute('src');
    if (imgElSrc.includes('dislike')) {
      const imageUrl = new URL(
        '../images/svg/like.svg?as=svg&width=16&height=16',
        import.meta.url
      );
      imgEl.setAttribute('src', imageUrl);
       // ADD CODE
      // добавляю img like с dislike
      // добавляет в локал сторадж статью которую лайкнули
      addTolocalStorage(e.target)
    } else {
      const imageUrl = new URL(
        '../images/svg/dislike.svg?as=svg&width=16&height=16',
        import.meta.url
      );
      imgEl.setAttribute('src', imageUrl);
         // ADD CODE
      // удаление img dislike c like
      // удаляет статью из локал сторадж
      deleteFromLocalStorage(e.target)
    }
  }
}
export default function changeLikeDislikeImg(e) {
  if (e.target.classList.contains('card__btn')) {
    const imgEl = e.target.querySelector('.like');
    const imgElSrc = imgEl.getAttribute('src');
    if (imgElSrc.includes('dislike')) {
      const imageUrl = new URL(
        '../images/svg/like.svg?as=svg&width=16&height=16',
        import.meta.url
      );
      imgEl.setAttribute('src', imageUrl);

      //  ADD CODE for favorite
      // добавляю img like с dislike
      addTolocalStorage(e.target)
    } else {
      const imageUrl = new URL(
        '../images/svg/dislike.svg?as=svg&width=16&height=16',
        import.meta.url
      );
      imgEl.setAttribute('src', imageUrl);

      // ADD CODE for favorite
      // удаление img dislike c like
      deleteFromLocalStorage(e.target)
    }
  }
}

