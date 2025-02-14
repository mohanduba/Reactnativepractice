import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { app, db, getFirestore, collection, addDoc, getDocs, doc, updateDoc } from './firebase/Data.js';
import { TouchableOpacity } from 'react-native';

const Add = ({ navigation, route }) => {
  const [inputData, setInputData] = useState('');
  const [editItemId, setEditItemId] = useState(null); // Track the item being edited

  // Function to add new item to Firestore
  const addItem = async () => {
    try {
      const docRef = await addDoc(collection(db, "adding"), {
        inputData: inputData,
      });
      console.log("Document written with ID: ", docRef.id);
      setInputData(""); // Clear input field
    } catch (e) {
      console.error("Error adding document: ", e);
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

  // Function to update item in Firestore
  const updateItem = async () => {
    try {
      const itemRef = doc(db, "adding", editItemId); // Get reference to the specific document
      await updateDoc(itemRef, {
        inputData: inputData,
      });
      console.log("Document updated with ID: ", editItemId);
      setInputData(""); // Clear input field
      setEditItemId(null); // Clear the edit mode
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  useEffect(() => {
    if (route.params?.editData) {
      setInputData(route.params.editData.inputData);
      setEditItemId(route.params.editData.id);
    }
  }, [route.params]);

  const handleSubmit = async () => {
    if (editItemId) {
      await updateItem(); // If there's an edit item, update it
    } else {
      await addItem(); // Otherwise, add a new item
    }

    // After adding or updating, fetch and navigate to the Move screen with updated data
    const updatedItems = await getItems();
    navigation.navigate('Move', { data: updatedItems });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={inputData}
        onChangeText={setInputData}
        placeholder="Enter some data"
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingLeft: 10,
        }}
      />
      <Button title={editItemId ? "Update" : "Submit"} onPress={handleSubmit} />
      <TouchableOpacity
        onPress={async () => {
          const updatedItems = await getItems();
          navigation.navigate('Move', { data: updatedItems });
        }}
        style={{ marginTop: 10 }}>
        <Text>Move</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;
