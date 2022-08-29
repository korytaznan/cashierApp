import { ApolloQueryResult } from '@apollo/client';
import {
  Exact,
  GetMerchandiseGroupQuery,
  GetMerchandiseQuery,
  GetOrdersQuery,
  GetUnitMerchandiseQuery,
} from '@graphql';

export type RefetchGetOrdersQuery = (
  variables?:
    | Partial<
        Exact<{
          [key: string]: never;
        }>
      >
    | undefined,
) => Promise<ApolloQueryResult<GetOrdersQuery>>;

export type RefetchGetMerchandiseQuery = (
  variables?:
    | Partial<
        Exact<{
          [key: string]: never;
        }>
      >
    | undefined,
) => Promise<ApolloQueryResult<GetMerchandiseQuery>>;

export type RefetchGetUnitMerchandiseQuery = (
  variables?:
    | Partial<
        Exact<{
          [key: string]: never;
        }>
      >
    | undefined,
) => Promise<ApolloQueryResult<GetUnitMerchandiseQuery>>;

export type RefetchGetMerchandiseGroupQuery = (
  variables?:
    | Partial<
        Exact<{
          [key: string]: never;
        }>
      >
    | undefined,
) => Promise<ApolloQueryResult<GetMerchandiseGroupQuery>>;

export class Refetch {
  private refetchGetOrders: RefetchGetOrdersQuery | undefined;
  //   private refetchGetMerchandise: RefetchGetMerchandiseQuery | undefined;
  //   private refetchGetMerchandiseGroup: RefetchGetMerchandiseGroupQuery | undefined;
  //   private refetchGetUnitMerchandise: RefetchGetUnitMerchandiseQuery | undefined;

  set setRefetchGetOrders(refetch: RefetchGetOrdersQuery) {
    console.log(
      '🚀 ~ file: useRefetchQuery.ts ~ line 57 ~ Refetch ~ setsetRefetchGetOrders ~ refetch',
      refetch,
    );
    this.refetchGetOrders = refetch;
  }

  set _refetchGetOrders(refetch: RefetchGetOrdersQuery | undefined) {
    this.refetchGetOrders = refetch;
  }
  get _refetchGetOrders(): RefetchGetOrdersQuery | undefined {
    console.log(this.refetchGetOrders);
    return this.refetchGetOrders;
  }

  //   get getRefetchGetOrders(): RefetchGetOrdersQuery | undefined {
  //     console.log(this);
  //     return this.refetchGetOrders;
  //   }
  //   set setRefetchGetMerchandise(refetch: RefetchGetMerchandiseQuery) {
  //     this.refetchGetMerchandise = refetch;
  //   }
  //   set setRefetchGetMerchandiseGroup(refetch: RefetchGetMerchandiseGroupQuery) {
  //     this.refetchGetMerchandiseGroup = refetch;
  //   }
  //   set setRefetchGetUnitMerchandise(refetch: RefetchGetUnitMerchandiseQuery) {
  //     this.refetchGetUnitMerchandise = refetch;
  //   }

  public useRefetch() {
    // console.log('useRefetch', this.refetchGetOrders);
    return {
      refetchGetOrders: this._refetchGetOrders,
      //   refetchGetMerchandise: this.refetchGetMerchandise,
      //   refetchGetMerchandiseGroup: this.refetchGetMerchandiseGroup,
      //   refetchGetUnitMerchandise: this.refetchGetUnitMerchandise,
    };
  }
}
