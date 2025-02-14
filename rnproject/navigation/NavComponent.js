import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DataComponent from './DataComponent';
import MoveComponent from './MoveComponent';

const Stack = createNativeStackNavigator(); // Capitalize the name here

const NavComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="datacomponent" component={DataComponent} />
        <Stack.Screen name="movecomponent" component={MoveComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavComponent;
