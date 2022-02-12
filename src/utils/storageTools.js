export const readLocalData = (data) => JSON.parse(localStorage.getItem(data));

export const saveLocalData = (keyDB, object) => localStorage
  .setItem(keyDB, JSON.stringify(object));

export const clearFocusItem = () => localStorage.removeItem('DetailItem');

export const dataCleaner = () => localStorage.clear();

export const isFavorite = (idItem) => {
  const favoriteDB = readLocalData('favoriteRecipe');
  if (favoriteDB === null) {
    return false;
  }
  return favoriteDB.some(({ id }) => id === idItem);
};

export const addFavorite = (newFavorite) => {
  const atualFavoritesDB = readLocalData('favoriteRecipes');

  if (atualFavoritesDB === null) {
    return saveLocalData('favoriteRecipes', [newFavorite]);
  }
  if (atualFavoritesDB !== null) {
    const newFavoritesDB = new Map([...atualFavoritesDB]);
    newFavoritesDB.set([newFavorite.id], newFavorite);
    return saveLocalData('favoriteRecipes', [...newFavoritesDB]);
  }
};

export const removeFavorite = (id) => {
  const atualFavoritesDB = readLocalData('favoriteRecipes');

  const newFavoritesDB = atualFavoritesDB
    .filter((recipe) => !recipe.id.includes(id));

  return saveLocalData('favoriteRecipes', [newFavoritesDB]);
};
