import React from 'react'
import { View,Text } from 'react-native'

const GuessLogItem = ({roundNumber,guess}) => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:1,borderRadius:25,backgroundColor:'#cfaa4c',paddingHorizontal:10,paddingVertical:10,marginTop:10}}>
        <Text>#{roundNumber}</Text>
        <Text>Opponent's Guess:{guess}</Text>
    </View>
  )
}

export default GuessLogItem