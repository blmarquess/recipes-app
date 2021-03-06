import { clearFocusItem, saveLocalData } from '../utils/storageTools';

export const IN_FOCO = 'IN_FOCO';
export const RECIPES_LIST = 'RECIPES_LIST';
export const CATEGORY_LIST = 'CATEGORY_LIST';
export const LOGIN = 'LOGIN';
export const SW_FILTER = 'SW_FILTER';
export const SET_FAVORITES = 'SET_FAVORITES';
export const RECOMMENDATIONS = 'RECOMMENDATIONS';
export const SET_INPROGRESS = 'SET_INPROGRESS';

export const switchFilter = (payload) => ({ type: SW_FILTER, payload });

export const setFavorites = (payload) => ({ type: SET_FAVORITES, payload });

export const login = (payload) => ({ type: LOGIN, payload });

export const recipesListAPI = (payload) => ({ type: RECIPES_LIST, payload });

export const recipesCategory = (payload) => ({ type: CATEGORY_LIST, payload });

export const feathRecommentations = (payload) => ({ type: RECOMMENDATIONS, payload });

export const setAtProgress = (payload) => {
  saveLocalData('inProgressRecipes', payload);
  return ({ type: SET_INPROGRESS, payload });
};

export const recipeInFoco = (payload) => {
  clearFocusItem();
  return ({ type: IN_FOCO, payload });
};
