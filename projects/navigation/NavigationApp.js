import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
// Stack.Group güzelmiş.!
function HomeScreen(props){
    return(
        <View>
            <Text>
                HomeScreen
            </Text>
            <Button title="click to go to details screen" onPress={()=> props.navigation.navigate("Details", {itemId:5, otherParam:"cr7",})}></Button>
            <Button title="go back.." onPress={()=>props.navigation.goBack()}></Button>
        </View>
    );
}
function DetailsScreen(props){
    const {itemId, otherParam} = props.route.params; 
    return(
        <View>
            <Text>
                Details Screen
            </Text>
            <Text>itemId should be json serializable {JSON.stringify(itemId)} done</Text>
            <Text>{JSON.stringify(otherParam)}</Text>
            <Button title="click to go to home screen" onPress={()=>props.navigation.navigate('Home') }>
                
            </Button>
            <Button title="go back.." onPress={()=>props.navigation.goBack()}> </Button>
            <Button title= "go back to first screen in stack" onPress={()=> props.navigation.popToTop()}></Button>
           
        </View>
    );
}
const Tab = createBottomTabNavigator();
function SideScreens(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="FirstBT" component={FirstBottomTab}></Tab.Screen>
            <Tab.Screen name="SecondBT" component={SecondBottomTab}></Tab.Screen>
           
        </Tab.Navigator>
    );
} 
function FirstBottomTab(){
    return(
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name = "Home" component = {HomeScreen} ></Stack.Screen>
                    <Stack.Screen name ="Details" component = {DetailsScreen} options={{title:"woww"}}></Stack.Screen>
                   
                </Stack.Navigator> 
    );
}
function SecondBottomTab(){
    return(
        <View>
            <Text>hello second page</Text>
        </View>
    );
}




const Stack = createNativeStackNavigator();


export default function NavigationApp(){
    return(
            <NavigationContainer>
                <SideScreens></SideScreens>
            </NavigationContainer>
    );
}