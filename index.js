import React ,{Component} from 'react'
import { AppRegistry,View,Text } from 'react-native';
import App from './App';
import Axios from 'axios';
import { compose } from 'redux';

// class App extends Component{
//     constructor(){
//         super();

//     }
//     componentDidMount(){
//         Axios.get("http://api.openweathermap.org/data/2.5/forecast?lat=24.8607&lon=67.0011&APPID=229b7a7fd3d2932ea2f2a080926bd07d")
//         .then((data)=>{console.log(data)}).then((a)=>{console.log(data)}).catch((error)=>{console.log(error)})
//     }
//     render(){return(
//         <View>
//             <Text>
//                 hi
//             </Text>
//         </View>
//     )}
// }

AppRegistry.registerComponent('FactSumo', () => App);
