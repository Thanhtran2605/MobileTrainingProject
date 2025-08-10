// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FoodMapScreen from '../screens/MapScreen';
// import { Text, Image } from 'react-native';
// import { BottomTabBarIconProps } from '../types/BottomTabProps';

// const Tab = createBottomTabNavigator();

// const renderMapTabIcon =
//   (source: number) =>
//   ({ focused, color, size }: BottomTabBarIconProps) =>
//     (
//       <Image
//         source={source}
//         style={{
//           width: size,
//           height: size,
//           tintColor: focused ? color : 'rgba(202, 202, 202, 1)',
//         }}
//         resizeMode="contain"
//       />
//     );

// const FoodMapTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: '#222',
//           height: 70,
//           paddingHorizontal: 10,
//           borderTopWidth: 0,
//         },
//         tabBarLabelStyle: {
//           fontSize: 10,
//           fontWeight: '600',
//         },
//         tabBarActiveTintColor: 'yellow',
//         tabBarInactiveTintColor: 'gray',
//       }}
//     >
//       <Tab.Screen
//         name="FoodMap"
//         component={FoodMapScreen}
//         options={{
//           tabBarLabel: 'Khám phá',
//           tabBarIcon: renderMapTabIcon(
//             require('../assets/img/PingLocation.png'),
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Direct"
//         component={() => <Text>Chỉ đường</Text>}
//         options={{
//           tabBarLabel: 'Chỉ đường',
//           tabBarIcon: renderMapTabIcon(require('../assets/img/Direct.png')),
//         }}
//       />
//       <Tab.Screen
//         name="Bookmark"
//         component={() => <Text>Đã lưu</Text>}
//         options={{
//           tabBarLabel: 'Đã lưu',
//           tabBarIcon: renderMapTabIcon(require('../assets/img/Bookmark.png')),
//         }}
//       />
//       <Tab.Screen
//         name="Info"
//         component={() => <Text>Tìm kiếm</Text>}
//         options={{
//           tabBarLabel: 'Tìm kiếm',
//           tabBarIcon: renderMapTabIcon(require('../assets/img/SearchMap.png')),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default FoodMapTabNavigator;
