/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Alert,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackNavigator from './src/navigation/HomeStack';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import TabBottom from './src/navigation/TabBottom';
import {
  requestPermissionAndSaveToken,
  sendNotification,
} from './src/services/api/fcmService';
import messaging from '@react-native-firebase/messaging';
import DeviceInfo from 'react-native-device-info';

const API_KEY = 'MY_SECRET_KEY';

function App() {
  useEffect(() => {
    // requestPermissionAndSaveToken('user123');

    const saveTokenWithDeviceId = async () => {
      const deviceId = await DeviceInfo.getUniqueId();
      await requestPermissionAndSaveToken(deviceId);
    };
    saveTokenWithDeviceId();

    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        remoteMessage.notification?.title || '',
        remoteMessage.notification?.body || '',
      );
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Opened from background:', remoteMessage);
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Opened from quit state:', remoteMessage);
        }
      });

    return unsubscribeOnMessage;
  }, []);

  const handleSendTestNotification = async () => {
    try {
      const token = await messaging().getToken();
      await sendNotification(API_KEY, token, 'Hello', 'Test message');
    } catch (error) {
      console.error('Error sending test notification:', error);
    }
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <View style={styles.container}>
              <TabBottom />

              {/* <View style={{ marginTop: 50 }}>
                <Button
                  title="Send Test Notification"
                  onPress={handleSendTestNotification}
                />
              </View> */}
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
