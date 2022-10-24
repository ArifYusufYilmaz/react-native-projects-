import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function TodoUnit(props){
    return(
        <View style={styles.container}>
             <Text style={styles.data}>{props.data}</Text> 
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        backgroundColor : "yellow",
        borderRadius:10,
        marginTop:5,
    },
    data:{
        
        fontSize:20,
    }
});