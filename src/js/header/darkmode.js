const toggle = document.getElementById('toggle');
const toggleNav = document.getElementById('toggle-nav');
const body = document.body;
const header = document.querySelector('.header');
const themeSwitcher = document.querySelector('.toggle');
const mainNavigation = document.querySelector('.header__list');
const filterWrapper = document.querySelector('.filter-wrapper--categories');
const headerBurger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__menu');
const headerSearch = document.querySelector('.header__search');
const headerSearchIcon = document.querySelector(
  '.header__search .search__icon'
);

const calendarWrapper = document.querySelector('.date-label');

const mode = window.localStorage.getItem('user-theme');
// console.log(mode);
// console.log(toggle);

if (mode === 'dark') {
  toggle.setAttribute('checked', 'checked');
  toggleNav.setAttribute('checked', 'checked');
  isChecked = true;
  body.classList.add('dark-theme');
  header.classList.add('dark-theme');
  themeSwitcher.classList.add('dark-theme');
  mainNavigation.classList.add('dark-theme');
  filterWrapper.classList.add('dark-theme');

  headerBurger.classList.add('dark-theme');
  burgerMenu.classList.add('dark-theme');
  headerSearch.classList.add('dark-theme');
  headerSearchIcon.classList.add('dark-theme');

  calendarWrapper.classList.add('dark-theme');
}

toggle.addEventListener('input', e => {
  body.classList.toggle('dark-theme');
  header.classList.toggle('dark-theme');
  themeSwitcher.classList.toggle('dark-theme');
  mainNavigation.classList.toggle('dark-theme');
  filterWrapper.classList.toggle('dark-theme');
  calendarWrapper.classList.toggle('dark-theme');

  headerBurger.classList.toggle('dark-theme');
  burgerMenu.classList.toggle('dark-theme');
  headerSearch.classList.toggle('dark-theme');
  headerSearchIcon.classList.toggle('dark-theme');
});

toggleNav.addEventListener('input', e => {
  body.classList.toggle('dark-theme');
  header.classList.toggle('dark-theme');
  themeSwitcher.classList.toggle('dark-theme');
  mainNavigation.classList.toggle('dark-theme');
  filterWrapper.classList.toggle('dark-theme');
  calendarWrapper.classList.toggle('dark-theme');

  headerBurger.classList.toggle('dark-theme');
  burgerMenu.classList.toggle('dark-theme');
  headerSearch.classList.toggle('dark-theme');
  headerSearchIcon.classList.toggle('dark-theme');
});

// if (mode === 'light' || !mode) {
//   isChecked = false;
//   toggle.setAttribute('checked', '');

//   document.documentElement.classList.remove('dark');
//   document.documentElement.classList.add('light');
// }

window.addEventListener('load', windowLoad);

function windowLoad() {
  const htmlBlock = document.documentElement;

  const saveUserTheme = localStorage.getItem('user-theme');

  let userTheme;
  if (window.matchMedia) {
    userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', e => {
      !saveUserTheme ? changeTheme() : null;
    });

  toggle.addEventListener('input', e => {
    changeTheme(true);
  });

  toggleNav.addEventListener('input', e => {
    changeTheme(true);
  });

  function setThemeClass() {
    if (saveUserTheme) {
      htmlBlock.classList.add(saveUserTheme);
      //   resetButton.classList.add('active');  Закоментовано при заміні розмітки та оформлення перемикача
    } else {
      htmlBlock.classList.add(userTheme);
    }
  }

  setThemeClass();

  function changeTheme(saveTheme = false) {
    let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
    let newTheme;

    if (currentTheme === 'light') {
      newTheme = 'dark';
    } else if (currentTheme === 'dark') {
      newTheme = 'light';
    }
    htmlBlock.classList.remove(currentTheme);
    htmlBlock.classList.add(newTheme);
    saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
  }
}
