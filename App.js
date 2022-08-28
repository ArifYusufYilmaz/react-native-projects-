import React ,{useState}from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';

import TodoInput from "./components/TodoInput";
import TodoItem from './components/TodoItem';
import { TouchableOpacity } from 'react-native-web';

const App = () => {

  const [todoItems, setTodoItems] = useState([{text:"Buy groceries", completed:true}, {text: "Make blogpost", completed: false}]);
  
  function addTodoItem(_text){
    setTodoItems([...todoItems,{text:_text, completed:false}]);
  }
  function deleteTodoItem(_index){
    let tempArr = [...todoItems];
    tempArr.splice(_index, 1);
    setTodoItems(tempArr);
  }
  function completeTodoItem(_index){
    let tempArr = [...todoItems];
    tempArr[_index].completed = true;
    setTodoItems(tempArr);
  }
  
  return (
    <View>
       <StatusBar barStyle={"light-content"} backgroundColor={"#212121"}/> 
        <SafeAreaView style={{padding:16}}>
          <Text style={{fontSize:36, color:"#ffffff",  fontWeight:'bold'}}>Todo</Text>
        
        <FlatList
        data={todoItems}
        keyExtractor={(items, index) => index.toString()}
        renderItem={({item, index}) => {
          return(
            <TodoItem
              item={item}
              deleteFunction={() => deleteTodoItem(index)}
              completeFunction={()=> completeTodoItem(index)}
            />
          )
        }}
        />
        <TodoInput onPress={addTodoItem}/>
     </SafeAreaView>
      
    </View>
    
  );
}
export default App;
const styles = StyleSheet.create({
  
});
