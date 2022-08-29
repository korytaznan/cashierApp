import { AppLoading, Container, Div, Divider, Text, Touch } from '@components';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Table, useGetOrdersQuery, useGetTablesQuery } from '@graphql';
import { navigate, formatMoney } from '@utils';
import { SCREEN_NAME } from '@const';
import { colors, sizes } from '@theme';
import moment from 'moment';
import { useIsFocused } from '@react-navigation/native';

export const Home: React.FC = () => {
  const isFocused = useIsFocused();
  const { data, refetch: refetchTables, loading: loadingTables } = useGetTablesQuery();
  const { data: dataOrder, refetch, loading } = useGetOrdersQuery();
  const getOrders = dataOrder?.getOrders ?? [];

  useEffect(() => {
    if (isFocused) {
      refetchTables();
      refetch();
    }
  }, [isFocused]);

  const onPressTable = (table: Table | null, idOrder?: string) => {
    navigate(SCREEN_NAME.ORDER_DETAIL, {
      refetch,
      idOrder,
      table,
      dataOrders: dataOrder?.getOrders,
    });
  };

  const renderItem = (item: Table | null, index: number) => {
    const isOddNumber = index % 2 === 0;
    const isEndItem = (data?.getTables?.length || 0) - 1 === index;
    const filterByTableId = getOrders?.filter((value) => {
      return value?.tableId === item?.id;
    })[0];
    const createdAt = filterByTableId?.createdAt
      ? moment(filterByTableId?.createdAt).format('HH:mm DD/MM/YYYY')
      : '';
    const price =
      filterByTableId?.totalPrice !== undefined
        ? formatMoney(filterByTableId?.totalPrice ?? 0)
        : '';
    return (
      <Div
        flex={1}
        height={sizes.base * 14}
        borderWidth={1}
        borderColor={colors.borderGray}
        radius={sizes.radius}
        overflow="hidden"
        mb={sizes.base * 2}
        mr={isEndItem ? 0 : isOddNumber ? sizes.base * 2 : 0}>
        <Touch activeOpacity={0.7} onPress={() => onPressTable(item, filterByTableId?.id)}>
          <Div padding={sizes.base} right lightGray>
            <Text right>{createdAt}</Text>
          </Div>
          <Divider />
          <Div flex={1} padding={[sizes.base, 0, sizes.base, sizes.base]}>
            <Text title bold blue>
              {item?.tableName.toUpperCase()}
            </Text>
            <Div flex={1} bottom>
              <Text pink semibold>
                {price}
              </Text>
            </Div>
          </Div>
        </Touch>
      </Div>
    );
  };
  return (
    <Container title="Bán hàng" isHeader isDrawer pb={0}>
      <Div flex={1} padding={sizes.base * 2}>
        <FlatList
          data={data?.getTables ?? []}
          numColumns={2}
          keyExtractor={(item) => item?.id ?? ''}
          renderItem={({ item, index }) => renderItem(item, index)}
          refreshing={loadingTables}
          onRefresh={() => refetchTables()}
        />
      </Div>
      {loading && <AppLoading />}
    </Container>
  );
};
