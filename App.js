import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name = 'HomeScreen' component={HomeScreen} options={{headerShown:false}}/> 
        <Stack.Screen name = 'ProfileScreen' component={ProfileScreen} options={{title:'Perfil do Prestador'}}/> 
      </Stack.Navigator>  
    </NavigationContainer>       //Aqui dentro colocamos cada Stack representando uma página 
  );
}