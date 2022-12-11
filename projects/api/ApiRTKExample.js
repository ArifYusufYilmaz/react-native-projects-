import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-web";
import { useGetOneUserQuery } from "./apiSlice";

export default function ApiRTKExample(){
    // const renderUsers = ({item})=> <TodoUnit data={item}></TodoUnit>;

    const{
        data: data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetOneUserQuery()

    let content;
    if(isLoading){
        content = <Text>Loading...</Text>
    }else if(isSuccess){
        console.log(data)
        //  content = data.data.map(item => {console.log(item)});
        
    }else if(isError){
        content = <Text>{error}</Text>
    }
    
    return(
        <View>
            
            <Text>hello api rtk example</Text>
            {/* <FlatList data={content} renderItem={content}>
            </FlatList> */}
            
        </View>
    );
}


// const renderTodos = ({item})=> <TodoUnit data={item}></TodoUnit>;
    
//     return(
//         <View style={styles.container}>
//              <FlatList keyExtractor={(item,index) => index.toString()}
//                          data={todoItems} renderItem={renderTodos}></FlatList> 
//         </View> 
//     );