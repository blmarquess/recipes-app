import { SEARCH_ON_OFF } from '../actions';

const INITIAL_STATE = {
  searchbtn: '',
};

const display = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEARCH_ON_OFF:
    return {
      ...state,
      searchbtn: !state.display.searchbtn,
    };
  default:
    return state;
  }
};

export default display;
