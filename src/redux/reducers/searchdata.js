import { saveLocalData } from '../../utils/tools';
import { SEARCH_RESULT, ALERT_DISPLAY, SEARCH_RANDOM } from '../actions';

const INITIAL_STATE = {
  data: [],
  random: [[{}]],
  showalert: false,
};

const searchdata = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEARCH_RESULT:
    saveLocalData('dataAPI', { meals: action.payload });
    return {
      ...state,
      data: action.payload,
    };
  case SEARCH_RANDOM:
    saveLocalData('randomItem', { random: action.payload });
    return {
      ...state,
      random: action.payload,
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

export default searchdata;
