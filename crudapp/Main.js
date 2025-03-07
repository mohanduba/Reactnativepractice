
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Create from './Create';
import Update from './Update';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="create" component={Create} />
        <Stack.Screen name="update" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
