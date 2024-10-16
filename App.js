import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola Mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                // Ocupa toda la pantalla
    backgroundColor: '#fff',// Fondo blanco
    alignItems: 'center',   // Centra horizontalmente
    justifyContent: 'center',// Centra verticalmente
  },
  text: {
    fontSize: 24,           // Tamaño de fuente grande
    fontWeight: 'bold',     // Texto en negrita
    color: '#333',          // Color de texto gris oscuro
  },
});
