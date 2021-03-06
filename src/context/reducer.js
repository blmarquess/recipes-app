import { saveLocalData } from '../utils/storageTools';

export default function reducer(state, action) {
  switch (action.type) {
  case 'LOGIN':
    saveLocalData('user', { email: action.payload });
    saveLocalData('mealsToken', 1);
    saveLocalData('cocktailsToken', 1);
    return { ...state, user: { email: action.payload } };
  case 'IN_FOCO':
    saveLocalData('DetailItem', { recipefocus: action.payload });
    return { ...state, recipefocus: action.payload };
  case 'RECIPES_LIST':
    saveLocalData('RecipesList', { recipeslist: action.payload });
    return { ...state, recipeslist: action.payload };
  case 'CATEGORY_LIST':
    saveLocalData('RecipesCategory', { recipescategory: action.payload });
    return { ...state, recipescategory: action.payload };
  case 'SW_FILTER':
    return { ...state, hasfilter: action.payload };
  case 'SET_FAVORITES':
    return { ...state, favorites: action.payload };
  case 'SET_INPROGRESS':
    return { ...state, inprogress: [...action.payload] };
  case 'RECOMMENDATIONS':
    return { ...state, recipesrecomend: action.payload };
  default: return state;
  }
}
