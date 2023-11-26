export function setItemLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getItemLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
