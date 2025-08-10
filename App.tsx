/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './src/navigation/HomeStack';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import TabBottom from './src/navigation/TabBottom';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <SafeAreaProvider>
          <NavigationContainer>
            <View style={styles.container}>
              <TabBottom />
            </View>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
