import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "../reduxToolkitExample/CounterSlice";
import { save, selectTodo } from "../reduxToolkitExample/todoItemSlice";

import TodoUnit from "./TodoUnit";
export default function TodoSave(){

    const todoCount = useSelector(selectCount);
    const dispatch = useDispatch();

    const todoItems = useSelector(selectTodo);
    

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([])

    const handleTodo=(value)=>{
         setTodo(value);
    }
    const saveTodo=()=>{
        if(todo === ""){
            return
        }
        setTodoList(oldList=>[...oldList, todo]);
        setTodo("");
        dispatch(increment());
        dispatch(save(todo));
        // <TodoUnit data={todo}></TodoUnit>
    }
    return(
        <View>
           <TextInput value={todo} placeholder="Yapılacak..." onChangeText={handleTodo}></TextInput>
           <Text>{todoCount}</Text>
           <Button onPress={saveTodo}>Kaydet</Button>
        </View>
    );
}