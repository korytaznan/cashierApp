import React, { useEffect } from 'react';
import { AppLoading, Container, Div, Divider, Text, Touch } from '@components';
import { Maybe, OderData } from '@graphql';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigator';
import { FlatList } from 'react-native';
import { colors, sizes } from '@theme';
import { formatMoney } from '@utils';

export const RevenueByDateDetail: React.FC<
  NativeStackScreenProps<RootStackParamList, 'REVENUE_BY_DATE_DETAIL'>
> = ({ route }) => {
  const { params } = route;
  const revenueDetail = params.revenueDetail;
  const listData = revenueDetail?.orderData ?? [];

  const renderItem = (item: Maybe<OderData>, index: number) => {
    return (
      <Div
        ml={sizes.base * 2}
        mr={sizes.base * 2}
        borderWidth={1}
        white
        mt={index === 0 ? sizes.base * 2 : 0}
        borderColor={colors.borderGray}
        row>
        <Div flex={1}>
          <Div pl={sizes.base} pt={sizes.base} pb={sizes.base}>
            <Text>{item?.name ?? ''}</Text>
          </Div>
          <Divider />
          <Div pl={sizes.base} pt={sizes.base} pb={sizes.base}>
            <Text>{`Giá: ${formatMoney(item?.price ?? 0)}`}</Text>
          </Div>
        </Div>
        <Divider vertical />
        <Div flex={0.5}>
          <Div pl={sizes.base} pt={sizes.base} pb={sizes.base} pr={sizes.base}>
            <Text right>{`SL: ${item?.count}`}</Text>
          </Div>
          <Divider />
          <Div pl={sizes.base} pt={sizes.base} pb={sizes.base} pr={sizes.base}>
            <Text right>{`Tổng: ${formatMoney(item?.totalPrice ?? 0)}`}</Text>
          </Div>
        </Div>
      </Div>
    );
  };

  const ListFooterComponent = () => {
    return (
      <Div ml={sizes.base * 2} mr={sizes.base * 2}>
        <Div row pt={sizes.base} pb={sizes.base} center>
          <Div flex={1}>
            <Text semibold darkestBlue header>
              Tổng số lượng
            </Text>
          </Div>
          <Text darkestBlue header>
            {revenueDetail?.count ?? 0}
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
            {formatMoney(revenueDetail?.totalPrice ?? 0)}
          </Text>
        </Div>
      </Div>
    );
  };

  return (
    <Container isBack isHeader title="Doanh thu theo ngày" lightGray>
      <Div flex={1}>
        <FlatList
          data={listData}
          renderItem={({ item, index }) => renderItem(item, index)}
          keyExtractor={(item) => item?.id ?? ''}
          ListFooterComponent={<ListFooterComponent />}
        />
      </Div>
    </Container>
  );
};
