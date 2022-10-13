import React, { useState } from "react";
import { View, Text , Button, SafeAreaView,TouchableOpacity} from "react-native";
export default function StateCounter(){
    const [counter, setCounter] = useState(0);
    function updateCounter(){
        setCounter(counter + 1);
    }
    return(
        <View>
            <View> <Text> hi state! </Text>
            <Text> counter = {counter} </Text>
            </View>
           <TouchableOpacity onPress={updateCounter}><Text>click me</Text></TouchableOpacity>
        </View> 
    );
}