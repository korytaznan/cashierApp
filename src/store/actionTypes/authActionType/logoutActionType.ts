export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const logoutActionObject = {
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
};

export type LogoutActionType<T> = {
  type: keyof typeof logoutActionObject;
  payload: T;
};
