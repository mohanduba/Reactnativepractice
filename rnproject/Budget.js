import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const Budget = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    const formData = {
      username,
      password,
    };

    try {
      const response = await fetch("https://your-api-endpoint/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const result = await response.json();
      
      setIsSuccess(true);
    } catch (error) {
      
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={isLoading ? "Registering..." : "Register"}
        onPress={handleRegister}
        disabled={isLoading}
      />
      {isSuccess && <Text style={styles.success}>Registration successful!</Text>}
      {isError && <Text style={styles.error}>Registration failed. Try again.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    justifyContent: "center",
    padding: 16,
    marginTop:100
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  success: {
    color: "green",
    marginTop: 12,
  },
  error: {
    color: "red",
    marginTop: 12,
  },
});

export default Budget;

