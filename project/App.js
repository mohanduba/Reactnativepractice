import { StyleSheet, Text, View, StatusBar, TextInput, ActivityIndicator } from "react-native";
import Shoplist from "./components/Shoplist";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";

import {
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  
} from "./firebase/data";
import { FlatList } from "react-native";
import { doc } from "firebase/firestore";
import { Pressable } from "react-native";

export default function App() {
  const [title, setTitle] = useState(" ");
  const [shoppingList,setShoppingList]=useState([]);

  const addShoppingItem = async () => {
    try {
      const docRef = await addDoc(collection(db, "shopping"), {
        title: title,
        isChecked: false,
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle("");
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    getShoppingList();
  };

  const getShoppingList = async () => {
    const querySnapshot = await getDocs(collection(db, "shopping"));
   
    setShoppingList(querySnapshot?.docs?.map((doc) =>( { ...doc.data(), id: doc.id })))
   
  };

  const deleteShoppingList=async()=>{
    const querySnapshot = await getDocs(collection(db, "shopping"));
   
    querySnapshot?.docs?.map((item) => deleteDoc(doc(db, "shopping", item.id)));
    getShoppingList();
  }

  useEffect(()=>{
    getShoppingList();
  },[])

  return (
    <View style={{ marginTop: StatusBar.currentHeight, flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text style={{ fontSize: 20 }}>Shopping List</Text>
        <Text style={{ fontSize: 18 }}>{shoppingList.length}</Text>
        <Pressable onPress={deleteShoppingList}>
        <MaterialCommunityIcons name="delete" size={25} />
        </Pressable>
      </View>
      {
      shoppingList.length > 0 ?
      <FlatList 
      data={shoppingList}
      renderItem={({item})=><Shoplist title={item.title} isChecked={item.isChecked} id={item.id} getShoppingList={getShoppingList}/>}
      keyExtractor={item=>item.id}/>:
      <ActivityIndicator/>
    }
      <TextInput
        placeholder="Enter message here...."
        style={[styles.input]}
        value={title}
        onChangeText={(text) => setTitle(text)}
        onSubmitEditing={addShoppingItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginHorizontal: 40,
    marginVertical: 10,
    marginTop: "auto",
    borderRadius: 5,
  },
});
