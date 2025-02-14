import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'

const DataComponent = () => {
    const navigation=useNavigation();
  return (
    <View style={{marginTop:50}}><Text>Component</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('movecomponent',{id:100})}><Text>Click</Text></TouchableOpacity></View>
  )
}

export default DataComponent;