import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Container, Div, Text } from '@components';
import { navigate } from '@utils';
import { SCREEN_NAME } from '@const';

export const Setting: React.FC = () => {
  return (
    <Container isHeader title={'Cài đặt'} isBack isDrawer>
      <Div>
        <TouchableOpacity onPress={() => navigate(SCREEN_NAME.ADD_TABLE)}>
          <Text>Thêm bàn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate(SCREEN_NAME.MERCHANDISE)}>
          <Text>Hàng hoá</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate(SCREEN_NAME.ADD_MERCHANDISE_GROUP)}>
          <Text>Thêm nhóm hàng hoá</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate(SCREEN_NAME.ADD_UNIT_MERCHANDISE)}>
          <Text>Thêm đơn vị tính</Text>
        </TouchableOpacity>
      </Div>
    </Container>
  );
};
