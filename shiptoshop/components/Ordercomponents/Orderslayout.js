import React, { useEffect, useState } from "react";
import Import from "../../Globalimports/Imports";
import Ordercards from "./Ordercards";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

const Orderlayout = () => {
    const [orders, setorders] = useState([]);
    console.log('i am orders', orders)
    const focused = useIsFocused();
    useEffect(() => {
        if (focused) {
            handelGettotalOrders()
        }
    }, [focused])
    const handelGettotalOrders = async () => {
        try {
            const orders = JSON.parse(await AsyncStorage.getItem('orders')) || [];
            setorders(orders)
        } catch (error) {
            console.log('Error getting orders:')
        }
    }
    return (
        <Import.View style={{flex: 1,  marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal }}>
            {orders?.length > 0 ? <Ordercards orders={orders} /> : <Import.View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Import.Text style={Import.Theme.h1}>No Orders Yet! Hurry Up!!! 🛒</Import.Text><Import.Image source={require('../../Images/orderempty.webp')} style={{ width: 200, height: 200, resizeMode: "contain" }} /></Import.View>}
        </Import.View>
    )
}

export default Orderlayout;