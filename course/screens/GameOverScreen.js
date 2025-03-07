import React from 'react'
import { View,Text, Image } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({userNumber,rndsNumber,onNewStartGame}) => {
  return (
   <View style={{justifyContent:'center',flex:1,alignItems:'center',marginHorizontal:18}}>
     <View >
        <Text style={{fontSize:32,color:'white'}}>Game is Over</Text>
        
     </View>
     <Image source={require('../assets/images/over.jpg')} style={{width:200,height:200,borderRadius:100
     }}/>
     <View >
        <Text style={{textAlign:'center',fontSize:20,color:'white'}}>Your phone took <Text style={{fontWeight:'bold',color:'#16d9cc'}}>{rndsNumber}</Text> rounds to guess the number <Text style={{fontWeight:'bold',color:'#16d9cc'}}>{userNumber}</Text>.</Text>
        {/* {rndsNumber>5 && <Text>Your the Winner!</Text>}
        {rndsNumber<=5 && <Text>Phone Guess is the winner!</Text>} */}
        <View style={{marginTop:20}}>
          <PrimaryButton onPress={onNewStartGame}><Text style={{fontSize:24}}>Start New Game</Text></PrimaryButton>
        </View>
     </View>
     </View>
  )
}

export default GameOverScreen