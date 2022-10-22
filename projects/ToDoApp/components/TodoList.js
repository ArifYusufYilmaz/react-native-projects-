import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-web";
import TodoUnit from "./TodoUnit";

export default function TodoList(){
    return(
        <View>
            <TodoUnit></TodoUnit>
        </View>
    );
}