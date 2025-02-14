import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';

const Searchapi = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Search term entered by user
  const [data, setData] = useState([]); // To store fetched search results
  const [loading, setLoading] = useState(false); // To manage loading state
  const [error, setError] = useState(null); // To handle errors
  const [hasSearched, setHasSearched] = useState(false); // Flag to track if search was performed

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Please enter a search term');
      return;
    }

    setLoading(true); // Start loading
    setError(null); // Clear previous errors
    setHasSearched(true); // Mark that a search has been performed
    
    // Fetch posts based on the search term
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Filter the data based on the search term
        const filteredData = response.data.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.body.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setData(filteredData); // Store filtered data in state
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        setError(error); // Store error in state if something goes wrong
        setLoading(false); // Stop loading
      });
  };

  return (
    <View style={{ padding: 20,marginTop:50 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10 }}
        placeholder="Search Posts"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />

      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {error && <Text style={{ color: 'red' }}>Error: {error.message}</Text>}

      {/* Check if search has been performed and no data found */}
      {hasSearched && data.length === 0 && !loading && (
        <Text style={{ color: 'gray' }}>No results found</Text>
      )}

      {/* Display search results */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 50 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Searchapi;
