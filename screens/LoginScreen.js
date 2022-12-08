import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Text, AsyncStorage, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function LoginScreen({navigation}) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function logar(){
        const response = await fetch('https://mobile.ect.ufrn.br:3000/login', headerOptions);
        if (response.status === 200){
            const token = await response.text();
            await AsyncStorage.setItem('token', token);
            navigation.navigate('HomeScreen');
        } else{
            Alert.alert(
                'Erro',
                'Usuário ou senha inválidos',
            );
        }
    }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.loginContainer}>
        <TextInput 
        style={styles.input} 
        placeholder='usuário' 
        value={user}
        onChangeText = {setUser}/>
        <TextInput 
        style={styles.input} 
        placeholder='senha' 
        value={password} 
        secureTextEntry={true}
        onChangeText = {setPassword}/>
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfcdc2',
    justifyContent: 'center',                             //Para o app não sobrepor a StatusBar
  },
  loginContainer: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    margin: 20,
    borderColor: '#dfcdc2',
    borderWidth: 1,
    backgroundColor: '#dfcdc2',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginTop:10,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
  },
  sendButton:{
    padding: 10,
    width: 120,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  }
});
