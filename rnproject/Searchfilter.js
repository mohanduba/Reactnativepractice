import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Searchfilter = () => {
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
      // Filter users by name (case-insensitive)
      const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      if (filteredUsers.length > 0) {
        setResult(filteredUsers); // Display all matched users
      } else {
        setResult('User not found');
      }
    }
  };

  return (
    <View style={{ marginTop: 50,marginHorizontal:20 }}>
      <TextInput
        placeholder="Search by name"
        value={searchTerm}
        onChangeText={setSearchTerm}
        style={{ padding: 8, borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Search" onPress={handleSearch} />
      <View>
        {result ? (
          typeof result === 'string' ? (
            <Text>{result}</Text> // Display string message (like "User not found")
          ) : (
            result.map(user => (
              
              <Text key={user.id} style={{ marginBottom: 5 }}>{user.name}</Text> // Display each name on a new line
            ))
          )
        ) : (
          <Text>Enter a name to search</Text> // Default message when no result
        )}
      </View>
    </View>
  );
};

export default Searchfilter;
