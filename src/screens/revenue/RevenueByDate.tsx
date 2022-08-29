import React, { useEffect, useState } from 'react';
import { AppLoading, Container, Div, Divider, Text, Touch } from '@components';
import { Bill, Maybe, useGetRevenueLazyQuery, useGetTablesQuery } from '@graphql';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigator';
import { FlatList } from 'react-native';
import { colors, sizes } from '@theme';
import moment from 'moment';
import { formatMoney, navigate } from '@utils';
import { BOTTOM_SPACE, SCREEN_NAME } from '@const';

export const RevenueByDate: React.FC<
  NativeStackScreenProps<RootStackParamList, 'REVENUE_BY_DATE'>
> = ({ route }) => {
  const { params } = route;
  const [getRevenue, { data, loading }] = useGetRevenueLazyQuery();
  const { data: dataTables } = useGetTablesQuery();
  const limit = 100;
  const [offset, setOffset] = useState(1);
  const [listData, setListData] = useState<Maybe<Bill>[]>([]);
  console.log('🚀 ~ file: RevenueByDate.tsx ~ line 21 ~ listData', listData);
  const variables = {
    limit,
    offset,
    // startDate: params.startDate,
    // endDate: params.endDate,
  };
  console.log('🚀 ~ file: RevenueByDate.tsx ~ line 23 ~ variables', variables);

  useEffect(() => {
    getRevenue({
      variables: {
        limit,
        offset,
        startDate: params.startDate,
        endDate: params.endDate,
      },
    });
  }, []);

  useEffect(() => {
    if (data?.getRevenue?.length) {
      setListData((pre) => [...pre, ...data.getRevenue]);
    }
  }, [data?.getRevenue]);

  const onEndReached = () => {
    const _offset = offset + 1;
    setOffset(_offset);
    getRevenue({
      variables: {
        limit,
        offset: _offset,
        startDate: params.startDate,
        endDate: params.endDate,
      },
    });
  };

  const renderItem = (item: Maybe<Bill>, index: number) => {
    const tableName =
      dataTables?.getTables?.find((value) => value?.id === item?.tableId)?.tableName ?? '';
    return (
      <Div
        ml={sizes.base * 2}
        mr={sizes.base * 2}
        borderWidth={1}
        mb={sizes.base}
        white
        card
        mt={index === 0 ? sizes.base * 2 : 0}
        borderColor={colors.borderGray}>
        <Div row pt={sizes.base} pb={sizes.base} center pl={sizes.base * 2} pr={sizes.base * 2}>
          <Div flex={1}>
            <Text semibold>Số hoá đơn</Text>
          </Div>
          <Text>{item?.id ?? ''}</Text>
        </Div>
        <Divider />
        <Div row pt={sizes.base} pb={sizes.base} center pl={sizes.base * 2} pr={sizes.base * 2}>
          <Div flex={1}>
            <Text semibold>Ngày</Text>
          </Div>
          <Text>{moment(item?.paymentAt ?? '').format(' HH:mm:ss - DD/MM/YYYY')}</Text>
        </Div>
        <Divider />
        <Div row pt={sizes.base} pb={sizes.base} center pl={sizes.base * 2} pr={sizes.base * 2}>
          <Div flex={1}>
            <Text semibold>Bàn</Text>
          </Div>
          <Text>{tableName}</Text>
        </Div>
        <Divider />
        <Div row pt={sizes.base} pb={sizes.base} center pl={sizes.base * 2} pr={sizes.base * 2}>
          <Div flex={1}>
            <Text semibold>Giảm giá</Text>
          </Div>
          <Text>{formatMoney(item?.priceDiscount ?? 0)}</Text>
        </Div>
        <Divider />
        <Div row pt={sizes.base} pb={sizes.base} center pl={sizes.base * 2} pr={sizes.base * 2}>
          <Div flex={1}>
            <Text semibold>Tổng tiền</Text>
          </Div>
          <Text>{formatMoney(item?.totalPrice ?? 0)}</Text>
        </Div>
        <Divider />
        <Div height={sizes.base * 5} pr={sizes.base * 2}>
          <Touch
            onPress={() =>
              navigate(SCREEN_NAME.REVENUE_BY_DATE_DETAIL, {
                revenueDetail: item,
              })
            }>
            <Div flex={1} middle>
              <Text right blue semibold>
                Xem chi tiết
              </Text>
            </Div>
          </Touch>
        </Div>
      </Div>
    );
  };

  const ListFooterComponent = () => {
    const reduce = listData.length
      ? //@ts-ignore
        listData?.reduce((pre, current) => {
          return {
            totalPrice: (pre?.totalPrice || 0) + (current?.totalPrice || 0),
            priceDiscount: (pre?.priceDiscount || 0) + (current?.priceDiscount || 0),
          };
        })
      : null;
    return (
      <Div pl={sizes.base * 2} pr={sizes.base * 2} white pb={BOTTOM_SPACE} card shadow>
        <Div row pt={sizes.base} pb={sizes.base} center>
          <Div flex={1}>
            <Text semibold darkestBlue header>
              Giảm giá
            </Text>
          </Div>
          <Text darkestBlue header>
            {formatMoney(reduce?.priceDiscount ?? 0)}
          </Text>
        </Div>
        <Divider />
        <Div row pt={sizes.base} pb={sizes.base} center>
          <Div flex={1}>
            <Text semibold darkestBlue header>
              Tổng tiền
            </Text>
          </Div>
          <Text darkestBlue header>
            {formatMoney(reduce?.totalPrice ?? 0)}
          </Text>
        </Div>
      </Div>
    );
  };

  return (
    <Container isBack isHeader title="Doanh thu theo ngày" lightGray pb={0}>
      <Div flex={1}>
        <FlatList
          data={listData}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item) => item?.id ?? ''}
          onEndReached={onEndReached}
        />
      </Div>
      <ListFooterComponent />
      {loading && <AppLoading />}
    </Container>
  );
};
