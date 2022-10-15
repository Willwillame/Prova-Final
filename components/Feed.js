import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { getProfessional } from '../services/professionalService';

export default function Feed({ navigation }) {

  const [profiles, setProfiles] = useState([]);

  useEffect(function () {                          //Acesso ao BackEnd
    async function getData() {
      const prof = getProfessional()
      setProfiles(prof);
    }
    getData();
  }, [])


  function renderItem({ item }) {
    return <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate('ProfileScreen', { idPrestador: item.id })}>
      <View style={styles.profile}>
        <Image style={styles.profilePicture} source={item.src}></Image>
        <Text style={styles.profileName}>{item.nome}</Text>
      </View>
      <View style={styles.profileIcons}>
        <FontAwesome5 name='star' size={30} color='yellow' />
        <Text>{item.nota}</Text>
      </View>
    </TouchableOpacity>
  }

  return (
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
  feed: {
    flex: 1,
  },
  profile: {
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePicture: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginTop: 10,
    marginLeft: 6,
  },
  profileName: {
    marginLeft: 10,
    fontSize: 16,
  },
  profileIcons: {
    marginRight: 10,
    alignItems: 'center',
  }
});
