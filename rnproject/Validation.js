import { useFormik } from 'formik';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';

const Validation = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(/^[a-z0-9]+@[a-z]+\.[a-z]+$/, 'Invalid Email')
        .email('Invalid Email')
        .required('Email is Required'),
      password: Yup.string()
        .matches(/^[a-zA-Z0-9_]+[@#$0-9]+$/, 'Invalid Password')
        .min(8, 'Password must be at least 8 characters')
        .required('Password is Required'),
    }),
    onSubmit: (values) => {
      console.log(values.email, values.password);
    },
  });

  return (
    <View style={{ marginHorizontal: 20, marginTop: 40 }}>
      {/* Email Field */}
      <Text>Email</Text>
      <TextInput
        placeholder="Enter Email"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        keyboardType="email-address"
        style={{ height: 50, width: '100%', borderWidth: 1, marginVertical: 8 }}
      />
      {formik.touched.email && formik.errors.email ? (
        <Text style={{ color: 'red' }}>{formik.errors.email}</Text>
      ) : null}

      {/* Password Field */}
      <Text>Password</Text>
      <TextInput
        placeholder="Enter Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secureTextEntry
        style={{ height: 50, width: '100%', borderWidth: 1, marginVertical: 8 }}
      />
      {formik.touched.password && formik.errors.password && !formik.errors.email ? (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      ) : null}


      {/* Submit Button */}
      <TouchableOpacity
        onPress={formik.handleSubmit}
        style={{
          alignItems: 'center',
          backgroundColor: 'purple',
          borderRadius: 5,
          marginTop: 20,
        }}
      >
        <Text style={{ color: 'white', fontSize: 20, paddingVertical: 8 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Validation;



// import React, { useState } from 'react';
// import { TouchableOpacity, Text, TextInput, View } from 'react-native';

// const Validation = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [touched, setTouched] = useState({ email: false, password: false });

//   // Validate email
//   const validateEmail = (value) => {
//     const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]+$/;
//     if (!value) {
//       return 'Email is Required';
//     } else if (!emailRegex.test(value)) {
//       return 'Invalid Email';
//     }
//     return '';
//   };

//   // Validate password
//   const validatePassword = (value) => {
//     const passwordRegex = /^[a-zA-Z0-9_]+[@#$0-9]+$/;
//     if (!value) {
//       return 'Password is Required';
//     } else if (value.length < 8) {
//       return 'Password must be at least 8 characters';
//     } else if (!passwordRegex.test(value)) {
//       return 'Invalid Password';
//     }
//     return '';
//   };

//   // Handle email change
//   const handleEmailChange = (value) => {
//     setEmail(value);
//     if (touched.email) {
//       setEmailError(validateEmail(value));
//     }
//   };

//   // Handle password change
//   const handlePasswordChange = (value) => {
//     setPassword(value);
//     if (touched.password) {
//       setPasswordError(validatePassword(value));
//     }
//   };

//   // Handle form submission
//   const handleSubmit = () => {
//     const emailValidationError = validateEmail(email);
//     const passwordValidationError = validatePassword(password);

//     setEmailError(emailValidationError);
//     setPasswordError(passwordValidationError);

//     setTouched({ email: true, password: true });

//     if (!emailValidationError && !passwordValidationError) {
//       console.log('Email:', email);
//       console.log('Password:', password);
//     }
//   };

//   return (
//     <View style={{ marginHorizontal: 20, marginTop: 40 }}>
//       {/* Email Field */}
//       <Text>Email</Text>
//       <TextInput
//         placeholder="Enter Email"
//         value={email}
//         onChangeText={handleEmailChange}
//         onBlur={() => {
//           setTouched((prev) => ({ ...prev, email: true }));
//           setEmailError(validateEmail(email));
//         }}
//         keyboardType="email-address"
//         style={{ height: 50, width: '100%', borderWidth: 1, marginVertical: 8 }}
//       />
//       {touched.email && emailError ? (
//         <Text style={{ color: 'red' }}>{emailError}</Text>
//       ) : null}       

//       {/* Password Field */}
//       <Text>Password</Text>
//       <TextInput
//         placeholder="Enter Password"
//         value={password}
//         onChangeText={handlePasswordChange}
//         onBlur={() => {
//           setTouched((prev) => ({ ...prev, password: true }));
//           setPasswordError(validatePassword(password));
//         }}
//         secureTextEntry
//         style={{ height: 50, width: '100%', borderWidth: 1, marginVertical: 8 }}
//       />
//       {touched.password && passwordError && !emailError ? (
//         <Text style={{ color: 'red' }}>{passwordError}</Text>
//       ) : null}

//       {/* Submit Button */}
//       <TouchableOpacity
//         onPress={handleSubmit}
//         style={{
//           alignItems: 'center',
//           backgroundColor: 'purple',
//           borderRadius: 5,
//           marginTop: 20,
//         }}
//       >
//         <Text style={{ color: 'white', fontSize: 20, paddingVertical: 8 }}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Validation;
