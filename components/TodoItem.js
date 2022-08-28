import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function TodoItem(props){


let style = props.item.completed ? {
    textDecorationLine: 'line-through'
} : {
    textDecorationLine: 'none',
    backgroundColor:'#74F31F',

}

    return(
        <TouchableOpacity
        onPress={()=> props.completeFunction()}
         style={{paddingVertical: 8, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18}}>{props.item.text}</Text>
            <TouchableOpacity
            style={{padding: 8, backgroundColor: '#212121', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}
                onPress={()=> props.deleteFunction()}>
                <Text style={{color: '#fafafa'}}>X</Text>
            </TouchableOpacity>
            
        </TouchableOpacity>
    );
}