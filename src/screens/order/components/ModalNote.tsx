import { TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Div, Modal, Text } from '@components';
import { colors, sizes } from '@theme';

type IPropsModalNote = {
  isVisible: boolean;
  onClose: () => void;
  //   textNote: string;
  onPressOk: (text: string) => void;
};

export const ModalNote: React.FC<IPropsModalNote> = ({
  isVisible,
  onClose,
  onPressOk,
  //   textNote,
}) => {
  const [text, setText] = useState('');
  const onOk = () => {
    onPressOk(text);
    setText('');
  };
  return (
    <Modal isVisible={isVisible} onBackButtonPress={onClose} onBackdropPress={onClose}>
      <Div padding={[sizes.base * 2, sizes.base]}>
        <Text semibold title>
          Ghi chú
        </Text>
        <Div
          height={sizes.base * 10}
          borderWidth={1}
          borderColor={colors.borderGray}
          mt={sizes.base}
          radius={sizes.radius}
          padding={sizes.base}>
          <TextInput
            multiline
            placeholder="Ghi chú"
            value={text}
            onChangeText={(_text) => setText(_text)}
          />
        </Div>
        <Div mt={sizes.base}>
          <TouchableOpacity onPress={onOk}>
            <Div height={sizes.base * 4} center middle blue radius={sizes.radius}>
              <Text white medium>
                OK
              </Text>
            </Div>
          </TouchableOpacity>
        </Div>
      </Div>
    </Modal>
  );
};
