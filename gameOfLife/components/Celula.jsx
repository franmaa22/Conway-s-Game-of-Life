import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function Celula(){
    const [viva, setViva] = useState(false);

    return (
        <View>
            <Pressable onPress={() => {setViva(!viva)}} style={[styles.cell, viva ? {backgroundColor:"black"}:{backgroundColor:"white"}]}></Pressable>
        </View> 
    )
}

const styles = StyleSheet.create({
    cell : {
        width:50,
        height: 50,
        borderWidth:1,
        borderColor: "black"
    }
})