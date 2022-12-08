import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SurpriseScreen from './screens/SurpriseScreen';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'LoginScreen' component={LoginScreen} options={{headerShown:false}}/>  
        <Stack.Screen name = 'HomeScreen' component={HomeScreen} options={{headerShown:false}}/> 
        <Stack.Screen name = 'ProfileScreen' component={ProfileScreen} options={{title:'Perfil do Prestador'}}/> 
        <Stack.Screen name = 'SurpriseScreen' component={SurpriseScreen} options={{title:'Perfil do Criador'}}/>
      </Stack.Navigator>  
    </NavigationContainer>       //Aqui dentro colocamos cada Stack representando uma página 
  );
}