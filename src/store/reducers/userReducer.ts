import { LOGIN_SUCCESS, LOGIN_FAILURE, LoginActionType } from '@store/actionTypes';
import { UserStateType } from '@store/types';

export const initialUserState: UserStateType = {
  id: '',
  stallCode: '',
  type: '',
  username: '',
};

export const userReducer = (
  state = initialUserState,
  action: LoginActionType<any>,
): UserStateType => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...initialUserState,
        errors: action.payload,
      };
    default:
      return state;
  }
};
