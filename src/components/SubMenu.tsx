import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../commons/style/Grid.styles';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const services = [
  [
    { label: 'Món ăn', icon: require('../assets/img/Gopy.png') },
    {
      label: 'Du lịch',
      icon: require('../assets/img/Dulich-Dichvu.png'),
    },
  ],
];


const SubMenu = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleServicePress = (label: string) => {
    if (label === 'Món ăn') {
      navigation.navigate('Food');
    }

    if (label === 'Du lịch') {
      navigation.navigate('Tourism');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../assets/img/Back.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dịch vụ du lịch</Text>
      </View>

      <View style={styles.grid}>
        <View style={styles.gridContainer}>
          <View style={styles.mainTextGridBlock}>
            <Text style={styles.mainTextGrid}>Dịch vụ đô thị thông minh</Text>
          </View>
        </View>
        <View style={styles.mainGrid}>
          {services.map((block, blockIndex) => (
            <View key={blockIndex} style={styles.blockGrid}>
              {block.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.elementGrid}
                  onPress={() => handleServicePress(item.label)}
                >
                  <View style={styles.elementImageView}>
                    <Image style={styles.elementImage} source={item.icon} />
                  </View>
                  <Text style={styles.elementText}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SubMenu;
