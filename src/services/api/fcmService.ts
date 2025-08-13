import messaging from '@react-native-firebase/messaging';
import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.110:8080/api/v1/fcm';

export const requestPermissionAndSaveToken = async (userId: string) => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (!enabled) {
      console.log('Quyền FCM chưa được cấp');
      return;
    }

    const token = await messaging().getToken();
    console.log('FCM Token:', token);

    await axios.post(`${API_BASE_URL}/token`, { userId, token });
  } catch (error: any) {
    console.error('Error saving token:', error.message);
  }
};

export const sendNotification = async (
  apiKey: string,
  toToken: string,
  title: string,
  body: string,
) => {
  try {
    await axios.post(
      `${API_BASE_URL}/send`,
      {
        toToken,
        title,
        body,
        data: { screen: 'HomeScreen' },
      },
      {
        headers: { 'x-api-key': apiKey },
      },
    );
  } catch (err: any) {
    console.error('Error sending notification:', err.message);
  }
};
