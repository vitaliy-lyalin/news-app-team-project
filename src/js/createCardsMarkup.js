export function createCardsMarkup(data){
    return data.map(({
            title, 
            abstract,
            media, 
            published_date, 
            url
        }) => {
            const img = media[0]["media-metadata"][2].url;
            // console.log(media)
        return `<div class = "card">
        <img class="card__img" src='${img}' alt="" width="350px" height="500px">
        <button class="card__btn">add/remove</button>
        <h3 class="card__title">${title}</h3>
        <p class="card__text">${abstract}</p>
        <span class="card__date">published_date: ${published_date}</span>
        <a href="${url}">read more</a></div>`
    }).join('')
}

