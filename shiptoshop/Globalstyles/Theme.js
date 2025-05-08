import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { colors } from "../Globalcolors/colors";

export const fonts = () => {
    const [fontsLoaded] = useFonts({
        'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
        'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
        'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
        'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'), 
    });
    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return true;
}

export const Theme = StyleSheet.create({
    h1: {
        fontSize: 18,
        color: colors.h1Textcolor,
        fontFamily: "Nunito-Bold"
    },
    h2: {
        fontSize: 14,
        color: colors.h1Textcolor,
        fontFamily: "Nunito-SemiBold"
    },
    h3: {
        fontSize: 14,
        color: colors.h1Textcolor,
        fontFamily: "Nunito-Medium"
    },
    h4: {
        fontSize: 14,
        color: colors.h1Textcolor,
        fontFamily: "Nunito-Regular"
    },
    input_styles: {
        borderWidth: 1,
        fontSize: 14,
        // color: colors.h1Textcolor,
        borderRadius: 6,
        borderColor: "rgba(224, 228, 234, 1)",
        paddingHorizontal: 10,
        // paddingVertical: 11,
        height: 50,
        fontFamily: "Nunito-SemiBold",
    },
    distancebetweenmobedges: {
        marginHorizontal: 16
    },
    buttons_fontstyle: {
        fontFamily: "Nunito-SemiBold",
        fontWeight: "500",
        fontSize: 16
    },
    error_message: {
        color: "#f41616",
        fontSize: 12,
        fontFamily: "Nunito-Regular"
    },
});