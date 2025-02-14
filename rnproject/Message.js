import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View,Text, Image } from 'react-native'

const Message = () => {
    const message=[
        {
            id:1,
            image:require('../rnproject/assets/post1.png'),
            name:'Samantha Williams',
            desc:'Let’s catch up on it tomorrow, it is absolutely necessary',
            time:'12:10 PM'
        },
        {
            id:2,
            image:require('../rnproject/assets/post2.png'),
            name:'Brandon',
            desc:'Let’s catch up on it tomorrow, it is absolutely necessary',
            time:'12:10 PM'
        },
        {
            id:3,
            image:require('../rnproject/assets/post3.png'),
            name:'Wayne Winchester',
            desc:'Let’s catch up on it tomorrow, it is absolutely necessary',
            time:'12:10 PM'
        },
        {
            id:4,
            image:require('../rnproject/assets/post4.png'),
            name:'Jonathan Walsh',
            desc:'Let’s catch up on it tomorrow, it is absolutely necessary',
            time:'12:10 PM'
        },
        {
            id:5,
            image:require('../rnproject/assets/post5.png'),
            name:'Wesley Shields',
            desc:'Let’s catch up on it tomorrow, it is absolutely necessary',
            time:'12:10 PM'
        },
    ]
  return (
   <View style={{marginTop:50,padding:20,marginHorizontal:20,borderWidth:1,borderColor:'rgb(234, 236, 240)',borderRadius:8}}>
        <Text style={{textAlign:'center',fontSize:18,marginVertical:16}}>Messages</Text>
        {message.map((item)=>(
       
        <View key={item.id} style={{flexDirection:'row',gap:3,borderBottomWidth:1,paddingBottom:10,borderColor:'gray',marginBottom:10}}>
            <Image source={item.image} style={{width:40,height:40}}/>
            <View style={{flex:1}}>
                <Text numberOfLines={1} ellipsizeMode='trail' style={{fontSize:16}}>{item.name}</Text>
                <Text numberOfLines={1} ellipsizeMode='trail' style={{fontSize:13,color:'gray'}}>{item.desc}</Text>
            </View>
            <Text style={{fontSize:13,marginTop:5,color:'gray',width:'15%'}}>{item.time}</Text>
      </View>
      
    ))}
    <View>
            <TouchableOpacity style={{marginTop:16,padding:12,borderWidth:1,borderRadius:10,borderColor:'gray'}}>
                <Text style={{textAlign:'center',fontSize:14}}>View More</Text>
            </TouchableOpacity>
      </View>
   </View>
  )
}

export default Message
