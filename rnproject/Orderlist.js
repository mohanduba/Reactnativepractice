import React from 'react'
import { View,Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Orderlist = () => {
  return (
    <View style={{marginTop:50,marginHorizontal:20,padding:16,borderWidth:1,borderColor:'#d5d5d5',borderRadius:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:1,paddingBottom:16,borderColor:'#d5d5d5'}}>
            <Text style={{fontSize:18}}>WorkOrders</Text>
            <View style={{flexDirection:'row',gap:10}}>
            <View style={{flexDirection:'row',gap:10}}>
            <MaterialIcons name='dashboard' size={20} style={{color:'#2960dd',marginTop:3}}/>
            <FontAwesome5 name='list' size={20} style={{color:'black',marginTop:3}}/>
            </View>
            <View style={{flexDirection:'row',gap:2,backgroundColor:'#2960dd',paddingHorizontal:8,paddingVertical:4,borderRadius:5}}>
                <Entypo name='plus' size={16} style={{color:'white'}}/>
                <Text style={{color:'white'}}>Add New</Text>
            </View>
            </View>
        </View>
        <View style={{paddingHorizontal:16,paddingVertical:24}}>
            <View style={{borderTopWidth:5,borderColor:'#2960dd'}}></View>
            <View style={{padding:16, borderColor: 'rgba(0,0,0,0.2)', borderWidth: 0, backgroundColor: "white", shadowColor: 'rgba(0,0,0,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 5}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:16,fontWeight:'700'}}>Coolant Refill</Text>
                <Text style={{backgroundColor:'#b0ff7dc9',padding:8,borderRadius:8,borderColor:'#00a74440',borderWidth:1,color:'green'}}>$1370</Text>
            </View>
            <Text style={{paddingVertical:10,borderBottomWidth:1,borderColor:'#00000073',color:'gray'}}>Replace the coolant to multiple complex central refrigeration units</Text>
            <View style={{marginVertical:16}}>
            <View style={{flexDirection:'row',gap:8}}>
                <Ionicons name='construct' size={24} style={{color:'rgb(15, 126, 240)',backgroundColor:'rgb(230, 245, 254)',padding:6,borderRadius:50,width:'auto',height:36}}/>
                <View>
                    <Text style={{color:'gray'}}>Vertical</Text>
                    <Text>Heavy Electricals</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',gap:8}}>
                <MaterialCommunityIcons name='calendar-range' size={24} style={{color:'rgb(240, 147, 14)',backgroundColor:'rgb(254, 244, 231)',padding:6,borderRadius:50,width:'auto',height:36}}/>
                <View>
                    <Text style={{color:'gray'}}>End Date</Text>
                    <Text>12/12/2024</Text>
                </View>
            </View>
            </View>
            <View style={{marginVertical:16}}>
            <View style={{flexDirection:'row',gap:8}}>
                <MaterialIcons name='engineering' size={24} style={{color:'rgb(23, 197, 158)',backgroundColor:'rgb(23 197 158 / 9%)',padding:6,borderRadius:50,width:'auto',height:36}}/>
                <View>
                    <Text style={{color:'gray'}}>Project</Text>
                    <Text>Globex Solutions</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',gap:8}}>
                <FontAwesome name='user' size={24} style={{color:'rgb(148, 171, 189)',backgroundColor:'#94abbd47',padding:10,borderRadius:50,width:'auto',height:36}}/>
                <View>
                    <Text style={{color:'gray'}}>Client</Text>
                    <Text>Azuz</Text>
                </View>
            </View>
            </View>
            </View>
        </View>
    </View>
  )
}

export default Orderlist
