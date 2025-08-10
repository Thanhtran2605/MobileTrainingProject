import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export default function useHideTabBar() {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const parent = navigation.getParent();
      parent?.setOptions({ tabBarStyle: { display: 'none' } });

      return () => {
        parent?.setOptions({ tabBarStyle: undefined });
      };
    }, [navigation]),
  );
}
