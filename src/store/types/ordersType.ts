import { ApolloError, ApolloQueryResult } from '@apollo/client';
import { Exact, GetOrdersQuery, Order } from '@graphql';

export type OrdersStateType = {
  data?: Array<Order | null>;
  loading: boolean;
  refetch?: (
    variables?:
      | Partial<
          Exact<{
            [key: string]: never;
          }>
        >
      | undefined,
  ) => Promise<ApolloQueryResult<GetOrdersQuery>>;
  error?: ApolloError;
};
