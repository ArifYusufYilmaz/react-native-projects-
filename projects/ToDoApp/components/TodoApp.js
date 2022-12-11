import React from "react";
import { View,Text, StyleSheet } from "react-native";
import TodoCounter from "./TodoCounter";
import TodoList from "./TodoList";
import TodoSave from "./TodoSave";
import ApiUsageExample from "../../api/ApiUsageExample";
import ApiRTKExample from "../../api/apiRTKExample";
import NavigationApp from "../../navigation/NavigationApp";


export default function TodoApp(){
    return(
       
        <View style={styles.container}>
            <Text>hello</Text>
            {/* <TodoCounter style={styles.todoCounterStyle}></TodoCounter> 
            <TodoList style={styles.todoListStyle} ></TodoList>
             <TodoSave style={styles.todoSaveStyle} ></TodoSave> */}
            {/* <ApiUsageExample /> */}
             {/* <ApiRTKExample/> */}
             <NavigationApp></NavigationApp>
            <Text>hello</Text>
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
        alignItems:"bottom"
    },
    todoSaveStyle:{

    }
});