import { saveLocalData } from '../../utils/tools';
import { SEARCH_RESULT, ALERT_DISPLAY, SEARCH_RANDOM, SEARCH_FALSE } from '../actions';

const INITIAL_STATE = {
  data: [],
  random: [[{}]],
  isDone: false,
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
    saveLocalData('DetailItem', action.payload);
    return {
      ...state,
      random: action.payload,
      isDone: true,
    };
  case SEARCH_FALSE:
    saveLocalData('randomItem', { random: action.payload });
    return {
      ...state,
      isDone: false,
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
