import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const MOUNTAIN_HEIGHT = 289;

const BackgroundMountain = () => (
  <ImageBackground
    source={require('../assets/img/5ngonnui.png')}
    style={styles.backgroundImage}
    resizeMode="cover"
  />
);

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: MOUNTAIN_HEIGHT,
    width: '100%',
    zIndex: 0,
  },
});

export default BackgroundMountain;