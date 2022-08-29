import { Div, Text } from '@components';
import { Merchandise } from '@graphql';
import { colors, sizes } from '@theme';
import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialIcons';

type IPropsFilterAddOrder = {
  selected: Merchandise | null;
  data: Array<Merchandise | null>;
  onValueChange: (value: Merchandise | null) => void;
  onPressDone: () => void;
};

export const FilterAddOrder: React.FC<IPropsFilterAddOrder> = ({
  selected,
  data,
  onValueChange,
  onPressDone,
}) => {
  const dataPicker =
    data?.map((item) => {
      return {
        label: item?.group ?? '',
        value: item,
      };
    }) ?? [];
  return (
    <Div padding={sizes.base}>
      <RNPickerSelect
        onValueChange={(value) => {
          if (value === 'all') {
            onValueChange(null);
          } else {
            onValueChange(value);
          }
        }}
        placeholder={{
          value: 'all',
          label: 'Tất cả hàng hoá',
        }}
        pickerProps={{
          accessibilityLabel: selected?.group ?? 'Tất cả hàng hoá',
        }}
        onDonePress={onPressDone}
        items={dataPicker.filter(
          (value, index, self) => index === self.findIndex((t) => t.label === value.label),
        )}>
        <Div
          height={sizes.base * 4}
          center
          row
          shadow
          white
          ml={sizes.base}
          mr={sizes.base}
          pl={sizes.base}
          pr={sizes.base}
          radius={sizes.radius}>
          <Div flex={1}>
            <Text>{selected?.group ?? 'Tất cả hàng hoá'}</Text>
          </Div>
          <Icon name="swap-vert" size={sizes.base * 3} color={colors.gray} />
        </Div>
      </RNPickerSelect>
    </Div>
  );
};
