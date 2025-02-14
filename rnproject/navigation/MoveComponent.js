
import React from 'react'
import { Text, View } from 'react-native'

const MoveComponent = ({route}) => {
    const id=route.params?.id;
    
  return (
    <View>
        <Text>Move Component-{id}</Text>
    </View>
  )
}

export default MoveComponent