// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React from 'react';
// import MainStack from './src/navigation/MainStack';
// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
// import TabNavigation from './src/navigation/TabNavigation';
import NavegacionDraw from '././src/navigation/NavegacionDraw'


export default function App() {

  return (
    <NavegacionDraw />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: '#fff',
  }
});
