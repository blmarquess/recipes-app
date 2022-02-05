export const IN_FOCO = 'IN_FOCO';
export const RECIPES_LIST = 'RECIPES_LIST';
export const LOGIN = 'LOGIN';

export const login = (payload) => ({ type: LOGIN, payload });

export const recipeInFoco = (payload) => ({ type: IN_FOCO, payload });

export const recipesListAPI = (payload) => ({ type: RECIPES_LIST, payload });
