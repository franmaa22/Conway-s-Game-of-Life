import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Celula from "./Celula";

export default function Grilla({ jugar, n }) {
    const [matriz, setMatriz] = useState([]);

    n = parseInt(n);

    // Crear la matriz cuando cambia n
    useEffect(() => {
        setMatriz(Array.from({ length: n }, () => Array(n).fill(0)));
    }, [n]);

    function actualizarCelula(i, j) {
        setMatriz(prevMatriz => {
            return prevMatriz.map((fila, filaIndex) =>
                filaIndex === i ? fila.map((cel, colIndex) => (colIndex === j ? (cel === 0 ? 1 : 0) : cel)) : fila
            );
        });
    }

    function vecinosVivos(i, j, matriz) {
        let counter = 0;
        let size = matriz.length;

        for (let vi = -1; vi <= 1; vi++) {
            for (let vj = -1; vj <= 1; vj++) {
                if (vi === 0 && vj === 0) continue;

                let ni = (i + vi + size) % size;
                let nj = (j + vj + size) % size;

                if (matriz[ni][nj] === 1) {
                    counter++;
                }
            }
        }
        return counter;
    }

    useEffect(() => {
        if (!jugar) return;

        const intervalo = setInterval(() => {
            setMatriz(prevMatriz => {
                return prevMatriz.map((fila, i) =>
                    fila.map((estado, j) => {
                        const cantidadVecinos = vecinosVivos(i, j, prevMatriz);
                        if (estado === 0 && cantidadVecinos === 3) return 1;
                        if (estado === 1 && (cantidadVecinos < 2 || cantidadVecinos > 3)) return 0;
                        return estado;
                    })
                );
            });
        }, 100);

        return () => clearInterval(intervalo);
    }, [jugar]);

    return (
        <View style={styles.container}>
            {matriz.map((fila, i) => (
                <View key={i} style={{ flexDirection: "row" }}>
                    {fila.map((estado, j) => (
                        <Celula
                            viva={estado === 1}
                            onPress={() => actualizarCelula(i, j)}
                            tamaño={350 / matriz.length}
                            key={`${i}-${j}`}
                        />
                    ))}
                </View>
            ))}
            <Text>{n}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
    },
});
