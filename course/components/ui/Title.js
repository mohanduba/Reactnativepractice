import React from 'react'
import { Text, View } from 'react-native'

const Title = ({children}) => {
  return (
    <View style={{borderWidth:2,borderColor:'#ddb52f',padding:12}}>
             <Text style={{textAlign:'center',fontSize:24,color:'#ddb52f'}}>{children}</Text>
          </View>
  )
}

export default Title