import { Pressable, StyleSheet, View, Text} from "react-native";

export default function Celula({viva, onPress, tamaño}){
    return (
        <View>
            <Pressable onPress={onPress} style={[styles.cell, viva ? {backgroundColor:"black"}:{backgroundColor:"white"},{height:tamaño, width:tamaño}]}></Pressable>
            
        </View> 
    )
}

const styles = StyleSheet.create({
    cell : {
        borderWidth:1,
        borderColor: "black"
    }
})