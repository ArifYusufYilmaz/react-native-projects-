import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SongAvatar from "./SongAvatar";
import SongInfo from "./SongInfo";

export default function MusicCard(props){
    const needsSongAvatar = props.data.imageUrl;
    const needsSongInfo ={title : props.data.title, artist : props.data.artist, year: props.data.year, isSoldOut: props.data.isSoldOut};
    return(
        <View style={styles.avatar}>
            <SongAvatar data={needsSongAvatar} />
            <SongInfo data={needsSongInfo}/>
        </View>
    );
}
 const styles = StyleSheet.create({
    avatar:{
        flex: 1,
        flexDirection:"row",
        // backgroundColor:"orange",
        marginBottom:5,
    }
 });
    