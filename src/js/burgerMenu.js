const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
headerBurger.addEventListener('click', function () {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
});
