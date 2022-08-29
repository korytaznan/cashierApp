import { ApolloQueryResult } from '@apollo/client';
import { Exact, GetOrdersQuery } from '@graphql';
import { REFETCH_GET_ORDER } from '@store/actionTypes';

export const refetchGetOrderAction = (
  payload: (
    variables?:
      | Partial<
          Exact<{
            [key: string]: never;
          }>
        >
      | undefined,
  ) => Promise<ApolloQueryResult<GetOrdersQuery>>,
) => {
  return {
    type: REFETCH_GET_ORDER,
    payload,
  };
};
