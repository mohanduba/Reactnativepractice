
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import EmailOtpVerify from './EmailOtpVerify';
import TechProfile from './TechProfile';

const Stack =createNativeStackNavigator();
const Home = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            
            <Stack.Screen name='login' component={Login}/>
            <Stack.Screen name='signup' component={Signup} />
            <Stack.Screen name='otpverify' component={EmailOtpVerify} />
            <Stack.Screen name='profile' component={Profile} />
            <Stack.Screen name='technicianProfile' component={TechProfile} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Home