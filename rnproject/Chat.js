import React from 'react'
import { Image,View,Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Chat = () => {
  return (
    <View style={{marginTop:30,marginHorizontal:20, borderColor: 'rgba(0,0,0,0.2)', borderWidth: 0, backgroundColor: "white", shadowColor: 'rgba(0,0,0,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8,paddingHorizontal:8}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:16}}>
            <View style={{flexDirection:'row',gap:10}}>
                <Image source={require('../rnproject/assets/mylas_logo.jpg')} style={{width:25,height:20}}/>
                <Text style={{fontSize:16,color:'#b1b1b1'}}>Mylas Team</Text>
            </View>
            <MaterialIcons name='more-horiz' size={25} style={{color:'grey'}}/>
        </View>
        <View style={{paddingHorizontal:24,paddingVertical:16,backgroundColor:'#0057ff'}}>
            <Text style={{color:'white',fontSize:18,lineHeight:30}}>Development Team</Text>
            <Text style={{color:'#a6baff',fontSize:15,lineHeight:30}}>Lorem ipsum dolor sit, amet consectetur adi.....</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:16}}>
                <View style={{flexDirection:'row',gap:8}}>
                    <Image source={require('../rnproject/assets/blog-author1.jpg')} style={{width:24,height:24,borderRadius:50}}/>
                    <Image source={require('../rnproject/assets/blog-author2.jpg')} style={{width:24,height:24,borderRadius:50}}/>
                    <Image source={require('../rnproject/assets/blog-author3.jpg')} style={{width:24,height:24,borderRadius:50}}/>
                    <Image source={require('../rnproject/assets/blog-author3.jpg')} style={{width:24,height:24,borderRadius:50}}/>
                </View>
                <Text style={{color:'#a6baff',fontSize:15}}>04:13 PM</Text>
            </View>
        </View>
        <View style={{paddingVertical:16}}>
            <Text style={{color:'#0057ff',textAlign:'right',fontSize:16}}>View Teams</Text>
        </View>
    </View>
  )
}

export default Chat
