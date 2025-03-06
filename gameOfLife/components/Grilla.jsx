import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Celula from "./Celula";

export default function Grilla({jugar}){

    const n = 10;

    const [matriz, setMatriz] = useState(Array.from({ length: n }, () => Array(n).fill(0)));

    function actualizarCelula(i, j) {
        setMatriz(prevMatriz => {
          const nuevaMatriz = prevMatriz.map(fila => [...fila]); 
          nuevaMatriz[i][j] = nuevaMatriz[i][j] === 0 ? 1 : 0;
          return nuevaMatriz;
        });
      }

      function vecinosVivos(i, j, matriz) {
        let counter = 0;
        let n = matriz.length;
    
        for (let vi = -1; vi <= 1; vi++) {
            for (let vj = -1; vj <= 1; vj++) {
                let ni = i + vi;
                let nj = j + vj;
                if ((vi !== 0 || vj !== 0) && ni >= 0 && ni < n && nj >= 0 && nj < n) {
                    if (matriz[ni][nj] === 1) {
                        counter++;
                    }
                }
            }
        }
        
        return counter;
    }
    


    useEffect(() => {
        if (jugar) {
          const intervalo = setInterval(() => {
            let nuevaMatriz = JSON.parse(JSON.stringify(matriz));


            for (let i = 0; i < n ; i++){
                for (let j = 0; j < n ; j ++){
                    const estado = matriz[i][j]
                    const cantidadVecinos = vecinosVivos(i, j, matriz)

                    if(estado === 0 && cantidadVecinos === 3){
                        nuevaMatriz[i][j] = 1
                    }
                    if(estado === 1 && (cantidadVecinos < 2 || cantidadVecinos > 3)){
                        nuevaMatriz[i][j] = 0
                    }
                }
            }
            setMatriz(nuevaMatriz)

          }, 100);
          return () => clearInterval(intervalo);
        }
      }, [jugar, matriz]);


    return (
        <View style={styles.container}>

            {
                matriz.map((fila,i) => (
                    <View key={i} style={{flexDirection:"row"}}>
                        {fila.map((estado, j)=>(
                            <Celula  
                            viva={estado === 1}
                            onPress={()=>{actualizarCelula(i,j)}}
                            key={`${i}-${j}`}/>
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