import React, { FC } from 'react';
import { Div, Text } from '@components';
import { sizes } from '@theme';

export const Splash: FC = () => {
  return (
    <Div flex={1} center middle blue>
      <Text white size={sizes.base * 4}>
        Cashier App
      </Text>
    </Div>
  );
};

export default Splash;
