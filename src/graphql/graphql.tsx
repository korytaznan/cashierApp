import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  TypeMerchandise: 'merchandise' | 'finished' | 'materials';
  TypeUnitDiscount: 'percent' | 'value';
  TypeUser: 'admin' | 'manage' | 'staff';
};

export type Bill = {
  __typename?: 'Bill';
  count: Scalars['Float'];
  createdOrderAt: Scalars['Date'];
  discount?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  orderData?: Maybe<Array<Maybe<OderData>>>;
  paymentAt?: Maybe<Scalars['Date']>;
  price: Scalars['Float'];
  priceDiscount?: Maybe<Scalars['Int']>;
  tableId: Scalars['ID'];
  totalPrice: Scalars['Float'];
  unitDiscount?: Maybe<Scalars['TypeUnitDiscount']>;
};

export type Login = {
  __typename?: 'Login';
  message: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};

export type Menu = {
  __typename?: 'Menu';
  adminId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Int'];
  type: Scalars['String'];
  unit: Scalars['String'];
};

export type Merchandise = {
  __typename?: 'Merchandise';
  description?: Maybe<Scalars['String']>;
  group: Scalars['String'];
  id: Scalars['ID'];
  merchandiseCode: Scalars['String'];
  merchandiseName: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  type: Scalars['TypeMerchandise'];
  unit: Scalars['String'];
};

export type MerchandiseGroup = {
  __typename?: 'MerchandiseGroup';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  merchandiseGroupCode: Scalars['String'];
  merchandiseGroupName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMenu: Scalars['String'];
  createMerchandise: Success;
  createMerchandiseGroup: Success;
  createOrder: Success;
  createTable: Success;
  createUnitMerchandise: Success;
  createUser: Success;
  deleteMenu: Scalars['String'];
  deleteMerchandise: Success;
  deleteMerchandiseGroup: Success;
  deleteOrder: Success;
  deleteTable: Success;
  deleteUnitMerchandise: Success;
  deleteUser: Success;
  editMenu?: Maybe<Menu>;
  editMerchandise?: Maybe<Merchandise>;
  editMerchandiseGroup?: Maybe<MerchandiseGroup>;
  editOrder: Order;
  editTable?: Maybe<Table>;
  editUnitMerchandise?: Maybe<UnitMerchandise>;
  editUser: User;
  login: Login;
  saveBill: Success;
  signup: Success;
};

export type MutationCreateMenuArgs = {
  name: Scalars['String'];
  price: Scalars['Int'];
  type: Scalars['String'];
  unit: Scalars['String'];
};

export type MutationCreateMerchandiseArgs = {
  description?: InputMaybe<Scalars['String']>;
  group: Scalars['String'];
  merchandiseCode: Scalars['String'];
  merchandiseName: Scalars['String'];
  price?: InputMaybe<Scalars['Float']>;
  type: Scalars['TypeMerchandise'];
  unit: Scalars['String'];
};

export type MutationCreateMerchandiseGroupArgs = {
  description?: InputMaybe<Scalars['String']>;
  merchandiseGroupCode: Scalars['String'];
  merchandiseGroupName: Scalars['String'];
};

export type MutationCreateOrderArgs = {
  orderData?: InputMaybe<Array<OrderDataInput>>;
  tableId: Scalars['ID'];
};

export type MutationCreateTableArgs = {
  description?: InputMaybe<Scalars['String']>;
  tableCode: Scalars['String'];
  tableName: Scalars['String'];
  used: Scalars['Boolean'];
};

export type MutationCreateUnitMerchandiseArgs = {
  description?: InputMaybe<Scalars['String']>;
  unitCode: Scalars['String'];
  unitName: Scalars['String'];
};

export type MutationCreateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  type: Scalars['TypeUser'];
  username: Scalars['String'];
};

export type MutationDeleteMenuArgs = {
  id: Scalars['String'];
};

export type MutationDeleteMerchandiseArgs = {
  id: Scalars['String'];
};

export type MutationDeleteMerchandiseGroupArgs = {
  id: Scalars['String'];
};

export type MutationDeleteOrderArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTableArgs = {
  id: Scalars['String'];
};

export type MutationDeleteUnitMerchandiseArgs = {
  id: Scalars['String'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type MutationEditMenuArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  type: Scalars['String'];
  unit: Scalars['String'];
};

export type MutationEditMerchandiseArgs = {
  description?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  merchandiseCode?: InputMaybe<Scalars['String']>;
  merchandiseName?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['TypeMerchandise']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type MutationEditMerchandiseGroupArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  merchandiseGroupCode?: InputMaybe<Scalars['String']>;
  merchandiseGroupName?: InputMaybe<Scalars['String']>;
};

export type MutationEditOrderArgs = {
  discount?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  orderData?: InputMaybe<Array<InputMaybe<OrderDataInput>>>;
  price?: InputMaybe<Scalars['Float']>;
  priceDiscount?: InputMaybe<Scalars['Int']>;
  tableId?: InputMaybe<Scalars['ID']>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  unitDiscount?: InputMaybe<Scalars['TypeUnitDiscount']>;
};

export type MutationEditTableArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  tableCode: Scalars['String'];
  tableName: Scalars['String'];
  used: Scalars['Boolean'];
};

export type MutationEditUnitMerchandiseArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  unitCode: Scalars['String'];
  unitName: Scalars['String'];
};

export type MutationEditUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['TypeUser']>;
  username?: InputMaybe<Scalars['String']>;
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  stallCode: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};

export type MutationSaveBillArgs = {
  count: Scalars['Float'];
  createdOrderAt: Scalars['Date'];
  discount?: InputMaybe<Scalars['Float']>;
  orderData?: InputMaybe<Array<OrderDataInput>>;
  paymentAt: Scalars['Date'];
  price: Scalars['Float'];
  priceDiscount?: InputMaybe<Scalars['Int']>;
  tableId: Scalars['ID'];
  totalPrice: Scalars['Float'];
  unitDiscount?: InputMaybe<Scalars['TypeUnitDiscount']>;
};

export type MutationSignupArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  stallCode: Scalars['String'];
  type: Scalars['TypeUser'];
  username: Scalars['String'];
};

export type OderData = {
  __typename?: 'OderData';
  count: Scalars['Float'];
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  totalPrice: Scalars['Float'];
  unit: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  count: Scalars['Float'];
  createdAt: Scalars['Date'];
  discount?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  orderData?: Maybe<Array<Maybe<OderData>>>;
  price: Scalars['Float'];
  priceDiscount?: Maybe<Scalars['Int']>;
  tableId: Scalars['ID'];
  totalPrice: Scalars['Float'];
  unitDiscount?: Maybe<Scalars['TypeUnitDiscount']>;
};

