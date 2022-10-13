import React from "react";
import { View , Text, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-web";
export default function Flex(){
    return(
    
        <View style={styles.container}>
            <View style={styles.box1}>asda1</View>
            <View style={styles.box2}>asda2</View>
            <View style={styles.box3}>asdda3</View>
            <View style={styles.box4}>ads4</View>
        </View>
    );
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
       justifyContent:"flex-end",
       alignItems:"center", 
    },
    box1:{
        width:80,
        height:80,
       
        backgroundColor: 'yellow',
    },
    box2:{
        width:80,
        height:80,
       
        backgroundColor: 'red',
    },
    box3:{
        width:80,
        height:80,
       
        backgroundColor: 'green',
    },
    box4:{
        width:80,
        height:80,
       
        backgroundColor: 'blue',
    },

});