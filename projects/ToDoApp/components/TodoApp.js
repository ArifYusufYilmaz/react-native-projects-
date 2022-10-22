import React from "react";
import { View,Text } from "react-native";
import TodoCounter from "./TodoCounter";
import TodoList from "./TodoList";
import TodoSave from "./TodoSave";
export default function TodoApp(){
    return(
       
        <View>
            <TodoCounter></TodoCounter>
            <TodoList></TodoList>
            <TodoSave></TodoSave>
        </View>
       
    );
}