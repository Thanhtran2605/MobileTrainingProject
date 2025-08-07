import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import GridContent from '../components/GridContent';
import Header from '../components/Header';
import News from '../components/News';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <News />
        <GridContent />
      </ScrollView>
      <Image
        source={require('../assets/img/5ngonnui.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
    </View>
  );
};

const MOUNTAIN_HEIGHT = 289;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(246, 247, 251, 1)',
  },
  backgroundImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: MOUNTAIN_HEIGHT,
    width: '100%',
    zIndex: 0,
  },
  contentContainer: {
    paddingBottom: MOUNTAIN_HEIGHT,
    zIndex: 1,
  },
});

export default HomeScreen;