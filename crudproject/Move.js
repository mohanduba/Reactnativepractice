import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { db, doc, deleteDoc, getDocs, collection } from './firebase/Data.js'; // Import necessary Firestore methods

const Move = ({ route, navigation }) => {
  const { data } = route.params; // Get the list of data passed via navigation

  // Function to navigate to Add page in edit mode
  const handleEdit = (item) => {
    navigation.navigate('Add', { editData: item }); // Pass the item data to Add page for editing
  };

  // Function to handle delete
  const handleDelete = async (id) => {
    try {
      // Get the document reference
      const itemRef = doc(db, "adding", id);
      // Delete the document from Firestore
      await deleteDoc(itemRef);
      console.log(`Deleted item with ID: ${id}`);

      // Fetch updated list of items after deletion
      const updatedList = await getItems();
      navigation.navigate('Move', { data: updatedList }); // Navigate back to the Move screen with updated data
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  // Function to fetch items from Firestore
  const getItems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "adding"));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      return items; // Return the updated list of items
    } catch (e) {
      console.error("Error fetching documents: ", e);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id} // Use the document ID as a key
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              marginBottom: 10,
              borderWidth: 1,
              borderColor: 'gray',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>Submitted Data: {item.inputData}</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <TouchableOpacity onPress={() => handleEdit(item)}>
                <Feather name="edit" size={20} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <MaterialCommunityIcons name="delete" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Move;
