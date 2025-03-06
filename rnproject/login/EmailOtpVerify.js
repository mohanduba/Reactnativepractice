import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useSendOtpMutation } from '../api/apistate/SendOtp';
import { useSignupVerifyotpMutation } from '../api/apistate/OtpVerifyApi';
import { useNavigation, useRoute } from '@react-navigation/native';

const EmailOtpVerify = () => {
  const otpFieldsRef = useRef([]); // ✅ Holds references to OTP fields
  const Routes = useRoute();
  const navigation = useNavigation();
  const receivedData = Routes?.params?.state;
  const [errorMsg,setErrorMsg]=useState("");
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [sendotp, { isLoading }] = useSendOtpMutation();
  const [otpverify, { isSuccess }] = useSignupVerifyotpMutation();

  // ✅ Correctly updates OTP values
  const handleInputChange = (index, text) => {
    let newOtp = [...otpValues];
    newOtp[index] = text;
    setOtpValues(newOtp);

    if (text.length === 1 && index < otpValues.length - 1) {
      otpFieldsRef.current[index + 1]?.focus(); // ✅ Safe navigation with "?"
    }
  };

  // ✅ Handles backspace properly
  const handleBackspace = (index, text) => {
    if (!text && index > 0) {
      otpFieldsRef.current[index - 1]?.focus();
    }
  };

  // ✅ Ensure refs are set before trying to focus
  useEffect(() => {
    if (otpFieldsRef.current[0]) {
      otpFieldsRef.current[0].focus();
    }
  }, []);
  const handleVerification=async()=>{
     const enteredOtp=otpValues.join("");
     if(enteredOtp.length!==6){
        setErrorMsg("Please Enter 6-digit OTP");
     } else if(enteredOtp.length === 6){
         setErrorMsg('');
         const result=await otpverify({
            email:receivedData,
            otp:enteredOtp
         }).unwrap();
         if(result.result_Code===200){
            navigation.navigate('login')
         }else {
            Alert.alert("Please enter Valid OTP");
            // setOtpValues(["", "", "", "", "", ""])
        }
     }
  }

  return (
    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
      <Text style={{ textAlign: 'center' }}>Enter The OTP</Text>

      <View style={{ flexDirection: 'row', gap: 10, marginVertical: 10 }}>
        {otpValues.map((item, index) => (
          <TextInput
            key={index}
            ref={(el) => (otpFieldsRef.current[index] = el)} // ✅ Assign refs properly
            style={{ borderWidth: 1, width: 50, textAlign: 'center' }}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange(index, text)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleBackspace(index, otpValues[index]);
              }
            }}
          />
        ))}
      </View>

      <TouchableOpacity style={{ backgroundColor: '#790493', paddingVertical: 10 }} onPress={handleVerification}>
        <Text style={{ textAlign: 'center', color: '#fff' }}>Verify Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailOtpVerify;
