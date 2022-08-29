import { loginActionObject } from './loginActionType';
import { logoutActionObject } from './logoutActionType';

export * from './loginActionType';
export * from './logoutActionType';

const sessionActionObj = {
  ...loginActionObject,
  ...logoutActionObject,
};

export type SessionActionType<T> = {
  type: keyof typeof sessionActionObj;
  payload: T;
};
