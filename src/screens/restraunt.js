import React ,{Component} from 'react';
import {View,Image,Text,TouchableOpacity,Dimensions,ScrollView} from 'react-native';
import axios from 'axios'
const {height,width} = Dimensions.get('window')
class Restraunt extends Component{
    constructor(){
        super();
        this.state={
            height:height > width ? height : width,
            width:width
        }
        this.getWeather = this.getWeather.bind(this)
    }
    componentWillMount(){
        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //       this.setState(
        //           (prevState)=>({
        //         latitude: position.coords.latitude,
        //         longitude: position.coords.longitude,
        //         error: null                      
        //           },()=>{this.getWeather()})
        //     //       {
        //     //     latitude: position.coords.latitude,
        //     //     longitude: position.coords.longitude,
        //     //     error: null,
        //     //   }
        //     );
        //     },
        //     (error) => this.setState({ error: error.message }),
        //     { enableHighAccuracy: true, timeout: 20000,
        //         //  maximumAge: 1000
        //          },
        //   );
    }
    getWeather(){console.log("called")
        axios.get(
            "api.openweathermap.org/data/2.5/forecast?lat=24.8607&lon=67.0011&APPID=229b7a7fd3d2932ea2f2a080926bd07d"
            // `api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&APPID=229b7a7fd3d2932ea2f2a080926bd07d`
          ).then((data)=>{
              console.log(data,"this is response feom api")
          }).catch((error)=>console.log(error))

    }
    render(){
        const {width,height} =this.state    
        console.log(this.state,"@@@@@")
        return(
            <ScrollView onLayout={(event)=>{
                this.setState({
                    width: event.nativeEvent.layout.width,
            })}}
            >
            <Text>
                this is restraunt
            </Text>
            </ScrollView>
        )
    }
}
export default Restraunt