import React, { useEffect, useState } from 'react';
import { Div, Modal, Text, KeyboardNumber, Touch } from '@components';
import { DEVICE } from '@const';
import { colors, sizes } from '@theme';

const { SCREEN_HEIGHT } = DEVICE;

type IPropsModalEditCount = {
  isVisible: boolean;
  count: number;
  onClose: () => void;
  onOk: (value: string) => void;
};

export const ModalEditCount: React.FC<IPropsModalEditCount> = ({
  isVisible,
  count,
  onClose,
  onOk,
}) => {
  const [value, setValue] = useState(count?.toString() ?? '1');
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (value !== '0') {
      setErr(false);
    }
  }, [value]);

  const onPressButtonNumber = (item: string) => {
    if (value === '0') {
      setValue(item);
    } else {
      setValue(value + item);
    }
  };

  const onClear = () => {
    setValue('0');
  };
  const onCancel = () => {
    setValue('1');
    onClose();
  };

  const onPressOk = () => {
    if (value === '0') {
      setErr(true);
    } else {
      onOk(value);
      onClose();
    }
  };

  return (
    <Modal isVisible={isVisible} onBackButtonPress={onClose} onBackdropPress={onClose}>
      <Div height={SCREEN_HEIGHT / 2.05} padding={sizes.base * 2}>
        <Div>
          <Text header medium>
            Nhập số lượng
          </Text>
        </Div>
        {err && (
          <Div>
            <Text caption pink>
              Giá trị không hợp lệ
            </Text>
          </Div>
        )}
        <KeyboardNumber
          value={value}
          onOk={onPressOk}
          onCancel={onCancel}
          onClear={onClear}
          onPressNumber={onPressButtonNumber}
        />
      </Div>
    </Modal>
  );
};
