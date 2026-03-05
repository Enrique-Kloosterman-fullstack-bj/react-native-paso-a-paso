import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Alert } from 'react-native';
import { styles } from './styles';

import React  from 'react'

const HomeScreen = () => {
    const [abierta, setAbierta] = useState(false);
      return (
        <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.text}>{abierta ? 'Las puertas estan abiertas!' : 'Una ves mas has entrado al mundo del survival horror! Buena suerte!! La necesitaras!'}</Text>
            <Text style={styles.text}></Text>
            <Pressable onPress={() => setAbierta(!abierta)}>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOpcJGRYDf4CAmlc3utKLOBBfCzFsjXOOWQ&s'}} style={styles.door} />
            </Pressable>
        </View>
        </View>
    );
}

export default HomeScreen



