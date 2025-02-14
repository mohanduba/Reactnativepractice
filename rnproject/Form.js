import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .matches(/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid Email")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required").matches(/^[a-zA-Z0-9_]+[@#$0-9]+$/,'Invalid Password'),
    }),
    onSubmit: (values) => {
      Alert.alert("Login Successful", `Email: ${values.email}`);
      console.log(values.email,values.password);
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={formik.values.email}
        onChangeText={formik.handleChange("email")} 
        onBlur={formik.handleBlur("email")}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {formik.touched.email && formik.errors.email ? (
        <Text style={styles.error}>{formik.errors.email}</Text>
      ) : null}

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password ? (
        <Text style={styles.error}>{formik.errors.password}</Text>
      ) : null}

      {/* Using TouchableOpacity for custom button */}
      <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Form;
