import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { sessionReducer } from './sessionReducer';
import { ordersReducer } from './ordersReducer';

export const reducers = combineReducers({
  user: userReducer,
  session: sessionReducer,
  orderList: ordersReducer,
});
