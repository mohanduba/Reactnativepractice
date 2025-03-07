
import {  ImageBackground, View } from 'react-native';

import StartScreenGame from './screens/StartScreenGame';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber,setUserNumber]=useState();
  const [gameOver,setGameOver]=useState(true);
  const [rndsGuess,setRndsGuess]=useState(0);
  const pickNumberHandler=(pickedNumber)=>{
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setRndsGuess(0);
  }

  let screen=<StartScreenGame onPickHandler={pickNumberHandler}/>
      
      if(userNumber){
        screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
      }

      if(gameOver && userNumber){
          screen=<GameOverScreen userNumber={userNumber} rndsNumber={rndsGuess} onNewStartGame={startNewGameHandler}/>
      }

      function gameOverHandler(numberOfRounds){
        setGameOver(true);
        setRndsGuess(numberOfRounds);
      }

      
 
  return (
    <LinearGradient colors={['#72063c','#ddb52f']} style={{flex:1}}>
        {/* <Goal/> */}
        <ImageBackground source={require('../course/assets/images/Dice.jpg')} style={{flex:1}} imageStyle={{opacity:0.15}}>
            {screen }
        </ImageBackground>
       
    </LinearGradient>
  );
}


