import React, { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import styles from '../commons/style/TourismDetail.style';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RenderHtml from 'react-native-render-html';
import { RootStackParamList } from '../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'TourismDetail'>;

const TourismDetail = ({ navigation, route }: Props) => {
  const { tourism } = route.params;
  const { width } = Dimensions.get('window');
  const [cardWidth, setCardWidth] = useState(width);

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
        <Text style={styles.headerTitle}>Chi tiết du lịch</Text>
      </View>
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={styles.card}
          onLayout={e => setCardWidth(e.nativeEvent.layout.width)}
        >
          <Image source={{ uri: tourism.hinh_anh }} style={styles.cardImage} />
          <Text style={styles.cardHeadingText}>
            {tourism.hinh_thuc_du_lich}
          </Text>
          <RenderHtml
            contentWidth={cardWidth}
            source={{ html: tourism.mo_ta || '' }}
            tagsStyles={{
              p: { textAlign: 'justify' },
            }}
          />
        </View>
      </ScrollView>
      <Image
        source={require('../assets/img/5ngonnui.png')}
        style={styles.backgroundImage}
      />
    </SafeAreaView>
  );
};

export default TourismDetail;
