import React, { useRef, useState,useEffect } from 'react'
import { Dimensions, FlatList, Image, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';

const Slide = () => {
    const flatListRef=useRef();
    const [color,setColor]=useState(false);
    const [activeIndex,setActiveIndex]=useState(0);
    const windowWidth=Dimensions.get('window').width;
    const marginHorizontal=36;
    const screenWidth=windowWidth - (2*marginHorizontal);
    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / screenWidth);
        setActiveIndex(index);
      };
      useEffect(() => {
        const intervalId = setInterval(() => {
          if (activeIndex === perform.length - 1) {
            flatListRef.current.scrollToIndex({ index: 0, animated: false });
          } else {
            flatListRef.current.scrollToIndex({ index: activeIndex + 1, animated: true });
          }
        }, 2000);
        return () => clearInterval(intervalId);
      }, [activeIndex]);

    const perform=[
        {
            id:1,
            image:require('../rnproject/assets/post1.png'),
            name:'Jurgen Klapp',
            email:'asancho@email.com',
            location:'Munich, Germany'
        },
        {
            id:2,
            image:require('../rnproject/assets/post2.png'),
            name:'Morgan Aste',
            email:'amorgan@email.com',
            location:'Munich, Germany'
        },
        {
            id:3,
            image:require('../rnproject/assets/post3.png'),
            name:'Alexis Sanchez',
            email:'asancho@email.com',
            location:'Munich, Germany'
        },
        {
            id:4,
            image:require('../rnproject/assets/post4.png'),
            name:'Wesley Shields',
            email:'shields@email.com',
            location:'Wyoming, USA'
        },
    ]
  return (
    <View style={{marginTop:50,marginHorizontal:10,borderWidth:1,padding:16,borderRadius:10,borderColor:'#8080802b'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
            <Text style={{fontSize:18}}>Top Performers</Text>
            <View style={{flexDirection:'row',gap:2}}>
              <TouchableOpacity onPress={()=>setColor(true)}>
                <FontAwesome name='chevron-left' size={10} style={{color:'white',backgroundColor: color ?'rgba(128,128,128,1)':'grey',padding:8,width:24,height:'24',borderRadius:50}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setColor(true)}>
                <FontAwesome name='chevron-right' size={10} style={{color:'white',backgroundColor: color ?'rgba(128,128,128,1)':'grey',padding:8,width:24,height:'24',borderRadius:50}}/>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <FlatList 
            data={perform}
            horizontal
            ref={flatListRef}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            onScroll={handleScroll}
            keyExtractor={item => item.id.toString()}
            renderItem={({item})=>(
                    <View style={{width:screenWidth,borderWidth:1,marginHorizontal:15,marginTop:20,padding:8,borderRadius:5,borderColor:'#6d6d6d4f',marginBottom:30}}>
                        <View style={{flexDirection:'row-reverse',marginBottom:'20%'}}>
                            <Entypo name='star' size={20} style={{color:'orange'}}/>
                        </View>
                        <View style={{alignItems:'center',paddingBottom:30}}>
                            <Image source={item.image} style={{width:66,height:66}}/>
                            <Text style={{marginBottom:8,fontSize:22}}>{item.name}</Text>
                            <Text style={{fontSize:14,color:'#808080d6'}}>{item.email}</Text>
                            <Text style={{fontSize:14,color:'#808080d6'}}>{item.location}</Text>
                        </View>
                    </View>
            )}
            />
        </View>
    </View>
  )
}

export default Slide
