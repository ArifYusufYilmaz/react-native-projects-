import React from "react";
import {StyleSheet, View, Text, Alert} from 'react-native'; 
import Title from "./title";
import Description from "./description";
import Info from "./info";
import { TouchableOpacity } from "react-native";
export default function Card(props){
    return(
        <View style={styles.container}>
           <View><Title title={props.title}></Title></View>
           <View><Description></Description></View>
           <TouchableOpacity ><Info></Info></TouchableOpacity>
        </View>
    );
}   
const styles = StyleSheet.create({
    container:{
      
       // margin: 10, // dışarıdan boşluk
        //padding: 10, // içeriden boşluk
        borderRadius : 10,
        width:300,
        height:150,
        backgroundColor: "white",
        justifyContent: "space-between",
      },
   
});
