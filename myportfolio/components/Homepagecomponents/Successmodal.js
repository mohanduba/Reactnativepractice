import React, { useState, useEffect, useRef, useContext } from "react";
import { Animated } from "react-native";
import Import from "../../Globalimports/Imports";

const Successmodal = ({ modalVisible,  handleCloseModal ,palete }) => {
    const scaleValue = useRef(new Animated.Value(1)).current; 
    useEffect(() => {
        const startAnimation = () => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(scaleValue, {
                        toValue: 1.2, // Zoom in
                        duration: 500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scaleValue, {
                        toValue: 1, // Zoom out
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        };
        if (modalVisible) {
            startAnimation();
        }
    }, [modalVisible]);
    return (
        <Import.Modal animationType="none" transparent={true} visible={modalVisible} onRequestClose={handleCloseModal} >
            <Import.View style={styles.overlay}>
                <Import.View style={[styles.container,{backgroundColor: Import.colors?.[palete.mode].pagebackgroundcolor,}]}>
                    <Import.View style={styles.iconcontainer}><Import.Feather onPress={handleCloseModal} name="x" color={Import.colors?.[palete.mode].h1Textcolor} size={22} /></Import.View>
                    <Import.View style={{ alignItems: "center" }}><Animated.Image source={require("../../Images/shakehand.png")} style={[{ width: 90, height: 90, resizeMode: "contain" }, { transform: [{ scale: scaleValue }] },]} /></Import.View>
                    <Import.View style={{ alignItems: "center" }}>
                        <Import.Text style={[Import.Theme.h2, { marginVertical: 8, textAlign: "center",color:Import.colors?.[palete.mode].h1Textcolor }]}>Thank you for emailing me! 👍</Import.Text>
                    </Import.View>
                </Import.View>
            </Import.View>
        </Import.Modal>
    );
};
export default Successmodal;

const styles = Import.StyleSheet.create({
    overlay: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)", },
    container: { width: 280, padding: 10,  borderRadius: 10, shadowColor: "rgba(193,227,249,4)", shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 12, borderColor: "rgba(193,227,249,4)", borderWidth: 1, },
    iconcontainer: { alignItems: "flex-end", },
});