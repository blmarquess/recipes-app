import { saveLocalData } from '../utils/tools';

export default function reducer(state, action) {
  switch (action.type) {
  case 'LOGIN':
    saveLocalData('user', { email: action.payload });
    saveLocalData('mealsToken', 1);
    saveLocalData('cocktailsToken', 1);
    return { ...state, user: { email: action.payload } };
  case 'IN_FOCO':
    saveLocalData('DetailItem', { foco: action.payload });
    return { ...state, recipefocus: action.payload };
  case 'RECIPES_LIST':
    saveLocalData('RecipesList', { recipeslist: action.payload });
    return { ...state, recipeslist: action.payload };
  default: return state;
  }
}
