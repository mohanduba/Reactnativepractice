import React from 'react'
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native'

const PrimaryButton = ({children,onPress}) => {
  
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.buttoncontainer}>
        <Text style={styles.buttontext}>{children}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
        buttoncontainer:{
            backgroundColor:'#72063c',
            marginVertical:8,
            padding:10,
            borderRadius:28,
            paddingVertical:8,
            paddingHorizontal:16
        },
        buttontext:{
            color:'white',
            textAlign:'center'
        }
})

export default PrimaryButton