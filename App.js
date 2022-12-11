import React ,{useState}from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import Flex from "./projects/Lessons/components/flex";
import Page from "./projects/Lessons/components/customComponentExample/page";
import TodoInput from "./projects/Lessons/components/TodoInput";
import TodoItem from './projects/Lessons/components/TodoItem';
import { TouchableOpacity } from 'react-native-web';

import Card from "./projects/Lessons/components/customComponentExample/card";
import MusicList from './projects/MusicApp/components/MusicList';
import TodoApp from './projects/ToDoApp/components/TodoApp';

import store from "./projects/ToDoApp/reduxToolkitExample/store"
import {Provider} from 'react-redux';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { ApiSlice } from './projects/api/apiSlice';
const App = () => {

  return (
    // <ApiProvider api = {ApiSlice}>
     <Provider store = {store}> 
       {/* <MusicList/>  */}
      <TodoApp/>
     </Provider>
  //  </ApiProvider>
  );
}
// flex: bulunduğun yer içinde kaplayabildiğin alan kadar yer kapla
export default App;


const styles = StyleSheet.create({
  container:{
      flex:1,
     // margin: 10, // dışarıdan boşluk
      //padding: 10, // içeriden boşluk
      //borderRadius : 5,
      alignItems: "center",
    },
  
});