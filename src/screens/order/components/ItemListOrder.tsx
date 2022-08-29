import { Div, Modal, Text, Touch } from '@components';
import { Merchandise } from '@graphql';
import { colors, sizes } from '@theme';
import { formatMoney } from '@utils';
import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import { ModalEditCount } from './ModalEditCount';
import { ModalNote } from './ModalNote';

type IPropsItemListOrder = {
  item: Merchandise | null;
  index: number;
  orderSelected: {
    merchandise: Merchandise | null;
    count: number;
    note: string;
  }[];
  onPress: (item: Merchandise | null) => void;
  setOrderSelected: (
    value: React.SetStateAction<
      {
        merchandise: Merchandise | null;
        count: number;
        note: string;
      }[]
    >,
  ) => void;
};

export const ItemListOrder: React.FC<IPropsItemListOrder> = ({
  item,
  index,
  orderSelected,
  onPress,
  setOrderSelected,
}) => {
  let data = [...orderSelected];
  const indexSelected = orderSelected?.findIndex((value) => {
    return value?.merchandise?.id === item?.id;
  });
  const isDisableMinus = orderSelected[indexSelected]?.count === 1;
  const [count, setCount] = useState(data[indexSelected]?.count);
  const [isVisibleNote, setIsVisibleNote] = useState(false);
  const [isVisibleCount, setIsVisibleCount] = useState(false);
  // const [textNote, setTextNote] = useState('');

  useEffect(() => {
    setCount(data[indexSelected]?.count);
  }, [data[indexSelected]?.count]);

  const onPressMinus = () => {
    data[indexSelected].count = data[indexSelected].count - 1;
    setOrderSelected(data);
  };

  const onPressPlus = () => {
    data[indexSelected].count = data[indexSelected].count + 1;
    setOrderSelected(data);
  };
  const onPressRemove = () => {
    setOrderSelected(
      data.filter((value) => {
        return value.merchandise?.id !== item?.id;
      }),
    );
  };
  const onPressNote = () => {
    setIsVisibleNote(true);
  };
  const onPressOk = (text: string) => {
    data[indexSelected].note = text;
    setOrderSelected(data);
    setIsVisibleNote(false);
    // setTextNote('');
    setCount(1);
  };

  const onOkCount = (value: string) => {
    data[indexSelected].count = Number(value);
    setCount(Number(value));
  };

  return (
    <Div
      flex={1}
      borderWidth={1}
      borderColor={colors.borderGray}
      radius={sizes.radius}
      overflow="hidden"
      mt={index === 0 ? sizes.base * 2 : 0}
      mb={sizes.base * 2}>
      <Touch activeOpacity={0.7} onPress={() => onPress(item)}>
        <Div flex={1} padding={sizes.base}>
          <Div row>
            <Div flex={1}>
              <Text title blue semibold>
                {item?.merchandiseName}
              </Text>
            </Div>
            {indexSelected !== -1 && (
              <>
                <Div mr={sizes.base / 2} middle>
                  <TouchableOpacity onPress={onPressNote}>
                    <IconSimpleLine name="note" size={sizes.base * 2} color={colors.green} />
                  </TouchableOpacity>
                </Div>
                <TouchableOpacity onPress={onPressRemove}>
                  <Icon name="close" size={sizes.base * 3} color={colors.pink} />
                </TouchableOpacity>
              </>
            )}
          </Div>

          <Div flex={1} row mt={sizes.base}>
            <Div flex={1} middle>
              <Text>
                {'Giá: '}
                <Text pink semibold>
                  {formatMoney(item?.price ?? 0)}
                </Text>
              </Text>
            </Div>
            <Div row center>
              {indexSelected !== -1 && (
                <>
                  <TouchableOpacity
                    onPress={onPressMinus}
                    activeOpacity={0.7}
                    disabled={isDisableMinus}>
                    <Icon name="remove-circle-outline" size={sizes.base * 3} color={colors.pink} />
                  </TouchableOpacity>

                  <Div
                    ml={sizes.base / 2}
                    mr={sizes.base / 2}
                    white
                    pl={sizes.base}
                    pr={sizes.base}
                    height={sizes.base * 3}
                    radius={sizes.radius / 2}
                    middle>
                    <TouchableOpacity onPress={() => setIsVisibleCount(true)}>
                      <Text darkBlue medium>
                        {count}
                      </Text>
                    </TouchableOpacity>
                  </Div>
                  <TouchableOpacity onPress={onPressPlus} activeOpacity={0.7}>
                    <Icon name="add-circle-outline" size={sizes.base * 3} color={colors.blue} />
                  </TouchableOpacity>
                </>
              )}
            </Div>
          </Div>
        </Div>
      </Touch>
      <ModalNote
        isVisible={isVisibleNote}
        onClose={() => setIsVisibleNote(false)}
        onPressOk={onPressOk}
        // textNote={textNote}
      />
      <ModalEditCount
        isVisible={isVisibleCount}
        onClose={() => setIsVisibleCount(false)}
        onOk={onOkCount}
        count={count}
      />
    </Div>
  );
};
