import { all, fork } from 'redux-saga/effects';
import { watchLoginSaga, watchLogoutSaga } from './authSaga';
import { watchGetOrdersSaga } from './getOrdersSaga';
export const rootSaga = function* root() {
  yield all([fork(watchLoginSaga), fork(watchLogoutSaga), fork(watchGetOrdersSaga)]);
};
