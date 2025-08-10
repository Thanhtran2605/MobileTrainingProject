import React, { useRef, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import styles from '../commons/style/Header.styles';

const { width: screenWidth } = Dimensions.get('window');

const Header = () => {
  const animatedRef = useRef(new Animated.Value(screenWidth)).current;
  const [textWidth, setTextWidth] = useState(0);

  const marqueeText = 'Thông điệp chuyển đổi số:Cuộc cách mạng';

  useEffect(() => {
    if (textWidth === 0) return;

    const startAnimation = () => {
      animatedRef.setValue(screenWidth);
      Animated.timing(animatedRef, {
        toValue: -textWidth,
        duration: (textWidth + screenWidth) * 10,
        useNativeDriver: true,
      }).start(() => startAnimation());
    };

    startAnimation();
  }, [textWidth]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="rgba(255, 255, 255, 1)"
        barStyle="dark-content"
      />

      <View style={styles.headerContainer}>
        <View style={styles.elementHeader}>
          <Image
            style={styles.avatarImage}
            source={require('../assets/img/avatar.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.textHeader}>DANANG</Text>
            <Text style={styles.textHeader}>SMART CITY</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.iconHeader}
              source={require('../assets/img/searchHeader.png')}
            />
            <Image
              style={styles.iconHeader}
              source={require('../assets/img/Notification.png')}
            />
          </View>
        </View>

        <View style={styles.marqueeContainer}>
          <Animated.View style={{ transform: [{ translateX: animatedRef }] }}>
            <Text
              numberOfLines={1}
              ellipsizeMode="clip"
              style={styles.scrollTexts}
              onLayout={e => setTextWidth(e.nativeEvent.layout.width)}
            >
              {marqueeText}
            </Text>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
