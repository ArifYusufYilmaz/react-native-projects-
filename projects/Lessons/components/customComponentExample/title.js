import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
export default function Title(props){
    return(
        <View>
            <Text> Hello {props.title}!</Text>
        </View>
    );
}