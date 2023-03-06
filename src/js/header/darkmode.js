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
  // ===== Закоментовано при заміні розмітки та оформлення перемикача та замінено на код нижче
  //   const themeButton = document.querySelector('.page__theme');
  //   const resetButton = document.querySelector('.page__reset');
  //   if (themeButton) {
  //     themeButton.addEventListener('click', function (e) {
  //       resetButton.classList.add('active');
  //       changeTheme(true);
  //     });
  //   }
  //   if (resetButton) {
  //     resetButton.addEventListener('click', function (e) {
  //       resetButton.classList.remove('active');
  //       localStorage.setItem('user-theme', '');
  //     });
  // =============================
  toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;

    if (isChecked) {
      changeTheme(true);
    } else {
      localStorage.setItem('user-theme', '');
    }
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

// ====== Приклад використарння перемикача ======
// const toggle = document.getElementById('toggle');
// const body = document.body;

// toggle.addEventListener('input', e => {
//   const isChecked = e.target.checked;

//   if (isChecked) {
//     body.classList.add('dark-theme');
//   } else {
//     body.classList.remove('dark-theme');
//   }
// });
