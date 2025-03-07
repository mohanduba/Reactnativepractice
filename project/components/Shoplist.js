import React, { useEffect, useState } from 'react'
import { Pressable } from 'react-native';
import { StatusBar, StyleSheet, Text,View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from "react-native-vector-icons/AntDesign";
import { db,doc,updateDoc,deleteDoc } from '../firebase/data';

const Shoplist = (props) => {
  const [isChecked,setIsChecked]=useState(props.isChecked);
  const updateIsChecked=async()=>{
    const shoppingRef = doc(db, "shopping", props.id);

// Set the "capital" field of the city 'DC'
await updateDoc(shoppingRef, {
  isChecked: isChecked
});
  }

  const deleteShoppingItem=async()=>{
    await deleteDoc(doc(db, "shopping", props.id));
    props.getShoppingList()
  }

  

  useEffect(()=>{
    updateIsChecked()
  },[isChecked])
  return (
    <View style={[styles.box]}>
    <View style={[styles.list]}>
      <View style={{flexDirection:'row',gap:5}}>
        <Pressable onPress={()=>setIsChecked(!isChecked)}>
          {
            isChecked?(<AntDesign name='checkcircle' size={20}/>):(<AntDesign name='checkcircleo' size={20}/>)
          } 
        </Pressable>
        <Text style={{fontSize:16}}>{props.title}</Text>
        </View>
        <Pressable onPress={deleteShoppingItem}>
        <MaterialCommunityIcons name='delete' size={25}/></Pressable>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
    list:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:40,
        backgroundColor:'lightgrey',
        paddingVertical:5,
        paddingHorizontal:5,
        borderRadius:8,
        marginVertical:10
    },
    box:{
       
    }
})

export default Shoplist