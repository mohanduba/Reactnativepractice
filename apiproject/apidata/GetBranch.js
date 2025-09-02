import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useLazyBranchQuery } from '../api/integrationapi/BranchApi';
import GetAllBranches from './GetAllBranches';

export default function GetBranch() {
  const [fetchBranch, { data: alldata, error, isLoading }] = useLazyBranchQuery();

  useEffect(() => {
    fetchBranch(); 
  }, []);

  const handleFetch = () => {
    fetchBranch();
  };

  return (
    <View style={styles.container}>
      <GetAllBranches 
        handleFetch={handleFetch} 
        isLoading={isLoading} 
        error={error} 
        alldata={alldata} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    marginTop: 20,
    padding: 20,
  },
});
