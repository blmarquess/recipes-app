export const SAVE_LOGIN = 'SAVE_LOGIN';
export const SEARCH_ON = 'SEARCH_ON';
export const SEARCH_OFF = 'SEARCH_OFF';

export const switchSearchOn = () => ({ type: SEARCH_ON });

export const switchSearchOff = () => ({ type: SEARCH_OFF });

export const userAction = (email) => ({
  type: SAVE_LOGIN,
  email,
});
