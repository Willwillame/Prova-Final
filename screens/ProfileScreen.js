import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { useState } from 'react';

import { getProfessionalbyid } from '../services/professionalService';

export default function ProfileScreen({route}){

    const [prof, setProf] = useState([]);
    useEffect(function(){                          //Acesso ao BackEnd
        async function getData(){
          const prof = getProfessionalbyid(route.params.idPrestador)
          setProf(prof)
        }
        getData();
      },[])

    return(
        <View style={styles.FeedPage2}>
            <View style={styles.ProfileHeader}>
                <View style={styles.ProfileHeaderItems}>
                    <Image style={styles.ProfilePhoto} source={prof.src}></Image>
                </View>
                <View style={styles.TextHeader}>
                    <Text style={styles.ProfessionalName}>{prof.nome}</Text>
                    <Text style={styles.ExpText}>{prof.idade} anos</Text>
                    <Text style={styles.ExpText}>{prof.exp} anos de experiência</Text>
                </View>                      
            </View>
            <View style={styles.body}>
                <Text>{prof.texto}</Text>
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
    body:{
        
    }

})