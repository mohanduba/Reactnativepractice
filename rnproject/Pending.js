import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Pending = () => {
  return (
    <View style={{marginTop:50,padding:20,marginHorizontal:20,borderWidth:1,borderColor:'rgb(234, 236, 240)',borderRadius:8,backgroundColor:'rgb(255, 255, 255)'}}>
            <Text style={{color:'#979797',fontSize:15}}>Pending Payments</Text>
            <Text style={{fontSize:20}}>$1,200 USD</Text>
            <Text style={{color:'#979797',fontSize:14}}>from 2 projects</Text>
            <View style={{flexDirection:'row',gap:10}}>
                <View style={{flexDirection:'row'}}>
                    <Entypo name='dot-single' size={20} style={{color:'#979797'}}/>
                    <Text style={{color:'#979797',fontSize:14}}>$800 USD</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Entypo name='dot-single' size={20} style={{color:'#979797'}}/>
                    <Text style={{color:'#979797',fontSize:14}}>$400 USD</Text>
                </View>
            </View>
            <View style={{marginVertical:16}}>
            <TouchableOpacity style={{marginBottom:10}}>
                <Text style={{color:'white',backgroundColor:'#2960dd',paddingHorizontal:13,paddingVertical:8,textAlign:'center',borderRadius:32,fontSize:14}}>View Transaction History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}}>
                <Text style={{color:'white',backgroundColor:'#2960dd',paddingHorizontal:13,paddingVertical:8,textAlign:'center',borderRadius:32,fontSize:14}}>View Work Orders</Text>
            </TouchableOpacity>
            </View>
    </View>
  )
}

export default Pending
