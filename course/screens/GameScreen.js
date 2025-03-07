import React, { useState,useEffect } from 'react'
import { View,Text, Pressable, Alert, FlatList,StyleSheet } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

import GuessLogItem from '../components/game/GuessLogItem';
import Entypo from 'react-native-vector-icons/FontAwesome';

function generateRandomBetween(min,max,exclude){
      const rndNum=Math.floor(Math.random() * (max-min)) + min;

      if(rndNum===exclude){
         return generateRandomBetween(max,min,exclude)
      }else{
        return rndNum;
      }
}

let minBoundary=1;
let maxBoundary=100;

const GameScreen = ({userNumber,onGameOver}) => {
  const initialGuess=generateRandomBetween(1,100,userNumber);
  const [currentGuess,setCurrentGuess]=useState(initialGuess);
  console.log(currentGuess);
  const [guessRounds,setGuessRounds]=useState([initialGuess]);
  const guessRoundsLength=guessRounds.length;

 useEffect(()=>{
     if(currentGuess===userNumber){
        onGameOver(guessRounds.length)
     }
 },[currentGuess,userNumber,onGameOver]);

 useEffect(()=>{
      minBoundary=1,
      maxBoundary=100
 },[])

  function nextGuessHandler(direction){
      if((direction==='lower' && currentGuess<userNumber) || (direction==='greater' && currentGuess>userNumber)){
        Alert.alert("Dont lie","You know that this is wrong....",[{text:'Sorry!',style:'cancel'}])
        return;
      }

      if(direction==='lower'){
         maxBoundary=currentGuess-1;
      }else{
        minBoundary=currentGuess+1;
      }
      const newRndNum=generateRandomBetween(minBoundary,maxBoundary,currentGuess);
      setCurrentGuess(newRndNum);
      setGuessRounds(prevGuessRounds=>[newRndNum,...prevGuessRounds]);
  }
  console.log(minBoundary,maxBoundary);
  return (
    <View style={{marginTop:40,marginHorizontal:20,flex:1}}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.higher}>
      <Text style={{fontSize:26,textAlign:'center',color:'white'}}>Higher or Lower</Text>
      <View style={{flexDirection:'row',gap:20}}>
          <View style={{flex:1}}>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')} ><Entypo name='minus' size={20}/></PrimaryButton>
          </View>
          <View style={{flex:1}}>
          <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}><Entypo name='plus' size={20}/></PrimaryButton>
          </View>
      </View>
      </View>
      {/* {guessRounds.map((guessRound)=><View key={guessRound}>
         <Text>{guessRound}</Text>
      </View>)} */}
      <View style={{flex:1,marginBottom:20}}>
      <FlatList data={guessRounds} 
       renderItem={(itemdata)=><GuessLogItem roundNumber={guessRoundsLength-itemdata.index} guess={itemdata.item}>{itemdata.item}</GuessLogItem> } 
      keyExtractor={(item)=>item} scrollEnabled={false}/>
      </View>
    </View>
  )
}

export default GameScreen;

const styles=StyleSheet.create({
  higher:{
        padding:16,
        marginTop:20,
        marginHorizontal:24,
        backgroundColor:'#4e0329', 
        borderRadius:8,
        elevation:8,
        alignItems:'center',
  }
})