export type OrderDataInput = {
  count?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getBill: Bill;
  getBills: Array<Maybe<Bill>>;
  getMenu?: Maybe<Menu>;
  getMenus?: Maybe<Array<Maybe<Menu>>>;
  getMerchandise?: Maybe<Array<Maybe<Merchandise>>>;
  getMerchandiseGroup?: Maybe<Array<Maybe<MerchandiseGroup>>>;
  getOrder: Order;
  getOrders: Array<Maybe<Order>>;
  getRevenue: Array<Maybe<Bill>>;
  getTable: Table;
  getTables?: Maybe<Array<Maybe<Table>>>;
  getUnitMerchandise?: Maybe<Array<Maybe<UnitMerchandise>>>;
  getUser?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
};

export type QueryGetBillArgs = {
  id: Scalars['ID'];
};

export type QueryGetMenuArgs = {
  id: Scalars['ID'];
};

export type QueryGetMerchandiseArgs = {
  filterType?: InputMaybe<Scalars['TypeMerchandise']>;
};

export type QueryGetOrderArgs = {
  id: Scalars['ID'];
};

export type QueryGetRevenueArgs = {
  endDate?: InputMaybe<Scalars['Date']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  startDate?: InputMaybe<Scalars['Date']>;
};

export type QueryGetTableArgs = {
  id: Scalars['ID'];
};

export type QueryGetUserArgs = {
  id: Scalars['ID'];
};

export type Success = {
  __typename?: 'Success';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Table = {
  __typename?: 'Table';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  tableCode: Scalars['String'];
  tableName: Scalars['String'];
  used: Scalars['Boolean'];
};

export type UnitMerchandise = {
  __typename?: 'UnitMerchandise';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  unitCode: Scalars['String'];
  unitName: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  adminId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  password: Scalars['String'];
  stallCode: Scalars['String'];
  type: Scalars['TypeUser'];
  username: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  stallCode: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'Login'; message: string; token?: string | null };
};

export type CreateMerchandiseMutationVariables = Exact<{
  merchandiseCode: Scalars['String'];
  merchandiseName: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  group: Scalars['String'];
  type: Scalars['TypeMerchandise'];
  unit: Scalars['String'];
  price?: InputMaybe<Scalars['Float']>;
}>;

export type CreateMerchandiseMutation = {
  __typename?: 'Mutation';
  createMerchandise: { __typename?: 'Success'; message: string; success: boolean };
};

export type EditMerchandiseMutationVariables = Exact<{
  id: Scalars['String'];
  merchandiseCode?: InputMaybe<Scalars['String']>;
  merchandiseName?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['TypeMerchandise']>;
  unit?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
}>;

export type EditMerchandiseMutation = {
  __typename?: 'Mutation';
  editMerchandise?: {
    __typename?: 'Merchandise';
    id: string;
    merchandiseCode: string;
    merchandiseName: string;
    description?: string | null;
    unit: string;
    group: string;
    type: any;
    price?: number | null;
  } | null;
};

export type DeleteMerchandiseMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteMerchandiseMutation = {
  __typename?: 'Mutation';
  deleteMerchandise: { __typename?: 'Success'; message: string; success: boolean };
};

