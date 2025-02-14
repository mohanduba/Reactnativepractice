import React from 'react'
import { View,Text, Image } from 'react-native'

const Bids = () => {
    const bids=[
        {
            id:1,
            image:require('../rnproject/assets/bid1.png'),
            name:'Jenkins',
            desc:'Tesla',
            money:'$350.00'
        },
        {
            id:2,
            image:require('../rnproject/assets/bid2.png'),
            name:'Joshua',
            desc:'Tesla',
            money:'$1830.00'
        },
        {
            id:3,
            image:require('../rnproject/assets/bid3.png'),
            name:'Alex Mahito',
            desc:'Tesla',
            money:'$350.00'
        },
        {
            id:4,
            image:require('../rnproject/assets/bid4.png'),
            name:'Ian',
            desc:'Tesla',
            money:'$350.00'
        },
        {
            id:5,
            image:require('../rnproject/assets/bid1.png'),
            name:'Jenkins',
            desc:'Tesla',
            money:'$350.00'
        },
        {
            id:6,
            image:require('../rnproject/assets/bid1.png'),
            name:'Jenkins',
            desc:'Tesla',
            money:'$350.00'
        },
    ]
  return (
    <View style={{marginTop:50,padding:20,marginHorizontal:20,borderWidth:1,borderColor:'rgb(234, 236, 240)',borderRadius:8}}>
        <Text style={{textAlign:'center',fontSize:18,marginVertical:16}}>Your Bids</Text>
        {bids.map((item)=>(
       
        <View key={item.id} style={{flexDirection:'row',gap:'10%',borderBottomWidth:1,paddingBottom:10,borderColor:'lightgray',marginBottom:10}}>
            <Image source={item.image} style={{width:40,height:40}}/>
            <View style={{flex:1}}>
                <Text numberOfLines={1} ellipsizeMode='trail' style={{fontSize:16}}>{item.name}</Text>
                <Text numberOfLines={1} ellipsizeMode='trail' style={{fontSize:13,color:'gray'}}>{item.desc}</Text>
            </View>
            <Text style={{fontSize:13,marginTop:5,color:'green'}}>{item.money}</Text>
      </View>
      
    ))}
    
   </View>
  )
}

export default Bids
