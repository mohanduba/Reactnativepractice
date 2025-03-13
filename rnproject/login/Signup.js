import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import React from 'react'
import { Alert, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import { View } from 'react-native';
import * as Yup from 'yup'
import { generateSchema } from './Credential';
import { RadioButton } from 'react-native-paper';
import { useSignupMutation } from '../api/apistate/SignupApi'

const Signup = () => {
    const [checked, setChecked] = React.useState('');
    const navigation=useNavigation();

    const [register,{isLoading}]=useSignupMutation();
    const handleSubmit=async(value)=>{
      if(value){
         const values={
           email:value?.email,
           password:value?.password,
           cofmpassword:value?.cofmpassword,
           login_roleid: Number(value?.login_roleid),
           firstname:'string',
           lastname:'string',
           parentid:'string'
         }
      try{
      const response=await register(values).unwrap();
      console.log('i am response',response);
      if(response?.result_Code===200){
        Alert.alert('Enter Otp');
        navigation.navigate('otpverify',{state:formik.values.email})
      } else if (response.result_Code === 404 || response.result_Message === "User Already Exists") {
        Alert.alert("User Already Exists")
    } else {
        Alert.alert("Error Occured While Signup")
    }
    }catch(error){
        console.log('i am error',error)
    }
    }
    }

    const formfields=['email','password','cofmpassword','login_roleid'];
    const validationGenerate=generateSchema(formfields);
    const formik=useFormik({
        initialValues:{
            email:'',
            password:'',
            cofmpassword:'',
            login_roleid:''
        },
        validationSchema:validationGenerate,
        onSubmit:handleSubmit
        
    })
  return (
    <View style={{marginHorizontal:20}}>
     <RadioButton.Group onValueChange={formik.handleChange('login_roleid')} value={formik.values.login_roleid}>
        <View style={{flexDirection:'row',justifyContent:'center',gap:20}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <RadioButton
        value="1"
        status={ checked === '1' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('1')}
      />
      <Text>User</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <RadioButton
        value="2"
        status={ checked === '2' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('2')}
      />
      <Text>Technician</Text>
      </View>
      </View>
      </RadioButton.Group>
      {formik.errors.login_roleid && (
        <Text style={{color:'red',textAlign:'center'}}>{formik.errors.login_roleid}</Text>
      ) }
        <Text style={{marginVertical:16}}>Email</Text>
        <TextInput 
        placeholder='Enter Email' 
        style={{borderWidth:1,}} 
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}/>
        {formik.touched.email && formik.errors.email ? (
            <Text style={{color:'red'}}>{formik.errors.email}</Text>):null
        }
        <Text style={{marginVertical:16}}>Password</Text>
        <TextInput placeholder='Enter Password' 
        style={{borderWidth:1,}}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        />
        {formik.touched.password && formik.errors.password  ? (
            <Text style={{color:'red'}}>{formik.errors.password}</Text>):null
        }
        <Text style={{marginVertical:16}}>Confirm Password</Text>
        <TextInput placeholder='Enter Password' 
        style={{borderWidth:1,}}
        value={formik.values.cofmpassword}
        onChangeText={formik.handleChange('cofmpassword')}
        onBlur={formik.handleBlur('cofmpassword')}
        />
        {formik.touched.cofmpassword && formik.errors.cofmpassword  ? (
            <Text style={{color:'red'}}>{formik.errors.cofmpassword}</Text>):null
        }
        <TouchableOpacity onPress={formik.handleSubmit} style={{marginVertical:8,alignItems:'center',backgroundColor:'orange',paddingVertical:10}}>
            <Text>Create Account</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Signup