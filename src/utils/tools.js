export const readLocalData = (data) => JSON.parse(localStorage.getItem(data));
export const saveLocalData = (keyDB, object) => localStorage
  .setItem(keyDB, JSON.stringify(object));
