import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SessionActionType,
} from '@store/actionTypes';
import { SessionStateType } from '@store/types';

export const initialSessionState: SessionStateType = {
  token: null,
  error: undefined,
};

export const sessionReducer = (
  state = initialSessionState,
  action: SessionActionType<any>,
): SessionStateType => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...initialSessionState,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      console.log('LOGOUT_SUCCESS');
      return initialSessionState;
    default:
      return state;
  }
};
