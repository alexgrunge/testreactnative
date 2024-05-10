import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Prueba from './Prueba';




export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Prueba/> 
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343E46',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000'
  },

  text:{
    color: '#000'
  }
});
