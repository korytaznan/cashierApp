import { all, put, takeLatest } from 'redux-saga/effects';
import { LOGOUT, LOGOUT_FAILURE, LOGOUT_SUCCESS, LogoutActionType } from '@store/actionTypes';

function* logoutSaga({ payload }: LogoutActionType<any>) {
  try {
    yield put({ type: LOGOUT_SUCCESS, payload });
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, payload: error });
  }
}
export function* watchLogoutSaga(): Generator {
  const takeLogoutSaga = yield takeLatest(LOGOUT, logoutSaga);
  yield all([takeLogoutSaga]);
}
