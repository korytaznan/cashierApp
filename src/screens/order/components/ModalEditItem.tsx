import React, { useEffect, useState } from 'react';
import { Div, Modal, Text, KeyboardNumber, Touch } from '@components';
import { DEVICE } from '@const';
import { colors, sizes } from '@theme';
import { Maybe, OderData } from '@graphql';
import { TouchableOpacity } from 'react-native';
import { formatMoney } from '@utils';

const { SCREEN_HEIGHT } = DEVICE;

type IPropsModalEditItem = {
  isVisible: boolean;
  itemSelected: Maybe<OderData>;
  onClose: () => void;
  onOk: (item: Maybe<OderData>) => void;
};

export const ModalEditItem: React.FC<IPropsModalEditItem> = ({
  isVisible,
  itemSelected,
  onClose,
  onOk,
}) => {
  const [price, setPrice] = useState(itemSelected?.price ?? 0);
  const [count, setCount] = useState(itemSelected?.count ?? 0);
  const [errPrice, setErrPrice] = useState(false);
  const [errCount, setErrCount] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState<'price' | 'count'>('count');

  useEffect(() => {
    setPrice(itemSelected?.price ?? 0);
    setCount(itemSelected?.count ?? 0);
  }, [itemSelected]);
  useEffect(() => {
    if (price !== 0) {
      setErrPrice(false);
    }
  }, [price]);
  useEffect(() => {
    if (count !== 0) {
      setErrCount(false);
    }
  }, [count]);

  const onPressButtonNumber = (item: string) => {
    if (selectedEdit === 'price') {
      if (price === 0) {
        setPrice(Number(item));
      } else {
        setPrice(Number(price.toString() + item));
      }
    } else {
      if (count === 0) {
        setCount(Number(item));
      } else {
        setCount(Number(count.toString() + item));
      }
    }
  };

  const onClear = () => {
    if (selectedEdit === 'price') {
      setPrice(0);
    } else {
      setCount(0);
    }
  };
  const onCancel = () => {
    setPrice(0);
    setCount(0);
    onClose();
  };

  const onPressOk = () => {
    if (price === 0) {
      return setErrPrice(true);
    }
    if (count === 0) {
      return setErrCount(true);
    }
    onOk({
      price,
      count,
      id: itemSelected?.id ?? '',
      name: itemSelected?.name ?? '',
      totalPrice: itemSelected?.totalPrice ?? 0,
      unit: itemSelected?.unit ?? '',
    });
    setPrice(0);
    setCount(0);
    onClose();
  };
  return (
    <Modal isVisible={isVisible} onBackButtonPress={onClose} onBackdropPress={onClose}>
      <Div height={SCREEN_HEIGHT / 1.5} padding={sizes.base * 2}>
        <Div>
          <Text title medium>
            Điều chỉnh giá/ số lượng
          </Text>
        </Div>
        <Div mt={sizes.base}>
          <Text header medium>
            Giá:
          </Text>
          <Div
            padding={sizes.base}
            borderWidth={1}
            borderColor={colors.borderGray}
            radius={sizes.radius}
            lightGray={selectedEdit === 'price'}
            mt={sizes.base}>
            <TouchableOpacity onPress={() => setSelectedEdit('price')}>
              <Text semibold header>
                {formatMoney(price)}
              </Text>
            </TouchableOpacity>
          </Div>
        </Div>
        {errPrice && (
          <Div>
            <Text caption pink>
              Giá trị không hợp lệ
            </Text>
          </Div>
        )}
        <Div mt={sizes.base}>
          <Text header medium>
            Số lượng:
          </Text>
          <Div
            padding={sizes.base}
            borderWidth={1}
            borderColor={colors.borderGray}
            radius={sizes.radius}
            lightGray={selectedEdit === 'count'}
            mt={sizes.base}>
            <TouchableOpacity onPress={() => setSelectedEdit('count')}>
              <Text semibold header>
                {count}
              </Text>
            </TouchableOpacity>
          </Div>
        </Div>
        {errCount && (
          <Div>
            <Text caption pink>
              Số lượng không hợp lệ
            </Text>
          </Div>
        )}
        <KeyboardNumber
          value={selectedEdit === 'price' ? price.toString() ?? '0' : count.toString() ?? '0'}
          onOk={onPressOk}
          onCancel={onCancel}
          onClear={onClear}
          onPressNumber={onPressButtonNumber}
        />
      </Div>
    </Modal>
  );
};
