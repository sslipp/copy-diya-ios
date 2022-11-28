import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CardItemSmall from './component/CardItemSmall';
import Header from './component/Header';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Buttons from './component/Buttons';
import Time from './component/Time';
import Flip from './component/Flip';
import Swipers from './component/Swipers';
import CardFront from './component/CardFront';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'ukrainebold': require('./assets/fonts/ukrainebold.otf'),
    'ukraineregular': require('./assets/fonts/ukraineregular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Header />
      <Swipers />
      <CardFront />
      <View style={styles.card2}>
        <CardItemSmall />
      </View>
      <Time />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97bdee',
  },
  card2: {
    position: 'absolute',
    top: 55,
    left: 320,
  },
});
