const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
const body = document.querySelector('body');

headerBurger.addEventListener('click', function (e) {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('lock');
});

logo.addEventListener('click', function () {
  if (headerBurger.classList.contains('active')) {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
  }
});
