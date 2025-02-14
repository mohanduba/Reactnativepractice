import { useFormik } from 'formik'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

const Pracvalidate = () => {
    const formik=useFormik({
        initialValues:{
            email:'',
            password:''
        },
    validationSchema:Yup.object({
         email:Yup.string()
         .email('Invalid Email')
         .matches(/^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/).required('Email is required'),
         password:Yup.string()
         .matches(/^[A-Z]+[a-zA-Z]+[@#$0-9]+$/,'Invalid Password').min(8,'Password Must Contain 8 Characters').required('Password is required')
    }),
    onSubmit:(values)=>{
        console.log(values.email,values.password)
    }
    })
  return (
    <View style={{marginTop:50,marginHorizontal:20}}>
        <TextInput 
        placeholder='Enter Email'
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        style={{borderWidth:1,marginVertical:10}}/>
        {formik.touched.email && formik.errors.email ? (<Text style={{color:'red'}}>{formik.errors.email}</Text>):null}
        <TextInput 
        placeholder='Enter Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        style={{borderWidth:1,marginVertical:10}}/>
        {formik.touched.password && formik.errors.password && !formik.errors.email?(<Text style={{color:'red'}}>{formik.errors.password}</Text>):null}
        <TouchableOpacity onPress={formik.handleSubmit}>
            <Text>Click</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Pracvalidate