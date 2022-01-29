import { SEARCH_OFF, SEARCH_ON } from '../actions';

const INITIAL_STATE = {
  searchbtn: false,
};

const display = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEARCH_ON:
    return {
      ...state,
      searchbtn: true,
    };
  case SEARCH_OFF:
    return {
      ...state,
      searchbtn: false,
    };
  default:
    return state;
  }
};

export default display;
