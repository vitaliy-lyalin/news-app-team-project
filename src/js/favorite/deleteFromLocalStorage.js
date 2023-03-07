import { LOCALSTORAGE_KEYS, _setLocalStorage } from './addToLocalStorage';
import { changeLikeImg } from './changeLikeImg';
import { getLocalStorage } from './getToLocalStorage';

export function deleteFromLocalStorage(target) {
  console.log('delete from localStorage');
  try {
    if (target.closest('.card__btn')) {
      const arrLocalStorage = getLocalStorage(LOCALSTORAGE_KEYS.favorite) || [];
      const cardDivParent = target.closest('.card');

      const [elementImgWrapperm, elementDescription] = [
        ...cardDivParent.children,
      ];

      [...elementDescription.children].map(item2 => {
        if (item2.classList.contains('card__title')) {
          console.log('delet obj from localstorage 777');
          // console.log(item2.textContent.trim().toLowerCase());
          let str = item2.textContent.trim().toLowerCase();
          const newLocalStorageData = arrLocalStorage.filter(
            itemFilter => itemFilter.title.toLowerCase().trim() != str
          );

          cardDivParent.dataset.isFavorite = 0;
          const elementImg =
            elementImgWrapperm.firstElementChild.firstElementChild;
          elementImg.src = changeLikeImg().dislike;

          localStorage.setItem(
            LOCALSTORAGE_KEYS.favorite,
            JSON.stringify(newLocalStorageData)
          );
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
}
