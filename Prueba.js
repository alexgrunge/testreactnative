import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Prueba() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 50,
    borderRadius: '10px',
    backgroundColor: '#000',
    borderWidth: 1, // En React Native se utiliza borderWidth en lugar de border
    borderColor: 'red', // Se define borderColor en lugar de border
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000' // No se aplica color a un contenedor, esto debería aplicarse a Text
  },
  text: {
    color: '#fff'
  }
});
