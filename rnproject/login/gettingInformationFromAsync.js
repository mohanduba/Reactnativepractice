import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

let token = null;
let profile_data = null;

const gettingAsyncData = async (navigation) => {
    try {
        const finding = await AsyncStorage.getItem('token'); // Await the async function
        const userdata = await AsyncStorage.getItem('userdata');

        profile_data = userdata ? JSON.parse(userdata) : null;

        if (finding !== null) {
            token = finding;
        } else {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('userdata');
            token = null;
            profile_data = null;
            navigation.navigate('login'); // Use .navigate properly
        }
    } catch (error) {
        console.error("Error in gettingAsyncData:", error);
        token = null;
    }
};

const onUserLogin = async (newToken, data, navigation) => {
    try {
        await AsyncStorage.setItem('token', newToken);
        await AsyncStorage.setItem('userdata', data);
        await gettingAsyncData(navigation);  // Ensure no errors happen here
    } catch (error) {
        console.error("Error in onUserLogin:", error);
        Alert.alert('Something Went Wrong');
    }
};

export { token, profile_data, onUserLogin, gettingAsyncData };
