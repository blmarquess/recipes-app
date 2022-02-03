export const SEARCH_RESULT = 'SEARCH_RESULT';
export const SAVE_LOGIN = 'SAVE_LOGIN';
export const ALERT_DISPLAY = 'ALERT_DISPLAY';
export const SEARCH_RANDOM = 'SEARCH_RANDOM';

export const SearchDataAPI = (payload) => ({ type: SEARCH_RESULT, payload });

export const SearchRandomAPI = (payload) => ({ type: SEARCH_RANDOM, payload });

export const setAlert = (payload) => ({ type: ALERT_DISPLAY, payload });

export const userAction = (email) => ({
  type: SAVE_LOGIN,
  email,
});
