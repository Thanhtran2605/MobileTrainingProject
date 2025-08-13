import React from 'react';
import { View } from 'react-native';
import BackgroundMountain from '../components/BackgroundMoutain';
import { RootStackParamList } from '../types/RootStackParamList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBottom from './TabBottom';
// import { RootStackParamList } from '../types/RootStackParamList';
import SubMenu from '../components/SubMenu';
import FoodScreen from '../screens/FoodScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import TourismScreen from '../screens/TourismScreen';
import TourismDetail from '../screens/TourismDetail';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    // <View style={{ flex: 1 }}>
    //   <BackgroundMountain />
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SubMenu" component={SubMenu} />
      <Stack.Screen name="Food" component={FoodScreen} />
      <Stack.Screen name="FoodMap" component={MapScreen} />
      <Stack.Screen name="Tourism" component={TourismScreen} />
      <Stack.Screen name="TourismDetail" component={TourismDetail} />
    </Stack.Navigator>
    // </View>
  );
};

export default HomeStackNavigator;
