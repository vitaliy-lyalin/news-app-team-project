export const refs = {
  headerBurger: document.querySelector('.header__burger'),
  headerMenu: document.querySelector('.header__menu'),
  body: document.querySelector('body'),
};

refs.headerBurger.addEventListener('click', onBurgerBtnClick);

export function onBurgerBtnClick() {
  refs.headerBurger.classList.toggle('active');
  refs.headerMenu.classList.toggle('active');
  refs.body.classList.toggle('lock');
}
