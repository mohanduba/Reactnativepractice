import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import { Darkthemehandler } from "./Globalcolors/Darkthemehandler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "expo-dev-client";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


import Stacknavigation from "./Navigations/Stacknavigations";
import { Provider } from "react-redux";
import store from "./Redux/store";


export default function App() {
  const [palete, setPalete] = useState(); // Default mode as light
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);



  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'FiraSans-BoldItalic': require('./assets/fonts/FiraSans-BoldItalic.ttf'),
    // Corrected
  });
  useEffect(() => {
    const fetchTheme = async () => {
      const savedMode = await AsyncStorage.getItem('colomode');
      if (savedMode) {
        setPalete({ mode: savedMode });
      } else {
        setPalete({ mode: 'light' })
      }
    };
    fetchTheme();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      setIsFontsLoaded(true);
    }
  }, [fontsLoaded]);

  if (!isFontsLoaded || !palete) {
    return null; // You can show a loading screen here if desired
  }

  const updatetheme = async (newTheme) => {
    let mode = newTheme ? newTheme.mode : palete.mode === 'dark' ? 'light' : 'dark';
    await AsyncStorage.setItem('colomode', mode);
    setPalete({ mode });
  };

  return (
    <Darkthemehandler.Provider value={{ palete, updatetheme }}>
      <Provider store={store}>
        <StatusBar
          style={palete?.mode === "dark" ? "light" : "dark"}
          backgroundColor={palete?.mode === "dark" ? "#000" : "#fff"}
        />
        <Stacknavigation />
      </Provider>
    </Darkthemehandler.Provider>
  );
}
