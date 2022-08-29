import { all, put, takeLatest } from 'redux-saga/effects';
import {
  GET_ORDERS,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  GetOrdersActionType,
} from '@store/actionTypes';
import { OrdersStateType } from '@store/types';

function* getOrdersSaga({ payload }: GetOrdersActionType<OrdersStateType>) {
  try {
    if (!payload.error) {
      yield put({ type: GET_ORDERS_SUCCESS, payload });
    } else {
      yield put({ type: GET_ORDERS_FAILURE, payload });
    }
  } catch (error) {
    yield put({ type: GET_ORDERS_FAILURE, payload: error });
  }
}
export function* watchGetOrdersSaga(): Generator {
  const takeGetOrdersSaga = yield takeLatest(GET_ORDERS, getOrdersSaga);
  yield all([takeGetOrdersSaga]);
}
