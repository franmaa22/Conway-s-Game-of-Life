import { StatusBar } from 'expo-status-bar';
import { DeviceEventEmitter, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import Grilla from './components/Grilla';

export default function App() {

  const [jugar, setJugar] = useState(false);
  const divisores = [7, 10, 14, 25]; // Valores válidos
  const [dimension, setDimension] = useState(divisores[0]);

  return (
    <View style={styles.container}>
      <Text>Game of Life</Text>
      <Grilla jugar={jugar} n={dimension}/>
      <TouchableOpacity onPress={()=> {setJugar(!jugar)}} style={styles.button}>
        <Text style={styles.textButton}>{jugar ? "STOP" : "START"}</Text>
      </TouchableOpacity>
      <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 18 }}>Selecciona el tamaño de la matriz:</Text>
      <Picker
        selectedValue={dimension}
        onValueChange={(valor) => {
          setDimension(valor);
        }}
        style={{ height: 50, width: 200 }}
      >
        {divisores.map((valor) => (
          <Picker.Item key={valor} label={`${valor} x ${valor}`} value={String(valor)} />
        ))}
      </Picker>
    </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button : {
    backgroundColor:"grey",
    paddingHorizontal:50,
    paddingVertical:10,
    marginTop: 20,
    borderRadius: 5,
  },
  textButton: {
    fontWeight: "bold"
  },
  pantalla : {
    width : 350,
    height: 350,
    backgroundColor:"red"
  }
});
