import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Add from './Add';
import Move from './Move';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Add">
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Move" component={Move} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
