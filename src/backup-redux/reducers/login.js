import { saveLocalData } from '../../utils/tools';
import { SAVE_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    saveLocalData('user', { email: action.email });
    saveLocalData('mealsToken', 1);
    saveLocalData('cocktailsToken', 1);
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default login;
