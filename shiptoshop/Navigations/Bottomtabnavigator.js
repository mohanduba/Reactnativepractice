import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Import from "../Globalimports/Imports";
import Homepage from '../pages/Homepage';
import Cartpage from '../pages/Cartpage';
import Orderspage from '../pages/Orderspage';
import { NavigationContainer } from '@react-navigation/native';

const bottom = createBottomTabNavigator();
const Bottomtabnavigator = () => {
    return (
        <>
            <NavigationContainer>
                <bottom.Navigator
                    screenOptions={{ tabBarStyle: { position: "absolute", backgroundColor: 'white', width: '96%', alignItems: "center", marginRight: 10, marginLeft: 8, marginVertical: 20, height: 60, borderRadius: 100, borderTopColor: "lightgrey", borderTopWidth: 1, borderLeftColor: "lightgrey", borderLeftWidth: 1, borderRightColor: "lightgrey", borderRightWidth: 1 }, tabBarActiveTintColor: '#3db4e6', tabBarInactiveTintColor: 'grey', tabBarShowLabel: false, }} initialRouteName={'Home'}>
                    <bottom.Screen name='Home' component={Homepage} options={{
                        headerShown: true, headerShadowVisible: true, headerStyle: { backgroundColor: "rgba(61, 180, 230,1)", height: 100, borderBottomLeftRadius: 16, borderBottomRightRadius: 16, }, headerTitle: "Home", headerTitleStyle: { fontFamily: Import.Theme.h1.fontFamily, fontWeight: "600", fontSize: 18, color: "#fff", marginLeft: 8 },
                        headerLeft: () => (
                            <Import.View style={{ backgroundColor: "#fff", height: 44, width: 44, borderRadius: 100, justifyContent: "center", alignItems: "center", marginLeft: 16, elevation: 4 }}>
                                <Import.Image
                                    source={require('../Images/ShipToShoplogo.png')}
                                    style={{ width: 48, height: 40, }}
                                    resizeMode="cover"
                                />
                            </Import.View>
                        ),
                        tabBarIcon: ({ color, size, focused }) => (
                            <Import.View style={{
                                justifyContent: "center", alignItems: "center", width: Import.windowWidth * 0.24, height: Import.windowHeight, borderRadius: 40, top: 10
                            }}>
                                <Import.AntDesign name='home' color={color} size={size} />
                                <Import.Text style={[Import.Theme.h4, { color: color }]}>Home</Import.Text>
                            </Import.View>
                        ),

                    }} />
                    <bottom.Screen name='Cart' component={Cartpage} options={{
                        headerShown: true,
                        headerShown: true, headerStyle: { backgroundColor: "rgba(61, 180, 230,1)", height: 100, borderBottomLeftRadius: 16, borderBottomRightRadius: 16, }, headerShadowVisible: true, headerTitle: "My Cart", headerTitleStyle: { fontFamily: Import.Theme.h1.fontFamily, fontWeight: "600", fontSize: 18, color: "#fff", marginLeft: 8 },
                        tabBarIcon: ({ color, size, focused }) => (
                            <Import.View style={{ justifyContent: "center", alignItems: "center", width: Import.windowWidth * 0.24, height: Import.windowHeight, borderRadius: 40, top: 10 }}>
                                <Import.AntDesign name='shoppingcart' color={color} size={size} />
                                <Import.Text style={[Import.Theme.h4, { color: color }]}>Cart</Import.Text>
                            </Import.View>
                        ),
                    }} />
                    <bottom.Screen name='Orders' component={Orderspage} options={{
                        headerShown: true, headerStyle: { backgroundColor: "rgba(61, 180, 230,1)", height: 100, borderBottomLeftRadius: 16, borderBottomRightRadius: 16, }, headerShadowVisible: true, headerTitle: "My Orders", headerTitleStyle: { fontFamily: Import.Theme.h1.fontFamily, fontWeight: "600", fontSize: 18, color: "#fff", marginLeft: 8 },
                        tabBarIcon: ({ color, size, focused }) => (
                            <Import.View style={{ justifyContent: "center", alignItems: "center", width: Import.windowWidth * 0.24, height: Import.windowHeight, borderRadius: 40, top: 10 }}>
                                <Import.Feather name='shopping-bag' color={color} size={size} />
                                <Import.Text style={[Import.Theme.h4, { color: color }]}>Orders</Import.Text>
                            </Import.View>
                        ),
                    }} />
                </bottom.Navigator>
            </NavigationContainer>
        </>
    )
}
export default Bottomtabnavigator;