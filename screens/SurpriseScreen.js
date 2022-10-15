import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';

export default function SurpriseScreen() {

    const [backend, setbackend] = useState([]);

    useEffect(function () {                          //Acesso ao BackEnd
        async function getData() {
            const response = await fetch('https://raw.githubusercontent.com/Willwillame/BackEndMeIndique/main/backend.json');
            const backend = await response.json();
            setbackend(backend);
        }
        getData();
    }, [])

    function renderItem({ item }) {
        return <View style={styles.container}>
            <Text style={styles.title}>{item.nome}</Text>
            <Text>{item.texto}</Text>
        </View>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={backend}
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