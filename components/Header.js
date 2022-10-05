import {StyleSheet, View, Image} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header(){
    return(
      <View style={styles.header}>
        <Image style = {styles.meIndiqueHome} source={require('../assets/images/me_indique.png')}></Image>
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