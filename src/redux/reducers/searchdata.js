import { saveLocalData } from '../../utils/tools';
import { SEARCH_RESULT, ALERT_DISPLAY } from '../actions';

const INITIAL_STATE = {
  data: [],
  showalert: false,
};

const display = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEARCH_RESULT:
    saveLocalData('ResultlsAPI', { meals: action.payload });
    return {
      ...state,
      data: action.payload,
    };
  case ALERT_DISPLAY:
    return {
      ...state,
      showalert: action.payload,
    };
  default:
    return state;
  }
};

export default display;
