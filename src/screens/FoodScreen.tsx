import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../commons/colors';
import styles from '../commons/style/Food.style';

import { fetchFood } from '../redux/actions/FoodAction';
import { AppDispatch, RootState } from '../redux/store';
import { FoodItem } from '../redux/types/FoodType';
import { RootStackParamList } from '../types/RootStackParamList';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const FoodScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.food,
  );

  useEffect(() => {
    if (!data || data.length === 0) {
      dispatch(fetchFood());
    }
  }, [dispatch]);

  useEffect(() => {
    if (!loading && data?.length) {
      console.log('DATA LOADED:', data);
    }
  }, [data, loading]);

  if (loading)
    return (
      <ActivityIndicator
        color={Colors.primary}
        style={{ flex: 11 }}
        size="small"
      />
    );
  if (error) return <Text style={{ color: 'red' }}>{error}</Text>;

  const renderItem = ({ item }: { item: FoodItem }) => (
    <View style={styles.listContainer}>
      <TouchableOpacity
        style={styles.elementContainer}
        onPress={() => navigation.navigate('FoodMap', { food: item })}
      >
        <Image style={styles.elementImage} source={{ uri: item.hinh_anh }} />
        <View style={styles.elementTextGroup}>
          <Text style={styles.headingText}>{item.ten}</Text>
          <Text style={styles.subText}>{item.dia_chi}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    // <View style={styles.container}>
    <SafeAreaView style={[styles.container]}>
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
        <Text style={styles.headerTitle}>Món ăn đặc sản</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Tìm kiếm"
          style={styles.searchInput}
          placeholderTextColor={'rgba(0, 85, 167, 1)'}
        />
        <Image
          source={require('../assets/img/searchHeader.png')}
          style={{ width: 24, height: 24 }}
        />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.ten}-${index}`}
        renderItem={renderItem}
        contentContainerStyle={[{ paddingBottom: 20 }, styles.contentContainer]}
        showsVerticalScrollIndicator={false}
      />

      <Image
        source={require('../assets/img/5ngonnui.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
    </SafeAreaView>
  
  );
};

export default FoodScreen;
