export function addActiveClassToCurrentPage() {
  let links = document.querySelectorAll('.header__link');
  let bodyId = document.querySelector('body').id;

  for (let link of links) {
    if (link.dataset.active === bodyId) {
      link.classList.add('active');
    }
  }
}
