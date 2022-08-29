import { all, put, takeLatest } from 'redux-saga/effects';
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LoginActionType } from '@store/actionTypes';

function* loginSaga({ payload }: LoginActionType<string>) {
  try {
    if (payload.length) {
      yield put({ type: LOGIN_SUCCESS, payload });
    }
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error });
  }
}
export function* watchLoginSaga(): Generator {
  const takeLoginSaga = yield takeLatest(LOGIN, loginSaga);
  yield all([takeLoginSaga]);
}
