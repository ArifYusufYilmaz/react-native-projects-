import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { FlatList } from "react-native-web";
import TodoUnit from "../ToDoApp/components/TodoUnit";
import UseFetch from "./useFetch";

export default function ApiUsageExample(){
    const renderUsers = ({item})=> <Text> hellloooo api usage Example {JSON.stringify(item)}</Text>;
    const {loading, data, error} = UseFetch("http://localhost:8080/api/v1/users");
    const [users] = [data.data];
    console.log(users)
    if(loading){
       
        return <ActivityIndicator></ActivityIndicator>
    }
    if(error){
        
        return <Text>errorrrr</Text>
    }
    
    return(
        <View>
            <Text> hellloooo api usage Example</Text>
            <FlatList keyExtractor={(item,index) => index} data={users} renderItem={renderUsers}></FlatList>                      
        </View>
    );
}