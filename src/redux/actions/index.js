export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SEARCH_ON_OFF = 'SAVE_LOGIN';

export const switchSearch = () => ({ type: SEARCH_ON_OFF });

export const userAction = (email) => ({
  type: SAVE_LOGIN,
  email,
});
