import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  Login,
  Splash,
  Setting,
  AddTable,
  Home,
  AddMerchandise,
  AddMerchandiseGroup,
  AddUnitMerchandise,
  Merchandise,
  OrderDetail,
  AddOrder,
  Revenue,
  RevenueByDate,
  RevenueByDateDetail,
} from '@screens';
import React, { useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { navigationRef } from '@utils';
import { SCREEN_NAME, DEVICE } from '@const';
import { DrawerContent } from '@components';
import { useSelector } from 'react-redux';
import { RootState } from '@store';
import { RootStackParamList } from './type';

const { SCREEN_WIDTH } = DEVICE;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

export const MainStack: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { session } = useSelector((store: RootState) => store);
  const token = session.token;
  const [isLoading, setIsLoading] = useState(true);
  (async () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  })();

  const DrawerStack: React.FC = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
          unmountOnBlur: true,
          drawerType: 'front',
          drawerStyle: { width: SCREEN_WIDTH / 2 },
        }}>
        <Drawer.Screen name={SCREEN_NAME.HOME} component={Home} />
        <Drawer.Screen name={SCREEN_NAME.SETTING} component={Setting} />
        <Drawer.Screen name={SCREEN_NAME.REVENUE} component={Revenue} />
      </Drawer.Navigator>
    );
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {isLoading ? (
        <Splash />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={token?.length ? SCREEN_NAME.DRAWER_STACK : SCREEN_NAME.LOGIN}>
          {token?.length ? (
            <>
              <Stack.Screen name={SCREEN_NAME.DRAWER_STACK} component={DrawerStack} />
              <Stack.Screen name={SCREEN_NAME.REVENUE_BY_DATE} component={RevenueByDate} />
              <Stack.Screen
                name={SCREEN_NAME.REVENUE_BY_DATE_DETAIL}
                component={RevenueByDateDetail}
              />
              <Stack.Screen name={SCREEN_NAME.MERCHANDISE} component={Merchandise} />
              <Stack.Screen name={SCREEN_NAME.ORDER_DETAIL} component={OrderDetail} />
              <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name={SCREEN_NAME.ADD_TABLE} component={AddTable} />
                <Stack.Screen name={SCREEN_NAME.ADD_MERCHANDISE} component={AddMerchandise} />
                <Stack.Screen
                  name={SCREEN_NAME.ADD_MERCHANDISE_GROUP}
                  component={AddMerchandiseGroup}
                />
                <Stack.Screen
                  name={SCREEN_NAME.ADD_UNIT_MERCHANDISE}
                  component={AddUnitMerchandise}
                />
                <Stack.Screen name={SCREEN_NAME.ADD_ORDER} component={AddOrder} />
              </Stack.Group>
            </>
          ) : (
            <Stack.Screen
              name={SCREEN_NAME.LOGIN}
              component={Login}
              options={{
                animationTypeForReplace: token?.length ? 'push' : 'pop',
              }}
            />
          )}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
