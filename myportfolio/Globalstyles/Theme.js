import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


export const fonts = () => {
    const [fontsLoaded] = useFonts({
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'FiraSans-BoldItalic': require('../assets/fonts/FiraSans-BoldItalic.ttf'),
        // FiraSans-BoldItalic.ttf
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
        // color: colors.h1Textcolor,
        fontFamily: "Montserrat-Bold"
    },
    h2: {
        fontSize: 14,
        // color: colors.h1Textcolor,
        fontFamily: "Montserrat-Medium"
    },
    h3: {
        fontSize: 14,
        // color: colors.h1Textcolor,
        fontFamily: "Montserrat-Regular"
    },
    input_styles: {
        fontSize: 14,
        // color: colors.h1Textcolor,
        paddingHorizontal: 10,
        // paddingVertical: 11,
        borderColor: 'rgba(0,0,0,0.2)',
        overflow: "hidden",
        borderWidth: 1,
        backgroundColor: "white",
        shadowColor: 'rgba(0,0,0,1)',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        elevation: 2,
        borderRadius: 12,
        height: 50,
        fontFamily: "Montserrat-Regular"
    },
    distancebetweenmobedges: {
        marginHorizontal: 12
    },
    buttons_fontstyle: {
        fontWeight: "600",
        fontSize: 14,
        fontFamily: "Montserrat-Bold"
    },
    error_message: {
        color: "#f41616",
        fontSize: 12,
        fontFamily: "Sacramento-Regular"
    },
});