import React from "react";
const data = [{id:0, name:'cafe', isFavourite:true},
{id:2, name:'cafe', isFavourite:false},
{id:3, name:'kafka', isFavourite:true},
{id:4, name:'mcdonalds', isFavourite:false},
{id:5, name:'burger', isFavourite:true},
{id:6, name:'hdIskender', isFavourite:false}]

export default function StateSwitchExample(){

    const [,, veri] =  data; 

    return(
    <View>
        <Text>
           veriler:  {veri}
        </Text>
    </View>
);
}