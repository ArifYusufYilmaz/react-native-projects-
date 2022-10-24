import React from "react";
import { StyleSheet, Text, View } from "react-native";


import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "../reduxToolkitExample/CounterSlice";


export default function TodoCounter(){

     const count = useSelector(selectCount);
    // const dispatch = useDispatch();
   
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Yapılacaklar</Text>
            <Text style={styles.counter}>{count}</Text>
        </View>
    );
}



const styles=StyleSheet.create({
    container:{
        backgroundColor:"red",
        flexDirection:"row"
    },
    title:{
        
    },
    counter:{
        marginLeft: 15
    }
});