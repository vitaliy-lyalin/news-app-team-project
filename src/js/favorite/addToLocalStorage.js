
export const LOCALSTORAGE_KEYS = {
    favorite: "favorite-news",
    // read: "read-more-news"
}


const localStorageUtils = {
    arr: []
}

// получаем статью которую будет парситься из ДОМ элемента в обьект и также добавляем к обьекту который получим 
// поле изфаворит = 1 и которая потом будет доабвлена в локалсторадж 
export function addTolocalStorage(target) {
    console.log("add to localstorage")

    if (target.closest(".card__btn")) {
        console.log("parseelement to obj")
        const cardDivParent = target.closest(".card")
            /// чтобы не могли лакнуть одну и туже статью 2 раза
        let cardAttrisFavorite = +cardDivParent.dataset.isFavorite
        console.log("cardAttrisFavorite", cardAttrisFavorite)

        if (!!cardAttrisFavorite) {

            cardDivParent.dataset.isFavorite = 0

        } else {
            cardDivParent.dataset.isFavorite = 1
            const constructedObject = parseDOMElementToObject(cardDivParent)
            console.log(constructedObject)
            setLocalStorage(constructedObject, LOCALSTORAGE_KEYS.favorite)
            cardDivParent.dataset.isPage = "favorite"
        }


    }

}

function parseDOMElementToObject(element) {
    console.log("function logic parse element to obj")
    const obj = {
        media: "",
        title: "",
        abstract: "",
        published_date: "",
        url: "",
        section: "",
        isRead: false,
        isFavorite: 1
    }


    const elementChildren = [...element.children];
    console.log(elementChildren)

    const [cardImgWrapper, cardDescription]  = elementChildren;

    for (const item of [...cardImgWrapper.children]) {
        
        if (isContains(item, "card__category")) {
            obj.section = getTextContent(item)
        }

        if(isContains(item, "card__img")) {
            obj.media = getArrt(item, "src")
        }
    }


    for (const item of [...cardDescription.children]) {
        if(isContains(item, "card__title")) {
            obj.title = getTextContent(item)
        }
        if(isContains(item, "card__text")) {
            obj.abstract = getTextContent(item)
        }
        if(isContains(item, "card__date-creation")) {
            const [textDate, urlReadMore] = [...item.children]
      
            const newTextDate = convertTextToDate(textDate)
            obj.published_date = newTextDate; 
            obj.url = getArrt(urlReadMore, "href")
        }

    }
    
    return obj
}

function convertTextToDate(element) {
    return getTextContent(element)
                                .split()
                                .reverse()
                                .join('')
                                .replace("/", ".")

}


function getArrt(element, elementAttr) {
    return element[elementAttr]
}

export function getTextContent(element) {
    return element.textContent.trim()
}

export function isContains(element, isClass) {
    return element.classList.contains(isClass)
}


function setLocalStorage(obj, key) {
    console.log("set local Storage")

    if (!localStorageUtils.arr.find(item => setLowerText(item.title) === setLowerText(obj.title))) {
        localStorageUtils.arr.push(obj);
        _setLocalStorage(key)
    }


}



export function _setLocalStorage(key) {
    console.log(key)
    localStorage.setItem(key, JSON.stringify(localStorageUtils.arr))
}

export function setLowerText(text) {
    return text.toLowerCase()
}