import { GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE, GetOrdersActionType } from '@store/actionTypes';
import { OrdersStateType } from '@store/types';

export const initialOrdersState: OrdersStateType = {
  data: undefined,
  loading: false,
  refetch: undefined,
};
export const ordersReducer = (
  state = initialOrdersState,
  action: GetOrdersActionType<OrdersStateType>,
): OrdersStateType => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case GET_ORDERS_FAILURE:
      return {
        ...initialOrdersState,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
