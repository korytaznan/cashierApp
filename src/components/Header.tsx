import { DEFAULT_NAVBAR_HEIGHT } from '@const';
import { colors, sizes } from '@theme';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Div, Text } from './base';
import { goBack, openDrawer } from '@utils';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IPropsHeader {
  isBack?: boolean;
  title?: string;
  isRightClose?: boolean;
  isDrawer?: boolean;
}

export const Header: FC<IPropsHeader> = ({
  isBack = false,
  title = '',
  isRightClose = false,
  isDrawer = false,
}) => {
  return (
    <Div height={DEFAULT_NAVBAR_HEIGHT} row center padding={[0, sizes.base * 2]} blue>
      {isBack && (
        <Div flex={0}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="arrow-back-ios" size={sizes.base * 3} color={colors.white} />
          </TouchableOpacity>
        </Div>
      )}

      <Div flex={1} pl={sizes.base}>
        <Text title white bold>
          {title}
        </Text>
      </Div>
      {isRightClose && (
        <Div flex={0}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="close" size={sizes.base * 3} color={colors.white} />
          </TouchableOpacity>
        </Div>
      )}
      {isDrawer && (
        <Div flex={0}>
          <TouchableOpacity onPress={() => openDrawer()}>
            <Icon name="menu" size={sizes.base * 3} color={colors.white} />
          </TouchableOpacity>
        </Div>
      )}
    </Div>
  );
};
