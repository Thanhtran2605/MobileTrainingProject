import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
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
import styles from '../commons/style/Tourism.style';
import useHideTabBar from '../commons/hook/useHideTabBottom';

import { fetchTourism } from '../redux/actions/TourismAction';
import { AppDispatch, RootState } from '../redux/store';
import { Tourism } from '../redux/types/TourismType';
import { RootStackParamList } from '../types/RootStackParamList';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const LIMIT = 10;

const TourismScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const dispatch = useDispatch<AppDispatch>();
  const { data, loadingInitial, loadingMore, error } = useSelector(
    (state: RootState) => state.tourism,
  );

  const [searchText, setSearchText] = useState('');
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    dispatch(fetchTourism({ limit: LIMIT, offset: 0, append: false }));
    setOffset(0);
  }, [dispatch]);

  const handleSearchText = () => {
    setOffset(0);
    dispatch(
      fetchTourism({ searchText, limit: LIMIT, offset: 0, append: false }),
    );
  };

  const handleLoadMore = () => {
    if (!loadingMore && data.length >= LIMIT) {
      const newOffset = offset + LIMIT;
      setOffset(newOffset);
      dispatch(
        fetchTourism({
          searchText,
          limit: LIMIT,
          offset: newOffset,
          append: true,
        }),
      );
    }
  };

  useEffect(() => {
    if (!loadingInitial && data?.length) {
      console.log('DATA LOADED:', data);
    }
  }, [data, loadingInitial]);

  if (loadingInitial)
    return (
      <ActivityIndicator
        color={Colors.primary}
        style={{ flex: 1 }}
        size="small"
      />
    );
  if (error) return <Text style={{ color: 'red' }}>{error}</Text>;

  const renderItem = ({ item }: { item: Tourism }) => (
    <View style={styles.listContainer}>
      <TouchableOpacity
        style={styles.elementContainer}
        onPress={() => navigation.navigate('TourismDetail', { tourism: item })}
      >
        <Image style={styles.elementImage} source={{ uri: item.hinh_anh }} />
        <View style={styles.overlay} />
        <View style={styles.elementTextGroup}>
          <Text style={styles.headingText}>{item.hinh_thuc_du_lich}</Text>
          <Text style={styles.subText}>{item.gioi_thieu}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
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
        <Text style={styles.headerTitle}>Du lịch</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Tìm kiếm"
          style={styles.searchInput}
          placeholderTextColor={'rgba(0, 85, 167, 1)'}
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={handleSearchText}
        />
        <TouchableOpacity onPress={handleSearchText}>
          <Image
            source={require('../assets/img/searchHeader.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => `${item.hinh_thuc_du_lich}-${index}`}
        renderItem={renderItem}
        contentContainerStyle={[
          { paddingBottom: 20, alignItems: 'center' },
          styles.contentContainer,
        ]}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.textSearchEmpty}>
            Không có kết quả tìm kiếm phù hợp
          </Text>
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loadingMore ? <ActivityIndicator /> : null}
      />

      <View pointerEvents="none" style={{ alignItems: 'center' }}>
        <Image
          source={require('../assets/img/5ngonnui.png')}
          style={styles.backgroundImage}
        />
      </View>
    </SafeAreaView>
  );
};

export default TourismScreen;
