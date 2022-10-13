import React from "react";
import { View , Text} from "react-native";
import { FlatList } from "react-native-web";

import Music_data from "../music-data.json";
import MusicCard from "./MusicCard";

export default function MusicList(){
    const renderSong = ({item})=> <MusicCard data={item}></MusicCard>

 return(
    <View >
       <FlatList keyExtractor = {item => item.id} data = {Music_data} renderItem={renderSong}></FlatList>
    </View>
 );
}