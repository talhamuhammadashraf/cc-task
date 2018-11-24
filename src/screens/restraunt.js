import React ,{Component} from 'react';
import {View,Image,Text,TouchableOpacity,Dimensions,ScrollView,StyleSheet} from 'react-native';
import Card from '../components/card'
const {height,width} = Dimensions.get('window')
class Restraunt extends Component{
    constructor(){
        super();
        this.state={
            height:height > width ? height : width,
            width:width,
            data:[
                {name:"Zafran",location:"Dubai",type:"Indian",rating:3.8,review:96},
                {name:"Zafran",location:"Dubai",type:"Indian",rating:3.8,review:96},
                {name:"Zafran",location:"Dubai",type:"Indian",rating:3.8,review:96},
                {name:"Zafran",location:"Dubai",type:"Indian",rating:3.8,review:96},
                {name:"Zafran",location:"Dubai",type:"Indian",rating:3.8,review:96}
            ]
        }
    }
    componentWillMount(){
    }
    render(){
        const {width,height} =this.state    
        return(
            <ScrollView onLayout={(event) => {
                this.setState({
                    width: event.nativeEvent.layout.width,
                })
            }}
            >
                <View
                    style={styles.headerContainer}
                >
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.headerText}>
                            {"<"}</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerText}
                    >Nearby Restraunt</Text>
                    <Text></Text>
                </View>
                <View>{
                    this.state.data.map((data) =>
                        <Card height={height} data={data} />
                    )
                }
                </View>
            </ScrollView>
        )
    }
}
export default Restraunt

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#4A90E2", height: 30, flexDirection: "row", justifyContent: "space-between"
    },
    headerText: { color: "white", fontSize: 18, marginHorizontal: 8 }
})