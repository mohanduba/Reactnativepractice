import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const GetAllBranches = ({ handleFetch, isLoading, error, alldata }) => {
  return (
    <>
      <TouchableOpacity onPress={handleFetch} style={styles.button}>
        <Text style={styles.buttonText}>Get Data</Text>
      </TouchableOpacity>

      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error fetching data</Text>}
      {alldata && alldata.map((item, index) => (
        <View key={index}>
          <Text>Data fetched:</Text>
          <Text>{item.branchName}</Text>
          <Text>{item.noOfEmployees}</Text>
        </View>
      ))}
    </>
  );
};

export default GetAllBranches;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
