import React, { useState } from 'react';
import { Div, Modal, Text, Touch, KeyboardNumber } from '@components';
import { DEVICE } from '@const';
import { colors, sizes } from '@theme';
import { Scalars } from '@graphql';

const { SCREEN_HEIGHT } = DEVICE;

type IPropsModalDiscount = {
  isVisible: boolean;
  onClose: () => void;
  onOk: (data: { unit: Scalars['TypeUnitDiscount']; discount: number }) => void;
};

export const ModalDiscount: React.FC<IPropsModalDiscount> = ({ isVisible, onClose, onOk }) => {
  const [unitDiscount, setUnitDiscount] = useState<Scalars['TypeUnitDiscount']>('percent');
  const [discount, setDiscount] = useState('0');

  const onPressButtonNumber = (item: string) => {
    if (discount === '0') {
      setDiscount(item);
    } else {
      setDiscount(discount + item);
    }
  };

  const onClear = () => {
    setDiscount('0');
  };
  const onCancel = () => {
    setDiscount('0');
    onClose();
  };

  const onPressOk = () => {
    onOk({
      discount: Number(discount),
      unit: unitDiscount,
    });
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onBackButtonPress={onClose} onBackdropPress={onClose}>
      <Div height={SCREEN_HEIGHT / 2} padding={sizes.base * 2}>
        <Div>
          <Text header medium>
            Giảm giá tổng bill
          </Text>
        </Div>
        <Div row mt={sizes.base}>
          <Touch onPress={() => setUnitDiscount('percent')}>
            <Div row center>
              <Div
                width={sizes.base * 2}
                height={sizes.base * 2}
                radius={sizes.base}
                center
                middle
                mr={sizes.base}
                borderWidth={1}
                borderColor={colors.borderGray}>
                {unitDiscount === 'percent' && (
                  <Div width={sizes.base} height={sizes.base} radius={sizes.base / 2} blue />
                )}
              </Div>
              <Text>Phần trăm (%)</Text>
            </Div>
          </Touch>
          <Touch onPress={() => setUnitDiscount('value')}>
            <Div row center>
              <Div
                width={sizes.base * 2}
                height={sizes.base * 2}
                radius={sizes.base}
                center
                middle
                mr={sizes.base}
                borderWidth={1}
                borderColor={colors.borderGray}>
                {unitDiscount === 'value' && (
                  <Div width={sizes.base} height={sizes.base} radius={sizes.base / 2} blue />
                )}
              </Div>
              <Text>Số tiền</Text>
            </Div>
          </Touch>
        </Div>
        <KeyboardNumber
          value={discount}
          onOk={onPressOk}
          onCancel={onCancel}
          onClear={onClear}
          onPressNumber={onPressButtonNumber}
        />
      </Div>
    </Modal>
  );
};
