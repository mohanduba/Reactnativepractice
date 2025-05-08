import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, View } from 'react-native';
import { fonts } from './Globalstyles/Theme';
import "expo-dev-client";
import Bottomtabnavigator from './Navigations/Bottomtabnavigator';
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {
  if (!fonts()) {
    return null; // Don't render anything until fonts are loaded
  }

  return (
    <>
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <StatusBar style={Platform.OS === "ios" ? "light" : "light"} backgroundColor="rgba(61, 180, 230,1)" />
          <Bottomtabnavigator />
        </View>
      </Provider>
    </>
  );
};

export default App;