// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import MainStack from './src/navigation/MainStack';
import 'react-native-gesture-handler';
// import TabNavigation from './src/navigation/TabNavigation';
import NavegacionDraw from '././src/navigation/NavegacionDraw'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
])


export default function App() {

  return (
    <View style={styles.mainContainer}>
      <MainStack styles={styles.mainContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  }
});
