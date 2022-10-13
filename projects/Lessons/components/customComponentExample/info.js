import React from "react";
import {StyleSheet, View, Text} from 'react-native'; 
export default function Page(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>hi info!</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "blue",
        alignItems: "center",
        borderRadius:5,
    },  
    text:{
        flex:1,
        fontSize: 25,
    }
});