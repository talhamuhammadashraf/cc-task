import React ,{Component} from 'react';
import {View,Text,Dimensions,ScrollView,TouchableOpacity,Image} from 'react-native'
import Sun from '../assets/sun.png'
const {height,width} = Dimensions.get('window')

class Weather extends Component{
    constructor(props){
        super(props)
        this.state={
            height:height > width ? height : width,
            width:width,
            longitude:props.navigation.getParam("longitude") || "67.0311",
            latitude:props.navigation.getParam("latitude") || "24.8668"
        }
    }
    componentDidMount(){
        const {latitude,longitude} = this.state
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=229b7a7fd3d2932ea2f2a080926bd07d&mode=json`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                name:data.name,
                description:data.weather[0].description,
                day:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()],
                temperature:(data.main.temp-273).toFixed(0),
                visibility:data.visibility,
                humidity:data.main.humidity,
                wind:data.wind.speed

            })
        })
    }

    render(){
        const {width,height,name,description,day,temperature,visibility,humidity,wind} =this.state   
        return(
            <ScrollView onLayout={(event) => {
                this.setState({
                    width: event.nativeEvent.layout.width,
                })
            }}
            >
                <View style={{
                    backgroundColor: "#FCDAB0",
                    height: height * 0.7
                }}>
                    <View
                        style={{ flexDirection: "row", justifyContent: "space-between", height: "12%" }}
                    >
                        <Text
                            style={{ color: "#5B4224", margin: 10, fontSize: 20, fontWeight: "bold" }}
                        >{name || "CityName"}</Text>
                        <TouchableOpacity>
                            <View style={{
                                width: width * 0.5,
                                backgroundColor: "#CDA16A",
                                borderRadius: 20,
                                height: 30,
                                margin: 15
                            }}>
                                <Text style={{ color: "white", textAlign: "center", alignSelf: "center", margin: 3 }}>
                                    POPULAR RESTRAUNTS
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View
                    >
                        <Text style={{ color: "#A68155", fontSize: 16, marginLeft: 15 }}>
                            {day || "Day"}
                        </Text>
                        <Text style={{ color: "#A68155", fontSize: 14, marginLeft: 15 }}>
                            {description || "Description"}
                        </Text>
                    </View>
                    <View style={{
                        height: "50%",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <Image source={Sun} style={{ height: 150, width: 150, margin: 10 }} />
                        <Text style={{ fontSize: 80, fontWeight: "bold", color: "#5B4224", margin: 30 }}>
                            {temperature || "Temperature"}
                        </Text>
                    </View>
                    <View style={{
                        // height:"50%",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <Text style={{ fontSize: 25, color: "#5B4224", marginHorizontal: 20, fontWeight: "bold" }}>
                            {visibility || "Visibility"}
                        </Text>
                        <Text style={{ fontSize: 25, color: "#5B4224", marginHorizontal: 20, fontWeight: "bold" }}>
                            {humidity || "Humidity"}
                        </Text>
                        <Text style={{ fontSize: 25, color: "#5B4224", marginHorizontal: 20, fontWeight: "bold" }}>
                            {wind || "Wind"}
                        </Text>

                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <Text style={{ fontSize: 20, color: "#5B4224", marginHorizontal: 15 }}>
                            Visibility
                        </Text>
                        <Text style={{ fontSize: 20, color: "#5B4224", marginHorizontal: 15 }}>
                            Humidity
                        </Text>
                        <Text style={{ fontSize: 20, color: "#5B4224", marginHorizontal: 15 }}>
                            Wind
                        </Text>

                    </View>

                </View>
            </ScrollView>
        )
    }
}
export default Weather