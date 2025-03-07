import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { GoogleSignin,GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  GoogleSignin.configure({
    webClientId: '458258833390-c27k15iltbjfmmj4luo5conl47frbc4u.apps.googleusercontent.com',
  });

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const signInResult = await GoogleSignin.signIn();
  
    // Try the new style of google-sign in result, from v13+ of that module
    idToken = signInResult.data?.idToken;
    if (!idToken) {
      // if you are using older versions of google-signin, try old style result
      idToken = signInResult.idToken;
    }
    if (!idToken) {
      throw new Error('No ID token found');
    }
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.idToken);
  
    // Sign-in the user with the credential
    const user_sign_in= auth().signInWithCredential(googleCredential);
    user_sign_in.then((user)=>{
      console.log(user)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  const signOut = async () => {
    try {
      await GoogleSignin.signOut(); // Sign out from Google
      await auth().signOut(); // Sign out from Firebase
      setUser(null); // Ensure UI updates after sign-out
  
      console.log('User signed out successfully!');
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };
  
  

  if (initializing) return null;
  
  if(!user){
    console.log(user);
    return(
      <View style={styles.container}>
         <GoogleSigninButton onPress={onGoogleButtonPress} style={{width:300,height:50}}/>
      </View>
    )
  }
  return(
    <View style={styles.container}>
      <Text>Welcome to google</Text>
      <Button title='SignOut' onPress={signOut}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
