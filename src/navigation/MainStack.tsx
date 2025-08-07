import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBottom from './TabBottom';
import { RootStackParamList } from '../types/RootStackParamList';
import FoodScreen from '../screens/FoodScreen';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Food" component={FoodScreen} />
      <Stack.Screen name="FoodMap" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
