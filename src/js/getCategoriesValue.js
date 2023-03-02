function getCategoriesValue(e) {
  const otherCategoriesEl = document.querySelector('.filters--others');

  // console.log(e.target.classList);

  const categories = [...document.querySelectorAll('.news-category')];
  const otherEl = document.querySelector('.category-6');
  // console.log(categories);

  removeActiveClass(categories);

  if (e.target.classList.contains('news-category')) {
    if (!e.target.classList.contains('category-6')) {
      if (e.target.classList.contains('other-category')) {
        otherEl.classList.add('active-category');
      }
      // console.log(e.target.textContent);

      // -> hide 'Others' categories popup
      if (otherCategoriesEl.classList.contains('isOPen')) {
        otherCategoriesEl.classList.remove('isOPen');
      }

      // -> add 'active' class to selected category
      e.target.classList.add('active-category');
      return e.target.textContent;
    }
  }
}

export default getCategoriesValue;

function removeActiveClass(categories) {
  categories.forEach(category => {
    if (category.classList.contains('active-category')) {
      category.classList.remove('active-category');
    }
  });
}
