import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { Div, Touch, Text } from './base';
import { colors, sizes } from '@theme';
import { DEVICE } from '@const';

const { SCREEN_WIDTH, SCREEN_HEIGHT } = DEVICE;

type IPropsKeyboardNumber = {
  value: string;
  onPressNumber: (value: string) => void;
  onClear: () => void;
  onOk: () => void;
  onCancel: () => void;
};

export const KeyboardNumber: React.FC<IPropsKeyboardNumber> = ({
  value,
  onCancel,
  onClear,
  onOk,
  onPressNumber,
}) => {
  const arrNumber = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '00', '.'];
  const renderNumber = (item: string, index: number) => {
    const width = (SCREEN_WIDTH - sizes.base * 8) / 3 - sizes.base * 4.5;
    return (
      <Div
        width={width}
        height={sizes.base * 7.9}
        radius={sizes.radius}
        borderWidth={1}
        borderColor={colors.borderGray}>
        <Touch onPress={() => onPressNumber(item)}>
          <Div center middle flex={1}>
            <Text title semibold>
              {item}
            </Text>
          </Div>
        </Touch>
      </Div>
    );
  };
  return (
    <Div mt={sizes.base} height={SCREEN_HEIGHT / 2.5}>
      <Div row flex={0.14}>
        <Div
          flex={1}
          mr={sizes.base}
          borderWidth={1}
          borderColor={colors.borderGray}
          radius={sizes.radius}
          padding={sizes.base}>
          <Text right header semibold>
            {value}
          </Text>
        </Div>
        <Div
          flex={0.3}
          borderWidth={1}
          borderColor={colors.borderGray}
          radius={sizes.radius}
          padding={sizes.base}>
          <Touch onPress={onClear}>
            <Div center middle flex={1}>
              <Text semibold header>
                Clear
              </Text>
            </Div>
          </Touch>
        </Div>
      </Div>
      <Div flex={1} row mt={sizes.base}>
        <Div flex={1} row mr={sizes.base}>
          <FlatList
            data={arrNumber}
            numColumns={3}
            bounces={false}
            scrollEnabled={false}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => renderNumber(item, index)}
            columnWrapperStyle={styles.columnWrapperStyle}
          />
        </Div>
        <Div flex={0.35}>
          <Div
            flex={1}
            borderWidth={1}
            borderColor={colors.borderGray}
            mb={sizes.base}
            radius={sizes.radius}>
            <Touch onPress={onOk}>
              <Div center middle flex={1}>
                <Text title semibold>
                  OK
                </Text>
              </Div>
            </Touch>
          </Div>
          <Div flex={1} borderWidth={1} borderColor={colors.borderGray} radius={sizes.radius}>
            <Touch onPress={onCancel}>
              <Div center middle flex={1}>
                <Text title semibold>
                  Cancel
                </Text>
              </Div>
            </Touch>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: sizes.base,
  },
});
