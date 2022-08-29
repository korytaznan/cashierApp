import { GET_ORDERS } from '@store/actionTypes';
import { OrdersStateType } from '@store/types';

export const getOrdersAction = (payload: OrdersStateType) => {
  return {
    type: GET_ORDERS,
    payload,
  };
};
