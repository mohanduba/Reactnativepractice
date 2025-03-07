import React from 'react'
import { Image, ScrollView, StatusBar } from 'react-native'
import { StyleSheet } from 'react-native';
import { Text,View } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";

const Prjlist = () => {
  return (
    <ScrollView style={[styles.list]}>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:16}}>
        <Text style={{fontSize:24}}>Project List</Text>
        <Text style={{fontSize:16,color:'#1675e0'}}>View all</Text>
        </View>
        <View style={{borderWidth:1,margin:0,paddingVertical:20,borderColor:'#e6e9eb',borderRadius:10}}>
            <View style={{flexDirection:'row',gap:10,paddingHorizontal:5}}>
                <Image source={require('./assets/circle.jpg')} style={{borderRadius:5}}/>
                <View>
                    <Text style={{fontSize:16,fontWeight:500}}>Net Banking App</Text>
                    <Text style={{fontSize:12,color:'#86909c'}}>Client:Jordan</Text>
                </View>
            </View>
            <View style={{alignItems:'flex-end',paddingHorizontal:10}}>
                <Text style={{color:'#066',backgroundColor:'#0066661a',paddingHorizontal:16,paddingVertical:8,borderRadius:24}}>7 Days Left</Text>
            </View>
            <View style={{paddingHorizontal:10,borderBottomWidth:1,borderColor:'#e6e9eb'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:16}}>
                <Text style={{color:'#86909c'}}>10 Oct,2024</Text>
                <Text style={{color:'red'}}>15 Nov,2024</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../earning/assets/glry.jpg')} style={{borderRadius:50,width:25,height:25}}/>
                    <Image source={require('../earning/assets/glry2.jpg')} style={{borderRadius:50,width:25,height:25}}/>
                    <Image source={require('../earning/assets/glry3.jpg')} style={{borderRadius:50,width:25,height:25}}/>
                    <Image source={require('../earning/assets/glry4.jpg')} style={{borderRadius:50,width:25,height:25}}/>
                    <Text style={{fontSize:12,paddingVertical:3,paddingHorizontal:5,backgroundColor:'#e6e9eb',borderRadius:50,width:25,height:25}}>+2</Text>
                </View>
                <View style={{flexDirection:'row',gap:5}}>
                <Entypo name='chat' size={13} style={{paddingTop:4,color:'green'}}/>
                <Text style={{color:'#86909c'}}>18</Text>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginTop:20}}>
                <Text style={{color:'#86909c'}}>Last Meeting</Text>
                <Text style={{color:'#86909c'}}>Next Meeting</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginBottom:20,marginTop:8}}>
                <Text style={{color:'#86909c'}}>2 Nov 23, 10:00 AM</Text>
                <Text style={{color:'#86909c'}}>8 Nov 23, 09:45 AM</Text>
            </View>
        </View>
        <View style={{borderWidth:1,margin:0,paddingVertical:20,borderColor:'#e6e9eb',borderRadius:10}}>
            <View style={{flexDirection:'row',gap:10,paddingHorizontal:5}}>
                <Image source={require('./assets/circle.jpg')} style={{borderRadius:5}}/>
                <View>
                    <Text style={{fontSize:16,fontWeight:500}}>Net Banking App</Text>
                    <Text style={{fontSize:12,color:'#86909c'}}>Client:Jordan</Text>
                </View>
            </View>
            <View style={{alignItems:'flex-end',paddingHorizontal:10}}>
                <Text style={{color:'#066',backgroundColor:'#0066661a',paddingHorizontal:16,paddingVertical:8,borderRadius:24}}>7 Days Left</Text>
            </View>
            <View style={{paddingHorizontal:10,borderBottomWidth:1,borderColor:'#e6e9eb'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:16}}>
                <Text style={{color:'#86909c'}}>10 Oct,2024</Text>
                <Text style={{color:'red'}}>15 Nov,2024</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../earning/assets/glry.jpg')} style={{borderRadius:50,width:25,height:25}}/>
                    <Image source={require('../earning/assets/glry2.jpg')} style={{borderRadius:50,width:25,height:25}}/>
                    <Image source={require('../earning/assets/glry3.jpg')} style={{borderRadius:50,width:25,height:25}}/>
                    <Image source={require('../earning/assets/glry4.jpg')} style={{borderRadius:50,width:25,height:25}}/>
                    <Text style={{fontSize:12,paddingVertical:3,paddingHorizontal:5,backgroundColor:'#e6e9eb',borderRadius:50,width:25,height:25}}>+2</Text>
                </View>
                <View style={{flexDirection:'row',gap:5}}>
                <Entypo name='chat' size={13} style={{paddingTop:4,color:'green'}}/>
                <Text style={{color:'#86909c'}}>18</Text>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginTop:20}}>
                <Text style={{color:'#86909c'}}>Last Meeting</Text>
                <Text style={{color:'#86909c'}}>Next Meeting</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginBottom:20,marginTop:8}}>
                <Text style={{color:'#86909c'}}>2 Nov 23, 10:00 AM</Text>
                <Text style={{color:'#86909c'}}>8 Nov 23, 09:45 AM</Text>
            </View>
        </View>
        <View style={{borderWidth:1,margin:0,paddingVertical:20,borderColor:'#e6e9eb',borderRadius:10}}>
            <View style={{flexDirection:'row',gap:10,paddingHorizontal:5}}>
                <Image source={require('./assets/circle.jpg')} style={{borderRadius:5}}/>
                <View>
                    <Text style={{fontSize:16,fontWeight:500}}>Net Banking App</Text>
                    <Text style={{fontSize:12,color:'#86909c'}}>Client:Jordan</Text>
                </View>
            </View>
            <View style={{alignItems:'flex-end',paddingHorizontal:10}}>
                <Text style={{color:'#066',backgroundColor:'#0066661a',paddingHorizontal:16,paddingVertical:8,borderRadius:24}}>7 Days Left</Text>
            </View>
            <View style={{paddingHorizontal:10,borderBottomWidth:1,borderColor:'#e6e9eb'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:16}}>
                <Text style={{color:'#86909c'}}>10 Oct,2024</Text>
                <Text style={{color:'red'}}>15 Nov,2024</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                <View style={{flexDirection:'row'}}>
                    <Image source={require('../earning/assets/glry.jpg')} style={{borderRadius:50,width:25,height:25}}/>
                    <Image source={require('../earning/assets/glry2.jpg')} style={{borderRadius:50,width:25,height:25}}/>
                    <Image source={require('../earning/assets/glry3.jpg')} style={{borderRadius:50,width:25,height:25}}/>
                    <Image source={require('../earning/assets/glry4.jpg')} style={{borderRadius:50,width:25,height:25}}/>
                    <Text style={{fontSize:12,paddingVertical:3,paddingHorizontal:5,backgroundColor:'#e6e9eb',borderRadius:50,width:25,height:25}}>+2</Text>
                </View>
                <View style={{flexDirection:'row',gap:5}}>
                <Entypo name='chat' size={13} style={{paddingTop:4,color:'green'}}/>
                <Text style={{color:'#86909c'}}>18</Text>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginTop:20}}>
                <Text style={{color:'#86909c'}}>Last Meeting</Text>
                <Text style={{color:'#86909c'}}>Next Meeting</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,marginBottom:20,marginTop:8}}>
                <Text style={{color:'#86909c'}}>2 Nov 23, 10:00 AM</Text>
                <Text style={{color:'#86909c'}}>8 Nov 23, 09:45 AM</Text>
            </View>
        </View>
    </ScrollView>
  )
}

const  styles=StyleSheet.create({
    list:{
        marginTop:StatusBar.currentHeight,
        marginHorizontal:20,
        borderWidth:0
    }
})

export default Prjlist