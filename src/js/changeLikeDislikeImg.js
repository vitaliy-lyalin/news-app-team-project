import { addTolocalStorage } from './favorite/addToLocalStorage';
import { deleteFromLocalStorage } from './favorite/deleteFromLocalStorage';

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
    } else {
      const imageUrl = new URL(
        '../images/svg/dislike.svg?as=svg&width=16&height=16',
        import.meta.url
      );
      imgEl.setAttribute('src', imageUrl);
    }
  }
}
