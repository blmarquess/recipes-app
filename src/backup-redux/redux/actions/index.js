export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SEARCH_ON_OFF = 'SAVE_LOGIN';

export const userAction = (email) => ({
  type: SAVE_LOGIN,
  email,
});

export const searchSW = () => ({
  type: SEARCH_ON_OFF,
});
