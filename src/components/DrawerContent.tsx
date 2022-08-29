import { FlatList } from 'react-native';
import React, { FC } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Container } from './Container';
import { Div, Text, Touch } from './base';
import { colors, sizes } from '@theme';
import { useDispatch } from 'react-redux';
import { logoutAction } from '@store/actions/authAction/logoutAction';

type NameType = 'SETTING' | 'HOME' | 'REVENUE';

type ItemDrawerType = {
  key: string;
  name: NameType;
  params?: any;
};

export const DrawerContent: FC<DrawerContentComponentProps> = ({ state, navigation }) => {
  const { routes } = state;
  const indexRoutes = state.index;
  const objectName = {
    SETTING: 'Cài đặt',
    HOME: 'Bán hàng',
    REVENUE: 'Doanh thu',
  };
  const dispatch = useDispatch();
  const renderItem = (item: ItemDrawerType, index: number) => {
    const isActive = indexRoutes === index;
    return (
      <Div
        padding={sizes.base * 2}
        backgroundColor={isActive ? colors.blueOpacity : colors.white}
        ml={sizes.base}
        mr={sizes.base}
        radius={sizes.radius}>
        <Touch onPress={() => navigation.navigate(item.name)}>
          <Text blue={isActive} bold gray={!isActive}>
            {objectName[item.name]}
          </Text>
        </Touch>
      </Div>
    );
  };
  return (
    <Container>
      <FlatList
        bounces={false}
        data={routes}
        keyExtractor={(item) => item.key}
        //@ts-ignore
        renderItem={({ item, index }) => renderItem(item, index)}
        ListFooterComponent={() => {
          return (
            <Div padding={sizes.base * 2} ml={sizes.base} mr={sizes.base} radius={sizes.radius}>
              <Touch onPress={() => dispatch(logoutAction())}>
                <Text pink bold>
                  Đăng xuất
                </Text>
              </Touch>
            </Div>
          );
        }}
      />
    </Container>
  );
};
