import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {View,Text, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { deleteUserList } from './UserReducer';

const Home = () => {
    const navigation=useNavigation();
    const dispatch=useDispatch();
    const users=useSelector((store)=>store.users);
    console.log(users)
  return (
    <View style={{marginTop:50,marginHorizontal:20}}>
        <Text style={{textAlign:'center',fontSize:18}}>Crud App</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('create')} style={{marginVertical:20,backgroundColor:'orange',width:'20%',padding:8,alignItems:'center'}}>
            <Text>Create</Text>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:100}}>
        {users?.map((user,index)=>
        (<View key={index} style={{borderWidth:1,marginVertical:10,padding:8,borderRadius:8}}>
            <Text>Id:{user.id}</Text>
            <Text>Name:{user.name}</Text>
            <Text>Email:{user.email}</Text>
            <View style={{flexDirection:'row',gap:10,marginTop:10}}>
                <TouchableOpacity style={{backgroundColor:'skyblue',flex:1,paddingVertical:8}} onPress={()=>navigation.navigate('update',{user})}><Text style={{textAlign:'center'}}>Edit</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>dispatch(deleteUserList(user.id))} style={{backgroundColor:'red',flex:1,paddingVertical:8}}><Text style={{textAlign:'center'}}>Delete</Text></TouchableOpacity>
            </View>
        </View>)
    )}
    </ScrollView>
    </View>
  )
}

export default Home