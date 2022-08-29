import { Container, Div, Divider, Text, Touch, AppLoading } from '@components';
import { BOTTOM_SPACE, SCREEN_NAME } from '@const';
import {
  CreateOrderMutation,
  Exact,
  InputMaybe,
  Maybe,
  OderData,
  OrderDataInput,
  Scalars,
  useCreateOrderMutation,
  useDeleteOrderMutation,
  useEditOrderMutation,
  useGetOrderLazyQuery,
  useGetOrdersLazyQuery,
  useGetTableLazyQuery,
  useSaveBillMutation,
} from '@graphql';
import { RootStackParamList } from '@navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors, sizes } from '@theme';
import { formatMoney, goBack, navigate } from '@utils';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, TouchableOpacity } from 'react-native';
import { OrderSelectedType } from './AddOrder';
import { ModalFunction, ModalDiscount, ModalNote, ModalEditItem } from './components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

export const OrderDetail: React.FC<NativeStackScreenProps<RootStackParamList, 'ORDER_DETAIL'>> = ({
  route,
}) => {
  const params = route?.params;
  const _dataOrders = params?.dataOrders ?? [];
  const [idOrder, setIdOrder] = useState(params?.idOrder);
  const [getOrder, { data, loading, refetch }] = useGetOrderLazyQuery();
  const [getOrders, { data: dataOrders }] = useGetOrdersLazyQuery();
  const [getTable, { data: dataTable }] = useGetTableLazyQuery();
  const orderDetail = data?.getOrder ?? null;
  const orderData = orderDetail?.orderData ?? [];
  const [deleteOrder] = useDeleteOrderMutation({
    onCompleted(_data) {
      if (_data.deleteOrder.success) {
        params?.refetch && params.refetch();
        goBack();
      }
    },
    onError(e) {
      Alert.alert('error', e.message);
    },
  });
  const [editOrder] = useEditOrderMutation({
    onCompleted() {
      refetch && refetch();
    },
    onError(e) {
      Alert.alert('error', e.message);
    },
  });
  const [saveBill] = useSaveBillMutation({
    onCompleted(_data) {
      if (_data.saveBill.success) {
        deleteOrder({
          variables: {
            id: orderDetail?.id ?? '',
          },
        });
      }
    },
    onError(e) {
      Alert.alert('error', e.message);
    },
  });
  useEffect(() => {
    if (idOrder) {
      getOrder({ variables: { id: idOrder } });
    }
  }, [idOrder]);

  useEffect(() => {
    if (!params?.idOrder) {
      setIdOrder(dataOrders?.getOrders[dataOrders.getOrders.length - 1]?.id);
    }
  }, [dataOrders?.getOrders]);
  useEffect(() => {
    if (orderDetail && orderDetail?.discount) {
      setDiscount(orderDetail.discount ?? 0);
      setUnitDiscount(orderDetail.unitDiscount ?? 'percent');
    }
  }, [orderDetail]);

  const [createOrder] = useCreateOrderMutation({
    onCompleted(_data) {
      onCompletedCreateOrder(_data);
    },
    onError(e) {
      Alert.alert('error', e.message);
    },
  });

  const tableName = dataTable?.getTable?.tableName
    ? dataTable.getTable.tableName
    : params?.table?.tableName ?? '';

  const [discount, setDiscount] = useState(0);
  const [unitDiscount, setUnitDiscount] = useState<Scalars['TypeUnitDiscount']>('percent');
  const [isVisibleModalFunc, setIsVisibleModalFunc] = useState(false);
  const [isVisibleModalDiscount, setIsVisibleModalDiscount] = useState(false);
  const [isVisibleNote, setIsVisibleNote] = useState(false);
  const [isVisibleEditItem, setIsVisibleEditItem] = useState(false);
  const [itemSelected, setItemSelected] = useState<Maybe<OderData>>(null);

  const onCompletedCreateOrder = (_data: CreateOrderMutation) => {
    if (_data.createOrder.success) {
      params?.refetch && params.refetch();
      if (!params?.idOrder) {
        getOrders();
      }
    }
  };

  const checkDuplicate = (firstArr: OrderDataInput[], secondArr: OrderDataInput[]) => {
    return firstArr.some((item) => {
      const _index = secondArr.findIndex((b) => b.id === item.id);
      if (_index === -1) {
        return false;
      } else {
        return true;
      }
    });
  };

  const mergeOrderData = (firstArr: OrderDataInput[], secondArr: OrderDataInput[]) => {
    const isDuplicate = checkDuplicate(firstArr, secondArr);

    if (isDuplicate) {
      const arrDuplicate = firstArr
        .map((value) => {
          const findIndex = secondArr.findIndex((_value) => value.id === _value.id);
          if (findIndex === -1) {
            return;
          }
          const count = (secondArr[findIndex].count || 0) + (value.count || 0);
          return {
            ...value,
            count,
          };
        })
        .filter((element) => {
          return element !== undefined;
        });
      const cloneFirstArr = firstArr.filter((item) => {
        const findIndexDup = arrDuplicate.findIndex((value) => value?.id === item.id);
        return item.id !== arrDuplicate[findIndexDup]?.id;
      });

      const cloneSecondArr = secondArr.filter((item) => {
        const findIndexDup = arrDuplicate.findIndex((value) => value?.id === item.id);
        return item.id !== arrDuplicate[findIndexDup]?.id;
      });

      return [...arrDuplicate, ...cloneFirstArr, ...cloneSecondArr];
    } else {
      return [...firstArr, ...secondArr];
    }
  };

  const onOkFunction = (tableSelected: string) => {
    if (idOrder) {
      const indexTableByDataOrder = _dataOrders.findIndex((value) => {
        return value?.tableId === tableSelected;
      });
      const _orderData: OrderDataInput[] =
        _dataOrders[indexTableByDataOrder].orderData?.map((value) => {
          return {
            id: value?.id ?? '',
            count: value?.count,
          };
        }) ?? [];

      const _mergeOrderData = mergeOrderData(
        _orderData,
        orderData.map((value) => {
          return {
            id: value?.id ?? '',
            count: value?.count,
            price: value?.price,
            name: value?.name,
            unit: value?.unit,
            totalPrice: value?.totalPrice,
          };
        }),
      );

      if (indexTableByDataOrder === -1) {
        editOrder({
          variables: {
            id: idOrder,
            tableId: tableSelected,
          },
        });
      } else {
        editOrder({
          variables: {
            id: idOrder,
            tableId: tableSelected,
            //@ts-ignore
            orderData: _mergeOrderData,
          },
        });
      }

      getTable({ variables: { id: tableSelected } });
    }
  };

  const onOkDiscount = (_data: { unit: Scalars['TypeUnitDiscount']; discount: number }) => {
    if (idOrder) {
      editOrder({
        variables: {
          id: idOrder,
          discount: _data.discount,
          unitDiscount: _data.unit,
        },
      });
    }
  };

  const callBackAddOrder = (_data: OrderSelectedType) => {
    const orderDataInput: OrderDataInput[] = _data.map((value) => {
      return {
        id: value.merchandise?.id ?? '',
        count: value.count,
      };
    });
    if (!idOrder) {
      const variables: Exact<{
        tableId: string;
        orderData?: InputMaybe<OrderDataInput[]> | undefined;
      }> = {
        tableId: params?.table?.id ?? '',
        orderData: orderDataInput,
      };
      createOrder({ variables });
    } else {
      const _mergeOrderData = mergeOrderData(
        orderDataInput,
        orderData.map((value) => {
          return {
            id: value?.id ?? '',
            count: value?.count,
            price: value?.price,
            name: value?.name,
            unit: value?.unit,
            totalPrice: value?.totalPrice,
          };
        }),
      );
      editOrder({
        variables: {
          id: idOrder,
          //@ts-ignore
          orderData: _mergeOrderData,
        },
      });
    }
  };

  const onCloseModal = () => {
    setIsVisibleModalFunc(false);
    setIsVisibleModalDiscount(false);
    setIsVisibleNote(false);
    setIsVisibleEditItem(false);
  };
  const onPressNote = () => {
    setIsVisibleNote(true);
  };

  const onPressRemove = () => {
    if (idOrder) {
      const _orderData = orderData.map((value) => {
        return {
          id: value?.id ?? '',
          count: value?.count,
          price: value?.price,
          name: value?.name,
          unit: value?.unit,
          totalPrice: value?.totalPrice,
        };
      });
      editOrder({
        variables: {
          id: idOrder,
          orderData: _orderData.filter((element) => element.id !== itemSelected?.id),
        },
      });
    }
  };
  const onPressOkNote = (textNote: string) => {
    // setItemSelected({
    //   ...itemSelected,
    //   note: textNote,
    // });
    setIsVisibleNote(false);
  };
  const onnPressEditItem = () => {
    setIsVisibleEditItem(true);
  };
  const onPressOkEditItem = (value: Maybe<OderData>) => {
    const _orderData = orderData.map((item) => {
      if (item?.id === value?.id) {
        return {
          id: value?.id ?? '',
          count: value?.count,
          price: value?.price,
          name: value?.name,
          unit: value?.unit,
          totalPrice: value?.totalPrice,
        };
      }
      return {
        id: item?.id ?? '',
        count: item?.count,
        price: item?.price,
        name: item?.name,
        unit: item?.unit,
        totalPrice: item?.totalPrice,
      };
    });
    if (idOrder) {
      editOrder({
        variables: {
          id: idOrder,
          orderData: _orderData,
        },
      });
    }
  };

  const onSaveBill = () => {
    saveBill({
      variables: {
        count: orderDetail?.count ?? 0,
        createdOrderAt: orderDetail?.createdAt,
        paymentAt: new Date(),
        price: orderDetail?.price ?? 0,
        tableId: orderDetail?.tableId ?? '',
        totalPrice: orderDetail?.totalPrice ?? 0,
        discount: orderDetail?.discount,
        orderData: orderData.map((value) => {
          return {
            id: value?.id ?? '',
            count: value?.count,
            price: value?.price,
            name: value?.name,
            unit: value?.unit,
            totalPrice: value?.totalPrice,
          };
        }),
        priceDiscount: orderDetail?.priceDiscount,
        unitDiscount: orderDetail?.unitDiscount,
      },
    });
  };

  const renderItem = (item: Maybe<OderData>) => {
    return (
      <>
        <Div padding={sizes.base}>
          <Touch onPress={() => setItemSelected(item)} activeOpacity={0.7}>
            <Div row>
              <Div flex={1}>
                <Text header medium gray>
                  {item?.name}
                </Text>
              </Div>
              {itemSelected?.id === item?.id && (
                <Div row>
                  <Div mr={sizes.base} middle>
                    <TouchableOpacity onPress={onnPressEditItem}>
                      <IconCommunity
                        name="store-edit-outline"
                        size={sizes.base * 3}
                        color={colors.blue}
                      />
                    </TouchableOpacity>
                  </Div>
                  <Div mr={sizes.base} middle>
                    <TouchableOpacity onPress={onPressNote}>
                      <IconSimpleLine name="note" size={sizes.base * 2.2} color={colors.green} />
                    </TouchableOpacity>
                  </Div>
                  <TouchableOpacity onPress={onPressRemove}>
                    <Icon name="close" size={sizes.base * 3} color={colors.pink} />
                  </TouchableOpacity>
                </Div>
              )}
            </Div>
            <Div row mt={sizes.base / 2}>
              <Div flex={0.5}>
                <Text blue>
                  {`${item?.count} `}
                  <Text blue>{item?.unit}</Text>
                </Text>
              </Div>
              <Div flex={1}>
                <Text blue>{formatMoney(item?.price ?? 0)}</Text>
              </Div>
              <Div>
                <Text pink>{formatMoney(item?.totalPrice ?? 0)}</Text>
              </Div>
            </Div>
          </Touch>
        </Div>
        <Divider />
      </>
    );
  };
  return (
    <Container isBack isHeader title={tableName} pb={0} lightGray>
      <Div flex={1}>
        <Divider color={colors.white} />
        <Div row padding={sizes.base} blue>
          <Div flex={1}>
            <Text white semibold header>
              {moment(orderDetail?.createdAt).format('HH:mm DD/MM/YYYY')}
            </Text>
            <Div row mt={sizes.base} center>
              <Div>
                <Text white>{'Giảm: '}</Text>
              </Div>
              <Div white height={sizes.base * 3} flex={0.82} radius={sizes.radius / 2}>
                <Touch onPress={() => setIsVisibleModalDiscount(true)}>
                  <Div mt={sizes.base / 2} pl={sizes.base / 2} pr={sizes.base}>
                    <Text medium gray>{`${
                      unitDiscount === 'percent' ? discount : formatMoney(discount)
                    } ${unitDiscount === 'percent' ? '%' : 'VND'}`}</Text>
                  </Div>
                </Touch>
              </Div>
            </Div>
          </Div>
          <Div flex={1} right alignRight>
            <Text white medium>
              {'Phải trả: '}
              <Text bold white header>
                {`${formatMoney(orderDetail?.totalPrice ?? 0)} VND`}
              </Text>
            </Text>
          </Div>
        </Div>
        <FlatList
          data={orderData}
          keyExtractor={(item) => item?.id ?? ''}
          renderItem={({ item }) => renderItem(item)}
          bounces={false}
        />
      </Div>
      <Div flex={0.11} radius={sizes.radius * 3} shadow overflow="hidden" white>
        <Div row padding={[sizes.base * 2, sizes.base, BOTTOM_SPACE, sizes.base]} flex={1}>
          <Div flex={1} gold radius={sizes.radius} mr={sizes.base / 2}>
            <Touch onPress={() => setIsVisibleModalFunc(true)}>
              <Div center middle flex={1}>
                <Text white semibold>
                  Chức năng
                </Text>
              </Div>
            </Touch>
          </Div>
          <Div flex={1} green radius={sizes.radius} ml={sizes.base / 2}>
            <Touch onPress={() => navigate(SCREEN_NAME.ADD_ORDER, { callback: callBackAddOrder })}>
              <Div center middle flex={1}>
                <Text white semibold>
                  Gọi món
                </Text>
              </Div>
            </Touch>
          </Div>
        </Div>
      </Div>
      <ModalFunction
        isVisible={isVisibleModalFunc}
        onClose={onCloseModal}
        dataOrder={orderDetail}
        onOk={onOkFunction}
        onSaveBill={onSaveBill}
      />
      <ModalDiscount
        isVisible={isVisibleModalDiscount}
        onClose={onCloseModal}
        onOk={onOkDiscount}
      />
      <ModalNote
        isVisible={isVisibleNote}
        onClose={onCloseModal}
        onPressOk={onPressOkNote}
        // textNote={textNote}
      />
      <ModalEditItem
        isVisible={isVisibleEditItem}
        onClose={onCloseModal}
        onOk={onPressOkEditItem}
        itemSelected={itemSelected}
      />
      {loading && <AppLoading />}
    </Container>
  );
};
