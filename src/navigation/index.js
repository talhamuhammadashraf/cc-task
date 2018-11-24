import {createStackNavigator} from 'react-navigation'
import React,{Component} from 'react'
import {View,Text} from 'react-native';
import Restraunt from '../screens/restraunt'
import Weather from '../screens/weather'
import Splash from '../screens/splash';

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