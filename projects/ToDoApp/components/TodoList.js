import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-web";
import { useSelector } from "react-redux";
import { selectTodo } from "../reduxToolkitExample/todoItemSlice";
import TodoUnit from "./TodoUnit";

export default function TodoList(){
    const todoItems = useSelector(selectTodo);
    const renderTodos = ({item})=> <TodoUnit data={item}></TodoUnit>;
    return(
        <View style={styles.container}>
             <FlatList keyExtractor={(item,index) => index.toString()}
                         data={todoItems} renderItem={renderTodos}></FlatList> 
        </View> 
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10 
    },  
    
});