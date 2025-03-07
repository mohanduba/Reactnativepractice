import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title';

const StartScreenGame = ({onPickHandler}) => {

  const [enteredNumber,setEnteredNumber]=useState('');
  const numberInputHandler=(enteredText)=>{
      setEnteredNumber(enteredText);
  }
 
  const resetInputHandler=()=>{
    setEnteredNumber('');
  }

  const confirmInputHandler=()=>{
    const choosenNumber=parseInt(enteredNumber);
    if(isNaN(choosenNumber) || choosenNumber<=0 || choosenNumber>99){
      Alert.alert('Invalid Number','Number must be between 0 and 99.',[{text:'Okay',style:'destructive'}])   
    }
    onPickHandler(choosenNumber);
    
  }

  return (
    <View style={{marginTop:40}}>
       <View style={{marginHorizontal:30}}>
          <Title>Guess Number</Title>
       </View>
    <View style={styles.container}>
      <Text style={{fontSize:24,color:'white'}}>Enter Number</Text>
      <Text style={{fontSize:20,color:'white'}}>(1 to 99)</Text>
          <TextInput 
          style={styles.inputcontainer} 
          maxLength={2} 
          keyboardType='number-pad'
          value={enteredNumber}
          onChangeText={numberInputHandler}/>
        
        <View style={{flexDirection:'row',gap:10}}>
            <View style={{flex:1}}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={{flex:1}}>
              <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
    <View style={{alignItems:'center',marginTop:10}}>
       <Image source={{uri:'https://static.wikia.nocookie.net/welcometothegame/images/f/fd/Wttg2.jpg/revision/latest?cb=20170907205448'}} style={{width:340,height:400,borderRadius:5}}/>
    </View>
    </View>
  )
}

export default StartScreenGame;

const styles=StyleSheet.create({
    container:{
        padding:16,
        marginTop:50,
        marginHorizontal:24,
        backgroundColor:'#4e0329', 
        borderRadius:8,
        elevation:8,
        alignItems:'center',

    },
    inputcontainer:{
        borderBottomWidth:2,
        borderColor:'yellow',
        color:'yellow',
        width:50,
        fontSize:32,
        fontWeight:'bold',
        height:60,
        marginVertical:8
    }
})

