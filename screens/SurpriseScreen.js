import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { getCriadores } from '../services/criadoresService';

export default function SurpriseScreen() {

    const [criadores, setCriadores] = useState([]);
    useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
      const data = await getCriadores();
      setCriadores(data);
    };

    function renderItem({ item }) {
      return <View style={styles.container}>
        <Text style={styles.title}>{item.nome}</Text>
        <Text>{item.texto}</Text>
      </View>
    }

    return (
      <View style={styles.container}>
        <FlatList
        data={criadores}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#dfcdc2',
    },
    title: {
        fontSize: 26,
        marginBottom: 10
    }
});