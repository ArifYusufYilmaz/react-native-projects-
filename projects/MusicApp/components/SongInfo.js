import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import SongAvailableInfo from "./SongAvailableInfo";
export default function SongInfo(props){
    const title = props.data.title;
    const artist = props.data.artist;
    const year = props.data.year;
    const isSoldOut = props.data.isSoldOut;
    const birsey = false;
    const [isAvailable, setIsAvailable] = useState(isSoldOut);
    console.log(isSoldOut);
    return(
        
        <View style={styles.songInfo}>
           <View style={styles.itemsOnTop}>
                 <Text style={styles.title}>{title}</Text>
           </View>
            
            <View style={styles.itemsOnButtom}>
                <Text>{artist}</Text>
                <Text style={styles.year}>{year}</Text>
               
                <View style={styles.songAvailableInfo}>
                    {isAvailable && <SongAvailableInfo   data={isSoldOut}/> }
                </View>
                
                
                
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    songInfo:{
        flex:1,
        margin:15,
        // backgroundColor:'yellow',
        alignItems:"left"
    },
    itemsOnTop:{
        flex:1
    },
    title:{
       
        fontSize:20,
        // backgroundColor:'red',
        fontWeight:'bold',
    }, 
    itemsOnButtom:{
        flex:2,
        flexDirection:"row",
        alignItems:"center",
        // backgroundColor:'green',
    },
    year:{
        marginLeft:10,
    },
    songAvailableInfo:{
        flex:1,
        marginRight:20,
        // backgroundColor:"blue",
        alignItems:"flex-end",
    }

});