import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import {  updateUserList } from './UserReducer';

const Update = ({ route, navigation }) => {
    const { user } = route.params;

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    
    const dispatch = useDispatch();

    const handleUpdate = () => {
        if (name === "" || email === "") {
            alert("Please enter both name and email");
            return;
        }
        dispatch(updateUserList({ id: user.id, name, email }));
        navigation.goBack(); 
    };

    return (
        <View style={{ marginTop: 50, marginHorizontal: 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 18 }}>Update User</Text>
            
            <View style={{ marginVertical: 10 }}>
                <Text>Name</Text>
                <TextInput
                    placeholder="Enter Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={{ borderWidth: 1, padding: 5 }}
                />
            </View>

            <View style={{ marginVertical: 10 }}>
                <Text>Email</Text>
                <TextInput
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={{ borderWidth: 1, padding: 5 }}
                />
            </View>

            <TouchableOpacity
                style={{
                    marginVertical: 10,
                    backgroundColor: 'lightblue',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    paddingVertical: 8,
                }}
                onPress={handleUpdate}
            >
                <Text>Update</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Update;
