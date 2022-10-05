import {StyleSheet, View, Text} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function TitleBar(){
    return(
      <View style={styles.titleBar}>
        <Text style={styles.pedreiro}>Pedreiro</Text>
        <View style={styles.titleBarLeft}>
          <Text style={styles.filtros}> filtros</Text>
          <FontAwesome5 name='caret-down' size={24} color='#000'/>
        </View>
      </View>

    );
}

const styles = StyleSheet.create({
    titleBar:{
        height:40,
        backgroundColor: '#dfcdc2',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      titleBarLeft:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginRight: 6,
      },
      pedreiro:{
        marginLeft: 6,
        fontSize: 30,
      },
      filtros:{
        fontSize: 24,
        color: '#000',
      }
    });