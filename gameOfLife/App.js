import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Grilla from './components/Grilla';

export default function App() {

  const [jugar, setJugar] = useState(false);

  return (
    <View style={styles.container}>

      <Grilla jugar={jugar}/>
      <TouchableOpacity onPress={()=> {setJugar(!jugar)}} style={styles.button}>
        <Text style={styles.textButton}>{jugar ? "STOP" : "START"}</Text>
      </TouchableOpacity>

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
  }
});
