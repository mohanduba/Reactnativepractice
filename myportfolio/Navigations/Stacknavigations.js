import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Context
import { Darkthemehandler } from "../Globalcolors/Darkthemehandler";

// Screens
import Homepage from "../pages/Homepage";

const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
    const { palete } = useContext(Darkthemehandler);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Homepage"
            >
                <Stack.Screen
                    name="Homepage"
                    component={Homepage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Stacknavigation;
