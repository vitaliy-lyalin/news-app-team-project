export function addAttrFavorite() {
    const cards = [...document.querySelectorAll(".card")];
    // console.log(cards)
    cards.map(item => item.dataset.isFavorite = 0)
}