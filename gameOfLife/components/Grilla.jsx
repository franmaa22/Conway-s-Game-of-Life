import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Celula from "./Celula";

export default function Grilla(){

    const n = 6;
    const matriz = Array.from({ length: n }, () => Array(n).fill(0));


    return (
        <View style={styles.container}>

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