import React, { useState } from "react";
import Import from "../../Globalimports/Imports";
import Cartcards from "./Cartcards";
import Cartfooter from "./Cartfooter";
import { clearCart, removeFromCart } from "../../Redux/Actions/Cartdataactions";
import { connect } from "react-redux";
import RazorpayCheckout from 'react-native-razorpay';
import SuccessModalpopup from "../../Globalcomponents/SuccessModalpopup";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cartlayout = ({ cartItems, removeFromCart, clearCart }) => {
    console.log('i am cartitems', cartItems)
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const handleRemove = (id) => {
        removeFromCart(id);
    };
    const handleClearCart = () => {
        clearCart();
    };
    const totalprice = () => {
        return cartItems.reduce((acc, item) => {
            return item.price + acc
        }, 0).toFixed(2)
    }
    const handleCloseModal = () => {
        setModalVisible(false);
        navigation.navigate('Home')
    };
    const generateOrderId = async () => {
        try {
            const orders = JSON.parse(await AsyncStorage.getItem("orders")) || [];
            const lastOrderId = orders.length > 0 ? orders[orders.length - 1].order_id : "STS_00";
            const lastOrderNumber = parseInt(lastOrderId.split("_")[1]);
            console.log("lastOrderNumber", lastOrderNumber)
            return `STS_${String(lastOrderNumber + 1).padStart(2, "0")}`;
        } catch (error) {
            console.error("Error generating order ID:", error);
            return "STS_01";
        }
    };
    const saveOrderToStorage = async (orderDetails) => {
        try {
            const orders = JSON.parse(await AsyncStorage.getItem("orders")) || [];
            await AsyncStorage.setItem("orders", JSON.stringify([...orders, orderDetails]));
        } catch (error) {
            console.error("Error saving order:", error);
        }
    };
    const handlepayment = async () => {
        const orderId = await generateOrderId();
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });

        const orderDetails = {
            order_id: orderId,
            date: date,
            time: time,
            total_amount: totalprice(),
            products: cartItems,
        };

        var options = {
            description: 'Credits towards consultation',
            image: "https://i.pinimg.com/474x/8a/b5/da/8ab5daa05f4ca1e17aac454237ffce56.jpg",
            currency: 'INR',
            key: '',
            amount: totalprice() * 100,
            name: 'ShipToShop',
            prefill: {
                email: 'gaurav.kumar@example.com',
                contact: '9191919191',
                name: 'Gaurav Kumar'
            },
            theme: { color: 'rgba(61, 180, 230,1)' }
        }
        RazorpayCheckout.open(options).then(async (data) => {
            await saveOrderToStorage(orderDetails);
            // handle success
            setModalVisible(true);
            handleClearCart();
            // Import.Alert.alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            Import.Alert.alert(`payment failed`);
        });
    }
    return (
        <>
            <Import.View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
                {cartItems?.length > 0 ?
                    <>
                        <Cartcards cartItems={cartItems} handleClearCart={handleClearCart} handleRemove={handleRemove} />
                        <Cartfooter handlepayment={handlepayment} totalprice={totalprice} />
                    </>
                    : <Import.View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Import.Text style={Import.Theme.h1}>No Items Available In Cart</Import.Text><Import.Image source={require('../../Images/cartempty.webp')} style={{ width: 200, height: 300, resizeMode: "contain" }} /></Import.View>}

            </Import.View> 
            {modalVisible && (
                <SuccessModalpopup
                    modalVisible={modalVisible}
                    handleCloseModal={handleCloseModal} 
                />
            )}
        </>
    )
}
const mapStateToProps = (state) => ({
    cartItems: state.Cartdatareducer.items,
});

const mapDispatchToProps = {
    removeFromCart,
    clearCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cartlayout);