import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/actions/NewsAction';
import { RootState, AppDispatch } from '../redux/store';
import styles from '../commons/style/News.styles';
import { Colors } from '../commons/colors';

const { width } = Dimensions.get('window');

const News = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.news,
  );

  useEffect(() => {
    if (!data || data.length === 0) {
      dispatch(fetchNews());
    }
  }, [dispatch]);

  if (loading) return <ActivityIndicator color={Colors.primary} size="small" />;
  if (error) return <Text style={{ color: 'red' }}>{error}</Text>;

  const renderItem = ({ item }: any) => (
    <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.newsContainer}>
        <View style={styles.newsHeader}>
          <View style={styles.newsHeaderLeft}>
            <Image
              style={styles.imageFlag}
              source={require('../assets/img/Flag.png')}
            />
            <Text style={styles.textHeaderLeft} numberOfLines={1}>
              {item.title}
            </Text>
          </View>
          <Text style={styles.textHeaderRight}>2 phút trước</Text>
        </View>

        <Text style={styles.textContent} numberOfLines={2}>
          {item.body}
          <Text style={styles.subTextContent}> Xem thêm</Text>
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center' }}
    />
  );
};

export default News;
