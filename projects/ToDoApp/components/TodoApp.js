import React from "react";
import { View,Text, StyleSheet } from "react-native";
import TodoCounter from "./TodoCounter";
import TodoList from "./TodoList";
import TodoSave from "./TodoSave";
export default function TodoApp(){
    return(
       
        <View style={styles.container}>
            <TodoCounter style={styles.todoCounterStyle}></TodoCounter>
            <TodoList style={styles.todoListStyle} ></TodoList>
            <TodoSave style={styles.todoSaveStyle} ></TodoSave>
        </View>
       
    );
}
const styles = StyleSheet.create({
    container:{
        margin:10,
        flex:1
    },
    todoCounterStyle:{
    },
    todoListStyle:{
        backgroundColor:"yellow",
        alignItems:"bottom"
    },
    todoSaveStyle:{

    }
});