export type CreateMerchandiseGroupMutationVariables = Exact<{
  merchandiseGroupCode: Scalars['String'];
  merchandiseGroupName: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;

export type CreateMerchandiseGroupMutation = {
  __typename?: 'Mutation';
  createMerchandiseGroup: { __typename?: 'Success'; message: string; success: boolean };
};

export type EditMerchandiseGroupMutationVariables = Exact<{
  id: Scalars['String'];
  merchandiseGroupCode: Scalars['String'];
  merchandiseGroupName: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;

export type EditMerchandiseGroupMutation = {
  __typename?: 'Mutation';
  editMerchandiseGroup?: {
    __typename?: 'MerchandiseGroup';
    id: string;
    merchandiseGroupCode: string;
    merchandiseGroupName: string;
    description?: string | null;
  } | null;
};

export type DeleteMerchandiseGroupMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteMerchandiseGroupMutation = {
  __typename?: 'Mutation';
  deleteMerchandiseGroup: { __typename?: 'Success'; message: string; success: boolean };
};

export type CreateOrderMutationVariables = Exact<{
  tableId: Scalars['ID'];
  orderData?: InputMaybe<Array<OrderDataInput> | OrderDataInput>;
}>;

export type CreateOrderMutation = {
  __typename?: 'Mutation';
  createOrder: { __typename?: 'Success'; message: string; success: boolean };
};

export type EditOrderMutationVariables = Exact<{
  id: Scalars['ID'];
  tableId?: InputMaybe<Scalars['ID']>;
  discount?: InputMaybe<Scalars['Float']>;
  unitDiscount?: InputMaybe<Scalars['TypeUnitDiscount']>;
  orderData?: InputMaybe<Array<InputMaybe<OrderDataInput>> | InputMaybe<OrderDataInput>>;
}>;

export type EditOrderMutation = {
  __typename?: 'Mutation';
  editOrder: {
    __typename?: 'Order';
    id: string;
    createdAt: any;
    tableId: string;
    price: number;
    totalPrice: number;
    discount?: number | null;
    priceDiscount?: number | null;
    unitDiscount?: any | null;
    count: number;
    orderData?: Array<{
      __typename?: 'OderData';
      id: string;
      count: number;
      price: number;
      name: string;
      unit: string;
      totalPrice: number;
    } | null> | null;
  };
};

export type DeleteOrderMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteOrderMutation = {
  __typename?: 'Mutation';
  deleteOrder: { __typename?: 'Success'; message: string; success: boolean };
};

export type SaveBillMutationVariables = Exact<{
  createdOrderAt: Scalars['Date'];
  tableId: Scalars['ID'];
  paymentAt: Scalars['Date'];
  price: Scalars['Float'];
  totalPrice: Scalars['Float'];
  discount?: InputMaybe<Scalars['Float']>;
  priceDiscount?: InputMaybe<Scalars['Int']>;
  unitDiscount?: InputMaybe<Scalars['TypeUnitDiscount']>;
  orderData?: InputMaybe<Array<OrderDataInput> | OrderDataInput>;
  count: Scalars['Float'];
}>;

export type SaveBillMutation = {
  __typename?: 'Mutation';
  saveBill: { __typename?: 'Success'; message: string; success: boolean };
};

export type CreateTableMutationVariables = Exact<{
  tableCode: Scalars['String'];
  tableName: Scalars['String'];
  used: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
}>;

export type CreateTableMutation = {
  __typename?: 'Mutation';
  createTable: { __typename?: 'Success'; message: string; success: boolean };
};

export type EditTableMutationVariables = Exact<{
  id: Scalars['String'];
  tableCode: Scalars['String'];
  tableName: Scalars['String'];
  used: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
}>;

export type EditTableMutation = {
  __typename?: 'Mutation';
  editTable?: {
    __typename?: 'Table';
    id: string;
    tableCode: string;
    tableName: string;
    description?: string | null;
    used: boolean;
  } | null;
};

export type DeleteTableMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteTableMutation = {
  __typename?: 'Mutation';
  deleteTable: { __typename?: 'Success'; message: string; success: boolean };
};

export type CreateUnitMerchandiseMutationVariables = Exact<{
  unitCode: Scalars['String'];
  unitName: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;

export type CreateUnitMerchandiseMutation = {
  __typename?: 'Mutation';
  createUnitMerchandise: { __typename?: 'Success'; message: string; success: boolean };
};

export type EditUnitMerchandiseMutationVariables = Exact<{
  id: Scalars['String'];
  unitCode: Scalars['String'];
  unitName: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;

export type EditUnitMerchandiseMutation = {
  __typename?: 'Mutation';
  editUnitMerchandise?: {
    __typename?: 'UnitMerchandise';
    id: string;
    unitCode: string;
    unitName: string;
    description?: string | null;
  } | null;
};

export type DeleteUnitMerchandiseMutationVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteUnitMerchandiseMutation = {
  __typename?: 'Mutation';
  deleteUnitMerchandise: { __typename?: 'Success'; message: string; success: boolean };
};

export type GetBillsQueryVariables = Exact<{ [key: string]: never }>;

export type GetBillsQuery = {
  __typename?: 'Query';
  getBills: Array<{
    __typename?: 'Bill';
    id: string;
    createdOrderAt: any;
    tableId: string;
    paymentAt?: any | null;
    price: number;
    totalPrice: number;
    discount?: number | null;
    priceDiscount?: number | null;
    unitDiscount?: any | null;
    count: number;
    orderData?: Array<{
      __typename?: 'OderData';
      id: string;
      count: number;
      price: number;
      name: string;
      unit: string;
      totalPrice: number;
    } | null> | null;
  } | null>;
};

export type GetBillQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetBillQuery = {
  __typename?: 'Query';
  getBill: {
    __typename?: 'Bill';
    id: string;
    createdOrderAt: any;
    tableId: string;
    paymentAt?: any | null;
    price: number;
    totalPrice: number;
    discount?: number | null;
    priceDiscount?: number | null;
    unitDiscount?: any | null;
    count: number;
    orderData?: Array<{
      __typename?: 'OderData';
      id: string;
      count: number;
      price: number;
      name: string;
      unit: string;
      totalPrice: number;
    } | null> | null;
  };
};

export type GetMerchandiseQueryVariables = Exact<{
  filterType?: InputMaybe<Scalars['TypeMerchandise']>;
}>;

export type GetMerchandiseQuery = {
  __typename?: 'Query';
  getMerchandise?: Array<{
    __typename?: 'Merchandise';
    id: string;
    merchandiseCode: string;
    merchandiseName: string;
    description?: string | null;
    unit: string;
    group: string;
    type: any;
    price?: number | null;
  } | null> | null;
};

export type GetMerchandiseGroupQueryVariables = Exact<{ [key: string]: never }>;

export type GetMerchandiseGroupQuery = {
  __typename?: 'Query';
  getMerchandiseGroup?: Array<{
    __typename?: 'MerchandiseGroup';
    id: string;
    merchandiseGroupCode: string;
    merchandiseGroupName: string;
    description?: string | null;
  } | null> | null;
};

export type GetOrdersQueryVariables = Exact<{ [key: string]: never }>;

export type GetOrdersQuery = {
  __typename?: 'Query';
  getOrders: Array<{
    __typename?: 'Order';
    id: string;
    createdAt: any;
    tableId: string;
    price: number;
    totalPrice: number;
    discount?: number | null;
    priceDiscount?: number | null;
    unitDiscount?: any | null;
    count: number;
    orderData?: Array<{
      __typename?: 'OderData';
      id: string;
      count: number;
      price: number;
      name: string;
      unit: string;
      totalPrice: number;
    } | null> | null;
  } | null>;
};

export type GetOrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetOrderQuery = {
  __typename?: 'Query';
  getOrder: {
    __typename?: 'Order';
    id: string;
    createdAt: any;
    tableId: string;
    price: number;
    totalPrice: number;
    discount?: number | null;
    priceDiscount?: number | null;
    unitDiscount?: any | null;
    count: number;
    orderData?: Array<{
      __typename?: 'OderData';
      id: string;
      count: number;
      price: number;
      name: string;
      unit: string;
      totalPrice: number;
    } | null> | null;
  };
};

export type GetRevenueQueryVariables = Exact<{
  startDate?: InputMaybe<Scalars['Date']>;
  endDate?: InputMaybe<Scalars['Date']>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type GetRevenueQuery = {
  __typename?: 'Query';
  getRevenue: Array<{
    __typename?: 'Bill';
    id: string;
    createdOrderAt: any;
    tableId: string;
    paymentAt?: any | null;
    price: number;
    totalPrice: number;
    discount?: number | null;
    priceDiscount?: number | null;
    unitDiscount?: any | null;
    count: number;
    orderData?: Array<{
      __typename?: 'OderData';
      id: string;
      count: number;
      price: number;
      name: string;
      unit: string;
      totalPrice: number;
    } | null> | null;
  } | null>;
};

export type GetTablesQueryVariables = Exact<{ [key: string]: never }>;

export type GetTablesQuery = {
  __typename?: 'Query';
  getTables?: Array<{
    __typename?: 'Table';
    id: string;
    tableCode: string;
    tableName: string;
    description?: string | null;
    used: boolean;
  } | null> | null;
};

export type GetTableQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type GetTableQuery = {
  __typename?: 'Query';
  getTable: {
    __typename?: 'Table';
    id: string;
    tableCode: string;
    tableName: string;
    description?: string | null;
    used: boolean;
  };
};

export type GetUnitMerchandiseQueryVariables = Exact<{ [key: string]: never }>;

export type GetUnitMerchandiseQuery = {
  __typename?: 'Query';
  getUnitMerchandise?: Array<{
    __typename?: 'UnitMerchandise';
    id: string;
    unitCode: string;
    unitName: string;
    description?: string | null;
  } | null> | null;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: 'Query';
  getUsers?: Array<{
    __typename?: 'User';
    id: string;
    stallCode: string;
    type: any;
    username: string;
    adminId?: string | null;
    email?: string | null;
  } | null> | null;
};

export const LoginDocument = gql`
  mutation login($username: String!, $password: String!, $stallCode: String!) {
    login(username: $username, password: $password, stallCode: $stallCode) {
      message
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      stallCode: // value for 'stallCode'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const CreateMerchandiseDocument = gql`
  mutation CreateMerchandise(
    $merchandiseCode: String!
    $merchandiseName: String!
    $description: String
    $group: String!
    $type: TypeMerchandise!
    $unit: String!
    $price: Float
  ) {
    createMerchandise(
      merchandiseCode: $merchandiseCode
      merchandiseName: $merchandiseName
      description: $description
      group: $group
      type: $type
      unit: $unit
      price: $price
    ) {
      message
      success
    }
  }
`;
export type CreateMerchandiseMutationFn = Apollo.MutationFunction<
  CreateMerchandiseMutation,
  CreateMerchandiseMutationVariables
>;

/**
 * __useCreateMerchandiseMutation__
 *
 * To run a mutation, you first call `useCreateMerchandiseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMerchandiseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMerchandiseMutation, { data, loading, error }] = useCreateMerchandiseMutation({
 *   variables: {
 *      merchandiseCode: // value for 'merchandiseCode'
 *      merchandiseName: // value for 'merchandiseName'
 *      description: // value for 'description'
 *      group: // value for 'group'
 *      type: // value for 'type'
 *      unit: // value for 'unit'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useCreateMerchandiseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMerchandiseMutation,
    CreateMerchandiseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateMerchandiseMutation, CreateMerchandiseMutationVariables>(
    CreateMerchandiseDocument,
    options,
  );
}
export type CreateMerchandiseMutationHookResult = ReturnType<typeof useCreateMerchandiseMutation>;
export type CreateMerchandiseMutationResult = Apollo.MutationResult<CreateMerchandiseMutation>;
export type CreateMerchandiseMutationOptions = Apollo.BaseMutationOptions<
  CreateMerchandiseMutation,
  CreateMerchandiseMutationVariables
>;
export const EditMerchandiseDocument = gql`
  mutation EditMerchandise(
    $id: String!
    $merchandiseCode: String
    $merchandiseName: String
    $description: String
    $group: String
    $type: TypeMerchandise
    $unit: String
    $price: Float
  ) {
    editMerchandise(
      id: $id
      merchandiseCode: $merchandiseCode
      merchandiseName: $merchandiseName
      description: $description
      group: $group
      type: $type
      unit: $unit
      price: $price
    ) {
      id
      merchandiseCode
      merchandiseName
      description
      unit
      group
      type
      price
    }
  }
`;
export type EditMerchandiseMutationFn = Apollo.MutationFunction<
  EditMerchandiseMutation,
  EditMerchandiseMutationVariables
>;

/**
 * __useEditMerchandiseMutation__
 *
 * To run a mutation, you first call `useEditMerchandiseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditMerchandiseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editMerchandiseMutation, { data, loading, error }] = useEditMerchandiseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      merchandiseCode: // value for 'merchandiseCode'
 *      merchandiseName: // value for 'merchandiseName'
 *      description: // value for 'description'
 *      group: // value for 'group'
 *      type: // value for 'type'
 *      unit: // value for 'unit'
 *      price: // value for 'price'
 *   },
 * });
 */
export function useEditMerchandiseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditMerchandiseMutation,
    EditMerchandiseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditMerchandiseMutation, EditMerchandiseMutationVariables>(
    EditMerchandiseDocument,
    options,
  );
}
export type EditMerchandiseMutationHookResult = ReturnType<typeof useEditMerchandiseMutation>;
export type EditMerchandiseMutationResult = Apollo.MutationResult<EditMerchandiseMutation>;
export type EditMerchandiseMutationOptions = Apollo.BaseMutationOptions<
  EditMerchandiseMutation,
  EditMerchandiseMutationVariables
>;
export const DeleteMerchandiseDocument = gql`
  mutation DeleteMerchandise($id: String!) {
    deleteMerchandise(id: $id) {
      message
      success
    }
  }
`;
export type DeleteMerchandiseMutationFn = Apollo.MutationFunction<
  DeleteMerchandiseMutation,
  DeleteMerchandiseMutationVariables
>;

/**
 * __useDeleteMerchandiseMutation__
 *
 * To run a mutation, you first call `useDeleteMerchandiseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMerchandiseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMerchandiseMutation, { data, loading, error }] = useDeleteMerchandiseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMerchandiseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMerchandiseMutation,
    DeleteMerchandiseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteMerchandiseMutation, DeleteMerchandiseMutationVariables>(
    DeleteMerchandiseDocument,
    options,
  );
}
export type DeleteMerchandiseMutationHookResult = ReturnType<typeof useDeleteMerchandiseMutation>;
export type DeleteMerchandiseMutationResult = Apollo.MutationResult<DeleteMerchandiseMutation>;
export type DeleteMerchandiseMutationOptions = Apollo.BaseMutationOptions<
  DeleteMerchandiseMutation,
  DeleteMerchandiseMutationVariables
>;
export const CreateMerchandiseGroupDocument = gql`
  mutation CreateMerchandiseGroup(
    $merchandiseGroupCode: String!
    $merchandiseGroupName: String!
    $description: String
  ) {
    createMerchandiseGroup(
      merchandiseGroupCode: $merchandiseGroupCode
      merchandiseGroupName: $merchandiseGroupName
      description: $description
    ) {
      message
      success
    }
  }
`;
export type CreateMerchandiseGroupMutationFn = Apollo.MutationFunction<
  CreateMerchandiseGroupMutation,
  CreateMerchandiseGroupMutationVariables
>;

/**
 * __useCreateMerchandiseGroupMutation__
 *
 * To run a mutation, you first call `useCreateMerchandiseGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMerchandiseGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMerchandiseGroupMutation, { data, loading, error }] = useCreateMerchandiseGroupMutation({
 *   variables: {
 *      merchandiseGroupCode: // value for 'merchandiseGroupCode'
 *      merchandiseGroupName: // value for 'merchandiseGroupName'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateMerchandiseGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMerchandiseGroupMutation,
    CreateMerchandiseGroupMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMerchandiseGroupMutation,
    CreateMerchandiseGroupMutationVariables
  >(CreateMerchandiseGroupDocument, options);
}
export type CreateMerchandiseGroupMutationHookResult = ReturnType<
  typeof useCreateMerchandiseGroupMutation
>;
export type CreateMerchandiseGroupMutationResult =
  Apollo.MutationResult<CreateMerchandiseGroupMutation>;
export type CreateMerchandiseGroupMutationOptions = Apollo.BaseMutationOptions<
  CreateMerchandiseGroupMutation,
  CreateMerchandiseGroupMutationVariables
>;
export const EditMerchandiseGroupDocument = gql`
  mutation EditMerchandiseGroup(
    $id: String!
    $merchandiseGroupCode: String!
    $merchandiseGroupName: String!
    $description: String
  ) {
    editMerchandiseGroup(
      id: $id
      merchandiseGroupCode: $merchandiseGroupCode
      merchandiseGroupName: $merchandiseGroupName
      description: $description
    ) {
      id
      merchandiseGroupCode
      merchandiseGroupName
      description
    }
  }
`;
export type EditMerchandiseGroupMutationFn = Apollo.MutationFunction<
  EditMerchandiseGroupMutation,
  EditMerchandiseGroupMutationVariables
>;

/**
 * __useEditMerchandiseGroupMutation__
 *
 * To run a mutation, you first call `useEditMerchandiseGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditMerchandiseGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editMerchandiseGroupMutation, { data, loading, error }] = useEditMerchandiseGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      merchandiseGroupCode: // value for 'merchandiseGroupCode'
 *      merchandiseGroupName: // value for 'merchandiseGroupName'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useEditMerchandiseGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditMerchandiseGroupMutation,
    EditMerchandiseGroupMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditMerchandiseGroupMutation, EditMerchandiseGroupMutationVariables>(
    EditMerchandiseGroupDocument,
    options,
  );
}
export type EditMerchandiseGroupMutationHookResult = ReturnType<
  typeof useEditMerchandiseGroupMutation
>;
export type EditMerchandiseGroupMutationResult =
  Apollo.MutationResult<EditMerchandiseGroupMutation>;
export type EditMerchandiseGroupMutationOptions = Apollo.BaseMutationOptions<
  EditMerchandiseGroupMutation,
  EditMerchandiseGroupMutationVariables
>;
export const DeleteMerchandiseGroupDocument = gql`
  mutation DeleteMerchandiseGroup($id: String!) {
    deleteMerchandiseGroup(id: $id) {
      message
      success
    }
  }
`;
export type DeleteMerchandiseGroupMutationFn = Apollo.MutationFunction<
  DeleteMerchandiseGroupMutation,
  DeleteMerchandiseGroupMutationVariables
>;

/**
 * __useDeleteMerchandiseGroupMutation__
 *
 * To run a mutation, you first call `useDeleteMerchandiseGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMerchandiseGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMerchandiseGroupMutation, { data, loading, error }] = useDeleteMerchandiseGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMerchandiseGroupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMerchandiseGroupMutation,
    DeleteMerchandiseGroupMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteMerchandiseGroupMutation,
    DeleteMerchandiseGroupMutationVariables
  >(DeleteMerchandiseGroupDocument, options);
}
export type DeleteMerchandiseGroupMutationHookResult = ReturnType<
  typeof useDeleteMerchandiseGroupMutation
>;
export type DeleteMerchandiseGroupMutationResult =
  Apollo.MutationResult<DeleteMerchandiseGroupMutation>;
export type DeleteMerchandiseGroupMutationOptions = Apollo.BaseMutationOptions<
  DeleteMerchandiseGroupMutation,
  DeleteMerchandiseGroupMutationVariables
>;
export const CreateOrderDocument = gql`
  mutation CreateOrder($tableId: ID!, $orderData: [OrderDataInput!]) {
    createOrder(tableId: $tableId, orderData: $orderData) {
      message
      success
    }
  }
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      tableId: // value for 'tableId'
 *      orderData: // value for 'orderData'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(
    CreateOrderDocument,
    options,
  );
}
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;
export const EditOrderDocument = gql`
  mutation EditOrder(
    $id: ID!
    $tableId: ID
    $discount: Float
    $unitDiscount: TypeUnitDiscount
    $orderData: [OrderDataInput]
  ) {
    editOrder(
      id: $id
      discount: $discount
      unitDiscount: $unitDiscount
      tableId: $tableId
      orderData: $orderData
    ) {
      id
      createdAt
      tableId
      price
      totalPrice
      discount
      priceDiscount
      unitDiscount
      orderData {
        id
        count
        price
        name
        unit
        totalPrice
      }
      count
    }
  }
`;
export type EditOrderMutationFn = Apollo.MutationFunction<
  EditOrderMutation,
  EditOrderMutationVariables
>;

/**
 * __useEditOrderMutation__
 *
 * To run a mutation, you first call `useEditOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editOrderMutation, { data, loading, error }] = useEditOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      tableId: // value for 'tableId'
 *      discount: // value for 'discount'
 *      unitDiscount: // value for 'unitDiscount'
 *      orderData: // value for 'orderData'
 *   },
 * });
 */
export function useEditOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<EditOrderMutation, EditOrderMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditOrderMutation, EditOrderMutationVariables>(
    EditOrderDocument,
    options,
  );
}
export type EditOrderMutationHookResult = ReturnType<typeof useEditOrderMutation>;
export type EditOrderMutationResult = Apollo.MutationResult<EditOrderMutation>;
export type EditOrderMutationOptions = Apollo.BaseMutationOptions<
  EditOrderMutation,
  EditOrderMutationVariables
>;
export const DeleteOrderDocument = gql`
  mutation DeleteOrder($id: ID!) {
    deleteOrder(id: $id) {
      message
      success
    }
  }
`;
export type DeleteOrderMutationFn = Apollo.MutationFunction<
  DeleteOrderMutation,
  DeleteOrderMutationVariables
>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(
    DeleteOrderDocument,
    options,
  );
}
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<
  DeleteOrderMutation,
  DeleteOrderMutationVariables
>;
export const SaveBillDocument = gql`
  mutation SaveBill(
    $createdOrderAt: Date!
    $tableId: ID!
    $paymentAt: Date!
    $price: Float!
    $totalPrice: Float!
    $discount: Float
    $priceDiscount: Int
    $unitDiscount: TypeUnitDiscount
    $orderData: [OrderDataInput!]
    $count: Float!
  ) {
    saveBill(
      createdOrderAt: $createdOrderAt
      tableId: $tableId
      paymentAt: $paymentAt
      price: $price
      totalPrice: $totalPrice
      discount: $discount
      priceDiscount: $priceDiscount
      unitDiscount: $unitDiscount
      orderData: $orderData
      count: $count
    ) {
      message
      success
    }
  }
`;
export type SaveBillMutationFn = Apollo.MutationFunction<
  SaveBillMutation,
  SaveBillMutationVariables
>;

/**
 * __useSaveBillMutation__
 *
 * To run a mutation, you first call `useSaveBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveBillMutation, { data, loading, error }] = useSaveBillMutation({
 *   variables: {
 *      createdOrderAt: // value for 'createdOrderAt'
 *      tableId: // value for 'tableId'
 *      paymentAt: // value for 'paymentAt'
 *      price: // value for 'price'
 *      totalPrice: // value for 'totalPrice'
 *      discount: // value for 'discount'
 *      priceDiscount: // value for 'priceDiscount'
 *      unitDiscount: // value for 'unitDiscount'
 *      orderData: // value for 'orderData'
 *      count: // value for 'count'
 *   },
 * });
 */
export function useSaveBillMutation(
  baseOptions?: Apollo.MutationHookOptions<SaveBillMutation, SaveBillMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SaveBillMutation, SaveBillMutationVariables>(SaveBillDocument, options);
}
export type SaveBillMutationHookResult = ReturnType<typeof useSaveBillMutation>;
export type SaveBillMutationResult = Apollo.MutationResult<SaveBillMutation>;
export type SaveBillMutationOptions = Apollo.BaseMutationOptions<
  SaveBillMutation,
  SaveBillMutationVariables
>;
export const CreateTableDocument = gql`
  mutation CreateTable(
    $tableCode: String!
    $tableName: String!
    $used: Boolean!
    $description: String
  ) {
    createTable(
      tableCode: $tableCode
      tableName: $tableName
      used: $used
      description: $description
    ) {
      message
      success
    }
  }
`;
export type CreateTableMutationFn = Apollo.MutationFunction<
  CreateTableMutation,
  CreateTableMutationVariables
>;

/**
 * __useCreateTableMutation__
 *
 * To run a mutation, you first call `useCreateTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTableMutation, { data, loading, error }] = useCreateTableMutation({
 *   variables: {
 *      tableCode: // value for 'tableCode'
 *      tableName: // value for 'tableName'
 *      used: // value for 'used'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateTableMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateTableMutation, CreateTableMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTableMutation, CreateTableMutationVariables>(
    CreateTableDocument,
    options,
  );
}
export type CreateTableMutationHookResult = ReturnType<typeof useCreateTableMutation>;
export type CreateTableMutationResult = Apollo.MutationResult<CreateTableMutation>;
export type CreateTableMutationOptions = Apollo.BaseMutationOptions<
  CreateTableMutation,
  CreateTableMutationVariables
>;
export const EditTableDocument = gql`
  mutation EditTable(
    $id: String!
    $tableCode: String!
    $tableName: String!
    $used: Boolean!
    $description: String
  ) {
    editTable(
      id: $id
      tableCode: $tableCode
      tableName: $tableName
      used: $used
      description: $description
    ) {
      id
      tableCode
      tableName
      description
      used
    }
  }
`;
export type EditTableMutationFn = Apollo.MutationFunction<
  EditTableMutation,
  EditTableMutationVariables
>;

/**
 * __useEditTableMutation__
 *
 * To run a mutation, you first call `useEditTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTableMutation, { data, loading, error }] = useEditTableMutation({
 *   variables: {
 *      id: // value for 'id'
 *      tableCode: // value for 'tableCode'
 *      tableName: // value for 'tableName'
 *      used: // value for 'used'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useEditTableMutation(
  baseOptions?: Apollo.MutationHookOptions<EditTableMutation, EditTableMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditTableMutation, EditTableMutationVariables>(
    EditTableDocument,
    options,
  );
}
export type EditTableMutationHookResult = ReturnType<typeof useEditTableMutation>;
export type EditTableMutationResult = Apollo.MutationResult<EditTableMutation>;
export type EditTableMutationOptions = Apollo.BaseMutationOptions<
  EditTableMutation,
  EditTableMutationVariables
>;
export const DeleteTableDocument = gql`
  mutation DeleteTable($id: String!) {
    deleteTable(id: $id) {
      message
      success
    }
  }
`;
export type DeleteTableMutationFn = Apollo.MutationFunction<
  DeleteTableMutation,
  DeleteTableMutationVariables
>;

/**
 * __useDeleteTableMutation__
 *
 * To run a mutation, you first call `useDeleteTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTableMutation, { data, loading, error }] = useDeleteTableMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTableMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteTableMutation, DeleteTableMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTableMutation, DeleteTableMutationVariables>(
    DeleteTableDocument,
    options,
  );
}
export type DeleteTableMutationHookResult = ReturnType<typeof useDeleteTableMutation>;
export type DeleteTableMutationResult = Apollo.MutationResult<DeleteTableMutation>;
export type DeleteTableMutationOptions = Apollo.BaseMutationOptions<
  DeleteTableMutation,
  DeleteTableMutationVariables
>;
export const CreateUnitMerchandiseDocument = gql`
  mutation CreateUnitMerchandise($unitCode: String!, $unitName: String!, $description: String) {
    createUnitMerchandise(unitCode: $unitCode, unitName: $unitName, description: $description) {
      message
      success
    }
  }
`;
export type CreateUnitMerchandiseMutationFn = Apollo.MutationFunction<
  CreateUnitMerchandiseMutation,
  CreateUnitMerchandiseMutationVariables
>;

/**
 * __useCreateUnitMerchandiseMutation__
 *
 * To run a mutation, you first call `useCreateUnitMerchandiseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUnitMerchandiseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUnitMerchandiseMutation, { data, loading, error }] = useCreateUnitMerchandiseMutation({
 *   variables: {
 *      unitCode: // value for 'unitCode'
 *      unitName: // value for 'unitName'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateUnitMerchandiseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUnitMerchandiseMutation,
    CreateUnitMerchandiseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUnitMerchandiseMutation, CreateUnitMerchandiseMutationVariables>(
    CreateUnitMerchandiseDocument,
    options,
  );
}
export type CreateUnitMerchandiseMutationHookResult = ReturnType<
  typeof useCreateUnitMerchandiseMutation
>;
export type CreateUnitMerchandiseMutationResult =
  Apollo.MutationResult<CreateUnitMerchandiseMutation>;
export type CreateUnitMerchandiseMutationOptions = Apollo.BaseMutationOptions<
  CreateUnitMerchandiseMutation,
  CreateUnitMerchandiseMutationVariables
>;
export const EditUnitMerchandiseDocument = gql`
  mutation EditUnitMerchandise(
    $id: String!
    $unitCode: String!
    $unitName: String!
    $description: String
  ) {
    editUnitMerchandise(
      id: $id
      unitCode: $unitCode
      unitName: $unitName
      description: $description
    ) {
      id
      unitCode
      unitName
      description
    }
  }
`;
export type EditUnitMerchandiseMutationFn = Apollo.MutationFunction<
  EditUnitMerchandiseMutation,
  EditUnitMerchandiseMutationVariables
>;

/**
 * __useEditUnitMerchandiseMutation__
 *
 * To run a mutation, you first call `useEditUnitMerchandiseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUnitMerchandiseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUnitMerchandiseMutation, { data, loading, error }] = useEditUnitMerchandiseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      unitCode: // value for 'unitCode'
 *      unitName: // value for 'unitName'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useEditUnitMerchandiseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditUnitMerchandiseMutation,
    EditUnitMerchandiseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditUnitMerchandiseMutation, EditUnitMerchandiseMutationVariables>(
    EditUnitMerchandiseDocument,
    options,
  );
}
export type EditUnitMerchandiseMutationHookResult = ReturnType<
  typeof useEditUnitMerchandiseMutation
>;
export type EditUnitMerchandiseMutationResult = Apollo.MutationResult<EditUnitMerchandiseMutation>;
export type EditUnitMerchandiseMutationOptions = Apollo.BaseMutationOptions<
  EditUnitMerchandiseMutation,
  EditUnitMerchandiseMutationVariables
>;
export const DeleteUnitMerchandiseDocument = gql`
  mutation DeleteUnitMerchandise($id: String!) {
    deleteUnitMerchandise(id: $id) {
      message
      success
    }
  }
`;
export type DeleteUnitMerchandiseMutationFn = Apollo.MutationFunction<
  DeleteUnitMerchandiseMutation,
  DeleteUnitMerchandiseMutationVariables
>;

/**
 * __useDeleteUnitMerchandiseMutation__
 *
 * To run a mutation, you first call `useDeleteUnitMerchandiseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUnitMerchandiseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUnitMerchandiseMutation, { data, loading, error }] = useDeleteUnitMerchandiseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUnitMerchandiseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUnitMerchandiseMutation,
    DeleteUnitMerchandiseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteUnitMerchandiseMutation, DeleteUnitMerchandiseMutationVariables>(
    DeleteUnitMerchandiseDocument,
    options,
  );
}
export type DeleteUnitMerchandiseMutationHookResult = ReturnType<
  typeof useDeleteUnitMerchandiseMutation
>;
export type DeleteUnitMerchandiseMutationResult =
  Apollo.MutationResult<DeleteUnitMerchandiseMutation>;
export type DeleteUnitMerchandiseMutationOptions = Apollo.BaseMutationOptions<
  DeleteUnitMerchandiseMutation,
  DeleteUnitMerchandiseMutationVariables
>;
export const GetBillsDocument = gql`
  query GetBills {
    getBills {
      id
      createdOrderAt
      tableId
      paymentAt
      price
      totalPrice
      discount
      priceDiscount
      unitDiscount
      orderData {
        id
        count
        price
        name
        unit
        totalPrice
      }
      count
    }
  }
`;

/**
 * __useGetBillsQuery__
 *
 * To run a query within a React component, call `useGetBillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBillsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBillsQuery, GetBillsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBillsQuery, GetBillsQueryVariables>(GetBillsDocument, options);
}
export function useGetBillsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetBillsQuery, GetBillsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBillsQuery, GetBillsQueryVariables>(GetBillsDocument, options);
}
export type GetBillsQueryHookResult = ReturnType<typeof useGetBillsQuery>;
export type GetBillsLazyQueryHookResult = ReturnType<typeof useGetBillsLazyQuery>;
export type GetBillsQueryResult = Apollo.QueryResult<GetBillsQuery, GetBillsQueryVariables>;
export const GetBillDocument = gql`
  query GetBill($id: ID!) {
    getBill(id: $id) {
      id
      createdOrderAt
      tableId
      paymentAt
      price
      totalPrice
      discount
      priceDiscount
      unitDiscount
      orderData {
        id
        count
        price
        name
        unit
        totalPrice
      }
      count
    }
  }
`;

/**
 * __useGetBillQuery__
 *
 * To run a query within a React component, call `useGetBillQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBillQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBillQuery(
  baseOptions: Apollo.QueryHookOptions<GetBillQuery, GetBillQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBillQuery, GetBillQueryVariables>(GetBillDocument, options);
}
export function useGetBillLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetBillQuery, GetBillQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBillQuery, GetBillQueryVariables>(GetBillDocument, options);
}
export type GetBillQueryHookResult = ReturnType<typeof useGetBillQuery>;
export type GetBillLazyQueryHookResult = ReturnType<typeof useGetBillLazyQuery>;
export type GetBillQueryResult = Apollo.QueryResult<GetBillQuery, GetBillQueryVariables>;
export const GetMerchandiseDocument = gql`
  query GetMerchandise($filterType: TypeMerchandise) {
    getMerchandise(filterType: $filterType) {
      id
      merchandiseCode
      merchandiseName
      description
      unit
      group
      type
      price
    }
  }
`;

/**
 * __useGetMerchandiseQuery__
 *
 * To run a query within a React component, call `useGetMerchandiseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMerchandiseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMerchandiseQuery({
 *   variables: {
 *      filterType: // value for 'filterType'
 *   },
 * });
 */
export function useGetMerchandiseQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMerchandiseQuery, GetMerchandiseQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMerchandiseQuery, GetMerchandiseQueryVariables>(
    GetMerchandiseDocument,
    options,
  );
}
export function useGetMerchandiseLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMerchandiseQuery, GetMerchandiseQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMerchandiseQuery, GetMerchandiseQueryVariables>(
    GetMerchandiseDocument,
    options,
  );
}
export type GetMerchandiseQueryHookResult = ReturnType<typeof useGetMerchandiseQuery>;
export type GetMerchandiseLazyQueryHookResult = ReturnType<typeof useGetMerchandiseLazyQuery>;
export type GetMerchandiseQueryResult = Apollo.QueryResult<
  GetMerchandiseQuery,
  GetMerchandiseQueryVariables
>;
export const GetMerchandiseGroupDocument = gql`
  query GetMerchandiseGroup {
    getMerchandiseGroup {
      id
      merchandiseGroupCode
      merchandiseGroupName
      description
    }
  }
`;

/**
 * __useGetMerchandiseGroupQuery__
 *
 * To run a query within a React component, call `useGetMerchandiseGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMerchandiseGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMerchandiseGroupQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMerchandiseGroupQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMerchandiseGroupQuery,
    GetMerchandiseGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMerchandiseGroupQuery, GetMerchandiseGroupQueryVariables>(
    GetMerchandiseGroupDocument,
    options,
  );
}
export function useGetMerchandiseGroupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMerchandiseGroupQuery,
    GetMerchandiseGroupQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMerchandiseGroupQuery, GetMerchandiseGroupQueryVariables>(
    GetMerchandiseGroupDocument,
    options,
  );
}
export type GetMerchandiseGroupQueryHookResult = ReturnType<typeof useGetMerchandiseGroupQuery>;
export type GetMerchandiseGroupLazyQueryHookResult = ReturnType<
  typeof useGetMerchandiseGroupLazyQuery
>;
export type GetMerchandiseGroupQueryResult = Apollo.QueryResult<
  GetMerchandiseGroupQuery,
  GetMerchandiseGroupQueryVariables
>;
export const GetOrdersDocument = gql`
  query GetOrders {
    getOrders {
      id
      createdAt
      tableId
      price
      totalPrice
      discount
      priceDiscount
      unitDiscount
      orderData {
        id
        count
        price
        name
        unit
        totalPrice
      }
      count
    }
  }
`;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
}
export function useGetOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
}
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
export const GetOrderDocument = gql`
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      createdAt
      tableId
      price
      totalPrice
      discount
      priceDiscount
      unitDiscount
      orderData {
        id
        count
        price
        name
        unit
        totalPrice
      }
      count
    }
  }
`;

/**
 * __useGetOrderQuery__
 *
 * To run a query within a React component, call `useGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderQuery(
  baseOptions: Apollo.QueryHookOptions<GetOrderQuery, GetOrderQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, options);
}
export function useGetOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetOrderQuery, GetOrderQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, options);
}
export type GetOrderQueryHookResult = ReturnType<typeof useGetOrderQuery>;
export type GetOrderLazyQueryHookResult = ReturnType<typeof useGetOrderLazyQuery>;
export type GetOrderQueryResult = Apollo.QueryResult<GetOrderQuery, GetOrderQueryVariables>;
export const GetRevenueDocument = gql`
  query GetRevenue($startDate: Date, $endDate: Date, $limit: Int!, $offset: Int!) {
    getRevenue(limit: $limit, offset: $offset, startDate: $startDate, endDate: $endDate) {
      id
      createdOrderAt
      tableId
      paymentAt
      price
      totalPrice
      discount
      priceDiscount
      unitDiscount
      orderData {
        id
        count
        price
        name
        unit
        totalPrice
      }
      count
    }
  }
`;

/**
 * __useGetRevenueQuery__
 *
 * To run a query within a React component, call `useGetRevenueQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRevenueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRevenueQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetRevenueQuery(
  baseOptions: Apollo.QueryHookOptions<GetRevenueQuery, GetRevenueQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRevenueQuery, GetRevenueQueryVariables>(GetRevenueDocument, options);
}
export function useGetRevenueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRevenueQuery, GetRevenueQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRevenueQuery, GetRevenueQueryVariables>(
    GetRevenueDocument,
    options,
  );
}
export type GetRevenueQueryHookResult = ReturnType<typeof useGetRevenueQuery>;
export type GetRevenueLazyQueryHookResult = ReturnType<typeof useGetRevenueLazyQuery>;
export type GetRevenueQueryResult = Apollo.QueryResult<GetRevenueQuery, GetRevenueQueryVariables>;
export const GetTablesDocument = gql`
  query GetTables {
    getTables {
      id
      tableCode
      tableName
      description
      used
    }
  }
`;

/**
 * __useGetTablesQuery__
 *
 * To run a query within a React component, call `useGetTablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTablesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTablesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTablesQuery, GetTablesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTablesQuery, GetTablesQueryVariables>(GetTablesDocument, options);
}
export function useGetTablesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTablesQuery, GetTablesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTablesQuery, GetTablesQueryVariables>(GetTablesDocument, options);
}
export type GetTablesQueryHookResult = ReturnType<typeof useGetTablesQuery>;
export type GetTablesLazyQueryHookResult = ReturnType<typeof useGetTablesLazyQuery>;
export type GetTablesQueryResult = Apollo.QueryResult<GetTablesQuery, GetTablesQueryVariables>;
export const GetTableDocument = gql`
  query GetTable($id: ID!) {
    getTable(id: $id) {
      id
      tableCode
      tableName
      description
      used
    }
  }
`;

/**
 * __useGetTableQuery__
 *
 * To run a query within a React component, call `useGetTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTableQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTableQuery(
  baseOptions: Apollo.QueryHookOptions<GetTableQuery, GetTableQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTableQuery, GetTableQueryVariables>(GetTableDocument, options);
}
export function useGetTableLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTableQuery, GetTableQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTableQuery, GetTableQueryVariables>(GetTableDocument, options);
}
export type GetTableQueryHookResult = ReturnType<typeof useGetTableQuery>;
export type GetTableLazyQueryHookResult = ReturnType<typeof useGetTableLazyQuery>;
export type GetTableQueryResult = Apollo.QueryResult<GetTableQuery, GetTableQueryVariables>;
export const GetUnitMerchandiseDocument = gql`
  query GetUnitMerchandise {
    getUnitMerchandise {
      id
      unitCode
      unitName
      description
    }
  }
`;

/**
 * __useGetUnitMerchandiseQuery__
 *
 * To run a query within a React component, call `useGetUnitMerchandiseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUnitMerchandiseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUnitMerchandiseQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUnitMerchandiseQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUnitMerchandiseQuery, GetUnitMerchandiseQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUnitMerchandiseQuery, GetUnitMerchandiseQueryVariables>(
    GetUnitMerchandiseDocument,
    options,
  );
}
export function useGetUnitMerchandiseLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUnitMerchandiseQuery,
    GetUnitMerchandiseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUnitMerchandiseQuery, GetUnitMerchandiseQueryVariables>(
    GetUnitMerchandiseDocument,
    options,
  );
}
export type GetUnitMerchandiseQueryHookResult = ReturnType<typeof useGetUnitMerchandiseQuery>;
export type GetUnitMerchandiseLazyQueryHookResult = ReturnType<
  typeof useGetUnitMerchandiseLazyQuery
>;
export type GetUnitMerchandiseQueryResult = Apollo.QueryResult<
  GetUnitMerchandiseQuery,
  GetUnitMerchandiseQueryVariables
>;
export const GetUsersDocument = gql`
  query GetUsers {
    getUsers {
      id
      stallCode
      type
      username
      adminId
      email
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
