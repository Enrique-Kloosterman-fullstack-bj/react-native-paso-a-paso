import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>Una ves mas has entrado al mundo del survival horror! Buena suerte!!!</Text>
        <Text style={styles.text}>La necesitaras!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                       // ocupa todo el espacio disponible
    backgroundColor: '#4d4848',     // color de fondo
    alignItems: 'center',          // alineación horizontal
    justifyContent: 'center',      // alineación vertical
    padding: 20,                   // Espaciado interno
  },
  card: {
    backgroundColor: '#f9f9f9',  // color de fondo
    padding: 20,                   //Espaciado interno
    borderRadius: 10,              // bordes redondeados
    shadowColor: '#000',         // Sombra (ios)
    elevation: 5,                  // Sombra (android)
  },
  text:{
    color: 'navy',                // color de la fuente
    fontSize: 20,                 // tamaño de la fuente
    fontWeight: 'bold',           // grosor de la fuente
    textAlign: 'center',          // alineación del texto
  }
});
