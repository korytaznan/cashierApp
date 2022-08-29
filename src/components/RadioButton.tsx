import { colors, sizes } from '@theme';
import React from 'react';
import { Div, Text, Touch } from './base';
import { DEVICE } from '@const';

const { SCREEN_WIDTH } = DEVICE;

type DataType = {
  key: string;
  name: string;
};

interface IPropsRadiosButton {
  data: DataType[];
  selected: string;
  onSelect: (selected: DataType) => void;
  row?: boolean;
}

export const RadioButton: React.FC<IPropsRadiosButton> = ({ data, row, selected, onSelect }) => {
  return (
    <Div row={row} space="between" flex={1}>
      {data.map((value, index, arr) => {
        return (
          <Div key={value.key}>
            <Touch onPress={() => onSelect(value)} activeOpacity={0.7}>
              <Div row wrap="wrap" center>
                <Div
                  wrap="wrap"
                  width={sizes.base * 2}
                  height={sizes.base * 2}
                  borderWidth={1}
                  borderColor={selected === value.key ? colors.blue : colors.borderGray}
                  padding={selected === value.key ? sizes.base / 4 : 0}
                  overflow="hidden"
                  mr={sizes.base / 2}
                  radius={(sizes.base * 2) / 2}>
                  <Div
                    width={'100%'}
                    height={'100%'}
                    radius={(sizes.base * 2 - sizes.base / 4) / 2}
                    blue={selected === value.key}
                  />
                </Div>
                <Text>{value.name}</Text>
              </Div>
            </Touch>
          </Div>
        );
      })}
    </Div>
  );
};
