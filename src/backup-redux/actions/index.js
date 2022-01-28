export const SAVE_LOGIN = 'SAVE_LOGIN';

export const userAction = (email) => ({
  type: SAVE_LOGIN,
  email,
});
