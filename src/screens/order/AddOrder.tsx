import React, { useEffect, useState } from 'react';
import { Container, Div, Divider, Text, Touch } from '@components';
import { sizes } from '@theme';
import { FlatList } from 'react-native';
import { BOTTOM_SPACE, isAndroid } from '@const';
import { Maybe, Merchandise, useGetMerchandiseQuery } from '@graphql';
import { FilterAddOrder, ItemListOrder } from './components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@navigator';
import { goBack } from '@utils';

export type OrderSelectedType = Array<{
  merchandise: Merchandise | null;
  count: number;
  note: string;
}>;

export const AddOrder: React.FC<NativeStackScreenProps<RootStackParamList, 'ADD_ORDER'>> = ({
  route,
}) => {
  const { data, refetch } = useGetMerchandiseQuery({ variables: { filterType: 'materials' } });
  const [selectedPicker, setSelectedPicker] = useState<Merchandise | null>(null);
  const [dataFilter, setDataFilter] = useState<Array<Merchandise | null>>([]);
  const [orderSelected, setOrderSelected] = useState<OrderSelectedType>([]);
  const onPressDone = () => {
    if (selectedPicker) {
      setDataFilter(
        data?.getMerchandise?.filter((value) => {
          return value?.group === selectedPicker?.group;
        }) ?? [],
      );
    } else {
      setDataFilter(data?.getMerchandise ?? []);
    }
  };

  const onValueChangePicker = (_value: Maybe<Merchandise>) => {
    setSelectedPicker(_value);
    if (isAndroid) {
      if (_value) {
        setDataFilter(
          data?.getMerchandise?.filter((value) => {
            return value?.group === _value?.group;
          }) ?? [],
        );
      } else {
        setDataFilter(data?.getMerchandise ?? []);
      }
    }
  };

  const onPressItem = (item: Merchandise | null) => {
    const indexSelected = orderSelected?.findIndex((value) => {
      return value?.merchandise?.id === item?.id;
    });
    if (indexSelected === -1) {
      setOrderSelected([...orderSelected, { merchandise: item, count: 1, note: '' }]);
    }
  };

  const onPressOrder = () => {
    route.params?.callback(orderSelected);
    goBack();
  };

  useEffect(() => {
    if (data?.getMerchandise) {
      setDataFilter(data?.getMerchandise ?? []);
    }
  }, [data?.getMerchandise]);

  const renderItem = (item: Merchandise | null, index: number) => {
    return (
      <ItemListOrder
        index={index}
        item={item}
        orderSelected={orderSelected}
        onPress={onPressItem}
        setOrderSelected={setOrderSelected}
      />
    );
  };
  return (
    <Container title="Chọn món" isHeader isRightClose lightGray pb={0}>
      <FilterAddOrder
        data={data?.getMerchandise ?? []}
        onPressDone={onPressDone}
        onValueChange={onValueChangePicker}
        selected={selectedPicker}
      />
      <Divider />
      <Div flex={1} padding={[0, sizes.base * 2, 0, sizes.base * 2]}>
        <FlatList
          data={dataFilter}
          bounces={false}
          keyExtractor={(item) => item?.id ?? ''}
          renderItem={({ item, index }) => renderItem(item, index)}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </Div>
      <Div
        flex={0.06}
        padding={[sizes.base * 2, sizes.base * 2, BOTTOM_SPACE, sizes.base * 2]}
        white
        shadow
        radius={sizes.radius * 4}>
        <Touch onPress={onPressOrder} activeOpacity={0.7}>
          <Div flex={1} blue radius={sizes.radius} center middle>
            <Text white bold header>
              Đồng ý
            </Text>
          </Div>
        </Touch>
      </Div>
    </Container>
  );
};
