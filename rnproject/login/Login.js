import { useNavigation } from '@react-navigation/native'
import { useFormik } from 'formik'
import React from 'react'
import { ActivityIndicator, Alert, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import { View } from 'react-native';
import * as Yup from 'yup'
import { generateSchema } from './Credential'
import { useLoginMutation } from '../api/apistate/LoginApi'
import { onUserLogin } from './gettingInformationFromAsync'

const Login = () => {
    const navigation=useNavigation();
 
    const [login,{isLoading}]=useLoginMutation();
    const handleSubmit = async (values) => {
        console.log('i am values:', values);
        try {
            const result = await login(values);
            // .then((res) => res.json())
            console.log('i am result:', result);
        
            if (result?.data?.result_Code === 200) {
                await onUserLogin(result?.data?.token,
                    JSON.stringify({
                        role: result?.data?.login_roleid,
                        user_id: result?.data?.login_UserId,
                        user_profile_pic: result?.data?.login_pic,
                        gotoprofile: result?.data?.gotoprofile,
                    }), navigation
                )
                
                navigation.navigate("profile")
            }else{
                Alert.alert('Invalid Credentials');
            }
        } catch (error) {
            console.log('Error while login with email/password', error);
        }
        formik.resetForm();
    };
    

    const fieldform=['email','password'];
    const validationGenerate=generateSchema(fieldform);
    const formik=useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema:validationGenerate,
        onSubmit:handleSubmit
    })
  return (
    <View style={{marginHorizontal:20}}>
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
        <TouchableOpacity onPress={formik.handleSubmit} style={{marginVertical:8,alignItems:'center',backgroundColor:'orange',paddingVertical:10}}
        >
           {isLoading ? <ActivityIndicator size="small" color="#fff" /> : <Text>Submit</Text>}
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
            <Text>New User?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('signup')}><Text> SignUp</Text></TouchableOpacity>
        </View>
    </View>
  )
}

export default Login