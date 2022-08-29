import React, { useState } from 'react';
import { Div, Modal, Text, Touch } from '@components';
import { DEVICE } from '@const';
import { colors, sizes } from '@theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Maybe, Order, useGetTablesQuery } from '@graphql';
import { FlatList, StyleSheet } from 'react-native';

const { SCREEN_HEIGHT, SCREEN_WIDTH } = DEVICE;

type IPropsModalFunction = {
  isVisible: boolean;
  dataOrder?: Maybe<Order>;
  onClose: () => void;
  onOk: (tableSelected: string) => void;
  onSaveBill: () => void;
};

export const ModalFunction: React.FC<IPropsModalFunction> = ({
  isVisible,
  dataOrder,
  onClose,
  onOk,
  onSaveBill,
}) => {
  const { data } = useGetTablesQuery();
  const [isShowTable, setIsShowTable] = useState(false);
  const [tableSelected, setTableSelected] = useState('');
  const onnPressTransferTable = () => {
    setIsShowTable(true);
  };
  const _onClose = () => {
    onClose();
    setIsShowTable(false);
  };
  const onPressOk = () => {
    onOk(tableSelected);
    onClose();
    setIsShowTable(false);
    setTableSelected('');
  };
  const renderListTable = () => {
    const table = data?.getTables?.filter((value) => {
      return value?.id !== dataOrder?.tableId;
    });
    const width = (SCREEN_WIDTH - sizes.base * 8) / 3 - sizes.base * 3;

    return (
      <Div flex={1}>
        <FlatList
          data={table}
          keyExtractor={(item) => item?.id ?? ''}
          numColumns={3}
          bounces={false}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={({ item }) => {
            return (
              <Div
                width={width}
                height={sizes.base * 7.5}
                radius={sizes.radius}
                borderWidth={1}
                borderColor={colors.blue}
                backgroundColor={tableSelected === item?.id ? colors.blue : colors.lightGray}>
                <Touch onPress={() => setTableSelected(item?.id ?? '')} activeOpacity={0.7}>
                  <Div center middle flex={1}>
                    <Text semibold white={tableSelected === item?.id}>
                      {item?.tableName}
                    </Text>
                  </Div>
                </Touch>
              </Div>
            );
          }}
        />
        <Div row mt={sizes.base * 2}>
          <Touch onPress={onPressOk}>
            <Div blue padding={sizes.base} center middle radius={sizes.radius}>
              <Text white>OK</Text>
            </Div>
          </Touch>
          <Touch onPress={() => setIsShowTable(false)}>
            <Div pink ml={sizes.base * 2} padding={sizes.base} center middle radius={sizes.radius}>
              <Text white>Cancel</Text>
            </Div>
          </Touch>
        </Div>
      </Div>
    );
  };
  return (
    <Modal isVisible={isVisible} onBackButtonPress={_onClose} onBackdropPress={_onClose}>
      <Div
        height={isShowTable ? SCREEN_HEIGHT / 2.6 : SCREEN_HEIGHT / 3}
        padding={isShowTable ? sizes.base * 2 : sizes.base * 4}>
        {isShowTable ? (
          renderListTable()
        ) : (
          <>
            <Div flex={0.5} mb={sizes.base * 2} radius={sizes.radius} orange>
              <Touch>
                <Div row center flex={1} middle>
                  <Div mr={sizes.base}>
                    <Icon name="print" size={sizes.base * 3} color={colors.white} />
                  </Div>
                  <Text white>In chế biến</Text>
                </Div>
              </Touch>
            </Div>
            <Div flex={0.5} mb={sizes.base * 2} radius={sizes.radius} pink>
              <Touch>
                <Div row center flex={1} middle>
                  <Div mr={sizes.base}>
                    <Icon name="print" size={sizes.base * 3} color={colors.white} />
                  </Div>
                  <Text white>In chế hoá đơn</Text>
                </Div>
              </Touch>
            </Div>
            <Div flex={0.5} mb={sizes.base * 2} radius={sizes.radius} green>
              <Touch onPress={onnPressTransferTable}>
                <Div row center flex={1} middle>
                  <Div mr={sizes.base}>
                    <Icon name="sync-alt" size={sizes.base * 3} color={colors.white} />
                  </Div>
                  <Text white>Chuyển/Ghép bàn</Text>
                </Div>
              </Touch>
            </Div>
            <Div flex={0.5} radius={sizes.radius} blue>
              <Touch onPress={onSaveBill}>
                <Div row center flex={1} middle>
                  <Div mr={sizes.base}>
                    <Icon name="save-alt" size={sizes.base * 3} color={colors.white} />
                  </Div>
                  <Text white>Lưu hoá đơn</Text>
                </Div>
              </Touch>
            </Div>
          </>
        )}
      </Div>
    </Modal>
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginBottom: sizes.base,
  },
});
