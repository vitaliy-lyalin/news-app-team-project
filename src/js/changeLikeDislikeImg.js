import { addTolocalStorage } from './favorite/addToLocalStorage';
import { deleteFromLocalStorage } from './favorite/deleteFromLocalStorage';

export default function changeLikeDislikeImg(e) {
  if (e.target.classList.contains('card__btn')) {
    const imgEl = e.target.querySelector('.like');
    const imgElSrc = imgEl.getAttribute('src');
    console.log(imgEl);
    if (imgElSrc.includes('dislike')) {
      e.target.childNodes[0].data = 'Remove from favorite';
      const imageUrl = new URL(
        '../images/svg/like.svg?as=svg&width=16&height=16',
        import.meta.url
      );
      imgEl.setAttribute('src', imageUrl);
    } else {
      e.target.childNodes[0].data = 'Add to favorite';

      const imageUrl = new URL(
        '../images/svg/dislike.svg?as=svg&width=16&height=16',
        import.meta.url
      );
      imgEl.setAttribute('src', imageUrl);
    }
  }
}
