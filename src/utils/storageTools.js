export const readLocalData = (data) => JSON.parse(localStorage.getItem(data));

export const saveLocalData = (keyDB, object) => localStorage
  .setItem(keyDB, JSON.stringify(object));

export const clearFocusItem = () => localStorage.removeItem('DetailItem');

export const dataCleaner = () => localStorage.clear();

export const isFavorite = (idItem) => {
  const favoriteDB = readLocalData('favoriteRecipes');
  if (favoriteDB === null) {
    return false;
  }
  return favoriteDB.some((item) => item.id === idItem);
};

export const addFavorite = (newFavorite) => {
  const atualFavoritesDB = readLocalData('favoriteRecipes');

  if (atualFavoritesDB === null) {
    return saveLocalData('favoriteRecipes', [newFavorite]);
  }
  if (atualFavoritesDB !== null) {
    return saveLocalData('favoriteRecipes', [...atualFavoritesDB, newFavorite]);
  }
};

export const removeFavorite = (idSend) => {
  const atualFavoritesDB = readLocalData('favoriteRecipes');

  const newFavoritesDB = atualFavoritesDB
    .filter(({ id }) => id !== idSend);

  return saveLocalData('favoriteRecipes', [...newFavoritesDB]);
};
