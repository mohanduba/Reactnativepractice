import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React, { useEffect } from 'react';
import { useLazyBranchQuery } from '../api/integrationapi/BranchApi';

export default function GetBranch() {
  const [fetchBranch, { data:alldata, error, isLoading }] = useLazyBranchQuery();

  useEffect(() => {
    fetchBranch(); 
  }, []);

  const handleFetch = () => {
    fetchBranch();
  };

  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={handleFetch} style={styles.button}>
        <Text style={styles.buttonText}>Get Data</Text>
      </TouchableOpacity>

      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error fetching data</Text>}
      {alldata && alldata.map((item,index)=>(
        <View key={index}>
          <Text>Data fetched:</Text>
          <Text>{item.branchName}</Text>
          <Text>{item.noOfEmployees}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    marginTop:20,
    padding: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
    alignItems:'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
