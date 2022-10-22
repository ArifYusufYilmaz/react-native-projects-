import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function TodoUnit(props){
    return(
        <View style={styles.container}>
            {/* <Text>{props.data.todo}</Text> */}
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        backgroundColor : "yellow"
    }
});