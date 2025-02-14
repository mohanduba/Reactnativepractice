import React from 'react'
import { Image, Text, View } from 'react-native'

const People = () => {
  return (
    <View style={{marginVertical:50,marginHorizontal:20,padding:16, borderColor: 'rgba(0,0,0,0.2)', borderWidth: 0, backgroundColor: "white", shadowColor: 'rgba(0,0,0,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',gap:10}}>
               <View>
                <Image source={require('../rnproject/assets/profile3d.jpg')} style={{width:21,height:21,borderRadius:50}}/>
                <View style={{backgroundColor:'#1ec81e',width:12,height:12,borderRadius:50,position:'absolute',left:'75%',top:0,borderWidth:2,borderColor:'white'}}></View>
            </View>
            <View style={{flexDirection:'column'}}>
            <Text style={{color:'#8a91a3',fontSize:15}}>Harry Mate</Text>
            <Text style={{fontSize:15,marginBottom:8}}>UI/UX Designer</Text>
            </View>
            </View>
            <Text style={{color:'#8a91a3',fontSize:13}}>3 Days Ago</Text>
        </View>
        <Text style={{marginLeft:'11%',color:'#a8b4cd',fontSize:14,fontWeight:500,lineHeight:20}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
    </View>
  )
}

export default People




