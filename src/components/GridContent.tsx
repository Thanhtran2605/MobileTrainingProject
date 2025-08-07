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
    { label: 'Góp ý', icon: require('../assets/img/Gopy.png') },
    {
      label: 'Du lịch Dịch vụ',
      icon: require('../assets/img/Dulich-Dichvu.png'),
    },
    {
      label: 'Giao thông vận tải',
      icon: require('../assets/img/Traffice.png'),
    },
  ],
  [
    { label: 'Y tế sức khỏe', icon: require('../assets/img/Medical.png') },
    { label: 'Phòng chống dịch', icon: require('../assets/img/Mask.png') },
    { label: 'Giáo dục đào tạo', icon: require('../assets/img/Education.png') },
  ],
  [
    {
      label: 'Môi trường tài nguyên',
      icon: require('../assets/img/Enviroment.png'),
    },
    { label: 'Quy hoạch đất đai', icon: require('../assets/img/Land.png') },
    {
      label: 'Tiện ích thiết yếu',
      icon: require('../assets/img/Utilities.png'),
    },
  ],
  [
    { label: 'Thị trường việc làm', icon: require('../assets/img/Job.png') },
    { label: 'Ứng dụng liên kết', icon: require('../assets/img/Links.png') },
    { label: 'An toàn thực phẩm', icon: require('../assets/img/SafeFood.png') },
  ],
];

const GridContent = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleServicePress = (label: string) => {
    if (label === 'Du lịch Dịch vụ') {
      navigation.navigate('Food');
    }
  };

  return (
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
  );
};

export default GridContent;
