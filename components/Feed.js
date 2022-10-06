import React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Feed(){

    const profiles = [
      {
        id: 1,
        nome: 'Carlos Caixa Dágua',
        src: require('../assets/images/pedreiro/pedreiro1.png'),
        nota:5.0,
      },
      {
        id: 2,
        nome: 'Luva de Pedreiro',
        src: require('../assets/images/pedreiro/pedreiro2.png'),
        nota: 5.0,
      },
      {
        id: 3,
        nome: 'Marcio Araújo',
        src: require('../assets/images/pedreiro/pedreiro3.png'),
        nota: 5.0,
      },
      {
        id: 4,
        nome: 'Cleiton Xavier',
        src: require('../assets/images/pedreiro/pedreiro4.png'),
        nota: 4.9,
      },
      {
        id: 5,
        nome: 'Saulo Hernandes',
        src: require('../assets/images/pedreiro/pedreiro5.png'),
        nota: 4.9,
      },
      {
        id: 6,
        nome: 'Lindomar Castilho',
        src: require('../assets/images/pedreiro/pedreiro6.png'),
        nota: 4.8,
      },
      {
        id: 7,
        nome: 'Bartô Galeno',
        src: require('../assets/images/pedreiro/pedreiro7.png'),
        nota: 4.8,
      },
      {
        id: 8,
        nome: 'Genival Santos',
        src: require('../assets/images/pedreiro/pedreiro8.png'),
        nota: 4.8,
      },
      {
        id: 9,
        nome: 'Pereira Sales',
        src: require('../assets/images/pedreiro/pedreiro9.png'),
        nota: 4.7,
      },
      {
        id: 10,
        nome: 'Bartô Galeno',
        src: require('../assets/images/pedreiro/pedreiro7.png'),
        nota: 4.6,
      },
      {
        id: 11,
        nome: 'Luva de Padreiro',
        src: require('../assets/images/pedreiro/pedreiro2.png'),
        nota: 4.5,
      },
      {
        id: 12,
        nome: 'Saulo Hernandes',
        src: require('../assets/images/pedreiro/pedreiro5.png'),
        nota: 4.5,
      },
    ];

    function renderItem({item}){
      return <View style={styles.profile}>
                <View style={styles.profile}>
                  <Image style={styles.profilePicture} source={item.src}></Image>
                  <Text style={styles.profileName}> {item.nome}</Text>
                </View>
                <View style={styles.profileIcons}>
                  <FontAwesome5 name='star' size={30} color='yellow'/>
                  <Text>{item.nota}</Text>            
                </View> 
              </View>        
    }

    return(
      <View style={styles.feed}>
        <FlatList
          data={profiles}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        
      </View>
    )
}

const styles = StyleSheet.create({
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
  