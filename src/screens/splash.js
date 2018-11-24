import React ,{Component} from 'react';
import {View,Image,Text,TouchableOpacity,Dimensions,ScrollView} from 'react-native';
const {height,width} = Dimensions.get('window')
class Splash extends Component{
    constructor(){
        super();
        this.state={
            height:height > width ? height : width,
            width:width
        }
    }
    componentWillMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {console.log(position,"position")
                this.props.navigation.navigate("weather",{
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                  })
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000,
                 },
          );
    }
    render(){
        const {width,height} =this.state    
        return(
            <ScrollView onLayout={(event)=>{
                this.setState({
                    width: event.nativeEvent.layout.width,
            })}}
            style={{
                backgroundColor:"#FCDAB0",
                flex:1,
            }}
            contentContainerStyle={{
                alignItems:"center",
                justifyContent:"center"
            }}
            >

            <Text
            style={{color:"#5B4224",fontSize:30}}
            >
                App
            </Text>
            </ScrollView>
        )
    }
}
export default Splash