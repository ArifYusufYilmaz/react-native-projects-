import React from "react";
import { Text, View,Image, StyleSheet } from "react-native";

export default function SongAvatar(props){
    const imageSource = props.data;

    return(
        <View>
            <Image style = {styles.imageFeatures}   source={{ uri : imageSource}}></Image>
            
        </View>
    );
}
const styles = StyleSheet.create({
    imageFeatures:{
        width: 100,
        height: 100,
        borderRadius: 100,
    }
});