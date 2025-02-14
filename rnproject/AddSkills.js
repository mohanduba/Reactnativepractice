import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddSkills = () => {
    const [text, setText] = useState("");
    const [tags, setTags] = useState([]);

    const addTag = () => {
        if (text.trim()) {
            setTags([...tags, text]);
            setText("");
        }
    };

    console.log('Added:', tags);

    const removeHandler = (index) => {
        const updatedTags = tags.filter((_, i) => i !== index);
        console.log('Deleted:', updatedTags);
        setTags(updatedTags);
    };

    return (
        <View style={{ marginTop: 50, marginHorizontal: 20 }}>
            <Text>Add Skills</Text>

            <View style={{ borderWidth: 1, flexDirection: 'row', flexWrap: 'wrap', gap: 10, padding: 8, width: '100%' }}>
                {tags.map((item, index) => (
                    <View key={index} style={{ flexDirection: 'row',gap:5, alignItems: 'center', borderWidth: 1, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 }}>
                        <Text>{item}</Text>
                        <TouchableOpacity onPress={() => removeHandler(index)}>
                            <Icon name="remove" size={16} color="red" />
                        </TouchableOpacity>
                    </View>
                ))}
                <TextInput
                    placeholder="Add Skills"
                    value={text}
                    onChangeText={setText}
                    onSubmitEditing={addTag}
                    style={{ flex: 1, minWidth: 100 }}
                />
            </View>
        </View>
    );
};

export default AddSkills;
