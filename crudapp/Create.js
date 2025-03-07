import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addUserList } from './UserReducer';

const Create = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    const handleSubmit = () => {
        if (name === "" || email === "") {
            alert("Please enter both name and email");
            return;
        }
        dispatch(addUserList({ id: users.length + 1, name, email }));
        setName("");
        setEmail("");
        navigation.goBack();
    };

    return (
        <View style={{ marginTop: 50, marginHorizontal: 20 }}>
            <Text style={{ textAlign: 'center', fontSize: 18 }}>Create User</Text>
            
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
                    backgroundColor: 'lightgreen',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    paddingVertical: 8,
                }}
                onPress={handleSubmit}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Create;
