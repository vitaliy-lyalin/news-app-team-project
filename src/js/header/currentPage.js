export function addActiveClassToCurrentPage() {
  let links = document.querySelectorAll('.header__link');
  let bodyId = document.querySelector('body').id;

  // for (let link of links) {
  //   if (link.dataset.active == bodyId) {
  //     link.classList.add('current');
  //   }
  // }
  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    if (link.dataset.active === bodyId) {
      link.classList.add('current');
    }
  }

  // const currentUrl = window.location.href;
  // const menuLinks = document.querySelectorAll('.header__link');

  // menuLinks.forEach(link => {
  //   const linkUrl = link.href;
  //   if (currentUrl === linkUrl) {
  //     link.classList.add('current');
  //   }
  // });
}
