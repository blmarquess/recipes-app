export const readLocalData = (data) => JSON.parse(localStorage.getItem(data));

export const saveLocalData = (keyDB, object) => localStorage
  .setItem(keyDB, JSON.stringify(object));

export const clearFocusItem = () => localStorage.removeItem('DetailItem');

export const dataCleaner = () => localStorage.clear();

// ---------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------

export const addInProgress = (newFavorite) => {
  const progressDB = readLocalData('inProgressRecipes');

  if (progressDB === null) {
    return saveLocalData('inProgressRecipes', [newFavorite]);
  }
  if (progressDB !== null) {
    return saveLocalData('inProgressRecipes', [...progressDB, newFavorite]);
  }
};

export const removeInProgress = (idSend) => {
  const progressDB = readLocalData('inProgressRecipes');

  const newProgressDB = progressDB
    .filter(({ id }) => id !== idSend);

  return saveLocalData('inProgressRecipes', [...newProgressDB]);
};

export const hasRecipeInProgress = (idItem) => {
  const inProgressDB = readLocalData('inProgressRecipes');
  if (inProgressDB === null) {
    return false;
  }
  return inProgressDB.some((item) => item.id === idItem);
};

// ---------------------------------------------------------------------------------------

export const hasItemInData = (idSearch, data) => {
  const favoriteDB = readLocalData(data);
  if (favoriteDB === null) {
    return false;
  }
  return favoriteDB.some((item) => item.id === idSearch);
};
