
import React from 'react';
import {  View,Text, Pressable, TouchableOpacity } from 'react-native'

const GoalItem = ({props,onDeleteItem,index}) => {
  console.log(props);
    
  return (
    <TouchableOpacity onPress={()=>onDeleteItem(index)}>
     <View  style={{marginTop:20,backgroundColor:'red',borderRadius:5}}>
        <Text style={{color:'white',padding:10}}>{props}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default GoalItem