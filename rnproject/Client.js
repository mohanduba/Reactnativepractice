import React from 'react';
import { View, Text, Image } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const Client = () => {
    const client=[
        {
            id:1,
            img:require('../rnproject/assets/pic1.jpg'),
            name:'Taqt',
            project:'2 Projects'
        },
        {
            id:2,
            img:require('../rnproject/assets/pic2.jpg'),
            name:'Room',
            project:'2 Projects'
        },
        {
            id:3,
            img:require('../rnproject/assets/pic3.jpg'),
            name:'Shambles',
            project:'2 Projects'
        },
        {
            id:4,
            img:require('../rnproject/assets/pic4.jpg'),
            name:'IntelliX',
            project:'2 Projects'
        },
        {
            id:5,
            img:require('../rnproject/assets/pic5.jpg'),
            name:'Goggles',
            project:'2 Projects'
        },
    ]
    return (
        <View style={{marginTop:50,marginHorizontal:20,borderWidth:1,padding:20,borderRadius:6,borderColor:'#8080802b'}}>
           <Text style={{fontSize:18,fontWeight:'bold'}}>Client</Text>
        <View style={{marginVertical:16}}>
        {client.map((item)=>(
        <View key={item.id} style={{flexDirection:'row',borderWidth:1,padding:10,borderRadius:6,borderColor:'#8080802b',marginVertical:8}}>
        <View style={{flexDirection:'row',gap:5,width:'65%',borderRightWidth:1,borderColor:'#8080802b'}}>
            <Image source={item.img} style={{width:50,height:50,borderRadius:50}}/>
            <View style={{justifyContent:'center'}}>
                <Text style={{}}>{item.name}</Text>
            </View>
        </View>
         <View style={{justifyContent:'center'}}>
            <Text style={{marginLeft:2}}>{item.project}</Text>
         </View>
        </View>
    ))}
        </View>
        </View>
    );
};

export default Client;

