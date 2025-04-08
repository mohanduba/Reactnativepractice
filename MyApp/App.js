import React from "react";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import CustomDrawerContent from "./CustomDrawerContent";
import MainScreen from "./MainScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs
const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

// Drawer wraps Tab Navigator
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Welcome"
          component={Tabs}
          options={({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
            return {
              title: routeName,
            };
          }}
        />
        <Drawer.Screen name="Main" component={MainScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
