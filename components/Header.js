import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header({navigation}){
    return(
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.navigate('SurpriseScreen')}>
          <Image style = {styles.meIndiqueHome} source={require('../assets/images/me_indique.png')}></Image>
        </TouchableOpacity>
        <FontAwesome5 name='bars' size={30} color='#fff'/>
      </View>
    );
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        backgroundColor: '#dfcdc2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
      },
      meIndiqueHome: {
        height:50,
        width: 200,
      }
    });