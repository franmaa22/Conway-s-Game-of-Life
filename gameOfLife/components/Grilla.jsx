import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Celula from "./Celula";

export default function Grilla({jugar}){

    const [iteracion, setIteracion] = useState(0);
    const n = 7;
    const matriz = Array.from({ length: n }, () => Array(n).fill(0));

    function reglasDelJuego(){
        const anterior = matriz;

    }


    useEffect(() => {
        console.log(matriz);
        if (jugar) {
          const intervalo = setInterval(() => {
            setIteracion(prev => prev + 1);
          }, 1000);
          return () => clearInterval(intervalo);
        }
      }, [jugar]);


    return (
        <View style={styles.container}>
            <Text>{iteracion}</Text>

            {
                matriz.map((fila,i) => (
                    <View key={i} style={{flexDirection:"row"}}>
                        {fila.map((_, j)=>(
                            <Celula key={`${i}-${j}`}/>
                        ))}
                    </View>
                ))
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    }

})