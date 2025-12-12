export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) ?? [];
};

export const addToLocalStorage = (key, item) => {
  const items = getFromLocalStorage(key);
  localStorage.setItem(key, JSON.stringify([...items, item]));
};

export const deleteFromLocalStorage = (key, id) => {
  const items = getFromLocalStorage(key);
  const filteredItems = items.filter((item) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(filteredItems));
};
