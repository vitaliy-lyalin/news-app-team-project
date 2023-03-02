function showHideOthersCategories(el) {
  const otherCategoriesEl = document.querySelector('.filters--others');

  if (window.screen.width >= 1280) {
    if (el.target.classList.contains('category-6')) {
      otherCategoriesEl.classList.toggle('isOpen');
    }
  }
  if (window.screen.width >= 768 && window.screen.width < 1280) {
    if (el.target.classList.contains('category-4')) {
      otherCategoriesEl.classList.toggle('isOpen');
    }
  }
  if (window.screen.width < 768) {
    if (el.target.classList.contains('category-0')) {
      otherCategoriesEl.classList.toggle('isOpen');
    }
  }
}

export default showHideOthersCategories;
