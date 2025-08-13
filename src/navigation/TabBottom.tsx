import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Text } from 'react-native';
import HomeStackNavigator from './HomeStack';
import FoodScreen from '../screens/FoodScreen';
import { BottomTabBarIconProps } from '../types/BottomTabProps';
import { BottomTabParamList } from '../types/BottomTabParamList';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const renderTabIcon =
  (source: number) =>
  ({ focused, color, size }: BottomTabBarIconProps) =>
    (
      <Image
        source={source}
        style={{
          width: size,
          height: size,
          tintColor: focused ? color : 'rgba(202, 202, 202, 1)',
        }}
        resizeMode="contain"
      />
    );

const TabBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarLabelStyle: {
          fontSize: 9,
          fontFamily: 'Nunito',
          fontWeight: '700',
          textAlign: 'center',
          letterSpacing: 0,
          fontStyle: 'normal',
          flexWrap: 'wrap',
        },

        tabBarLabelPosition: 'below-icon',

        tabBarStyle: {
          flexDirection: 'row',
          height: 95,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          justifyContent: 'space-between',
          paddingTop: 18,
          paddingRight: 24,
          paddingBottom: 0,
          paddingLeft: 24,
          backgroundColor: 'rgba(255, 255, 255, 1)',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 8,
        },

        tabBarItemStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: 80,
        },

        tabBarActiveTintColor: 'rgba(0, 85, 167, 1)',
        tabBarInactiveTintColor: 'rgba(202, 202, 202, 1)',
      }}
    >
      <Tab.Screen
              name="HomeTab"
              component={HomeStackNavigator}
              options={({ route }) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? '';
                const hideTabBarRoutes = [
                  'Food',
                  'FoodMap',
                  'Tourism',
                  'TourismDetail',
                ];
                return {
                  tabBarLabel: 'Trang chủ',
                  tabBarIcon: renderTabIcon(require('../assets/img/Home.png')),
                  tabBarStyle: hideTabBarRoutes.includes(routeName)
                    ? { display: 'none' }
                    : undefined,
                };
              }}
            />
      <Tab.Screen
        name="SearchTab"
        component={() => <Text>Tra cứu</Text>}
        options={{
          tabBarLabel: 'Tra cứu',
          tabBarIcon: renderTabIcon(require('../assets/img/Group.png')),
        }}
      />
      <Tab.Screen
        name="F0Tab"
        component={() => <Text>Khai báo F0</Text>}
        options={{
          tabBarLabel: 'Khai báo F0',
          tabBarIcon: renderTabIcon(require('../assets/img/Paper.png')),
        }}
      />
      <Tab.Screen
        name="ServiceTab"
        component={FoodScreen}
        options={{
          tabBarLabel: 'Dịch vụ khác',
          tabBarIcon: renderTabIcon(require('../assets/img/Window.png')),
        }}
      />
      <Tab.Screen
        name="IntroTab"
        component={() => <Text>Giới thiệu</Text>}
        options={{
          tabBarLabel: 'Giới thiệu',
          tabBarIcon: renderTabIcon(require('../assets/img/Report.png')),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBottom;
