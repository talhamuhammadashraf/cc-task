import React from 'react'
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native'
import Img from '../assets/restaraunt.jpg'
import Direction from '../assets/icon.svg'
const Card = (props) => {
    const {height,data} = props
    return(
    <TouchableOpacity>
        <View
        style={{height:height*0.25,width:"100%",flexDirection:"row",justifyContent:"space-between",borderBottomColor:"#8e8484",borderBottomWidth:1}}
        >

        <View style={{backgroundColor:"yellow",width:"30%",margin:7.5}}>
        <Image source={Img} style={{width:"100%",height:"100%"}}/>
        </View>

        <View style={{width:"60%",margin:5}}>
        
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontSize:20,margin:10,fontWeight:"bold"}}>{data.name||"Name"}</Text>
        <Image source={Direction} style={{width:30,height:30}}/>
        </View>
        
        <View style={{flexDirection:"row",justifyContent:"space-between",width:"80%"}}>
        <Text style={{fontSize:15,margin:10,}}>{data.location || "Location"}</Text>
        <Text style={{fontSize:15,margin:10,}}>{data.type || "Type"}</Text>
        </View>
        
        <View style={{flexDirection:"row",justifyContent:"space-between",width:"80%"}}>
        <Text style={{fontSize:15,margin:10}}>{data.rating || "Rating"}</Text>
        <Text style={{fontSize:15,margin:10,}}>{data.reviews || "Reviews"}</Text>
        </View>
        
        </View>

        </View>
    </TouchableOpacity>
)}
const Styles = StyleSheet.create({
})

export default Card