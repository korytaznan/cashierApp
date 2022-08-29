import { SafeAreaView } from 'react-native';
import React, { FC } from 'react';
import { Div, IPropsDiv } from './base';
import { Header } from './Header';
import { BOTTOM_SPACE } from '@const';

interface IPropsContainer {
  isHeader?: boolean;
  isBack?: boolean;
  title?: string;
  isRightClose?: boolean;
  isDrawer?: boolean;
}

export const Container: FC<IPropsContainer & IPropsDiv> = ({
  isBack = false,
  isHeader = false,
  title = '',
  isRightClose = false,
  isDrawer = false,
  children,
  ...props
}) => {
  return (
    <Div flex={1} white pb={BOTTOM_SPACE} {...props}>
      <SafeAreaView>
        {isHeader && (
          <Header isBack={isBack} title={title} isRightClose={isRightClose} isDrawer={isDrawer} />
        )}
      </SafeAreaView>
      {children}
    </Div>
  );
};
