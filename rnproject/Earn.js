import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View,Text, Image } from 'react-native'

const Earn = () => {
  return (
   <View style={{marginTop:30,marginHorizontal:20,borderRadius:10}}>
        <LinearGradient  start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}  colors={["#fff","#d4e1fe" ]} style={{borderRadius:10}}>
        <View style={{padding:20}}>
             <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                  <View style={{flexDirection:'column'}}>
                      <Text style={{fontSize:14}}>Total Earnings</Text>
                      <Text style={{fontSize:22}}>$ 24,000</Text>
                  </View>
                  <View style={{backgroundColor:'#f8f9fa',padding:8,borderRadius:50}}>
                  <Image source={require('../rnproject/assets/earn.jpg')} style={{width:35,height:35}}/>
                  </View>
             </View>
             <View style={{borderTopWidth:1,marginTop:25,borderColor:'#e4e4e4'}}></View>
             <View style={{flexDirection:'row',gap:3,marginVertical:16}}>
                    <Text style={{fontSize:14,color:'green'}}>8.5%</Text>
                    <Text style={{fontSize:14,color:'#96a0b5'}}>New Sessions Today</Text>
             </View>
             </View>
        </LinearGradient>
   </View>
  )
}

export default Earn
