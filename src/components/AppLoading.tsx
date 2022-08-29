import React from 'react';
import { ActivityIndicator } from 'react-native';
import { DEVICE } from '@const';
import { colors } from '@theme';
import { Div } from './base';

const { SCREEN_WIDTH, SCREEN_HEIGHT } = DEVICE;

export const AppLoading: React.FC = () => {
  return (
    <Div
      width={SCREEN_WIDTH}
      height={SCREEN_HEIGHT}
      absolute
      zIndex={99}
      center
      middle
      backgroundColor={colors.blackOpacity}>
      <ActivityIndicator color={colors.blue} size="large" />
    </Div>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     width: DEVICE.SCREEN_WIDTH,
//     height: DEVICE.SCREEN_HEIGHT,
//     position: 'absolute',
//     backgroundColor: colors.blackOpacity,
//     zIndex: 99,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
