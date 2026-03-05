import { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { styles } from './styles';

import React  from 'react'
import SurvivalCard from '../survivalCrad/SurvivalCard';

interface HomeProps {
  nombrePersonaje: string;
  dificultad: 'Facil' | 'Medio' | 'Dificil';
  puntosVida?: number;
}

const manejarPressionarPuerta  = (objeto: string) => {
  Alert.alert(
    'Interacción',`Has abierto la ${objeto}`
  )
}

const HomeScreen = ({ nombrePersonaje, dificultad, puntosVida}: HomeProps) => {
    const [abierta, setAbierta] = useState(false);
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Bienvenido {nombrePersonaje}</Text>
          <Text style={styles.text}>Dificultad: {dificultad}</Text>
          <Text style={styles.text}>Puntos de vida: {puntosVida}</Text>
          <SurvivalCard mensaje="Una vez más has entrado al mundo del survival horror..." alPresionar={manejarPressionarPuerta}/>
        </View>
    );
}

export default HomeScreen



