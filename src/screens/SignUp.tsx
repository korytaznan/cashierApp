import { Container, Div, Text } from '@components';
import { SCREEN_NAME } from '@const';
import { navigate } from '@utils';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

export const SignUp: FC = () => {
  return (
    <Container isHeader title="SignUp">
      <Text black>SignUp</Text>
      <TouchableOpacity onPress={() => navigate(SCREEN_NAME.SETTING)}>
        <Text>Setting</Text>
      </TouchableOpacity>
    </Container>
  );
};
