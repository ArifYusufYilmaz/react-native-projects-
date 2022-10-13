import React from "react";
import {StyleSheet, View, Text} from 'react-native'; 
import Card from "./card.js";
export default function Page(){
    return(
        <View style={styles.container}>
           <Card title="drogon"></Card>
           <Card title="reagar"></Card>
           <Card title="viseries"></Card>
        </View>
    );
}
const styles = StyleSheet.create({
        container:{
            flex:1,
            width:400,
            backgroundColor: "grey",
            justifyContent: "space-evenly",
            alignItems: "center",
          }, 
         
});