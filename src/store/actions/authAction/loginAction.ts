import { LOGIN } from '@store/actionTypes';

export const loginAction = (payload: string) => {
  return {
    type: LOGIN,
    payload,
  };
};
