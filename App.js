import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Constants from 'expo-constants';
import {FontAwesome5} from '@expo/vector-icons';

import Header from './components/Header.js';
import TitleBar from './components/TitleBar.js';
import Feed from './components/Feed.js';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <TitleBar/>
      <Feed/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfcdc2',
    marginTop: Constants.statusBarHeight,                              //Para o app não sobrepor a StatusBar
  },
  feed:{},
  profile:{
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePicture:{
    height:70,
    width:70,
    borderRadius:35,
    marginTop: 10,
    marginLeft: 6,
  },
  profileName:{
    marginLeft:10,
    fontSize: 16,
  },
  profileIcons:{
    marginRight: 10,
    alignItems:'center',
  }
});
