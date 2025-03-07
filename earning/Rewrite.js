import React from 'react'
import { View,StyleSheet,Text, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons";

const Rewrite = () => {
  return (
    <View style={{marginTop:StatusBar.currentHeight,marginHorizontal:10}}>
         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#af40ff', '#5b42f3', '#00ddeb']}
        style={styles.button}>
       
        <Text style={styles.text}>Rewrite With AI</Text>
        <Ionicons name='sparkles-sharp' size={20} style={{color:'white'}}/>
       
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
   
    button: {
      paddingVertical: 15,
      paddingHorizontal:20,
      alignSelf: 'center',
      borderRadius: 30,
      flexDirection:'row',
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
    },
  });

export default Rewrite