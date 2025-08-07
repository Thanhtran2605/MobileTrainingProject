import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../commons/style/Map.style';
import MapView, { Marker } from 'react-native-maps';
import { RootStackParamList } from '../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'FoodMap'>;

const FoodMapScreen = ({ navigation, route }: Props) => {
  const { food } = route.params;

  const coords = {
    latitude: Number(food.vi_do),
    longitude: Number(food.kinh_do),
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <SafeAreaView style={styles.container}>
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
        <Text style={styles.headerTitle}>Bản đồ</Text>
      </View>

      <View style={{ flex: 1 }}>
        <MapView style={styles.map} initialRegion={coords}>
          <Marker
            coordinate={coords}
            image={require('../assets/img/PingLocation.png')}
          >
            <View style={styles.card}>
              <View style={styles.elementCard}>
                <Image source={{ uri: food.hinh_anh }} style={styles.image} />
                <Text style={styles.title}>{food.ten}</Text>
              </View>
              <View style={styles.addressContainer}>
                <Image
                  source={require('../assets/img/Location.png')}
                  style={styles.iconLocation}
                />
                <Text style={styles.address}>{food.dia_chi}</Text>
              </View>
              <Text style={{ fontSize: 12, color: '#888', marginTop: 4 }}>
                Vĩ độ: {food.vi_do} | Kinh độ: {food.kinh_do}
              </Text>
            </View>
          </Marker>
        </MapView>

        <View style={styles.cardOverlay}>
          <View style={styles.card}>
            <View style={styles.elementCard}>
              <Image source={{ uri: food.hinh_anh }} style={styles.image} />
              <Text style={styles.title}>{food.ten}</Text>
            </View>
            <View style={styles.addressContainer}>
              <Image
                source={require('../assets/img/Location.png')}
                style={styles.iconLocation}
              />
              <Text style={styles.address}>{food.dia_chi}</Text>
            </View>
            <Text style={{ fontSize: 12, color: '#888', marginTop: 4 }}>
              Vĩ độ: {food.vi_do} | Kinh độ: {food.kinh_do}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FoodMapScreen;
