export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}