import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState(null);

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Bobby' },
    { id: 5, name: 'Char' },
    { id: 6, name: 'alif' },
    { id: 7, name: 'ali' },
  ];

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setResult('Enter a name to search');
    } else {
      // Search for a user by name (case-insensitive)
      const foundUser = users.find(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResult(foundUser ? foundUser : 'User not found');
    }
  };

  return (
    <View style={{marginTop:50}}>
      <TextInput
        placeholder="Search by name"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
      <Text>
        {result ? JSON.stringify(result) : 'Enter a name to search'}
      </Text>
    </View>
  );
};

export default Search;
