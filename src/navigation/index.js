import {createStackNavigator} from 'react-navigation'
// import {A,B} from '../App'
import React,{Component} from 'react'
import {View,Text} from 'react-native';
import Restraunt from '../screens/restraunt'
import Weather from '../screens/weather'
import Splash from '../screens/splash';

// export const A = (props) => (
//   <View>
//     <Text onPress={()=>props.navigation.navigate("other")}>
//       hello this is a
//     </Text>
//   </View>
// )
// export const B = (props) => (
//   <View>
//     <Text onPress={()=>props.navigation.navigate("other")}>
//       hello this is b
//     </Text>
//   </View>
// )


const AppNavigator = createStackNavigator({
    weather:{
      screen : Weather
    },
    restraunt :{
      screen: Restraunt
    },
    splash : {
      screen : Splash
    }
    },{
      initialRouteName:"splash",
      headerMode:"none"
    });

    export default AppNavigator