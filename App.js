// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import MainStack from './src/navigation/MainStack';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
// import TabNavigation from './src/navigation/TabNavigation';
import NavegacionDraw from '././src/navigation/NavegacionDraw'


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
