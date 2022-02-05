import { saveLocalData } from '../utils/tools';

export default function reducer(state, action) {
  switch (action.type) {
  case 'LOGIN':
    saveLocalData('user', { email: action.payload });
    saveLocalData('mealsToken', 1);
    saveLocalData('cocktailsToken', 1);
    return { ...state, email: action.payload };
  default: return state;
  }
}
