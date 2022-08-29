export const GET_ORDERS = 'GET_ORDERS';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE';

export const getOrdersActionObject = {
  GET_ORDERS,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
};

export type GetOrdersActionType<T> = {
  type: keyof typeof getOrdersActionObject;
  payload: T;
};
