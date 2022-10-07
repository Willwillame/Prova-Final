import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';

import Header from '../components/Header.js';
import TitleBar from '../components/TitleBar.js';
import Feed from '../components/Feed.js';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <TitleBar/>
      <Feed navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfcdc2',
    marginTop: Constants.statusBarHeight,                              //Para o app não sobrepor a StatusBar
  },
});
