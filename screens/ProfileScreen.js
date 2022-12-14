import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import { useState } from 'react';
import { getPedreiros } from '../services/pedreiroService';


export default function ProfileScreen() {

    const [pedreiros, setPedreiros] = useState([]);
    useEffect(() => {
      getPedreiros();
    }, []);

    const getPedreiros = async () => {
      const pedreiros = await getPedreiros();
      setPedreiros(pedreiros);
    };

        return(
            <View style={styles.FeedPage2}>
                <View style={styles.ProfileHeader}>
                    <View style={styles.TextHeader}>
                            <Text style={styles.ProfessionalName}>{pedreiros.nome}</Text>
                        <Text style={styles.ExpText}>{pedreiros.idade} anos</Text>
                        <Text style={styles.ExpText}>{pedreiros.exp} anos de experiência</Text>
                        <Text>{pedreiros.texto}</Text>
                    </View>                      
                </View>
            </View>  
        )
      
    
    
}

const styles = StyleSheet.create({
    FeedPage2:{
        flex:1,
        backgroundColor: '#dfcdc2',
    },
    ProfileHeader:{
        height:180,
        backgroundColor:'#dfcdc2',
        flexDirection:'row', 
        justifyContent:'space-between',      
    },
    ProfessionalName:{
        fontSize:20,
    },
    ProfileHeaderItems:{
        flexDirection:'row',
    },
    ProfilePhoto:{
        height:160,
        width:160,
        borderRadius:80,
        marginLeft: 6,
        marginTop:10,
    },
    nameProfilePage:{
        fontSize:20,
        marginTop:10,
    },
    ExpText:{
        fontSize:14,
    },
    TextHeader:{
        alignItems:'flex-start',
        marginRight:10,
    },

})