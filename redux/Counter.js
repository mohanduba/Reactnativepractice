import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'; // Fixed the import
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByValue, increment } from './counterSlice';
import { addUser,deleteUser, updataUser,addUserData, deleteUserData, getUser, updateUserData, getUserData } from './userSlice';

const Counter = () => {
  const [name,setName]=useState("");
  const [userId,setUserId]=useState("");
  const { data } = useSelector((store) => store.users);
  const dispatch = useDispatch();

  return (
    <ScrollView>
    <View style={{marginTop:50,alignItems:'center'}} >
       { data.map((user, index) => (
  <View key={index} style={{ marginVertical: 10 }}>
    <Text>{user.name}</Text>
    
    <View style={{ flexDirection: 'row', gap: 20 }}>
      <TouchableOpacity 
        onPress={() => dispatch(deleteUserData(user.id))} 
        style={{ backgroundColor: 'lightgreen', padding: 8, marginVertical: 5 }}
      >
        <Text>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{ backgroundColor: 'skyblue', padding: 8, marginVertical: 5 }} 
        onPress={() => {
          setUserId(user.id);
          setName(user.name);
        }}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  </View>
))}      
       <TextInput style={{borderWidth:1,width:100,height:40}}  value={name} onChangeText={(name)=>setName(name)}/>
       <TouchableOpacity onPress={()=>{
        if(userId){
          dispatch(updateUserData({id:userId,name}));
          setUserId("");
          setName("")
        }else{
          dispatch(addUserData({name}));
          setName("")
        }
       }} style={{marginTop:10,backgroundColor:'orange',padding:8}}><Text>{userId?'Update':'Save'}</Text></TouchableOpacity>
       <TouchableOpacity onPress={()=>dispatch(getUserData())} style={{marginVertical:10,backgroundColor:'violet',padding:8}}><Text>Get Data</Text></TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default Counter;
