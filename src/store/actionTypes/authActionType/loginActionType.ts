export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginActionObject = {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
};

export type LoginActionType<T> = {
  type: keyof typeof loginActionObject;
  payload: T;
};
