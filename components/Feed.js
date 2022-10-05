import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Feed(){
    return(
      <View style={styles.feed}>
        <View style={styles.profile}>
          <View style={styles.profile}>
            <Image style={styles.profilePicture} source={require('../assets/images/pedreiro/pedreiro2.png')}></Image>
            <Text style={styles.profileName}> Luva de Pedreiro</Text>
          </View>
          <View style={styles.profileIcons}>
            <FontAwesome5 name='star' size={30} color='yellow'/>
            <Text>5.0</Text>            
          </View> 
        </View>        
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
  