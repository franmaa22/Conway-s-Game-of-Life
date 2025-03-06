import { Pressable, StyleSheet, View } from "react-native";

export default function Celula({viva, onPress}){
    return (
        <View>
            <Pressable onPress={onPress} style={[styles.cell, viva ? {backgroundColor:"black"}:{backgroundColor:"white"}]}></Pressable>
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