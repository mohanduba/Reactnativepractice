import React, { useCallback, useEffect, useState, useRef } from "react";
import { 
  View, Text, Image, ActivityIndicator, Button, Modal, TextInput, 
  TouchableOpacity, BackHandler, ToastAndroid 
} from "react-native";
import { gettingAsyncData, profile_data, token } from "./gettingInformationFromAsync";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ user_id: "", user_profile_pic: "" });
  
  const [backPressedOnce, setBackPressedOnce] = useState(false); // ✅ Fix: Track back press state
  const timeoutRef = useRef(null); // ✅ Fix: Store timeout reference

  const navigation = useNavigation();

  useEffect(() => {
    const checkTokenAndProfile = async () => {
      try {
        await gettingAsyncData();
        
        if (token && profile_data?.role) {
          setProfileData(profile_data);
          setEditedProfile({
            user_id: profile_data.user_id,
            user_profile_pic: profile_data.user_profile_pic,
          });
        } else {
          navigation.navigate("Loginpage");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    checkTokenAndProfile();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (navigation.isFocused()) {
          if (backPressedOnce) {
            BackHandler.exitApp();
            return true;
          } else {
            setBackPressedOnce(true);
            ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);

            // ✅ Store timeout reference to clear later
            timeoutRef.current = setTimeout(() => {
              setBackPressedOnce(false);
            }, 2000);
            return true;
          }
        }
        return false;
      };

      const backHandler = BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        backHandler.remove();
        clearTimeout(timeoutRef.current); // ✅ Clear timeout when effect cleanup
      };
    }, [backPressedOnce, navigation]) // ✅ Fix: Include dependencies
  );

  const handleSaveChanges = () => {
    setProfileData(editedProfile);
    setModalVisible(false);
  };

  console.log(editedProfile);

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />;
  }

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text>Welcome to Profile</Text>
      {profileData ? (
        <>
          <Text>{`Hello, ${profileData?.user_id}`}</Text>
          {profileData?.user_profile_pic ? (
            <Image
              source={{ uri: profileData.user_profile_pic }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
              onError={() => console.log("Image failed to load")}
            />
          ) : (
            <Text>No profile picture available</Text>
          )}
          <Button title="Edit Profile" onPress={() => setModalVisible(true)} />
        </>
      ) : (
        <Text>Loading...</Text>
      )}

      {/* Modal for Editing Profile */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <View style={{ width: 300, backgroundColor: "white", padding: 20, borderRadius: 10 }}>
            <Text>Edit Profile</Text>
            <TextInput
              placeholder="Username"
              value={editedProfile.user_id}
              onChangeText={(text) => setEditedProfile({ ...editedProfile, user_id: text })}
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            <TextInput
              placeholder="Profile Picture URL"
              value={editedProfile.user_profile_pic}
              onChangeText={(text) => setEditedProfile({ ...editedProfile, user_profile_pic: text })}
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: "red" }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSaveChanges}>
                <Text style={{ color: "green" }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;
