// components/CustomHeader.js
import React from "react";
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CustomHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Drawer menu icon */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={24} color="#333" />
      </TouchableOpacity>

      {/* Search input */}
      <TextInput
        placeholder="Search mail"
        placeholderTextColor="#888"
        style={styles.input}
      />

      {/* Profile photo */}
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }} // replace with your profile image
          style={styles.profile}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    marginHorizontal: 16,
    marginTop: 40,
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
