import React from 'react'
import { View,Text } from 'react-native'

const NumberContainer = ({children}) => {
  return (
    <View >
    <View style={{borderWidth:2,borderColor:'#ddb52f',padding:24,margin:24,width:'50%',justifyContent:'center',alignSelf:'center'}}>
        <Text style={{color:'#ddb52f',fontSize:20,textAlign:'center'}}>{children}</Text>
    </View>
    </View> 
  )
}

export default NumberContainer