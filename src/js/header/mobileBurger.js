export const refs = {
  headerBurger: document.querySelector('.header__burger'),
  headerMenu: document.querySelector('.header__menu'),
  body: document.querySelector('body'),
};

refs.headerBurger.addEventListener('click', onBurgerBtnClick);

export function onBurgerBtnClick() {
  refs.headerBurger.classList.toggle('open');
  refs.headerMenu.classList.toggle('open');
  refs.body.classList.toggle('lock');
}
