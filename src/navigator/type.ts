import { ApolloQueryResult } from '@apollo/client';
import {
  Bill,
  Exact,
  GetMerchandiseGroupQuery,
  GetMerchandiseQuery,
  GetOrderQuery,
  GetOrdersQuery,
  GetUnitMerchandiseQuery,
  Maybe,
  Order,
  Table,
} from '@graphql';
import { OrderSelectedType } from '@screens';

type ParamsAddMerchandiseGroup = {
  refetchGroup?: (
    variables?:
      | Partial<
          Exact<{
            [key: string]: never;
          }>
        >
      | undefined,
  ) => Promise<ApolloQueryResult<GetMerchandiseGroupQuery>>;
};

type ParamsAddUnitMerchandise = {
  refetchUnit?: (
    variables?:
      | Partial<
          Exact<{
            [key: string]: never;
          }>
        >
      | undefined,
  ) => Promise<ApolloQueryResult<GetUnitMerchandiseQuery>>;
};

type ParamsAddMerchandise = {
  refetch?: (
    variables?:
      | Partial<
          Exact<{
            [key: string]: never;
          }>
        >
      | undefined,
  ) => Promise<ApolloQueryResult<GetMerchandiseQuery>>;
};

type PramsOrderDetail = {
  refetch?: (
    variables?:
      | Partial<
          Exact<{
            [key: string]: never;
          }>
        >
      | undefined,
  ) => Promise<ApolloQueryResult<GetOrdersQuery>>;
  idOrder?: string | null;
  table: Table | null;
  dataOrders?: Order[];
};

type ParamsAddOrder = {
  callback: (data: OrderSelectedType) => void;
};

export type RootStackParamList = {
  ADD_MERCHANDISE: ParamsAddMerchandise | undefined;
  ADD_MERCHANDISE_GROUP: ParamsAddMerchandiseGroup | undefined;
  ADD_TABLE: undefined;
  ADD_UNIT_MERCHANDISE: ParamsAddUnitMerchandise | undefined;
  DRAWER_STACK: undefined;
  HOME: undefined;
  LOGIN: undefined;
  SETTING: undefined;
  MERCHANDISE: undefined;
  ORDER_DETAIL: PramsOrderDetail | undefined;
  ADD_ORDER: ParamsAddOrder | undefined;
  REVENUE: undefined;
  REVENUE_BY_DATE: {
    startDate: Date;
    endDate: Date;
  };
  REVENUE_BY_DATE_DETAIL: {
    revenueDetail: Maybe<Bill>;
  };
};
